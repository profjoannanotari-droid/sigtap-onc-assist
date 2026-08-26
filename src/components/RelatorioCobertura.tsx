// Relatório de cobertura: agrupa CIDs pela quantidade de formas de organização (0304) atendidas.
// Exportação em Excel (.xlsx), PDF e Word (.doc).
import { useMemo, useState } from "react";
import * as XLSX from "xlsx";
import { FileDown, FileSpreadsheet, FileText, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { gerarRelatorioPDF } from "@/lib/pdfReport";
import { formasOrganizacao } from "@/data/formasOrganizacao";

export interface LinhaCobertura {
  codigo: string;
  descricao: string;
  cobertura: Record<string, number>;
  faltantes: string[];
}

interface Grupo {
  qtd: number;
  linhas: LinhaCobertura[];
}

const totalFormas = formasOrganizacao.length;
const curto = (c: string) => formasOrganizacao.find((f) => f.codigo === c)?.curto ?? c;
const nomeForma = (c: string) => formasOrganizacao.find((f) => f.codigo === c)?.nome ?? "";

function baixar(blob: Blob, nome: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = nome;
  a.click();
  URL.revokeObjectURL(url);
}

export function RelatorioCobertura({ linhas }: { linhas: LinhaCobertura[] }) {
  const [gerando, setGerando] = useState(false);

  const grupos = useMemo<Grupo[]>(() => {
    const mapa = new Map<number, LinhaCobertura[]>();
    for (const l of linhas) {
      const qtd = formasOrganizacao.filter((f) => l.cobertura[f.codigo]).length;
      if (!mapa.has(qtd)) mapa.set(qtd, []);
      mapa.get(qtd)!.push(l);
    }
    return Array.from({ length: totalFormas + 1 }, (_, i) => totalFormas - i).map((qtd) => ({
      qtd,
      linhas: (mapa.get(qtd) ?? []).sort((a, b) => a.codigo.localeCompare(b.codigo)),
    }));
  }, [linhas]);

  const dataStr = new Date().toISOString().slice(0, 10);

  const linhasDetalhe = useMemo(
    () =>
      grupos.flatMap((g) =>
        g.linhas.map((l) => ({
          formasAtendidas: g.qtd,
          codigo: l.codigo,
          descricao: l.descricao,
          atendidas: formasOrganizacao.filter((f) => l.cobertura[f.codigo]).map((f) => `${f.curto} ${f.nome}`).join(" | "),
          faltantes: l.faltantes.map((c) => `${curto(c)} ${nomeForma(c)}`).join(" | "),
        })),
      ),
    [grupos],
  );

  function exportarExcel() {
    const wb = XLSX.utils.book_new();
    const resumo = grupos.map((g) => ({
      "Formas de organização atendidas": g.qtd,
      "Qtd. de CIDs": g.linhas.length,
      "% do total": linhas.length ? `${((g.linhas.length / linhas.length) * 100).toFixed(1)}%` : "0%",
      "Formas faltantes": totalFormas - g.qtd,
    }));
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(resumo), "Resumo");
    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(
        linhasDetalhe.map((d) => ({
          "Formas atendidas": d.formasAtendidas,
          CID: d.codigo,
          Descrição: d.descricao,
          "Formas com código": d.atendidas || "—",
          "Formas SEM código": d.faltantes || "—",
        })),
      ),
      "Detalhe por CID",
    );
    const matriz = linhas.map((l) => {
      const row: Record<string, string | number> = { CID: l.codigo, Descrição: l.descricao };
      for (const f of formasOrganizacao) row[`${f.curto} ${f.nome}`] = l.cobertura[f.codigo] ? l.cobertura[f.codigo] : 0;
      row["Total de formas atendidas"] = formasOrganizacao.filter((f) => l.cobertura[f.codigo]).length;
      return row;
    });
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(matriz), "Matriz CID x Forma");
    const out = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    baixar(new Blob([out], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }), `cobertura-cid-formas-${dataStr}.xlsx`);
  }

  function exportarWord() {
    const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const resumoRows = grupos
      .map(
        (g) =>
          `<tr><td>${g.qtd} de ${totalFormas}</td><td>${g.linhas.length}</td><td>${
            linhas.length ? ((g.linhas.length / linhas.length) * 100).toFixed(1) : "0"
          }%</td></tr>`,
      )
      .join("");
    const secoes = grupos
      .filter((g) => g.linhas.length)
      .map(
        (g) =>
          `<h2>CIDs com ${g.qtd} de ${totalFormas} formas de organização (${g.linhas.length})</h2>` +
          `<table border="1" cellspacing="0" cellpadding="4" style="border-collapse:collapse;width:100%"><tr style="background:#e2e8f0"><th>CID</th><th>Descrição</th><th>Formas sem código</th></tr>` +
          g.linhas
            .map(
              (l) =>
                `<tr><td>${esc(l.codigo)}</td><td>${esc(l.descricao)}</td><td>${esc(
                  l.faltantes.map((c) => `${curto(c)} ${nomeForma(c)}`).join("; ") || "—",
                )}</td></tr>`,
            )
            .join("") +
          `</table>`,
      )
      .join("");
    const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>Cobertura CID x Formas de Organização</title></head><body style="font-family:Arial,sans-serif;color:#1e293b">
<h1 style="color:#0891b2">Cobertura de CID-10 por formas de organização (SIGTAP 0304)</h1>
<p>Objetivo: identificar CIDs oncológicos sem código de procedimento disponível para tratar o paciente em cada forma de organização.</p>
<p><em>Gerado em ${new Date().toLocaleString("pt-BR")} — ${linhas.length} CIDs analisados.</em></p>
<h2>Resumo por quantidade de formas atendidas</h2>
<table border="1" cellspacing="0" cellpadding="4" style="border-collapse:collapse;width:100%"><tr style="background:#e2e8f0"><th>Formas atendidas</th><th>Qtd. de CIDs</th><th>% do total</th></tr>${resumoRows}</table>
${secoes}</body></html>`;
    baixar(new Blob(["\ufeff" + html], { type: "application/msword" }), `cobertura-cid-formas-${dataStr}.doc`);
  }

  async function exportarPDF() {
    setGerando(true);
    try {
      const amostra = linhasDetalhe;
      await gerarRelatorioPDF({
        titulo: "Cobertura de CID-10 por formas de organização",
        subtitulo: "Distribuição dos CIDs oncológicos conforme o número de formas de organização do subgrupo 0304 com código disponível",
        badges: [`${linhas.length} CIDs`, `${totalFormas} formas`, `Gerado em ${new Date().toLocaleDateString("pt-BR")}`],
        contextoIA: {
          tipo: "auditoria",
          resumoDados:
            `Estudo de cobertura assistencial: ${linhas.length} CIDs oncológicos avaliados contra as ${totalFormas} formas de organização do subgrupo 0304 do SIGTAP. ` +
            `Distribuição: ${grupos.map((g) => `${g.qtd} formas: ${g.linhas.length} CIDs`).join("; ")}. ` +
            `O objetivo é identificar em quais CIDs não existe código de procedimento para tratar o paciente.`,
          publicoAlvo: "Gestão, auditoria e faturamento em oncologia (SUS)",
        },
        secoes: [
          {
            tipo: "tabela",
            titulo: "Resumo por quantidade de formas atendidas",
            cabecalho: ["Formas atendidas", "Qtd. de CIDs", "% do total", "Formas faltantes"],
            linhas: grupos.map((g) => [
              `${g.qtd} de ${totalFormas}`,
              String(g.linhas.length),
              linhas.length ? `${((g.linhas.length / linhas.length) * 100).toFixed(1)}%` : "0%",
              String(totalFormas - g.qtd),
            ]),
          },
          {
            tipo: "tabela",
            titulo: "Detalhe por CID",
            cabecalho: ["Formas", "CID", "Descrição", "Formas sem código"],
            linhas: amostra.map((d) => [String(d.formasAtendidas), d.codigo, d.descricao, d.faltantes || "—"]),
          },
          {
            tipo: "paragrafo" as const,
            texto: `Relação completa: ${linhasDetalhe.length} CID(s) listados.`,
          },
        ],
        nomeArquivo: `cobertura-cid-formas-${dataStr}`,
      });
    } finally {
      setGerando(false);
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3 flex-row items-center justify-between gap-2 flex-wrap">
        <CardTitle className="text-base flex items-center gap-2">
          <Layers className="w-4 h-4" /> Estudo de cobertura: CIDs por número de formas de organização
        </CardTitle>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" size="sm" onClick={exportarExcel}>
            <FileSpreadsheet className="w-4 h-4 mr-1" /> Excel
          </Button>
          <Button variant="outline" size="sm" onClick={exportarWord}>
            <FileText className="w-4 h-4 mr-1" /> Word
          </Button>
          <Button size="sm" onClick={exportarPDF} disabled={gerando}>
            <FileDown className="w-4 h-4 mr-1" /> {gerando ? "Gerando..." : "PDF"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-xs text-muted-foreground">
          Quantos CIDs possuem código em todas as {totalFormas} formas de organização, em 9, em 8 e assim por diante — para localizar onde não há código para tratar o paciente.
        </p>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-40">Formas atendidas</TableHead>
                <TableHead className="w-28">Qtd. de CIDs</TableHead>
                <TableHead className="w-24">% do total</TableHead>
                <TableHead>Exemplos de CID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {grupos.map((g) => (
                <TableRow key={g.qtd}>
                  <TableCell className="text-xs font-medium">
                    {g.qtd} de {totalFormas}
                    {g.qtd === totalFormas && <Badge className="ml-2 text-[10px]">completo</Badge>}
                    {g.qtd === 0 && <Badge variant="destructive" className="ml-2 text-[10px]">sem cobertura</Badge>}
                  </TableCell>
                  <TableCell className="text-xs font-semibold">{g.linhas.length}</TableCell>
                  <TableCell className="text-xs">
                    {linhas.length ? ((g.linhas.length / linhas.length) * 100).toFixed(1) : "0"}%
                  </TableCell>
                  <TableCell className="text-xs font-mono text-muted-foreground">
                    {g.linhas.slice(0, 12).map((l) => l.codigo).join(", ")}
                    {g.linhas.length > 12 ? ` … +${g.linhas.length - 12}` : ""}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
