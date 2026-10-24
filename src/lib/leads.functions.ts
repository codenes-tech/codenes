import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { leadSchema } from "@/domain/whatsapp";
import type { Database } from "@/integrations/supabase/types";

/** Saves a contact-form lead. Public endpoint: validates input, then inserts with the anon key (INSERT-only policy). */
export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabase = createClient<Database>(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false },
      // Opaque sb_ keys aren't JWTs; send only apikey, not the default Authorization bearer.
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });
    const { error } = await supabase.from("leads").insert({
      name: data.name,
      phone: data.phone,
      segment: data.segment,
      instagram: data.instagram || null,
      message: data.message || null,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
