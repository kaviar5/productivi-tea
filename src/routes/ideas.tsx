import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site-layout";
import { ideas } from "@/content/data";

export const Route = createFileRoute("/ideas")({
  head: () => ({
    meta: [
      { title: "Ideas Vault — ProductiviTEA" },
      { name: "description", content: "A menu of startup ideas, product observations, and small experiments worth trying." },
      { property: "og:title", content: "Ideas Vault — ProductiviTEA" },
      { property: "og:description", content: "A menu of startup ideas, product observations, and small experiments worth trying." },
    ],
  }),
  component: IdeasPage,
});

function IdeasPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="— today's menu"
        title="Ideas Vault"
        description="A growing menu of product ideas and observations. Some half-baked, some over-steeped. Order what looks good."
      />
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea) => (
            <li
              key={idea.title}
              className="group relative rounded-2xl border border-dashed border-coffee/30 bg-cream p-6 paper-lines transition-all hover:-translate-y-1 hover:border-coffee/60 hover:shadow-warm"
            >
              <div className="flex items-center justify-between">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-coffee">
                  {idea.category}
                </p>
                <span
                  className="font-hand text-base text-coffee"
                  title={`Spice level: ${idea.spice}`}
                >
                  {"·".repeat(idea.spice)}
                </span>
              </div>
              <h2 className="mt-3 font-serif text-xl text-espresso">{idea.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{idea.pitch}</p>
              <span className="mt-5 inline-block font-hand text-sm text-coffee opacity-0 transition-opacity group-hover:opacity-100">
                worth a try →
              </span>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
