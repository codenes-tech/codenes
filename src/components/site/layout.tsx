import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { WHATSAPP_QUICK_URL } from "@/domain/whatsapp";
import { ThemeToggle } from "./theme";

const NAV = [
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Link to="/" className="font-display text-2xl font-extrabold tracking-tight text-foreground">
          Codenes<span className="text-primary">.</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative py-1 text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all hover:text-foreground"
              activeProps={{ className: "text-foreground after:w-full" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contato" className="btn-primary hidden !py-2.5 text-sm sm:inline-flex">
            Orçamento
          </Link>
          <button className="grid h-10 w-10 place-items-center md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="container-site flex flex-col gap-1 pb-4 md:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 font-medium hover:bg-muted">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-site flex flex-col gap-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-4xl font-extrabold">Codenes<span className="text-primary">.</span></p>
          <p className="mt-2 max-w-sm text-sm text-ink-muted">Sites, landing pages e cardápios digitais que vendem.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm md:items-end">
          <a href={WHATSAPP_QUICK_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold hover:text-primary">
            <MessageCircle size={16} /> WhatsApp (88) 99937-5708
          </a>
          <p className="text-ink-muted">© {new Date().getFullYear()} Codenes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_QUICK_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle size={26} />
    </a>
  );
}

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="border-b border-border">
      <div className="container-site py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] md:text-6xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function FinalCta({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="container-site flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="max-w-2xl text-3xl font-extrabold md:text-5xl">{title}</h2>
          <p className="mt-4 text-ink-muted">{text}</p>
        </div>
        <Link to="/contato" className="btn-primary shrink-0">Pedir orçamento</Link>
      </div>
    </section>
  );
}
