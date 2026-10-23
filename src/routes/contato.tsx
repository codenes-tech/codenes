import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/site/layout";
import { SEGMENTS, SERVICE_OPTIONS, buildWhatsappUrl, leadSchema } from "@/domain/whatsapp";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  head: () =>
    pageMeta(
      "Contato e orçamento | Codenes",
      "Peça seu orçamento pelo WhatsApp em menos de um minuto. Responda 5 perguntas e fale direto com a Codenes.",
      "/contato",
    ),
  component: Contact,
});

type Errors = Partial<Record<"name" | "phone" | "segment" | "service" | "message", string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = leadSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as keyof Errors] ??= issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    window.open(buildWhatsappUrl(parsed.data), "_blank", "noopener");
  };

  const err = (k: keyof Errors) => errors[k] && <p className="mt-1 text-sm text-destructive">{errors[k]}</p>;

  return (
    <>
      <PageHeader eyebrow="Contato" title="Peça seu orçamento pelo WhatsApp">
        Responda 5 perguntas rápidas. Ao enviar, o WhatsApp abre com a mensagem pronta.
      </PageHeader>
      <section className="container-site py-16">
        <form onSubmit={onSubmit} noValidate className="mx-auto grid max-w-2xl gap-5 rounded-2xl border border-border bg-card p-6 md:p-10">
          <label className="block">
            <span className="mb-2 block font-semibold">Nome</span>
            <input name="name" className="field" autoComplete="name" maxLength={80} />
            {err("name")}
          </label>
          <label className="block">
            <span className="mb-2 block font-semibold">WhatsApp / telefone</span>
            <input name="phone" className="field" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" maxLength={20} />
            {err("phone")}
          </label>
          <label className="block">
            <span className="mb-2 block font-semibold">Segmento do negócio</span>
            <select name="segment" className="field" defaultValue="">
              <option value="" disabled>Selecione</option>
              {SEGMENTS.map((s) => <option key={s}>{s}</option>)}
            </select>
            {err("segment")}
          </label>
          <label className="block">
            <span className="mb-2 block font-semibold">Serviço desejado</span>
            <select name="service" className="field" defaultValue="">
              <option value="" disabled>Selecione</option>
              {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
            </select>
            {err("service")}
          </label>
          <label className="block">
            <span className="mb-2 block font-semibold">Mensagem <span className="font-normal text-muted-foreground">(opcional)</span></span>
            <textarea name="message" className="field min-h-28" maxLength={500} />
            {err("message")}
          </label>
          <button type="submit" className="btn-primary mt-2">
            <MessageCircle size={18} /> Enviar pelo WhatsApp
          </button>
        </form>
      </section>
    </>
  );
}
