import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { pt } from "@/content/pt";
import { FinalCta, PageHeader } from "@/components/site/layout";
import { LINKEDIN_URL } from "@/domain/brand";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () =>
    pageMeta(
      "Sobre | Codenes",
      "Conheça a Codenes, estúdio de Wesley Nunes Lima que cria sites focados em vendas para pequenos e médios negócios.",
      "/sobre",
    ),
  component: About,
});

function About() {
  const a = pt.about;
  return (
    <>
      <PageHeader eyebrow="Sobre" title={a.title} />
      <section className="container-site grid gap-12 py-16 md:grid-cols-[1fr_1.4fr]">
        <div className="flex aspect-[4/5] items-end rounded-2xl bg-ink p-8 text-ink-foreground">
          <div>
            <p className="font-display text-3xl font-extrabold">Wesley Nunes Lima</p>
            <p className="mt-1 text-ink-muted">Fundador da Codenes</p>
          </div>
        </div>
        <div className="space-y-6 text-lg text-muted-foreground">
          {a.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary">
            {a.linkedin} <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <FinalCta {...pt.finalCta} />
    </>
  );
}
