import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { pt } from "@/content/pt";
import { FaqList } from "@/components/site/faq-list";
import { FinalCta } from "@/components/site/layout";
import { WHATSAPP_QUICK_URL } from "@/domain/whatsapp";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Codenes | Sites, landing pages e cardápios digitais que vendem",
      "Landing pages, sites e cardápios digitais com pedido pelo WhatsApp para pequenas e médias empresas. Pronto em até 7 dias.",
      "/",
    ),
  component: Home,
});

function Home() {
  const c = pt;
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-site pb-16 pt-14 md:pb-24 md:pt-20">
          <p className="eyebrow">{c.hero.eyebrow}</p>
          <p aria-hidden className="mt-6 select-none font-display text-[15vw] font-extrabold leading-[0.85] tracking-tighter text-foreground lg:text-[9.5rem]">
            Codenes<span className="text-primary">.</span>
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
            <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">{c.hero.hook}</h1>
            <div>
              <p className="text-lg text-muted-foreground">{c.hero.value}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={WHATSAPP_QUICK_URL} target="_blank" rel="noreferrer" className="btn-primary">
                  {c.hero.ctaPrimary} <ArrowRight size={18} />
                </a>
                <Link to="/servicos" className="btn-ghost">{c.hero.ctaSecondary}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="container-site py-20">
          <p className="eyebrow">01 · Serviços</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold md:text-5xl">O que a Codenes faz pelo seu negócio</h2>
          <div className="mt-12 divide-y divide-ink-foreground/15 border-y border-ink-foreground/15">
            {c.services.map((s, i) => (
              <Link key={s.id} to="/servicos/$id" params={{ id: s.id }} className="group grid gap-3 py-8 md:grid-cols-[5rem_1fr_1.2fr_auto] md:items-center">
                <span className="font-display text-sm font-bold text-primary">0{i + 1}</span>
                <h3 className="text-2xl font-bold md:text-3xl">{s.name}</h3>
                <p className="text-ink-muted">{s.tagline}</p>
                <ArrowUpRight className="hidden text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:block" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-site py-20">
          <p className="eyebrow">02 · Como funciona</p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Do primeiro contato ao site no ar</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {c.steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-8">
                <span className="font-display text-5xl font-extrabold text-primary">{i + 1}</span>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {c.proof.published && c.proof.items.length > 0 && (
        <section className="bg-secondary">
          <div className="container-site py-20">
            <p className="eyebrow">Clientes</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {c.proof.items.map((p) => (
                <blockquote key={p.name} className="rounded-2xl bg-card p-8">
                  <p className="text-lg">"{p.quote}"</p>
                  <footer className="mt-4 font-semibold">{p.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-secondary">
        <div className="container-site grid gap-10 py-20 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">03 · Dúvidas</p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Perguntas frequentes</h2>
            <Link to="/faq" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">Ver todas <ArrowRight size={16} /></Link>
          </div>
          <FaqList items={c.faq.slice(0, 3)} />
        </div>
      </section>

      <FinalCta {...c.finalCta} />
    </>
  );
}
