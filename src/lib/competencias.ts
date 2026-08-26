// Registro de competências SIGTAP disponíveis para pesquisa.
// - "atual": base vigente compilada no sistema (src/data/sigtap.ts)
// - "derivada": reconstruída a partir das diferenças registradas na atualização
// - "upload": XLS de qualquer competência enviado pelo usuário (guardado no navegador)

import { listarProcedimentos, type Procedimento } from "@/data/sigtap";
import { atualizacaoInfo, mudancasProcedimentos } from "@/data/atualizacao";
import type { SnapshotCompetencia } from "@/lib/sigtapXlsParser";

export type OrigemBase = "atual" | "derivada" | "upload";

export interface BaseCompetencia {
  competencia: string;
  rotulo: string;
  origem: OrigemBase;
  observacao?: string;
  procedimentos: Procedimento[];
}

const STORAGE_KEY = "notarisigtap:competencias";

function subgrupoDoCodigo(codigo: string): string {
  return codigo.padStart(10, "0").slice(0, 6);
}

function parseValorAntes(detalhe: string): number | undefined {
  const [antes] = detalhe.split("→");
  if (!antes) return undefined;
  const n = parseFloat(antes.replace(/[^0-9,.-]/g, "").replace(/\./g, "").replace(",", "."));
  return Number.isFinite(n) ? n : undefined;
}

function baseAtual(): BaseCompetencia {
  return {
    competencia: atualizacaoInfo.competencia,
    rotulo: `${atualizacaoInfo.competencia} — vigente (${atualizacaoInfo.mesNome})`,
    origem: "atual",
    observacao: `Base oficial compilada no sistema, atualizada em ${atualizacaoInfo.dataAtualizacao}.`,
    procedimentos: listarProcedimentos(),
  };
}

function baseDerivadaAnterior(): BaseCompetencia | null {
  if (!atualizacaoInfo.competenciaAnterior) return null;
  const atuais = listarProcedimentos();
  const porCodigo = new Map(atuais.map((p) => [p.codigo, { ...p }]));
  let reversiveis = 0;
  let naoReversiveis = 0;

  for (const m of mudancasProcedimentos) {
    const p = porCodigo.get(m.codigo);
    if (m.tipo === "adicionado") {
      porCodigo.delete(m.codigo);
      reversiveis++;
      continue;
    }
    if (!p) {
      naoReversiveis++;
      continue;
    }
    if (m.tipo === "valor") {
      const v = parseValorAntes(m.detalhe);
      if (v !== undefined) {
        p.valor = v;
        reversiveis++;
      } else naoReversiveis++;
    } else if (m.tipo === "nome") {
      const antes = m.detalhe.split("→")[0]?.trim();
      if (antes) {
        p.nome = antes;
        reversiveis++;
      } else naoReversiveis++;
    } else {
      naoReversiveis++;
    }
  }

  return {
    competencia: atualizacaoInfo.competenciaAnterior,
    rotulo: `${atualizacaoInfo.competenciaAnterior} — reconstruída pelas diferenças auditadas`,
    origem: "derivada",
    observacao:
      `Reconstruída a partir da competência ${atualizacaoInfo.competencia} revertendo ${reversiveis} diferença(s) auditada(s).` +
      (naoReversiveis > 0
        ? ` ${naoReversiveis} diferença(s) não são reversíveis automaticamente (CIDs, CBOs, idade ou sexo) — para precisão total, envie o XLS da competência.`
        : ""),
    procedimentos: Array.from(porCodigo.values()),
  };
}

interface BaseSalva {
  competencia: string;
  arquivoNome: string;
  procedimentos: Procedimento[];
}

function lerSalvas(): BaseSalva[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const dados = JSON.parse(raw);
    return Array.isArray(dados) ? (dados as BaseSalva[]) : [];
  } catch {
    return [];
  }
}

function gravarSalvas(bases: BaseSalva[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bases));
}

export function snapshotParaProcedimentos(snap: SnapshotCompetencia): Procedimento[] {
  return Object.values(snap.procedimentos).map((p) => ({
    codigo: p.codigo,
    nome: p.nome,
    descricao: "",
    valor: p.valor,
    cbosCompativeis: p.cbosCompativeis,
    cidsCompativeis: p.cidsCompativeis,
    idadeMinima: p.idadeMinima,
    idadeMaxima: p.idadeMaxima,
    sexo: p.sexo,
    subgrupo: subgrupoDoCodigo(p.codigo),
  }));
}

export function salvarCompetenciaUpload(competencia: string, snap: SnapshotCompetencia) {
  const bases = lerSalvas().filter((b) => b.competencia !== competencia);
  bases.push({
    competencia,
    arquivoNome: snap.arquivoNome,
    procedimentos: snapshotParaProcedimentos(snap),
  });
  gravarSalvas(bases);
}

export function removerCompetenciaUpload(competencia: string) {
  gravarSalvas(lerSalvas().filter((b) => b.competencia !== competencia));
}

function ordenarCompetencia(c: string): number {
  const [mes, ano] = c.split("/");
  return Number(ano) * 100 + Number(mes);
}

export function listarBasesCompetencia(): BaseCompetencia[] {
  const enviadas: BaseCompetencia[] = lerSalvas().map((b) => ({
    competencia: b.competencia,
    rotulo: `${b.competencia} — importada (${b.arquivoNome})`,
    origem: "upload" as const,
    observacao: `Base importada do arquivo ${b.arquivoNome}, armazenada apenas neste navegador.`,
    procedimentos: b.procedimentos,
  }));

  const derivada = baseDerivadaAnterior();
  const registro = new Map<string, BaseCompetencia>();
  if (derivada) registro.set(derivada.competencia, derivada);
  registro.set(baseAtual().competencia, baseAtual());
  // uploads têm prioridade sobre bases derivadas da mesma competência
  for (const b of enviadas) if (b.competencia !== atualizacaoInfo.competencia) registro.set(b.competencia, b);

  return Array.from(registro.values()).sort(
    (a, b) => ordenarCompetencia(b.competencia) - ordenarCompetencia(a.competencia),
  );
}

export const competenciaVigente = atualizacaoInfo.competencia;
