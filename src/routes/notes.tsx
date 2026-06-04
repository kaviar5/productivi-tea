import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site-layout";
import { notes } from "@/content/data";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "Product Notes — ProductiviTEA" },
      { name: "description", content: "Book notes, frameworks, lessons, and a quiet learning journal." },
      { property: "og:title", content: "Product Notes — ProductiviTEA" },
      { property: "og:description", content: "Book notes, frameworks, lessons, and a quiet learning journal." },
    ],
  }),
  component: NotesPage,
});

const categories = ["All", "Book", "Framework", "Lesson", "Journal"] as const;

function NotesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="— marginalia"
        title="Product Notes"
        description="Things I've underlined, frameworks I keep returning to, and the slow journal of learning the craft."
      />
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-cream px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-coffee"
            >
              {c}
            </span>
          ))}
        </div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {notes.map((n) => (
            <li
              key={n.slug}
              className="rounded-xl border border-border bg-card p-6 shadow-warm transition-all hover:-translate-y-0.5 hover:border-coffee/40 hover:shadow-warm-lg"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.16em] text-coffee">{n.category}</p>
                <p className="text-xs text-muted-foreground">{n.date}</p>
              </div>
              <h2 className="mt-3 font-serif text-xl text-espresso">{n.title}</h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                {n.excerpt}
              </p>
              <p className="mt-4 font-hand text-base text-coffee">— {n.source}</p>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
