import { listarProcedimentos } from './src/data/sigtap';
import { compatibilidades } from './src/data/compatibilidade';

const chave = (codigo: string) => codigo.replace(/^0+/, "");

const sigtapProcs = listarProcedimentos();
const sigtapChaves = sigtapProcs.map(p => chave(p.codigo));
const uniqueSigtapChaves = new Set(sigtapChaves);

console.log(`Total SIGTAP procs: ${sigtapProcs.length}`);
console.log(`Unique SIGTAP chaves: ${uniqueSigtapChaves.size}`);

if (sigtapProcs.length !== uniqueSigtapChaves.size) {
    const counts: Record<string, number> = {};
    for (const c of sigtapChaves) {
        counts[c] = (counts[c] || 0) + 1;
    }
    const dups = Object.entries(counts).filter(([_, count]) => count > 1);
    console.log("Duplicates in SIGTAP (after chave):", dups);
}

const compKeys = Object.keys(compatibilidades);
const missingInSigtap = compKeys.filter(k => !uniqueSigtapChaves.has(chave(k)));
console.log(`Keys in compatibilidades missing in SIGTAP: ${missingInSigtap.length}`);
if (missingInSigtap.length > 0) {
    console.log("Missing keys:", missingInSigtap.slice(0, 10));
}

const targetCodes = ["0304020478", "304020478", "0304020486", "304020486"];
targetCodes.forEach(tc => {
    console.log(`Code ${tc}: in SIGTAP? ${sigtapChaves.includes(tc)} (chave: ${chave(tc)} in Set? ${uniqueSigtapChaves.has(chave(tc))})`);
});
