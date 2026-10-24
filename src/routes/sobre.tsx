import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Linkedin } from "lucide-react";
import { pt } from "@/content/pt";
import { FinalCta, PageHeader } from "@/components/site/layout";
import { INSTAGRAM_URL, LINKEDIN_URL } from "@/domain/brand";
import { pageMeta } from "@/lib/seo";
import fotoNunes from "@/assets/foto-nunes.jpg.asset.json";

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
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={fotoNunes.url}
            alt="Wesley Nunes Lima, fundador da Codenes"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-8 pt-16 text-ink-foreground">
            <p className="font-display text-3xl font-extrabold">Wesley Nunes Lima</p>
            <p className="mt-1 text-ink-muted">Fundador da Codenes</p>
          </div>
        </div>
        <div className="space-y-6 text-lg text-muted-foreground">
          {a.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn-ghost !py-2.5 text-sm" aria-label="LinkedIn do Wesley">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn-ghost !py-2.5 text-sm" aria-label="Instagram do Wesley">
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>
      </section>
      <FinalCta {...pt.finalCta} />
    </>
  );
}
