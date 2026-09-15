// Auto-gerado pelo script de atualização SIGTAP — não editar manualmente.
// Comparação entre competência anterior (05/2026) e atual (08/2026).

export const atualizacaoInfo = {
  competencia: "08/2026",
  competenciaAnterior: "05/2026",
  mesNome: "Agosto/2026",
  dataAtualizacao: "25/08/2026",
  totalProcedimentos: 190,
} as const;

export interface MudancaProcedimento {
  codigo: string;
  nome: string;
  tipo: "adicionado" | "removido" | "valor" | "nome" | "cids" | "cbos" | "idade" | "sexo";
  detalhe: string;
}

export const mudancasProcedimentos: MudancaProcedimento[] = [
  {
    codigo: "304010170",
    nome: "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
    tipo: "valor",
    detalhe: "R$ 22,00 → R$ 150,00",
  },
  {
    codigo: "304010340",
    nome: "NARCOSE PARA BRAQUITERAPIA (POR PROCEDIMENTO)",
    tipo: "valor",
    detalhe: "R$ 22,00 → R$ 150,00",
  },
];

export const mudancasCompatibilidades = {
  novosProcedimentosComCompat: 0,
  procedimentosSemCompatAgora: 0,
  procedimentosComCompatModificada: 0,
} as const;

export const resumoMudancas = {
  adicionados: 0,
  removidos: 0,
  valorAlterado: 2,
  nomeAlterado: 0,
  cidsAlterado: 0,
  cbosAlterado: 0,
  compatAlterado: 0,
} as const;
