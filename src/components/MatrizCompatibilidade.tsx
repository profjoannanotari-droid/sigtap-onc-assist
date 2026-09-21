// Verificação de compatibilidade entre procedimentos (SIGTAP 0304)
// Filtros por categoria de compatibilidade, forma de organização, sexo, idade,
// limite de quantidade e vigência. Exporta relatório em PDF.
import { useMemo, useState } from "react";
import { FileDown, Link2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { gerarRelatorioPDF } from "@/lib/pdfReport";
import { compatibilidades } from "@/data/compatibilidade";
import { listarProcedimentos, type Procedimento } from "@/data/sigtap";
import { nomesProcedimentoOficial } from "@/data/nomesProcedimentoOficial";
import { formasOrganizacao } from "@/data/formasOrganizacao";

const TODOS = "__todos__";

const chave = (codigo: string) => codigo.replace(/^0+/, "");

const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

// "19 Ano(s)" / "0 Mes(es)" / "6 Dia(s)" -> anos
function idadeEmAnos(txt?: string): number | undefined {
  if (!txt) return undefined;
  const m = txt.match(/([\d.,]+)\s*(\w+)/);
  if (!m) return undefined;
  const n = Number(m[1].replace(",", "."));
  if (Number.isNaN(n)) return undefined;
  const u = m[2].toLowerCase();
  if (u.startsWith("ano")) return n;
  if (u.startsWith("mes") || u.startsWith("mês")) return n / 12;
  if (u.startsWith("dia")) return n / 365;
  return n;
}

function rotuloCategoria(c: string): string {
  if (/Concomitantes/i.test(c)) return "Concomitantes (APACs diferentes)";
  if (/Secundário/i.test(c)) return "Principal x Secundário";
  if (/Incompat/i.test(c)) return "Incompatível";
  return c;
}

interface Par {
  principal: string;
  nomePrincipal: string;
  proc?: Procedimento;
  forma: string;
  secundario: string;
  nomeSecundario: string;
  categoria: string;
  quantidade: number;
  desde: string;
}

export function MatrizCompatibilidade() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState(TODOS);
  const [forma, setForma] = useState(TODOS);
  const [sexo, setSexo] = useState(TODOS);
  const [idade, setIdade] = useState("");
  const [limite, setLimite] = useState(TODOS);
  const [gerando, setGerando] = useState(false);

  const procs = useMemo(() => {
    const m = new Map<string, Procedimento>();
    for (const p of listarProcedimentos()) m.set(chave(p.codigo), p);
    return m;
  }, []);

  const pares = useMemo<Par[]>(() => {
    const out: Par[] = [];
    for (const [cod, lista] of Object.entries(compatibilidades)) {
      const p = procs.get(chave(cod));
      const nomePrincipal = p?.nome ?? nomesProcedimentoOficial[chave(cod)] ?? cod;
      const forma = cod.padStart(10, "0").slice(0, 6);
      for (const c of lista) {
        out.push({
          principal: cod,
          nomePrincipal,
          proc: p,
          forma,
          secundario: c.codigo,
          nomeSecundario:
            nomesProcedimentoOficial[chave(c.codigo)] ??
            procs.get(chave(c.codigo))?.nome ??
            c.nome,
          categoria: c.categoria,
          quantidade: c.quantidade,
          desde: c.desde,
        });
      }
    }
    return out.sort((a, b) => a.principal.localeCompare(b.principal));
  }, [procs]);

  const categorias = useMemo(
    () => Array.from(new Set(pares.map((p) => p.categoria))).sort(),
    [pares],
  );
  const formas = useMemo(
    () => Array.from(new Set(pares.map((p) => p.forma))).sort(),
    [pares],
  );
  const sexos = useMemo(
    () => Array.from(new Set(pares.map((p) => p.proc?.sexo).filter(Boolean) as string[])).sort(),
    [pares],
  );

  const idadeNum = idade.trim() === "" ? undefined : Number(idade);

  const filtrados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    return pares.filter((p) => {
      if (q) {
        const alvo = `${p.principal} ${p.nomePrincipal} ${p.secundario} ${p.nomeSecundario}`.toLowerCase();
        if (!alvo.includes(q)) return false;
      }
      if (categoria !== TODOS && p.categoria !== categoria) return false;
      if (forma !== TODOS && p.forma !== forma) return false;
      if (sexo !== TODOS && (p.proc?.sexo ?? "") !== sexo) return false;
      if (limite === "com" && !(p.quantidade > 0)) return false;
      if (limite === "sem" && p.quantidade > 0) return false;
      if (idadeNum !== undefined && !Number.isNaN(idadeNum)) {
        const min = idadeEmAnos(p.proc?.idadeMinima);
        const max = idadeEmAnos(p.proc?.idadeMaxima);
        if (min !== undefined && idadeNum < min) return false;
        if (max !== undefined && idadeNum > max) return false;
      }
      return true;
    });
  }, [pares, busca, categoria, forma, sexo, limite, idadeNum]);

  const principaisFiltrados = useMemo(
    () => new Set(filtrados.map((p) => p.principal)).size,
    [filtrados],
  );

  const nomeForma = (c: string) => formasOrganizacao.find((f) => f.codigo === c)?.nome ?? c;

  const limparFiltros = () => {
    setBusca("");
    setCategoria(TODOS);
    setForma(TODOS);
    setSexo(TODOS);
    setIdade("");
    setLimite(TODOS);
  };

  const exportarPDF = async () => {
    if (filtrados.length === 0) {
      toast({ title: "Nada a exportar", description: "Ajuste os filtros para obter resultados." });
      return;
    }
    setGerando(true);
    try {
      const badges = [
        `${filtrados.length} vínculos`,
        `${principaisFiltrados} procedimentos principais`,
      ];
      if (categoria !== TODOS) badges.push(rotuloCategoria(categoria));
      if (forma !== TODOS) badges.push(nomeForma(forma));
      if (sexo !== TODOS) badges.push(`Sexo: ${sexo}`);
      if (idadeNum !== undefined && !Number.isNaN(idadeNum)) badges.push(`Idade: ${idadeNum} ano(s)`);
      if (limite !== TODOS) badges.push(limite === "com" ? "Com limite de quantidade" : "Sem limite");

      await gerarRelatorioPDF({
        titulo: "Compatibilidade entre procedimentos — SIGTAP 0304",
        subtitulo:
          "Vínculos de compatibilidade, concomitância e limites de quantidade entre procedimentos oncológicos",
        badges,
        contextoIA: {
          tipo: "auditoria",
          resumoDados: `Relação de ${filtrados.length} vínculos de compatibilidade entre procedimentos do subgrupo 0304, envolvendo ${principaisFiltrados} procedimentos principais. Filtros aplicados: ${badges.join("; ")}.`,
          publicoAlvo: "Equipe de faturamento e auditoria oncológica",
        },
        secoes: [
          {
            tipo: "tabela",
            titulo: "Vínculos de compatibilidade",
            cabecalho: ["Principal", "Vinculado", "Tipo", "Qtd. máx.", "Vigente desde", "Idade / Sexo"],
            linhas: filtrados.map((p) => [
              `${p.principal}\n${p.nomePrincipal}`,
              `${p.secundario}\n${p.nomeSecundario}`,
              rotuloCategoria(p.categoria),
              p.quantidade > 0 ? String(p.quantidade) : "Sem limite",
              p.desde || "—",
              `${p.proc?.idadeMinima ?? "—"} a ${p.proc?.idadeMaxima ?? "—"} · ${p.proc?.sexo ?? "—"}`,
            ]),
          },
        ],
        nomeArquivo: "compatibilidade-procedimentos-sigtap",
      });
      toast({ title: "Relatório gerado", description: "O PDF foi baixado." });
    } catch {
      toast({ title: "Falha ao gerar o relatório", variant: "destructive" });
    } finally {
      setGerando(false);
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Link2 className="h-4 w-4 text-primary" />
            Verificação de compatibilidade entre procedimentos
          </CardTitle>
          <Button size="sm" onClick={exportarPDF} disabled={gerando}>
            <FileDown className="h-4 w-4 mr-1" />
            {gerando ? "Gerando..." : "Relatório PDF"}
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          {filtrados.length} vínculos · {principaisFiltrados} procedimentos principais
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="md:col-span-3">
            <Label className="text-xs">Buscar por código ou nome</Label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-8"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Ex.: narcose, 304010170, radioterapia"
              />
            </div>
          </div>

          <div>
            <Label className="text-xs">Tipo de compatibilidade</Label>
            <Select value={categoria} onValueChange={setCategoria}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value={TODOS}>Todos os tipos</SelectItem>
                {categorias.map((c) => (
                  <SelectItem key={c} value={c}>{rotuloCategoria(c)}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-xs">Forma de organização</Label>
            <Select value={forma} onValueChange={setForma}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value={TODOS}>Todas as formas</SelectItem>
                {formas.map((f) => (
                  <SelectItem key={f} value={f}>{f} — {nomeForma(f)}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-xs">Sexo</Label>
            <Select value={sexo} onValueChange={setSexo}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value={TODOS}>Todos</SelectItem>
                {sexos.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-xs">Idade do paciente (anos)</Label>
            <Input
              type="number"
              min={0}
              max={130}
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              placeholder="Ex.: 8"
            />
          </div>

          <div>
            <Label className="text-xs">Limite de quantidade</Label>
            <Select value={limite} onValueChange={setLimite}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value={TODOS}>Todos</SelectItem>
                <SelectItem value="com">Com limite definido</SelectItem>
                <SelectItem value="sem">Sem limite</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end">
            <Button variant="outline" size="sm" onClick={limparFiltros}>Limpar filtros</Button>
          </div>
        </div>

        <div className="overflow-x-auto max-h-[70vh] overflow-y-auto border rounded-md">
          <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
              <TableRow>
                <TableHead className="min-w-[240px]">Procedimento principal</TableHead>
                <TableHead className="min-w-[240px]">Procedimento vinculado</TableHead>
                <TableHead className="min-w-[180px]">Tipo</TableHead>
                <TableHead>Qtd. máx.</TableHead>
                <TableHead>Desde</TableHead>
                <TableHead className="min-w-[160px]">Idade / Sexo</TableHead>
                <TableHead>Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtrados.map((p, i) => (
                <TableRow key={`${p.principal}-${p.secundario}-${i}`}>
                  <TableCell className="align-top">
                    <div className="font-mono text-xs text-muted-foreground">{p.principal}</div>
                    <div className="text-sm">{p.nomePrincipal}</div>
                  </TableCell>
                  <TableCell className="align-top">
                    <div className="font-mono text-xs text-muted-foreground">{p.secundario}</div>
                    <div className="text-sm">{p.nomeSecundario}</div>
                  </TableCell>
                  <TableCell className="align-top">
                    <Badge variant={/Incompat/i.test(p.categoria) ? "destructive" : "secondary"}>
                      {rotuloCategoria(p.categoria)}
                    </Badge>
                  </TableCell>
                  <TableCell className="align-top text-sm">
                    {p.quantidade > 0 ? p.quantidade : "Sem limite"}
                  </TableCell>
                  <TableCell className="align-top text-sm">{p.desde || "—"}</TableCell>
                  <TableCell className="align-top text-sm">
                    {p.proc ? (
                      <>
                        {p.proc.idadeMinima ?? "—"} a {p.proc.idadeMaxima ?? "—"}
                        <div className="text-muted-foreground">{p.proc.sexo ?? "—"}</div>
                      </>
                    ) : (
                      "—"
                    )}
                  </TableCell>
                  <TableCell className="align-top text-sm whitespace-nowrap">
                    {p.proc ? brl(p.proc.valor) : "—"}
                  </TableCell>
                </TableRow>
              ))}
              {filtrados.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-sm text-muted-foreground py-8">
                    Nenhum vínculo encontrado com os filtros atuais.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
