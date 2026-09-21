import { listarProcedimentos } from './src/data/sigtap';
import { compatibilidades } from './src/data/compatibilidade';

const chave = (codigo: string) => codigo.replace(/^0+/, "");
const cod10 = (codigo: string) => codigo.replace(/\D/g, "").padStart(10, "0");

const sigtap = listarProcedimentos();
const compKeys = Object.keys(compatibilidades);

console.log(`SIGTAP count: ${sigtap.length}`);
console.log(`Compat keys count: ${compKeys.length}`);

const missingKeys = compKeys.filter(k => !sigtap.find(p => chave(p.codigo) === chave(k)));
console.log(`Compat keys missing in SIGTAP: ${missingKeys.length}`);

const missingSigtap = sigtap.filter(p => !compKeys.map(chave).includes(chave(p.codigo)));
console.log(`SIGTAP procs missing in Compat keys (should be marked 'Sem compatibilidade'): ${missingSigtap.length}`);

// Check for specific codes
["0304020478", "0304020486"].forEach(target => {
    const c = target.replace(/^0+/, "");
    const inSigtap = sigtap.find(p => chave(p.codigo) === c);
    const inCompat = compKeys.some(k => chave(k) === c);
    console.log(`Code ${target}: inSigtap=${!!inSigtap}, inCompat=${inCompat}`);
    if (inSigtap) {
        console.log(`  SIGTAP subgrupo: ${inSigtap.subgrupo}`);
        console.log(`  Derived forma: ${cod10(inSigtap.codigo).slice(0, 6)}`);
    }
});

// Check for duplicates in sigtap
const sigtapCodes = sigtap.map(p => p.codigo);
const dups = sigtapCodes.filter((c, i) => sigtapCodes.indexOf(c) !== i);
if (dups.length > 0) console.log(`Duplicates in SIGTAP: ${dups}`);

// Check for duplicates in compat
const compChaves = compKeys.map(chave);
const compDups = compChaves.filter((c, i) => compChaves.indexOf(c) !== i);
if (compDups.length > 0) console.log(`Duplicate chaves in Compat: ${compDups}`);

