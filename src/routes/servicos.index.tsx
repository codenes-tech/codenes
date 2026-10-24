import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { pt } from "@/content/pt";
import { FinalCta, PageHeader } from "@/components/site/layout";
import { ServicesCarousel } from "@/components/site/services-carousel";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/servicos/")({
  head: () =>
    pageMeta(
      "Serviços | Codenes",
      "Landing pages, catálogos e cardápios digitais com pedido no WhatsApp e sites para barbearias e oficinas.",
      "/servicos",
    ),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader eyebrow="Serviços" title="Soluções digitais para vender mais, sem complicação.">
        Escolha o formato que combina com o seu negócio. Todos saem prontos para o celular, com SEO e WhatsApp integrado.
      </PageHeader>
      <section className="container-site py-16">
        <ServicesCarousel />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pt.services.map((s, i) => (
            <article key={s.id} className="flex flex-col rounded-2xl border border-border bg-card p-8">
              <span className="font-display text-sm font-bold text-primary">0{i + 1}</span>
              <h2 className="mt-3 text-2xl font-bold">{s.name}</h2>
              <p className="mt-2 text-muted-foreground">{s.tagline}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {s.includes.map((x) => (
                  <li key={x} className="flex gap-2"><Check size={18} className="shrink-0 text-primary" />{x}</li>
                ))}
              </ul>
              <Link to="/servicos/$id" params={{ id: s.id }} className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">
                Saiba mais <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <FinalCta {...pt.finalCta} />
    </>
  );
}
