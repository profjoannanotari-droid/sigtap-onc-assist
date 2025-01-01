import { useState, useMemo } from "react";
import { FileDown, FileSpreadsheet, AlertTriangle, Filter, ExternalLink, UserRound, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type Procedimento, cbosNomes, indicacoes } from "@/data/sigtap";
import { ProcedimentoDetail } from "./ProcedimentoDetail";
import { extrairLimitesCobranca, resumoLimites } from "@/lib/limitesCobranca";
import { gerarRelatorioPDF } from "@/lib/pdfReport";
import { toast } from "@/hooks/use-toast";

interface ResultsTableProps {
  resultados: Procedimento[];
  cid: string;
  cidDescricao: string;
  indicacao: string;
}

export function ResultsTable({ resultados, cid, cidDescricao, indicacao }: ResultsTableProps) {
  const [filtroValorMin, setFiltroValorMin] = useState("");
  const [filtroValorMax, setFiltroValorMax] = useState("");
  const [filtroCbo, setFiltroCbo] = useState<string>("todos");
  const [selectedProc, setSelectedProc] = useState<Procedimento | null>(null);
  const [gerandoPdf, setGerandoPdf] = useState(false);

  const indicacaoNome = indicacoes.find((i) => i.codigo === indicacao)?.nome || indicacao;

  // CBOs disponíveis dentro dos resultados atuais
  const cbosDisponiveis = useMemo(() => {
    const set = new Set<string>();
    resultados.forEach((p) => p.cbosCompativeis.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, [resultados]);

  const filtrados = resultados.filter((p) => {
    if (filtroValorMin && p.valor < parseFloat(filtroValorMin)) return false;
    if (filtroValorMax && p.valor > parseFloat(filtroValorMax)) return false;
    if (filtroCbo !== "todos" && !p.cbosCompativeis.includes(filtroCbo)) return false;
    return true;
  });

  function exportarCSV() {
    const header = "Código;Procedimento;Valor (R$);CBOs Compatíveis\n";
    const rows = filtrados.map((p) =>
      `${p.codigo};"${p.nome}";${p.valor.toFixed(2)};"${p.cbosCompativeis.map(c => `${c} - ${cbosNomes[c] || c}`).join(", ")}"`
    ).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sigtap_${cid}_${indicacao}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function exportarPDF() {
    setGerandoPdf(true);
    try {
      const totalValor = filtrados.reduce((s, p) => s + p.valor, 0);
      const cbosUnicos = Array.from(new Set(filtrados.flatMap((p) => p.cbosCompativeis)));
      const comLimite = filtrados.filter((p) => extrairLimitesCobranca(p.descricao || "").length > 0);
      const resumo = `${filtrados.length} procedimentos do subgrupo 0304 (SIGTAP) compatíveis com o CID ${cid} (${cidDescricao}) para a indicação "${indicacaoNome}". ` +
        `Soma de valores: R$ ${totalValor.toFixed(2)}. ${cbosUnicos.length} CBO(s) habilitados. ` +
        `${comLimite.length} procedimento(s) com regras explícitas de tempo/quantidade de cobrança.`;

      await gerarRelatorioPDF({
        titulo: "Relatório de Procedimentos SIGTAP - Oncologia",
        subtitulo: `${indicacaoNome} • CID ${cid} - ${cidDescricao}`,
        badges: [`CID ${cid}`, indicacaoNome, `${filtrados.length} procedimentos`],
        contextoIA: { tipo: "busca-sigtap", resumoDados: resumo },
        secoes: [
          {
            tipo: "tabela",
            titulo: "Procedimentos compatíveis",
            cabecalho: ["Código", "Procedimento", "Valor (R$)", "CBOs"],
            linhas: filtrados.map((p) => [
              p.codigo,
              p.nome,
              p.valor.toFixed(2),
              p.cbosCompativeis.map((c) => `${c} - ${cbosNomes[c] || c}`).join("; "),
            ]),
          },
          ...(comLimite.length > 0
            ? [
                {
                  tipo: "tabela" as const,
                  titulo: "Limites de cobrança detectados",
                  cabecalho: ["Código", "Procedimento", "Limites"],
                  linhas: comLimite.map((p) => [
                    p.codigo,
                    p.nome,
                    resumoLimites(extrairLimitesCobranca(p.descricao || "")),
                  ]),
                },
              ]
            : []),
        ],
        nomeArquivo: `sigtap_${cid}_${indicacao}`,
      });
    } catch (e) {
      toast({ title: "Erro ao gerar PDF", description: (e as Error).message, variant: "destructive" });
    } finally {
      setGerandoPdf(false);
    }
  }

  if (resultados.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-medical-warning/10 flex items-center justify-center mb-4">
          <AlertTriangle className="w-8 h-8 text-medical-warning" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Nenhum procedimento encontrado</h3>
        <p className="text-muted-foreground max-w-md">
          Não foram encontrados procedimentos compatíveis com o CID <strong>{cid}</strong> para a indicação <strong>{indicacaoNome}</strong> no subgrupo 0304 do SIGTAP.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-foreground">
            {filtrados.length} procedimento{filtrados.length !== 1 ? "s" : ""} encontrado{filtrados.length !== 1 ? "s" : ""}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground break-anywhere">
            CID: <strong>{cid}</strong> - {cidDescricao} | {indicacaoNome}
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={exportarCSV} className="flex-1 sm:flex-none">
            <FileSpreadsheet className="w-4 h-4 mr-1" /> CSV
          </Button>
          <Button variant="outline" size="sm" onClick={exportarPDF} disabled={gerandoPdf} className="flex-1 sm:flex-none">
            {gerandoPdf ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <FileDown className="w-4 h-4 mr-1" />}
            {gerandoPdf ? "Gerando…" : "PDF"}
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-3 bg-secondary/50 rounded-lg">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 shrink-0">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs sm:text-sm text-muted-foreground">Valor:</span>
          </div>
          <Input
            type="number"
            inputMode="decimal"
            placeholder="Mín"
            value={filtroValorMin}
            onChange={(e) => setFiltroValorMin(e.target.value)}
            className="w-20 sm:w-28 h-8"
          />
          <span className="text-muted-foreground text-xs">a</span>
          <Input
            type="number"
            inputMode="decimal"
            placeholder="Máx"
            value={filtroValorMax}
            onChange={(e) => setFiltroValorMax(e.target.value)}
            className="w-20 sm:w-28 h-8"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="flex items-center gap-2 shrink-0">
            <UserRound className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs sm:text-sm text-muted-foreground">CBO:</span>
          </div>
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <Select value={filtroCbo} onValueChange={setFiltroCbo}>
              <SelectTrigger className="h-8 flex-1 min-w-0 text-xs sm:text-sm">
                <SelectValue placeholder="Selecione um profissional..." />
              </SelectTrigger>
              <SelectContent className="max-w-[calc(100vw-2rem)]">
                <SelectItem value="todos">Todos ({cbosDisponiveis.length})</SelectItem>
                {cbosDisponiveis.map((cbo) => (
                  <SelectItem key={cbo} value={cbo}>
                    <span className="font-mono text-xs text-muted-foreground mr-2">{cbo}</span>
                    {cbosNomes[cbo] || cbo}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {filtroCbo !== "todos" && (
              <Button variant="ghost" size="sm" className="h-8 px-2 shrink-0" onClick={() => setFiltroCbo("todos")}>
                <X className="w-3.5 h-3.5" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile: Cards */}
      <div className="md:hidden space-y-2">
        {filtrados.map((p) => {
          const limites = extrairLimitesCobranca(p.descricao || "");
          return (
          <button
            key={p.codigo}
            type="button"
            onClick={() => setSelectedProc(p)}
            className="w-full text-left rounded-lg border border-border bg-card hover:bg-primary/5 transition-colors p-3 space-y-2"
          >
            <div className="flex items-start justify-between gap-2">
              <Badge variant="outline" className="font-mono text-xs shrink-0">{p.codigo}</Badge>
              <span className="font-semibold text-sm text-foreground shrink-0">R$ {p.valor.toFixed(2)}</span>
            </div>
            <div className="flex items-start gap-1 text-sm text-foreground break-anywhere">
              <span className="flex-1">{p.nome}</span>
              <ExternalLink className="w-3 h-3 text-muted-foreground/60 mt-1 shrink-0" />
            </div>
            {limites.length > 0 && (
              <div className="flex items-center gap-1 text-[11px] text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/20 border border-amber-500/40 rounded px-2 py-1">
                <AlertTriangle className="w-3 h-3 shrink-0" />
                <span className="break-anywhere">Limite de cobrança: {resumoLimites(limites)}</span>
              </div>
            )}
            {(p.idadeMinima || p.idadeMaxima) && (
              <div className="text-[11px] text-muted-foreground">
                Idade: {p.idadeMinima || "—"} a {p.idadeMaxima || "—"}{p.sexo ? ` · ${p.sexo}` : ""}
              </div>
            )}
            <div className="flex flex-wrap gap-1">
              {p.cbosCompativeis.map((cbo) => (
                <Badge key={cbo} variant="secondary" className="text-[10px] whitespace-normal text-left break-anywhere leading-tight">
                  {cbo} - {cbosNomes[cbo] || cbo}
                </Badge>
              ))}
            </div>
          </button>
          );
        })}
      </div>

      {/* Desktop: Tabela */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="gradient-medical">
              <th className="px-4 py-3 text-left font-semibold text-primary-foreground">Código</th>
              <th className="px-4 py-3 text-left font-semibold text-primary-foreground">Procedimento</th>
              <th className="px-4 py-3 text-right font-semibold text-primary-foreground">Valor (R$)</th>
              <th className="px-4 py-3 text-left font-semibold text-primary-foreground">Idade / Sexo</th>
              <th className="px-4 py-3 text-left font-semibold text-primary-foreground">CBOs Compatíveis</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((p, i) => {
              const limites = extrairLimitesCobranca(p.descricao || "");
              return (
              <tr
                key={p.codigo}
                className={`${i % 2 === 0 ? "bg-card" : "bg-secondary/30"} cursor-pointer hover:bg-primary/5 transition-colors`}
                onClick={() => setSelectedProc(p)}
              >
                <td className="px-4 py-3 font-mono text-xs font-medium text-primary align-top">{p.codigo}</td>
                <td className="px-4 py-3 text-foreground align-top">
                  <span className="flex items-center gap-1">
                    {p.nome}
                    <ExternalLink className="w-3 h-3 text-muted-foreground/50" />
                  </span>
                  {limites.length > 0 && (
                    <div className="mt-1.5 inline-flex items-center gap-1 text-[11px] text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/20 border border-amber-500/40 rounded px-2 py-0.5">
                      <AlertTriangle className="w-3 h-3 shrink-0" />
                      <span>Limite de cobrança: {resumoLimites(limites)}</span>
                    </div>
                  )}
                </td>
                <td className="px-4 py-3 text-right font-semibold text-foreground align-top">
                  R$ {p.valor.toFixed(2)}
                </td>
                <td className="px-4 py-3 align-top text-xs text-muted-foreground">
                  {(p.idadeMinima || p.idadeMaxima)
                    ? <>{p.idadeMinima || "—"} a {p.idadeMaxima || "—"}{p.sexo ? <><br/>{p.sexo}</> : null}</>
                    : "—"}
                </td>
                <td className="px-4 py-3 align-top">
                  <div className="flex flex-wrap gap-1">
                    {p.cbosCompativeis.map((cbo) => (
                      <Badge key={cbo} variant="secondary" className="text-xs whitespace-nowrap">
                        {cbo} - {cbosNomes[cbo] || cbo}
                      </Badge>
                    ))}
                  </div>
                </td>
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ProcedimentoDetail
        procedimento={selectedProc}
        open={!!selectedProc}
        onOpenChange={(open) => { if (!open) setSelectedProc(null); }}
      />
    </div>
  );
}
