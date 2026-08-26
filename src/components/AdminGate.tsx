import { useState, type ReactNode, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SENHA_ADMIN = "Av999369062!";
const STORAGE_KEY = "notarisigtap_admin_ok";

export function AdminGate({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [liberado, setLiberado] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === "1"
  );
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);

  if (liberado) return <>{children}</>;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (senha === SENHA_ADMIN) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setLiberado(true);
    } else {
      setErro(true);
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-sm shadow-card">
        <CardHeader className="text-center pb-3">
          <div className="w-12 h-12 mx-auto rounded-full bg-secondary flex items-center justify-center mb-2">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-lg">Área restrita</CardTitle>
          <p className="text-sm text-muted-foreground">
            Esta seção é de acesso exclusivo do administrador.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor="senha-admin">Senha de administrador</Label>
              <Input
                id="senha-admin"
                type="password"
                value={senha}
                autoFocus
                onChange={(e) => {
                  setSenha(e.target.value);
                  setErro(false);
                }}
                placeholder="Digite a senha"
              />
              {erro && (
                <p className="text-xs text-destructive">Senha incorreta.</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar ao início
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
