import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site-layout";
import { caseStudies } from "@/content/data";

export const Route = createFileRoute("/case-studies/")({
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
        <Link
          to="/case-studies/reclaim"
          className="group block rounded-2xl border border-coffee/30 bg-beige/40 p-8 shadow-warm transition-all hover:-translate-y-0.5 hover:border-coffee/60 hover:shadow-warm-lg"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-coffee px-3 py-1 text-xs uppercase tracking-[0.14em] text-primary-foreground">
              Featured · Product Concept
            </span>
            <p className="text-xs text-muted-foreground">2025</p>
          </div>
          <h2 className="mt-4 text-balance text-2xl text-espresso transition-colors group-hover:text-coffee md:text-3xl">
            ReClaim: Reinvest in Yourself, Reclaim Your Life
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground">
            Exploring whether accountability, rather than productivity, is the real problem modern productivity apps fail to solve.
          </p>
          <p className="mt-5 font-hand text-lg text-coffee">Read the case study →</p>
        </Link>
        <Link
          to="/case-studies/login-detail"
          className="group block rounded-2xl border border-coffee/30 bg-beige/40 p-8 shadow-warm transition-all hover:-translate-y-0.5 hover:border-coffee/60 hover:shadow-warm-lg"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-coffee px-3 py-1 text-xs uppercase tracking-[0.14em] text-primary-foreground">
              Featured · UX Observation
            </span>
            <p className="text-xs text-muted-foreground">2025</p>
          </div>
          <h2 className="mt-4 text-balance text-2xl text-espresso transition-colors group-hover:text-coffee md:text-3xl">
            The Tiny Login Detail That Reduced a Decision
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground">
            How a small UI cue quietly reduced cognitive effort during authentication.
          </p>
          <p className="mt-5 font-hand text-lg text-coffee">Read the case study →</p>
        </Link>
        <Link
          to="/experiments/right-problem"
          className="group block rounded-2xl border border-coffee/30 bg-beige/40 p-8 shadow-warm transition-all hover:-translate-y-0.5 hover:border-coffee/60 hover:shadow-warm-lg"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-coffee px-3 py-1 text-xs uppercase tracking-[0.14em] text-primary-foreground">
              Featured · Case Study
            </span>
            <p className="text-xs text-muted-foreground">2025</p>
          </div>
          <h2 className="mt-4 text-balance text-2xl text-espresso transition-colors group-hover:text-coffee md:text-3xl">
            Finding the Right Problem Before Solving It
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground">
            A user research exercise that taught me why assumptions should never replace evidence.
          </p>
          <p className="mt-5 font-hand text-lg text-coffee">Read the case study →</p>
        </Link>
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
