// Catálogo de biomarcadores por CID-10 (prefixo de 3 letras: ex. C50)
// Usado pelo Motor de Recomendação Terapêutica de Precisão para filtrar dinamicamente
// quais marcadores fazem sentido pedir ao médico para aquele subtipo tumoral.

export type BiomarcadorTipo = "select" | "number" | "boolean" | "text";

export interface BiomarcadorDef {
  id: string;
  nome: string;
  tipo: BiomarcadorTipo;
  opcoes?: string[];
  unidade?: string;
  ajuda?: string;
}

const COMUM_PANCANCER: BiomarcadorDef[] = [
  { id: "MSI", nome: "MSI / dMMR", tipo: "select", opcoes: ["MSS", "MSI-Low", "MSI-High / dMMR"], ajuda: "Instabilidade de microssatélites — preditor de resposta a imunoterapia." },
  { id: "TMB", nome: "TMB (mut/Mb)", tipo: "number", unidade: "mut/Mb", ajuda: "Tumor Mutational Burden ≥10 sugere benefício de imunoterapia." },
  { id: "PDL1", nome: "PD-L1 CPS/TPS (%)", tipo: "number", unidade: "%", ajuda: "Combined Positive Score ou Tumor Proportion Score." },
  { id: "NTRK", nome: "Fusão NTRK", tipo: "select", opcoes: ["Não pesquisado", "Negativo", "Positivo"], ajuda: "Fusão de NTRK1/2/3 — alvo de larotrectinibe/entrectinibe." },
];

export const BIOMARCADORES_POR_CID: Record<string, BiomarcadorDef[]> = {
  // Mama
  C50: [
    { id: "RE", nome: "Receptor de Estrógeno (RE)", tipo: "select", opcoes: ["Negativo", "Positivo (1-9%)", "Positivo (≥10%)"] },
    { id: "RP", nome: "Receptor de Progesterona (RP)", tipo: "select", opcoes: ["Negativo", "Positivo"] },
    { id: "HER2", nome: "HER2", tipo: "select", opcoes: ["0", "1+ (HER2-low)", "2+ ISH-", "2+ ISH+", "3+"] },
    { id: "Ki67", nome: "Ki-67 (%)", tipo: "number", unidade: "%" },
    { id: "BRCA", nome: "BRCA1/2 germinativo", tipo: "select", opcoes: ["Não testado", "Wild-type", "BRCA1 mutado", "BRCA2 mutado"] },
    { id: "PIK3CA", nome: "PIK3CA", tipo: "select", opcoes: ["Não testado", "Wild-type", "Mutado"] },
    { id: "ESR1", nome: "ESR1", tipo: "select", opcoes: ["Não testado", "Wild-type", "Mutado"] },
    ...COMUM_PANCANCER.filter((b) => ["PDL1"].includes(b.id)),
  ],

  // Pulmão
  C34: [
    { id: "EGFR", nome: "EGFR", tipo: "select", opcoes: ["Wild-type", "Del19", "L858R", "T790M", "Inserção exon 20", "Outras"] },
    { id: "ALK", nome: "ALK", tipo: "select", opcoes: ["Negativo", "Rearranjo positivo"] },
    { id: "ROS1", nome: "ROS1", tipo: "select", opcoes: ["Negativo", "Rearranjo positivo"] },
    { id: "BRAF", nome: "BRAF", tipo: "select", opcoes: ["Wild-type", "V600E", "Não-V600"] },
    { id: "KRAS", nome: "KRAS", tipo: "select", opcoes: ["Wild-type", "G12C", "Outra mutação"] },
    { id: "MET", nome: "MET exon 14 skipping", tipo: "select", opcoes: ["Negativo", "Positivo"] },
    { id: "RET", nome: "Fusão RET", tipo: "select", opcoes: ["Negativo", "Positivo"] },
    { id: "HER2_pulmao", nome: "HER2 (mutação)", tipo: "select", opcoes: ["Wild-type", "Mutado"] },
    { id: "PDL1", nome: "PD-L1 TPS (%)", tipo: "number", unidade: "%" },
    ...COMUM_PANCANCER.filter((b) => ["MSI", "TMB", "NTRK"].includes(b.id)),
  ],

  // Próstata
  C61: [
    { id: "PSA", nome: "PSA atual", tipo: "number", unidade: "ng/mL" },
    { id: "Gleason", nome: "ISUP / Grade Group", tipo: "select", opcoes: ["1", "2", "3", "4", "5"] },
    { id: "BRCA", nome: "BRCA1/2 (somático ou germinativo)", tipo: "select", opcoes: ["Não testado", "Wild-type", "BRCA1 mutado", "BRCA2 mutado"] },
    { id: "HRR", nome: "Outros genes HRR (ATM, PALB2, CHEK2…)", tipo: "select", opcoes: ["Não testado", "Wild-type", "Mutado"] },
    { id: "PSMA", nome: "PSMA-PET / cintilografia PSMA", tipo: "select", opcoes: ["Não realizado", "Negativo", "Positivo baixo", "Positivo alto"] },
    ...COMUM_PANCANCER.filter((b) => ["MSI"].includes(b.id)),
  ],

  // Colo do útero
  C53: [
    { id: "HPV", nome: "HPV", tipo: "select", opcoes: ["Negativo", "Positivo (16/18)", "Positivo (outros alto risco)"] },
    { id: "PDL1", nome: "PD-L1 CPS", tipo: "number", unidade: "CPS" },
    ...COMUM_PANCANCER.filter((b) => ["MSI", "TMB"].includes(b.id)),
  ],

  // Ovário
  C56: [
    { id: "BRCA", nome: "BRCA1/2", tipo: "select", opcoes: ["Não testado", "Wild-type", "BRCA1 mutado", "BRCA2 mutado"] },
    { id: "HRD", nome: "HRD (Homologous Recombination Deficiency)", tipo: "select", opcoes: ["Não testado", "Proficiente", "Deficiente"] },
    { id: "CA125", nome: "CA-125", tipo: "number", unidade: "U/mL" },
    ...COMUM_PANCANCER.filter((b) => ["MSI"].includes(b.id)),
  ],

  // Cólon / Reto
  C18: [
    { id: "KRAS", nome: "KRAS", tipo: "select", opcoes: ["Wild-type", "Mutado (G12/G13)", "G12C"] },
    { id: "NRAS", nome: "NRAS", tipo: "select", opcoes: ["Wild-type", "Mutado"] },
    { id: "BRAF", nome: "BRAF", tipo: "select", opcoes: ["Wild-type", "V600E", "Não-V600"] },
    { id: "HER2", nome: "HER2", tipo: "select", opcoes: ["Negativo", "Amplificado/3+"] },
    { id: "Lateralidade", nome: "Lateralidade do tumor", tipo: "select", opcoes: ["Direito", "Esquerdo", "Reto"] },
    ...COMUM_PANCANCER,
  ],
  C19: [], // copia de C18 abaixo
  C20: [],

  // Estômago / esôfago
  C16: [
    { id: "HER2", nome: "HER2", tipo: "select", opcoes: ["0", "1+", "2+ ISH-", "2+ ISH+", "3+"] },
    { id: "CLDN18", nome: "Claudin 18.2", tipo: "select", opcoes: ["Negativo", "Positivo (≥75% 2+/3+)"] },
    { id: "PDL1", nome: "PD-L1 CPS", tipo: "number", unidade: "CPS" },
    { id: "FGFR2b", nome: "FGFR2b", tipo: "select", opcoes: ["Não testado", "Negativo", "Positivo"] },
    ...COMUM_PANCANCER.filter((b) => ["MSI", "NTRK"].includes(b.id)),
  ],
  C15: [
    { id: "HER2", nome: "HER2 (adeno EGJ)", tipo: "select", opcoes: ["0", "1+", "2+ ISH-", "2+ ISH+", "3+"] },
    { id: "PDL1", nome: "PD-L1 CPS/TPS", tipo: "number", unidade: "%" },
    ...COMUM_PANCANCER.filter((b) => ["MSI"].includes(b.id)),
  ],

  // Pâncreas
  C25: [
    { id: "BRCA", nome: "BRCA1/2 germinativo", tipo: "select", opcoes: ["Não testado", "Wild-type", "Mutado"] },
    { id: "KRAS", nome: "KRAS", tipo: "select", opcoes: ["Wild-type", "G12C", "G12D", "Outras"] },
    ...COMUM_PANCANCER.filter((b) => ["MSI", "NTRK"].includes(b.id)),
  ],

  // Fígado / vias biliares
  C22: [
    { id: "AFP", nome: "Alfa-fetoproteína", tipo: "number", unidade: "ng/mL" },
    { id: "ChildPugh", nome: "Child-Pugh", tipo: "select", opcoes: ["A", "B", "C"] },
    { id: "PDL1", nome: "PD-L1", tipo: "number", unidade: "%" },
  ],

  // Rim
  C64: [
    { id: "Histologia", nome: "Histologia", tipo: "select", opcoes: ["Células claras", "Papilar", "Cromófobo", "Outro"] },
    { id: "IMDC", nome: "Risco IMDC", tipo: "select", opcoes: ["Favorável", "Intermediário", "Pobre"] },
    { id: "PDL1", nome: "PD-L1", tipo: "number", unidade: "%" },
  ],

  // Bexiga
  C67: [
    { id: "FGFR3", nome: "FGFR2/3 alteração", tipo: "select", opcoes: ["Não testado", "Wild-type", "Mutação/fusão"] },
    { id: "HER2", nome: "HER2", tipo: "select", opcoes: ["0", "1+", "2+", "3+"] },
    { id: "PDL1", nome: "PD-L1 CPS", tipo: "number", unidade: "CPS" },
    { id: "Nectin4", nome: "Nectina-4", tipo: "select", opcoes: ["Não testado", "Expressão presente"] },
    ...COMUM_PANCANCER.filter((b) => ["MSI"].includes(b.id)),
  ],

  // Tireoide
  C73: [
    { id: "Histologia", nome: "Histologia", tipo: "select", opcoes: ["Papilífero", "Folicular", "Medular", "Anaplásico"] },
    { id: "BRAF", nome: "BRAF V600E", tipo: "select", opcoes: ["Wild-type", "Mutado"] },
    { id: "RET", nome: "RET (ponto/fusão)", tipo: "select", opcoes: ["Negativo", "Mutação pontual (medular)", "Fusão (papilífero)"] },
    { id: "NTRK", nome: "Fusão NTRK", tipo: "select", opcoes: ["Negativo", "Positivo"] },
  ],

  // Melanoma
  C43: [
    { id: "BRAF", nome: "BRAF", tipo: "select", opcoes: ["Wild-type", "V600E", "V600K", "Não-V600"] },
    { id: "NRAS", nome: "NRAS", tipo: "select", opcoes: ["Wild-type", "Mutado"] },
    { id: "cKIT", nome: "c-KIT (mucoso/acral)", tipo: "select", opcoes: ["Wild-type", "Mutado"] },
    { id: "LDH", nome: "LDH", tipo: "select", opcoes: ["Normal", "Elevado"] },
    { id: "PDL1", nome: "PD-L1", tipo: "number", unidade: "%" },
  ],

  // Cabeça e pescoço
  C32: [
    { id: "HPV", nome: "HPV / p16", tipo: "select", opcoes: ["Negativo", "Positivo"] },
    { id: "PDL1", nome: "PD-L1 CPS", tipo: "number", unidade: "CPS" },
    { id: "EGFR", nome: "EGFR (expressão)", tipo: "select", opcoes: ["Baixa", "Alta"] },
  ],

  // SNC / Glioma
  C71: [
    { id: "IDH", nome: "IDH1/2", tipo: "select", opcoes: ["Wild-type", "Mutado"] },
    { id: "MGMT", nome: "Metilação MGMT", tipo: "select", opcoes: ["Não metilado", "Metilado"] },
    { id: "1p19q", nome: "Codeleção 1p/19q", tipo: "select", opcoes: ["Ausente", "Presente"] },
    { id: "ATRX", nome: "ATRX", tipo: "select", opcoes: ["Mantido", "Perdido"] },
  ],

  // Linfomas / hemato (genéricos)
  C81: [
    { id: "CD30", nome: "CD30", tipo: "select", opcoes: ["Negativo", "Positivo"] },
    { id: "PDL1", nome: "PD-L1 / 9p24", tipo: "select", opcoes: ["Não testado", "Amplificado"] },
  ],
  C82: [
    { id: "CD20", nome: "CD20", tipo: "select", opcoes: ["Negativo", "Positivo"] },
    { id: "BCL2", nome: "BCL2", tipo: "select", opcoes: ["Negativo", "Positivo"] },
    { id: "MYC", nome: "MYC rearranjo", tipo: "select", opcoes: ["Ausente", "Presente"] },
    { id: "BCL6", nome: "BCL6 rearranjo", tipo: "select", opcoes: ["Ausente", "Presente"] },
  ],
  C83: [
    { id: "CD20", nome: "CD20", tipo: "select", opcoes: ["Negativo", "Positivo"] },
    { id: "DEL17p", nome: "del(17p) / TP53", tipo: "select", opcoes: ["Ausente", "Presente"] },
    { id: "IGHV", nome: "IGHV mutacional", tipo: "select", opcoes: ["Mutado", "Não mutado"] },
  ],
  C90: [
    { id: "FISH", nome: "FISH risco (del17p, t(4;14), t(14;16), +1q)", tipo: "select", opcoes: ["Padrão", "Alto risco", "Ultra-alto risco"] },
    { id: "ISS", nome: "R-ISS", tipo: "select", opcoes: ["I", "II", "III"] },
  ],
  C91: [
    { id: "BCRABL", nome: "BCR-ABL1", tipo: "select", opcoes: ["Negativo", "Positivo (p190)", "Positivo (p210)"] },
    { id: "CD20", nome: "CD20", tipo: "select", opcoes: ["Negativo", "Positivo"] },
  ],
  C92: [
    { id: "FLT3", nome: "FLT3", tipo: "select", opcoes: ["Wild-type", "ITD", "TKD"] },
    { id: "NPM1", nome: "NPM1", tipo: "select", opcoes: ["Wild-type", "Mutado"] },
    { id: "IDH", nome: "IDH1/IDH2", tipo: "select", opcoes: ["Wild-type", "IDH1", "IDH2"] },
    { id: "BCRABL", nome: "BCR-ABL1 (LMC)", tipo: "select", opcoes: ["Negativo", "Positivo"] },
  ],
};

// Cópias diretas (reto/cólon compartilham marcadores)
BIOMARCADORES_POR_CID.C19 = BIOMARCADORES_POR_CID.C18;
BIOMARCADORES_POR_CID.C20 = BIOMARCADORES_POR_CID.C18;

export function getBiomarcadores(cid: string): BiomarcadorDef[] {
  if (!cid) return [];
  const prefixo = cid.trim().toUpperCase().slice(0, 3);
  return BIOMARCADORES_POR_CID[prefixo] ?? [];
}
