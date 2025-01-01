import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, XCircle, Users, RefreshCw, IdCard, Plus, Trash2, CalendarCheck } from "lucide-react";
import { ASSINATURA, cpfValido, formatarCPF, normalizarCPF } from "@/lib/access";
import { toast } from "@/hooks/use-toast";

interface UserRow {
  user_id: string;
  email: string | null;
  display_name: string | null;
  cpf: string | null;
  created_at: string;
}

interface AuthorizedCpf {
  id: string;
  cpf: string;
  nome: string | null;
  paid_until: string;
  observacoes: string | null;
  created_at: string;
}

function proximoMes(): string {
  const d = new Date();
  d.setMonth(d.getMonth() + 1);
  return d.toISOString().slice(0, 10);
}

export default function Admin() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserRow[]>([]);
  const [cpfs, setCpfs] = useState<AuthorizedCpf[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  // Form de novo CPF
  const [novoCpf, setNovoCpf] = useState("");
  const [novoNome, setNovoNome] = useState("");
  const [novoPaidUntil, setNovoPaidUntil] = useState(proximoMes());
  const [novaObs, setNovaObs] = useState("");
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    checkAdmin();
  }, [user]);

  async function checkAdmin() {
    if (!user) {
      setIsAdmin(false);
      setLoading(false);
      return;
    }
    const { data } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .maybeSingle();
    setIsAdmin(!!data);
    if (data) {
      await Promise.all([fetchUsers(), fetchCpfs()]);
    }
    setLoading(false);
  }

  async function fetchUsers() {
    const { data: profiles } = await supabase
      .from("profiles")
      .select("user_id, email, display_name, cpf, created_at")
      .order("created_at", { ascending: false });
    if (profiles) setUsers(profiles as UserRow[]);
  }

  async function fetchCpfs() {
    const { data } = await supabase
      .from("authorized_cpfs")
      .select("*")
      .order("paid_until", { ascending: false });
    if (data) setCpfs(data as AuthorizedCpf[]);
  }

  async function adicionarCpf() {
    const limpo = normalizarCPF(novoCpf);
    if (!cpfValido(limpo)) {
      toast({ title: "CPF inválido", variant: "destructive" });
      return;
    }
    if (!novoPaidUntil) {
      toast({ title: "Informe a data de validade", variant: "destructive" });
      return;
    }
    setSalvando(true);
    const { error } = await supabase.from("authorized_cpfs").upsert(
      {
        cpf: limpo,
        nome: novoNome || null,
        paid_until: novoPaidUntil,
        observacoes: novaObs || null,
      },
      { onConflict: "cpf" }
    );
    setSalvando(false);
    if (error) {
      toast({ title: "Erro ao salvar", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "CPF liberado", description: `Acesso até ${new Date(novoPaidUntil).toLocaleDateString("pt-BR")}` });
    setNovoCpf("");
    setNovoNome("");
    setNovaObs("");
    setNovoPaidUntil(proximoMes());
    fetchCpfs();
  }

  async function renovarMes(id: string, atual: string) {
    const d = new Date(atual);
    const hoje = new Date();
    const base = d > hoje ? d : hoje;
    base.setMonth(base.getMonth() + 1);
    const nova = base.toISOString().slice(0, 10);
    const { error } = await supabase.from("authorized_cpfs").update({ paid_until: nova }).eq("id", id);
    if (error) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Renovado por +1 mês", description: `Nova validade: ${new Date(nova).toLocaleDateString("pt-BR")}` });
    fetchCpfs();
  }

  async function removerCpf(id: string) {
    if (!confirm("Remover este CPF? O acesso será revogado imediatamente.")) return;
    const { error } = await supabase.from("authorized_cpfs").delete().eq("id", id);
    if (error) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
      return;
    }
    fetchCpfs();
  }

  if (isAdmin === null || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Carregando...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <XCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h2 className="text-lg font-semibold mb-2">Acesso negado</h2>
            <p className="text-muted-foreground mb-4">Você não tem permissão de administrador.</p>
            <Button onClick={() => navigate("/")} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const hoje = new Date().toISOString().slice(0, 10);

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-medical">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary-foreground" />
              <h1 className="text-xl font-bold text-primary-foreground">Painel Admin</h1>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <Tabs defaultValue="cpfs">
          <TabsList>
            <TabsTrigger value="cpfs"><IdCard className="w-4 h-4 mr-1" /> CPFs autorizados</TabsTrigger>
            <TabsTrigger value="usuarios"><Users className="w-4 h-4 mr-1" /> Usuários</TabsTrigger>
          </TabsList>

          <TabsContent value="cpfs" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Plus className="w-5 h-5" /> Liberar novo CPF — {ASSINATURA.valorMensal}/{ASSINATURA.ciclo}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="space-y-1 lg:col-span-1">
                  <Label className="text-xs">CPF</Label>
                  <Input value={novoCpf} onChange={(e) => setNovoCpf(e.target.value)} placeholder="000.000.000-00" />
                </div>
                <div className="space-y-1 lg:col-span-1">
                  <Label className="text-xs">Nome</Label>
                  <Input value={novoNome} onChange={(e) => setNovoNome(e.target.value)} placeholder="Opcional" />
                </div>
                <div className="space-y-1 lg:col-span-1">
                  <Label className="text-xs">Válido até</Label>
                  <Input type="date" value={novoPaidUntil} onChange={(e) => setNovoPaidUntil(e.target.value)} />
                </div>
                <div className="space-y-1 lg:col-span-1">
                  <Label className="text-xs">Observação</Label>
                  <Input value={novaObs} onChange={(e) => setNovaObs(e.target.value)} placeholder="Ex: PIX 18/05" />
                </div>
                <div className="flex items-end">
                  <Button onClick={adicionarCpf} disabled={salvando} className="w-full">
                    {salvando ? "Salvando..." : "Liberar"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">CPFs liberados ({cpfs.length})</CardTitle>
                <Button variant="outline" size="sm" onClick={fetchCpfs}>
                  <RefreshCw className="w-4 h-4 mr-1" /> Atualizar
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>CPF</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Válido até</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Observação</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cpfs.map((c) => {
                        const ativo = c.paid_until >= hoje;
                        return (
                          <TableRow key={c.id}>
                            <TableCell className="font-mono">{formatarCPF(c.cpf)}</TableCell>
                            <TableCell>{c.nome || "-"}</TableCell>
                            <TableCell>{new Date(c.paid_until).toLocaleDateString("pt-BR")}</TableCell>
                            <TableCell>
                              {ativo ? (
                                <Badge className="bg-emerald-600">Ativo</Badge>
                              ) : (
                                <Badge variant="destructive">Vencido</Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-xs text-muted-foreground">{c.observacoes || "-"}</TableCell>
                            <TableCell className="text-right space-x-1 whitespace-nowrap">
                              <Button size="sm" variant="outline" onClick={() => renovarMes(c.id, c.paid_until)}>
                                <CalendarCheck className="w-4 h-4 mr-1" /> +1 mês
                              </Button>
                              <Button size="sm" variant="ghost" onClick={() => removerCpf(c.id)}>
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                      {cpfs.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center text-muted-foreground py-6">
                            Nenhum CPF liberado ainda.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usuarios" className="mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <Users className="w-5 h-5" /> Usuários cadastrados ({users.length})
                </CardTitle>
                <Button variant="outline" size="sm" onClick={fetchUsers}>
                  <RefreshCw className="w-4 h-4 mr-1" /> Atualizar
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>E-mail</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>CPF informado</TableHead>
                        <TableHead>Cadastro</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((u) => (
                        <TableRow key={u.user_id}>
                          <TableCell className="font-medium">{u.email}</TableCell>
                          <TableCell>{u.display_name || "-"}</TableCell>
                          <TableCell className="font-mono">{u.cpf ? formatarCPF(u.cpf) : "-"}</TableCell>
                          <TableCell>{new Date(u.created_at).toLocaleDateString("pt-BR")}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
