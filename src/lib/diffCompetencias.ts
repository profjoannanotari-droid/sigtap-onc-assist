// Comparação entre duas competências SIGTAP (procedimentos, CIDs e formas de organização).

import { formasOrganizacao } from "@/data/formasOrganizacao";
import { cidsOnco, type Procedimento } from "@/data/sigtap";

export const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

export type TipoMudanca = "incluido" | "excluido" | "valor" | "nome" | "cids" | "cbos" | "idade" | "sexo";

export const rotuloMudanca: Record<TipoMudanca, string> = {
  incluido: "Incluído",
  excluido: "Excluído",
  valor: "Valor",
  nome: "Nome",
  cids: "CIDs",
  cbos: "CBOs",
  idade: "Idade",
  sexo: "Sexo",
};

export interface DiffProc {
  codigo: string;
  nome: string;
  forma: string;
  tipo: TipoMudanca;
  antes: string;
  depois: string;
}

export interface DiffCid {
  codigo: string;
  descricao: string;
  antes: number;
  depois: number;
  formasGanhas: string[];
  formasPerdidas: string[];
}

export function formaDoCodigo(codigo: string): string {
  return codigo.padStart(10, "0").slice(0, 6);
}

export function nomeForma(codigo: string): string {
  return formasOrganizacao.find((f) => f.codigo === codigo)?.nome ?? codigo;
}

function listaDiff(a: string[], b: string[]) {
  const sa = new Set(a);
  const sb = new Set(b);
  return {
    incluidos: b.filter((x) => !sa.has(x)),
    removidos: a.filter((x) => !sb.has(x)),
  };
}

export function compararProcedimentos(anterior: Procedimento[], atual: Procedimento[]): DiffProc[] {
  const ma = new Map(anterior.map((p) => [p.codigo, p]));
  const mb = new Map(atual.map((p) => [p.codigo, p]));
  const out: DiffProc[] = [];

  for (const [cod, p] of mb) {
    const a = ma.get(cod);
    const base = { codigo: cod, nome: p.nome, forma: formaDoCodigo(cod) };
    if (!a) {
      out.push({ ...base, tipo: "incluido", antes: "—", depois: `${p.nome} · ${brl(p.valor)}` });
      continue;
    }
    if (a.valor !== p.valor) out.push({ ...base, tipo: "valor", antes: brl(a.valor), depois: brl(p.valor) });
    if (a.nome !== p.nome) out.push({ ...base, tipo: "nome", antes: a.nome, depois: p.nome });
    const cid = listaDiff(a.cidsCompativeis, p.cidsCompativeis);
    if (cid.incluidos.length || cid.removidos.length)
      out.push({
        ...base,
        tipo: "cids",
        antes: `${a.cidsCompativeis.length} CIDs${cid.removidos.length ? ` · retirados: ${cid.removidos.join(", ")}` : ""}`,
        depois: `${p.cidsCompativeis.length} CIDs${cid.incluidos.length ? ` · incluídos: ${cid.incluidos.join(", ")}` : ""}`,
      });
    const cbo = listaDiff(a.cbosCompativeis, p.cbosCompativeis);
    if (cbo.incluidos.length || cbo.removidos.length)
      out.push({
        ...base,
        tipo: "cbos",
        antes: `${a.cbosCompativeis.length} CBOs${cbo.removidos.length ? ` · retirados: ${cbo.removidos.join(", ")}` : ""}`,
        depois: `${p.cbosCompativeis.length} CBOs${cbo.incluidos.length ? ` · incluídos: ${cbo.incluidos.join(", ")}` : ""}`,
      });
    if ((a.idadeMinima ?? "") !== (p.idadeMinima ?? "") || (a.idadeMaxima ?? "") !== (p.idadeMaxima ?? ""))
      out.push({
        ...base,
        tipo: "idade",
        antes: `${a.idadeMinima ?? "—"} a ${a.idadeMaxima ?? "—"}`,
        depois: `${p.idadeMinima ?? "—"} a ${p.idadeMaxima ?? "—"}`,
      });
    if ((a.sexo ?? "") !== (p.sexo ?? ""))
      out.push({ ...base, tipo: "sexo", antes: a.sexo ?? "—", depois: p.sexo ?? "—" });
  }

  for (const [cod, a] of ma) {
    if (!mb.has(cod))
      out.push({
        codigo: cod,
        nome: a.nome,
        forma: formaDoCodigo(cod),
        tipo: "excluido",
        antes: `${a.nome} · ${brl(a.valor)}`,
        depois: "—",
      });
  }

  return out.sort((x, y) => x.codigo.localeCompare(y.codigo));
}

function mapaCidForma(procs: Procedimento[]) {
  const m = new Map<string, Set<string>>();
  for (const p of procs) {
    const forma = formaDoCodigo(p.codigo);
    for (const c of p.cidsCompativeis) {
      if (!m.has(c)) m.set(c, new Set());
      m.get(c)!.add(forma);
    }
  }
  return m;
}

export function compararCids(anterior: Procedimento[], atual: Procedimento[]): DiffCid[] {
  const ma = mapaCidForma(anterior);
  const mb = mapaCidForma(atual);
  const codigos = new Set([...ma.keys(), ...mb.keys()]);
  const desc = new Map(cidsOnco.map((c) => [c.codigo, c.descricao]));
  const out: DiffCid[] = [];
  for (const c of codigos) {
    const a = ma.get(c) ?? new Set<string>();
    const b = mb.get(c) ?? new Set<string>();
    const ganhas = [...b].filter((f) => !a.has(f));
    const perdidas = [...a].filter((f) => !b.has(f));
    if (ganhas.length || perdidas.length)
      out.push({
        codigo: c,
        descricao: desc.get(c) ?? "—",
        antes: a.size,
        depois: b.size,
        formasGanhas: ganhas.sort(),
        formasPerdidas: perdidas.sort(),
      });
  }
  return out.sort((x, y) => x.codigo.localeCompare(y.codigo));
}
