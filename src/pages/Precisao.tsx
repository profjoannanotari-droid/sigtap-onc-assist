import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  AlertTriangle,
  Info,
  Loader2,
  ShieldAlert,
  Dna,
  Pill,
  Target,
  Search,
  FileText,
  Wand2,
  FileDown,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { gerarRelatorioPDF } from "@/lib/pdfReport";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { getBiomarcadores, type BiomarcadorDef } from "@/data/biomarcadores";
import { cidDescricoesOficiais } from "@/data/cidOficial";
import { filtrarProcedimentos, type Procedimento } from "@/data/sigtap";

type Intencao = "neoadjuvante" | "adjuvante" | "curativa" | "paliativa";

interface Protocolo {
  nome: string;
  componentes: string;
  linha: string;
  ciclos: string;
  terapiaAlvo: boolean;
  marcadorGatilho?: string;
}

interface Recomendacao {
  subtipoBiologico: string;
  statusDoenca: string;
  protocolos: Protocolo[];
  toxicidades: string[];
  ajustesDose?: string;
  dadosFaltantes?: string[];
  justificativaMarkdown: string;
}

const PayloadSchema = z.object({
  cid: z.string().trim().min(2).max(8),
  cidDescricao: z.string().trim().max(200).optional(),
  estadiamento: z.string().trim().max(40).optional(),
  intencao: z.enum(["neoadjuvante", "adjuvante", "curativa", "paliativa"]),
  ecog: z.number().int().min(0).max(4).optional(),
  observacoesClinicas: z.string().trim().max(1000).optional(),
  biomarcadores: z.record(z.union([z.string(), z.number()])),
  procedimento: z
    .object({
      codigo: z.string(),
      nome: z.string(),
      descricao: z.string().optional(),
    })
    .optional(),
});

// Lista CID 3-dígitos (capítulo C — neoplasias) extraída do dicionário oficial.
const CIDS_TRES_DIGITOS = Object.entries(cidDescricoesOficiais)
  .filter(([k]) => /^C\d{2}$/.test(k))
  .map(([codigo, descricao]) => ({ codigo, descricao }))
  .sort((a, b) => a.codigo.localeCompare(b.codigo));

function stripMd(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[#*_>`]/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

export default function Precisao() {
  const navigate = useNavigate();
  const location = useLocation();
  const presets = (location.state ?? {}) as { cid?: string; estadiamento?: string };

  const [cid, setCid] = useState(presets.cid?.toUpperCase() ?? "");
  const [cidQuery, setCidQuery] = useState("");
  const [showCidSug, setShowCidSug] = useState(false);
  const cidWrapRef = useRef<HTMLDivElement>(null);
  const [estadiamento, setEstadiamento] = useState(presets.estadiamento ?? "");
  const [intencao, setIntencao] = useState<Intencao | "">("");
  const [ecog, setEcog] = useState<string>("");
  const [observacoes, setObservacoes] = useState("");
  const [bioValores, setBioValores] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState<Recomendacao | null>(null);
  const [gerandoPdf, setGerandoPdf] = useState(false);

  async function exportarPDF() {
    if (!resultado) return;
    setGerandoPdf(true);
    try {
      const bioPreenchidos = Object.entries(bioValores)
        .filter(([, v]) => v !== "" && v !== undefined)
        .map(([k, v]) => {
          const def = biomarcadores.find((b) => b.id === k);
          return { chave: def?.nome ?? k, valor: String(v) };
        });
      const resumo = `Recomendação para CID ${cidNorm} (${cidDescricao || "—"}), intenção ${intencao}, ECOG ${ecog || "n/d"}. ` +
        `Subtipo biológico: ${resultado.subtipoBiologico}. Status: ${resultado.statusDoenca}. ` +
        `${resultado.protocolos.length} protocolo(s) sugerido(s) (${resultado.protocolos.filter((p) => p.terapiaAlvo).length} de precisão). ` +
        `Toxicidades críticas: ${resultado.toxicidades?.join("; ") || "—"}.`;

      await gerarRelatorioPDF({
        titulo: "Relatório de Recomendação Oncológica de Precisão",
        subtitulo: `${cidNorm} ${cidDescricao ? `· ${cidDescricao}` : ""} · ${intencao}`,
        badges: [
          `CID ${cidNorm}`,
          intencao,
          estadiamento ? `Estádio ${estadiamento}` : "",
          resultado.subtipoBiologico,
        ].filter(Boolean) as string[],
        contextoIA: { tipo: "precisao", resumoDados: resumo },
        secoes: [
          {
            tipo: "kv",
            titulo: "Análise do perfil",
            itens: [
              { chave: "Subtipo biológico", valor: resultado.subtipoBiologico },
              { chave: "Status da doença", valor: resultado.statusDoenca },
              { chave: "Intenção", valor: intencao },
              { chave: "ECOG", valor: ecog || "não informado" },
              { chave: "Estadiamento", valor: estadiamento || "não informado" },
            ],
          },
          ...(bioPreenchidos.length
            ? [{ tipo: "kv" as const, titulo: "Biomarcadores informados", itens: bioPreenchidos }]
            : []),
          {
            tipo: "tabela",
            titulo: "Condutas sugeridas",
            cabecalho: ["Protocolo", "Componentes", "Linha", "Ciclos", "Precisão"],
            linhas: resultado.protocolos.map((p) => [
              p.nome,
              p.componentes,
              p.linha,
              p.ciclos,
              p.terapiaAlvo ? `Sim${p.marcadorGatilho ? ` (${p.marcadorGatilho})` : ""}` : "—",
            ]),
          },
          { tipo: "paragrafo", titulo: "Justificativa molecular", texto: stripMd(resultado.justificativaMarkdown) },
          ...(resultado.toxicidades?.length
            ? [{ tipo: "lista" as const, titulo: "Toxicidades críticas", itens: resultado.toxicidades }]
            : []),
          ...(resultado.ajustesDose
            ? [{ tipo: "paragrafo" as const, titulo: "Ajuste de dose", texto: resultado.ajustesDose }]
            : []),
          ...(resultado.dadosFaltantes?.length
            ? [{ tipo: "lista" as const, titulo: "Dados que aumentariam a precisão", itens: resultado.dadosFaltantes }]
            : []),
          ...(observacoes
            ? [{ tipo: "paragrafo" as const, titulo: "Observações clínicas (caso)", texto: observacoes }]
            : []),
        ],
        nomeArquivo: `precisao_${cidNorm}_${intencao}`,
      });
    } catch (e) {
      toast({ title: "Erro ao gerar PDF", description: (e as Error).message, variant: "destructive" });
    } finally {
      setGerandoPdf(false);
    }
  }

  // Busca de procedimento SIGTAP para gerar sugestão direta a partir da descrição
  const [procQuery, setProcQuery] = useState("");
  const [procSelecionado, setProcSelecionado] = useState<Procedimento | null>(null);
  const [showProcSug, setShowProcSug] = useState(false);
  const procWrapRef = useRef<HTMLDivElement>(null);

  const procSugestoes = useMemo(
    () => (procQuery.trim().length >= 2 ? filtrarProcedimentos(procQuery).slice(0, 8) : []),
    [procQuery],
  );

  const cidSugestoes = useMemo(() => {
    const q = cidQuery.trim().toUpperCase();
    if (!q) return CIDS_TRES_DIGITOS.slice(0, 12);
    return CIDS_TRES_DIGITOS.filter(
      (c) => c.codigo.includes(q) || c.descricao.toUpperCase().includes(q),
    ).slice(0, 12);
  }, [cidQuery]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (cidWrapRef.current && !cidWrapRef.current.contains(e.target as Node)) setShowCidSug(false);
      if (procWrapRef.current && !procWrapRef.current.contains(e.target as Node)) setShowProcSug(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const cidNorm = cid.trim().toUpperCase();
  const cidDescricao = useMemo(() => {
    return cidDescricoesOficiais[cidNorm] ?? cidDescricoesOficiais[cidNorm.slice(0, 3)] ?? "";
  }, [cidNorm]);

  const biomarcadores: BiomarcadorDef[] = useMemo(() => getBiomarcadores(cidNorm), [cidNorm]);

  // Reset de marcadores ao mudar CID (limpa valores que não pertencem mais ao novo catálogo)
  useEffect(() => {
    setBioValores((prev) => {
      const validIds = new Set(biomarcadores.map((b) => b.id));
      const filtrado: Record<string, string> = {};
      for (const k of Object.keys(prev)) if (validIds.has(k)) filtrado[k] = prev[k];
      return filtrado;
    });
  }, [biomarcadores]);

  const podeGerar = cidNorm.length >= 3 && intencao !== "";

  const gerar = async (opts?: { incluirProcedimento?: boolean }) => {
    setResultado(null);
    setLoading(true);
    try {
      const payload = PayloadSchema.parse({
        cid: cidNorm,
        cidDescricao: cidDescricao || undefined,
        estadiamento: estadiamento || undefined,
        intencao,
        ecog: ecog === "" ? undefined : Number(ecog),
        observacoesClinicas: observacoes || undefined,
        biomarcadores: bioValores,
        procedimento:
          opts?.incluirProcedimento && procSelecionado
            ? {
                codigo: procSelecionado.codigo,
                nome: procSelecionado.nome,
                descricao: procSelecionado.descricao,
              }
            : undefined,
      });

      const { data, error } = await supabase.functions.invoke("recomendacao-precisao", { body: payload });

      if (error) {
        const msg = (error as any).message ?? "Falha ao consultar o motor.";
        toast({ title: "Erro", description: msg, variant: "destructive" });
        return;
      }
      if (!data?.ok) {
        toast({
          title: "Não foi possível gerar a recomendação",
          description: data?.error ?? "Tente novamente.",
          variant: "destructive",
        });
        return;
      }
      setResultado(data.recomendacao as Recomendacao);
    } catch (e: any) {
      toast({ title: "Dados inválidos", description: e?.message ?? String(e), variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

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
              <Dna className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-xl font-bold text-primary-foreground leading-tight">
                Recomendação Terapêutica de Precisão
              </h1>
              <p className="text-primary-foreground/80 text-xs">
                Cruzamento CID • Estadiamento • Biomarcadores • PCDT/NCCN/ESMO
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        {/* Formulário */}
        <Card className="shadow-card h-fit">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" /> Parâmetros do caso
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 sm:col-span-1">
                <Label>CID-10</Label>
                <div className="relative" ref={cidWrapRef}>
                  <Input
                    value={cid}
                    onChange={(e) => {
                      const v = e.target.value.toUpperCase();
                      setCid(v);
                      setCidQuery(v);
                      setShowCidSug(true);
                    }}
                    onFocus={() => setShowCidSug(true)}
                    placeholder="Ex: C50 — digite para buscar"
                  />
                  {showCidSug && cidSugestoes.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-md shadow-elevated max-h-60 overflow-auto">
                      {cidSugestoes.map((c) => (
                        <button
                          key={c.codigo}
                          type="button"
                          onClick={() => {
                            setCid(c.codigo);
                            setCidQuery("");
                            setShowCidSug(false);
                          }}
                          className="w-full px-3 py-2 text-left hover:bg-secondary border-b border-border last:border-0 flex items-start gap-2"
                        >
                          <span className="font-mono text-xs font-semibold text-primary shrink-0">{c.codigo}</span>
                          <span className="text-xs text-foreground leading-snug">{c.descricao}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {cidDescricao && (
                  <p className="text-xs text-muted-foreground mt-1 truncate">{cidDescricao}</p>
                )}
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Label>Estadiamento</Label>
                <Input value={estadiamento} onChange={(e) => setEstadiamento(e.target.value)} placeholder="Ex: IIIA / T2N1M0" />
              </div>
              <div>
                <Label>Intenção terapêutica</Label>
                <Select value={intencao} onValueChange={(v) => setIntencao(v as Intencao)}>
                  <SelectTrigger><SelectValue placeholder="—" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="neoadjuvante">Neoadjuvante</SelectItem>
                    <SelectItem value="adjuvante">Adjuvante</SelectItem>
                    <SelectItem value="curativa">Curativa</SelectItem>
                    <SelectItem value="paliativa">Paliativa / Controle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>ECOG</Label>
                <Select value={ecog} onValueChange={setEcog}>
                  <SelectTrigger><SelectValue placeholder="—" /></SelectTrigger>
                  <SelectContent>
                    {[0, 1, 2, 3, 4].map((n) => (
                      <SelectItem key={n} value={String(n)}>{n}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Biomarcadores filtrados pelo CID */}
            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <Target className="w-4 h-4 text-gold" /> Biomarcadores / IHQ
                </h3>
                <Badge variant="secondary" className="text-[10px]">
                  {biomarcadores.length} marcador(es) para {cidNorm.slice(0, 3) || "—"}
                </Badge>
              </div>
              {biomarcadores.length === 0 ? (
                <p className="text-xs text-muted-foreground">
                  Informe um CID-10 válido (ex: C50, C34, C18) para carregar os marcadores específicos.
                </p>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3">
                  {biomarcadores.map((b) => (
                    <CampoBiomarcador
                      key={b.id}
                      def={b}
                      value={bioValores[b.id] ?? ""}
                      onChange={(v) => setBioValores((p) => ({ ...p, [b.id]: v }))}
                    />
                  ))}
                </div>
              )}
            </div>

            <div>
              <Label>Observações clínicas (opcional)</Label>
              <Textarea
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value.slice(0, 1000))}
                rows={3}
                placeholder="Comorbidades, função orgânica, linhas prévias…"
              />
            </div>

            <Button
              onClick={() => gerar()}
              disabled={!podeGerar || loading}
              className="w-full"
              size="lg"
            >
              {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Sparkles className="w-4 h-4 mr-2" />}
              {loading ? "Processando…" : "Gerar Recomendação"}
            </Button>

            {/* Sugestão a partir do procedimento SIGTAP */}
            <div className="border-t border-border pt-4">
              <h3 className="text-sm font-semibold flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-primary" /> Sugerir tratamento a partir do procedimento
              </h3>
              <p className="text-xs text-muted-foreground mb-2">
                Busque o procedimento SIGTAP que pretende usar. A IA usará a <strong>descrição oficial</strong> como âncora para alinhar a recomendação.
              </p>
              <div className="relative" ref={procWrapRef}>
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    className="h-9 pl-8"
                    placeholder="Ex: 304010111 ou radioterapia, quimioterapia…"
                    value={procQuery}
                    onChange={(e) => {
                      setProcQuery(e.target.value);
                      setShowProcSug(true);
                    }}
                    onFocus={() => procQuery.length >= 2 && setShowProcSug(true)}
                  />
                </div>
                {showProcSug && procSugestoes.length > 0 && (
                  <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-md shadow-elevated max-h-64 overflow-auto">
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
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {procSelecionado && (
                <div className="mt-3 rounded-md border border-border bg-secondary/40 p-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="font-mono text-[10px] shrink-0 mt-0.5">
                      {procSelecionado.codigo}
                    </Badge>
                    <span className="text-xs font-medium text-foreground leading-snug break-anywhere">
                      {procSelecionado.nome}
                    </span>
                    <button
                      type="button"
                      onClick={() => setProcSelecionado(null)}
                      className="ml-auto text-[11px] text-muted-foreground hover:text-foreground shrink-0"
                    >
                      remover
                    </button>
                  </div>
                  {procSelecionado.descricao && (
                    <p className="text-[11px] text-muted-foreground line-clamp-3 whitespace-pre-wrap">
                      {procSelecionado.descricao}
                    </p>
                  )}
                  <Button
                    onClick={() => gerar({ incluirProcedimento: true })}
                    disabled={!podeGerar || loading}
                    className="w-full bg-gold text-gold-foreground hover:bg-gold/90"
                    size="sm"
                  >
                    <Wand2 className="w-4 h-4 mr-2" />
                    Sugerir tratamento alinhado a este procedimento
                  </Button>
                  {!podeGerar && (
                    <p className="text-[11px] text-muted-foreground">
                      Preencha CID-10 e Intenção terapêutica acima para liberar a sugestão.
                    </p>
                  )}
                </div>
              )}
            </div>

            <Alert className="bg-secondary/40 border-secondary text-foreground">
              <ShieldAlert className="h-4 w-4" />
              <AlertTitle className="text-sm">Apoio à decisão</AlertTitle>
              <AlertDescription className="text-xs">
                Esta ferramenta não substitui o julgamento clínico. A conduta final é de responsabilidade do médico assistente.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Resultado */}
        <div className="space-y-4 min-w-0">
          {!resultado && !loading && (
            <Card className="shadow-card border-dashed">
              <CardContent className="py-12 text-center text-muted-foreground text-sm">
                Preencha o caso e clique em <strong>Gerar Recomendação</strong>. As condutas aparecerão aqui, com destaque dourado para terapias de precisão.
              </CardContent>
            </Card>
          )}

          {loading && (
            <Card className="shadow-card">
              <CardContent className="py-12 text-center">
                <Loader2 className="w-8 h-8 mx-auto animate-spin text-primary" />
                <p className="text-sm text-muted-foreground mt-3">Cruzando CID, estadiamento e biomarcadores…</p>
              </CardContent>
            </Card>
          )}

          {resultado && (
            <>
              {/* 1. Análise do perfil */}
              <Card className="shadow-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Dna className="w-4 h-4 text-primary" /> Análise do Perfil
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-3">
                  <div className="rounded-md bg-secondary/50 p-3">
                    <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Subtipo biológico</div>
                    <div className="text-sm font-semibold">{resultado.subtipoBiologico}</div>
                  </div>
                  <div className="rounded-md bg-secondary/50 p-3">
                    <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Status da doença</div>
                    <div className="text-sm font-semibold">{resultado.statusDoenca}</div>
                  </div>
                </CardContent>
              </Card>

              {/* 2. Condutas sugeridas */}
              <Card className="shadow-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Pill className="w-4 h-4 text-primary" /> Condutas Sugeridas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="overflow-x-auto rounded-md border border-border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[28%]">Protocolo</TableHead>
                          <TableHead>Componentes</TableHead>
                          <TableHead className="w-[18%]">Linha</TableHead>
                          <TableHead className="w-[12%]">Ciclos</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {resultado.protocolos.map((p, i) => (
                          <TableRow key={i} className={p.terapiaAlvo ? "bg-gold-soft/60" : ""}>
                            <TableCell className="align-top">
                              <div className="flex items-start gap-2">
                                <span className="font-medium">{p.nome}</span>
                                {p.terapiaAlvo && (
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Badge className="bg-gold text-gold-foreground hover:bg-gold/90 text-[10px] gap-1">
                                        <Target className="w-3 h-3" /> Precisão
                                      </Badge>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      Selecionado por marcador: {p.marcadorGatilho || "biomarcador específico"}
                                    </TooltipContent>
                                  </Tooltip>
                                )}
                              </div>
                            </TableCell>
                            <TableCell className="text-sm align-top">{p.componentes}</TableCell>
                            <TableCell className="text-sm align-top">{p.linha}</TableCell>
                            <TableCell className="text-sm align-top">{p.ciclos}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  {resultado.protocolos.some((p) => p.terapiaAlvo) && (
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Target className="w-3 h-3 text-gold" /> Protocolos com borda/badge dourada são <strong>terapias de precisão</strong> escolhidas a partir de um marcador específico.
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* 3. Justificativa molecular */}
              <Card className="shadow-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Info className="w-4 h-4 text-primary" /> Justificativa Molecular
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none prose-headings:text-foreground prose-headings:mt-3 prose-headings:mb-2 prose-p:my-2 prose-li:my-0.5 prose-strong:text-foreground">
                    <ReactMarkdown>{resultado.justificativaMarkdown}</ReactMarkdown>
                  </div>
                </CardContent>
              </Card>

              {/* 4. Manejo */}
              <Card className="shadow-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-medical-warning" /> Manejo e Alertas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  {resultado.toxicidades?.length > 0 && (
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-muted-foreground mb-1">Toxicidades críticas</div>
                      <ul className="list-disc pl-5 space-y-0.5">
                        {resultado.toxicidades.map((t, i) => <li key={i}>{t}</li>)}
                      </ul>
                    </div>
                  )}
                  {resultado.ajustesDose && (
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-muted-foreground mb-1">Ajuste de dose</div>
                      <p>{resultado.ajustesDose}</p>
                    </div>
                  )}
                  {resultado.dadosFaltantes && resultado.dadosFaltantes.length > 0 && (
                    <Alert className="bg-medical-warning/10 border-medical-warning/30">
                      <Info className="h-4 w-4" />
                      <AlertTitle className="text-sm">Dados que aumentariam a precisão</AlertTitle>
                      <AlertDescription className="text-xs">
                        {resultado.dadosFaltantes.join(" • ")}
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>

              <Button variant="outline" className="w-full" onClick={exportarPDF} disabled={gerandoPdf}>
                {gerandoPdf ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <FileDown className="w-4 h-4 mr-2" />}
                {gerandoPdf ? "Gerando relatório…" : "Exportar relatório PDF"}
              </Button>
              <Alert variant="destructive" className="bg-destructive/5 border-destructive/30">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Aviso</AlertTitle>
                <AlertDescription className="text-xs">
                  Resultado gerado por IA com base em diretrizes públicas (PCDT, NCCN, ESMO, ASCO). Validação clínica final é responsabilidade do médico assistente.
                </AlertDescription>
              </Alert>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

function CampoBiomarcador({
  def,
  value,
  onChange,
}: {
  def: BiomarcadorDef;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-1 mb-1">
        <Label className="text-xs">{def.nome}{def.unidade ? ` (${def.unidade})` : ""}</Label>
        {def.ajuda && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="w-3 h-3 text-primary/70 cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs text-xs">{def.ajuda}</TooltipContent>
          </Tooltip>
        )}
      </div>
      {def.tipo === "select" && def.opcoes ? (
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="h-9"><SelectValue placeholder="—" /></SelectTrigger>
          <SelectContent>
            {def.opcoes.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
          </SelectContent>
        </Select>
      ) : def.tipo === "number" ? (
        <Input type="number" step="0.1" className="h-9" value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <Input className="h-9" value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </div>
  );
}
