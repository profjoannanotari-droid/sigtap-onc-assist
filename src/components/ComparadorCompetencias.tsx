import { useMemo, useState } from "react";
import { Upload, FileDown, Loader2, GitCompareArrows, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  parseProcedimentosXLS,
  diffSnapshots,
  type SnapshotCompetencia,
  type DiffResult,
} from "@/lib/sigtapXlsParser";
import { gerarRelatorioPDF } from "@/lib/pdfReport";
import { toast } from "@/hooks/use-toast";

function formatarValor(v?: number) {
  if (v === undefined) return "—";
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function listaCurta(items: string[], max = 8): string {
  if (items.length === 0) return "—";
  if (items.length <= max) return items.join(", ");
  return items.slice(0, max).join(", ") + ` … (+${items.length - max})`;
}

interface SlotProps {
  rotulo: string;
  competencia: string;
  setCompetencia: (s: string) => void;
  snap: SnapshotCompetencia | null;
  setSnap: (s: SnapshotCompetencia | null) => void;
}

function SlotUpload({ rotulo, competencia, setCompetencia, snap, setSnap }: SlotProps) {
  const [carregando, setCarregando] = useState(false);
  async function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setCarregando(true);
    try {
      const s = await parseProcedimentosXLS(f);
      if (s.totalProcedimentos === 0) {
        toast({ title: "Arquivo sem procedimentos do subgrupo 0304", variant: "destructive" });
        return;
      }
      setSnap(s);
    } catch (err) {
      toast({ title: "Falha ao ler XLS", description: (err as Error).message, variant: "destructive" });
    } finally {
      setCarregando(false);
      e.target.value = "";
    }
  }
  return (
    <div className="flex-1 min-w-0 border rounded-md p-3 space-y-2 bg-card">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-muted-foreground">{rotulo}</span>
        {snap && (
          <Button variant="ghost" size="sm" className="h-6 px-2" onClick={() => setSnap(null)}>
            <Trash2 className="w-3 h-3" />
          </Button>
        )}
      </div>
      <Input
        placeholder="Competência (ex: 04/2026)"
        value={competencia}
        onChange={(e) => setCompetencia(e.target.value)}
        className="h-8 text-sm"
      />
      <label className="block">
        <input type="file" accept=".xls,.xlsx" className="hidden" onChange={onPick} disabled={carregando} />
        <span className="inline-flex items-center justify-center gap-2 w-full h-9 rounded-md border border-dashed cursor-pointer text-xs hover:bg-accent">
          {carregando ? <Loader2 className="w-3 h-3 animate-spin" /> : <Upload className="w-3 h-3" />}
          {snap ? "Substituir arquivo" : "Selecionar TABELA_PROCEDIMENTO_SIGTAP"}
        </span>
      </label>
      {snap && (
        <div className="text-[11px] text-muted-foreground break-anywhere">
          <span className="font-medium text-foreground">{snap.arquivoNome}</span>
          <span> · {snap.totalProcedimentos} procedimentos</span>
        </div>
      )}
    </div>
  );
}

export default function ComparadorCompetencias() {
  const [compA, setCompA] = useState("");
  const [compB, setCompB] = useState("");
  const [snapA, setSnapA] = useState<SnapshotCompetencia | null>(null);
  const [snapB, setSnapB] = useState<SnapshotCompetencia | null>(null);
  const [resultado, setResultado] = useState<DiffResult | null>(null);
  const [filtro, setFiltro] = useState("");
  const [gerandoPdf, setGerandoPdf] = useState(false);

  function comparar() {
    if (!snapA || !snapB) {
      toast({ title: "Carregue os dois arquivos antes de comparar.", variant: "destructive" });
      return;
    }
    setResultado(diffSnapshots(snapA, snapB));
  }

  const filtradas = useMemo(() => {
    if (!resultado) return [];
    const t = filtro.trim().toLowerCase();
    if (!t) return resultado.diffs;
    return resultado.diffs.filter((d) => d.codigo.includes(t) || d.nome.toLowerCase().includes(t));
  }, [resultado, filtro]);

  async function exportarPDF() {
    if (!resultado || !snapA || !snapB) return;
    setGerandoPdf(true);
    try {
      const ant = compA || "anterior";
      const dep = compB || "atual";
      const r = resultado.resumo;
      const resumoTxt =
        `Comparação SIGTAP entre competência ${ant} (${snapA.totalProcedimentos} proc.) e ${dep} (${snapB.totalProcedimentos} proc.) ` +
        `do subgrupo 0304. Mudanças: ${r.adicionados} adicionado(s), ${r.removidos} removido(s), ${r.valorAlterado} com valor alterado, ` +
        `${r.cidsAlterado} com CIDs alterados, ${r.cbosAlterado} com CBOs alterados, ${r.idadeAlterado} com faixa etária alterada, ` +
        `${r.sexoAlterado} com sexo alterado, ${r.nomeAlterado} com nome alterado.`;
      const linhas = filtradas.map((d) => {
        const idadeTxt =
          (d.idadeMinAntes !== undefined || d.idadeMinDepois !== undefined ? `min: ${d.idadeMinAntes || "—"}→${d.idadeMinDepois || "—"} ` : "") +
          (d.idadeMaxAntes !== undefined || d.idadeMaxDepois !== undefined ? `max: ${d.idadeMaxAntes || "—"}→${d.idadeMaxDepois || "—"} ` : "") +
          (d.sexoAntes !== undefined || d.sexoDepois !== undefined ? `sexo: ${d.sexoAntes || "—"}→${d.sexoDepois || "—"}` : "");
        return [
          d.codigo,
          d.nome,
          d.tipo,
          `${formatarValor(d.valorAntes)} → ${formatarValor(d.valorDepois)}`,
          `+${d.cidsAdicionados.length} / -${d.cidsRemovidos.length}`,
          `+${d.cbosAdicionados.length} / -${d.cbosRemovidos.length}`,
          idadeTxt.trim() || "—",
        ];
      });
      await gerarRelatorioPDF({
        titulo: "Comparação entre Competências SIGTAP",
        subtitulo: `${ant} → ${dep}`,
        badges: [
          `${snapA.totalProcedimentos} → ${snapB.totalProcedimentos} proc.`,
          `${resultado.diffs.length} mudança(s)`,
        ],
        contextoIA: { tipo: "auditoria", resumoDados: resumoTxt },
        secoes: [
          {
            tipo: "kv",
            titulo: "Resumo das mudanças",
            itens: [
              { chave: "Competência anterior", valor: ant },
              { chave: "Competência atual", valor: dep },
              { chave: "Procedimentos antes", valor: String(snapA.totalProcedimentos) },
              { chave: "Procedimentos depois", valor: String(snapB.totalProcedimentos) },
              { chave: "Adicionados", valor: String(r.adicionados) },
              { chave: "Removidos", valor: String(r.removidos) },
              { chave: "Valor alterado", valor: String(r.valorAlterado) },
              { chave: "Nome alterado", valor: String(r.nomeAlterado) },
              { chave: "CIDs alterados", valor: String(r.cidsAlterado) },
              { chave: "CBOs alterados", valor: String(r.cbosAlterado) },
              { chave: "Idade alterada", valor: String(r.idadeAlterado) },
              { chave: "Sexo alterado", valor: String(r.sexoAlterado) },
            ],
          },
          {
            tipo: "tabela",
            titulo: "Procedimentos alterados",
            cabecalho: ["Código", "Nome", "Tipo", "Valor (antes → depois)", "CIDs ±", "CBOs ±", "Idade / Sexo"],
            linhas: linhas.length > 0 ? linhas : [["—", "Nenhuma mudança detectada", "—", "—", "—", "—", "—"]],
          },
        ],
        nomeArquivo: `comparacao_${ant.replace("/", "-")}_${dep.replace("/", "-")}`,
      });
    } catch (e) {
      toast({ title: "Erro ao gerar PDF", description: (e as Error).message, variant: "destructive" });
    } finally {
      setGerandoPdf(false);
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <GitCompareArrows className="w-4 h-4 text-primary" />
          Comparar competências SIGTAP
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          Carregue os arquivos <code>TABELA_PROCEDIMENTO_SIGTAP</code> (.xls) de duas competências quaisquer
          para gerar um relatório detalhado de diferenças com antes/depois de valor, CIDs e CBOs.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <SlotUpload rotulo="Competência anterior" competencia={compA} setCompetencia={setCompA} snap={snapA} setSnap={setSnapA} />
          <SlotUpload rotulo="Competência atual" competencia={compB} setCompetencia={setCompB} snap={snapB} setSnap={setSnapB} />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Button onClick={comparar} disabled={!snapA || !snapB} size="sm">
            <GitCompareArrows className="w-4 h-4 mr-1" /> Comparar
          </Button>
          {resultado && (
            <Button variant="outline" size="sm" onClick={exportarPDF} disabled={gerandoPdf}>
              {gerandoPdf ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <FileDown className="w-4 h-4 mr-1" />}
              {gerandoPdf ? "Gerando…" : "Relatório PDF"}
            </Button>
          )}
        </div>

        {resultado && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-8 gap-2 text-sm">
              {[
                ["Adicionados", resultado.resumo.adicionados],
                ["Removidos", resultado.resumo.removidos],
                ["Valor", resultado.resumo.valorAlterado],
                ["Nome", resultado.resumo.nomeAlterado],
                ["CIDs", resultado.resumo.cidsAlterado],
                ["CBOs", resultado.resumo.cbosAlterado],
                ["Idade", resultado.resumo.idadeAlterado],
                ["Sexo", resultado.resumo.sexoAlterado],
              ].map(([k, v]) => (
                <div key={k} className="border rounded-md p-2 bg-card">
                  <p className="text-[10px] text-muted-foreground uppercase">{k}</p>
                  <p className="font-semibold">{v}</p>
                </div>
              ))}
            </div>

            <Input
              placeholder="Filtrar por código ou nome…"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="h-9"
            />

            <div className="border rounded-md overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[110px]">Código</TableHead>
                    <TableHead>Procedimento</TableHead>
                    <TableHead className="w-[110px]">Tipo</TableHead>
                    <TableHead className="w-[180px]">Valor (antes → depois)</TableHead>
                    <TableHead>CIDs (Δ)</TableHead>
                    <TableHead>CBOs (Δ)</TableHead>
                    <TableHead className="w-[180px]">Idade / Sexo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtradas.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center text-muted-foreground py-6 text-sm">
                        Nenhuma diferença encontrada{filtro ? " com este filtro" : ""}.
                      </TableCell>
                    </TableRow>
                  )}
                  {filtradas.map((d) => {
                    const valorMudou = d.valorAntes !== undefined && d.valorDepois !== undefined && Math.abs(d.valorAntes - d.valorDepois) > 0.001;
                    return (
                      <TableRow key={d.codigo}>
                        <TableCell className="font-mono text-xs text-primary">{d.codigo}</TableCell>
                        <TableCell className="text-sm break-anywhere">
                          {d.nome}
                          {d.nomeAntes && d.nomeDepois && (
                            <p className="text-[10px] text-muted-foreground mt-1">
                              Nome anterior: <span className="line-through">{d.nomeAntes}</span>
                            </p>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={d.tipo === "adicionado" ? "default" : d.tipo === "removido" ? "destructive" : "secondary"}
                            className="text-[10px] capitalize"
                          >
                            {d.tipo}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-xs">
                          <span className={valorMudou ? "font-semibold text-destructive" : ""}>
                            {formatarValor(d.valorAntes)} → {formatarValor(d.valorDepois)}
                          </span>
                        </TableCell>
                        <TableCell className="text-xs">
                          {d.cidsAdicionados.length > 0 && (
                            <p><span className="text-green-600 font-medium">+{d.cidsAdicionados.length}:</span> {listaCurta(d.cidsAdicionados)}</p>
                          )}
                          {d.cidsRemovidos.length > 0 && (
                            <p><span className="text-destructive font-medium">−{d.cidsRemovidos.length}:</span> {listaCurta(d.cidsRemovidos)}</p>
                          )}
                          {d.cidsAdicionados.length === 0 && d.cidsRemovidos.length === 0 && <span className="text-muted-foreground">—</span>}
                        </TableCell>
                        <TableCell className="text-xs">
                          {d.cbosAdicionados.length > 0 && (
                            <p><span className="text-green-600 font-medium">+{d.cbosAdicionados.length}:</span> {d.cbosAdicionados.join(", ")}</p>
                          )}
                          {d.cbosRemovidos.length > 0 && (
                            <p><span className="text-destructive font-medium">−{d.cbosRemovidos.length}:</span> {d.cbosRemovidos.join(", ")}</p>
                          )}
                          {d.cbosAdicionados.length === 0 && d.cbosRemovidos.length === 0 && <span className="text-muted-foreground">—</span>}
                        </TableCell>
                        <TableCell className="text-xs">
                          {(d.idadeMinAntes !== undefined || d.idadeMinDepois !== undefined) && (
                            <p className="font-medium text-amber-700 dark:text-amber-300">
                              Idade min: {d.idadeMinAntes || "—"} → {d.idadeMinDepois || "—"}
                            </p>
                          )}
                          {(d.idadeMaxAntes !== undefined || d.idadeMaxDepois !== undefined) && (
                            <p className="font-medium text-amber-700 dark:text-amber-300">
                              Idade max: {d.idadeMaxAntes || "—"} → {d.idadeMaxDepois || "—"}
                            </p>
                          )}
                          {(d.sexoAntes !== undefined || d.sexoDepois !== undefined) && (
                            <p className="font-medium text-amber-700 dark:text-amber-300">
                              Sexo: {d.sexoAntes || "—"} → {d.sexoDepois || "—"}
                            </p>
                          )}
                          {d.idadeMinAntes === undefined && d.idadeMaxAntes === undefined && d.sexoAntes === undefined &&
                           d.idadeMinDepois === undefined && d.idadeMaxDepois === undefined && d.sexoDepois === undefined && (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
            <p className="text-[11px] text-muted-foreground">
              Mostrando {filtradas.length} de {resultado.diffs.length} mudança(s). Total de procedimentos:{" "}
              {resultado.totalAntes} → {resultado.totalDepois}.
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
