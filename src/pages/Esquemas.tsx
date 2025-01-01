import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Pill, FileText, Hash, ClipboardList, FileDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { filtrarProcedimentos, filtrarCids, listarProcedimentos, cbosNomes, type Procedimento, type CID } from "@/data/sigtap";
import { EsquemasTerapeuticos } from "@/components/EsquemasTerapeuticos";
import { cidsFormatados, procedimentoCompativelComCid, procedimentoCompativelComEsquema } from "@/lib/esquemaBusca";
import { gerarRelatorioPDF } from "@/lib/pdfReport";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TODOS_CBOS = "__todos__";

function rotuloCbo(codigo: string) {
  return `${codigo} - ${cbosNomes[codigo] ?? "CBO"}`;
}

const formatarValor = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

interface ProcCardProps {
  procedimento: Procedimento;
  cid?: CID | null;
  onRemover?: () => void;
}

function ProcedimentoCardEsquema({ procedimento, cid, onRemover }: ProcCardProps) {
  const [gerandoPdf, setGerandoPdf] = useState(false);

  async function exportarPDFProc() {
    setGerandoPdf(true);
    try {
      const cidsTxt = cidsFormatados(procedimento.cidsCompativeis);
      const resumo =
        `Procedimento SIGTAP ${procedimento.codigo} - ${procedimento.nome}. ` +
        `Valor SUS: ${formatarValor(procedimento.valor)}. ` +
        (cid ? `Contexto: CID-10 ${cid.codigo} (${cid.descricao}). ` : "") +
        `CIDs compatíveis: ${cidsTxt}. ` +
        (procedimento.descricao ? `Descrição: ${procedimento.descricao}` : "");
      await gerarRelatorioPDF({
        titulo: "Relatório do Procedimento Oncológico",
        subtitulo: `${procedimento.codigo} · ${procedimento.nome}`,
        badges: [
          procedimento.codigo,
          formatarValor(procedimento.valor),
          cid ? `CID ${cid.codigo}` : "",
        ].filter(Boolean) as string[],
        contextoIA: { tipo: "esquemas", resumoDados: resumo },
        secoes: [
          {
            tipo: "kv",
            titulo: "Identificação",
            itens: [
              { chave: "Código SIGTAP", valor: procedimento.codigo },
              { chave: "Procedimento", valor: procedimento.nome },
              { chave: "Valor SUS", valor: formatarValor(procedimento.valor) },
              ...(cid ? [{ chave: "CID-10 pesquisado", valor: `${cid.codigo} - ${cid.descricao}` }] : []),
            ],
          },
          ...(procedimento.descricao
            ? [{ tipo: "paragrafo" as const, titulo: "Descrição oficial", texto: procedimento.descricao }]
            : []),
          {
            tipo: "paragrafo",
            titulo: "CIDs compatíveis",
            texto: cidsTxt,
          },
        ],
        nomeArquivo: `procedimento_${procedimento.codigo}`,
      });
    } catch (e) {
      toast({ title: "Erro ao gerar PDF", description: (e as Error).message, variant: "destructive" });
    } finally {
      setGerandoPdf(false);
    }
  }

  return (
    <Card className="shadow-card">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-2">
          <Badge variant="outline" className="font-mono text-xs shrink-0 mt-0.5">{procedimento.codigo}</Badge>
          <div className="min-w-0 flex-1">
            <CardTitle className="text-sm sm:text-base leading-tight break-anywhere">
              {procedimento.nome}
            </CardTitle>
            {procedimento.descricao && (
              <p className="text-xs text-muted-foreground mt-1 line-clamp-3 whitespace-pre-wrap">
                {procedimento.descricao}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <Badge variant="secondary" className="text-[10px]">{formatarValor(procedimento.valor)}</Badge>
              <span className="text-[11px] text-muted-foreground break-anywhere">
                CIDs: {cidsFormatados(procedimento.cidsCompativeis)}
              </span>
              {procedimento.cbosCompativeis?.length > 0 && (
                <span className="text-[11px] text-muted-foreground break-anywhere w-full">
                  CBOs: {procedimento.cbosCompativeis.map((c) => `${c} (${cbosNomes[c] ?? "—"})`).join(", ")}
                </span>
              )}
              {(procedimento.idadeMinima || procedimento.idadeMaxima || procedimento.sexo) && (
                <span className="text-[11px] text-muted-foreground break-anywhere w-full">
                  Idade: {procedimento.idadeMinima || "—"} a {procedimento.idadeMaxima || "—"}
                  {procedimento.sexo ? ` · Sexo: ${procedimento.sexo}` : ""}
                </span>
              )}
            </div>
          </div>
          {onRemover && (
            <button
              type="button"
              onClick={onRemover}
              className="ml-auto text-[11px] text-muted-foreground hover:text-foreground shrink-0"
            >
              remover
            </button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <EsquemasTerapeuticos
          procedimento={procedimento}
          cid={cid?.codigo}
          cidDescricao={cid?.descricao}
        />
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={exportarPDFProc}
          disabled={gerandoPdf}
        >
          {gerandoPdf ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <FileDown className="w-4 h-4 mr-2" />}
          {gerandoPdf ? "Gerando relatório…" : "Exportar PDF deste procedimento"}
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Esquemas() {
  const navigate = useNavigate();

  const [tab, setTab] = useState<"procedimento" | "cid" | "esquema">("procedimento");

  // Busca por procedimento (código/nome)
  const [procQuery, setProcQuery] = useState("");
  const [procSelecionado, setProcSelecionado] = useState<Procedimento | null>(null);
  const [showProcSug, setShowProcSug] = useState(false);
  const procWrapRef = useRef<HTMLDivElement>(null);

  // Busca por CID
  const [cidQuery, setCidQuery] = useState("");
  const [cidSelecionado, setCidSelecionado] = useState<CID | null>(null);
  const [showCidSug, setShowCidSug] = useState(false);
  const cidWrapRef = useRef<HTMLDivElement>(null);

  // Busca por esquema terapêutico
  const [esquemaQuery, setEsquemaQuery] = useState("");
  const [esquemaAplicado, setEsquemaAplicado] = useState("");

  const [gerandoPdfBusca, setGerandoPdfBusca] = useState(false);

  // Filtro por CBO compatível
  const [cboFiltroCid, setCboFiltroCid] = useState<string>(TODOS_CBOS);
  const [cboFiltroEsquema, setCboFiltroEsquema] = useState<string>(TODOS_CBOS);

  const procSugestoes = useMemo(
    () => (procQuery.trim().length >= 2 ? filtrarProcedimentos(procQuery).slice(0, 10) : []),
    [procQuery],
  );

  const cidSugestoes = useMemo(
    () => (cidQuery.trim().length >= 1 ? filtrarCids(cidQuery).slice(0, 10) : []),
    [cidQuery],
  );

  const procsDoCidBase = useMemo(() => {
    if (!cidSelecionado) return [] as Procedimento[];
    return listarProcedimentos().filter((p) => procedimentoCompativelComCid(p, cidSelecionado));
  }, [cidSelecionado]);

  const cbosDoCid = useMemo(() => {
    const set = new Set<string>();
    procsDoCidBase.forEach((p) => p.cbosCompativeis?.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, [procsDoCidBase]);

  const procsDoCid = useMemo(() => {
    const filtrados = cboFiltroCid === TODOS_CBOS
      ? procsDoCidBase
      : procsDoCidBase.filter((p) => p.cbosCompativeis?.includes(cboFiltroCid));
    return filtrados.slice(0, 50);
  }, [procsDoCidBase, cboFiltroCid]);

  const procsDoEsquemaBase = useMemo(() => {
    const termo = esquemaAplicado.trim();
    if (termo.length < 2) return [] as Procedimento[];
    return listarProcedimentos().filter((p) => procedimentoCompativelComEsquema(p, termo));
  }, [esquemaAplicado]);

  const cbosDoEsquema = useMemo(() => {
    const set = new Set<string>();
    procsDoEsquemaBase.forEach((p) => p.cbosCompativeis?.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, [procsDoEsquemaBase]);

  const procsDoEsquema = useMemo(() => {
    const filtrados = cboFiltroEsquema === TODOS_CBOS
      ? procsDoEsquemaBase
      : procsDoEsquemaBase.filter((p) => p.cbosCompativeis?.includes(cboFiltroEsquema));
    return filtrados.slice(0, 50);
  }, [procsDoEsquemaBase, cboFiltroEsquema]);


  useEffect(() => {
    function handle(e: MouseEvent) {
      if (procWrapRef.current && !procWrapRef.current.contains(e.target as Node)) setShowProcSug(false);
      if (cidWrapRef.current && !cidWrapRef.current.contains(e.target as Node)) setShowCidSug(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  useEffect(() => { setCboFiltroCid(TODOS_CBOS); }, [cidSelecionado]);
  useEffect(() => { setCboFiltroEsquema(TODOS_CBOS); }, [esquemaAplicado]);

  async function exportarPDFBusca(
    titulo: string,
    subtitulo: string,
    badges: string[],
    procs: Procedimento[],
    resumoDados: string,
    nomeArquivo: string,
  ) {
    setGerandoPdfBusca(true);
    try {
      await gerarRelatorioPDF({
        titulo,
        subtitulo,
        badges,
        contextoIA: { tipo: "esquemas", resumoDados },
        secoes: [
          {
            tipo: "tabela",
            titulo: `Procedimentos compatíveis (${procs.length})`,
            cabecalho: ["Código", "Procedimento", "Valor", "CIDs compatíveis"],
            linhas: procs.map((p) => [
              p.codigo,
              p.nome,
              formatarValor(p.valor),
              cidsFormatados(p.cidsCompativeis),
            ]),
          },
        ],
        nomeArquivo,
      });
    } catch (e) {
      toast({ title: "Erro ao gerar PDF", description: (e as Error).message, variant: "destructive" });
    } finally {
      setGerandoPdfBusca(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-medical">
        <div className="container mx-auto px-4 py-5 flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
          </Button>
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-primary-foreground/15 flex items-center justify-center">
              <Pill className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-xl font-bold text-primary-foreground leading-tight">
                Esquemas Terapêuticos por Procedimento
              </h1>
              <p className="text-primary-foreground/80 text-xs">
                Cruza procedimento SIGTAP com PCDT (MS/Conitec) e guidelines (NCCN/ESMO/ASCO)
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Search className="w-4 h-4 text-primary" /> Selecionar procedimento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={tab} onValueChange={(v) => setTab(v as "procedimento" | "cid" | "esquema")}>
              <TabsList className="w-full mb-4 grid grid-cols-3">
                <TabsTrigger value="procedimento" className="flex-1 text-xs">
                  <Hash className="w-3.5 h-3.5 mr-1" /> Por código/nome
                </TabsTrigger>
                <TabsTrigger value="cid" className="flex-1 text-xs">
                  <FileText className="w-3.5 h-3.5 mr-1" /> A partir do CID-10
                </TabsTrigger>
                <TabsTrigger value="esquema" className="flex-1 text-xs">
                  <ClipboardList className="w-3.5 h-3.5 mr-1" /> Por esquema
                </TabsTrigger>
              </TabsList>

              <TabsContent value="procedimento" className="space-y-3">
                <div className="relative" ref={procWrapRef}>
                  <Label className="text-sm">Código ou nome do procedimento</Label>
                  <Input
                    className="h-11 mt-1"
                    placeholder="Ex: 304010111 ou radioterapia, quimioterapia…"
                    value={procQuery}
                    onChange={(e) => {
                      setProcQuery(e.target.value);
                      setShowProcSug(true);
                    }}
                    onFocus={() => procQuery.length >= 2 && setShowProcSug(true)}
                  />
                  {showProcSug && procSugestoes.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-md shadow-elevated max-h-72 overflow-auto">
                      {procSugestoes.map((p) => (
                        <button
                          key={p.codigo}
                          type="button"
                          onClick={() => {
                            setProcSelecionado(p);
                            setProcQuery("");
                            setShowProcSug(false);
                          }}
                          className="w-full px-3 py-2 text-left hover:bg-secondary border-b border-border last:border-0"
                        >
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="font-mono text-[10px] shrink-0">{p.codigo}</Badge>
                            <span className="text-xs text-foreground line-clamp-1">{p.nome}</span>
                            <Badge variant="secondary" className="text-[10px] ml-auto">{formatarValor(p.valor)}</Badge>
                          </div>
                          <p className="text-[11px] text-muted-foreground mt-1 line-clamp-1">
                            CIDs compatíveis: {cidsFormatados(p.cidsCompativeis)}
                          </p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="cid" className="space-y-3">
                <div className="relative" ref={cidWrapRef}>
                  <Label className="text-sm">CID-10</Label>
                  <Input
                    className="h-11 mt-1"
                    placeholder="Ex: C50, mama, pulmão…"
                    value={cidSelecionado ? `${cidSelecionado.codigo} - ${cidSelecionado.descricao}` : cidQuery}
                    onChange={(e) => {
                      setCidQuery(e.target.value);
                      setCidSelecionado(null);
                      setShowCidSug(true);
                    }}
                    onFocus={() => setShowCidSug(true)}
                  />
                  {showCidSug && cidSugestoes.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-md shadow-elevated max-h-60 overflow-auto">
                      {cidSugestoes.map((c) => (
                        <button
                          key={c.codigo}
                          type="button"
                          onClick={() => {
                            setCidSelecionado(c);
                            setCidQuery("");
                            setShowCidSug(false);
                          }}
                          className="w-full px-3 py-2 text-left hover:bg-secondary border-b border-border last:border-0 flex items-center gap-2"
                        >
                          <span className="font-mono text-xs font-semibold text-primary">{c.codigo}</span>
                          <span className="text-xs text-foreground">{c.descricao}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="esquema" className="space-y-3">
                <div>
                  <Label className="text-sm">Nome do esquema, droga ou indicação</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      className="h-11 flex-1"
                      placeholder="Ex: FOLFOX, AC-T, bortezomibe, R-CHOP, pulmão…"
                      value={esquemaQuery}
                      onChange={(e) => setEsquemaQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") setEsquemaAplicado(esquemaQuery);
                      }}
                    />
                    <Button onClick={() => setEsquemaAplicado(esquemaQuery)} className="h-11">
                      <Search className="w-4 h-4 mr-1" /> Buscar
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Resultado tab procedimento (único) */}
        {tab === "procedimento" && procSelecionado && (
          <ProcedimentoCardEsquema
            procedimento={procSelecionado}
            onRemover={() => setProcSelecionado(null)}
          />
        )}

        {/* Resultados tab CID — todos os procedimentos como cards */}
        {tab === "cid" && cidSelecionado && (
          <>
            <Card className="shadow-card">
              <CardContent className="pt-4 pb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <Label className="text-xs sm:text-sm shrink-0">Filtrar por CBO compatível</Label>
                <Select value={cboFiltroCid} onValueChange={setCboFiltroCid}>
                  <SelectTrigger className="h-9 sm:max-w-md">
                    <SelectValue placeholder="Todos os CBOs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={TODOS_CBOS}>Todos os CBOs ({procsDoCidBase.length})</SelectItem>
                    {cbosDoCid.map((c) => (
                      <SelectItem key={c} value={c}>{rotuloCbo(c)}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="text-[11px] text-muted-foreground sm:ml-auto">
                  Exibindo {procsDoCid.length} de {procsDoCidBase.length}
                </span>
              </CardContent>
            </Card>
            {procsDoCid.length === 0 && (
              <p className="text-xs text-muted-foreground">Nenhum procedimento SIGTAP compatível encontrado.</p>
            )}
            {procsDoCid.map((p) => (
              <ProcedimentoCardEsquema key={p.codigo} procedimento={p} cid={cidSelecionado} />
            ))}
            {procsDoCid.length > 0 && (
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <Button
                    variant="outline"
                    className="w-full"
                    disabled={gerandoPdfBusca}
                    onClick={() =>
                      exportarPDFBusca(
                        "Relatório de Procedimentos por CID-10",
                        `${cidSelecionado.codigo} · ${cidSelecionado.descricao}`,
                        [
                          `CID ${cidSelecionado.codigo}`,
                          `${procsDoCid.length} procedimentos`,
                          ...(cboFiltroCid !== TODOS_CBOS ? [`CBO ${cboFiltroCid}`] : []),
                        ],
                        procsDoCid,
                        `Busca de procedimentos SIGTAP compatíveis com o CID-10 ${cidSelecionado.codigo} (${cidSelecionado.descricao}). ` +
                          (cboFiltroCid !== TODOS_CBOS ? `Filtro CBO: ${rotuloCbo(cboFiltroCid)}. ` : "") +
                          `${procsDoCid.length} procedimento(s) identificados. ` +
                          `Procedimentos: ${procsDoCid.map((p) => `${p.codigo} ${p.nome}`).join("; ")}.`,
                        `esquemas_cid_${cidSelecionado.codigo}`,
                      )
                    }
                  >
                    {gerandoPdfBusca ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <FileDown className="w-4 h-4 mr-2" />}
                    {gerandoPdfBusca ? "Gerando relatório…" : "Exportar relatório consolidado da busca (PDF)"}
                  </Button>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {/* Resultados tab esquema */}
        {tab === "esquema" && esquemaAplicado.trim().length >= 2 && (
          <>
            <Card className="shadow-card">
              <CardContent className="pt-4 pb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <Label className="text-xs sm:text-sm shrink-0">Filtrar por CBO compatível</Label>
                <Select value={cboFiltroEsquema} onValueChange={setCboFiltroEsquema}>
                  <SelectTrigger className="h-9 sm:max-w-md">
                    <SelectValue placeholder="Todos os CBOs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={TODOS_CBOS}>Todos os CBOs ({procsDoEsquemaBase.length})</SelectItem>
                    {cbosDoEsquema.map((c) => (
                      <SelectItem key={c} value={c}>{rotuloCbo(c)}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="text-[11px] text-muted-foreground sm:ml-auto">
                  Exibindo {procsDoEsquema.length} de {procsDoEsquemaBase.length}
                </span>
              </CardContent>
            </Card>
            {procsDoEsquema.length === 0 && (
              <p className="text-xs text-muted-foreground">Nenhum procedimento relacionado ao esquema informado.</p>
            )}
            {procsDoEsquema.map((p) => (
              <ProcedimentoCardEsquema key={p.codigo} procedimento={p} />
            ))}
            {procsDoEsquema.length > 0 && (
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <Button
                    variant="outline"
                    className="w-full"
                    disabled={gerandoPdfBusca}
                    onClick={() =>
                      exportarPDFBusca(
                        "Relatório de Procedimentos por Esquema Terapêutico",
                        `Esquema/droga pesquisado: ${esquemaAplicado}`,
                        [`Esquema: ${esquemaAplicado}`, `${procsDoEsquema.length} procedimentos`],
                        procsDoEsquema,
                        `Busca de procedimentos SIGTAP relacionados ao esquema/droga "${esquemaAplicado}". ` +
                          `${procsDoEsquema.length} procedimento(s) compatíveis identificados. ` +
                          `Procedimentos: ${procsDoEsquema.map((p) => `${p.codigo} ${p.nome}`).join("; ")}.`,
                        `esquemas_busca_${esquemaAplicado.replace(/\W+/g, "_").slice(0, 30)}`,
                      )
                    }
                  >
                    {gerandoPdfBusca ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <FileDown className="w-4 h-4 mr-2" />}
                    {gerandoPdfBusca ? "Gerando relatório…" : "Exportar relatório consolidado da busca (PDF)"}
                  </Button>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </main>
    </div>
  );
}
