import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { pt } from "@/content/pt";
import { FinalCta, PageHeader } from "@/components/site/layout";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/servicos/$id")({
  loader: ({ params }) => {
    const service = pt.services.find((s) => s.id === params.id);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? pageMeta(`${loaderData.name} | Codenes`, `${loaderData.tagline} ${loaderData.forWho}`, `/servicos/${params.id}`)
      : { meta: [{ title: "Serviço não encontrado | Codenes" }, { name: "robots", content: "noindex" }] },
  component: ServicePage,
});

function ServicePage() {
  const s = Route.useLoaderData();
  return (
    <>
      <PageHeader eyebrow="Serviço" title={s.name}>{s.tagline}</PageHeader>
      <section className="container-site grid gap-12 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Para quem é</h2>
          <p className="mt-4 text-lg text-muted-foreground">{s.forWho}</p>
          <Link to="/contato" className="btn-primary mt-8">Pedir orçamento</Link>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-2xl font-bold">O que inclui</h2>
          <ul className="mt-6 space-y-3">
            {s.includes.map((x) => (
              <li key={x} className="flex gap-3"><Check className="shrink-0 text-primary" />{x}</li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCta {...pt.finalCta} />
    </>
  );
}
