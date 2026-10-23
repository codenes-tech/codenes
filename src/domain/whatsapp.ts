import { z } from "zod";
import { WHATSAPP_NUMBER } from "./brand";

export const SEGMENTS = [
  "Restaurante / lanchonete",
  "Barbearia / salão",
  "Oficina",
  "Loja / varejo",
  "Serviços",
  "Outro",
] as const;

export const SERVICE_OPTIONS = [
  "Landing page",
  "Cardápio / catálogo digital",
  "Site",
  "Template para barbearia ou oficina",
  "Ainda não sei",
] as const;

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(80),
  phone: z
    .string()
    .trim()
    .refine((v) => v.replace(/\D/g, "").length >= 10 && v.replace(/\D/g, "").length <= 13, "Informe um telefone válido com DDD"),
  segment: z.enum(SEGMENTS, { errorMap: () => ({ message: "Escolha o segmento" }) }),
  service: z.enum(SERVICE_OPTIONS, { errorMap: () => ({ message: "Escolha o serviço" }) }),
  message: z.string().trim().max(500).optional().default(""),
});

export type Lead = z.infer<typeof leadSchema>;

/** Builds the wa.me URL with only the five allowed fields. */
export function buildWhatsappUrl(lead: Lead): string {
  const lines = [
    "Olá, Codenes! Quero um orçamento.",
    "",
    `*Nome:* ${lead.name}`,
    `*Telefone:* ${lead.phone}`,
    `*Segmento:* ${lead.segment}`,
    `*Serviço:* ${lead.service}`,
  ];
  if (lead.message) lines.push(`*Mensagem:* ${lead.message}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export const WHATSAPP_QUICK_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, Codenes! Quero saber mais sobre os serviços.")}`;
