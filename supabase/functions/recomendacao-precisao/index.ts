// Edge Function: Motor de Recomendação Terapêutica de Precisão
// Cruza CID + estadiamento + biomarcadores via Lovable AI Gateway.
// Retorna saída híbrida: JSON estruturado (condutas) + markdown (análise/justificativa).

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface Payload {
  cid: string;
  cidDescricao?: string;
  estadiamento?: string;
  intencao: "neoadjuvante" | "adjuvante" | "curativa" | "paliativa";
  ecog?: number;
  biomarcadores: Record<string, string | number>;
  observacoesClinicas?: string;
  procedimento?: {
    codigo: string;
    nome: string;
    descricao?: string;
  };
}

const SYSTEM_PROMPT = `Atue como Especialista em Oncologia Clínica e Bioinformática Médica do SUS/Brasil.
Objetivo: gerar recomendações de protocolos quimioterápicos, hormonais, alvo e imunoterápicos com base no cruzamento de dados clínicos, estadiamento e perfil molecular.

Regras de processamento:
1. REFINO MOLECULAR: para CID C50 (mama) classifique em Luminal A/B, HER2-enriquecido ou Triplo Negativo antes de sugerir protocolo. Para C34 (pulmão) considere drivers (EGFR/ALK/ROS1/BRAF/KRAS G12C/MET/RET/NTRK) antes de quimio padrão.
2. ALVOS: identifique terapia-alvo ou imunoterapia conforme marcadores (ex: Pembrolizumabe se MSI-H ou PD-L1 alto; Olaparibe se BRCA mutado; Trastuzumabe se HER2+).
3. HIERARQUIA DE EVIDÊNCIA: 1º PCDT (Brasil) → 2º NCCN/ESMO/ASCO recentes.
4. NUNCA sugira protocolo fora de diretrizes aprovadas. Se marcadores essenciais faltarem, registre em "dadosFaltantes".
5. Sempre marque "terapiaAlvo": true para protocolos escolhidos por causa de um marcador específico.
6. Sempre escreva tudo em português do Brasil.`;

const TOOL_SCHEMA = {
  type: "function",
  function: {
    name: "emitir_recomendacao",
    description: "Emite a recomendação terapêutica estruturada.",
    parameters: {
      type: "object",
      properties: {
        subtipoBiologico: { type: "string", description: "Classificação molecular (ex: Luminal B HER2-, EGFR Del19+, Triplo Negativo)." },
        statusDoenca: { type: "string", description: "Ex: Localmente avançado, Metastático, Recidivado." },
        protocolos: {
          type: "array",
          description: "Lista ordenada de protocolos sugeridos (1ª linha → demais).",
          items: {
            type: "object",
            properties: {
              nome: { type: "string" },
              componentes: { type: "string", description: "Drogas e esquema." },
              linha: { type: "string", description: "Ex: 1ª linha, 2ª linha, manutenção, adjuvante." },
              ciclos: { type: "string", description: "Quantidade prevista de ciclos." },
              terapiaAlvo: { type: "boolean", description: "True se foi escolhido por marcador específico." },
              marcadorGatilho: { type: "string", description: "Marcador que justificou (vazio se quimio padrão)." },
            },
            required: ["nome", "componentes", "linha", "ciclos", "terapiaAlvo"],
            additionalProperties: false,
          },
        },
        toxicidades: { type: "array", items: { type: "string" } },
        ajustesDose: { type: "string" },
        dadosFaltantes: { type: "array", items: { type: "string" }, description: "Marcadores faltantes que aumentariam precisão." },
        justificativaMarkdown: {
          type: "string",
          description: "Explicação técnica em markdown (## Análise do Perfil, ## Justificativa Molecular). Cite PCDT/NCCN/ESMO quando aplicável.",
        },
      },
      required: ["subtipoBiologico", "statusDoenca", "protocolos", "toxicidades", "justificativaMarkdown"],
      additionalProperties: false,
    },
  },
};

function userPrompt(p: Payload): string {
  const bios = Object.entries(p.biomarcadores)
    .filter(([, v]) => v !== "" && v !== undefined && v !== null)
    .map(([k, v]) => `- ${k}: ${v}`)
    .join("\n") || "- (nenhum biomarcador informado)";

  const procBlock = p.procedimento
    ? `\nProcedimento SIGTAP selecionado pelo médico:
- Código: ${p.procedimento.codigo}
- Nome: ${p.procedimento.nome}
- Descrição oficial: ${p.procedimento.descricao?.trim() || "—"}
Use a DESCRIÇÃO oficial deste procedimento como âncora: a recomendação deve ser COMPATÍVEL com o esquema/intervenção descrito (ex: se a descrição cita drogas, modalidade ou linha terapêutica, alinhe os protocolos sugeridos a essa descrição). Se a descrição entrar em conflito com o perfil molecular informado, sinalize em "dadosFaltantes" ou na justificativa.\n`
    : "";

  return `Parâmetros do caso:
- CID-10: ${p.cid}${p.cidDescricao ? ` (${p.cidDescricao})` : ""}
- Estadiamento: ${p.estadiamento ?? "não informado"}
- Intenção terapêutica: ${p.intencao}
- ECOG/PS: ${p.ecog ?? "não informado"}
- Observações clínicas: ${p.observacoesClinicas?.trim() || "—"}
${procBlock}
Perfil de biomarcadores / IHQ:
${bios}

Gere a recomendação chamando obrigatoriamente a função emitir_recomendacao.`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    { global: { headers: { Authorization: authHeader } } }
  );
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const payload = (await req.json()) as Payload;
    if (!payload?.cid || !payload?.intencao) {
      return new Response(JSON.stringify({ error: "Campos obrigatórios: cid, intencao." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "LOVABLE_API_KEY ausente." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt(payload) },
        ],
        tools: [TOOL_SCHEMA],
        tool_choice: { type: "function", function: { name: "emitir_recomendacao" } },
      }),
    });

    if (aiResp.status === 429) {
      return new Response(JSON.stringify({ error: "Limite de requisições atingido. Tente novamente em alguns segundos." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (aiResp.status === 402) {
      return new Response(JSON.stringify({ error: "Créditos do workspace esgotados. Adicione créditos em Settings → Workspace → Usage." }), {
        status: 402,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!aiResp.ok) {
      const t = await aiResp.text();
      console.error("AI gateway erro:", aiResp.status, t);
      return new Response(JSON.stringify({ error: "Falha no motor de IA." }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await aiResp.json();
    const toolCall = data?.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      return new Response(JSON.stringify({ error: "Resposta da IA sem tool_call.", raw: data }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let parsed: any;
    try {
      parsed = JSON.parse(toolCall.function.arguments);
    } catch (e) {
      return new Response(JSON.stringify({ error: "JSON inválido da IA.", raw: toolCall.function.arguments }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true, recomendacao: parsed }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("recomendacao-precisao erro:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
