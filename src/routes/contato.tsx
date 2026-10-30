import { Link, createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Instagram, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/site/layout";
import { INSTAGRAM_URL } from "@/domain/brand";
import { maskPhone } from "@/domain/phone";
import { SEGMENTS, leadSchema } from "@/domain/whatsapp";
import { submitLead } from "@/lib/leads.functions";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  head: () =>
    pageMeta(
      "Contato e orçamento | Codenes",
      "Peça seu orçamento em menos de um minuto. Responda 5 perguntas e a equipe da Codenes entra em contato.",
      "/contato",
    ),
  component: Contact,
});

type Errors = Partial<Record<"name" | "phone" | "segment" | "instagram" | "message" | "form", string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = leadSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as keyof Errors] ??= issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      await submitLead({ data: parsed.data });
      setDone(true);
    } catch {
      setErrors({ form: "Não conseguimos enviar agora. Seus dados continuam aqui — tente de novo em instantes." });
    } finally {
      setSending(false);
    }
  };

  const err = (k: keyof Errors) => errors[k] && <p className="mt-1 text-sm text-destructive">{errors[k]}</p>;

  return (
    <>
      <PageHeader eyebrow="Orçamento" title="Peça seu orçamento">
        Responda 5 perguntas rápidas e nossa equipe entra em contato.
      </PageHeader>
      <section className="container-site py-16">
        {done ? (
          <div role="status" className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center md:p-12">
            <CheckCircle2 className="mx-auto text-primary" size={48} />
            <p className="mt-6 text-lg">
              Recebemos o seu pedido! Em breve nossa equipe entrará em contato. Enquanto isso, acompanhe nossas redes sociais e conheça nossos projetos.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn-primary">
                <Instagram size={18} /> Instagram
              </a>
              <Link to="/servicos" className="btn-ghost">Ver serviços</Link>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mx-auto grid max-w-2xl gap-5 rounded-2xl border border-border bg-card p-6 md:p-10">
            <label className="block">
              <span className="mb-2 block font-semibold">Nome</span>
              <input name="name" className="field" autoComplete="name" maxLength={80} />
              {err("name")}
            </label>
            <label className="block">
              <span className="mb-2 block font-semibold">WhatsApp / telefone</span>
              <input
                name="phone"
                className="field"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="(00) 00000-0000"
                maxLength={15}
                value={phone}
                onChange={(e) => setPhone(maskPhone(e.target.value))}
              />
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
              <span className="mb-2 block font-semibold">Instagram da loja <span className="font-normal text-muted-foreground">(opcional)</span></span>
              <input name="instagram" className="field" placeholder="@sualoja" maxLength={30} />
              {err("instagram")}
            </label>
            <label className="block">
              <span className="mb-2 block font-semibold">O que você busca? Qual é o objetivo?</span>
              <div className="relative">
                <textarea
                  name="message"
                  className="field h-36 resize-none pb-7"
                  maxLength={500}
                  value={message}
                  onChange={(e) => setMessage(e.target.value.slice(0, 500))}
                  placeholder="Conte o que você vende, o que precisa e onde quer chegar (landing page, cardápio, catálogo...)"
                />
                <span className="pointer-events-none absolute bottom-2 right-3 text-xs text-muted-foreground">{message.length}/500</span>
              </div>
              {err("message")}
            </label>
            {errors.form && <p role="alert" className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">{errors.form}</p>}
            <button type="submit" className="btn-primary mt-2 disabled:opacity-70" disabled={sending} aria-busy={sending}>
              {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {sending ? "Enviando..." : "Solicitar orçamento"}
            </button>
          </form>
        )}
      </section>
    </>
  );
}
