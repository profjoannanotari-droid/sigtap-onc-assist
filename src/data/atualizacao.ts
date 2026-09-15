// Auto-gerado pelo script de atualização SIGTAP — não editar manualmente.
// Comparação entre competência anterior (08/2026) e atual (09/2026).

export const atualizacaoInfo = {
  competencia: "09/2026",
  competenciaAnterior: "08/2026",
  mesNome: "Setembro/2026",
  dataAtualizacao: "15/09/2026",
  totalProcedimentos: 190,
} as const;

export interface MudancaProcedimento {
  codigo: string;
  nome: string;
  tipo: "adicionado" | "removido" | "valor" | "nome" | "cids" | "cbos" | "idade" | "sexo";
  detalhe: string;
}

export const mudancasProcedimentos: MudancaProcedimento[] = [

];

export const mudancasCompatibilidades = {
  novosProcedimentosComCompat: 0,
  procedimentosSemCompatAgora: 0,
  procedimentosComCompatModificada: 28,
} as const;

export const resumoMudancas = {
  adicionados: 0,
  removidos: 0,
  valorAlterado: 0,
  nomeAlterado: 0,
  cidsAlterado: 0,
  cbosAlterado: 0,
  compatAlterado: 28,
} as const;
