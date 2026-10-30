/** Formats digits as a Brazilian phone while typing: (00) 0000-0000 or (00) 00000-0000. */
export function maskPhone(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  const rest = d.slice(2);
  const split = d.length === 11 ? 5 : 4;
  if (rest.length <= split) return `(${d.slice(0, 2)}) ${rest}`;
  return `(${d.slice(0, 2)}) ${rest.slice(0, split)}-${rest.slice(split)}`;
}

/** True when the phone has DDD plus 8 or 9 digits (10 or 11 in total). */
export function isValidPhone(value: string): boolean {
  const n = value.replace(/\D/g, "").length;
  return n === 10 || n === 11;
}
