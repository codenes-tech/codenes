import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { pt } from "@/content/pt";
import imgBarbearia from "@/assets/services/barbearia.jpg";
import imgCardapio from "@/assets/services/cardapio-digital.jpg";
import imgCatalogo from "@/assets/services/catalogo-digital.jpg";
import imgLanding from "@/assets/services/landing-pages.jpg";
import imgOficina from "@/assets/services/oficina.jpg";

const IMAGES: Record<string, string> = {
  "landing-pages": imgLanding,
  "catalogo-digital": imgCatalogo,
  "cardapio-digital": imgCardapio,
  oficina: imgOficina,
  barbearia: imgBarbearia,
};

export function ServicesCarousel() {
  const slides = pt.services;
  const [index, setIndex] = useState(0);
  const go = (i: number) => setIndex((i + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s) => (
          <div key={s.id} className="relative aspect-[4/3] w-full shrink-0 md:aspect-[21/9]">
            <img
              src={IMAGES[s.id]}
              alt={s.name}
              loading="lazy"
              width={1280}
              height={864}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-6 text-ink-foreground md:p-10">
              <h3 className="text-2xl font-extrabold md:text-4xl">{s.name}</h3>
              <p className="max-w-xl text-sm text-ink-foreground/85 md:text-lg">{s.tagline}</p>
              <Link to="/servicos/$id" params={{ id: s.id }} className="btn-primary mt-2 !py-2.5 text-sm">
                Saiba mais <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        aria-label="Serviço anterior"
        onClick={() => go(index - 1)}
        className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink/60 text-ink-foreground backdrop-blur transition-opacity hover:bg-ink/80 md:opacity-0 md:group-hover:opacity-100"
      >
        <ArrowLeft size={20} />
      </button>
      <button
        aria-label="Próximo serviço"
        onClick={() => go(index + 1)}
        className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink/60 text-ink-foreground backdrop-blur transition-opacity hover:bg-ink/80 md:opacity-0 md:group-hover:opacity-100"
      >
        <ArrowRight size={20} />
      </button>

      <div className="absolute bottom-4 right-6 flex gap-2 md:bottom-6 md:right-10">
        {slides.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Ir para ${s.name}`}
            onClick={() => go(i)}
            className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-2 bg-ink-foreground/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
