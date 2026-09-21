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
const SEM_COMPAT = "Sem compatibilidade";

const chave = (codigo: string) => codigo.replace(/^0+/, "");
const cod10 = (codigo: string) => codigo.replace(/\D/g, "").padStart(10, "0");

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

const identificadorVinculo = (codigo: string, categoria: string) =>
  `${chave(codigo)}|${categoria}`;

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
    const vinculosPorProcedimento = new Map<string, Set<string>>();

    for (const p of listarProcedimentos()) {
      vinculosPorProcedimento.set(chave(p.codigo), new Set());
    }

    for (const [cod, lista] of Object.entries(compatibilidades)) {
      const p = procs.get(chave(cod));
      const nomePrincipal = p?.nome ?? nomesProcedimentoOficial[chave(cod)] ?? cod;
      const forma = p?.subgrupo ?? cod10(cod).slice(0, 6);
      for (const c of lista) {
        const idDireto = identificadorVinculo(c.codigo, c.categoria);
        const diretosConhecidos = vinculosPorProcedimento.get(chave(cod));
        if (!diretosConhecidos?.has(idDireto)) {
          diretosConhecidos?.add(idDireto);
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

        // Alguns procedimentos aparecem somente como vinculados no arquivo oficial.
        // A relação inversa garante que cada procedimento tenha sua própria análise.
        const procVinculado = procs.get(chave(c.codigo));
        if (procVinculado) {
          const idInverso = identificadorVinculo(cod, c.categoria);
          const conhecidos = vinculosPorProcedimento.get(chave(c.codigo));
          if (conhecidos && !conhecidos.has(idInverso)) {
            conhecidos.add(idInverso);
            out.push({
              principal: procVinculado.codigo,
              nomePrincipal: procVinculado.nome,
              proc: procVinculado,
              forma: procVinculado.subgrupo ?? cod10(procVinculado.codigo).slice(0, 6),
              secundario: cod,
              nomeSecundario: nomePrincipal,
              categoria: c.categoria,
              quantidade: c.quantidade,
              desde: c.desde,
            });
          }
        }
      }
    }

    // Todo procedimento da base recebe ao menos uma linha na análise.
    for (const p of listarProcedimentos()) {
      if ((vinculosPorProcedimento.get(chave(p.codigo))?.size ?? 0) > 0) continue;
      out.push({
        principal: p.codigo,
        nomePrincipal: p.nome,
        proc: p,
        forma: cod10(p.codigo).slice(0, 6),
        secundario: "",
        nomeSecundario: SEM_COMPAT,
        categoria: SEM_COMPAT,
        quantidade: 0,
        desde: "",
      });
    }

    return out.sort((a, b) => cod10(a.principal).localeCompare(cod10(b.principal)));
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
    const qNumerico = q.replace(/[^\d]/g, "");
    const buscaCodigoCompleto = qNumerico.length >= 9;
    return pares.filter((p) => {
      if (q) {
        if (qNumerico.length >= 3 && /^\d+$/.test(q.replace(/[\s.-]/g, ""))) {
          if (buscaCodigoCompleto) {
            if (cod10(p.principal) !== cod10(qNumerico)) return false;
          } else {
          const sec = p.secundario ? `${cod10(p.secundario)} ${chave(p.secundario)}` : "";
          const alvoCod = `${cod10(p.principal)} ${chave(p.principal)} ${sec}`;
            if (!alvoCod.includes(qNumerico) && !alvoCod.includes(chave(qNumerico))) return false;
          }
        } else {
          const alvo = `${p.principal} ${p.nomePrincipal} ${p.secundario} ${p.nomeSecundario}`.toLowerCase();
          if (!alvo.includes(q)) return false;
        }
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

  // Análise procedimento a procedimento (base para o detalhamento do relatório)
  const porProcedimento = useMemo(() => {
    const mapa = new Map<
      string,
      {
        codigo: string;
        nome: string;
        forma: string;
        proc?: Procedimento;
        total: number;
        incompativeis: number;
        secundarios: number;
        concomitantes: number;
        comLimite: number;
        vinculos: Par[];
      }
    >();
    for (const p of filtrados) {
      const k = chave(p.principal);
      let it = mapa.get(k);
      if (!it) {
        it = {
          codigo: p.principal,
          nome: p.nomePrincipal,
          forma: p.forma,
          proc: p.proc,
          total: 0,
          incompativeis: 0,
          secundarios: 0,
          concomitantes: 0,
          comLimite: 0,
          vinculos: [],
        };
        mapa.set(k, it);
      }
      if (p.categoria === SEM_COMPAT) continue;
      it.total++;
      it.vinculos.push(p);
      if (/Incompat/i.test(p.categoria)) it.incompativeis++;
      if (/Secundário/i.test(p.categoria)) it.secundarios++;
      if (/Concomitantes/i.test(p.categoria)) it.concomitantes++;
      if (p.quantidade > 0) it.comLimite++;
    }
    return Array.from(mapa.values()).sort((a, b) => cod10(a.codigo).localeCompare(cod10(b.codigo)));
  }, [filtrados]);

  const semCompatibilidade = useMemo(
    () => porProcedimento.filter((p) => p.total === 0),
    [porProcedimento],
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
      const vinculos = filtrados.filter((p) => p.categoria !== SEM_COMPAT);
      const badges = [
        `${vinculos.length} vínculos`,
        `${principaisFiltrados} procedimentos analisados`,
        `${semCompatibilidade.length} sem compatibilidade`,
      ];
      if (categoria !== TODOS) badges.push(rotuloCategoria(categoria));
      if (forma !== TODOS) badges.push(nomeForma(forma));
      if (sexo !== TODOS) badges.push(`Sexo: ${sexo}`);
      if (idadeNum !== undefined && !Number.isNaN(idadeNum)) badges.push(`Idade: ${idadeNum} ano(s)`);
      if (limite !== TODOS) badges.push(limite === "com" ? "Com limite de quantidade" : "Sem limite");

      const qtdIncompativeis = vinculos.filter((p) => /Incompat/i.test(p.categoria)).length;
      const qtdSecundario = vinculos.filter((p) => /Secundário/i.test(p.categoria)).length;
      const qtdConcomitantes = vinculos.filter((p) => /Concomitantes/i.test(p.categoria)).length;
      const qtdCompativeis = vinculos.length - qtdIncompativeis;
      const procComLimite = vinculos.filter((p) => p.quantidade > 0).length;
      const comVinculo = porProcedimento.length - semCompatibilidade.length;


      await gerarRelatorioPDF({
        titulo: "Compatibilidade entre procedimentos — SIGTAP 0304",
        subtitulo:
          "Vínculos de compatibilidade, concomitância e limites de quantidade entre procedimentos oncológicos",
        badges,
        contextoIA: {
          tipo: "auditoria",
          resumoDados: `Análise minuciosa, procedimento a procedimento, de ${porProcedimento.length} procedimentos do subgrupo 0304: ${comVinculo} possuem vínculos de compatibilidade (${vinculos.length} vínculos no total) e ${semCompatibilidade.length} estão sem compatibilidade cadastrada. Filtros aplicados: ${badges.join("; ")}.`,
          publicoAlvo: "Equipe de faturamento e auditoria oncológica",
        },
        secoes: [
          {
            tipo: "kv",
            titulo: "Conclusão — resumo dos vínculos",
            itens: [
              { chave: "Procedimentos analisados", valor: String(porProcedimento.length) },
              { chave: "Procedimentos com compatibilidade", valor: String(comVinculo) },
              { chave: "Procedimentos sem compatibilidade", valor: String(semCompatibilidade.length) },
              { chave: "Total de vínculos analisados", valor: String(vinculos.length) },
              { chave: "Vínculos compatíveis", valor: String(qtdCompativeis) },
              { chave: "Vínculos excludentes (incompatíveis)", valor: String(qtdIncompativeis) },
              { chave: "Principal x Secundário", valor: String(qtdSecundario) },
              { chave: "Principal x Principal concomitantes (APACs diferentes)", valor: String(qtdConcomitantes) },
              { chave: "Vínculos com limite de quantidade", valor: String(procComLimite) },
            ],
          },
          {
            tipo: "paragrafo",
            texto:
              `Foram analisados ${porProcedimento.length} procedimentos${forma !== TODOS ? ` da forma de organização ${forma} — ${nomeForma(forma)}` : ""}. ` +
              `Destes, ${comVinculo} possuem ao menos um vínculo cadastrado e ${semCompatibilidade.length} estão sem compatibilidade. ` +
              `Do total de ${vinculos.length} vínculos listados, ${qtdCompativeis} são compatíveis e ${qtdIncompativeis} são excludentes (incompatíveis entre si). ` +
              `Entre os compatíveis, ${qtdSecundario} são do tipo Principal x Secundário e ${qtdConcomitantes} são Principal x Principal concomitantes (autorizáveis em APACs diferentes). ` +
              `${procComLimite} vínculos possuem limite de quantidade definido.`,
          },
          {
            tipo: "tabela",
            titulo: "Análise consolidada procedimento a procedimento",
            cabecalho: ["Procedimento / forma", "Procedimento vinculado", "Compatibilidade", "Regras", "Elegibilidade do procedimento"],
            larguras: [24, 24, 18, 12, 22],
            linhas: filtrados.map((p) => [
              `${cod10(p.principal)}\n${p.nomePrincipal}\n${p.forma} — ${nomeForma(p.forma)}`,
              p.secundario ? `${cod10(p.secundario)}\n${p.nomeSecundario}` : SEM_COMPAT,
              rotuloCategoria(p.categoria),
              p.categoria === SEM_COMPAT
                ? "—"
                : `Qtd. máx.: ${p.quantidade > 0 ? p.quantidade : "Sem limite"}\nDesde: ${p.desde || "—"}`,
              `Idade: ${p.proc?.idadeMinima ?? "—"} a ${p.proc?.idadeMaxima ?? "—"}\nSexo: ${p.proc?.sexo ?? "—"}\nCIDs: ${p.proc?.cidsCompativeis.join(", ") || "—"}`,
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
    <Card className="w-full min-w-0 overflow-hidden">
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
          {filtrados.filter((p) => p.categoria !== SEM_COMPAT).length} vínculos ·{" "}
          {porProcedimento.length} procedimentos analisados · {semCompatibilidade.length} sem compatibilidade
        </p>
      </CardHeader>
      <CardContent className="min-w-0 space-y-4 px-3 sm:px-6">
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

        <div className="w-full max-w-full overflow-auto max-h-[70vh] border rounded-md">
          <Table className="min-w-[1120px] table-fixed">
            <TableHeader className="sticky top-0 bg-background z-10">
              <TableRow>
                <TableHead className="w-[260px]">Procedimento / forma</TableHead>
                <TableHead className="w-[250px]">Procedimento vinculado</TableHead>
                <TableHead className="w-[170px]">Compatibilidade</TableHead>
                <TableHead className="w-[110px]">Regras</TableHead>
                <TableHead className="w-[250px]">Idade, sexo e CIDs</TableHead>
                <TableHead className="w-[100px]">Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtrados.map((p, i) => (
                <TableRow key={`${p.principal}-${p.secundario}-${i}`}>
                  <TableCell className="align-top whitespace-normal break-words">
                    <div className="font-mono text-xs text-muted-foreground">{cod10(p.principal)}</div>
                    <div className="text-sm">{p.nomePrincipal}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{p.forma} — {nomeForma(p.forma)}</div>
                  </TableCell>
                  <TableCell className="align-top whitespace-normal break-words">
                    {p.secundario ? (
                      <>
                        <div className="font-mono text-xs text-muted-foreground">{cod10(p.secundario)}</div>
                        <div className="text-sm">{p.nomeSecundario}</div>
                      </>
                    ) : (
                      <div className="text-sm text-muted-foreground">{SEM_COMPAT}</div>
                    )}
                  </TableCell>
                  <TableCell className="align-top whitespace-normal">
                    <Badge
                      variant={
                        p.categoria === SEM_COMPAT
                          ? "outline"
                          : /Incompat/i.test(p.categoria)
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {rotuloCategoria(p.categoria)}
                    </Badge>
                  </TableCell>
                  <TableCell className="align-top text-sm whitespace-normal">
                    {p.categoria === SEM_COMPAT ? "—" : <>{p.quantidade > 0 ? `Máx. ${p.quantidade}` : "Sem limite"}<div className="text-muted-foreground">{p.desde || "—"}</div></>}
                  </TableCell>
                  <TableCell className="align-top text-sm whitespace-normal break-words">
                    {p.proc ? (
                      <>
                        {p.proc.idadeMinima ?? "—"} a {p.proc.idadeMaxima ?? "—"}
                        <div className="text-muted-foreground">{p.proc.sexo ?? "—"}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{p.proc.cidsCompativeis.join(", ") || "Sem CID cadastrado"}</div>
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
                    <TableCell colSpan={6} className="text-center text-sm text-muted-foreground py-8">
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
