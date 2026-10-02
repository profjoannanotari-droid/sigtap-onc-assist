// Sincronização automática da Tabela Unificada SIGTAP (DATASUS) — subgrupo 0304.
// Fonte oficial: ftp://ftp2.datasus.gov.br/pub/sistemas/tup/downloads/
// Cada execução registra em sigtap_sincronizacao: sucesso, sem_novidade ou falha (com crítica para ajuste).
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import { unzipSync } from "npm:fflate@0.8.2";

const HOST = "ftp2.datasus.gov.br";
const DIR = "/pub/sistemas/tup/downloads/";
const PADRAO_ARQUIVO = /^TabelaUnificada_(\d{4})(\d{2})_v(\d+)\.zip$/i;
const ARQUIVOS_NECESSARIOS = [
  "tb_procedimento.txt",
  "tb_procedimento_layout.txt",
  "rl_procedimento_cid.txt",
  "rl_procedimento_cid_layout.txt",
  "rl_procedimento_ocupacao.txt",
  "rl_procedimento_ocupacao_layout.txt",
];
const MINIMO_ESPERADO_0304 = 100;

class Critica extends Error {
  constructor(public etapa: string, mensagem: string, public ajuste: string) {
    super(mensagem);
  }
}

// ---------------- Cliente FTP mínimo (modo passivo) ----------------
class Ftp {
  private conn!: Deno.TcpConn;
  private buf = "";
  private dec = new TextDecoder("latin1");
  private enc = new TextEncoder();

  async conectar() {
    this.conn = await Promise.race([
      Deno.connect({ hostname: HOST, port: 21 }),
      new Promise<never>((_, r) => setTimeout(() => r(new Error("tempo esgotado")), 20000)),
    ]);
    await this.esperar([220]);
    await this.cmd("USER anonymous", [331, 230]);
    await this.cmd("PASS anonymous@notarisigtap", [230, 202]);
    await this.cmd("TYPE I", [200]);
  }

  private async linha(): Promise<string> {
    while (!this.buf.includes("\r\n")) {
      const chunk = new Uint8Array(4096);
      const n = await this.conn.read(chunk);
      if (n === null) throw new Error("conexão encerrada pelo servidor");
      this.buf += this.dec.decode(chunk.subarray(0, n));
    }
    const i = this.buf.indexOf("\r\n");
    const l = this.buf.slice(0, i);
    this.buf = this.buf.slice(i + 2);
    return l;
  }

  private async esperar(codigos: number[]): Promise<string> {
    let l = await this.linha();
    const codigo = l.slice(0, 3);
    if (l[3] === "-") {
      while (!(l.startsWith(codigo) && l[3] === " ")) l = await this.linha();
    }
    const c = Number(codigo);
    if (!codigos.includes(c)) throw new Error(`resposta inesperada do servidor: ${l}`);
    return l;
  }

  private async cmd(c: string, codigos: number[]) {
    await this.conn.write(this.enc.encode(c + "\r\n"));
    return await this.esperar(codigos);
  }

  private async dados(comando: string): Promise<Uint8Array> {
    const r = await this.cmd("PASV", [227]);
    const m = r.match(/(\d+),(\d+),(\d+),(\d+),(\d+),(\d+)/);
    if (!m) throw new Error("resposta PASV inválida");
    const port = Number(m[5]) * 256 + Number(m[6]);
    const data = await Deno.connect({ hostname: HOST, port });
    await this.cmd(comando, [125, 150]);
    const partes: Uint8Array[] = [];
    let total = 0;
    const chunk = new Uint8Array(65536);
    while (true) {
      const n = await data.read(chunk);
      if (n === null) break;
      partes.push(chunk.slice(0, n));
      total += n;
    }
    try { data.close(); } catch { /* já fechada */ }
    await this.esperar([226, 250]);
    const out = new Uint8Array(total);
    let off = 0;
    for (const p of partes) { out.set(p, off); off += p.length; }
    return out;
  }

  async listar(dir: string): Promise<string[]> {
    const raw = await this.dados(`NLST ${dir}`);
    return this.dec.decode(raw).split(/\r?\n/).map((s) => s.trim().split("/").pop()!).filter(Boolean);
  }

  async baixar(caminho: string) {
    return await this.dados(`RETR ${caminho}`);
  }

  fechar() {
    try { this.conn.write(this.enc.encode("QUIT\r\n")); this.conn.close(); } catch { /* ignore */ }
  }
}

// ---------------- Parser de arquivos de largura fixa ----------------
type Layout = Record<string, { inicio: number; fim: number }>;

function lerLayout(txt: string, arquivo: string, colunas: string[]): Layout {
  const layout: Layout = {};
  for (const l of txt.split(/\r?\n/)) {
    const p = l.split(",").map((s) => s.trim());
    if (p.length < 4 || !/^\d+$/.test(p[2])) continue;
    layout[p[0].toUpperCase()] = { inicio: Number(p[2]), fim: Number(p[3]) };
  }
  const faltando = colunas.filter((c) => !layout[c]);
  if (faltando.length) {
    throw new Critica(
      "layout",
      `O layout de ${arquivo} não traz as colunas esperadas: ${faltando.join(", ")}.`,
      "O DATASUS alterou a estrutura dos arquivos. É preciso revisar os nomes das colunas no módulo de sincronização.",
    );
  }
  return layout;
}

function campo(l: string, lay: Layout, c: string) {
  return l.slice(lay[c].inicio - 1, lay[c].fim).trim();
}

function idade(meses: string): string {
  const n = Number(meses);
  if (!Number.isFinite(n) || n >= 9999) return "";
  if (n >= 12 && n % 12 === 0) return `${n / 12} Ano(s)`;
  return `${n} Mes(es)`;
}

function sexo(s: string) {
  return s === "F" ? "Feminino" : s === "M" ? "Masculino" : "Ambos";
}

function valor(v: string) {
  const n = Number(v);
  return Number.isFinite(n) ? n / 100 : 0;
}

// ---------------- Execução ----------------
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const json = (b: unknown, s = 200) =>
    new Response(JSON.stringify(b), { status: s, headers: { ...corsHeaders, "Content-Type": "application/json" } });

  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

  // trava: impede duas execuções simultâneas
  const { data: emCurso } = await sb
    .from("sigtap_sincronizacao")
    .select("id")
    .eq("status", "executando")
    .gte("created_at", new Date(Date.now() - 15 * 60_000).toISOString())
    .limit(1);
  if (emCurso && emCurso.length) return json({ status: "executando", mensagem: "Já existe uma sincronização em andamento." });

  const { data: reg } = await sb
    .from("sigtap_sincronizacao")
    .insert({ status: "executando", mensagem: "Sincronização iniciada." })
    .select("id")
    .single();
  const finalizar = async (status: string, mensagem: string, competencia: string | null, detalhes: unknown) => {
    await sb.from("sigtap_sincronizacao").update({ status, mensagem, competencia, detalhes }).eq("id", reg!.id);
    return json({ status, mensagem, competencia, detalhes });
  };

  const ftp = new Ftp();
  let competencia: string | null = null;
  try {
    try {
      await ftp.conectar();
    } catch (e) {
      throw new Critica(
        "conexao",
        `Não foi possível conectar ao servidor do DATASUS (${HOST}): ${(e as Error).message}.`,
        "O servidor pode estar fora do ar (nova tentativa amanhã) ou o endereço oficial mudou. Se a falha persistir por vários dias, revisar o endereço da fonte.",
      );
    }

    let nomes: string[];
    try {
      nomes = await ftp.listar(DIR);
    } catch (e) {
      throw new Critica(
        "listagem",
        `A pasta ${DIR} não pôde ser lida: ${(e as Error).message}.`,
        "O DATASUS pode ter mudado a pasta onde publica a Tabela Unificada. Revisar o caminho da fonte.",
      );
    }

    const candidatos = nomes
      .map((n) => ({ n, m: n.match(PADRAO_ARQUIVO) }))
      .filter((x) => x.m)
      .map((x) => ({ nome: x.n, chave: Number(x.m![1] + x.m![2]), ano: x.m![1], mes: x.m![2], versao: x.m![3] }))
      .sort((a, b) => b.chave - a.chave || b.versao.localeCompare(a.versao));

    if (!candidatos.length) {
      throw new Critica(
        "arquivo",
        `Nenhum arquivo no padrão "TabelaUnificada_AAAAMM_vXXXX.zip" foi encontrado (${nomes.length} itens na pasta).`,
        "O DATASUS mudou o nome dos arquivos publicados. É preciso ajustar o padrão de busca.",
      );
    }

    const alvo = candidatos[0];
    competencia = `${alvo.mes}/${alvo.ano}`;

    const { data: existente } = await sb.from("sigtap_bases").select("arquivo").eq("competencia", competencia).maybeSingle();
    if (existente && existente.arquivo === alvo.nome) {
      ftp.fechar();
      return await finalizar("sem_novidade", `Competência ${competencia} já está atualizada (${alvo.nome}).`, competencia, null);
    }

    let zip: Uint8Array;
    try {
      zip = await ftp.baixar(DIR + alvo.nome);
    } catch (e) {
      throw new Critica("download", `Falha ao baixar ${alvo.nome}: ${(e as Error).message}.`, "Nova tentativa automática no próximo dia.");
    }
    ftp.fechar();

    let arquivos: Record<string, Uint8Array>;
    try {
      arquivos = unzipSync(zip, { filter: (f) => ARQUIVOS_NECESSARIOS.includes(f.name.toLowerCase().split("/").pop()!) });
    } catch (e) {
      throw new Critica("descompactar", `O arquivo ${alvo.nome} não pôde ser aberto: ${(e as Error).message}.`, "O formato do pacote mudou ou o download veio corrompido.");
    }
    const dec = new TextDecoder("latin1");
    const txt: Record<string, string> = {};
    for (const [k, v] of Object.entries(arquivos)) txt[k.toLowerCase().split("/").pop()!] = dec.decode(v);
    const faltam = ARQUIVOS_NECESSARIOS.filter((f) => !(f in txt));
    if (faltam.length) {
      throw new Critica("conteudo", `O pacote ${alvo.nome} não contém: ${faltam.join(", ")}.`, "O DATASUS reorganizou os arquivos da Tabela Unificada. Revisar os nomes esperados.");
    }

    const layP = lerLayout(txt["tb_procedimento_layout.txt"], "tb_procedimento", ["CO_PROCEDIMENTO", "NO_PROCEDIMENTO", "TP_SEXO", "VL_IDADE_MINIMA", "VL_IDADE_MAXIMA", "VL_SH", "VL_SA"]);
    const layC = lerLayout(txt["rl_procedimento_cid_layout.txt"], "rl_procedimento_cid", ["CO_PROCEDIMENTO", "CO_CID"]);
    const layO = lerLayout(txt["rl_procedimento_ocupacao_layout.txt"], "rl_procedimento_ocupacao", ["CO_PROCEDIMENTO", "CO_OCUPACAO"]);

    const cids = new Map<string, string[]>();
    for (const l of txt["rl_procedimento_cid.txt"].split(/\r?\n/)) {
      const c = campo(l, layC, "CO_PROCEDIMENTO");
      if (!c.startsWith("0304")) continue;
      const k = c.replace(/^0+/, "");
      (cids.get(k) ?? cids.set(k, []).get(k)!).push(campo(l, layC, "CO_CID"));
    }
    const cbos = new Map<string, string[]>();
    for (const l of txt["rl_procedimento_ocupacao.txt"].split(/\r?\n/)) {
      const c = campo(l, layO, "CO_PROCEDIMENTO");
      if (!c.startsWith("0304")) continue;
      const k = c.replace(/^0+/, "");
      (cbos.get(k) ?? cbos.set(k, []).get(k)!).push(campo(l, layO, "CO_OCUPACAO"));
    }

    const procedimentos: unknown[] = [];
    for (const l of txt["tb_procedimento.txt"].split(/\r?\n/)) {
      const c = campo(l, layP, "CO_PROCEDIMENTO");
      if (!c.startsWith("0304")) continue;
      const codigo = c.replace(/^0+/, "");
      const sa = valor(campo(l, layP, "VL_SA"));
      const sh = valor(campo(l, layP, "VL_SH"));
      procedimentos.push({
        codigo,
        nome: campo(l, layP, "NO_PROCEDIMENTO"),
        valor: sa > 0 ? sa : sh,
        cbosCompativeis: [...new Set(cbos.get(codigo) ?? [])].sort(),
        cidsCompativeis: [...new Set(cids.get(codigo) ?? [])].sort(),
        idadeMinima: idade(campo(l, layP, "VL_IDADE_MINIMA")),
        idadeMaxima: idade(campo(l, layP, "VL_IDADE_MAXIMA")),
        sexo: sexo(campo(l, layP, "TP_SEXO")),
        subgrupo: c.slice(0, 6),
      });
    }

    if (procedimentos.length < MINIMO_ESPERADO_0304) {
      throw new Critica(
        "validacao",
        `Apenas ${procedimentos.length} procedimentos do subgrupo 0304 foram lidos (esperado: pelo menos ${MINIMO_ESPERADO_0304}).`,
        "As posições das colunas podem ter mudado. A base não foi substituída; revisar a leitura do arquivo.",
      );
    }

    const { error } = await sb.from("sigtap_bases").upsert({
      competencia,
      arquivo: alvo.nome,
      total_procedimentos: procedimentos.length,
      procedimentos,
    });
    if (error) throw new Critica("gravacao", `Falha ao gravar a base: ${error.message}.`, "Problema no armazenamento; nova tentativa automática amanhã.");

    return await finalizar(
      "sucesso",
      `Competência ${competencia} importada do DATASUS: ${procedimentos.length} procedimentos do subgrupo 0304.`,
      competencia,
      { arquivo: alvo.nome, total: procedimentos.length },
    );
  } catch (e) {
    ftp.fechar();
    const c = e instanceof Critica ? e : new Critica("inesperado", (e as Error).message, "Erro não previsto; revisar o módulo de sincronização.");
    return await finalizar("falha", c.message, competencia, { etapa: c.etapa, ajuste: c.ajuste });
  }
});
