import { useCallback, useEffect, useState } from "react";
import { AlertTriangle, CheckCircle2, Loader2, RefreshCw, CloudDownload } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { executarSincronizacao, ultimasSincronizacoes, type RegistroSincronizacao } from "@/lib/sincronizacaoSigtap";

const ETAPAS: Record<string, string> = {
  conexao: "Conexão com o DATASUS",
  listagem: "Leitura da pasta de publicação",
  arquivo: "Nome do arquivo mensal",
  download: "Download do pacote",
  descompactar: "Abertura do pacote",
  conteudo: "Arquivos dentro do pacote",
  layout: "Estrutura das colunas",
  validacao: "Conferência dos procedimentos",
  gravacao: "Gravação da base",
  inesperado: "Erro não previsto",
};

const data = (s: string) => new Date(s).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });

export function AlertaSincronizacao() {
  const [registros, setRegistros] = useState<RegistroSincronizacao[]>([]);
  const [rodando, setRodando] = useState(false);

  const carregar = useCallback(async () => setRegistros(await ultimasSincronizacoes(10)), []);
  useEffect(() => { carregar(); }, [carregar]);

  async function tentar() {
    setRodando(true);
    try {
      const r = await executarSincronizacao();
      toast({ title: r.status === "falha" ? "A busca falhou" : "Busca concluída", description: r.mensagem, variant: r.status === "falha" ? "destructive" : undefined });
      if (r.status === "sucesso") setTimeout(() => window.location.reload(), 1500);
    } catch (e) {
      toast({ title: "Não foi possível iniciar a busca", description: (e as Error).message, variant: "destructive" });
    } finally {
      setRodando(false);
      carregar();
    }
  }

  const ultima = registros.find((r) => r.status !== "executando");
  const ultimoSucesso = registros.find((r) => r.status === "sucesso" || r.status === "sem_novidade");
  const falhasSeguidas = (() => { let n = 0; for (const r of registros) { if (r.status === "falha") n++; else if (r.status !== "executando") break; } return n; })();

  const botao = (
    <Button size="sm" variant="outline" onClick={tentar} disabled={rodando} className="mt-3">
      {rodando ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <RefreshCw className="w-4 h-4 mr-1" />}
      Tentar agora
    </Button>
  );

  if (!ultima) {
    return (
      <Alert>
        <CloudDownload className="h-4 w-4" />
        <AlertTitle>Atualização automática da Tabela SIGTAP</AlertTitle>
        <AlertDescription>
          O sistema verifica o DATASUS todos os dias e importa sozinho a nova competência assim que ela é publicada. Nenhuma verificação registrada ainda.
          <div>{botao}</div>
        </AlertDescription>
      </Alert>
    );
  }

  if (ultima.status === "falha") {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Crítica: a atualização automática não conseguiu buscar a tabela do DATASUS</AlertTitle>
        <AlertDescription className="space-y-1 text-sm">
          <p><strong>Etapa:</strong> {ETAPAS[ultima.detalhes?.etapa ?? ""] ?? "—"} · <strong>Quando:</strong> {data(ultima.created_at)}{falhasSeguidas > 1 ? ` · ${falhasSeguidas} falhas seguidas` : ""}</p>
          <p><strong>O que aconteceu:</strong> {ultima.mensagem}</p>
          {ultima.detalhes?.ajuste && <p><strong>Ajuste necessário:</strong> {ultima.detalhes.ajuste}</p>}
          <p>
            A base em uso continua válida. {ultimoSucesso ? `Última busca bem-sucedida: ${data(ultimoSucesso.created_at)}.` : ""} Enquanto não for corrigido, a nova competência pode ser enviada manualmente pelo arquivo XLS no seletor de competência.
          </p>
          <div>{botao}</div>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert>
      <CheckCircle2 className="h-4 w-4 text-primary" />
      <AlertTitle>Atualização automática funcionando</AlertTitle>
      <AlertDescription className="text-sm">
        {ultima.mensagem} Última verificação: {data(ultima.created_at)}. O DATASUS é consultado todos os dias.
        <div>{botao}</div>
      </AlertDescription>
    </Alert>
  );
}
