import { describe, expect, it } from "vitest";
import { assertPublicBrand } from "@/domain/brand";
import { buildWhatsappUrl, leadSchema } from "@/domain/whatsapp";

const valid = {
  name: "Ana",
  phone: "(88) 99999-0000",
  segment: "Oficina",
  service: "Site",
  message: "",
} as const;

describe("brand", () => {
  it("rejects Codeness", () => {
    expect(() => assertPublicBrand("Codeness site")).toThrow();
    expect(assertPublicBrand("Codenes site")).toBe("Codenes site");
  });
});

describe("whatsapp lead", () => {
  it("targets Wesley's number with only the allowed fields", () => {
    const lead = leadSchema.parse({ ...valid, extra: "secret" });
    const url = buildWhatsappUrl(lead);
    expect(url.startsWith("https://wa.me/5588999375708?text=")).toBe(true);
    const text = decodeURIComponent(url.split("text=")[1] ?? "");
    expect(text).toContain("Ana");
    expect(text).toContain("Oficina");
    expect(text).not.toContain("secret");
  });

  it("requires name, phone, segment and service", () => {
    expect(leadSchema.safeParse({ ...valid, name: "" }).success).toBe(false);
    expect(leadSchema.safeParse({ ...valid, phone: "123" }).success).toBe(false);
    expect(leadSchema.safeParse({ ...valid, segment: "x" }).success).toBe(false);
    expect(leadSchema.safeParse({ ...valid, service: "x" }).success).toBe(false);
    expect(leadSchema.safeParse({ ...valid, message: undefined }).success).toBe(true);
  });
});
