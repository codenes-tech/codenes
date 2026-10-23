import { Plus } from "lucide-react";

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((f) => (
        <details key={f.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-bold md:text-xl">
            {f.q}
            <Plus className="shrink-0 text-primary transition-transform group-open:rotate-45" />
          </summary>
          <p className="mt-4 max-w-3xl text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
