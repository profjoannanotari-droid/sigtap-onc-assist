import { useMemo, useState } from "react";
import { AlertTriangle, FileDown, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { gerarRelatorioPDF } from "@/lib/pdfReport";
import {
  cidsAusentesSigtap,
  fonteCidOficial,
  gruposNeoplasia,
  type GrupoNeoplasia,
} from "@/data/cidAusentesSigtap";

interface Props {
  /** CIDs que constam da base SIGTAP porém sem qualquer procedimento do subgrupo 0304 */
  semProcedimento: { codigo: string; descricao: string }[];
  totalCidsBase: number;
}

const ordemGrupos: GrupoNeoplasia[] = ["maligna", "in_situ", "incerta"];

export function CidsForaSigtap({ semProcedimento, totalCidsBase }: Props) {
  const [busca, setBusca] = useState("");
  const [gerando, setGerando] = useState(false);

  const porGrupo = useMemo(
    () =>
      ordemGrupos.map((g) => ({
        grupo: g,
        nome: gruposNeoplasia[g],
        itens: cidsAusentesSigtap.filter((c) => c.grupo === g),
      })),
    [],
  );

  const filtrados = useMemo(() => {
    const t = busca.trim().toLowerCase();
    if (!t) return cidsAusentesSigtap;
    return cidsAusentesSigtap.filter(
      (c) => c.codigo.toLowerCase().includes(t) || c.descricao.toLowerCase().includes(t),
    );
  }, [busca]);

  const cobertura = ((fonteCidOficial.universo - cidsAusentesSigtap.length) / fonteCidOficial.universo) * 100;

  function exportarCSV() {
    const header = ["CID-10", "Descrição oficial", "Grupo"];
    const linhas = cidsAusentesSigtap.map((c) => [
      c.codigo,
      `"${c.descricao.replace(/"/g, '""')}"`,
      gruposNeoplasia[c.grupo],
    ]);
    const csv = [header.join(";"), ...linhas.map((r) => r.join(";"))].join("\n");
    const url = URL.createObjectURL(new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `cids-oncologicos-fora-sigtap-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function exportarPDF() {
    setGerando(true);
    try {
      const resumo =
        `Confronto entre o universo oficial de códigos oncológicos da CID-10 (fonte: ${fonteCidOficial.nome}, ` +
        `escopo ${fonteCidOficial.escopo}, ${fonteCidOficial.universo} códigos) e a base de compatibilidade ` +
        `CID x procedimento do subgrupo 0304 da tabela SIGTAP carregada no sistema (${totalCidsBase} códigos). ` +
        `${cidsAusentesSigtap.length} códigos oncológicos oficiais não constam da tabela SIGTAP ` +
        `(${cobertura.toFixed(1)}% de cobertura nominal). Distribuição: ` +
        porGrupo.map((g) => `${g.nome}: ${g.itens.length} ausentes`).join("; ") +
        `. Além disso, ${semProcedimento.length} códigos presentes na base não possuem qualquer procedimento ` +
        `do subgrupo 0304 vinculado.`;

      await gerarRelatorioPDF({
        titulo: "CIDs Oncológicos Não Contemplados pela Tabela SIGTAP",
        subtitulo: `Confronto com a fonte oficial CID-10 (DATASUS) — ${fonteCidOficial.escopo}`,
        badges: [
          `${fonteCidOficial.universo} CIDs oficiais`,
          `${cidsAusentesSigtap.length} ausentes do SIGTAP`,
          `${cobertura.toFixed(1)}% de cobertura`,
        ],
        contextoIA: {
          tipo: "auditoria",
          resumoDados: resumo,
          publicoAlvo: "Gestão, auditoria e regulação em oncologia (SUS)",
        },
        secoes: [
          {
            tipo: "paragrafo",
            texto:
              `Fonte de referência: ${fonteCidOficial.nome}. Universo: ${fonteCidOficial.escopo}, ` +
              `totalizando ${fonteCidOficial.universo} códigos (categorias sem subdivisão e subcategorias de 4 caracteres). ` +
              `Base comparada: compatibilidade CID x procedimento do subgrupo 0304 da tabela SIGTAP vigente no sistema.`,
          },
          {
            tipo: "tabela",
            titulo: "Síntese por grupo de neoplasia",
            cabecalho: ["Grupo (CID-10)", "Ausentes do SIGTAP"],
            linhas: porGrupo.map((g) => [g.nome, String(g.itens.length)]),
          },
          ...porGrupo
            .filter((g) => g.itens.length > 0)
            .map((g) => ({
              tipo: "tabela" as const,
              titulo: `Códigos ausentes — ${g.nome}`,
              cabecalho: ["CID-10", "Descrição oficial"],
              linhas: g.itens.map((c) => [c.codigo, c.descricao]),
            })),
          ...(semProcedimento.length > 0
            ? [
                {
                  tipo: "tabela" as const,
                  titulo: "CIDs presentes no SIGTAP porém sem qualquer procedimento do subgrupo 0304",
                  cabecalho: ["CID-10", "Descrição"],
                  linhas: semProcedimento.map((c) => [c.codigo, c.descricao]),
                },
              ]
            : [
                {
                  tipo: "paragrafo" as const,
                  texto:
                    "Todos os CIDs presentes na base SIGTAP possuem ao menos um procedimento vinculado no subgrupo 0304; " +
                    "as lacunas concentram-se nas formas de organização e nos códigos oncológicos oficiais ausentes da tabela.",
                },
              ]),
        ],
        nomeArquivo: `cids-fora-sigtap-${new Date().toISOString().slice(0, 10)}`,
      });
    } finally {
      setGerando(false);
    }
  }

  return (
    <Card className="border-destructive/30">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <CardTitle className="text-base flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              CIDs oncológicos não contemplados pela tabela SIGTAP
            </CardTitle>
            <CardDescription className="mt-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Fonte oficial: {fonteCidOficial.nome} — {fonteCidOficial.escopo}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={exportarCSV}>
              <FileDown className="w-4 h-4 mr-1" /> CSV
            </Button>
            <Button size="sm" onClick={exportarPDF} disabled={gerando}>
              <FileDown className="w-4 h-4 mr-1" /> {gerando ? "Gerando..." : "Relatório PDF"}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2 sm:grid-cols-4">
          <div className="rounded-lg border p-3">
            <p className="text-xs text-muted-foreground">CIDs oncológicos oficiais</p>
            <p className="text-xl font-semibold">{fonteCidOficial.universo}</p>
          </div>
          <div className="rounded-lg border p-3">
            <p className="text-xs text-muted-foreground">Presentes no SIGTAP</p>
            <p className="text-xl font-semibold text-primary">{fonteCidOficial.universo - cidsAusentesSigtap.length}</p>
          </div>
          <div className="rounded-lg border border-destructive/40 p-3">
            <p className="text-xs text-muted-foreground">Ausentes do SIGTAP</p>
            <p className="text-xl font-semibold text-destructive">{cidsAusentesSigtap.length}</p>
          </div>
          <div className="rounded-lg border p-3">
            <p className="text-xs text-muted-foreground">Cobertura nominal</p>
            <p className="text-xl font-semibold">{cobertura.toFixed(1)}%</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {porGrupo.map((g) => (
            <Badge key={g.grupo} variant={g.itens.length ? "destructive" : "secondary"}>
              {g.nome}: {g.itens.length} ausente(s)
            </Badge>
          ))}
          {semProcedimento.length > 0 && (
            <Badge variant="destructive">{semProcedimento.length} CID(s) sem procedimento no 0304</Badge>
          )}
        </div>

        <div className="relative max-w-sm">
          <Search className="w-4 h-4 absolute left-2.5 top-2.5 text-muted-foreground" />
          <Input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar código ou descrição"
            className="pl-8"
          />
        </div>

        <div className="overflow-x-auto max-h-[420px] overflow-y-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-24">CID-10</TableHead>
                <TableHead>Descrição oficial</TableHead>
                <TableHead className="w-56">Grupo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtrados.map((c) => (
                <TableRow key={c.codigo}>
                  <TableCell className="font-mono text-xs">{c.codigo}</TableCell>
                  <TableCell className="text-xs">{c.descricao}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{gruposNeoplasia[c.grupo]}</TableCell>
                </TableRow>
              ))}
              {filtrados.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-sm text-muted-foreground py-8">
                    Nenhum código encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <p className="text-xs text-muted-foreground">
          Relação completa ({cidsAusentesSigtap.length} códigos) incluída no CSV e no relatório PDF, sem truncamento.
        </p>
      </CardContent>
    </Card>
  );
}
