import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRightLeft, FileDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { gerarRelatorioPDF } from "@/lib/pdfReport";
import { listarBasesCompetencia } from "@/lib/competencias";
import { formasOrganizacao } from "@/data/formasOrganizacao";
import { type Procedimento } from "@/data/sigtap";
import { HistoricoAtualizacoes } from "@/components/HistoricoAtualizacoes";
import {
  brl,
  compararCids,
  compararProcedimentos,
  formaDoCodigo,
  nomeForma,
  rotuloMudanca as rotulo,
  type DiffProc,
  type TipoMudanca,
} from "@/lib/diffCompetencias";

export default function ComparativoCompetencias() {
  const navigate = useNavigate();
  const bases = useMemo(() => listarBasesCompetencia(), []);
  const [compA, setCompA] = useState(bases[1]?.competencia ?? bases[0]?.competencia ?? "");
  const [compB, setCompB] = useState(bases[0]?.competencia ?? "");
  const [busca, setBusca] = useState("");
  const [filtroForma, setFiltroForma] = useState("todas");
  const [filtroTipo, setFiltroTipo] = useState("todos");
  const [gerando, setGerando] = useState(false);

  const baseA = bases.find((b) => b.competencia === compA);
  const baseB = bases.find((b) => b.competencia === compB);

  const diffProcs = useMemo(
    () => (baseA && baseB ? compararProcedimentos(baseA.procedimentos, baseB.procedimentos) : []),
    [baseA, baseB],
  );
  const diffCids = useMemo(
    () => (baseA && baseB ? compararCids(baseA.procedimentos, baseB.procedimentos) : []),
    [baseA, baseB],
  );

  const procsFiltrados = useMemo(() => {
    const t = busca.trim().toLowerCase();
    return diffProcs.filter(
      (d) =>
        (filtroForma === "todas" || d.forma === filtroForma) &&
        (filtroTipo === "todos" || d.tipo === filtroTipo) &&
        (!t || d.codigo.includes(t) || d.nome.toLowerCase().includes(t)),
    );
  }, [diffProcs, busca, filtroForma, filtroTipo]);

  const cidsFiltrados = useMemo(() => {
    const t = busca.trim().toLowerCase();
    return diffCids.filter(
      (d) =>
        (filtroForma === "todas" ||
          d.formasGanhas.includes(filtroForma) ||
          d.formasPerdidas.includes(filtroForma)) &&
        (!t || d.codigo.toLowerCase().includes(t) || d.descricao.toLowerCase().includes(t)),
    );
  }, [diffCids, busca, filtroForma]);

  const porForma = useMemo(() => {
    if (!baseA || !baseB) return [];
    const contar = (procs: Procedimento[], forma: string) =>
      procs.filter((p) => formaDoCodigo(p.codigo) === forma);
    return formasOrganizacao.map((f) => {
      const a = contar(baseA.procedimentos, f.codigo);
      const b = contar(baseB.procedimentos, f.codigo);
      const cidsA = new Set(a.flatMap((p) => p.cidsCompativeis));
      const cidsB = new Set(b.flatMap((p) => p.cidsCompativeis));
      return {
        ...f,
        procA: a.length,
        procB: b.length,
        cidsA: cidsA.size,
        cidsB: cidsB.size,
        mudancas: diffProcs.filter((d) => d.forma === f.codigo).length,
      };
    });
  }, [baseA, baseB, diffProcs]);

  async function exportarPDF() {
    if (!baseA || !baseB) return;
    setGerando(true);
    try {
      await gerarRelatorioPDF({
        titulo: "Comparativo entre competências SIGTAP",
        subtitulo: `${baseA.competencia} → ${baseB.competencia} · subgrupo 0304 (Oncologia)`,
        badges: [
          `${diffProcs.length} mudanças em procedimentos`,
          `${diffCids.length} CIDs com cobertura alterada`,
        ],
        contextoIA: {
          tipo: "auditoria",
          resumoDados:
            `Comparação da base ${baseA.competencia} com ${baseB.competencia}. ` +
            `${diffProcs.length} alteração(ões) em procedimentos e ${diffCids.length} CID(s) com mudança nas ` +
            `formas de organização que os atendem. ` +
            porForma
              .filter((f) => f.mudancas > 0)
              .map((f) => `${f.nome}: ${f.mudancas} mudança(s)`)
              .join("; "),
          publicoAlvo: "Auditoria e faturamento em oncologia",
        },
        secoes: [
          {
            tipo: "tabela",
            titulo: "Panorama por forma de organização",
            cabecalho: [
              "Forma",
              "Nome",
              `Proc. ${baseA.competencia}`,
              `Proc. ${baseB.competencia}`,
              `CIDs ${baseA.competencia}`,
              `CIDs ${baseB.competencia}`,
              "Mudanças",
            ],
            linhas: porForma.map((f) => [
              f.codigo,
              f.nome,
              String(f.procA),
              String(f.procB),
              String(f.cidsA),
              String(f.cidsB),
              String(f.mudancas),
            ]),
          },
          diffProcs.length
            ? {
                tipo: "tabela" as const,
                titulo: "Mudanças por procedimento",
                cabecalho: ["Código", "Procedimento", "Forma", "Tipo", "Antes", "Depois"],
                linhas: procsFiltrados.map((d) => [
                  d.codigo,
                  d.nome,
                  nomeForma(d.forma),
                  rotulo[d.tipo],
                  d.antes,
                  d.depois,
                ]),
                larguras: [10, 22, 16, 10, 21, 21],
              }
            : {
                tipo: "paragrafo" as const,
                titulo: "Mudanças por procedimento",
                texto: "Nenhuma diferença encontrada entre as competências selecionadas.",
              },
          diffCids.length
            ? {
                tipo: "tabela" as const,
                titulo: "Mudanças por CID-10 e forma de organização",
                cabecalho: ["CID", "Descrição", "Formas antes", "Formas depois", "Ganhou", "Perdeu"],
                linhas: cidsFiltrados.map((d) => [
                  d.codigo,
                  d.descricao,
                  String(d.antes),
                  String(d.depois),
                  d.formasGanhas.map(nomeForma).join(", ") || "—",
                  d.formasPerdidas.map(nomeForma).join(", ") || "—",
                ]),
                larguras: [8, 30, 10, 10, 21, 21],
              }
            : {
                tipo: "paragrafo" as const,
                titulo: "Mudanças por CID-10",
                texto: "Nenhum CID teve alteração nas formas de organização que o atendem.",
              },
        ],
        nomeArquivo: `comparativo_${baseA.competencia.replace("/", "-")}_${baseB.competencia.replace("/", "-")}`,
      });
      toast({ title: "Relatório gerado", description: "O comparativo em PDF foi baixado." });
    } catch (e) {
      toast({ title: "Falha ao gerar o relatório", description: (e as Error).message, variant: "destructive" });
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
            <ArrowRightLeft className="w-6 h-6" /> Comparativo de Competências
          </h1>
          <p className="text-primary-foreground/80 text-xs sm:text-sm mt-1">
            O que mudou entre a base do mês atual e a anterior, por procedimento, CID-10 e forma de organização
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <Card>
          <CardHeader className="pb-3 flex-row items-start justify-between gap-2 flex-wrap">
            <CardTitle className="text-base">Competências comparadas</CardTitle>
            <Button size="sm" onClick={exportarPDF} disabled={gerando || !baseA || !baseB}>
              <FileDown className="w-4 h-4 mr-1" /> {gerando ? "Gerando..." : "Exportar PDF"}
            </Button>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label className="text-xs">Base anterior</Label>
              <Select value={compA} onValueChange={setCompA}>
                <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>
                  {bases.map((b) => (
                    <SelectItem key={b.competencia} value={b.competencia}>{b.rotulo}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Base atual</Label>
              <Select value={compB} onValueChange={setCompB}>
                <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>
                  {bases.map((b) => (
                    <SelectItem key={b.competencia} value={b.competencia}>{b.rotulo}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {baseA?.observacao && (
              <p className="text-xs text-muted-foreground sm:col-span-2">{baseA.observacao}</p>
            )}
            <div className="flex flex-wrap gap-2 sm:col-span-2">
              <Badge variant="outline">{diffProcs.length} mudança(s) em procedimentos</Badge>
              <Badge variant="outline">{diffCids.length} CID(s) com cobertura alterada</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Filtros</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3">
            <div className="space-y-1.5">
              <Label className="text-xs">Buscar</Label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                <Input
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  placeholder="Código, procedimento ou CID"
                  className="pl-8"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Forma de organização</Label>
              <Select value={filtroForma} onValueChange={setFiltroForma}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas</SelectItem>
                  {formasOrganizacao.map((f) => (
                    <SelectItem key={f.codigo} value={f.codigo}>{f.codigo} — {f.nome}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Tipo de mudança</Label>
              <Select value={filtroTipo} onValueChange={setFiltroTipo}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  {Object.entries(rotulo).map(([k, v]) => (
                    <SelectItem key={k} value={k}>{v}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="procedimentos">
          <TabsList>
            <TabsTrigger value="procedimentos">Por procedimento</TabsTrigger>
            <TabsTrigger value="cids">Por CID-10</TabsTrigger>
            <TabsTrigger value="formas">Por forma de organização</TabsTrigger>
          </TabsList>

          <TabsContent value="procedimentos">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">
                  Mudanças por procedimento ({procsFiltrados.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Código</TableHead>
                      <TableHead>Procedimento</TableHead>
                      <TableHead>Forma</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Antes</TableHead>
                      <TableHead>Depois</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {procsFiltrados.map((d, i) => (
                      <TableRow key={`${d.codigo}-${d.tipo}-${i}`}>
                        <TableCell className="font-mono text-xs">{d.codigo}</TableCell>
                        <TableCell className="text-xs">{d.nome}</TableCell>
                        <TableCell className="text-xs">{nomeForma(d.forma)}</TableCell>
                        <TableCell><Badge variant="secondary" className="text-[11px]">{rotulo[d.tipo]}</Badge></TableCell>
                        <TableCell className="text-xs text-muted-foreground">{d.antes}</TableCell>
                        <TableCell className="text-xs">{d.depois}</TableCell>
                      </TableRow>
                    ))}
                    {procsFiltrados.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-sm text-muted-foreground py-8">
                          Nenhuma diferença encontrada com os filtros atuais.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cids">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">CIDs com cobertura alterada ({cidsFiltrados.length})</CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>CID</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Formas antes</TableHead>
                      <TableHead>Formas depois</TableHead>
                      <TableHead>Ganhou</TableHead>
                      <TableHead>Perdeu</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cidsFiltrados.map((d) => (
                      <TableRow key={d.codigo}>
                        <TableCell className="font-mono text-xs">{d.codigo}</TableCell>
                        <TableCell className="text-xs">{d.descricao}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">{d.antes}</TableCell>
                        <TableCell className="text-xs">{d.depois}</TableCell>
                        <TableCell className="text-xs">{d.formasGanhas.map(nomeForma).join(", ") || "—"}</TableCell>
                        <TableCell className="text-xs">{d.formasPerdidas.map(nomeForma).join(", ") || "—"}</TableCell>
                      </TableRow>
                    ))}
                    {cidsFiltrados.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-sm text-muted-foreground py-8">
                          Nenhum CID teve mudança nas formas de organização.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="formas">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Panorama por forma de organização</CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Forma</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Proc. {compA}</TableHead>
                      <TableHead>Proc. {compB}</TableHead>
                      <TableHead>CIDs {compA}</TableHead>
                      <TableHead>CIDs {compB}</TableHead>
                      <TableHead>Mudanças</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {porForma.map((f) => (
                      <TableRow key={f.codigo}>
                        <TableCell className="font-mono text-xs">{f.codigo}</TableCell>
                        <TableCell className="text-xs">{f.nome}</TableCell>
                        <TableCell className="text-xs">{f.procA}</TableCell>
                        <TableCell className="text-xs">{f.procB}</TableCell>
                        <TableCell className="text-xs">{f.cidsA}</TableCell>
                        <TableCell className="text-xs">{f.cidsB}</TableCell>
                        <TableCell>
                          <Badge variant={f.mudancas > 0 ? "default" : "secondary"} className="text-[11px]">
                            {f.mudancas}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
