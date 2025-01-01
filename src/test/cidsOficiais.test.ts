import { describe, it, expect } from "vitest";
import { cidsOnco } from "@/data/sigtap";
import { cidDescricoesOficiais } from "@/data/cidOficial";

describe("Validação de descrições oficiais CID-10", () => {
  it("não deve haver CIDs duplicados em cidsOnco", () => {
    const codigos = cidsOnco.map((c) => c.codigo);
    const dup = codigos.filter((c, i) => codigos.indexOf(c) !== i);
    expect(dup, `CIDs duplicados: ${dup.join(", ")}`).toEqual([]);
  });

  it("todo CID em cidsOnco deve ter mapeamento oficial", () => {
    const semMapa = cidsOnco
      .map((c) => c.codigo)
      .filter((cod) => !(cod in cidDescricoesOficiais));
    expect(
      semMapa,
      `CIDs sem descrição oficial mapeada: ${semMapa.join(", ")}`
    ).toEqual([]);
  });

  it("descrição de cada CID deve ser exatamente igual à oficial", () => {
    const divergentes = cidsOnco
      .filter((c) => cidDescricoesOficiais[c.codigo] !== undefined)
      .filter((c) => c.descricao !== cidDescricoesOficiais[c.codigo])
      .map((c) => ({
        codigo: c.codigo,
        atual: c.descricao,
        oficial: cidDescricoesOficiais[c.codigo],
      }));
    expect(
      divergentes,
      `CIDs com descrição divergente da oficial:\n${divergentes
        .map((d) => `  ${d.codigo}\n    atual:   "${d.atual}"\n    oficial: "${d.oficial}"`)
        .join("\n")}`
    ).toEqual([]);
  });

  it("exemplos canônicos do C50 devem bater exatamente", () => {
    const esperado: Record<string, string> = {
      "C50.0": "Mamilo e aréola",
      "C50.1": "Porção central da mama",
      "C50.6": "Porção axilar da mama",
      "C50.9": "Mama, não especificada",
    };
    for (const [cod, desc] of Object.entries(esperado)) {
      const item = cidsOnco.find((c) => c.codigo === cod);
      expect(item, `CID ${cod} ausente em cidsOnco`).toBeDefined();
      expect(item!.descricao).toBe(desc);
    }
  });
});
