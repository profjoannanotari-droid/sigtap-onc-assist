import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, MessageCircle, LogIn, LogOut, Copy, CheckCircle2, Clock, IdCard } from "lucide-react";
import { ASSINATURA, ACCESS_CONTACT, cpfValido, formatarCPF, normalizarCPF } from "@/lib/access";
import { lovable } from "@/integrations/lovable/index";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export default function Bloqueado() {
  const { user, signOut } = useAuth();
  const [cpfSalvo, setCpfSalvo] = useState<string | null>(null);
  const [cpfInput, setCpfInput] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [verificando, setVerificando] = useState(false);
  const [copiado, setCopiado] = useState(false);

  // Carrega CPF já cadastrado no perfil
  useEffect(() => {
    if (!user) return;
    supabase
      .from("profiles")
      .select("cpf")
      .eq("user_id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data?.cpf) setCpfSalvo(data.cpf);
      });
  }, [user]);

  async function handleGoogleLogin() {
    await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
  }

  async function salvarCpf() {
    const limpo = normalizarCPF(cpfInput);
    if (!cpfValido(limpo)) {
      toast({ title: "CPF inválido", description: "Confira os 11 dígitos do CPF.", variant: "destructive" });
      return;
    }
    if (!user) return;
    setCarregando(true);
    const { error } = await supabase.from("profiles").update({ cpf: limpo }).eq("user_id", user.id);
    setCarregando(false);
    if (error) {
      toast({
        title: "Não foi possível salvar o CPF",
        description: error.message.includes("duplicate") ? "Este CPF já está vinculado a outra conta." : error.message,
        variant: "destructive",
      });
      return;
    }
    setCpfSalvo(limpo);
    toast({ title: "CPF cadastrado", description: "Após a confirmação do pagamento, seu acesso será liberado." });
  }

  async function verificarLiberacao() {
    if (!user) return;
    setVerificando(true);
    const { data } = await supabase.rpc("user_has_paid_access", { _user_id: user.id });
    setVerificando(false);
    if (data) {
      window.location.href = "/";
    } else {
      toast({
        title: "Pagamento ainda não confirmado",
        description: "Aguarde a confirmação manual ou envie o comprovante pelo WhatsApp.",
      });
    }
  }

  async function copiarPix() {
    await navigator.clipboard.writeText(ASSINATURA.pixChave);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-elevated">
        <CardHeader className="text-center pb-4">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <Lock className="w-7 h-7 text-primary" />
          </div>
          <CardTitle className="text-xl">Assine para liberar o acesso</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Ferramenta profissional de apoio à decisão clínica em oncologia, com base SIGTAP atualizada mensalmente.
          </p>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* VALOR EM DESTAQUE */}
          <div className="rounded-xl gradient-medical text-primary-foreground p-5 text-center shadow-lg">
            <p className="text-xs uppercase tracking-wider opacity-90">Assinatura mensal</p>
            <p className="text-4xl font-bold mt-1">{ASSINATURA.valorMensal}</p>
            <p className="text-xs opacity-90 mt-1">/ {ASSINATURA.ciclo} · renovação manual via PIX</p>
            <p className="text-[11px] opacity-80 mt-2">
              Inclui manutenção mensal da base SIGTAP, atualizações automáticas e suporte.
            </p>
          </div>

          {/* PIX */}
          <div className="rounded-lg border border-border bg-card p-4 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Pague via PIX</p>
                <p className="text-sm text-foreground">{ASSINATURA.pixTitular}</p>
                <p className="text-[11px] text-muted-foreground">Tipo: {ASSINATURA.pixTipo}</p>
              </div>
              <Button onClick={copiarPix} size="sm" variant="outline">
                {copiado ? <CheckCircle2 className="w-4 h-4 mr-1 text-emerald-600" /> : <Copy className="w-4 h-4 mr-1" />}
                {copiado ? "Copiado" : "Copiar chave"}
              </Button>
            </div>
            <div className="font-mono text-base text-center bg-secondary/60 rounded py-2 break-all select-all">
              {ASSINATURA.pixChave}
            </div>
            <p className="text-[11px] text-muted-foreground text-center">
              Após pagar, envie o comprovante pelo WhatsApp informando seu <strong>CPF</strong>. A liberação é feita em até algumas horas.
            </p>
          </div>

          {/* CPF / login */}
          {user ? (
            cpfSalvo ? (
              <div className="rounded-lg border border-amber-500/40 bg-amber-50 dark:bg-amber-950/20 p-4 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
                  <Clock className="w-4 h-4" />
                  <p className="text-sm font-medium">Aguardando confirmação do pagamento</p>
                </div>
                <p className="text-xs text-amber-900/80 dark:text-amber-100/80">
                  CPF cadastrado: <strong className="font-mono">{formatarCPF(cpfSalvo)}</strong>
                </p>
                <p className="text-xs text-amber-900/80 dark:text-amber-100/80">
                  Conta: <strong>{user.email}</strong>
                </p>
                <Button onClick={verificarLiberacao} size="sm" className="w-full mt-1" disabled={verificando}>
                  {verificando ? "Verificando..." : "Já paguei — verificar acesso"}
                </Button>
              </div>
            ) : (
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <IdCard className="w-4 h-4 text-primary" />
                  <p className="text-sm font-medium text-foreground">Cadastre seu CPF</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  É por ele que a liberação será feita após a confirmação do pagamento. Ele fica vinculado à sua conta <strong>{user.email}</strong>.
                </p>
                <div className="space-y-2">
                  <Label htmlFor="cpf-input" className="text-xs">CPF</Label>
                  <Input
                    id="cpf-input"
                    inputMode="numeric"
                    placeholder="000.000.000-00"
                    value={cpfInput}
                    onChange={(e) => setCpfInput(e.target.value)}
                    maxLength={14}
                  />
                </div>
                <Button onClick={salvarCpf} className="w-full" disabled={carregando}>
                  {carregando ? "Salvando..." : "Salvar CPF e aguardar liberação"}
                </Button>
              </div>
            )
          ) : (
            <Button onClick={handleGoogleLogin} className="w-full">
              <LogIn className="w-4 h-4 mr-2" /> Entrar com Google para cadastrar CPF
            </Button>
          )}

          {/* Contato */}
          <div className="space-y-2">
            <a
              href={ACCESS_CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">WhatsApp — envie o comprovante aqui</p>
                <p className="text-sm font-medium text-foreground truncate">{ACCESS_CONTACT.whatsapp}</p>
              </div>
            </a>
            <a
              href={`mailto:${ACCESS_CONTACT.email}?subject=Assinatura do sistema de oncologia`}
              className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">E-mail</p>
                <p className="text-sm font-medium text-foreground truncate">{ACCESS_CONTACT.email}</p>
              </div>
            </a>
          </div>

          {user && (
            <Button onClick={signOut} variant="ghost" size="sm" className="w-full">
              <LogOut className="w-4 h-4 mr-2" /> Sair desta conta
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
