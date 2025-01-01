// Sistema de assinatura mensal por CPF.
// Acesso liberado apenas para: admin, autorizado (papel manual) OU
// usuário cujo CPF esteja na tabela authorized_cpfs com paid_until >= hoje.

export const ASSINATURA = {
  valorMensal: "R$ 29,90",
  valorMensalNumero: 29.9,
  ciclo: "mês",
  pixChave: "81987444209",
  pixTipo: "Celular",
  pixTitular: "Consultoria em Saúde JN",
  whatsapp: "(81) 98744-4209",
  whatsappLink: "https://wa.me/5581987444209",
  email: "consultoriaemsaudejn@gmail.com",
};

// Contatos exibidos na tela de bloqueio.
export const ACCESS_CONTACT = {
  email: ASSINATURA.email,
  whatsapp: ASSINATURA.whatsapp,
  whatsappLink: ASSINATURA.whatsappLink,
};

// Apenas dígitos
export function normalizarCPF(cpf: string): string {
  return (cpf || "").replace(/\D/g, "");
}

// Formato 000.000.000-00
export function formatarCPF(cpf: string): string {
  const d = normalizarCPF(cpf).padStart(11, "0").slice(-11);
  if (d.length < 11) return cpf;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}

// Validação oficial do dígito verificador do CPF
export function cpfValido(cpf: string): boolean {
  const c = normalizarCPF(cpf);
  if (c.length !== 11 || /^(\d)\1{10}$/.test(c)) return false;
  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(c[i]) * (10 - i);
  let d1 = (soma * 10) % 11;
  if (d1 === 10) d1 = 0;
  if (d1 !== parseInt(c[9])) return false;
  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(c[i]) * (11 - i);
  let d2 = (soma * 10) % 11;
  if (d2 === 10) d2 = 0;
  return d2 === parseInt(c[10]);
}
