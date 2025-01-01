import { type ReactNode } from "react";

// Acesso liberado ao público (sem checagem de pagamento/CPF/login) por enquanto.
// Quando quiser reativar a cobrança, basta restaurar a verificação anterior.
export function AccessGate({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
