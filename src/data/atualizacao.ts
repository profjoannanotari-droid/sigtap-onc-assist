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

export interface MudancaCompatibilidade {
  codigo: string;
  nome: string;
  incluidas: string[];
  removidas: string[];
  quantidade: string[];
}

export const mudancasCompatibilidadeDetalhe: MudancaCompatibilidade[] = [
  {
    codigo: "304010367",
    nome: "RADIOTERAPIA DE CABEÇA E PESCOÇO",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 35; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010375",
    nome: "RADIOTERAPIA DO APARELHO DIGESTIVO",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 28; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010383",
    nome: "RADIOTERAPIA DE TRAQUEIA, BRÔNQUIO, PULMÃO, PLEURA E MEDIASTINO",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 30; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010391",
    nome: "RADIOTERAPIA DE OSSOS/CARTILAGENS/PARTES MOLES",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 30; desde )"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010405",
    nome: "RADIOTERAPIA DE PELE",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 30; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010413",
    nome: "RADIOTERAPIA DE MAMA",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 15; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010421",
    nome: "RADIOTERAPIA DE CÂNCER GINECOLÓGICO",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 25; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010430",
    nome: "BRAQUITERAPIA GINECOLÓGICA",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 4; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010448",
    nome: "RADIOTERAPIA DE PÊNIS",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 20; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010456",
    nome: "RADIOTERAPIA DE PRÓSTATA",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 35; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010464",
    nome: "BRAQUITERAPIA DE PRÓSTATA",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 2; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010472",
    nome: "RADIOTERAPIA DO APARELHO URINÁRIO",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 30; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010480",
    nome: "RADIOTERAPIA DE OLHOS E ANEXOS",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 25; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010502",
    nome: "RADIOTERAPIA DE SISTEMA NERVOSO CENTRAL",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 30; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010510",
    nome: "RADIOTERAPIA ESTEREOTÁXICA",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 5; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010529",
    nome: "RADIOTERAPIA DE METÁSTASE EM SISTEMA NERVOSO CENTRAL",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 5; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010537",
    nome: "RADIOTERAPIA DE PLASMOCITOMA / MIELOMA / METÁSTASES EM OUTRAS LOCALIZAÇÕES",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 10; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010545",
    nome: "RADIOTERAPIA DE CADEIA LINFÁTICA",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 25; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010553",
    nome: "RADIOTERAPIA DE LINFOMA E LEUCEMIA",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 20; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010561",
    nome: "RADIOTERAPIA EM CORPO INTEIRO",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 3; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010570",
    nome: "RADIOTERAPIA DE QUELOIDE E GINECOMASTIA",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 5; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304010588",
    nome: "RADIOTERAPIA DE DOENÇA BENIGNA",
    incluidas: ["802010334 — ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA (APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel; qtd 5; desde 05/2026)"],
    removidas: [],
    quantidade: [],
  },
  {
    codigo: "304020036",
    nome: "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
    incluidas: ["BLÁSTICA — MARCADOR POSITIVO-3ª LINHA (APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente; qtd 0; desde 01/2008)"],
    removidas: ["AVANÇADO — 2ª LINHA (APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente)"],
    quantidade: [],
  },
  {
    codigo: "304020338",
    nome: "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
    incluidas: [],
    removidas: ["PROMIELOCITICA AGUDA — 1ª LINHA - FASES TERAPÊUTICAS INICIAIS... (APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente)","OU DA TUBA UTERINA — 2ª LINHA (APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente)"],
    quantidade: [],
  },
  {
    codigo: "304020346",
    nome: "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
    incluidas: ["PROMIELOCITICA AGUDA — 1ª LINHA - FASES TERAPÊUTICAS INICIAIS... (APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente; qtd 0; desde )"],
    removidas: ["DE MALIGNIDADE — 2ªLINHA (APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente)"],
    quantidade: [],
  },
  {
    codigo: "304030015",
    nome: "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
    incluidas: [],
    removidas: ["OU DE TUBA UTERINA AVANÇADA — 2ª LINHA) (APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente)"],
    quantidade: [],
  },
  {
    codigo: "304050040",
    nome: "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
    incluidas: [],
    removidas: ["CRÔNICA — MARCADOR POSITIVO - 2ª LINHA (APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente)"],
    quantidade: [],
  },
  {
    codigo: "304050121",
    nome: "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
    incluidas: [],
    removidas: ["OU DA TUBA UTERINA — 2ª LINHA (APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente)"],
    quantidade: [],
  },
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
