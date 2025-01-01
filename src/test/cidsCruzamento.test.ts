import { describe, it, expect } from "vitest";
import { cidsOnco, buscarProcedimentos, indicacoesCompativeis } from "@/data/sigtap";

/**
 * Cruza automaticamente todos os CIDs de cidsOnco com os procedimentos
 * do subgrupo 0304 (Tratamento em Oncologia), garantindo que CIDs
 * oncológicos esperados (C00-C97) sempre retornem ao menos um
 * procedimento compatível.
 *
 * CIDs de comportamento incerto/benigno (D00-D89) são tratados como
 * "vínculo opcional": apenas reportados, sem falhar o teste, pois nem
 * todos têm procedimento dedicado no SIGTAP 0304.
 */

const isOncologicoEsperado = (codigo: string) => /^C\d{2}/.test(codigo);

describe("Cruzamento CIDs ↔ Procedimentos SIGTAP 0304", () => {
  it("não deve haver CID oncológico (C00-C97) sem procedimento compatível", () => {
    const orfaos = cidsOnco
      .filter((c) => isOncologicoEsperado(c.codigo))
      .filter((c) => buscarProcedimentos(c.codigo).length === 0)
      .map((c) => `${c.codigo} - ${c.descricao}`);

    expect(
      orfaos,
      `CIDs oncológicos sem nenhum procedimento compatível (${orfaos.length}):\n${orfaos
        .map((o) => `  - ${o}`)
        .join("\n")}`
    ).toEqual([]);
  });

  it("todo CID com vínculo deve listar pelo menos uma indicação terapêutica válida", () => {
    const indicacoesValidas = new Set([
      "030401", "030402", "030403", "030404", "030405",
      "030406", "030407", "030408", "030409", "030410",
    ]);
    const inconsistentes = cidsOnco
      .filter((c) => buscarProcedimentos(c.codigo).length > 0)
      .map((c) => ({ codigo: c.codigo, indicacoes: indicacoesCompativeis(c.codigo) }))
      .filter(
        ({ indicacoes }) =>
          indicacoes.length === 0 ||
          indicacoes.some((i) => !indicacoesValidas.has(i))
      );

    expect(
      inconsistentes,
      `CIDs com indicações ausentes ou fora do subgrupo 0304:\n${inconsistentes
        .map((i) => `  ${i.codigo} -> [${i.indicacoes.join(", ")}]`)
        .join("\n")}`
    ).toEqual([]);
  });

  it("buscarProcedimentos deve aceitar tanto formato C50.0 quanto C500", () => {
    const comPonto = buscarProcedimentos("C50.0");
    const semPonto = buscarProcedimentos("C500");
    expect(comPonto.length).toBeGreaterThan(0);
    expect(semPonto.length).toBe(comPonto.length);
  });

  it("relatório de cobertura: % de CIDs com vínculo (informativo)", () => {
    const total = cidsOnco.length;
    const comVinculo = cidsOnco.filter(
      (c) => buscarProcedimentos(c.codigo).length > 0
    ).length;
    const cobertura = (comVinculo / total) * 100;

    // Exige cobertura mínima de 90% do catálogo total
    expect(
      cobertura,
      `Cobertura insuficiente: ${comVinculo}/${total} (${cobertura.toFixed(1)}%)`
    ).toBeGreaterThanOrEqual(90);
  });
});
