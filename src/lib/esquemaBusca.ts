import { cidsOnco, type CID, type Procedimento } from "@/data/sigtap";

const norm = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const codigoCid = (value: string) => value.toUpperCase().replace(/[^A-Z0-9]/g, "");

const esquemasPorContexto: Array<{ termos: string[]; alvos: string[] }> = [
  { termos: ["ac", "doxorrubicina", "ciclofosfamida", "paclitaxel", "docetaxel", "cmf", "capecitabina", "trastuzumabe", "pertuzumabe", "tamoxifeno", "anastrozol", "letrozol", "mama"], alvos: ["MAMA", "C50"] },
  { termos: ["folfox", "xelox", "capox", "5 fu", "fluorouracil", "leucovorina", "oxaliplatina", "irinotecano", "folfiri", "capecitabina", "bevacizumabe", "cetuximabe", "panitumumabe", "colon", "reto", "colorretal"], alvos: ["CÓLON", "COLON", "RETO", "COLORRETAL", "C18", "C19", "C20"] },
  { termos: ["cisplatina", "etoposideo", "etoposide", "carboplatina", "paclitaxel", "pemetrexede", "gemcitabina", "vinorelbina", "durvalumabe", "pembrolizumabe", "pulmao", "pulmão"], alvos: ["PULMÃO", "PULMAO", "BRÔNQUIOS", "BRONQUIOS", "C34"] },
  { termos: ["chop", "r chop", "rituximabe", "abvd", "brentuximabe", "linfoma", "hodgkin"], alvos: ["HODGKIN", "LINFOMA", "C81", "C82", "C83", "C84", "C85"] },
  { termos: ["bortezomibe", "talidomida", "lenalidomida", "dexametasona", "melfalano", "vtd", "vrd", "cibord", "cybord", "mieloma", "celulas plasmaticas", "células plasmáticas"], alvos: ["PLASM", "MIELOMA", "C90"] },
  { termos: ["cisplatina", "gencitabina", "gemcitabina", "carboplatina", "paclitaxel", "colo do utero", "cervix", "ovario", "endométrio", "endometrio"], alvos: ["COLO", "ÚTERO", "UTERO", "OVÁRIO", "OVARIO", "ENDOM", "C53", "C54", "C56"] },
  { termos: ["cisplatina", "5 fu", "fluorouracil", "docetaxel", "paclitaxel", "carboplatina", "esofago", "estomago", "gastrico", "gástrico"], alvos: ["ESÔFAGO", "ESOFAGO", "ESTÔMAGO", "ESTOMAGO", "GÁSTR", "GASTR", "C15", "C16"] },
  { termos: ["gemcitabina", "nab paclitaxel", "folfirinox", "pâncreas", "pancreas", "vias biliares", "colangiocarcinoma"], alvos: ["PÂNCREAS", "PANCREAS", "BILIARES", "C24", "C25"] },
  { termos: ["imatinibe", "sunitinibe", "regorafenibe", "gist", "estroma gastrointestinal"], alvos: ["GIST", "ESTROMA GASTROINTESTINAL", "C16", "C17", "C18", "C48"] },
  { termos: ["nivolumabe", "pembrolizumabe", "ipilimumabe", "dabrafenibe", "trametinibe", "vemurafenibe", "melanoma"], alvos: ["MELANOMA", "C43"] },
];

export function cidsFormatados(codigos: string[], limite = 8): string {
  const descricoes = codigos
    .slice(0, limite)
    .map((codigo) => {
      const cid = cidsOnco.find((c) => codigoCid(c.codigo) === codigoCid(codigo));
      return cid ? `${cid.codigo} ${cid.descricao}` : codigo;
    });
  const resto = codigos.length > limite ? ` +${codigos.length - limite}` : "";
  return `${descricoes.join(", ")}${resto}`;
}

export function procedimentoCompativelComCid(procedimento: Procedimento, cid: CID): boolean {
  const cidNorm = codigoCid(cid.codigo);
  const cidPrefixo = cidNorm.slice(0, 3);
  return procedimento.cidsCompativeis.some((c) => {
    const comp = codigoCid(c);
    return comp === cidNorm || comp.startsWith(cidNorm) || cidNorm.startsWith(comp) || comp.startsWith(cidPrefixo);
  });
}

export function procedimentoCompativelComEsquema(procedimento: Procedimento, termo: string): boolean {
  const consulta = norm(termo);
  if (consulta.length < 2) return false;
  const textoProc = norm(`${procedimento.codigo} ${procedimento.nome} ${procedimento.descricao}`);
  if (textoProc.includes(consulta)) return true;

  const regras = esquemasPorContexto.filter((item) => item.termos.some((t) => consulta.includes(norm(t)) || norm(t).includes(consulta)));
  if (regras.length === 0) return false;

  const textoSemAcento = textoProc.toUpperCase();
  return regras.some((regra) =>
    regra.alvos.some((alvo) =>
      textoSemAcento.includes(norm(alvo).toUpperCase()) ||
      procedimento.cidsCompativeis.some((c) => codigoCid(c).startsWith(alvo.replace(/[^A-Z0-9]/g, ""))),
    ),
  );
}