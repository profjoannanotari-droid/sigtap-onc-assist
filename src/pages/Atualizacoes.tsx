import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, RefreshCw, CheckCircle2, AlertTriangle, Clock, MinusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { executarSincronizacao, ultimasSincronizacoes, type RegistroSincronizacao } from "@/lib/sincronizacaoSigtap";
import { atualizacaoInfo } from "@/data/atualizacao";
import type { Procedimento } from "@/data/sigtap";

interface Base { competencia: string; arquivo: string; total_procedimentos: number; procedimentos: Procedimento[]; created_at: string }
interface Diff { competencia: string; anterior: string | null; data: string; arquivo: string; total: number; novos: string[]; alterados: string[]; excluidos: string[] }

const ordem = (c: string) => { const [m, a] = c.split("/"); return Number(a) * 100 + Number(m); };
const assinatura = (p: Procedimento) =>
  JSON.stringify([p.nome, p.valor, [...(p.cidsCompativeis ?? [])].sort(), [...(p.cbosCompativeis ?? [])].sort(), p.idadeMinima ?? null, p.idadeMaxima ?? null, p.sexo ?? null]);
const fmt = (d: string) => new Date(d).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });

const statusInfo: Record<RegistroSincronizacao["status"], { rotulo: string; icone: typeof CheckCircle2; variante: "default" | "secondary" | "destructive" | "outline" }> = {
  sucesso: { rotulo: "Nova competência", icone: CheckCircle2, variante: "default" },
  sem_novidade: { rotulo: "Sem novidade", icone: MinusCircle, variante: "secondary" },
  falha: { rotulo: "Falha", icone: AlertTriangle, variante: "destructive" },
  executando: { rotulo: "Em andamento", icone: Clock, variante: "outline" },
};

export default function Atualizacoes() {
  const navigate = useNavigate();
  const [registros, setRegistros] = useState<RegistroSincronizacao[]>([]);
  const [bases, setBases] = useState<Base[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [executando, setExecutando] = useState(false);

  const carregar = async () => {
    setCarregando(true);
    const [regs, { data }] = await Promise.all([
      ultimasSincronizacoes(60),
      supabase.from("sigtap_bases" as never).select("*").order("created_at", { ascending: true }),
    ]);
    setRegistros(regs);
    setBases(((data ?? []) as unknown as Base[]).sort((a, b) => ordem(a.competencia) - ordem(b.competencia)));
    setCarregando(false);
  };
  useEffect(() => { carregar(); }, []);

  const diffs = useMemo<Diff[]>(() => bases.map((b, i) => {
    const ant = bases[i - 1];
    const antMap = new Map((ant?.procedimentos ?? []).map((p) => [p.codigo, assinatura(p)]));
    const novoMap = new Map(b.procedimentos.map((p) => [p.codigo, assinatura(p)]));
    const novos: string[] = [], alterados: string[] = [], excluidos: string[] = [];
    if (ant) {
      novoMap.forEach((s, c) => { if (!antMap.has(c)) novos.push(c); else if (antMap.get(c) !== s) alterados.push(c); });
      antMap.forEach((_, c) => { if (!novoMap.has(c)) excluidos.push(c); });
    }
    return { competencia: b.competencia, anterior: ant?.competencia ?? null, data: b.created_at, arquivo: b.arquivo, total: b.total_procedimentos, novos, alterados, excluidos };
  }).reverse(), [bases]);

  const ultima = registros[0];
  const ultimoSucesso = registros.find((r) => r.status === "sucesso" || r.status === "sem_novidade");
  const falhasSeguidas = (() => { let n = 0; for (const r of registros) { if (r.status === "falha") n++; else if (r.status !== "executando") break; } return n; })();

  const tentar = async () => {
    setExecutando(true);
    try {
      const r = await executarSincronizacao();
      toast({ title: statusInfo[r.status]?.rotulo ?? "Concluído", description: r.mensagem, variant: r.status === "falha" ? "destructive" : "default" });
    } catch {
      toast({ title: "Não foi possível iniciar a busca", variant: "destructive" });
    }
    setExecutando(false);
    carregar();
  };

  const StatusBadge = ({ s }: { s: RegistroSincronizacao["status"] }) => {
    const i = statusInfo[s] ?? statusInfo.executando; const I = i.icone;
    return <Badge variant={i.variante} className="gap-1"><I className="w-3 h-3" />{i.rotulo}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="text-primary-foreground hover:bg-primary-foreground/10">
            <ArrowLeft className="w-4 h-4 mr-1" />Voltar
          </Button>
          <h1 className="text-lg sm:text-xl font-semibold">Atualizações da SIGTAP</h1>
          <Button size="sm" variant="secondary" className="ml-auto" onClick={tentar} disabled={executando}>
            <RefreshCw className={`w-4 h-4 mr-1 ${executando ? "animate-spin" : ""}`} />{executando ? "Buscando…" : "Buscar agora"}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Status da última busca</CardTitle></CardHeader>
            <CardContent className="space-y-1">{ultima ? <><StatusBadge s={ultima.status} /><p className="text-xs text-muted-foreground">{fmt(ultima.created_at)}</p></> : <p className="text-sm">Nenhuma busca registrada</p>}</CardContent></Card>
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Competência em uso</CardTitle></CardHeader>
            <CardContent><p className="text-2xl font-bold">{atualizacaoInfo.competencia}</p><p className="text-xs text-muted-foreground">{atualizacaoInfo.totalProcedimentos} procedimentos</p></CardContent></Card>
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Última busca bem-sucedida</CardTitle></CardHeader>
            <CardContent><p className="text-base font-semibold">{ultimoSucesso ? fmt(ultimoSucesso.created_at) : "—"}</p><p className="text-xs text-muted-foreground">{ultimoSucesso?.competencia ?? ""}</p></CardContent></Card>
          <Card className={falhasSeguidas ? "border-destructive" : ""}><CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Falhas seguidas</CardTitle></CardHeader>
            <CardContent><p className={`text-2xl font-bold ${falhasSeguidas ? "text-destructive" : ""}`}>{falhasSeguidas}</p><p className="text-xs text-muted-foreground">Busca automática diária às 7h</p></CardContent></Card>
        </div>

        {ultima?.status === "falha" && (
          <Card className="border-destructive bg-destructive/5"><CardContent className="pt-4 text-sm space-y-1">
            <p className="font-semibold text-destructive">{ultima.mensagem}</p>
            {ultima.detalhes?.etapa && <p><strong>Etapa:</strong> {ultima.detalhes.etapa}</p>}
            {ultima.detalhes?.ajuste && <p><strong>Ajuste necessário:</strong> {ultima.detalhes.ajuste}</p>}
          </CardContent></Card>
        )}

        <Card>
          <CardHeader><CardTitle className="text-base">Mudanças por competência baixada</CardTitle></CardHeader>
          <CardContent>
            {carregando ? <p className="text-sm text-muted-foreground">Carregando…</p> : diffs.length === 0 ? (
              <p className="text-sm text-muted-foreground">Nenhuma competência foi baixada automaticamente ainda. Quando a primeira chegar, as linhas novas, alteradas e excluídas aparecem aqui.</p>
            ) : (
              <Table>
                <TableHeader><TableRow>
                  <TableHead>Competência</TableHead><TableHead>Comparada com</TableHead><TableHead>Baixada em</TableHead><TableHead className="text-right">Total</TableHead>
                  <TableHead className="text-right">Novas</TableHead><TableHead className="text-right">Alteradas</TableHead><TableHead className="text-right">Excluídas</TableHead>
                </TableRow></TableHeader>
                <TableBody>{diffs.map((d) => (
                  <TableRow key={d.competencia}>
                    <TableCell className="font-semibold">{d.competencia}</TableCell>
                    <TableCell>{d.anterior ?? <span className="text-muted-foreground">primeira baixada</span>}</TableCell>
                    <TableCell>{fmt(d.data)}</TableCell>
                    <TableCell className="text-right">{d.total}</TableCell>
                    <TableCell className="text-right" title={d.novos.join(", ")}>{d.anterior ? d.novos.length : "—"}</TableCell>
                    <TableCell className="text-right" title={d.alterados.join(", ")}>{d.anterior ? d.alterados.length : "—"}</TableCell>
                    <TableCell className="text-right" title={d.excluidos.join(", ")}>{d.anterior ? d.excluidos.length : "—"}</TableCell>
                  </TableRow>
                ))}</TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Histórico de buscas</CardTitle></CardHeader>
          <CardContent>
            {registros.length === 0 ? <p className="text-sm text-muted-foreground">{carregando ? "Carregando…" : "Nenhuma busca registrada."}</p> : (
              <Table>
                <TableHeader><TableRow><TableHead>Data</TableHead><TableHead>Status</TableHead><TableHead>Competência</TableHead><TableHead>Mensagem</TableHead></TableRow></TableHeader>
                <TableBody>{registros.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="whitespace-nowrap">{fmt(r.created_at)}</TableCell>
                    <TableCell><StatusBadge s={r.status} /></TableCell>
                    <TableCell>{r.competencia ?? "—"}</TableCell>
                    <TableCell className="text-sm">{r.mensagem}{r.detalhes?.ajuste && <span className="block text-xs text-muted-foreground">Ajuste: {r.detalhes.ajuste}</span>}</TableCell>
                  </TableRow>
                ))}</TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
