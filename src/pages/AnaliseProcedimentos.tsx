import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check, FileDown, Grid3x3, Search, X, Table2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { gerarRelatorioPDF } from "@/lib/pdfReport";
import { cidsOnco, listarProcedimentos, capitulosCid, type Procedimento } from "@/data/sigtap";
import { RelatorioCobertura } from "@/components/RelatorioCobertura";
import { CidsForaSigtap } from "@/components/CidsForaSigtap";
import { cidsAusentesSigtap, fonteCidOficial, gruposNeoplasia } from "@/data/cidAusentesSigtap";
import { formasOrganizacao } from "@/data/formasOrganizacao";

export { formasOrganizacao };


const normCid = (v: string) => v.toUpperCase().replace(/[^A-Z0-9]/g, "");

interface LinhaAnalise {
  codigo: string;
  descricao: string;
  cobertura: Record<string, number>; // subgrupo -> qtd procedimentos
  totalProcedimentos: number;
  faltantes: string[]; // subgrupos sem código
}

function construirMatriz(procedimentos: Procedimento[]): LinhaAnalise[] {
  // index: cid normalizado -> set de subgrupos
  const mapa = new Map<string, Record<string, number>>();
  for (const cid of cidsOnco) mapa.set(normCid(cid.codigo), {});

  for (const p of procedimentos) {
    for (const c of p.cidsCompativeis) {
      const cn = normCid(c);
      // casa com o CID exato e também com filhos (ex.: C50 cobre C500..C509)
      for (const [chave, cobertura] of mapa) {
        if (chave === cn || chave.startsWith(cn) || cn.startsWith(chave)) {
          cobertura[p.subgrupo] = (cobertura[p.subgrupo] ?? 0) + 1;
        }
      }
    }
  }

  return cidsOnco.map((cid) => {
    const cobertura = mapa.get(normCid(cid.codigo)) ?? {};
    const faltantes = formasOrganizacao.filter((f) => !cobertura[f.codigo]).map((f) => f.codigo);
    const totalProcedimentos = Object.values(cobertura).reduce((a, b) => a + b, 0);
    return { codigo: cid.codigo, descricao: cid.descricao, cobertura, totalProcedimentos, faltantes };
  });
}

export default function AnaliseProcedimentos() {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");
  const [capitulo, setCapitulo] = useState<string>("todos");
  const [forma, setForma] = useState<string>("todas");
  const [modo, setModo] = useState<"lacunas" | "matriz">("lacunas");
  const [gerando, setGerando] = useState(false);

  const matriz = useMemo(() => construirMatriz(listarProcedimentos()), []);

  const filtradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    const cap = capitulosCid.find((c) => c.codigo === capitulo);
    return matriz.filter((l) => {
      if (termo && !(l.codigo.toLowerCase().includes(termo) || l.descricao.toLowerCase().includes(termo))) return false;
      if (cap && !cap.prefixos.some((p) => normCid(l.codigo).startsWith(normCid(p)))) return false;
      if (modo === "lacunas") {
        if (forma === "todas") return l.faltantes.length > 0;
        return l.faltantes.includes(forma);
      }
      if (forma !== "todas" && !l.cobertura[forma] && !l.faltantes.includes(forma)) return false;
      return true;
    });
  }, [matriz, busca, capitulo, forma, modo]);

  const resumoPorForma = useMemo(
    () =>
      formasOrganizacao.map((f) => {
        const semCodigo = matriz.filter((l) => l.faltantes.includes(f.codigo)).length;
        return { ...f, semCodigo, comCodigo: matriz.length - semCodigo };
      }),
    [matriz],
  );

  const semNenhum = useMemo(() => matriz.filter((l) => l.totalProcedimentos === 0), [matriz]);

  function exportarCSV() {
    const header = ["CID", "Descrição", ...formasOrganizacao.map((f) => `${f.curto} ${f.nome}`), "Formas sem código"];
    const linhas = filtradas.map((l) => [
      l.codigo,
      `"${l.descricao.replace(/"/g, '""')}"`,
      ...formasOrganizacao.map((f) => (l.cobertura[f.codigo] ? String(l.cobertura[f.codigo]) : "0")),
      l.faltantes.map((c) => formasOrganizacao.find((f) => f.codigo === c)?.curto).join(" / "),
    ]);
    const csv = [header.join(";"), ...linhas.map((r) => r.join(";"))].join("\n");
    const url = URL.createObjectURL(new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `analise-procedimentos-cid-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function exportarPDF() {
    if (filtradas.length === 0) {
      toast({ title: "Nada para exportar", description: "Ajuste os filtros para obter resultados." });
      return;
    }
    setGerando(true);
    try {
      const formaSel = formasOrganizacao.find((f) => f.codigo === forma);
      const amostra = filtradas;
      const ausentesPorGrupo = (["maligna", "in_situ", "incerta"] as const).map((g) => ({
        nome: gruposNeoplasia[g],
        qtd: cidsAusentesSigtap.filter((c) => c.grupo === g).length,
      }));
      const resumo =
        `Análise de cobertura de CID-10 por forma de organização do subgrupo 0304 (SIGTAP). ` +
        `${matriz.length} CIDs oncológicos analisados contra ${listarProcedimentos().length} procedimentos. ` +
        `Filtro: ${modo === "lacunas" ? "somente lacunas" : "matriz completa"}${formaSel ? `, forma ${formaSel.curto} ${formaSel.nome}` : ", todas as formas"}. ` +
        `${filtradas.length} CIDs listados. ` +
        `Lacunas por forma: ${resumoPorForma.map((f) => `${f.curto} ${f.nome}: ${f.semCodigo} CIDs sem código`).join("; ")}. ` +
        `${semNenhum.length} CIDs não possuem qualquer procedimento do subgrupo 0304. ` +
        `Confronto com a fonte oficial ${fonteCidOficial.nome} (universo ${fonteCidOficial.universo} códigos, escopo ${fonteCidOficial.escopo}): ` +
        `${cidsAusentesSigtap.length} códigos oncológicos oficiais sequer constam da tabela SIGTAP ` +
        `(${ausentesPorGrupo.map((g) => `${g.nome}: ${g.qtd}`).join("; ")}).`;

      await gerarRelatorioPDF({
        titulo: "Análise de Procedimentos por Forma de Organização",
        subtitulo: "Cobertura de CID-10 no subgrupo 0304 (Tratamento em Oncologia) e identificação de lacunas",
        badges: [
          `${filtradas.length} CIDs listados`,
          modo === "lacunas" ? "Somente lacunas" : "Matriz completa",
          formaSel ? `${formaSel.curto} ${formaSel.nome}` : "Todas as formas",
          capitulo !== "todos" ? capitulo : "Todos os capítulos",
        ],
        contextoIA: { tipo: "auditoria", resumoDados: resumo, publicoAlvo: "Auditoria e faturamento em oncologia (SUS)" },
        secoes: [
          {
            tipo: "tabela",
            titulo: "Resumo de cobertura por forma de organização",
            cabecalho: ["Código", "Forma de organização", "CIDs com código", "CIDs sem código"],
            linhas: resumoPorForma.map((f) => [f.curto, f.nome, String(f.comCodigo), String(f.semCodigo)]),
          },
          {
            tipo: "tabela",
            titulo: modo === "lacunas" ? "CIDs sem código nas formas de organização" : "Matriz CID × forma de organização",
            cabecalho: ["CID", "Descrição", "Formas sem código"],
            linhas: amostra.map((l) => [
              l.codigo,
              l.descricao,
              l.faltantes.length === formasOrganizacao.length
                ? "TODAS (sem procedimento no 0304)"
                : l.faltantes.map((c) => formasOrganizacao.find((f) => f.codigo === c)?.curto).join(", ") || "—",
            ]),
          },
          { tipo: "paragrafo" as const, texto: `Relação completa: ${filtradas.length} CID(s) listados.` },
          {
            tipo: "paragrafo" as const,
            texto:
              `Confronto com fonte oficial — ${fonteCidOficial.nome} (${fonteCidOficial.escopo}), ` +
              `universo de ${fonteCidOficial.universo} códigos oncológicos. Dos códigos oficiais, ` +
              `${cidsAusentesSigtap.length} não constam da base de compatibilidade do subgrupo 0304 da tabela SIGTAP, ` +
              `configurando ausência absoluta de código de tratamento oncológico para esses diagnósticos.`,
          },
          {
            tipo: "tabela" as const,
            titulo: "CIDs oncológicos oficiais ausentes da tabela SIGTAP — síntese por grupo",
            cabecalho: ["Grupo (CID-10)", "Ausentes"],
            linhas: (["maligna", "in_situ", "incerta"] as const).map((g) => [
              gruposNeoplasia[g],
              String(cidsAusentesSigtap.filter((c) => c.grupo === g).length),
            ]),
          },
          {
            tipo: "tabela" as const,
            titulo: "Relação completa dos CIDs oncológicos ausentes da tabela SIGTAP",
            cabecalho: ["CID-10", "Descrição oficial", "Grupo"],
            linhas: cidsAusentesSigtap.map((c) => [c.codigo, c.descricao, gruposNeoplasia[c.grupo]]),
          },
        ],
        nomeArquivo: `analise-procedimentos-${new Date().toISOString().slice(0, 10)}`,
      });
    } finally {
      setGerando(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-medical">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 mb-3 h-8 px-2"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
          </Button>
          <h1 className="text-lg sm:text-2xl font-bold text-primary-foreground flex items-center gap-2">
            <Grid3x3 className="w-6 h-6" /> Análise de Procedimentos
          </h1>
          <p className="text-primary-foreground/80 text-xs sm:text-sm mt-1">
            Cobertura de CID-10 pelas formas de organização do subgrupo 0304 e relatório de lacunas
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <CidsForaSigtap
          semProcedimento={semNenhum.map((l) => ({ codigo: l.codigo, descricao: l.descricao }))}
          totalCidsBase={matriz.length}
        />

        <RelatorioCobertura linhas={matriz} />

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Cobertura por forma de organização</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {resumoPorForma.map((f) => (
              <button
                key={f.codigo}
                onClick={() => {
                  setForma(f.codigo);
                  setModo("lacunas");
                }}
                className={`text-left rounded-lg border p-3 transition-colors hover:border-primary ${
                  forma === f.codigo ? "border-primary bg-accent/40" : "border-border"
                }`}
              >
                <p className="text-xs font-mono text-muted-foreground">{f.curto}</p>
                <p className="text-xs font-medium leading-tight mt-0.5">{f.nome}</p>
                <p className="text-sm mt-2">
                  <span className="font-semibold text-destructive">{f.semCodigo}</span>
                  <span className="text-muted-foreground text-xs"> CIDs sem código</span>
                </p>
              </button>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Filtros do relatório</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-1.5">
              <Label className="text-xs">Buscar CID</Label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                <Input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="C50 ou mama" className="pl-8" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Capítulo / grupo</Label>
              <Select value={capitulo} onValueChange={setCapitulo}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="todos">Todos</SelectItem>
                  {capitulosCid.map((c) => (
                    <SelectItem key={c.codigo} value={c.codigo}>{c.codigo} — {c.nome}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Forma de organização</Label>
              <Select value={forma} onValueChange={setForma}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="todas">Todas</SelectItem>
                  {formasOrganizacao.map((f) => (
                    <SelectItem key={f.codigo} value={f.codigo}>{f.curto} — {f.nome}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Visualização</Label>
              <Select value={modo} onValueChange={(v) => setModo(v as "lacunas" | "matriz")}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="lacunas">Somente CIDs sem código</SelectItem>
                  <SelectItem value="matriz">Matriz completa CID × forma</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3 flex-row items-center justify-between gap-2 flex-wrap">
            <CardTitle className="text-base flex items-center gap-2">
              <Table2 className="w-4 h-4" />
              {filtradas.length} CID(s) {modo === "lacunas" ? "com lacuna" : "listados"}
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={exportarCSV}>
                <FileDown className="w-4 h-4 mr-1" /> CSV
              </Button>
              <Button size="sm" onClick={exportarPDF} disabled={gerando}>
                <FileDown className="w-4 h-4 mr-1" /> {gerando ? "Gerando..." : "Relatório PDF"}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-24">CID</TableHead>
                  <TableHead className="min-w-[220px]">Descrição</TableHead>
                  {formasOrganizacao.map((f) => (
                    <TableHead key={f.codigo} className="text-center text-[10px] leading-tight w-16">
                      <span className="font-mono block">{f.curto}</span>
                      <span className="text-muted-foreground">{f.nome.split(" ")[0]}</span>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtradas.slice(0, 400).map((l) => (
                  <TableRow key={l.codigo}>
                    <TableCell className="font-mono text-xs">{l.codigo}</TableCell>
                    <TableCell className="text-xs">
                      {l.descricao}
                      {l.totalProcedimentos === 0 && (
                        <Badge variant="destructive" className="ml-2 text-[10px]">sem procedimento no 0304</Badge>
                      )}
                    </TableCell>
                    {formasOrganizacao.map((f) => (
                      <TableCell key={f.codigo} className="text-center">
                        {l.cobertura[f.codigo] ? (
                          <span className="inline-flex items-center gap-0.5 text-xs text-primary">
                            <Check className="w-3 h-3" />
                            {l.cobertura[f.codigo]}
                          </span>
                        ) : (
                          <X className="w-3.5 h-3.5 text-destructive inline" />
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                {filtradas.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={12} className="text-center text-sm text-muted-foreground py-8">
                      Nenhum CID encontrado com os filtros atuais.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            {filtradas.length > 400 && (
              <p className="text-xs text-muted-foreground mt-3">
                Exibindo os primeiros 400 de {filtradas.length}. Use o CSV para a relação completa.
              </p>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
