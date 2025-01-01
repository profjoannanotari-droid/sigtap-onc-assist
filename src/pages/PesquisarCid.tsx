import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, BookOpen, FileSearch, Activity, FileDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProcedimentoDetail } from "@/components/ProcedimentoDetail";
import { gerarRelatorioPDF } from "@/lib/pdfReport";
import { toast } from "@/hooks/use-toast";
import {
  cidsOnco,
  filtrarCids,
  capitulosCid,
  cidsPorCapitulo,
  buscarCidExato,
  buscarProcedimentos,
  indicacoes,
  type CID,
  type Procedimento,
} from "@/data/sigtap";

export default function PesquisarCid() {
  const navigate = useNavigate();

  // Aba 1: busca por nome/código
  const [termo, setTermo] = useState("");
  const resultadosBusca = useMemo(
    () => (termo.length >= 1 ? filtrarCids(termo) : []),
    [termo]
  );

  // Procedimento selecionado para visualização detalhada
  const [procSelecionado, setProcSelecionado] = useState<Procedimento | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [gerandoPdf, setGerandoPdf] = useState(false);

  async function exportarPDF(cid: CID) {
    setGerandoPdf(true);
    try {
      const procs = buscarProcedimentos(cid.codigo);
      const grupos = new Map<string, Procedimento[]>();
      procs.forEach((p) => {
        if (!grupos.has(p.subgrupo)) grupos.set(p.subgrupo, []);
        grupos.get(p.subgrupo)!.push(p);
      });
      const resumo = `CID-10 ${cid.codigo} - ${cid.descricao}. ${procs.length} procedimento(s) SIGTAP relacionado(s), ` +
        `distribuídos em ${grupos.size} indicação(ões) terapêutica(s) do subgrupo 0304.`;
      const secoes = Array.from(grupos.entries()).map(([subgrupo, lista]) => ({
        tipo: "tabela" as const,
        titulo: `${subgrupo} · ${nomeIndicacao(subgrupo)}`,
        cabecalho: ["Código", "Procedimento", "Valor (R$)"],
        linhas: lista.map((p) => [p.codigo, p.nome, p.valor.toFixed(2)]),
      }));
      await gerarRelatorioPDF({
        titulo: `Relatório CID-10 · ${cid.codigo}`,
        subtitulo: cid.descricao,
        badges: [cid.codigo, `${procs.length} procedimentos`, `${grupos.size} indicações`],
        contextoIA: { tipo: "cid", resumoDados: resumo },
        secoes: [
          { tipo: "kv", titulo: "Identificação", itens: [
            { chave: "Código CID-10", valor: cid.codigo },
            { chave: "Descrição", valor: cid.descricao },
          ]},
          ...(procs.length === 0
            ? [{ tipo: "paragrafo" as const, texto: "Nenhum procedimento SIGTAP do subgrupo 0304 está relacionado a este CID na base atual." }]
            : secoes),
        ],
        nomeArquivo: `cid_${cid.codigo.replace(/\./g, "_")}`,
      });
    } catch (e) {
      toast({ title: "Erro ao gerar PDF", description: (e as Error).message, variant: "destructive" });
    } finally {
      setGerandoPdf(false);
    }
  }

  function abrirDetalhes(p: Procedimento) {
    setProcSelecionado(p);
    setDetailOpen(true);
  }

  // Aba 3: consulta detalhada
  const [cidDetalhe, setCidDetalhe] = useState("");
  const cidEncontrado = useMemo(
    () => (cidDetalhe.length >= 2 ? buscarCidExato(cidDetalhe) : undefined),
    [cidDetalhe]
  );
  const sugestoesDetalhe = useMemo(
    () => (cidDetalhe.length >= 1 && !cidEncontrado ? filtrarCids(cidDetalhe) : []),
    [cidDetalhe, cidEncontrado]
  );

  function getProcedimentosDoCid(codigo: string): Procedimento[] {
    return buscarProcedimentos(codigo);
  }

  function nomeIndicacao(subgrupo: string) {
    return indicacoes.find((i) => i.codigo === subgrupo)?.nome || subgrupo;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-medical">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Voltar
              </Button>
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-primary-foreground">
                  Pesquisa de CID-10 Oncológico
                </h1>
                <p className="text-primary-foreground/80 text-sm">
                  Consulta da Classificação Internacional de Doenças (C00-C96, D37-D48)
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <Tabs defaultValue="buscar" className="w-full">
              <TabsList className="w-full mb-6 grid grid-cols-3 h-auto gap-1 p-1">
                <TabsTrigger
                  value="buscar"
                  className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-2 text-[11px] sm:text-sm whitespace-normal text-center leading-tight"
                >
                  <Search className="w-4 h-4 shrink-0" />
                  <span>Buscar por nome</span>
                </TabsTrigger>
                <TabsTrigger
                  value="capitulos"
                  className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-2 text-[11px] sm:text-sm whitespace-normal text-center leading-tight"
                >
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>Navegar capítulos</span>
                </TabsTrigger>
                <TabsTrigger
                  value="detalhes"
                  className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-2 text-[11px] sm:text-sm whitespace-normal text-center leading-tight"
                >
                  <FileSearch className="w-4 h-4 shrink-0" />
                  <span>Consulta detalhada</span>
                </TabsTrigger>
              </TabsList>

              {/* Aba 1: busca livre */}
              <TabsContent value="buscar">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Digite o nome da doença, parte do corpo ou código
                    </label>
                    <Input
                      placeholder="Ex: mama, pulmão, C50, leucemia..."
                      value={termo}
                      onChange={(e) => setTermo(e.target.value)}
                      className="h-11"
                    />
                  </div>

                  {termo.length >= 1 && (
                    <div className="text-sm text-muted-foreground">
                      {resultadosBusca.length} resultado{resultadosBusca.length !== 1 ? "s" : ""}
                    </div>
                  )}

                  <div className="space-y-2">
                    {resultadosBusca.map((cid) => (
                      <CidRow key={cid.codigo} cid={cid} onSelect={(c) => {
                        setCidDetalhe(c.codigo);
                        const tab = document.querySelector('[value="detalhes"]') as HTMLButtonElement;
                        tab?.click();
                      }} />
                    ))}
                    {termo.length >= 1 && resultadosBusca.length === 0 && (
                      <p className="text-center text-muted-foreground py-8">
                        Nenhum CID encontrado
                      </p>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Aba 2: capítulos */}
              <TabsContent value="capitulos">
                <Accordion type="single" collapsible className="w-full">
                  {capitulosCid.map((cap) => {
                    const cids = cidsPorCapitulo(cap.prefixos);
                    return (
                      <AccordionItem key={cap.codigo} value={cap.codigo}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-3 text-left">
                            <Badge variant="outline" className="font-mono shrink-0">{cap.codigo}</Badge>
                            <span className="font-medium">{cap.nome}</span>
                            <Badge variant="secondary" className="ml-auto mr-2">{cids.length}</Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-1 pl-2">
                            {cids.map((cid) => (
                              <CidRow key={cid.codigo} cid={cid} compact onSelect={(c) => {
                                setCidDetalhe(c.codigo);
                                const tab = document.querySelector('[value="detalhes"]') as HTMLButtonElement;
                                tab?.click();
                              }} />
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Total: {cidsOnco.length} CIDs oncológicos cadastrados
                </p>
              </TabsContent>

              {/* Aba 3: consulta detalhada */}
              <TabsContent value="detalhes">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Digite o código CID exato
                    </label>
                    <Input
                      placeholder="Ex: C50.9, C34.1..."
                      value={cidDetalhe}
                      onChange={(e) => setCidDetalhe(e.target.value)}
                      className="h-11"
                    />
                  </div>

                  {sugestoesDetalhe.length > 0 && !cidEncontrado && (
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Sugestões:</p>
                      {sugestoesDetalhe.slice(0, 5).map((cid) => (
                        <button
                          key={cid.codigo}
                          onClick={() => setCidDetalhe(cid.codigo)}
                          className="w-full px-3 py-2 text-left hover:bg-secondary rounded transition-colors flex items-center gap-3 text-sm"
                        >
                          <Badge variant="outline" className="font-mono shrink-0">{cid.codigo}</Badge>
                          <span className="text-foreground">{cid.descricao}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {cidEncontrado && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border border-border bg-secondary/30">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="font-mono text-base">{cidEncontrado.codigo}</Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            className="ml-auto"
                            onClick={() => exportarPDF(cidEncontrado)}
                            disabled={gerandoPdf}
                          >
                            {gerandoPdf ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <FileDown className="w-4 h-4 mr-1" />}
                            {gerandoPdf ? "Gerando…" : "PDF"}
                          </Button>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {cidEncontrado.descricao}
                        </h3>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Activity className="w-4 h-4" />
                          Procedimentos SIGTAP relacionados
                        </h4>
                        {(() => {
                          const procs = getProcedimentosDoCid(cidEncontrado.codigo);
                          if (procs.length === 0) {
                            return (
                              <p className="text-sm text-muted-foreground py-4 text-center">
                                Nenhum procedimento relacionado encontrado
                              </p>
                            );
                          }
                          // Agrupa por subgrupo (indicação)
                          const grupos = new Map<string, Procedimento[]>();
                          procs.forEach((p) => {
                            if (!grupos.has(p.subgrupo)) grupos.set(p.subgrupo, []);
                            grupos.get(p.subgrupo)!.push(p);
                          });
                          return (
                            <div className="space-y-3">
                              {Array.from(grupos.entries()).map(([subgrupo, lista]) => (
                                <div key={subgrupo} className="border border-border rounded-lg p-3">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="outline" className="font-mono text-xs">{subgrupo}</Badge>
                                    <span className="text-sm font-medium">{nomeIndicacao(subgrupo)}</span>
                                    <Badge variant="secondary" className="ml-auto">{lista.length}</Badge>
                                  </div>
                                  <ul className="space-y-1">
                                    {lista.map((p) => (
                                      <li key={p.codigo}>
                                        <button
                                          onClick={() => abrirDetalhes(p)}
                                          className="w-full text-left text-xs flex items-start gap-2 px-2 py-1.5 rounded hover:bg-secondary transition-colors"
                                        >
                                          <span className="font-mono shrink-0 text-muted-foreground">{p.codigo}</span>
                                          <span className="text-foreground">{p.nome}</span>
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                              <Button
                                variant="default"
                                className="w-full"
                                onClick={() => navigate("/")}
                              >
                                Ir para busca completa de procedimentos
                              </Button>
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  )}

                  {cidDetalhe.length >= 2 && !cidEncontrado && sugestoesDetalhe.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      CID não encontrado na base oncológica
                    </p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>

      <ProcedimentoDetail
        procedimento={procSelecionado}
        open={detailOpen}
        onOpenChange={setDetailOpen}
      />
    </div>
  );
}

function CidRow({ cid, compact, onSelect }: { cid: CID; compact?: boolean; onSelect: (c: CID) => void }) {
  return (
    <button
      onClick={() => onSelect(cid)}
      className={`w-full text-left hover:bg-secondary transition-colors rounded flex items-center gap-3 border border-border ${compact ? "px-3 py-2" : "px-4 py-3"}`}
    >
      <Badge variant="outline" className="font-mono shrink-0">{cid.codigo}</Badge>
      <span className="text-sm text-foreground">{cid.descricao}</span>
    </button>
  );
}
