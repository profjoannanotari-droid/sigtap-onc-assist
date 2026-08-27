import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, ShieldCheck, AlertTriangle, Filter, FileDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  compatibilidades as basesigtap,
  getCompatibilidades,
} from "@/data/compatibilidade";
import { ProcedimentoDetail } from "@/components/ProcedimentoDetail";
import { buscarPorCodigo } from "@/data/sigtap";
import type { Procedimento } from "@/data/sigtap";
import { gerarRelatorioPDF } from "@/lib/pdfReport";
import { toast } from "@/hooks/use-toast";
import {
  atualizacaoInfo,
  mudancasProcedimentos,
  mudancasCompatibilidades,
  resumoMudancas,
} from "@/data/atualizacao";
import { Sparkles } from "lucide-react";
import ComparadorCompetencias from "@/components/ComparadorCompetencias";
import { SeletorCompetencia, useCompetencia } from "@/components/SeletorCompetencia";

interface LinhaAuditoria {
  codigo: string;
  nome: string;
  diretas: number;
  reversas: number;
  total: number;
  esperado: number;
  status: "ok" | "divergente";
  concomitantes: number;
  excludentes: number;
  compativeis: number;
}

function normalizar(codigo: string): string {
  return codigo.replace(/\D/g, "").replace(/^0+/, "");
}

export default function AuditoriaCompatibilidades() {
  const navigate = useNavigate();
  const { bases, base, competencia, setCompetencia, recarregar } = useCompetencia();
  const [busca, setBusca] = useState("");
  const [filtroStatus, setFiltroStatus] = useState<"todos" | "ok" | "divergente">("todos");
  const [selected, setSelected] = useState<Procedimento | null>(null);
  const [gerandoPdf, setGerandoPdf] = useState(false);

  const procedimentosBase = base?.procedimentos ?? [];

  const linhas: LinhaAuditoria[] = useMemo(() => {
    // Coleta todos os códigos que aparecem como chave OU como item
    const todosCodigos = new Set<string>();
    const nomesPorCodigo: Record<string, string> = {};

    for (const [chave, lista] of Object.entries(basesigtap)) {
      todosCodigos.add(normalizar(chave));
      for (const item of lista) {
        const c = normalizar(item.codigo);
        todosCodigos.add(c);
        if (!nomesPorCodigo[c]) nomesPorCodigo[c] = item.nome;
        if (!nomesPorCodigo[normalizar(chave)]) {
          // tenta achar nome desta chave em outras listas
        }
      }
    }
    // Para chaves sem nome, busca em qualquer ocorrência como item
    for (const lista of Object.values(basesigtap)) {
      for (const item of lista) {
        const c = normalizar(item.codigo);
        if (!nomesPorCodigo[c]) nomesPorCodigo[c] = item.nome;
      }
    }

    const resultado: LinhaAuditoria[] = [];
    const naCompetencia = new Map(procedimentosBase.map((p) => [normalizar(p.codigo), p]));

    for (const cod of todosCodigos) {
      const proc = naCompetencia.get(cod);
      // audita somente procedimentos existentes na competência selecionada
      if (naCompetencia.size > 0 && !proc) continue;
      const diretas = basesigtap[cod]?.length || 0;
      // Conta quantas vezes este código aparece como item em outras listas (relações reversas)
      let reversas = 0;
      for (const [chave, lista] of Object.entries(basesigtap)) {
        if (normalizar(chave) === cod) continue;
        for (const item of lista) {
          if (normalizar(item.codigo) === cod) reversas++;
        }
      }

      const retornadas = getCompatibilidades(cod);
      const total = retornadas.length;
      const esperado = diretas + reversas;

      const concomitantes = retornadas.filter((r) => r.categoria.includes("Concomitantes")).length;
      const excludentes = retornadas.filter((r) => r.categoria.includes("Excludente")).length;
      const compativeis = retornadas.filter((r) => r.categoria.includes("Compativel")).length;

      const status: "ok" | "divergente" = total >= Math.max(diretas, 1) ? "ok" : "divergente";
      resultado.push({
        codigo: cod,
        nome: proc?.nome || nomesPorCodigo[cod] || "(sem nome registrado)",
        diretas,
        reversas,
        total,
        esperado,
        status,
        concomitantes,
        excludentes,
        compativeis,
      });
    }

    return resultado.sort((a, b) => a.codigo.localeCompare(b.codigo));
  }, [procedimentosBase]);

  const filtradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return linhas.filter((l) => {
      if (filtroStatus !== "todos" && l.status !== filtroStatus) return false;
      if (!termo) return true;
      return (
        l.codigo.includes(termo) ||
        l.nome.toLowerCase().includes(termo)
      );
    });
  }, [linhas, busca, filtroStatus]);

  const stats = useMemo(() => {
    const totalProc = linhas.length;
    const comDivergencia = linhas.filter((l) => l.status === "divergente").length;
    const totalRelacoes = linhas.reduce((s, l) => s + l.total, 0);
    const totalEsperadas = linhas.reduce((s, l) => s + l.esperado, 0);
    return { totalProc, comDivergencia, totalRelacoes, totalEsperadas };
  }, [linhas]);

  function abrirDetalhe(codigo: string) {
    const proc = buscarPorCodigo(codigo);
    if (proc) setSelected(proc);
  }

  async function exportarPDF() {
    setGerandoPdf(true);
    try {
      const resumo = `Auditoria de compatibilidades de ${stats.totalProc} procedimentos do subgrupo 0304 (SIGTAP). ` +
        `Total de ${stats.totalRelacoes} relações no sistema vs ${stats.totalEsperadas} relações brutas (diretas + reversas com duplicatas) na base SIGTAP. ` +
        `${stats.comDivergencia} procedimento(s) com divergência detectada.`;
      await gerarRelatorioPDF({
        titulo: "Relatório de Auditoria de Compatibilidades SIGTAP",
        subtitulo: "Comparação sistema × base SIGTAP por procedimento",
        badges: [
          `${stats.totalProc} procedimentos`,
          `${stats.totalRelacoes} relações`,
          `${stats.comDivergencia} divergências`,
        ],
        contextoIA: { tipo: "auditoria", resumoDados: resumo },
        secoes: [
          {
            tipo: "kv",
            titulo: "Estatísticas globais",
            itens: [
              { chave: "Procedimentos analisados", valor: String(stats.totalProc) },
              { chave: "Relações no sistema", valor: String(stats.totalRelacoes) },
              { chave: "Relações brutas (SIGTAP)", valor: String(stats.totalEsperadas) },
              { chave: "Divergências", valor: String(stats.comDivergencia) },
            ],
          },
          {
            tipo: "tabela",
            titulo: "Detalhamento por procedimento",
            cabecalho: ["Código", "Nome", "Diretas", "Reversas", "Total", "C / E / Cp", "Status"],
            linhas: filtradas.map((l) => [
              l.codigo,
              l.nome,
              String(l.diretas),
              String(l.reversas),
              String(l.total),
              `${l.concomitantes} / ${l.excludentes} / ${l.compativeis}`,
              l.status === "ok" ? "OK" : "Divergente",
            ]),
          },
        ],
        nomeArquivo: `auditoria_compatibilidades`,
      });
    } catch (e) {
      toast({ title: "Erro ao gerar PDF", description: (e as Error).message, variant: "destructive" });
    } finally {
      setGerandoPdf(false);
    }
  }

  const [gerandoUpdatePdf, setGerandoUpdatePdf] = useState(false);
  async function exportarPDFAtualizacao() {
    setGerandoUpdatePdf(true);
    try {
      const totalMud =
        resumoMudancas.adicionados +
        resumoMudancas.removidos +
        resumoMudancas.valorAlterado +
        resumoMudancas.nomeAlterado +
        resumoMudancas.cidsAlterado +
        resumoMudancas.cbosAlterado +
        resumoMudancas.compatAlterado;
      const resumo =
        `Atualização SIGTAP da competência ${atualizacaoInfo.competenciaAnterior} para ${atualizacaoInfo.competencia} ` +
        `(${atualizacaoInfo.mesNome}), aplicada em ${atualizacaoInfo.dataAtualizacao}. ` +
        `Total de ${atualizacaoInfo.totalProcedimentos} procedimentos do subgrupo 0304 (oncologia). ` +
        `Mudanças detectadas: ${resumoMudancas.adicionados} novo(s), ${resumoMudancas.removidos} removido(s), ` +
        `${resumoMudancas.valorAlterado} com valor alterado, ${resumoMudancas.cidsAlterado} com CIDs alterados, ` +
        `${resumoMudancas.cbosAlterado} com CBOs alterados, ${resumoMudancas.compatAlterado} relação(ões) de compatibilidade modificada(s).`;
      const linhasMud = mudancasProcedimentos.length > 0
        ? mudancasProcedimentos.map((m) => [m.codigo, m.nome, m.tipo.toUpperCase(), m.detalhe])
        : [["—", "Nenhuma mudança em procedimentos", "—", "Procedimentos, valores, CIDs e CBOs idênticos à competência anterior"]];
      await gerarRelatorioPDF({
        titulo: `Relatório da Atualização SIGTAP ${atualizacaoInfo.mesNome}`,
        subtitulo: `Competência ${atualizacaoInfo.competenciaAnterior} → ${atualizacaoInfo.competencia}`,
        badges: [
          `${atualizacaoInfo.totalProcedimentos} procedimentos`,
          `${totalMud} mudança(s)`,
          `Atualizado em ${atualizacaoInfo.dataAtualizacao}`,
        ],
        contextoIA: { tipo: "auditoria", resumoDados: resumo },
        secoes: [
          {
            tipo: "kv",
            titulo: "Resumo da atualização",
            itens: [
              { chave: "Competência atual", valor: atualizacaoInfo.competencia },
              { chave: "Competência anterior", valor: atualizacaoInfo.competenciaAnterior },
              { chave: "Data da atualização", valor: atualizacaoInfo.dataAtualizacao },
              { chave: "Procedimentos no subgrupo 0304", valor: String(atualizacaoInfo.totalProcedimentos) },
              { chave: "Procedimentos adicionados", valor: String(resumoMudancas.adicionados) },
              { chave: "Procedimentos removidos", valor: String(resumoMudancas.removidos) },
              { chave: "Mudanças de valor SUS", valor: String(resumoMudancas.valorAlterado) },
              { chave: "Mudanças em CIDs compatíveis", valor: String(resumoMudancas.cidsAlterado) },
              { chave: "Mudanças em CBOs compatíveis", valor: String(resumoMudancas.cbosAlterado) },
              { chave: "Compatibilidades modificadas", valor: String(resumoMudancas.compatAlterado) },
            ],
          },
          {
            tipo: "tabela",
            titulo: "Mudanças em procedimentos",
            cabecalho: ["Código", "Procedimento", "Tipo", "Detalhe"],
            linhas: linhasMud,
          },
          {
            tipo: "kv",
            titulo: "Mudanças em compatibilidades",
            itens: [
              { chave: "Procedimentos com novas relações", valor: String(mudancasCompatibilidades.novosProcedimentosComCompat) },
              { chave: "Procedimentos sem relações agora", valor: String(mudancasCompatibilidades.procedimentosSemCompatAgora) },
              { chave: "Procedimentos com relações modificadas", valor: String(mudancasCompatibilidades.procedimentosComCompatModificada) },
            ],
          },
        ],
        nomeArquivo: `atualizacao_sigtap_${atualizacaoInfo.competencia.replace("/", "-")}`,
      });
    } catch (e) {
      toast({ title: "Erro ao gerar PDF", description: (e as Error).message, variant: "destructive" });
    } finally {
      setGerandoUpdatePdf(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-medical">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar
            </Button>
            <div className="min-w-0">
              <h1 className="text-base sm:text-2xl font-bold text-primary-foreground leading-tight">
                Auditoria de Compatibilidades
              </h1>
              <p className="text-primary-foreground/80 text-xs sm:text-sm mt-0.5">
                Comparação sistema × base SIGTAP por procedimento
              </p>
              <p className="text-primary-foreground/70 text-[11px] sm:text-xs mt-1">
                Área restrita ao administrador · auditoria recalculada automaticamente a cada
                atualização da tabela (competência atual: {atualizacaoInfo.competencia} ·
                atualizada em {atualizacaoInfo.dataAtualizacao})
              </p>

            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-4">
        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-muted-foreground font-medium">Procedimentos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">{stats.totalProc}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-muted-foreground font-medium">Relações no sistema</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">{stats.totalRelacoes}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-muted-foreground font-medium">Relações brutas SIGTAP</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">{stats.totalEsperadas}</p>
              <p className="text-[10px] text-muted-foreground mt-1">diretas + reversas (com duplicatas)</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-muted-foreground font-medium">Divergências</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-2xl font-bold ${stats.comDivergencia > 0 ? "text-destructive" : "text-green-600"}`}>
                {stats.comDivergencia}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Atualização da competência */}
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="min-w-0">
                <CardTitle className="text-base flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Atualização SIGTAP {atualizacaoInfo.mesNome}
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-1">
                  Competência {atualizacaoInfo.competenciaAnterior} → {atualizacaoInfo.competencia} ·
                  aplicada em {atualizacaoInfo.dataAtualizacao}
                </p>
              </div>
              <Button size="sm" onClick={exportarPDFAtualizacao} disabled={gerandoUpdatePdf}>
                {gerandoUpdatePdf ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <FileDown className="w-4 h-4 mr-1" />}
                {gerandoUpdatePdf ? "Gerando…" : "Relatório da atualização (PDF)"}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div><p className="text-xs text-muted-foreground">Adicionados</p><p className="font-semibold">{resumoMudancas.adicionados}</p></div>
            <div><p className="text-xs text-muted-foreground">Removidos</p><p className="font-semibold">{resumoMudancas.removidos}</p></div>
            <div><p className="text-xs text-muted-foreground">Valor alterado</p><p className="font-semibold">{resumoMudancas.valorAlterado}</p></div>
            <div><p className="text-xs text-muted-foreground">CIDs alterados</p><p className="font-semibold">{resumoMudancas.cidsAlterado}</p></div>
            <div><p className="text-xs text-muted-foreground">CBOs alterados</p><p className="font-semibold">{resumoMudancas.cbosAlterado}</p></div>
            <div className="col-span-2"><p className="text-xs text-muted-foreground">Compatibilidades modificadas</p><p className="font-semibold">{resumoMudancas.compatAlterado}</p></div>
            <div><p className="text-xs text-muted-foreground">Total de procedimentos</p><p className="font-semibold">{atualizacaoInfo.totalProcedimentos}</p></div>
          </CardContent>
        </Card>

        <ComparadorCompetencias />

        {/* Filtros */}
        <Card>
          <CardContent className="pt-4 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por código ou nome (ex: 304020460)"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <Select value={filtroStatus} onValueChange={(v) => setFiltroStatus(v as typeof filtroStatus)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os status</SelectItem>
                  <SelectItem value="ok">Apenas OK</SelectItem>
                  <SelectItem value="divergente">Apenas divergentes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Tabela */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-3">
            <CardTitle className="text-base">
              {filtradas.length} procedimento{filtradas.length !== 1 ? "s" : ""}
            </CardTitle>
            <Button variant="outline" size="sm" onClick={exportarPDF} disabled={gerandoPdf}>
              {gerandoPdf ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <FileDown className="w-4 h-4 mr-1" />}
              {gerandoPdf ? "Gerando…" : "Relatório PDF"}
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[110px]">Código</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead className="text-right w-[80px]">Diretas</TableHead>
                    <TableHead className="text-right w-[80px]">Reversas</TableHead>
                    <TableHead className="text-right w-[80px]">Total sistema</TableHead>
                    <TableHead className="text-center w-[180px]">Quebra (Conc/Exc/Comp)</TableHead>
                    <TableHead className="text-center w-[100px]">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtradas.map((l) => (
                    <TableRow
                      key={l.codigo}
                      className="cursor-pointer"
                      onClick={() => abrirDetalhe(l.codigo)}
                    >
                      <TableCell className="font-mono text-xs text-primary font-medium">
                        {l.codigo}
                      </TableCell>
                      <TableCell className="text-sm break-anywhere">{l.nome}</TableCell>
                      <TableCell className="text-right font-mono text-sm">{l.diretas}</TableCell>
                      <TableCell className="text-right font-mono text-sm">{l.reversas}</TableCell>
                      <TableCell className="text-right font-mono text-sm font-semibold">{l.total}</TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1 flex-wrap">
                          <Badge variant="secondary" className="text-[10px]" title="Concomitantes">
                            C {l.concomitantes}
                          </Badge>
                          <Badge variant="destructive" className="text-[10px]" title="Excludentes">
                            E {l.excludentes}
                          </Badge>
                          <Badge variant="outline" className="text-[10px]" title="Compatíveis">
                            ✓ {l.compativeis}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        {l.status === "ok" ? (
                          <Badge variant="outline" className="text-green-600 border-green-600/40">
                            <ShieldCheck className="w-3 h-3 mr-1" /> OK
                          </Badge>
                        ) : (
                          <Badge variant="destructive">
                            <AlertTriangle className="w-3 h-3 mr-1" /> Divergente
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                  {filtradas.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                        Nenhum procedimento encontrado.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <p className="text-xs text-muted-foreground">
          <strong>Diretas:</strong> entradas onde o procedimento é a chave principal.{" "}
          <strong>Reversas:</strong> entradas onde aparece como item em outros procedimentos (espelhadas
          automaticamente). <strong>Total sistema:</strong> retorno único após deduplicação por (categoria +
          código). Clique em uma linha para abrir o detalhe completo.
        </p>
      </main>

      <ProcedimentoDetail
        procedimento={selected}
        open={!!selected}
        onOpenChange={(open) => { if (!open) setSelected(null); }}
      />
    </div>
  );
}
