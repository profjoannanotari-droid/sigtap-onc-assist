// Integração com a sincronização automática da Tabela Unificada (DATASUS).
import { supabase } from "@/integrations/supabase/client";
import { aplicarBaseNuvem, type Procedimento } from "@/data/sigtap";
import { aplicarCompatibilidadesNuvem, type Compatibilidade } from "@/data/compatibilidade";
import { atualizacaoInfo } from "@/data/atualizacao";

export interface RegistroSincronizacao {
  id: string;
  status: "sucesso" | "sem_novidade" | "falha" | "executando";
  competencia: string | null;
  mensagem: string;
  detalhes: { etapa?: string; ajuste?: string; arquivo?: string; total?: number; total0304?: number; total0605?: number; totalVinculos?: number; vinculos0605?: number } | null;
  created_at: string;
}

const ordem = (c: string) => {
  const [m, a] = c.split("/");
  return Number(a) * 100 + Number(m);
};

export async function ultimasSincronizacoes(limite = 10): Promise<RegistroSincronizacao[]> {
  const { data } = await supabase
    .from("sigtap_sincronizacao" as never)
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limite);
  return (data ?? []) as unknown as RegistroSincronizacao[];
}

export async function executarSincronizacao(): Promise<RegistroSincronizacao> {
  const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/sincronizar-sigtap`;
  const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: key, Authorization: `Bearer ${key}`, "x-region": "sa-east-1" },
    body: "{}",
  });
  return (await r.json()) as RegistroSincronizacao;
}

interface BaseRemota {
  competencia: string;
  procedimentos: Procedimento[];
  compatibilidades: Record<string, Compatibilidade[]> | null;
  versao_importador: number;
  created_at: string;
}

/** Na abertura: usa competência mais nova ou uma revisão mais completa da mesma competência. */
export async function carregarBaseMaisRecente(prazoMs = 3500) {
  try {
    const consulta = supabase
      .from("sigtap_bases" as never)
      .select("competencia, arquivo, procedimentos, compatibilidades, versao_importador, created_at")
      .order("created_at", { ascending: false })
      .limit(5);
    const { data } = (await Promise.race([
      consulta,
      new Promise((r) => setTimeout(() => r({ data: null }), prazoMs)),
    ])) as { data: BaseRemota[] | null };
    if (!data?.length) return;
    const maisNova = [...data].sort((a, b) => ordem(b.competencia) - ordem(a.competencia))[0];
    const diferencaCompetencia = ordem(maisNova.competencia) - ordem(atualizacaoInfo.competencia);
    if (diferencaCompetencia < 0) return;
    if (diferencaCompetencia === 0 && maisNova.versao_importador <= atualizacaoInfo.versaoImportador) return;
    aplicarBaseNuvem(maisNova.procedimentos);
    if (maisNova.compatibilidades) aplicarCompatibilidadesNuvem(maisNova.compatibilidades);
    const [m, a] = maisNova.competencia.split("/");
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    Object.assign(atualizacaoInfo as Record<string, unknown>, {
      competenciaAnterior: atualizacaoInfo.competencia,
      competencia: maisNova.competencia,
      mesNome: `${meses[Number(m) - 1]}/${a}`,
      dataAtualizacao: new Date(maisNova.created_at).toLocaleDateString("pt-BR"),
      totalProcedimentos: maisNova.procedimentos.length,
      versaoImportador: maisNova.versao_importador,
    });
  } catch {
    /* mantém a base compilada */
  }
}
