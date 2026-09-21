import { useNavigate } from "react-router-dom";
import { ArrowLeft, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MatrizCompatibilidade } from "@/components/MatrizCompatibilidade";

export default function Compatibilidade() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-medical">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-4 sm:px-6 sm:py-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 mb-3 h-8 px-2"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
          </Button>
          <h1 className="text-lg sm:text-2xl font-bold text-primary-foreground flex items-center gap-2">
            <Link2 className="w-6 h-6" /> Compatibilidade entre Procedimentos
          </h1>
          <p className="text-primary-foreground/80 text-xs sm:text-sm mt-1">
            Vínculos, concomitâncias e limites de quantidade entre procedimentos do subgrupo 0304
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1600px] px-3 py-5 sm:px-6 sm:py-6">
        <MatrizCompatibilidade />
      </main>
    </div>
  );
}
