import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site-layout";
import { caseStudies } from "@/content/data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — ProductiviTEA" },
      { name: "description", content: "Deep dives into product decisions: the problem, the analysis, the solution." },
      { property: "og:title", content: "Case Studies — ProductiviTEA" },
      { property: "og:description", content: "Deep dives into product decisions and the thinking behind them." },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="— the long brews"
        title="Case Studies"
        description="A few product decisions worth sitting with. Each one is structured as Problem → Analysis → Solution. Pour something warm."
      />
      <section className="mx-auto max-w-3xl space-y-6 px-6 pb-16">
        {caseStudies.map((cs) => (
          <Link
            key={cs.slug}
            to="/case-studies/$slug"
            params={{ slug: cs.slug }}
            className="group block rounded-2xl border border-border bg-card p-8 shadow-warm transition-all hover:-translate-y-0.5 hover:border-coffee/40 hover:shadow-warm-lg"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-coffee">
              <span>{cs.tag}</span>
              <span className="h-px w-8 bg-coffee/40" />
              <span className="text-muted-foreground">{cs.readingTime}</span>
              <span className="text-muted-foreground">· {cs.date}</span>
            </div>
            <h2 className="mt-4 text-balance text-2xl text-espresso transition-colors group-hover:text-coffee md:text-3xl">
              {cs.title}
            </h2>
            <p className="mt-3 text-pretty text-base text-muted-foreground">{cs.summary}</p>
            <p className="mt-5 font-hand text-lg text-coffee">Read →</p>
          </Link>
        ))}
      </section>
    </PageShell>
  );
}
