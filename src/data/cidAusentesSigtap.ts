// AUTO-GERADO — não editar manualmente.
// Fonte oficial: CID-10 (OMS) / DATASUS — tabela CID-10 (CID-10-CATEGORIAS.CSV e
// CID-10-SUBCATEGORIAS.CSV), http://www2.datasus.gov.br/cid10/V2008/downloads/CID10CSV.zip
// Universo considerado: Capítulo II — Neoplasias malignas (C00-C97), carcinoma in situ
// (D00-D09) e neoplasias de comportamento incerto/desconhecido (D37-D48).
// Conteúdo: códigos oncológicos oficiais que NÃO constam da base de compatibilidade
// CID x procedimento do subgrupo 0304 da tabela SIGTAP/SUS carregada no sistema.

export type GrupoNeoplasia = "maligna" | "in_situ" | "incerta";

export interface CidAusente {
  codigo: string;
  descricao: string;
  grupo: GrupoNeoplasia;
}

export const fonteCidOficial = {
  nome: "CID-10 (OMS) — Tabela oficial DATASUS/SUS",
  url: "http://www2.datasus.gov.br/cid10/V2008/downloads/CID10CSV.zip",
  universo: 583,
  escopo: "C00-C97 (malignas), D00-D09 (in situ), D37-D48 (comportamento incerto)",
};

export const gruposNeoplasia: Record<GrupoNeoplasia, string> = {
  maligna: "Neoplasia maligna (C00-C97)",
  in_situ: "Carcinoma in situ (D00-D09)",
  incerta: "Comportamento incerto ou desconhecido (D37-D48)",
};

export const cidsAusentesSigtap: CidAusente[] = [
  { codigo: "D00.0", descricao: "Carcinoma in situ dos lábios, cavidade oral e faringe", grupo: "in_situ" },
  { codigo: "D00.1", descricao: "Carcinoma in situ do esôfago", grupo: "in_situ" },
  { codigo: "D00.2", descricao: "Carcinoma in situ do estômago", grupo: "in_situ" },
  { codigo: "D01.0", descricao: "Carcinoma in situ do cólon", grupo: "in_situ" },
  { codigo: "D01.1", descricao: "Carcinoma in situ da junção retossigmóide", grupo: "in_situ" },
  { codigo: "D01.2", descricao: "Carcinoma in situ do reto", grupo: "in_situ" },
  { codigo: "D01.3", descricao: "Carcinoma in situ do ânus e canal anal", grupo: "in_situ" },
  { codigo: "D01.4", descricao: "Carcinoma in situ de outras partes do intestino e as não especificadas", grupo: "in_situ" },
  { codigo: "D01.5", descricao: "Carcinoma in situ do fígado, vesícula biliar e vias biliares", grupo: "in_situ" },
  { codigo: "D01.7", descricao: "Carcinoma in situ de outros órgãos especificados do aparelho digestivo", grupo: "in_situ" },
  { codigo: "D01.9", descricao: "Carcinoma in situ de órgãos digestivos, não especificado", grupo: "in_situ" },
  { codigo: "D02.0", descricao: "Carcinoma in situ da laringe", grupo: "in_situ" },
  { codigo: "D02.1", descricao: "Carcinoma in situ da traquéia", grupo: "in_situ" },
  { codigo: "D02.2", descricao: "Carcinoma in situ dos brônquios e pulmões", grupo: "in_situ" },
  { codigo: "D02.3", descricao: "Carcinoma in situ de outras partes do aparelho respiratório", grupo: "in_situ" },
  { codigo: "D02.9", descricao: "Carcinoma in situ do aparelho respiratório, não especificado", grupo: "in_situ" },
  { codigo: "D03.0", descricao: "Melanoma in situ do lábio", grupo: "in_situ" },
  { codigo: "D03.1", descricao: "Melanoma in situ da pálpebra, incluindo o canto", grupo: "in_situ" },
  { codigo: "D03.2", descricao: "Melanoma in situ da orelha e do conduto auditivo externo", grupo: "in_situ" },
  { codigo: "D03.3", descricao: "Melanoma in situ de outras partes, e de partes não especificadas da face", grupo: "in_situ" },
  { codigo: "D03.4", descricao: "Melanoma in situ do couro cabeludo e do pescoço", grupo: "in_situ" },
  { codigo: "D03.5", descricao: "Melanoma in situ do tronco", grupo: "in_situ" },
  { codigo: "D03.6", descricao: "Melanoma in situ dos membros superiores, incluindo ombro", grupo: "in_situ" },
  { codigo: "D03.7", descricao: "Melanoma in situ dos membros inferiores, incluindo quadril", grupo: "in_situ" },
  { codigo: "D03.8", descricao: "Melanoma in situ de outras localizações", grupo: "in_situ" },
  { codigo: "D03.9", descricao: "Melanoma in situ, não especificado", grupo: "in_situ" },
  { codigo: "D04.0", descricao: "Carcinoma in situ da pele do lábio", grupo: "in_situ" },
  { codigo: "D04.1", descricao: "Carcinoma in situ da pele da pálpebra, incluindo o canto", grupo: "in_situ" },
  { codigo: "D04.2", descricao: "Carcinoma in situ da pele da orelha e do conduto auditivo externo", grupo: "in_situ" },
  { codigo: "D04.3", descricao: "Carcinoma in situ da pele de outras partes e de partes não especificadas da face", grupo: "in_situ" },
  { codigo: "D04.4", descricao: "Carcinoma in situ da pele do couro cabeludo e do pescoço", grupo: "in_situ" },
  { codigo: "D04.5", descricao: "Carcinoma in situ da pele do tronco", grupo: "in_situ" },
  { codigo: "D04.6", descricao: "Carcinoma in situ da pele dos membros superiores, incluindo ombro", grupo: "in_situ" },
  { codigo: "D04.7", descricao: "Carcinoma in situ da pele dos membros inferiores, incluindo quadril", grupo: "in_situ" },
  { codigo: "D04.8", descricao: "Carcinoma in situ da pele de outras localizações", grupo: "in_situ" },
  { codigo: "D04.9", descricao: "Carcinoma in situ da pele, não especificada", grupo: "in_situ" },
  { codigo: "D05.0", descricao: "Carcinoma lobular in situ", grupo: "in_situ" },
  { codigo: "D05.1", descricao: "Carcinoma intraductal in situ", grupo: "in_situ" },
  { codigo: "D05.7", descricao: "Outros carcinomas in situ", grupo: "in_situ" },
  { codigo: "D05.9", descricao: "Carcinoma in situ da mama, não especificado", grupo: "in_situ" },
  { codigo: "D06.0", descricao: "Carcinoma in situ do endocérvix", grupo: "in_situ" },
  { codigo: "D06.1", descricao: "Carcinoma in situ do exocérvix", grupo: "in_situ" },
  { codigo: "D06.7", descricao: "Carcinoma in situ de outras partes do colo do útero", grupo: "in_situ" },
  { codigo: "D06.9", descricao: "Carcinoma in situ do colo do útero, não especificado", grupo: "in_situ" },
  { codigo: "D07.0", descricao: "Carcinoma in situ do endométrio", grupo: "in_situ" },
  { codigo: "D07.1", descricao: "Carcinoma in situ da vulva", grupo: "in_situ" },
  { codigo: "D07.2", descricao: "Carcinoma in situ da vagina", grupo: "in_situ" },
  { codigo: "D07.3", descricao: "Carcinoma in situ de outros órgãos genitais femininos e os não especificados", grupo: "in_situ" },
  { codigo: "D07.4", descricao: "Carcinoma in situ do pênis", grupo: "in_situ" },
  { codigo: "D07.5", descricao: "Carcinoma in situ da próstata", grupo: "in_situ" },
  { codigo: "D07.6", descricao: "Carcinoma in situ de outros órgãos genitais masculinos e os não especificados", grupo: "in_situ" },
  { codigo: "D09.0", descricao: "Carcinoma in situ da bexiga", grupo: "in_situ" },
  { codigo: "D09.1", descricao: "Carcinoma in situ de outros órgãos urinários e os não especificados", grupo: "in_situ" },
  { codigo: "D09.2", descricao: "Carcinoma in situ do olho", grupo: "in_situ" },
  { codigo: "D09.3", descricao: "Carcinoma in situ da tireóide e de outras glândulas endócrinas", grupo: "in_situ" },
  { codigo: "D09.7", descricao: "Carcinoma in situ de outras localizações especificadas", grupo: "in_situ" },
  { codigo: "D09.9", descricao: "Carcinoma in situ, não especificado", grupo: "in_situ" },
];
