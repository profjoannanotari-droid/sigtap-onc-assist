// Torna legíveis as mudanças de compatibilidade registradas em src/data/atualizacao.ts.
// O arquivo de origem do SIGTAP trunca os nomes dos procedimentos; aqui eles são
// recuperados pelo código ou por correspondência com a base de nomes completa.

import { compatibilidades } from "@/data/compatibilidade";
import { listarProcedimentos } from "@/data/sigtap";
import { mudancasCompatibilidadeDetalhe, type MudancaCompatibilidade } from "@/data/atualizacao";

export type TipoVinculo = "incluido" | "removido" | "quantidade";

export interface VinculoLegivel {
  tipo: TipoVinculo;
  codigo?: string;
  nome: string;
  nomeCompleto: boolean;
  categoria?: string;
  quantidade?: string;
  desde?: string;
  original: string;
}

export interface MudancaCompatLegivel {
  codigo: string;
  nome: string;
  vinculos: VinculoLegivel[];
}

const norm = (s: string) =>
  s.toUpperCase().replace(/[^A-Z0-9]/g, " ").replace(/\s+/g, " ").trim();

function construirIndice() {
  const porCodigo = new Map<string, string>();
  for (const lista of Object.values(compatibilidades)) {
    for (const c of lista) {
      const atual = porCodigo.get(c.codigo);
      if (!atual || atual.length < c.nome.length) porCodigo.set(c.codigo, c.nome);
    }
  }
  for (const p of listarProcedimentos()) porCodigo.set(p.codigo, p.nome);
  const todos = Array.from(new Set(porCodigo.values()));
  return { porCodigo, todos };
}

const indice = construirIndice();

function resolverPorFragmento(fragmento: string) {
  const f = norm(fragmento);
  if (f.length < 8) return null;
  const candidatos = indice.todos.filter((n) => {
    const nn = norm(n);
    return nn !== f && nn.endsWith(f);
  });
  return candidatos.length === 1 ? candidatos[0] : null;
}

function parseVinculo(texto: string, tipo: TipoVinculo): VinculoLegivel {
  const corte = texto.lastIndexOf(" (");
  const cabeca = (corte > 0 ? texto.slice(0, corte) : texto).trim();
  const detalhe = corte > 0 ? texto.slice(corte + 2).replace(/\)\s*$/, "") : "";

  const partes = detalhe.split(";").map((s) => s.trim()).filter(Boolean);
  const categoria = partes.find((p) => !/^qtd\b|^desde\b/i.test(p));
  const qtd = partes.find((p) => /^qtd\b/i.test(p))?.replace(/^qtd\s*/i, "").trim();
  const desde = partes.find((p) => /^desde\b/i.test(p))?.replace(/^desde\s*/i, "").trim();

  const comCodigo = cabeca.match(/^(\d{9,10})\s*[—-]\s*(.*)$/);
  if (comCodigo) {
    const [, codigo, nomeArquivo] = comCodigo;
    const canonico = indice.porCodigo.get(codigo);
    const nome = canonico && canonico.length >= nomeArquivo.length ? canonico : nomeArquivo;
    return {
      tipo,
      codigo,
      nome,
      nomeCompleto: Boolean(canonico),
      categoria,
      quantidade: qtd,
      desde: desde || undefined,
      original: texto,
    };
  }

  const resolvido = resolverPorFragmento(cabeca);
  if (resolvido) {
    const codigo = Array.from(indice.porCodigo.entries()).find(([, n]) => n === resolvido)?.[0];
    return {
      tipo,
      codigo,
      nome: resolvido,
      nomeCompleto: true,
      categoria,
      quantidade: qtd,
      desde: desde || undefined,
      original: texto,
    };
  }

  return {
    tipo,
    nome: cabeca.replace(/^[.\s—-]+/, ""),
    nomeCompleto: false,
    categoria,
    quantidade: qtd,
    desde: desde || undefined,
    original: texto,
  };
}

function converter(m: MudancaCompatibilidade): MudancaCompatLegivel {
  const nomeProc = indice.porCodigo.get(m.codigo) ?? m.nome;
  return {
    codigo: m.codigo,
    nome: nomeProc.length >= m.nome.length ? nomeProc : m.nome,
    vinculos: [
      ...m.incluidas.map((t) => parseVinculo(t, "incluido")),
      ...m.removidas.map((t) => parseVinculo(t, "removido")),
      ...m.quantidade.map((t) => parseVinculo(t, "quantidade")),
    ],
  };
}

export const mudancasCompatLegiveis: MudancaCompatLegivel[] =
  mudancasCompatibilidadeDetalhe.map(converter);

export const rotuloVinculo: Record<TipoVinculo, string> = {
  incluido: "Vínculo incluído",
  removido: "Vínculo retirado",
  quantidade: "Quantidade alterada",
};

export function descreverVinculo(v: VinculoLegivel): string {
  const partes = [v.codigo ? `${v.codigo} — ${v.nome}` : v.nome];
  if (v.categoria) partes.push(v.categoria);
  if (v.quantidade) partes.push(`quantidade máxima ${v.quantidade}`);
  if (v.desde) partes.push(`vigente desde ${v.desde}`);
  if (!v.nomeCompleto) partes.push("nome parcial na tabela de origem");
  return partes.join(" · ");
}
