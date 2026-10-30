import { z } from "zod";
import { WHATSAPP_NUMBER } from "./brand";
import { isValidPhone } from "./phone";

export const SEGMENTS = [
  "Restaurante / lanchonete",
  "Barbearia / salão",
  "Oficina",
  "Loja / varejo",
  "Serviços",
  "Outro",
] as const;

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(80, "Use no máximo 80 caracteres"),
  phone: z
    .string()
    .trim()
    .refine((v) => isValidPhone(v), "Informe um número com DDD, ex.: (88) 99999-0000"),
  segment: z.enum(SEGMENTS, { errorMap: () => ({ message: "Escolha o segmento" }) }),
  instagram: z
    .string()
    .trim()
    .max(30, "Use no máximo 30 caracteres")
    .regex(/^@?[A-Za-z0-9._]*$/, "Use apenas letras, números, ponto e _ (o @ no início é opcional)")
    .optional()
    .default(""),
  message: z.string().trim().max(500, "Use no máximo 500 caracteres").optional().default(""),
});

export type Lead = z.infer<typeof leadSchema>;

/** Builds the wa.me URL with only the allowed fields. */
export function buildWhatsappUrl(lead: Lead): string {
  const lines = [
    "Olá, Codenes! Quero um orçamento.",
    "",
    `*Nome:* ${lead.name}`,
    `*Telefone:* ${lead.phone}`,
    `*Segmento:* ${lead.segment}`,
  ];
  if (lead.instagram) lines.push(`*Instagram:* ${lead.instagram}`);
  if (lead.message) lines.push(`*Objetivo:* ${lead.message}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export const WHATSAPP_QUICK_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, Codenes! Quero saber mais sobre os serviços.")}`;
