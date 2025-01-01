// Edge Function: Esquemas Terapêuticos por Procedimento
// Recebe um procedimento SIGTAP (código + nome + descrição) e, opcionalmente,
// CID-10 / indicação, e devolve esquemas terapêuticos possíveis baseados em
// PCDT (MS/Conitec) e guidelines internacionais (NCCN/ESMO/ASCO).

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface Payload {
  procedimento: { codigo: string; nome: string; descricao?: string };
  cid?: string;
  cidDescricao?: string;
  indicacao?: string;
  contexto?: string;
}

const SYSTEM_PROMPT = `Você é Especialista em Oncologia Clínica do SUS/Brasil.
Tarefa: a partir de um PROCEDIMENTO do SIGTAP (subgrupo 0304 — Oncologia) selecionado pelo médico, listar os ESQUEMAS TERAPÊUTICOS possíveis que esse procedimento pode comportar.

Regras:
1. Use a DESCRIÇÃO oficial do procedimento como âncora — só sugira esquemas compatíveis com o que está descrito (modalidade, drogas, linha, intenção).
2. Hierarquia de evidência: 1º PCDT (Ministério da Saúde / Conitec) → 2º NCCN, ESMO, ASCO recentes.
3. Para cada esquema informe: nome, drogas/dose padrão, ciclos/duração, linha (1ª, 2ª, manutenção, adjuvante, neoadjuvante, paliativo), intenção, marcadores/condições gatilho, fonte (PCDT-CID se houver, ou NCCN/ESMO/ASCO).
4. Se houver CID informado, restrinja aos esquemas indicados para aquele CID/indicação.
5. NUNCA invente protocolos fora de diretrizes. Se a descrição do procedimento for genérica, liste os esquemas mais usados na prática SUS para a indicação.
6. Tudo em português do Brasil.`;

const TOOL_SCHEMA = {
  type: "function",
  function: {
    name: "emitir_esquemas",
    description: "Lista esquemas terapêuticos compatíveis com o procedimento.",
    parameters: {
      type: "object",
      properties: {
        resumoProcedimento: {
          type: "string",
          description: "Resumo de 1-2 frases do que o procedimento autoriza/cobre.",
        },
        esquemas: {
          type: "array",
          description: "Esquemas terapêuticos possíveis, ordenados por relevância clínica.",
          items: {
            type: "object",
            properties: {
              nome: { type: "string", description: "Nome do esquema (ex: AC-T, FOLFOX, Carboplatina + Paclitaxel)." },
              drogas: { type: "string", description: "Drogas e doses/posologia padrão." },
              linha: { type: "string", description: "Ex: 1ª linha, 2ª linha, manutenção, adjuvante, neoadjuvante." },
              intencao: { type: "string", description: "Curativa, adjuvante, neoadjuvante, paliativa." },
              ciclos: { type: "string", description: "Quantidade/duração prevista." },
              gatilho: { type: "string", description: "Marcador, subtipo ou condição clínica que indica este esquema." },
              fonte: { type: "string", description: "PCDT (com referência se possível), NCCN, ESMO, ASCO." },
            },
            required: ["nome", "drogas", "linha", "intencao", "fonte"],
            additionalProperties: false,
          },
        },
        observacoesMarkdown: {
          type: "string",
          description: "Notas clínicas em markdown: alertas, exames pré-tratamento, ajustes, fontes citadas.",
        },
      },
      required: ["resumoProcedimento", "esquemas", "observacoesMarkdown"],
      additionalProperties: false,
    },
  },
};

function userPrompt(p: Payload): string {
  return `PROCEDIMENTO SIGTAP:
- Código: ${p.procedimento.codigo}
- Nome: ${p.procedimento.nome}
- Descrição oficial: ${p.procedimento.descricao?.trim() || "—"}

Contexto clínico:
- CID-10: ${p.cid || "—"}${p.cidDescricao ? ` (${p.cidDescricao})` : ""}
- Indicação terapêutica: ${p.indicacao || "—"}
- Notas adicionais: ${p.contexto?.trim() || "—"}

Liste os esquemas terapêuticos possíveis chamando a função emitir_esquemas.`;
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
    if (!payload?.procedimento?.codigo || !payload?.procedimento?.nome) {
      return new Response(JSON.stringify({ error: "Procedimento (codigo, nome) é obrigatório." }), {
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
        tool_choice: { type: "function", function: { name: "emitir_esquemas" } },
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
    } catch {
      return new Response(JSON.stringify({ error: "JSON inválido da IA.", raw: toolCall.function.arguments }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true, esquemas: parsed }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("esquemas-terapeuticos erro:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
