// Parser browser-side da TABELA_PROCEDIMENTO_SIGTAP (.xls/.xlsx) para o subgrupo 0304.
// Extrai apenas os campos usados na comparação entre competências.
import * as XLSX from "xlsx";

export interface ProcedimentoSnapshot {
  codigo: string;
  nome: string;
  valor: number;
  cbosCompativeis: string[];
  cidsCompativeis: string[];
  idadeMinima: string;
  idadeMaxima: string;
  sexo: string;
}

export interface SnapshotCompetencia {
  arquivoNome: string;
  totalProcedimentos: number;
  procedimentos: Record<string, ProcedimentoSnapshot>;
}

function toFloat(v: unknown): number {
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const n = parseFloat(v.replace(",", "."));
    return Number.isFinite(n) ? n : 0;
  }
  return 0;
}

function splitList(v: unknown): string[] {
  if (!v) return [];
  return String(v)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function parseProcedimentosXLS(file: File): Promise<SnapshotCompetencia> {
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, { type: "array" });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json<unknown[]>(sheet, { header: 1, defval: "" });

  const procedimentos: Record<string, ProcedimentoSnapshot> = {};
  for (const row of rows) {
    const raw = String(row?.[0] ?? "").trim();
    if (!raw || !raw.includes(" - ")) continue;
    const [codFull, ...nomeParts] = raw.split(" - ");
    const codFullT = codFull.trim();
    if (!codFullT.startsWith("0304")) continue;
    const codigo = codFullT.replace(/^0+/, "");
    const nome = nomeParts.join(" - ").trim();
    const valAmb = toFloat(row[8]);
    const valHosp = toFloat(row[11]);
    const valor = valAmb > 0 ? valAmb : valHosp;
    const cbosCompativeis = splitList(row[29]);
    const cidsCompativeis = splitList(row[31]);
    const idadeMinima = String(row[15] ?? "").trim();
    const idadeMaxima = String(row[16] ?? "").trim();
    const sexo = String(row[14] ?? "").trim();
    procedimentos[codigo] = { codigo, nome, valor, cbosCompativeis, cidsCompativeis, idadeMinima, idadeMaxima, sexo };
  }

  return {
    arquivoNome: file.name,
    totalProcedimentos: Object.keys(procedimentos).length,
    procedimentos,
  };
}

export interface DiffProcedimento {
  codigo: string;
  nome: string;
  tipo: "adicionado" | "removido" | "alterado";
  valorAntes?: number;
  valorDepois?: number;
  cidsAdicionados: string[];
  cidsRemovidos: string[];
  cbosAdicionados: string[];
  cbosRemovidos: string[];
  nomeAntes?: string;
  nomeDepois?: string;
  idadeMinAntes?: string;
  idadeMinDepois?: string;
  idadeMaxAntes?: string;
  idadeMaxDepois?: string;
  sexoAntes?: string;
  sexoDepois?: string;
}

export interface DiffResult {
  totalAntes: number;
  totalDepois: number;
  diffs: DiffProcedimento[];
  resumo: {
    adicionados: number;
    removidos: number;
    valorAlterado: number;
    nomeAlterado: number;
    cidsAlterado: number;
    cbosAlterado: number;
    idadeAlterado: number;
    sexoAlterado: number;
  };
}

export function diffSnapshots(
  antes: SnapshotCompetencia,
  depois: SnapshotCompetencia,
): DiffResult {
  const codsAntes = new Set(Object.keys(antes.procedimentos));
  const codsDepois = new Set(Object.keys(depois.procedimentos));
  const diffs: DiffProcedimento[] = [];
  const resumo = { adicionados: 0, removidos: 0, valorAlterado: 0, nomeAlterado: 0, cidsAlterado: 0, cbosAlterado: 0, idadeAlterado: 0, sexoAlterado: 0 };

  for (const c of codsDepois) {
    if (!codsAntes.has(c)) {
      const p = depois.procedimentos[c];
      diffs.push({
        codigo: c, nome: p.nome, tipo: "adicionado",
        valorDepois: p.valor,
        cidsAdicionados: [...p.cidsCompativeis], cidsRemovidos: [],
        cbosAdicionados: [...p.cbosCompativeis], cbosRemovidos: [],
        nomeDepois: p.nome,
        idadeMinDepois: p.idadeMinima, idadeMaxDepois: p.idadeMaxima, sexoDepois: p.sexo,
      });
      resumo.adicionados++;
    }
  }
  for (const c of codsAntes) {
    if (!codsDepois.has(c)) {
      const p = antes.procedimentos[c];
      diffs.push({
        codigo: c, nome: p.nome, tipo: "removido",
        valorAntes: p.valor,
        cidsAdicionados: [], cidsRemovidos: [...p.cidsCompativeis],
        cbosAdicionados: [], cbosRemovidos: [...p.cbosCompativeis],
        nomeAntes: p.nome,
        idadeMinAntes: p.idadeMinima, idadeMaxAntes: p.idadeMaxima, sexoAntes: p.sexo,
      });
      resumo.removidos++;
    }
  }
  for (const c of codsAntes) {
    if (!codsDepois.has(c)) continue;
    const a = antes.procedimentos[c];
    const d = depois.procedimentos[c];
    const valorMudou = Math.abs(a.valor - d.valor) > 0.001;
    const nomeMudou = a.nome.trim().toUpperCase() !== d.nome.trim().toUpperCase();
    const cidsA = new Set(a.cidsCompativeis); const cidsD = new Set(d.cidsCompativeis);
    const cidsAdd = [...cidsD].filter((x) => !cidsA.has(x)).sort();
    const cidsRem = [...cidsA].filter((x) => !cidsD.has(x)).sort();
    const cbosA = new Set(a.cbosCompativeis); const cbosD = new Set(d.cbosCompativeis);
    const cbosAdd = [...cbosD].filter((x) => !cbosA.has(x)).sort();
    const cbosRem = [...cbosA].filter((x) => !cbosD.has(x)).sort();
    const idadeMinMudou = (a.idadeMinima || "") !== (d.idadeMinima || "");
    const idadeMaxMudou = (a.idadeMaxima || "") !== (d.idadeMaxima || "");
    const sexoMudou = (a.sexo || "") !== (d.sexo || "");
    if (!valorMudou && !nomeMudou && cidsAdd.length === 0 && cidsRem.length === 0 && cbosAdd.length === 0 && cbosRem.length === 0 && !idadeMinMudou && !idadeMaxMudou && !sexoMudou) continue;
    diffs.push({
      codigo: c,
      nome: d.nome,
      tipo: "alterado",
      valorAntes: a.valor,
      valorDepois: d.valor,
      cidsAdicionados: cidsAdd,
      cidsRemovidos: cidsRem,
      cbosAdicionados: cbosAdd,
      cbosRemovidos: cbosRem,
      nomeAntes: nomeMudou ? a.nome : undefined,
      nomeDepois: nomeMudou ? d.nome : undefined,
      idadeMinAntes: idadeMinMudou ? a.idadeMinima : undefined,
      idadeMinDepois: idadeMinMudou ? d.idadeMinima : undefined,
      idadeMaxAntes: idadeMaxMudou ? a.idadeMaxima : undefined,
      idadeMaxDepois: idadeMaxMudou ? d.idadeMaxima : undefined,
      sexoAntes: sexoMudou ? a.sexo : undefined,
      sexoDepois: sexoMudou ? d.sexo : undefined,
    });
    if (valorMudou) resumo.valorAlterado++;
    if (nomeMudou) resumo.nomeAlterado++;
    if (cidsAdd.length || cidsRem.length) resumo.cidsAlterado++;
    if (cbosAdd.length || cbosRem.length) resumo.cbosAlterado++;
    if (idadeMinMudou || idadeMaxMudou) resumo.idadeAlterado++;
    if (sexoMudou) resumo.sexoAlterado++;
  }

  diffs.sort((x, y) => x.codigo.localeCompare(y.codigo));
  return { totalAntes: codsAntes.size, totalDepois: codsDepois.size, diffs, resumo };
}
