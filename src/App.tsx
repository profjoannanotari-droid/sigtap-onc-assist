import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index.tsx";
import Admin from "./pages/Admin.tsx";
import NotFound from "./pages/NotFound.tsx";
import PesquisarCid from "./pages/PesquisarCid.tsx";
import Estadiamento from "./pages/Estadiamento.tsx";
import AuditoriaCompatibilidades from "./pages/AuditoriaCompatibilidades.tsx";
import Precisao from "./pages/Precisao.tsx";
import Esquemas from "./pages/Esquemas.tsx";
import AnaliseProcedimentos from "./pages/AnaliseProcedimentos.tsx";

import { AccessGate } from "@/components/AccessGate";
import { AdminGate } from "@/components/AdminGate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AccessGate>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/index" element={<Navigate to="/" replace />} />
              <Route path="/auth" element={<Navigate to="/" replace />} />
              <Route path="/expired" element={<Navigate to="/" replace />} />
              <Route path="/bloqueado" element={<Navigate to="/" replace />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/cid" element={<PesquisarCid />} />
              <Route path="/estadiamento" element={<Estadiamento />} />
              <Route path="/auditoria" element={<AuditoriaCompatibilidades />} />
              <Route path="/precisao" element={<Precisao />} />
              <Route path="/esquemas" element={<Esquemas />} />
              <Route path="/analise" element={<AnaliseProcedimentos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AccessGate>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
