// Edge Function: relatorio-introducao
// Gera uma introdução analítica em texto corrido (3-5 parágrafos)
// para os relatórios PDF, usando Lovable AI Gateway.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface Body {
  titulo: string;          // Título do relatório (ex: "Procedimentos SIGTAP para C50.9")
  contexto: string;        // Tipo: "busca-sigtap", "estadiamento", "precisao", "esquemas", "cid", "auditoria"
  resumoDados: string;     // Resumo textual / amostra dos dados que estarão no relatório
  publicoAlvo?: string;    // Default: oncologistas / auditores SUS
}

const SYSTEM = `Você é um oncologista clínico e auditor SUS sênior. Escreva uma INTRODUÇÃO analítica para um relatório técnico-clínico em português do Brasil.
Diretrizes:
- 3 a 5 parágrafos curtos, tom sóbrio e profissional
- Contextualize o tema (epidemiologia, importância clínica, base regulatória SUS quando aplicável)
- Faça uma análise crítica do que está sendo apresentado nos dados (não liste os dados)
- Cite, quando pertinente: SIGTAP/subgrupo 0304, PCDT MS/Conitec, NCCN, ESMO, ASCO
- NÃO use markdown, NÃO use bullet points, NÃO repita o título
- NÃO invente números: trabalhe sobre o resumo fornecido
- Termine com uma frase indicando o objetivo deste relatório`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), {
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
    return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = (await req.json()) as Body;
    if (!body?.titulo || !body?.contexto) {
      return new Response(JSON.stringify({ ok: false, error: "Parâmetros inválidos" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ ok: false, error: "LOVABLE_API_KEY ausente" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userPrompt = `Tipo de relatório: ${body.contexto}
Título: ${body.titulo}
Público-alvo: ${body.publicoAlvo ?? "oncologistas, auditores SUS, equipe assistencial"}

Resumo dos dados que aparecerão no relatório:
${body.resumoDados}`;

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (aiRes.status === 429) {
      return new Response(JSON.stringify({ ok: false, error: "Limite de requisições. Tente novamente em instantes." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (aiRes.status === 402) {
      return new Response(JSON.stringify({ ok: false, error: "Créditos de IA esgotados no workspace." }), {
        status: 402,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!aiRes.ok) {
      const t = await aiRes.text();
      return new Response(JSON.stringify({ ok: false, error: `Falha IA: ${t.slice(0, 200)}` }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await aiRes.json();
    const introducao = data?.choices?.[0]?.message?.content?.trim() ?? "";

    return new Response(JSON.stringify({ ok: true, introducao }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
