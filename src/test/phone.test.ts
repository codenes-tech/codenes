import { describe, expect, it } from "vitest";
import { isValidPhone, maskPhone } from "@/domain/phone";
import { leadSchema } from "@/domain/whatsapp";

describe("phone mask", () => {
  it("formats mobile and landline, dropping letters and extra digits", () => {
    expect(maskPhone("88999990000123")).toBe("(88) 99999-0000");
    expect(maskPhone("8833334444")).toBe("(88) 3333-4444");
    expect(maskPhone("8a8b9")).toBe("(88) 9");
  });
  it("accepts only 10 or 11 digits", () => {
    expect(isValidPhone("(88) 3333-4444")).toBe(true);
    expect(isValidPhone("(88) 99999-0000")).toBe(true);
    expect(isValidPhone("(88) 9999-000")).toBe(false);
  });
});

describe("lead limits", () => {
  const base = { name: "Ana", phone: "(88) 99999-0000", segment: "Oficina" };
  it("instagram max 30 with optional @", () => {
    expect(leadSchema.safeParse({ ...base, instagram: "@loja" }).success).toBe(true);
    expect(leadSchema.safeParse({ ...base, instagram: "a".repeat(31) }).success).toBe(false);
  });
  it("name max 80, message max 500", () => {
    expect(leadSchema.safeParse({ ...base, name: "a".repeat(81) }).success).toBe(false);
    expect(leadSchema.safeParse({ ...base, message: "a".repeat(501) }).success).toBe(false);
  });
});
