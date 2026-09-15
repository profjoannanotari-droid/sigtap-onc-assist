import { useMemo, useState } from "react";
import { FileDown, History, Minus, Plus, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { gerarRelatorioPDF } from "@/lib/pdfReport";
import { listarBasesCompetencia, type BaseCompetencia } from "@/lib/competencias";
import { compararProcedimentos, nomeForma, rotuloMudanca, type DiffProc } from "@/lib/diffCompetencias";
import { atualizacaoInfo } from "@/data/atualizacao";
import { mudancasCompatLegiveis, rotuloVinculo } from "@/lib/mudancasCompat";

const origemRotulo: Record<BaseCompetencia["origem"], string> = {
  atual: "Base vigente",
  derivada: "Reconstruída",
  upload: "Importada",
};

interface ItemHistorico {
  base: BaseCompetencia;
  anterior?: BaseCompetencia;
  diffs: DiffProc[];
  compat: typeof mudancasCompatLegiveis;
}

export function HistoricoAtualizacoes() {
  const [gerando, setGerando] = useState<string | null>(null);

  const itens = useMemo<ItemHistorico[]>(() => {
    const bases = listarBasesCompetencia();
    return bases.map((base, i) => {
      const anterior = bases[i + 1];
      return {
        base,
        anterior,
        diffs: anterior ? compararProcedimentos(anterior.procedimentos, base.procedimentos) : [],
        compat: base.competencia === atualizacaoInfo.competencia ? mudancasCompatLegiveis : [],
      };
    });
  }, []);

  async function exportar(item: ItemHistorico) {
    setGerando(item.base.competencia);
    try {
      const { base, anterior, diffs, compat } = item;
      const totalVinculos = compat.reduce((s, m) => s + m.vinculos.length, 0);
      await gerarRelatorioPDF({
        titulo: `Auditoria da competência ${base.competencia}`,
        subtitulo: anterior
          ? `Comparação com a competência ${anterior.competencia} · subgrupo 0304 (Oncologia)`
          : "Primeira competência registrada no sistema · subgrupo 0304 (Oncologia)",
        badges: [
          origemRotulo[base.origem],
          `${base.procedimentos.length} procedimentos`,
          `${diffs.length} mudança(s) de cadastro`,
          `${compat.length} procedimento(s) com compatibilidade alterada`,
        ],
        contextoIA: {
          tipo: "auditoria",
          resumoDados:
            `Auditoria da competência ${base.competencia}` +
            (anterior ? ` frente à competência ${anterior.competencia}` : "") +
            `. ${base.procedimentos.length} procedimentos no subgrupo 0304, ` +
            `${diffs.length} alteração(ões) de cadastro e ${compat.length} procedimento(s) com ` +
            `${totalVinculos} mudança(s) nas regras de compatibilidade.`,
          publicoAlvo: "Auditoria e faturamento em oncologia (SUS)",
        },
        secoes: [
          {
            tipo: "kv",
            titulo: "Identificação da competência",
            itens: [
              { chave: "Competência", valor: base.competencia },
              { chave: "Origem da base", valor: origemRotulo[base.origem] },
              { chave: "Competência comparada", valor: anterior?.competencia ?? "—" },
              { chave: "Procedimentos", valor: String(base.procedimentos.length) },
              { chave: "Observação", valor: base.observacao ?? "—" },
            ],
          },
          diffs.length
            ? {
                tipo: "tabela" as const,
                titulo: "Mudanças no cadastro dos procedimentos",
                cabecalho: ["Código", "Procedimento", "Forma", "Tipo", "Antes", "Depois"],
                linhas: diffs.map((d) => [d.codigo, d.nome, nomeForma(d.forma), rotuloMudanca[d.tipo], d.antes, d.depois]),
                larguras: [10, 24, 16, 10, 20, 20],
              }
            : {
                tipo: "paragrafo" as const,
                titulo: "Mudanças no cadastro dos procedimentos",
                texto: anterior
                  ? "Nenhuma alteração de cadastro em relação à competência anterior."
                  : "Não há competência anterior registrada para comparação.",
              },
          compat.length
            ? {
                tipo: "tabela" as const,
                titulo: "Mudanças nas regras de compatibilidade",
                cabecalho: ["Código", "Procedimento", "Mudança", "Procedimento vinculado", "Regra"],
                linhas: compat.flatMap((m) =>
                  m.vinculos.map((v) => [
                    m.codigo,
                    m.nome,
                    rotuloVinculo[v.tipo],
                    v.codigo ? `${v.codigo} — ${v.nome}` : v.nome,
                    [
                      v.categoria,
                      v.quantidade ? `quantidade máxima ${v.quantidade}` : "",
                      v.desde ? `vigente desde ${v.desde}` : "",
                    ]
                      .filter(Boolean)
                      .join(" · ") || "—",
                  ]),
                ),
                larguras: [10, 24, 12, 26, 28],
              }
            : {
                tipo: "paragrafo" as const,
                titulo: "Mudanças nas regras de compatibilidade",
                texto: "Sem alterações registradas nas regras de compatibilidade desta competência.",
              },
        ],
        nomeArquivo: `auditoria_${base.competencia.replace("/", "-")}`,
      });
      toast({ title: "Relatório gerado", description: `Auditoria de ${base.competencia} baixada em PDF.` });
    } catch (e) {
      toast({ title: "Falha ao gerar o relatório", description: (e as Error).message, variant: "destructive" });
    } finally {
      setGerando(null);
    }
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <History className="w-4 h-4" /> Histórico de atualizações ({itens.length} competência(s))
          </CardTitle>
          <p className="text-xs text-muted-foreground">
            Cada competência disponível no sistema, com as mudanças em relação à competência anterior e o PDF da auditoria.
          </p>
        </CardHeader>
      </Card>

      {itens.map((item) => (
        <Card key={item.base.competencia}>
          <CardHeader className="pb-3 gap-3">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="min-w-0">
                <CardTitle className="text-base">Competência {item.base.competencia}</CardTitle>
                <p className="text-xs text-muted-foreground mt-1 break-words">
                  {item.base.observacao ?? item.base.rotulo}
                </p>
              </div>
              <Button
                size="sm"
                onClick={() => exportar(item)}
                disabled={gerando === item.base.competencia}
              >
                <FileDown className="w-4 h-4 mr-1" />
                {gerando === item.base.competencia ? "Gerando..." : "PDF da auditoria"}
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{origemRotulo[item.base.origem]}</Badge>
              <Badge variant="outline">{item.base.procedimentos.length} procedimentos</Badge>
              <Badge variant="outline">
                {item.anterior ? `vs. ${item.anterior.competencia}` : "sem competência anterior"}
              </Badge>
              <Badge variant={item.diffs.length ? "default" : "secondary"}>
                {item.diffs.length} mudança(s) de cadastro
              </Badge>
              <Badge variant={item.compat.length ? "default" : "secondary"}>
                {item.compat.length} com compatibilidade alterada
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold mb-2">Cadastro dos procedimentos</h3>
              {item.diffs.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  {item.anterior
                    ? "Nenhuma alteração de cadastro em relação à competência anterior."
                    : "Não há competência anterior registrada para comparação."}
                </p>
              ) : (
                <ul className="space-y-2">
                  {item.diffs.map((d, i) => (
                    <li key={`${d.codigo}-${d.tipo}-${i}`} className="rounded-md border p-3 space-y-1">
                      <div className="flex items-start gap-2 flex-wrap">
                        <Badge variant="outline" className="font-mono text-[11px] shrink-0">{d.codigo}</Badge>
                        <Badge variant="secondary" className="text-[11px] shrink-0">{rotuloMudanca[d.tipo]}</Badge>
                        <span className="text-sm font-medium leading-snug break-words min-w-0 flex-1">{d.nome}</span>
                      </div>
                      <p className="text-xs text-muted-foreground break-words">
                        Antes: {d.antes} — Depois: {d.depois}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {item.compat.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-2">Regras de compatibilidade</h3>
                <ul className="space-y-2">
                  {item.compat.map((m) => (
                    <li key={m.codigo} className="rounded-md border p-3 space-y-2">
                      <div className="flex items-start gap-2 flex-wrap">
                        <Badge variant="outline" className="font-mono text-[11px] shrink-0">{m.codigo}</Badge>
                        <span className="text-sm font-medium leading-snug break-words min-w-0 flex-1">{m.nome}</span>
                      </div>
                      {m.vinculos.map((v, i) => {
                        const Icone = v.tipo === "incluido" ? Plus : v.tipo === "removido" ? Minus : RefreshCcw;
                        const cor =
                          v.tipo === "incluido"
                            ? "text-primary"
                            : v.tipo === "removido"
                              ? "text-destructive"
                              : "text-muted-foreground";
                        return (
                          <div key={i} className="flex gap-1.5 text-xs">
                            <Icone className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${cor}`} />
                            <div className="min-w-0 space-y-0.5">
                              <p className="font-medium leading-snug break-words">
                                {v.codigo ? `${v.codigo} — ` : ""}
                                {v.nome}
                                {!v.nomeCompleto && (
                                  <span className="text-muted-foreground font-normal">
                                    {" "}(nome parcial na tabela de origem)
                                  </span>
                                )}
                              </p>
                              <p className="text-muted-foreground leading-snug break-words">
                                {[
                                  rotuloVinculo[v.tipo],
                                  v.categoria,
                                  v.quantidade ? `quantidade máxima ${v.quantidade}` : "",
                                  v.desde ? `vigente desde ${v.desde}` : "",
                                ]
                                  .filter(Boolean)
                                  .join(" · ")}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default HistoricoAtualizacoes;
