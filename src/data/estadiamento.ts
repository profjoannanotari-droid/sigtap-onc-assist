/**
 * Regras de Estadiamento Oncológico
 * Fontes: AJCC 8th/9th Edition, FIGO 2018/2023, R-ISS (IMWG), Lugano (Ann Arbor), Rai/Binet, ELN/WHO.
 *
 * IMPORTANTE: Ferramenta de suporte à decisão. Validação clínica final deve ser
 * feita pelo médico assistente conforme o prontuário.
 */

export type TipoNeoplasia = "solido" | "liquido";

export interface EstadiamentoResultado {
  estadio: string;
  detalhes: string;
  fonte: string;
  observacoes?: string[];
}

// ============================================================================
// TUMORES SÓLIDOS
// ============================================================================

export const SITIOS_SOLIDOS = [
  { value: "mama", label: "Mama" },
  { value: "pulmao", label: "Pulmão (CPNPC)" },
  { value: "prostata", label: "Próstata" },
  { value: "colo_utero", label: "Colo do Útero" },
  { value: "ovario", label: "Ovário" },
  { value: "endometrio", label: "Endométrio (Corpo Uterino)" },
  { value: "colorretal", label: "Cólon e Reto" },
  { value: "estomago", label: "Estômago" },
  { value: "esofago", label: "Esôfago" },
  { value: "pancreas", label: "Pâncreas" },
  { value: "figado", label: "Fígado / Hepatocarcinoma (BCLC)" },
  { value: "rim", label: "Rim" },
  { value: "bexiga", label: "Bexiga (Urotelial)" },
  { value: "tireoide", label: "Tireoide (Diferenciada)" },
  { value: "melanoma", label: "Melanoma Cutâneo" },
  { value: "cabeca_pescoco", label: "Cabeça e Pescoço (Oral/Faringe/Laringe)" },
  { value: "snc", label: "SNC – Glioma (WHO Grade)" },
] as const;

export type SitioSolido = (typeof SITIOS_SOLIDOS)[number]["value"];

export const OPCOES_T = ["Tis", "T0", "T1", "T1a", "T1b", "T1c", "T2", "T2a", "T2b", "T3", "T3a", "T3b", "T4", "T4a", "T4b", "T4c", "T4d"];
export const OPCOES_N = ["N0", "N1", "N1mi", "N1a", "N1b", "N1c", "N2", "N2a", "N2b", "N3", "N3a", "N3b", "N3c"];
export const OPCOES_M = ["M0", "M1", "M1a", "M1b", "M1c"];

// ---- MAMA (AJCC 8th — Anatomic Stage) ----
export function estadiarMama(input: {
  T: string;
  N: string;
  M: string;
  ER: "positivo" | "negativo";
  PR: "positivo" | "negativo";
  HER2: "positivo" | "negativo";
  grau: "G1" | "G2" | "G3";
}): EstadiamentoResultado {
  const { T, N, M, ER, PR, HER2, grau } = input;
  const t = T.replace(/[a-d]$/, "");
  const n = N.replace(/(mi|[a-c])$/, "");

  let estadio = "Indeterminado";
  if (M.startsWith("M1")) estadio = "IV";
  else if (T === "Tis") estadio = "0";
  else if ((t === "T1" || T === "T0") && (n === "N0" || N === "N1mi")) estadio = "IA";
  else if (t === "T1" && n === "N1") estadio = "IIA";
  else if (t === "T2" && n === "N0") estadio = "IIA";
  else if (t === "T2" && n === "N1") estadio = "IIB";
  else if (t === "T3" && n === "N0") estadio = "IIB";
  else if ((t === "T0" || t === "T1" || t === "T2") && n === "N2") estadio = "IIIA";
  else if (t === "T3" && (n === "N1" || n === "N2")) estadio = "IIIA";
  else if (t === "T4" && (n === "N0" || n === "N1" || n === "N2")) estadio = "IIIB";
  else if (n === "N3") estadio = "IIIC";

  const subtipo =
    HER2 === "positivo"
      ? "HER2+"
      : ER === "positivo" || PR === "positivo"
        ? "Luminal (HR+/HER2−)"
        : "Triplo Negativo";

  return {
    estadio: `Estádio ${estadio}`,
    detalhes: `${T} ${N} ${M} • ${subtipo} • Grau ${grau}`,
    fonte: "AJCC 8th Edition – Breast Cancer Staging",
    observacoes: [
      "O Estadiamento Prognóstico (AJCC 8th) pode reclassificar este caso considerando subtipo, grau e Oncotype DX.",
      subtipo === "Triplo Negativo" ? "Subtipo triplo negativo: considerar abordagem neoadjuvante." : "",
    ].filter(Boolean),
  };
}

// ---- PULMÃO CPNPC (AJCC 8th) ----
export function estadiarPulmao(input: { T: string; N: string; M: string }): EstadiamentoResultado {
  const { T, N, M } = input;
  const t = T.replace(/[a-d]$/, "");
  const n = N;
  let estadio = "Indeterminado";

  if (M === "M1a" || M === "M1b") estadio = "IVA";
  else if (M === "M1c" || M === "M1") estadio = "IVB";
  else if (T === "Tis") estadio = "0";
  else if (T === "T1a" && n === "N0") estadio = "IA1";
  else if (T === "T1b" && n === "N0") estadio = "IA2";
  else if (T === "T1c" && n === "N0") estadio = "IA3";
  else if (T === "T2a" && n === "N0") estadio = "IB";
  else if (T === "T2b" && n === "N0") estadio = "IIA";
  else if ((t === "T1" || t === "T2") && n === "N1") estadio = "IIB";
  else if (t === "T3" && n === "N0") estadio = "IIB";
  else if (t === "T3" && n === "N1") estadio = "IIIA";
  else if ((t === "T1" || t === "T2") && n === "N2") estadio = "IIIA";
  else if (t === "T4" && (n === "N0" || n === "N1")) estadio = "IIIA";
  else if (t === "T3" && n === "N2") estadio = "IIIB";
  else if (t === "T4" && n === "N2") estadio = "IIIB";
  else if ((t === "T1" || t === "T2") && n === "N3") estadio = "IIIB";
  else if ((t === "T3" || t === "T4") && n === "N3") estadio = "IIIC";

  return {
    estadio: `Estádio ${estadio}`,
    detalhes: `${T} ${N} ${M}`,
    fonte: "AJCC 8th Edition – Lung Cancer (NSCLC)",
  };
}

// ---- PRÓSTATA (AJCC 8th) ----
export function estadiarProstata(input: {
  T: string;
  N: string;
  M: string;
  PSA: number;
  gradeGroup: 1 | 2 | 3 | 4 | 5;
}): EstadiamentoResultado {
  const { T, N, M, PSA, gradeGroup } = input;
  const t = T.replace(/[a-d]$/, "");
  let estadio = "Indeterminado";

  if (M.startsWith("M1")) estadio = "IVB";
  else if (N !== "N0") estadio = "IVA";
  else if (t === "T1" || t === "T2") {
    if (PSA < 10 && gradeGroup === 1) estadio = "I";
    else if (PSA < 20 && gradeGroup <= 2) estadio = "IIA";
    else if (gradeGroup === 3) estadio = "IIB";
    else if (gradeGroup === 4) estadio = "IIC";
    else if (gradeGroup === 5 || PSA >= 20) estadio = "IIIA";
  } else if (t === "T3" || t === "T4") {
    estadio = gradeGroup === 5 ? "IIIC" : "IIIB";
  }

  const risco =
    PSA >= 20 || gradeGroup >= 4 ? "Alto risco" : PSA >= 10 || gradeGroup >= 2 ? "Risco intermediário" : "Baixo risco";

  return {
    estadio: `Estádio ${estadio}`,
    detalhes: `${T} ${N} ${M} • PSA ${PSA} ng/mL • Grade Group ${gradeGroup} • ${risco}`,
    fonte: "AJCC 8th Edition – Prostate Cancer (NCCN risk groups)",
  };
}

// ---- COLO DO ÚTERO (FIGO 2018) ----
export const FIGO_COLO = [
  { value: "IA1", label: "IA1 — Invasão estromal ≤3 mm" },
  { value: "IA2", label: "IA2 — Invasão estromal >3 e ≤5 mm" },
  { value: "IB1", label: "IB1 — Lesão ≤2 cm" },
  { value: "IB2", label: "IB2 — Lesão >2 e ≤4 cm" },
  { value: "IB3", label: "IB3 — Lesão >4 cm" },
  { value: "IIA1", label: "IIA1 — 2/3 sup. vagina, ≤4 cm" },
  { value: "IIA2", label: "IIA2 — 2/3 sup. vagina, >4 cm" },
  { value: "IIB", label: "IIB — Invasão paramétrio (sem parede pélvica)" },
  { value: "IIIA", label: "IIIA — 1/3 inferior da vagina" },
  { value: "IIIB", label: "IIIB — Parede pélvica / hidronefrose" },
  { value: "IIIC1", label: "IIIC1 — Linfonodos pélvicos +" },
  { value: "IIIC2", label: "IIIC2 — Linfonodos para-aórticos +" },
  { value: "IVA", label: "IVA — Bexiga / reto" },
  { value: "IVB", label: "IVB — Metástase à distância" },
];

export function estadiarColoUtero(figo: string): EstadiamentoResultado {
  return {
    estadio: `FIGO ${figo}`,
    detalhes: FIGO_COLO.find((f) => f.value === figo)?.label ?? figo,
    fonte: "FIGO 2018 – Carcinoma do Colo Uterino",
  };
}

// ---- OVÁRIO (FIGO 2014) ----
export const FIGO_OVARIO = [
  { value: "IA", label: "IA — Limitado a 1 ovário, cápsula íntegra" },
  { value: "IB", label: "IB — Ambos os ovários, cápsulas íntegras" },
  { value: "IC1", label: "IC1 — Ruptura cirúrgica" },
  { value: "IC2", label: "IC2 — Cápsula rota antes / tumor na superfície" },
  { value: "IC3", label: "IC3 — Células malignas em ascite/lavado" },
  { value: "IIA", label: "IIA — Extensão para útero/trompas" },
  { value: "IIB", label: "IIB — Outros tecidos pélvicos" },
  { value: "IIIA1", label: "IIIA1 — Linfonodos retroperitoneais" },
  { value: "IIIA2", label: "IIIA2 — Microscópica peritoneal extra-pélvica" },
  { value: "IIIB", label: "IIIB — Macroscópica ≤2 cm" },
  { value: "IIIC", label: "IIIC — Macroscópica >2 cm / superfície hepática-esplênica" },
  { value: "IVA", label: "IVA — Derrame pleural com citologia +" },
  { value: "IVB", label: "IVB — Metástases parenquimatosas / extra-abdominais" },
];

export function estadiarOvario(figo: string): EstadiamentoResultado {
  return {
    estadio: `FIGO ${figo}`,
    detalhes: FIGO_OVARIO.find((f) => f.value === figo)?.label ?? figo,
    fonte: "FIGO 2014 – Carcinoma de Ovário, Trompa e Peritônio",
  };
}

// ============================================================================
// TUMORES LÍQUIDOS / HEMATOLÓGICOS
// ============================================================================

export const SITIOS_LIQUIDOS = [
  { value: "mieloma", label: "Mieloma Múltiplo" },
  { value: "linfoma", label: "Linfoma (Hodgkin / Não-Hodgkin)" },
  { value: "lla_lma", label: "Leucemia Aguda (LLA / LMA)" },
  { value: "llc", label: "Leucemia Linfocítica Crônica (LLC)" },
  { value: "lmc", label: "Leucemia Mieloide Crônica (LMC) – ELTS/Sokal" },
  { value: "smd", label: "Síndrome Mielodisplásica (IPSS-R)" },
] as const;

export type SitioLiquido = (typeof SITIOS_LIQUIDOS)[number]["value"];

// ---- MIELOMA MÚLTIPLO (R-ISS) ----
export function estadiarMieloma(input: {
  albumina: number; // g/dL
  b2m: number; // mg/L
  ldhAlta: boolean;
  citogeneticaAltoRisco: boolean; // del(17p), t(4;14), t(14;16)
}): EstadiamentoResultado {
  const { albumina, b2m, ldhAlta, citogeneticaAltoRisco } = input;
  let iss: 1 | 2 | 3 = 2;
  if (b2m < 3.5 && albumina >= 3.5) iss = 1;
  else if (b2m >= 5.5) iss = 3;

  let rIss: "I" | "II" | "III" = "II";
  if (iss === 1 && !ldhAlta && !citogeneticaAltoRisco) rIss = "I";
  else if (iss === 3 && (ldhAlta || citogeneticaAltoRisco)) rIss = "III";

  return {
    estadio: `R-ISS ${rIss}`,
    detalhes: `ISS ${iss} • Albumina ${albumina} g/dL • β2-M ${b2m} mg/L • LDH ${ldhAlta ? "elevada" : "normal"} • Citogenética ${citogeneticaAltoRisco ? "alto risco" : "padrão"}`,
    fonte: "R-ISS – Revised International Staging System (IMWG 2015)",
  };
}

// ---- LINFOMAS (Lugano / Ann Arbor) ----
export const LUGANO_ESTADIOS = [
  { value: "I", label: "I — Único linfonodo ou grupo nodal" },
  { value: "IE", label: "IE — Sítio extranodal único, sem nodal" },
  { value: "II", label: "II — ≥2 grupos nodais do mesmo lado do diafragma" },
  { value: "IIE", label: "IIE — Estádio II + extensão extranodal contígua" },
  { value: "III", label: "III — Linfonodos em ambos os lados do diafragma" },
  { value: "IV", label: "IV — Acometimento extranodal disseminado" },
];

export function estadiarLinfoma(input: {
  estadio: string;
  sintomasB: boolean;
  bulky: boolean;
}): EstadiamentoResultado {
  const sufixo = input.sintomasB ? "B" : "A";
  return {
    estadio: `Lugano ${input.estadio}${sufixo}${input.bulky ? " X (bulky)" : ""}`,
    detalhes: `${LUGANO_ESTADIOS.find((l) => l.value === input.estadio)?.label} • ${input.sintomasB ? "Com sintomas B" : "Sem sintomas B"}`,
    fonte: "Classificação de Lugano 2014 (revisão de Ann Arbor)",
  };
}

// ---- LLC (Rai e Binet) ----
export function estadiarLLC(input: {
  linfocitose: boolean;
  linfadenopatia: boolean;
  hepatoesplenomegalia: boolean;
  hb: number; // g/dL
  plaquetas: number; // x10^3/µL
}): EstadiamentoResultado {
  const { linfocitose, linfadenopatia, hepatoesplenomegalia, hb, plaquetas } = input;
  let rai: 0 | 1 | 2 | 3 | 4 = 0;
  if (plaquetas < 100) rai = 4;
  else if (hb < 11) rai = 3;
  else if (hepatoesplenomegalia) rai = 2;
  else if (linfadenopatia) rai = 1;
  else if (linfocitose) rai = 0;

  // Binet
  const areas = [linfadenopatia ? 1 : 0, hepatoesplenomegalia ? 1 : 0].reduce((a, b) => a + b, 0);
  let binet: "A" | "B" | "C" = "A";
  if (hb < 10 || plaquetas < 100) binet = "C";
  else if (areas >= 3) binet = "B";

  return {
    estadio: `Rai ${rai} • Binet ${binet}`,
    detalhes: `Hb ${hb} g/dL • Plaquetas ${plaquetas}×10³/µL`,
    fonte: "Rai (1975, mod. 1987) e Binet (1981) – LLC",
  };
}

// ---- Leucemias Agudas (ELN/WHO — orientativo) ----
export function estadiarLeucemiaAguda(input: {
  tipo: "LMA" | "LLA";
  citogenetica: "favoravel" | "intermediaria" | "adverso";
  blastosMedula: number;
}): EstadiamentoResultado {
  const { tipo, citogenetica, blastosMedula } = input;
  const risco = citogenetica === "favoravel" ? "Favorável" : citogenetica === "adverso" ? "Adverso" : "Intermediário";
  return {
    estadio: `${tipo} – Risco ${risco}`,
    detalhes: `Blastos em medula: ${blastosMedula}% • Citogenética ${citogenetica}`,
    fonte:
      tipo === "LMA"
        ? "ELN 2022 – Acute Myeloid Leukemia Risk Stratification"
        : "WHO 2022 / NCCN – Acute Lymphoblastic Leukemia",
  };
}

// ---- ENDOMÉTRIO (FIGO 2023) ----
export const FIGO_ENDOMETRIO = [
  { value: "IA", label: "IA — Limitado ao endométrio / <50% miométrio" },
  { value: "IB", label: "IB — Invasão ≥50% miométrio" },
  { value: "IC", label: "IC — Histologia agressiva limitada ao endométrio" },
  { value: "II", label: "II — Invasão estroma cervical / extensão local" },
  { value: "IIIA", label: "IIIA — Serosa uterina / anexos" },
  { value: "IIIB", label: "IIIB — Vagina / paramétrios / peritônio pélvico" },
  { value: "IIIC1", label: "IIIC1 — Linfonodos pélvicos +" },
  { value: "IIIC2", label: "IIIC2 — Linfonodos para-aórticos +" },
  { value: "IVA", label: "IVA — Bexiga / mucosa intestinal" },
  { value: "IVB", label: "IVB — Metástase peritoneal extra-pélvica" },
  { value: "IVC", label: "IVC — Metástase à distância" },
];
export function estadiarEndometrio(figo: string): EstadiamentoResultado {
  return {
    estadio: `FIGO ${figo}`,
    detalhes: FIGO_ENDOMETRIO.find((f) => f.value === figo)?.label ?? figo,
    fonte: "FIGO 2023 – Carcinoma do Endométrio",
  };
}

// ---- COLORRETAL (AJCC 8th) ----
export function estadiarColorretal(input: { T: string; N: string; M: string }): EstadiamentoResultado {
  const { T, N, M } = input;
  const t = T.replace(/[a-d]$/, "");
  const n = N.replace(/[a-c]$/, "");
  let estadio = "Indeterminado";
  if (M === "M1a") estadio = "IVA";
  else if (M === "M1b") estadio = "IVB";
  else if (M === "M1c" || M === "M1") estadio = "IVC";
  else if (T === "Tis") estadio = "0";
  else if ((t === "T1" || t === "T2") && n === "N0") estadio = T === "T1" ? "I" : "I";
  else if (t === "T3" && n === "N0") estadio = "IIA";
  else if (T === "T4a" && n === "N0") estadio = "IIB";
  else if (T === "T4b" && n === "N0") estadio = "IIC";
  else if ((t === "T1" || t === "T2") && N === "N1") estadio = "IIIA";
  else if ((t === "T3" || T === "T4a") && N === "N1") estadio = "IIIB";
  else if (T === "T4b" && (n === "N1" || n === "N2")) estadio = "IIIC";
  else if (n === "N2") estadio = "IIIC";
  return {
    estadio: `Estádio ${estadio}`,
    detalhes: `${T} ${N} ${M}`,
    fonte: "AJCC 8th Edition – Colon and Rectum",
  };
}

// ---- ESTÔMAGO (AJCC 8th – clínico/cTNM) ----
export function estadiarEstomago(input: { T: string; N: string; M: string }): EstadiamentoResultado {
  const { T, N, M } = input;
  const t = T.replace(/[a-d]$/, "");
  let estadio = "Indeterminado";
  if (M.startsWith("M1")) estadio = "IV";
  else if (T === "Tis") estadio = "0";
  else if ((t === "T1" || t === "T2") && N === "N0") estadio = "I";
  else if ((t === "T1" || t === "T2") && (N === "N1" || N === "N2" || N === "N3")) estadio = "IIA";
  else if (t === "T3" && N === "N0") estadio = "IIB";
  else if (t === "T4a" && N === "N0") estadio = "IIB";
  else if (t === "T3" && (N === "N1" || N === "N2")) estadio = "III";
  else if (t === "T4" && N !== "N0") estadio = "IVA";
  else estadio = "III";
  return { estadio: `Estádio ${estadio}`, detalhes: `${T} ${N} ${M}`, fonte: "AJCC 8th Edition – Stomach (cTNM)" };
}

// ---- ESÔFAGO (AJCC 8th – clínico, adenocarcinoma) ----
export function estadiarEsofago(input: { T: string; N: string; M: string }): EstadiamentoResultado {
  const { T, N, M } = input;
  const t = T.replace(/[a-d]$/, "");
  let estadio = "Indeterminado";
  if (M.startsWith("M1")) estadio = "IVB";
  else if (T === "Tis") estadio = "0";
  else if ((t === "T1") && N === "N0") estadio = "I";
  else if ((t === "T2") && N === "N0") estadio = "IIA";
  else if ((t === "T1" || t === "T2") && N === "N1") estadio = "IIB";
  else if (t === "T3" && (N === "N0" || N === "N1")) estadio = "III";
  else if (t === "T4" || N === "N2" || N === "N3") estadio = "IVA";
  return { estadio: `Estádio ${estadio}`, detalhes: `${T} ${N} ${M}`, fonte: "AJCC 8th Edition – Esophagus (cTNM)" };
}

// ---- PÂNCREAS (AJCC 8th) ----
export function estadiarPancreas(input: { T: string; N: string; M: string }): EstadiamentoResultado {
  const { T, N, M } = input;
  const t = T.replace(/[a-d]$/, "");
  let estadio = "Indeterminado";
  if (M.startsWith("M1")) estadio = "IV";
  else if (T === "Tis") estadio = "0";
  else if ((T === "T1") && N === "N0") estadio = "IA";
  else if ((T === "T2") && N === "N0") estadio = "IB";
  else if ((T === "T3") && N === "N0") estadio = "IIA";
  else if ((t === "T1" || t === "T2" || t === "T3") && N === "N1") estadio = "IIB";
  else if (N === "N2" || t === "T4") estadio = "III";
  return { estadio: `Estádio ${estadio}`, detalhes: `${T} ${N} ${M}`, fonte: "AJCC 8th Edition – Pancreas" };
}

// ---- FÍGADO / HCC (BCLC) ----
export const BCLC_ESTADIOS = [
  { value: "0", label: "0 (Muito precoce) — Único <2cm, Child A, PS 0" },
  { value: "A", label: "A (Precoce) — Único ou ≤3 nódulos ≤3cm, Child A-B, PS 0" },
  { value: "B", label: "B (Intermediário) — Multinodular, Child A-B, PS 0" },
  { value: "C", label: "C (Avançado) — Invasão vascular/extra-hepática, PS 1-2" },
  { value: "D", label: "D (Terminal) — Child C, PS 3-4" },
];
export function estadiarFigado(bclc: string): EstadiamentoResultado {
  return {
    estadio: `BCLC ${bclc}`,
    detalhes: BCLC_ESTADIOS.find((b) => b.value === bclc)?.label ?? bclc,
    fonte: "BCLC 2022 – Barcelona Clinic Liver Cancer Staging",
  };
}

// ---- RIM (AJCC 8th) ----
export function estadiarRim(input: { T: string; N: string; M: string }): EstadiamentoResultado {
  const { T, N, M } = input;
  const t = T.replace(/[a-d]$/, "");
  let estadio = "Indeterminado";
  if (M.startsWith("M1")) estadio = "IV";
  else if (t === "T1" && N === "N0") estadio = "I";
  else if (t === "T2" && N === "N0") estadio = "II";
  else if (t === "T3" || (N === "N1" && (t === "T1" || t === "T2" || t === "T3"))) estadio = "III";
  else if (t === "T4") estadio = "IV";
  return { estadio: `Estádio ${estadio}`, detalhes: `${T} ${N} ${M}`, fonte: "AJCC 8th Edition – Kidney" };
}

// ---- BEXIGA / UROTELIAL (AJCC 8th) ----
export function estadiarBexiga(input: { T: string; N: string; M: string }): EstadiamentoResultado {
  const { T, N, M } = input;
  const t = T.replace(/[a-d]$/, "");
  let estadio = "Indeterminado";
  if (M === "M1a") estadio = "IVA";
  else if (M === "M1b" || M === "M1c") estadio = "IVB";
  else if (T === "Tis" || T === "Ta" || T === "T0") estadio = "0a/is";
  else if (T === "T1" && N === "N0") estadio = "I";
  else if ((T === "T2a" || T === "T2b") && N === "N0") estadio = "II";
  else if ((t === "T3" || T === "T4a") && N === "N0") estadio = "IIIA";
  else if ((N === "N1") && (t === "T1" || t === "T2" || t === "T3" || T === "T4a")) estadio = "IIIA";
  else if (N === "N2" || N === "N3") estadio = "IIIB";
  else if (T === "T4b") estadio = "IVA";
  return { estadio: `Estádio ${estadio}`, detalhes: `${T} ${N} ${M}`, fonte: "AJCC 8th Edition – Urinary Bladder" };
}

// ---- TIREOIDE DIFERENCIADA (AJCC 8th) — depende da idade ----
export function estadiarTireoide(input: { T: string; N: string; M: string; idade: number }): EstadiamentoResultado {
  const { T, N, M, idade } = input;
  const t = T.replace(/[a-d]$/, "");
  let estadio = "Indeterminado";
  if (idade < 55) {
    estadio = M.startsWith("M1") ? "II" : "I";
  } else {
    if (M.startsWith("M1")) estadio = "IVB";
    else if (t === "T4" || (T === "T4b")) estadio = "IVA";
    else if (T === "T4a") estadio = "IVA";
    else if (t === "T3" || N !== "N0") estadio = "III";
    else if (t === "T2") estadio = "II";
    else if (t === "T1") estadio = "I";
  }
  return {
    estadio: `Estádio ${estadio}`,
    detalhes: `${T} ${N} ${M} • Idade ${idade} anos`,
    fonte: "AJCC 8th Edition – Differentiated Thyroid Carcinoma",
  };
}

// ---- MELANOMA CUTÂNEO (AJCC 8th – simplificado) ----
export function estadiarMelanoma(input: {
  espessura: number; // mm (Breslow)
  ulceracao: boolean;
  N: string;
  M: string;
}): EstadiamentoResultado {
  const { espessura, ulceracao, N, M } = input;
  let T = "T1a";
  if (espessura > 4) T = ulceracao ? "T4b" : "T4a";
  else if (espessura > 2) T = ulceracao ? "T3b" : "T3a";
  else if (espessura > 1) T = ulceracao ? "T2b" : "T2a";
  else T = ulceracao ? "T1b" : "T1a";

  let estadio = "Indeterminado";
  if (M.startsWith("M1")) estadio = "IV";
  else if (N !== "N0") {
    if (T.startsWith("T1") || T.startsWith("T2")) estadio = "III";
    else estadio = "III";
  } else {
    if (T === "T1a") estadio = "IA";
    else if (T === "T1b" || T === "T2a") estadio = "IB";
    else if (T === "T2b" || T === "T3a") estadio = "IIA";
    else if (T === "T3b" || T === "T4a") estadio = "IIB";
    else if (T === "T4b") estadio = "IIC";
  }
  return {
    estadio: `Estádio ${estadio}`,
    detalhes: `Breslow ${espessura} mm • ${ulceracao ? "Com ulceração" : "Sem ulceração"} • ${T} ${N} ${M}`,
    fonte: "AJCC 8th Edition – Cutaneous Melanoma",
  };
}

// ---- CABEÇA E PESCOÇO (AJCC 8th – sítios orais/faringe/laringe, HPV-) ----
export function estadiarCabecaPescoco(input: { T: string; N: string; M: string }): EstadiamentoResultado {
  const { T, N, M } = input;
  const t = T.replace(/[a-d]$/, "");
  let estadio = "Indeterminado";
  if (M.startsWith("M1")) estadio = "IVC";
  else if (T === "Tis") estadio = "0";
  else if (t === "T1" && N === "N0") estadio = "I";
  else if (t === "T2" && N === "N0") estadio = "II";
  else if (t === "T3" && N === "N0") estadio = "III";
  else if ((t === "T1" || t === "T2" || t === "T3") && N === "N1") estadio = "III";
  else if (T === "T4a" || N === "N2") estadio = "IVA";
  else if (T === "T4b" || N === "N3") estadio = "IVB";
  return { estadio: `Estádio ${estadio}`, detalhes: `${T} ${N} ${M}`, fonte: "AJCC 8th Edition – Head and Neck (HPV-negativo)" };
}

// ---- SNC / GLIOMA (WHO CNS5 2021) ----
export const WHO_GLIOMA = [
  { value: "1", label: "Grau 1 — Pilocítico / circunscrito (benigno)" },
  { value: "2", label: "Grau 2 — Difuso de baixo grau (IDH-mut)" },
  { value: "3", label: "Grau 3 — Anaplásico (astrocitoma/oligodendroglioma)" },
  { value: "4", label: "Grau 4 — Glioblastoma (IDH-wt) / Astrocitoma G4 (IDH-mut)" },
];
export function estadiarSNC(grau: string): EstadiamentoResultado {
  return {
    estadio: `WHO Grau ${grau}`,
    detalhes: WHO_GLIOMA.find((g) => g.value === grau)?.label ?? grau,
    fonte: "WHO Classification of CNS Tumors – 5th Edition (2021)",
  };
}

// ---- LMC (Sokal / ELTS – simplificado) ----
export function estadiarLMC(input: {
  fase: "cronica" | "acelerada" | "blastica";
  idade: number;
  bacoCm: number; // cm abaixo do rebordo costal
  plaquetas: number; // x10^3
  blastos: number; // %
}): EstadiamentoResultado {
  const { fase, idade, bacoCm, plaquetas, blastos } = input;
  // Sokal score (simplificado)
  const sokal = Math.exp(
    0.0116 * (idade - 43.4) +
      0.0345 * (bacoCm - 7.51) +
      0.188 * (Math.pow(plaquetas / 700, 2) - 0.563) +
      0.0887 * (blastos - 2.1),
  );
  const risco = sokal < 0.8 ? "Baixo" : sokal < 1.2 ? "Intermediário" : "Alto";
  const faseLabel = { cronica: "Crônica", acelerada: "Acelerada", blastica: "Blástica" }[fase];
  return {
    estadio: `LMC – Fase ${faseLabel} • Sokal ${risco}`,
    detalhes: `Score Sokal ${sokal.toFixed(2)} • Blastos ${blastos}% • Baço ${bacoCm} cm • Plaquetas ${plaquetas}×10³`,
    fonte: "Sokal et al. (1984) / ELN 2020 – Chronic Myeloid Leukemia",
  };
}

// ---- SMD (IPSS-R) ----
export function estadiarSMD(input: {
  blastos: number; // %
  citogenetica: "muito_bom" | "bom" | "intermediario" | "ruim" | "muito_ruim";
  hb: number; // g/dL
  plaquetas: number; // x10^3
  neutrofilos: number; // x10^3
}): EstadiamentoResultado {
  const { blastos, citogenetica, hb, plaquetas, neutrofilos } = input;
  let score = 0;
  // Citogenética
  score += { muito_bom: 0, bom: 1, intermediario: 2, ruim: 3, muito_ruim: 4 }[citogenetica];
  // Blastos
  if (blastos <= 2) score += 0;
  else if (blastos <= 4.99) score += 1;
  else if (blastos <= 10) score += 2;
  else score += 3;
  // Hb
  if (hb >= 10) score += 0;
  else if (hb >= 8) score += 1;
  else score += 1.5;
  // Plaquetas
  if (plaquetas >= 100) score += 0;
  else if (plaquetas >= 50) score += 0.5;
  else score += 1;
  // Neutrófilos
  if (neutrofilos >= 0.8) score += 0;
  else score += 0.5;

  let risco = "Muito baixo";
  if (score > 6) risco = "Muito alto";
  else if (score > 4.5) risco = "Alto";
  else if (score > 3) risco = "Intermediário";
  else if (score > 1.5) risco = "Baixo";

  return {
    estadio: `IPSS-R: ${risco} (${score.toFixed(1)} pts)`,
    detalhes: `Blastos ${blastos}% • Hb ${hb} • Plaq ${plaquetas}×10³ • Neutróf ${neutrofilos}×10³ • Citogenética ${citogenetica}`,
    fonte: "IPSS-R – Greenberg et al. (Blood 2012) – MDS",
  };
}
