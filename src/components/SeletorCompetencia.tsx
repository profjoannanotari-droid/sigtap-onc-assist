import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CalendarClock, Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { parseProcedimentosXLS } from "@/lib/sigtapXlsParser";
import {
  competenciaVigente,
  listarBasesCompetencia,
  removerCompetenciaUpload,
  salvarCompetenciaUpload,
  type BaseCompetencia,
} from "@/lib/competencias";

export function useCompetencia() {
  const [versao, setVersao] = useState(0);
  const [competencia, setCompetencia] = useState<string>(competenciaVigente);
  const bases = useMemo(() => listarBasesCompetencia(), [versao]);
  const base = bases.find((b) => b.competencia === competencia) ?? bases[0];
  const recarregar = useCallback(() => setVersao((v) => v + 1), []);

  useEffect(() => {
    if (!bases.some((b) => b.competencia === competencia) && bases[0]) {
      setCompetencia(bases[0].competencia);
    }
  }, [bases, competencia]);

  return { bases, base: base as BaseCompetencia, competencia, setCompetencia, recarregar };
}

interface Props {
  bases: BaseCompetencia[];
  base: BaseCompetencia;
  competencia: string;
  onChange: (c: string) => void;
  onRecarregar: () => void;
}

const MES_ANO = /^(0[1-9]|1[0-2])\/20\d{2}$/;

export function SeletorCompetencia({ bases, base, competencia, onChange, onRecarregar }: Props) {
  const [novaComp, setNovaComp] = useState("");
  const [importando, setImportando] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function importar(file: File) {
    if (!MES_ANO.test(novaComp)) {
      toast({ title: "Informe a competência", description: "Use o formato MM/AAAA, por exemplo 03/2026.", variant: "destructive" });
      return;
    }
    setImportando(true);
    try {
      const snap = await parseProcedimentosXLS(file);
      if (snap.totalProcedimentos === 0) {
        toast({ title: "Arquivo sem procedimentos 0304", description: "Verifique se é a TABELA_PROCEDIMENTO do SIGTAP.", variant: "destructive" });
        return;
      }
      salvarCompetenciaUpload(novaComp, snap);
      onRecarregar();
      onChange(novaComp);
      toast({ title: `Competência ${novaComp} importada`, description: `${snap.totalProcedimentos} procedimentos do subgrupo 0304.` });
      setNovaComp("");
    } catch (e) {
      toast({ title: "Falha ao ler o arquivo", description: (e as Error).message, variant: "destructive" });
    } finally {
      setImportando(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <CalendarClock className="w-4 h-4" /> Competência da pesquisa
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label className="text-xs">Tabela SIGTAP utilizada</Label>
            <Select value={competencia} onValueChange={onChange}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent className="bg-popover">
                {bases.map((b) => (
                  <SelectItem key={b.competencia} value={b.competencia}>{b.rotulo}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Adicionar outra competência (XLS oficial)</Label>
            <div className="flex gap-2">
              <Input
                value={novaComp}
                onChange={(e) => setNovaComp(e.target.value)}
                placeholder="MM/AAAA"
                className="w-28"
              />
              <input
                ref={inputRef}
                type="file"
                accept=".xls,.xlsx"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) void importar(f);
                }}
              />
              <Button
                variant="outline"
                size="sm"
                disabled={importando}
                onClick={() => inputRef.current?.click()}
                className="flex-1"
              >
                <Upload className="w-4 h-4 mr-1" /> {importando ? "Importando..." : "Enviar tabela"}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={base?.origem === "atual" ? "default" : "secondary"}>
            {base?.origem === "atual" ? "Vigente" : base?.origem === "derivada" ? "Reconstruída" : "Importada"}
          </Badge>
          <Badge variant="outline">{base?.procedimentos.length ?? 0} procedimentos</Badge>
          {base?.origem === "upload" && (
            <Button
              variant="ghost"
              size="sm"
              className="text-destructive h-7"
              onClick={() => {
                removerCompetenciaUpload(base.competencia);
                onChange(competenciaVigente);
                onRecarregar();
              }}
            >
              <Trash2 className="w-3.5 h-3.5 mr-1" /> Remover
            </Button>
          )}
        </div>
        {base?.observacao && (
          <p className="text-[11px] text-muted-foreground leading-tight">{base.observacao}</p>
        )}
      </CardContent>
    </Card>
  );
}

export default SeletorCompetencia;
