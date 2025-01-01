// Auto-gerado pelo script de atualização SIGTAP — não editar manualmente.
// Comparação entre competência anterior (04/2026) e atual (05/2026).

export const atualizacaoInfo = {
  competencia: "05/2026",
  competenciaAnterior: "04/2026",
  mesNome: "Maio/2026",
  dataAtualizacao: "11/05/2026",
  totalProcedimentos: 190,
} as const;

export interface MudancaProcedimento {
  codigo: string;
  nome: string;
  tipo: "adicionado" | "removido" | "valor" | "nome" | "cids" | "cbos";
  detalhe: string;
}

export const mudancasProcedimentos: MudancaProcedimento[] = [

];

export const mudancasCompatibilidades = {
  novosProcedimentosComCompat: 0,
  procedimentosSemCompatAgora: 0,
  procedimentosComCompatModificada: 7,
} as const;

export const resumoMudancas = {
  adicionados: 0,
  removidos: 0,
  valorAlterado: 0,
  nomeAlterado: 0,
  cidsAlterado: 0,
  cbosAlterado: 0,
  compatAlterado: 7,
} as const;
