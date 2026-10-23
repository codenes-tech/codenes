export const BRAND = "Codenes";
export const SITE_URL = "https://codenes.com.br";
export const WHATSAPP_NUMBER = "5588999375708";
export const LINKEDIN_URL = "https://www.linkedin.com/in/wesleynuneslima";

/** Throws when public text uses the wrong brand spelling ("Codeness"). */
export function assertPublicBrand(text: string): string {
  if (/codeness/i.test(text)) {
    throw new Error('Marca inválida: use "Codenes", nunca "Codeness".');
  }
  return text;
}
