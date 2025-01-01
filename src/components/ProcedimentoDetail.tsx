import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { type Procedimento, cbosNomes, indicacoes, cidsOnco } from "@/data/sigtap";
import { getCompatibilidades, type Compatibilidade } from "@/data/compatibilidade";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText, DollarSign, Users, Stethoscope, ClipboardList, Link2, ShieldCheck, ShieldX, ShieldAlert, Layers, ArrowLeft, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { extrairLimitesCobranca } from "@/lib/limitesCobranca";
import { EsquemasTerapeuticos } from "@/components/EsquemasTerapeuticos";

interface ProcedimentoDetailProps {
  procedimento: Procedimento | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const categoriaIcons: Record<string, { icon: typeof ShieldCheck; color: string; label: string }> = {
  'APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel': {
    icon: ShieldCheck, color: 'text-green-600', label: 'Compatível (Principal × Secundário)'
  },
  'APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente': {
    icon: Layers, color: 'text-blue-600', label: 'Concomitante (APACs diferentes)'
  },
  'APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente': {
    icon: ShieldX, color: 'text-destructive', label: 'Excludente'
  },
  'AIH (Proc. Principal) x AIH (Proc. Especial) - Compativel': {
    icon: ShieldAlert, color: 'text-amber-600', label: 'AIH Compatível (Principal × Especial)'
  },
  'APAC (Proc. Secundário) x APAC (Proc. Principal) - Compativel': {
    icon: ShieldCheck, color: 'text-green-600', label: 'Compatível (Secundário × Principal)'
  },
};

export function ProcedimentoDetail({ procedimento, open, onOpenChange }: ProcedimentoDetailProps) {
  // Não retornar null aqui — quebra o portal do Radix em re-renders e causa
  // "removeChild" no React. Deixamos o Dialog controlar a montagem via `open`.
  if (!procedimento) {
    return <Dialog open={false} onOpenChange={onOpenChange} />;
  }

  const indicacaoNome = indicacoes.find(i => procedimento.subgrupo.startsWith(i.codigo))?.nome || procedimento.subgrupo;
  const compatibilidades = getCompatibilidades(procedimento.codigo);
  const limitesCobranca = extrairLimitesCobranca(procedimento.descricao || "");

  // Group by category
  const porCategoria = compatibilidades.reduce<Record<string, Compatibilidade[]>>((acc, c) => {
    if (!acc[c.categoria]) acc[c.categoria] = [];
    acc[c.categoria].push(c);
    return acc;
  }, {});

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-hidden">
        <DialogHeader className="flex flex-row items-center gap-2 pr-8">
          <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} className="shrink-0 h-8 w-8">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <DialogTitle className="flex items-center gap-2 text-sm sm:text-base min-w-0">
            <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
            <span className="truncate">Detalhes do Procedimento</span>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] w-full pr-2 sm:pr-4">
          <div className="space-y-5 min-w-0 max-w-full">
            {/* Código e Nome */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="font-mono text-xs">
                  {procedimento.codigo}
                </Badge>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight break-anywhere">
                {procedimento.nome}
              </h3>
            </div>

            <Separator />

            {/* Descrição */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ClipboardList className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">Descrição</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap break-anywhere">
                {procedimento.descricao || "Descrição não disponível."}
              </p>
            </div>

            <Separator />

            {/* Valor e Subgrupo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">Valor</span>
                </div>
                <p className="text-2xl font-bold text-primary">
                  R$ {procedimento.valor.toFixed(2)}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Stethoscope className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">Indicação Terapêutica</span>
                </div>
                <p className="text-sm text-muted-foreground">{indicacaoNome}</p>
                <p className="text-xs text-muted-foreground/70 font-mono mt-1">Subgrupo: {procedimento.subgrupo}</p>
              </div>
            </div>

            {(procedimento.idadeMinima || procedimento.idadeMaxima || procedimento.sexo) && (
              <>
                <Separator />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Idade mínima</span>
                    <p className="text-sm text-foreground mt-1">{procedimento.idadeMinima || "—"}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Idade máxima</span>
                    <p className="text-sm text-foreground mt-1">{procedimento.idadeMaxima || "—"}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Sexo</span>
                    <p className="text-sm text-foreground mt-1">{procedimento.sexo || "—"}</p>
                  </div>
                </div>
              </>
            )}

            <Separator />

            {/* Compatibilidade */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Link2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  Compatibilidade ({compatibilidades.length} procedimento{compatibilidades.length !== 1 ? 's' : ''})
                </span>
              </div>
              {compatibilidades.length === 0 ? (
                <p className="text-sm text-muted-foreground italic">
                  Nenhuma compatibilidade registrada para este procedimento.
                </p>
              ) : (
                <Accordion type="multiple" className="w-full">
                  {Object.entries(porCategoria).map(([categoria, items]) => {
                    const catInfo = categoriaIcons[categoria] || { icon: ShieldCheck, color: 'text-muted-foreground', label: categoria };
                    const CatIcon = catInfo.icon;
                    return (
                      <AccordionItem key={categoria} value={categoria}>
                        <AccordionTrigger className="text-sm hover:no-underline py-3">
                          <div className="flex items-center gap-2">
                            <CatIcon className={`w-4 h-4 ${catInfo.color}`} />
                            <span>{catInfo.label}</span>
                            <Badge variant="secondary" className="text-xs ml-1">{items.length}</Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {items.map((comp, idx) => (
                              <div key={idx} className="p-3 rounded-lg bg-secondary/40 border border-border/50">
                                <div className="flex items-start gap-2 min-w-0">
                                  <Badge variant="outline" className="font-mono text-xs shrink-0 mt-0.5">
                                    {comp.codigo}
                                  </Badge>
                                  <span className="text-sm text-foreground leading-tight break-anywhere min-w-0">{comp.nome}</span>
                                </div>
                                <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                                  {comp.quantidade > 0 && (
                                    <span>Qtd máxima: <strong className="text-foreground">{comp.quantidade}</strong></span>
                                  )}
                                  {comp.desde && (
                                    <span>Desde: <strong className="text-foreground">{comp.desde}</strong></span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              )}
            </div>

            <Separator />

            {/* CBOs */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  CBOs Compatíveis ({procedimento.cbosCompativeis.length})
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {procedimento.cbosCompativeis.map((cbo) => (
                  <Badge key={cbo} variant="secondary" className="text-xs whitespace-normal text-left break-anywhere">
                    {cbo} - {cbosNomes[cbo] || cbo}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            {/* CIDs */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  CIDs Compatíveis ({procedimento.cidsCompativeis.length})
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto">
                {procedimento.cidsCompativeis.map((cid) => {
                  const cidInfo = cidsOnco.find(c => c.codigo.replace(/\./g, "") === cid.replace(/\./g, ""));
                  return (
                    <Badge key={cid} variant="outline" className="text-xs whitespace-normal text-left break-anywhere">
                      {cid}{cidInfo ? ` - ${cidInfo.descricao}` : ""}
                    </Badge>
                  );
                })}
              </div>
            </div>

            <Separator />

            {/* Esquemas terapêuticos sugeridos por IA (PCDT/Guidelines) */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Stethoscope className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  Esquemas terapêuticos possíveis
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Geração baseada em PCDT (MS/Conitec) e guidelines (NCCN/ESMO/ASCO), ancorada na descrição oficial do procedimento.
              </p>
              <EsquemasTerapeuticos procedimento={procedimento} />
            </div>

            {/* Alerta de tempo/quantidade máximos de cobrança (final) */}
            {limitesCobranca.length > 0 && (() => {
              const temTempo = limitesCobranca.some(l => l.tipo === "tempo");
              const temQtd = limitesCobranca.some(l => l.tipo === "quantidade");
              const titulo = temTempo && temQtd
                ? "Atenção: limites de tempo e de quantidade para cobrança"
                : temTempo
                  ? "Atenção: limite de tempo para cobrança"
                  : "Atenção: limite de quantidade para cobrança";
              return (
                <>
                  <Separator />
                  <Alert className="border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <AlertTitle className="text-amber-800 dark:text-amber-300 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {titulo}
                    </AlertTitle>
                    <AlertDescription className="text-amber-900/90 dark:text-amber-200/90 mt-2 space-y-2">
                      {limitesCobranca.map((l, i) => (
                        <div key={i} className="text-xs sm:text-sm">
                          <Badge variant="outline" className="mr-2 border-amber-600/50 text-amber-800 dark:text-amber-300">
                            {l.tipo === "tempo" ? "⏱" : "#"} {l.quantidade} {l.unidade}
                          </Badge>
                          <span className="break-anywhere">{l.contexto}</span>
                        </div>
                      ))}
                      <p className="text-[11px] italic text-amber-800/80 dark:text-amber-300/80 pt-1">
                        Verifique se a APAC/AIH respeita esses limites antes da cobrança.
                      </p>
                    </AlertDescription>
                  </Alert>
                </>
              );
            })()}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
