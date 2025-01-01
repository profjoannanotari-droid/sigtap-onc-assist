export interface LimiteCobranca {
  trecho: string;
  quantidade: number;
  unidade: string;
  contexto?: string;
  tipo: "tempo" | "quantidade";
}

const UNID_TEMPO = "(?:MESES|M[ÊE]S|SEMANAS?|DIAS?|ANOS?|HORAS?)";
const UNID_QTD = "(?:CICLOS?|APLICA[ÇC][ÕO]ES|APLICA[ÇC][ÃA]O|SESS[ÕO]ES|SESS[ÃA]O|VEZES|DOSES?|FRA[ÇC][ÕO]ES|CAMPOS?|INSER[ÇC][ÕO]ES|PROCEDIMENTOS?|COBRAN[ÇC]AS?|UNIDADES?)";
const GATILHO = "(?:DURA[ÇC][ÃA]O\\s+M[ÁA]XIMA\\s+DE|M[ÁA]XIM[OA]\\s+DE|N[ºO]\\s+M[ÁA]XIMO\\s+DE|QUANTIDADE\\s+M[ÁA]XIMA\\s+DE|AT[ÉE]\\s+O?\\s*M[ÁA]XIMO\\s+DE|AT[ÉE]|LIMITE\\s+DE|LIMITAD[OA]\\s+A|N[ÃA]O\\s+EXCEDENDO|N[ÃA]O\\s+SUPERIOR\\s+A|POR\\s+NO\\s+M[ÁA]XIMO|NO\\s+M[ÁA]XIMO)";

export function extrairLimitesCobranca(descricao: string): LimiteCobranca[] {
  if (!descricao) return [];
  const texto = descricao.replace(/\s+/g, " ");
  const limites: LimiteCobranca[] = [];
  const seen = new Set<string>();

  const reFull = new RegExp(`${GATILHO}\\s+(\\d+)\\s*(?:\\(([^)]+)\\))?\\s*(${UNID_TEMPO}|${UNID_QTD})`, "gi");
  const reBare = new RegExp(`${GATILHO}\\s+(\\d+)(?!\\s*\\d)`, "gi");
  const rePor = new RegExp(`(\\d+)\\s*(${UNID_QTD})\\s+POR\\s+(?:APAC|AIH|M[ÊE]S|CICLO|TRATAMENTO|PACIENTE)`, "gi");

  const push = (qtd: number, unidade: string, idx: number, len: number, tipo: "tempo" | "quantidade", trecho: string) => {
    const key = `${idx}-${qtd}-${unidade}`;
    if (seen.has(key)) return;
    seen.add(key);
    const inicio = Math.max(0, idx - 70);
    const fim = Math.min(texto.length, idx + len + 50);
    limites.push({ trecho, quantidade: qtd, unidade: unidade.toLowerCase(), contexto: texto.slice(inicio, fim).trim(), tipo });
  };

  let m: RegExpExecArray | null;
  while ((m = reFull.exec(texto)) !== null) {
    const unidade = m[3];
    const tipo: "tempo" | "quantidade" = new RegExp(`^${UNID_TEMPO}$`, "i").test(unidade) ? "tempo" : "quantidade";
    push(parseInt(m[1], 10), unidade, m.index, m[0].length, tipo, m[0]);
  }
  while ((m = rePor.exec(texto)) !== null) {
    push(parseInt(m[1], 10), m[2], m.index, m[0].length, "quantidade", m[0]);
  }
  while ((m = reBare.exec(texto)) !== null) {
    const dup = limites.some(l => Math.abs((texto.indexOf(l.trecho)) - m!.index) < 5);
    if (dup) continue;
    push(parseInt(m[1], 10), "ocorrência(s)", m.index, m[0].length, "quantidade", m[0]);
  }

  return limites.sort((a, b) => (texto.indexOf(a.trecho) - texto.indexOf(b.trecho)));
}

export function resumoLimites(limites: LimiteCobranca[]): string {
  return limites.map(l => `${l.quantidade} ${l.unidade}`).join(" • ");
}
