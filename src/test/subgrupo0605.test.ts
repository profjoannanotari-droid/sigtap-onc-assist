import { describe, expect, it } from "vitest";
import { buscarPorCodigo, buscarProcedimentos, listarProcedimentos } from "@/data/sigtap";
import { getCompatibilidades } from "@/data/compatibilidade";

describe("Subgrupo 0605 — Assistência Farmacêutica em Oncologia", () => {
  it("contém os 11 medicamentos oficiais da competência 11/2026, todos com descrição", () => {
    const medicamentos = listarProcedimentos().filter((p) => p.subgrupo.startsWith("0605"));
    expect(medicamentos).toHaveLength(11);
    expect(medicamentos.every((p) => p.descricao.trim().length > 0)).toBe(true);
  });

  it("encontra Mesilato de Imatinibe 100 mg pelo código completo", () => {
    const procedimento = buscarPorCodigo("0605010030");
    expect(procedimento?.nome).toBe("MESILATO DE IMATINIBE 100 MG (POR COMPRIMIDO)");
    expect(procedimento?.valor).toBe(1.37);
    expect(procedimento?.cbosCompativeis).toContain("223405");
  });

  it("mantém os 30 vínculos oficiais entre procedimentos 0304 e medicamentos 0605", () => {
    const medicamentos = listarProcedimentos().filter((p) => p.subgrupo.startsWith("0605"));
    const total = medicamentos.reduce((soma, p) => soma + getCompatibilidades(p.codigo).length, 0);
    expect(total).toBe(30);
  });

  it("mostra a quantidade mensal e o procedimento principal no sentido inverso", () => {
    const vinculos = getCompatibilidades("0605010030");
    expect(vinculos).toHaveLength(4);
    const paliativo = vinculos.find((v) => v.codigo === "304020311");
    expect(paliativo?.quantidade).toBe(248);
    expect(paliativo?.categoria).toContain("Secundário) x APAC (Proc. Principal)");
    expect(paliativo?.nome).toBe("QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO");
  });

  it("inclui os medicamentos na pesquisa por CID-10", () => {
    const procedimentos = buscarProcedimentos("C50.0");
    expect(procedimentos.some((p) => p.codigo === "605010048")).toBe(true);
  });
});
