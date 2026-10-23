import { createFileRoute } from "@tanstack/react-router";
import { pt } from "@/content/pt";
import { FaqList } from "@/components/site/faq-list";
import { FinalCta, PageHeader } from "@/components/site/layout";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageMeta(
      "Perguntas frequentes | Codenes",
      "Prazo, valores, domínio, suporte, Google e pedidos pelo WhatsApp: tire suas dúvidas sobre os sites da Codenes.",
      "/faq",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: pt.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Perguntas frequentes" />
      <section className="container-site py-16"><FaqList items={pt.faq} /></section>
      <FinalCta {...pt.finalCta} />
    </>
  );
}
