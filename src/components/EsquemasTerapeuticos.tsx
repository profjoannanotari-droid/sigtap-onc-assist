import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Loader2, Sparkles, Pill, BookOpen, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { chamarFuncaoCloud } from "@/lib/lovableFunctions";
import { gerarRelatorioPDF } from "@/lib/pdfReport";
import type { Procedimento } from "@/data/sigtap";

export interface EsquemaItem {
  nome: string;
  drogas: string;
  linha: string;
  intencao: string;
  ciclos?: string;
  gatilho?: string;
  fonte: string;
}

export interface EsquemasResposta {
  resumoProcedimento: string;
  esquemas: EsquemaItem[];
  observacoesMarkdown: string;
}

type FuncaoEsquemasResposta =
  | { ok: true; esquemas: EsquemasResposta }
  | { ok?: false; error?: string };

interface Props {
  procedimento: Procedimento;
  cid?: string;
  cidDescricao?: string;
  indicacao?: string;
  variant?: "inline" | "card";
  buttonLabel?: string;
}

export function EsquemasTerapeuticos({
  procedimento,
  cid,
  cidDescricao,
  indicacao,
  buttonLabel = "Sugerir esquemas terapêuticos (PCDT/Guidelines)",
}: Props) {
  const [loading, setLoading] = useState(false);
  const [resp, setResp] = useState<EsquemasResposta | null>(null);
  const [gerandoPdf, setGerandoPdf] = useState(false);

  async function exportarPDF() {
    if (!resp) return;
    setGerandoPdf(true);
    try {
      const resumo = `Esquemas terapêuticos para o procedimento SIGTAP ${procedimento.codigo} - ${procedimento.nome}` +
        `${cid ? `, contextualizado ao CID ${cid} (${cidDescricao || "—"})` : ""}. ` +
        `${resp.esquemas.length} esquema(s) sugerido(s) com base em PCDT (MS/Conitec) e guidelines (NCCN/ESMO/ASCO). ` +
        `Resumo do procedimento: ${resp.resumoProcedimento}`;
      await gerarRelatorioPDF({
        titulo: "Relatório de Esquemas Terapêuticos",
        subtitulo: `${procedimento.codigo} · ${procedimento.nome}`,
        badges: [procedimento.codigo, cid ? `CID ${cid}` : "", `${resp.esquemas.length} esquemas`].filter(Boolean) as string[],
        contextoIA: { tipo: "esquemas", resumoDados: resumo },
        secoes: [
          { tipo: "paragrafo", titulo: "Resumo do procedimento", texto: resp.resumoProcedimento },
          {
            tipo: "tabela",
            titulo: "Esquemas terapêuticos sugeridos",
            cabecalho: ["Esquema", "Drogas / Posologia", "Linha", "Intenção", "Ciclos", "Gatilho", "Fonte"],
            linhas: resp.esquemas.map((e) => [e.nome, e.drogas, e.linha, e.intencao, e.ciclos || "—", e.gatilho || "—", e.fonte]),
          },
          ...(resp.observacoesMarkdown
            ? [{
                tipo: "paragrafo" as const,
                titulo: "Notas clínicas e fontes",
                texto: resp.observacoesMarkdown.replace(/[#*_>`]/g, "").trim(),
              }]
            : []),
        ],
        nomeArquivo: `esquemas_${procedimento.codigo}`,
      });
    } catch (e) {
      toast({ title: "Erro ao gerar PDF", description: (e as Error).message, variant: "destructive" });
    } finally {
      setGerandoPdf(false);
    }
  }

  async function gerar() {
    setLoading(true);
    setResp(null);
    try {
      const data = await chamarFuncaoCloud<FuncaoEsquemasResposta>("esquemas-terapeuticos", {
        body: {
          procedimento: {
            codigo: procedimento.codigo,
            nome: procedimento.nome,
            descricao: procedimento.descricao,
          },
          cid,
          cidDescricao,
          indicacao,
        },
      });
      if (!data?.ok) {
        toast({
          title: "Não foi possível gerar os esquemas",
          description: data && "error" in data ? data.error ?? "Tente novamente." : "Tente novamente.",
          variant: "destructive",
        });
        return;
      }
      setResp(data.esquemas as EsquemasResposta);
    } catch (e: any) {
      toast({ title: "Erro", description: e?.message ?? String(e), variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <Button onClick={gerar} disabled={loading} size="sm" className="bg-gold text-gold-foreground hover:bg-gold/90">
        {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Sparkles className="w-4 h-4 mr-2" />}
        {loading ? "Consultando PCDT/Guidelines…" : buttonLabel}
      </Button>

      {resp && (
        <div className="space-y-4 rounded-lg border border-border bg-secondary/30 p-3 sm:p-4">
          <Alert className="border-primary/30 bg-primary/5">
            <Pill className="h-4 w-4 text-primary" />
            <AlertTitle className="text-sm">Resumo do procedimento</AlertTitle>
            <AlertDescription className="text-xs sm:text-sm mt-1">
              {resp.resumoProcedimento}
            </AlertDescription>
          </Alert>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Pill className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Esquemas possíveis ({resp.esquemas.length})</span>
            </div>
            <div className="overflow-x-auto rounded-md border border-border bg-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Esquema</TableHead>
                    <TableHead className="text-xs">Drogas / Posologia</TableHead>
                    <TableHead className="text-xs">Linha</TableHead>
                    <TableHead className="text-xs">Intenção</TableHead>
                    <TableHead className="text-xs">Ciclos</TableHead>
                    <TableHead className="text-xs">Gatilho</TableHead>
                    <TableHead className="text-xs">Fonte</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {resp.esquemas.map((e, i) => (
                    <TableRow key={i}>
                      <TableCell className="text-xs font-medium align-top">{e.nome}</TableCell>
                      <TableCell className="text-xs align-top break-anywhere">{e.drogas}</TableCell>
                      <TableCell className="text-xs align-top">{e.linha}</TableCell>
                      <TableCell className="text-xs align-top">{e.intencao}</TableCell>
                      <TableCell className="text-xs align-top">{e.ciclos || "—"}</TableCell>
                      <TableCell className="text-xs align-top break-anywhere">{e.gatilho || "—"}</TableCell>
                      <TableCell className="text-xs align-top">
                        <Badge variant="outline" className="text-[10px] whitespace-normal break-anywhere">{e.fonte}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {resp.observacoesMarkdown && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">Notas clínicas e fontes</span>
              </div>
              <div className="prose prose-sm max-w-none dark:prose-invert text-xs sm:text-sm rounded-md border border-border bg-card p-3">
                <ReactMarkdown>{resp.observacoesMarkdown}</ReactMarkdown>
              </div>
            </div>
          )}

          <Button variant="outline" size="sm" onClick={exportarPDF} disabled={gerandoPdf} className="w-full">
            {gerandoPdf ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <FileDown className="w-4 h-4 mr-2" />}
            {gerandoPdf ? "Gerando relatório…" : "Exportar relatório PDF"}
          </Button>

          <p className="text-[11px] italic text-muted-foreground">
            Conteúdo gerado por IA com base em PCDT (MS/Conitec) e guidelines (NCCN/ESMO/ASCO). Não substitui julgamento clínico.
          </p>
        </div>
      )}
    </div>
  );
}
