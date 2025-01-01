import { useState, useRef, useEffect } from "react";
import { Search, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { indicacoes, filtrarCids, filtrarProcedimentos, buscarPorCodigo, indicacoesCompativeis, type CID, type Procedimento } from "@/data/sigtap";
import { ProcedimentoDetail } from "./ProcedimentoDetail";

interface SearchFormProps {
  onSearch: (cid: string, cidDescricao: string, indicacao: string) => void;
  loading?: boolean;
}

export function SearchForm({ onSearch, loading }: SearchFormProps) {
  const [cidInput, setCidInput] = useState("");
  const [cidSelecionado, setCidSelecionado] = useState<CID | null>(null);
  const [indicacao, setIndicacao] = useState("");
  const [sugestoes, setSugestoes] = useState<CID[]>([]);
  const [showSugestoes, setShowSugestoes] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const sugestoesRef = useRef<HTMLDivElement>(null);

  // Busca por código
  const [codigoInput, setCodigoInput] = useState("");
  const [procSugestoes, setProcSugestoes] = useState<Procedimento[]>([]);
  const [showProcSugestoes, setShowProcSugestoes] = useState(false);
  const [selectedProc, setSelectedProc] = useState<Procedimento | null>(null);
  const codigoRef = useRef<HTMLInputElement>(null);
  const procSugestoesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (sugestoesRef.current && !sugestoesRef.current.contains(e.target as Node) &&
          inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setShowSugestoes(false);
      }
      if (procSugestoesRef.current && !procSugestoesRef.current.contains(e.target as Node) &&
          codigoRef.current && !codigoRef.current.contains(e.target as Node)) {
        setShowProcSugestoes(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleCidChange(value: string) {
    setCidInput(value);
    setCidSelecionado(null);
    if (value.length >= 1) {
      setSugestoes(filtrarCids(value));
      setShowSugestoes(true);
    } else {
      setSugestoes([]);
      setShowSugestoes(false);
    }
  }

  function selecionarCid(cid: CID) {
    setCidSelecionado(cid);
    setCidInput(`${cid.codigo} - ${cid.descricao}`);
    setShowSugestoes(false);
    setIndicacao("");
  }

  const indicacoesFiltradas = cidSelecionado
    ? (() => {
        const compativeis = new Set(indicacoesCompativeis(cidSelecionado.codigo));
        return indicacoes.filter((i) => compativeis.has(i.codigo));
      })()
    : indicacoes;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (cidSelecionado) {
      onSearch(cidSelecionado.codigo, cidSelecionado.descricao, indicacao === "todas" ? "" : indicacao);
    }
  }

  function handleCodigoChange(value: string) {
    setCodigoInput(value);
    if (value.length >= 2) {
      setProcSugestoes(filtrarProcedimentos(value));
      setShowProcSugestoes(true);
    } else {
      setProcSugestoes([]);
      setShowProcSugestoes(false);
    }
  }

  function selecionarProcedimento(proc: Procedimento) {
    setShowProcSugestoes(false);
    setCodigoInput("");
    setSelectedProc(proc);
  }

  return (
    <>
      <Tabs defaultValue="cid" className="w-full">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="cid" className="flex-1 text-xs">
            <Search className="w-3.5 h-3.5 mr-1" /> Por CID-10
          </TabsTrigger>
          <TabsTrigger value="codigo" className="flex-1 text-xs">
            <Hash className="w-3.5 h-3.5 mr-1" /> Por Código
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cid">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2 relative">
              <label className="text-sm font-medium text-foreground">CID-10 do paciente</label>
              <Input
                ref={inputRef}
                placeholder="Digite o CID-10 (ex: C50, mama, pulmão...)"
                value={cidInput}
                onChange={(e) => handleCidChange(e.target.value)}
                onFocus={() => cidInput.length >= 1 && setShowSugestoes(true)}
                className="h-11"
              />
              {showSugestoes && sugestoes.length > 0 && (
                <div ref={sugestoesRef} className="absolute z-50 w-full mt-1 bg-card border border-border rounded-lg shadow-elevated max-h-60 overflow-auto">
                  {sugestoes.map((cid) => (
                    <button
                      key={cid.codigo}
                      type="button"
                      onClick={() => selecionarCid(cid)}
                      className="w-full px-4 py-3 text-left hover:bg-secondary transition-colors flex items-center gap-3 border-b border-border last:border-0"
                    >
                      <span className="font-mono text-sm font-semibold text-primary">{cid.codigo}</span>
                      <span className="text-sm text-foreground">{cid.descricao}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Indicação terapêutica</label>
              <Select value={indicacao} onValueChange={setIndicacao} disabled={!cidSelecionado}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder={cidSelecionado ? "Selecione a indicação..." : "Selecione um CID-10 primeiro"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas as indicações compatíveis</SelectItem>
                  {indicacoesFiltradas.map((ind) => (
                    <SelectItem key={ind.codigo} value={ind.codigo}>
                      <span className="font-mono text-xs text-muted-foreground mr-2">{ind.codigo}</span>
                      {ind.nome}
                    </SelectItem>
                  ))}
                  {cidSelecionado && indicacoesFiltradas.length === 0 && (
                    <div className="px-3 py-2 text-xs text-muted-foreground">Nenhuma indicação compatível</div>
                  )}
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={!cidSelecionado || loading}
              className="w-full h-12 text-base font-semibold gradient-medical border-0"
            >
              <Search className="w-5 h-5 mr-2" />
              Buscar procedimentos
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="codigo">
          <div className="space-y-2 relative">
            <label className="text-sm font-medium text-foreground">Código ou nome do procedimento</label>
            <Input
              ref={codigoRef}
              placeholder="Ex: 304010111 ou radioterapia..."
              value={codigoInput}
              onChange={(e) => handleCodigoChange(e.target.value)}
              onFocus={() => codigoInput.length >= 2 && setShowProcSugestoes(true)}
              className="h-11"
            />
            {showProcSugestoes && procSugestoes.length > 0 && (
              <div ref={procSugestoesRef} className="absolute z-50 w-full mt-1 bg-card border border-border rounded-lg shadow-elevated max-h-60 overflow-auto">
                {procSugestoes.map((proc) => (
                  <button
                    key={proc.codigo}
                    type="button"
                    onClick={() => selecionarProcedimento(proc)}
                    className="w-full px-4 py-3 text-left hover:bg-secondary transition-colors border-b border-border last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="font-mono text-xs shrink-0">{proc.codigo}</Badge>
                      <span className="text-sm text-foreground line-clamp-1">{proc.nome}</span>
                    </div>
                    <span className="text-xs text-muted-foreground mt-0.5 block">
                      R$ {proc.valor.toFixed(2)}
                    </span>
                  </button>
                ))}
              </div>
            )}
            {codigoInput.length >= 2 && procSugestoes.length === 0 && showProcSugestoes && (
              <div className="absolute z-50 w-full mt-1 bg-card border border-border rounded-lg shadow-elevated p-4 text-sm text-muted-foreground text-center">
                Nenhum procedimento encontrado
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <ProcedimentoDetail
        procedimento={selectedProc}
        open={!!selectedProc}
        onOpenChange={(open) => { if (!open) setSelectedProc(null); }}
      />
    </>
  );
}
