import { createFileRoute, Link } from "@tanstack/react-router";
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

function NotesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="— marginalia"
        title="Product Notes"
        description="Things I've underlined, frameworks I keep returning to, and the slow journal of learning the craft."
      />
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <ul className="flex flex-col gap-5">
          {notes.map((n) => (
            <li key={n.slug}>
              <Link
                to="/notes/21-ux-laws"
                className="group block rounded-2xl border border-coffee/30 bg-beige/40 p-8 shadow-warm transition-all hover:-translate-y-0.5 hover:border-coffee/60 hover:shadow-warm-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-coffee px-3 py-1 text-xs uppercase tracking-[0.14em] text-primary-foreground">
                    {n.category}
                  </span>
                  <p className="text-xs text-muted-foreground">{n.date}</p>
                </div>
                <h2 className="mt-4 text-2xl text-espresso transition-colors group-hover:text-coffee md:text-3xl">
                  {n.title}
                </h2>
                <p className="mt-3 text-pretty text-base text-muted-foreground">
                  {n.excerpt}
                </p>
                <p className="mt-5 font-hand text-lg text-coffee">Read the note →</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
