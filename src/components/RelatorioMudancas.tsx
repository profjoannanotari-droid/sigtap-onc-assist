import { useMemo, useState } from "react";
import { FileDown, History, Minus, Plus, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { gerarRelatorioPDF } from "@/lib/pdfReport";
import {
  atualizacaoInfo,
  mudancasProcedimentos,
  mudancasCompatibilidadeDetalhe,
  mudancasCompatibilidades,
  resumoMudancas,
} from "@/data/atualizacao";

const rotuloTipo: Record<string, string> = {
  adicionado: "Procedimento incluído",
  removido: "Procedimento excluído",
  valor: "Valor alterado",
  nome: "Nome alterado",
  cids: "CIDs compatíveis alterados",
  cbos: "CBOs compatíveis alterados",
  idade: "Faixa etária alterada",
  sexo: "Sexo permitido alterado",
};

export function RelatorioMudancas() {
  const [gerando, setGerando] = useState(false);

  const totalCompat = mudancasCompatibilidadeDetalhe.length;
  const totalCadastrais = mudancasProcedimentos.length;

  const narrativa = useMemo(() => {
    const partes: string[] = [];
    partes.push(
      `A tabela SIGTAP do subgrupo 0304 (Tratamento em Oncologia) foi atualizada da competência ` +
        `${atualizacaoInfo.competenciaAnterior} para ${atualizacaoInfo.competencia} (${atualizacaoInfo.mesNome}), ` +
        `em ${atualizacaoInfo.dataAtualizacao}, totalizando ${atualizacaoInfo.totalProcedimentos} procedimentos.`,
    );
    if (totalCadastrais === 0) {
      partes.push(
        "Nenhum procedimento foi incluído ou excluído e não houve alteração de valor, nome, CIDs compatíveis, " +
          "CBOs, faixa etária ou sexo permitido em relação à competência anterior. O cadastro dos procedimentos " +
          "permanece idêntico, o que significa que as autorizações e a cobrança seguem os mesmos parâmetros.",
      );
    } else {
      partes.push(
        `Foram identificadas ${totalCadastrais} alteração(ões) no cadastro dos procedimentos: ` +
          `${resumoMudancas.adicionados} inclusão(ões), ${resumoMudancas.removidos} exclusão(ões), ` +
          `${resumoMudancas.valorAlterado} mudança(s) de valor, ${resumoMudancas.nomeAlterado} de nome, ` +
          `${resumoMudancas.cidsAlterado} de CIDs compatíveis e ${resumoMudancas.cbosAlterado} de CBOs.`,
      );
    }
    if (totalCompat === 0) {
      partes.push("As regras de compatibilidade entre procedimentos também permaneceram inalteradas.");
    } else {
      const incl = mudancasCompatibilidadeDetalhe.reduce((s, m) => s + m.incluidas.length, 0);
      const rem = mudancasCompatibilidadeDetalhe.reduce((s, m) => s + m.removidas.length, 0);
      const qtd = mudancasCompatibilidadeDetalhe.reduce((s, m) => s + m.quantidade.length, 0);
      partes.push(
        `As regras de compatibilidade mudaram em ${totalCompat} procedimento(s): ${incl} vínculo(s) incluído(s), ` +
          `${rem} retirado(s) e ${qtd} com mudança na quantidade máxima permitida. ` +
          `Esses vínculos definem quais procedimentos podem ser cobrados em conjunto na mesma APAC ou em APACs ` +
          `concomitantes, impactando diretamente o faturamento.`,
      );
    }
    return partes;
  }, [totalCadastrais, totalCompat]);

  async function exportarPDF() {
    setGerando(true);
    try {
      await gerarRelatorioPDF({
        titulo: `Relatório Descritivo de Mudanças — SIGTAP ${atualizacaoInfo.mesNome}`,
        subtitulo: `Competência ${atualizacaoInfo.competenciaAnterior} → ${atualizacaoInfo.competencia}`,
        badges: [
          `${atualizacaoInfo.totalProcedimentos} procedimentos`,
          `${totalCadastrais} mudanças cadastrais`,
          `${totalCompat} mudanças de compatibilidade`,
        ],
        contextoIA: {
          tipo: "auditoria",
          resumoDados: narrativa.join(" "),
          publicoAlvo: "Equipe de faturamento e auditoria em oncologia",
        },
        secoes: [
          { tipo: "paragrafo", titulo: "Panorama da atualização", texto: narrativa.join("\n\n") },
          {
            tipo: "kv",
            titulo: "Resumo quantitativo",
            itens: [
              { chave: "Competência atual", valor: atualizacaoInfo.competencia },
              { chave: "Competência anterior", valor: atualizacaoInfo.competenciaAnterior },
              { chave: "Data da atualização", valor: atualizacaoInfo.dataAtualizacao },
              { chave: "Procedimentos no subgrupo 0304", valor: String(atualizacaoInfo.totalProcedimentos) },
              { chave: "Procedimentos incluídos", valor: String(resumoMudancas.adicionados) },
              { chave: "Procedimentos excluídos", valor: String(resumoMudancas.removidos) },
              { chave: "Valores alterados", valor: String(resumoMudancas.valorAlterado) },
              { chave: "Nomes alterados", valor: String(resumoMudancas.nomeAlterado) },
              { chave: "CIDs compatíveis alterados", valor: String(resumoMudancas.cidsAlterado) },
              { chave: "CBOs compatíveis alterados", valor: String(resumoMudancas.cbosAlterado) },
              {
                chave: "Procedimentos com compatibilidade alterada",
                valor: String(mudancasCompatibilidades.procedimentosComCompatModificada),
              },
            ],
          },
          ...(totalCadastrais > 0
            ? ([
                {
                  tipo: "tabela" as const,
                  titulo: "Mudanças no cadastro dos procedimentos",
                  cabecalho: ["Código", "Procedimento", "Tipo", "Descrição da mudança"],
                  linhas: mudancasProcedimentos.map((m) => [
                    m.codigo,
                    m.nome,
                    rotuloTipo[m.tipo] ?? m.tipo,
                    m.detalhe,
                  ]),
                  larguras: [12, 30, 18, 40],
                },
              ])
            : ([
                {
                  tipo: "paragrafo" as const,
                  titulo: "Mudanças no cadastro dos procedimentos",
                  texto:
                    "Não houve inclusão, exclusão ou alteração de valor, nome, CIDs, CBOs, faixa etária ou sexo " +
                    "nos procedimentos do subgrupo 0304 nesta competência.",
                },
              ])),
          ...(totalCompat > 0
            ? ([
                {
                  tipo: "tabela" as const,
                  titulo: "Mudanças nas regras de compatibilidade",
                  cabecalho: ["Código", "Procedimento", "Vínculos incluídos", "Vínculos retirados", "Quantidade"],
                  linhas: mudancasCompatibilidadeDetalhe.map((m) => [
                    m.codigo,
                    m.nome,
                    m.incluidas.join("\n") || "—",
                    m.removidas.join("\n") || "—",
                    m.quantidade.join("\n") || "—",
                  ]),
                  larguras: [10, 24, 30, 22, 14],
                },
              ])
            : []),
        ],
        nomeArquivo: `mudancas_sigtap_${atualizacaoInfo.competencia.replace("/", "-")}`,
      });
      toast({ title: "Relatório gerado", description: "O PDF descritivo das mudanças foi baixado." });
    } catch (e) {
      toast({ title: "Falha ao gerar o relatório", description: (e as Error).message, variant: "destructive" });
    } finally {
      setGerando(false);
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3 flex-row items-start justify-between gap-2 flex-wrap">
        <div>
          <CardTitle className="text-base flex items-center gap-2">
            <History className="w-4 h-4" /> Relatório descritivo das mudanças
          </CardTitle>
          <p className="text-xs text-muted-foreground mt-1">
            Competência {atualizacaoInfo.competenciaAnterior} → {atualizacaoInfo.competencia} · atualizado em{" "}
            {atualizacaoInfo.dataAtualizacao}
          </p>
        </div>
        <Button size="sm" onClick={exportarPDF} disabled={gerando}>
          <FileDown className="w-4 h-4 mr-1" /> {gerando ? "Gerando..." : "Exportar PDF"}
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{atualizacaoInfo.totalProcedimentos} procedimentos</Badge>
          <Badge variant={totalCadastrais > 0 ? "default" : "secondary"}>
            {totalCadastrais} mudança(s) de cadastro
          </Badge>
          <Badge variant={totalCompat > 0 ? "default" : "secondary"}>
            {totalCompat} mudança(s) de compatibilidade
          </Badge>
        </div>

        <div className="space-y-2">
          {narrativa.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">Cadastro dos procedimentos</h3>
          {totalCadastrais === 0 ? (
            <p className="text-sm text-muted-foreground">
              Nenhuma alteração cadastral nesta competência.
            </p>
          ) : (
            <ul className="space-y-2">
              {mudancasProcedimentos.map((m, i) => (
                <li key={i} className="rounded-md border p-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="font-mono text-[11px]">{m.codigo}</Badge>
                    <Badge variant="secondary" className="text-[11px]">{rotuloTipo[m.tipo] ?? m.tipo}</Badge>
                    <span className="text-sm font-medium">{m.nome}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">{m.detalhe}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">Regras de compatibilidade</h3>
          {totalCompat === 0 ? (
            <p className="text-sm text-muted-foreground">Nenhuma alteração de compatibilidade nesta competência.</p>
          ) : (
            <ul className="space-y-2">
              {mudancasCompatibilidadeDetalhe.map((m) => (
                <li key={m.codigo} className="rounded-md border p-3 space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="font-mono text-[11px]">{m.codigo}</Badge>
                    <span className="text-sm font-medium">{m.nome}</span>
                  </div>
                  {m.incluidas.map((t, i) => (
                    <p key={`i${i}`} className="text-xs text-muted-foreground flex gap-1.5">
                      <Plus className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary" /> {t}
                    </p>
                  ))}
                  {m.removidas.map((t, i) => (
                    <p key={`r${i}`} className="text-xs text-muted-foreground flex gap-1.5">
                      <Minus className="w-3.5 h-3.5 shrink-0 mt-0.5 text-destructive" /> {t}
                    </p>
                  ))}
                  {m.quantidade.map((t, i) => (
                    <p key={`q${i}`} className="text-xs text-muted-foreground flex gap-1.5">
                      <RefreshCcw className="w-3.5 h-3.5 shrink-0 mt-0.5" /> {t}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default RelatorioMudancas;
