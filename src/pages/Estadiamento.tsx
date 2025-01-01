import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calculator, AlertTriangle, BookMarked, Calendar, Dna, FileDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { gerarRelatorioPDF } from "@/lib/pdfReport";
import { toast } from "@/hooks/use-toast";
import {
  SITIOS_SOLIDOS,
  SITIOS_LIQUIDOS,
  OPCOES_T,
  OPCOES_N,
  OPCOES_M,
  FIGO_COLO,
  FIGO_OVARIO,
  FIGO_ENDOMETRIO,
  LUGANO_ESTADIOS,
  BCLC_ESTADIOS,
  WHO_GLIOMA,
  estadiarMama,
  estadiarPulmao,
  estadiarProstata,
  estadiarColoUtero,
  estadiarOvario,
  estadiarEndometrio,
  estadiarColorretal,
  estadiarEstomago,
  estadiarEsofago,
  estadiarPancreas,
  estadiarFigado,
  estadiarRim,
  estadiarBexiga,
  estadiarTireoide,
  estadiarMelanoma,
  estadiarCabecaPescoco,
  estadiarSNC,
  estadiarMieloma,
  estadiarLinfoma,
  estadiarLLC,
  estadiarLeucemiaAguda,
  estadiarLMC,
  estadiarSMD,
  type TipoNeoplasia,
  type EstadiamentoResultado,
} from "@/data/estadiamento";

const HOJE = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

export default function Estadiamento() {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState<TipoNeoplasia | "">("");
  const [sitio, setSitio] = useState<string>("");
  const [form, setForm] = useState<Record<string, any>>({});
  const [resultado, setResultado] = useState<EstadiamentoResultado | null>(null);
  const [gerandoPdf, setGerandoPdf] = useState(false);

  async function exportarPDF() {
    if (!resultado) return;
    setGerandoPdf(true);
    try {
      const camposPreenchidos = Object.entries(form)
        .filter(([, v]) => v !== undefined && v !== "" && v !== null)
        .map(([k, v]) => ({ chave: k.toUpperCase(), valor: String(v) }));
      const resumo = `Estadiamento ${resultado.estadio} (${resultado.fonte}) calculado para neoplasia "${sitio}" do tipo ${tipo}. ` +
        `Detalhes clínicos: ${resultado.detalhes}. ${resultado.observacoes?.length ? `Observações: ${resultado.observacoes.join("; ")}.` : ""}`;
      await gerarRelatorioPDF({
        titulo: "Relatório de Estadiamento Oncológico",
        subtitulo: `${sitio.replace(/_/g, " ").toUpperCase()} • ${resultado.fonte}`,
        badges: [`Estádio ${resultado.estadio}`, sitio.replace(/_/g, " "), resultado.fonte],
        contextoIA: { tipo: "estadiamento", resumoDados: resumo },
        secoes: [
          {
            tipo: "kv",
            titulo: "Resultado",
            itens: [
              { chave: "Estádio", valor: resultado.estadio },
              { chave: "Sítio / Doença", valor: sitio.replace(/_/g, " ") },
              { chave: "Sistema", valor: resultado.fonte },
              { chave: "Detalhes", valor: resultado.detalhes },
            ],
          },
          ...(camposPreenchidos.length
            ? [{ tipo: "kv" as const, titulo: "Dados clínicos utilizados", itens: camposPreenchidos }]
            : []),
          ...(resultado.observacoes?.length
            ? [{ tipo: "lista" as const, titulo: "Observações clínicas", itens: resultado.observacoes }]
            : []),
        ],
        nomeArquivo: `estadiamento_${sitio}_${resultado.estadio.replace(/\s+/g, "_")}`,
      });
    } catch (e) {
      toast({ title: "Erro ao gerar PDF", description: (e as Error).message, variant: "destructive" });
    } finally {
      setGerandoPdf(false);
    }
  }

  const setF = (k: string, v: any) => setForm((p) => ({ ...p, [k]: v }));

  const resetSitio = (s: string) => {
    setSitio(s);
    setForm({});
    setResultado(null);
  };

  const calcular = () => {
    try {
      let r: EstadiamentoResultado | null = null;
      const tnm = { T: form.T, N: form.N, M: form.M };
      if (tipo === "solido") {
        if (sitio === "mama")
          r = estadiarMama({ ...tnm, ER: form.ER, PR: form.PR, HER2: form.HER2, grau: form.grau });
        else if (sitio === "pulmao") r = estadiarPulmao(tnm);
        else if (sitio === "prostata")
          r = estadiarProstata({ ...tnm, PSA: Number(form.PSA), gradeGroup: Number(form.gradeGroup) as 1 | 2 | 3 | 4 | 5 });
        else if (sitio === "colo_utero") r = estadiarColoUtero(form.figo);
        else if (sitio === "ovario") r = estadiarOvario(form.figo);
        else if (sitio === "endometrio") r = estadiarEndometrio(form.figo);
        else if (sitio === "colorretal") r = estadiarColorretal(tnm);
        else if (sitio === "estomago") r = estadiarEstomago(tnm);
        else if (sitio === "esofago") r = estadiarEsofago(tnm);
        else if (sitio === "pancreas") r = estadiarPancreas(tnm);
        else if (sitio === "figado") r = estadiarFigado(form.bclc);
        else if (sitio === "rim") r = estadiarRim(tnm);
        else if (sitio === "bexiga") r = estadiarBexiga(tnm);
        else if (sitio === "tireoide") r = estadiarTireoide({ ...tnm, idade: Number(form.idade) });
        else if (sitio === "melanoma")
          r = estadiarMelanoma({
            espessura: Number(form.espessura), ulceracao: !!form.ulceracao,
            N: form.N, M: form.M,
          });
        else if (sitio === "cabeca_pescoco") r = estadiarCabecaPescoco(tnm);
        else if (sitio === "snc") r = estadiarSNC(form.grauWHO);
      } else if (tipo === "liquido") {
        if (sitio === "mieloma")
          r = estadiarMieloma({
            albumina: Number(form.albumina), b2m: Number(form.b2m),
            ldhAlta: !!form.ldhAlta, citogeneticaAltoRisco: !!form.citogeneticaAltoRisco,
          });
        else if (sitio === "linfoma")
          r = estadiarLinfoma({ estadio: form.estadioL, sintomasB: !!form.sintomasB, bulky: !!form.bulky });
        else if (sitio === "llc")
          r = estadiarLLC({
            linfocitose: !!form.linfocitose, linfadenopatia: !!form.linfadenopatia,
            hepatoesplenomegalia: !!form.hepatoesplenomegalia,
            hb: Number(form.hb), plaquetas: Number(form.plaquetas),
          });
        else if (sitio === "lla_lma")
          r = estadiarLeucemiaAguda({
            tipo: form.tipoLeuc, citogenetica: form.citogenetica,
            blastosMedula: Number(form.blastosMedula),
          });
        else if (sitio === "lmc")
          r = estadiarLMC({
            fase: form.faseLMC, idade: Number(form.idade), bacoCm: Number(form.bacoCm),
            plaquetas: Number(form.plaquetas), blastos: Number(form.blastos),
          });
        else if (sitio === "smd")
          r = estadiarSMD({
            blastos: Number(form.blastos), citogenetica: form.citogeneticaSMD,
            hb: Number(form.hb), plaquetas: Number(form.plaquetas), neutrofilos: Number(form.neutrofilos),
          });
      }
      setResultado(r);
    } catch {
      setResultado(null);
    }
  };

  const podeCalcular = useMemo(() => {
    if (!tipo || !sitio) return false;
    const tnmOk = form.T && form.N && form.M;
    if (sitio === "mama") return tnmOk && form.ER && form.PR && form.HER2 && form.grau;
    if (["pulmao", "colorretal", "estomago", "esofago", "pancreas", "rim", "bexiga", "cabeca_pescoco"].includes(sitio)) return tnmOk;
    if (sitio === "prostata") return tnmOk && form.PSA && form.gradeGroup;
    if (sitio === "tireoide") return tnmOk && form.idade;
    if (sitio === "melanoma") return form.espessura && form.N && form.M;
    if (sitio === "colo_utero" || sitio === "ovario" || sitio === "endometrio") return !!form.figo;
    if (sitio === "figado") return !!form.bclc;
    if (sitio === "snc") return !!form.grauWHO;
    if (sitio === "mieloma") return form.albumina && form.b2m;
    if (sitio === "linfoma") return !!form.estadioL;
    if (sitio === "llc") return form.hb && form.plaquetas;
    if (sitio === "lla_lma") return form.tipoLeuc && form.citogenetica && form.blastosMedula !== undefined;
    if (sitio === "lmc") return form.faseLMC && form.idade && form.bacoCm !== undefined && form.plaquetas && form.blastos !== undefined;
    if (sitio === "smd") return form.citogeneticaSMD && form.hb && form.plaquetas && form.neutrofilos !== undefined && form.blastos !== undefined;
    return false;
  }, [tipo, sitio, form]);

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-medical">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 shrink-0 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
              <Calculator className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-base sm:text-2xl font-bold text-primary-foreground leading-tight">
                Calculadora de Estadiamento
              </h1>
              <p className="text-primary-foreground/80 text-xs sm:text-sm mt-0.5">
                AJCC • FIGO • R-ISS • Lugano • Rai/Binet • ELN
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 h-8 px-2"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span className="text-xs sm:text-sm">Voltar</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8 max-w-3xl space-y-4">
        {/* Triagem inicial */}
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">1. Tipo de Neoplasia</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={tipo}
              onValueChange={(v) => {
                setTipo(v as TipoNeoplasia);
                setSitio("");
                setForm({});
                setResultado(null);
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              <Label
                htmlFor="t-solido"
                className={`cursor-pointer rounded-lg border-2 p-4 transition-colors ${tipo === "solido" ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="solido" id="t-solido" />
                  <div>
                    <div className="font-semibold">Tumores Sólidos</div>
                    <div className="text-xs text-muted-foreground">Mama, Pulmão, Próstata, Colo, Ovário</div>
                  </div>
                </div>
              </Label>
              <Label
                htmlFor="t-liquido"
                className={`cursor-pointer rounded-lg border-2 p-4 transition-colors ${tipo === "liquido" ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="liquido" id="t-liquido" />
                  <div>
                    <div className="font-semibold">Tumores Hematológicos</div>
                    <div className="text-xs text-muted-foreground">Mieloma, Linfoma, Leucemias</div>
                  </div>
                </div>
              </Label>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Seleção de sítio */}
        {tipo && (
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">2. Sítio / Patologia</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={sitio} onValueChange={resetSitio}>
                <SelectTrigger><SelectValue placeholder="Selecione a patologia" /></SelectTrigger>
                <SelectContent>
                  {(tipo === "solido" ? SITIOS_SOLIDOS : SITIOS_LIQUIDOS).map((s) => (
                    <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        )}

        {/* Formulários adaptativos */}
        {sitio && (
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">3. Variáveis Clínicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* TNM padrão (sítios que usam T+N+M) */}
              {["mama", "pulmao", "prostata", "colorretal", "estomago", "esofago", "pancreas", "rim", "bexiga", "tireoide", "cabeca_pescoco"].includes(sitio) && (
                <div className="grid grid-cols-3 gap-3">
                  <CampoSelect label="T" opcoes={OPCOES_T} value={form.T} onChange={(v) => setF("T", v)} />
                  <CampoSelect label="N" opcoes={OPCOES_N} value={form.N} onChange={(v) => setF("N", v)} />
                  <CampoSelect label="M" opcoes={OPCOES_M} value={form.M} onChange={(v) => setF("M", v)} />
                </div>
              )}

              {/* Melanoma usa apenas N e M (T é derivado de Breslow) */}
              {sitio === "melanoma" && (
                <div className="grid grid-cols-2 gap-3">
                  <CampoSelect label="N" opcoes={OPCOES_N} value={form.N} onChange={(v) => setF("N", v)} />
                  <CampoSelect label="M" opcoes={OPCOES_M} value={form.M} onChange={(v) => setF("M", v)} />
                </div>
              )}

              {/* MAMA */}
              {sitio === "mama" && (
                <>
                  <div className="grid grid-cols-3 gap-3">
                    <CampoSelect label="ER" opcoes={["positivo", "negativo"]} value={form.ER} onChange={(v) => setF("ER", v)} />
                    <CampoSelect label="PR" opcoes={["positivo", "negativo"]} value={form.PR} onChange={(v) => setF("PR", v)} />
                    <CampoSelect label="HER2" opcoes={["positivo", "negativo"]} value={form.HER2} onChange={(v) => setF("HER2", v)} />
                  </div>
                  <CampoSelect label="Grau Histológico" opcoes={["G1", "G2", "G3"]} value={form.grau} onChange={(v) => setF("grau", v)} />
                </>
              )}

              {/* PRÓSTATA */}
              {sitio === "prostata" && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>PSA inicial (ng/mL)</Label>
                    <Input type="number" step="0.1" value={form.PSA ?? ""} onChange={(e) => setF("PSA", e.target.value)} />
                  </div>
                  <CampoSelect label="Grade Group (Gleason)" opcoes={["1", "2", "3", "4", "5"]} value={form.gradeGroup} onChange={(v) => setF("gradeGroup", v)} />
                </div>
              )}

              {/* COLO */}
              {sitio === "colo_utero" && (
                <div>
                  <Label>Estádio FIGO</Label>
                  <Select value={form.figo} onValueChange={(v) => setF("figo", v)}>
                    <SelectTrigger><SelectValue placeholder="Selecione o estádio FIGO" /></SelectTrigger>
                    <SelectContent>
                      {FIGO_COLO.map((f) => <SelectItem key={f.value} value={f.value}>{f.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* OVÁRIO */}
              {sitio === "ovario" && (
                <div>
                  <Label>Estádio FIGO</Label>
                  <Select value={form.figo} onValueChange={(v) => setF("figo", v)}>
                    <SelectTrigger><SelectValue placeholder="Selecione o estádio FIGO" /></SelectTrigger>
                    <SelectContent>
                      {FIGO_OVARIO.map((f) => <SelectItem key={f.value} value={f.value}>{f.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* MIELOMA */}
              {sitio === "mieloma" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Albumina (g/dL)</Label>
                      <Input type="number" step="0.1" value={form.albumina ?? ""} onChange={(e) => setF("albumina", e.target.value)} />
                    </div>
                    <div>
                      <Label>β2-microglobulina (mg/L)</Label>
                      <Input type="number" step="0.1" value={form.b2m ?? ""} onChange={(e) => setF("b2m", e.target.value)} />
                    </div>
                  </div>
                  <SwitchLinha label="LDH elevada" checked={!!form.ldhAlta} onChange={(v) => setF("ldhAlta", v)} />
                  <SwitchLinha label="Citogenética de alto risco [del(17p), t(4;14), t(14;16)]" checked={!!form.citogeneticaAltoRisco} onChange={(v) => setF("citogeneticaAltoRisco", v)} />
                </>
              )}

              {/* LINFOMA */}
              {sitio === "linfoma" && (
                <>
                  <div>
                    <Label>Estádio Lugano (Ann Arbor)</Label>
                    <Select value={form.estadioL} onValueChange={(v) => setF("estadioL", v)}>
                      <SelectTrigger><SelectValue placeholder="Selecione o estádio" /></SelectTrigger>
                      <SelectContent>
                        {LUGANO_ESTADIOS.map((l) => <SelectItem key={l.value} value={l.value}>{l.label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <SwitchLinha label="Sintomas B (febre, sudorese, perda de peso)" checked={!!form.sintomasB} onChange={(v) => setF("sintomasB", v)} />
                  <SwitchLinha label="Doença bulky (>10 cm)" checked={!!form.bulky} onChange={(v) => setF("bulky", v)} />
                </>
              )}

              {/* LLC */}
              {sitio === "llc" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Hemoglobina (g/dL)</Label>
                      <Input type="number" step="0.1" value={form.hb ?? ""} onChange={(e) => setF("hb", e.target.value)} />
                    </div>
                    <div>
                      <Label>Plaquetas (×10³/µL)</Label>
                      <Input type="number" value={form.plaquetas ?? ""} onChange={(e) => setF("plaquetas", e.target.value)} />
                    </div>
                  </div>
                  <SwitchLinha label="Linfocitose" checked={!!form.linfocitose} onChange={(v) => setF("linfocitose", v)} />
                  <SwitchLinha label="Linfadenopatia" checked={!!form.linfadenopatia} onChange={(v) => setF("linfadenopatia", v)} />
                  <SwitchLinha label="Hepato/esplenomegalia" checked={!!form.hepatoesplenomegalia} onChange={(v) => setF("hepatoesplenomegalia", v)} />
                </>
              )}

              {/* LEUCEMIA AGUDA */}
              {sitio === "lla_lma" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <CampoSelect label="Tipo" opcoes={["LMA", "LLA"]} value={form.tipoLeuc} onChange={(v) => setF("tipoLeuc", v)} />
                    <div>
                      <Label>Blastos em medula (%)</Label>
                      <Input type="number" value={form.blastosMedula ?? ""} onChange={(e) => setF("blastosMedula", e.target.value)} />
                    </div>
                  </div>
                  <CampoSelect label="Citogenética" opcoes={["favoravel", "intermediaria", "adverso"]} value={form.citogenetica} onChange={(v) => setF("citogenetica", v)} />
                </>
              )}

              {/* ENDOMÉTRIO (FIGO 2023) */}
              {sitio === "endometrio" && (
                <div>
                  <Label>Estádio FIGO</Label>
                  <Select value={form.figo} onValueChange={(v) => setF("figo", v)}>
                    <SelectTrigger><SelectValue placeholder="Selecione o estádio FIGO" /></SelectTrigger>
                    <SelectContent>
                      {FIGO_ENDOMETRIO.map((f) => <SelectItem key={f.value} value={f.value}>{f.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* FÍGADO (BCLC) */}
              {sitio === "figado" && (
                <div>
                  <Label>Estádio BCLC</Label>
                  <Select value={form.bclc} onValueChange={(v) => setF("bclc", v)}>
                    <SelectTrigger><SelectValue placeholder="Selecione o estádio BCLC" /></SelectTrigger>
                    <SelectContent>
                      {BCLC_ESTADIOS.map((b) => <SelectItem key={b.value} value={b.value}>{b.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* SNC – WHO Glioma */}
              {sitio === "snc" && (
                <div>
                  <Label>Grau WHO</Label>
                  <Select value={form.grauWHO} onValueChange={(v) => setF("grauWHO", v)}>
                    <SelectTrigger><SelectValue placeholder="Selecione o grau WHO" /></SelectTrigger>
                    <SelectContent>
                      {WHO_GLIOMA.map((g) => <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* TIREOIDE – idade */}
              {sitio === "tireoide" && (
                <div>
                  <Label>Idade do paciente (anos)</Label>
                  <Input type="number" value={form.idade ?? ""} onChange={(e) => setF("idade", e.target.value)} />
                </div>
              )}

              {/* MELANOMA – Breslow + ulceração */}
              {sitio === "melanoma" && (
                <>
                  <div>
                    <Label>Espessura de Breslow (mm)</Label>
                    <Input type="number" step="0.1" value={form.espessura ?? ""} onChange={(e) => setF("espessura", e.target.value)} />
                  </div>
                  <SwitchLinha label="Ulceração presente" checked={!!form.ulceracao} onChange={(v) => setF("ulceracao", v)} />
                </>
              )}

              {/* LMC */}
              {sitio === "lmc" && (
                <>
                  <CampoSelect label="Fase" opcoes={["cronica", "acelerada", "blastica"]} value={form.faseLMC} onChange={(v) => setF("faseLMC", v)} />
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Idade (anos)</Label>
                      <Input type="number" value={form.idade ?? ""} onChange={(e) => setF("idade", e.target.value)} />
                    </div>
                    <div>
                      <Label>Baço (cm RCE)</Label>
                      <Input type="number" step="0.1" value={form.bacoCm ?? ""} onChange={(e) => setF("bacoCm", e.target.value)} />
                    </div>
                    <div>
                      <Label>Plaquetas (×10³/µL)</Label>
                      <Input type="number" value={form.plaquetas ?? ""} onChange={(e) => setF("plaquetas", e.target.value)} />
                    </div>
                    <div>
                      <Label>Blastos (%)</Label>
                      <Input type="number" step="0.1" value={form.blastos ?? ""} onChange={(e) => setF("blastos", e.target.value)} />
                    </div>
                  </div>
                </>
              )}

              {/* SMD (IPSS-R) */}
              {sitio === "smd" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Blastos medula (%)</Label>
                      <Input type="number" step="0.1" value={form.blastos ?? ""} onChange={(e) => setF("blastos", e.target.value)} />
                    </div>
                    <div>
                      <Label>Hemoglobina (g/dL)</Label>
                      <Input type="number" step="0.1" value={form.hb ?? ""} onChange={(e) => setF("hb", e.target.value)} />
                    </div>
                    <div>
                      <Label>Plaquetas (×10³/µL)</Label>
                      <Input type="number" value={form.plaquetas ?? ""} onChange={(e) => setF("plaquetas", e.target.value)} />
                    </div>
                    <div>
                      <Label>Neutrófilos (×10³/µL)</Label>
                      <Input type="number" step="0.1" value={form.neutrofilos ?? ""} onChange={(e) => setF("neutrofilos", e.target.value)} />
                    </div>
                  </div>
                  <CampoSelect
                    label="Citogenética IPSS-R"
                    opcoes={["muito_bom", "bom", "intermediario", "ruim", "muito_ruim"]}
                    value={form.citogeneticaSMD}
                    onChange={(v) => setF("citogeneticaSMD", v)}
                  />
                </>
              )}

              <Button onClick={calcular} disabled={!podeCalcular} className="w-full" size="lg">
                <Calculator className="w-4 h-4 mr-2" />
                Calcular Estadiamento
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Resultado */}
        {resultado && (
          <Card className="shadow-card border-primary/40">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Resultado</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 text-center">
                <Badge variant="secondary" className="mb-2">Estadiamento</Badge>
                <div className="text-3xl font-bold text-primary">{resultado.estadio}</div>
                <p className="text-sm text-muted-foreground mt-2">{resultado.detalhes}</p>
              </div>

              {resultado.observacoes && resultado.observacoes.length > 0 && (
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  {resultado.observacoes.map((o, i) => <li key={i}>{o}</li>)}
                </ul>
              )}

              <div className="flex items-start gap-2 text-sm border-t border-border pt-3">
                <BookMarked className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <div className="font-semibold">Fonte: {resultado.fonte}</div>
                  <div className="text-xs text-muted-foreground">Referência mais atualizada disponível.</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                Critérios revisados em {HOJE}
              </div>

              <Button
                variant="default"
                className="w-full bg-gold text-gold-foreground hover:bg-gold/90"
                onClick={() => navigate("/precisao", { state: { estadiamento: resultado.estadio } })}
              >
                <Dna className="w-4 h-4 mr-2" />
                Gerar recomendação de precisão para este caso
              </Button>

              <Button variant="outline" className="w-full" onClick={exportarPDF} disabled={gerandoPdf}>
                {gerandoPdf ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <FileDown className="w-4 h-4 mr-2" />}
                {gerandoPdf ? "Gerando relatório…" : "Exportar relatório PDF"}
              </Button>

              <Alert variant="destructive" className="bg-destructive/5 border-destructive/30">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Aviso</AlertTitle>
                <AlertDescription className="text-xs">
                  Ferramenta de suporte à decisão. A validação clínica final deve ser feita pelo médico assistente conforme o prontuário.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}

function CampoSelect({ label, opcoes, value, onChange }: { label: string; opcoes: string[]; value?: string; onChange: (v: string) => void }) {
  return (
    <div>
      <Label>{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger><SelectValue placeholder="—" /></SelectTrigger>
        <SelectContent>
          {opcoes.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );
}

function SwitchLinha({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-border px-3 py-2">
      <Label className="text-sm font-normal cursor-pointer">{label}</Label>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}
