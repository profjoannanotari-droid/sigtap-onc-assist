import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Activity, Database, Shield, LogOut, Settings, BookOpen, ArrowLeft, Calculator, Grid3x3, ShieldCheck, Dna, Pill } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchForm } from "@/components/SearchForm";
import { ResultsTable } from "@/components/ResultsTable";
import { buscarProcedimentos, type Procedimento } from "@/data/sigtap";
import { atualizacaoInfo } from "@/data/atualizacao";

export default function Index() {
  const [resultados, setResultados] = useState<Procedimento[] | null>(null);
  const [searchInfo, setSearchInfo] = useState({ cid: "", cidDescricao: "", indicacao: "" });
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) {
          console.warn("Verificação de admin falhou (ignorando):", error.message);
          setIsAdmin(false);
          return;
        }
        setIsAdmin(!!data);
      });
  }, [user]);

  const handleSearch = useCallback((cid: string, cidDescricao: string, indicacao: string) => {
    const res = buscarProcedimentos(cid, indicacao);
    setResultados(res);
    setSearchInfo({ cid, cidDescricao, indicacao });
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-medical">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <h1 className="text-base sm:text-2xl font-bold text-primary-foreground leading-tight">
                  NotariSIGTAP-QT
                </h1>
                <p className="text-primary-foreground/80 text-xs sm:text-sm mt-0.5">
                  Apoio à Decisão Clínica em Oncologia
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/cid")}
              className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 h-8 px-2"
            >
              <BookOpen className="w-4 h-4 mr-1" />
              <span className="text-xs sm:text-sm">Pesquisar CID</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/estadiamento")}
              className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 h-8 px-2"
            >
              <Calculator className="w-4 h-4 mr-1" />
              <span className="text-xs sm:text-sm">Estadiamento</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/precisao")}
              className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 h-8 px-2"
            >
              <Dna className="w-4 h-4 mr-1" />
              <span className="text-xs sm:text-sm">Precisão</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/esquemas")}
              className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 h-8 px-2"
            >
              <Pill className="w-4 h-4 mr-1" />
              <span className="text-xs sm:text-sm">Esquemas</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/analise")}
              className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 h-8 px-2"
            >
              <Grid3x3 className="w-4 h-4 mr-1" />
              <span className="text-xs sm:text-sm">Análise</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/auditoria")}
              className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 h-8 px-2"
            >
              <ShieldCheck className="w-4 h-4 mr-1" />
              <span className="text-xs sm:text-sm">Auditoria</span>
            </Button>
            {isAdmin && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/admin")}
                className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 h-8 px-2"
              >
                <Settings className="w-4 h-4 mr-1" />
                <span className="text-xs sm:text-sm">Admin</span>
              </Button>
            )}
            {user && (
              <div className="ml-auto">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={signOut}
                  className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 h-8 px-2"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  <span className="text-xs sm:text-sm">Sair</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-3 flex items-center gap-6 text-sm text-muted-foreground overflow-x-auto">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Database className="w-4 h-4" />
            <span>
              Base SIGTAP <strong className="text-foreground">{atualizacaoInfo.mesNome}</strong> · competência{" "}
              {atualizacaoInfo.competencia} · atualizado em {atualizacaoInfo.dataAtualizacao}
            </span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Shield className="w-4 h-4" />
            <span>Subgrupo 0304 · {atualizacaoInfo.totalProcedimentos} procedimentos</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        {resultados === null ? (
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-card">
              <CardHeader className="pb-4 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-secondary flex items-center justify-center mb-2">
                  <Activity className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-lg">Consulta de Procedimentos</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Selecione o CID-10 e a indicação terapêutica para buscar os procedimentos do SIGTAP.
                </p>
              </CardHeader>
              <CardContent>
                <SearchForm onSearch={handleSearch} />
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setResultados(null)}
              className="h-9"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Nova consulta
            </Button>
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <ResultsTable
                  resultados={resultados}
                  cid={searchInfo.cid}
                  cidDescricao={searchInfo.cidDescricao}
                  indicacao={searchInfo.indicacao}
                />
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-8">
        <div className="container mx-auto px-4 py-4 text-center text-xs text-muted-foreground">
          NotariSIGTAP-QT • Base SIGTAP - Subgrupo 0304 • Dados ilustrativos para demonstração
        </div>
      </footer>
    </div>
  );
}
