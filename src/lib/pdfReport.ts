// Geração de relatórios PDF com layout sóbrio e moderno
// Inclui introdução analítica via IA (edge function "relatorio-introducao")
import jsPDF from "jspdf";
import autoTable, { type RowInput } from "jspdf-autotable";
import { supabase } from "@/integrations/supabase/client";

// Paleta sóbria alinhada ao tema médico (azul/teal)
const COR_PRIMARIA: [number, number, number] = [8, 145, 178];   // teal-600 (~hsl 188)
const COR_PRIMARIA_DARK: [number, number, number] = [12, 74, 110];
const COR_TEXTO: [number, number, number] = [30, 41, 59];
const COR_MUTED: [number, number, number] = [100, 116, 139];
const COR_LINHA: [number, number, number] = [226, 232, 240];

export type SecaoRelatorio =
  | { tipo: "paragrafo"; titulo?: string; texto: string }
  | { tipo: "lista"; titulo?: string; itens: string[] }
  | { tipo: "kv"; titulo?: string; itens: Array<{ chave: string; valor: string }> }
  | {
      tipo: "tabela";
      titulo?: string;
      cabecalho: string[];
      linhas: RowInput[];
      larguras?: number[]; // proporções opcionais
    };

export interface RelatorioInput {
  titulo: string;
  subtitulo?: string;
  badges?: string[]; // pequenos chips de contexto (CID, indicação, etc.)
  contextoIA: {
    tipo: "busca-sigtap" | "estadiamento" | "precisao" | "esquemas" | "cid" | "auditoria";
    resumoDados: string;
    publicoAlvo?: string;
  } | null; // se null, pula intro IA
  secoes: SecaoRelatorio[];
  nomeArquivo: string; // sem extensão
  disclaimer?: string;
}

async function gerarIntroducaoIA(input: RelatorioInput["contextoIA"], titulo: string): Promise<string | null> {
  if (!input) return null;
  try {
    const { data, error } = await supabase.functions.invoke("relatorio-introducao", {
      body: { titulo, contexto: input.tipo, resumoDados: input.resumoDados, publicoAlvo: input.publicoAlvo },
    });
    if (error || !data?.ok) return null;
    return (data.introducao as string) || null;
  } catch {
    return null;
  }
}

export async function gerarRelatorioPDF(input: RelatorioInput): Promise<void> {
  const introducao = await gerarIntroducaoIA(input.contextoIA, input.titulo);

  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margemX = 48;
  const conteudoW = pageW - margemX * 2;

  // --- Cabeçalho da capa ---
  doc.setFillColor(...COR_PRIMARIA);
  doc.rect(0, 0, pageW, 110, "F");
  doc.setFillColor(...COR_PRIMARIA_DARK);
  doc.rect(0, 110, pageW, 4, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(input.titulo, margemX, 56, { maxWidth: conteudoW });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  if (input.subtitulo) {
    doc.text(input.subtitulo, margemX, 80, { maxWidth: conteudoW });
  }

  doc.setFontSize(8.5);
  const dataStr = new Date().toLocaleString("pt-BR", { dateStyle: "long", timeStyle: "short" });
  doc.text(`Relatório gerado em ${dataStr}`, margemX, 98);

  let y = 134;

  // --- Badges ---
  if (input.badges && input.badges.length > 0) {
    doc.setFontSize(8.5);
    let bx = margemX;
    for (const b of input.badges) {
      const w = doc.getTextWidth(b) + 14;
      if (bx + w > pageW - margemX) {
        bx = margemX;
        y += 22;
      }
      doc.setFillColor(241, 245, 249);
      doc.setDrawColor(...COR_LINHA);
      doc.roundedRect(bx, y - 11, w, 16, 3, 3, "FD");
      doc.setTextColor(...COR_PRIMARIA_DARK);
      doc.setFont("helvetica", "bold");
      doc.text(b, bx + 7, y);
      bx += w + 6;
    }
    y += 22;
  }

  // --- Introdução IA ---
  if (introducao) {
    y = secaoTitulo(doc, "Análise contextual (IA)", margemX, y, pageW);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...COR_TEXTO);
    const paragrafos = introducao.split(/\n\s*\n/);
    for (const p of paragrafos) {
      const linhas = doc.splitTextToSize(p.trim(), conteudoW);
      y = garantirEspaco(doc, y, linhas.length * 13 + 6, pageH);
      doc.text(linhas, margemX, y);
      y += linhas.length * 13 + 6;
    }
    y += 6;
  }

  // --- Seções ---
  for (const sec of input.secoes) {
    if (sec.titulo) {
      y = secaoTitulo(doc, sec.titulo, margemX, y, pageW);
    }

    if (sec.tipo === "paragrafo") {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(...COR_TEXTO);
      const linhas = doc.splitTextToSize(sec.texto, conteudoW);
      y = garantirEspaco(doc, y, linhas.length * 13 + 6, pageH);
      doc.text(linhas, margemX, y);
      y += linhas.length * 13 + 8;
    } else if (sec.tipo === "lista") {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(...COR_TEXTO);
      for (const item of sec.itens) {
        const linhas = doc.splitTextToSize(`•  ${item}`, conteudoW - 12);
        y = garantirEspaco(doc, y, linhas.length * 13 + 2, pageH);
        doc.text(linhas, margemX + 6, y);
        y += linhas.length * 13 + 2;
      }
      y += 6;
    } else if (sec.tipo === "kv") {
      doc.setFontSize(9.5);
      for (const it of sec.itens) {
        y = garantirEspaco(doc, y, 16, pageH);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(...COR_MUTED);
        doc.text(`${it.chave}:`, margemX, y);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(...COR_TEXTO);
        const valorLinhas = doc.splitTextToSize(it.valor, conteudoW - 130);
        doc.text(valorLinhas, margemX + 130, y);
        y += Math.max(14, valorLinhas.length * 13);
      }
      y += 6;
    } else if (sec.tipo === "tabela") {
      autoTable(doc, {
        head: [sec.cabecalho],
        body: sec.linhas,
        startY: y,
        margin: { left: margemX, right: margemX },
        styles: {
          font: "helvetica",
          fontSize: 8.5,
          cellPadding: 5,
          textColor: COR_TEXTO,
          lineColor: COR_LINHA,
          lineWidth: 0.4,
          overflow: "linebreak",
        },
        headStyles: {
          fillColor: COR_PRIMARIA,
          textColor: [255, 255, 255],
          fontStyle: "bold",
          fontSize: 9,
          halign: "left",
        },
        alternateRowStyles: { fillColor: [248, 250, 252] },
        theme: "grid",
      });
      y = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 14;
    }
  }

  // --- Rodapé com paginação ---
  const total = doc.getNumberOfPages();
  for (let i = 1; i <= total; i++) {
    doc.setPage(i);
    doc.setDrawColor(...COR_LINHA);
    doc.line(margemX, pageH - 36, pageW - margemX, pageH - 36);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...COR_MUTED);
    const disclaimer = input.disclaimer
      ?? "Apoio à decisão clínica · Não substitui o julgamento do médico assistente.";
    doc.text(disclaimer, margemX, pageH - 22, { maxWidth: conteudoW - 90 });
    doc.text(`Página ${i} de ${total}`, pageW - margemX, pageH - 22, { align: "right" });
  }

  doc.save(`${input.nomeArquivo}.pdf`);
}

// Helpers
function secaoTitulo(doc: jsPDF, titulo: string, x: number, y: number, pageW: number): number {
  const pageH = doc.internal.pageSize.getHeight();
  y = garantirEspaco(doc, y, 30, pageH);
  doc.setDrawColor(...COR_PRIMARIA);
  doc.setLineWidth(2.5);
  doc.line(x, y - 9, x + 18, y - 9);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(...COR_PRIMARIA_DARK);
  doc.text(titulo, x + 24, y);
  doc.setLineWidth(0.4);
  return y + 14;
}

function garantirEspaco(doc: jsPDF, y: number, necessario: number, pageH: number): number {
  if (y + necessario > pageH - 50) {
    doc.addPage();
    return 60;
  }
  return y;
}
