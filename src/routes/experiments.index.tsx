import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site-layout";
import { experiments } from "@/content/data";

export const Route = createFileRoute("/experiments/")({
  head: () => ({
    meta: [
      { title: "Experiments — ProductiviTEA" },
      { name: "description", content: "Hypotheses, results, and what they taught me about building products." },
      { property: "og:title", content: "Experiments — ProductiviTEA" },
      { property: "og:description", content: "Hypotheses, results, and what they taught me about building products." },
    ],
  }),
  component: ExperimentsPage,
});

function statusColor(s: string) {
  if (s === "Shipped") return "text-coffee bg-beige";
  if (s === "Killed") return "text-muted-foreground bg-cream";
  return "text-espresso bg-beige/60";
}

function ExperimentsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="— the bench"
        title="Experiments"
        description="What I tried, what happened, and what I learned. Some shipped, some were quietly poured out."
      />
      <section className="mx-auto max-w-3xl space-y-6 px-6 pb-16">
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
            A user research exercise that taught me why assumptions should never
            replace evidence.
          </p>
          <p className="mt-5 font-hand text-lg text-coffee">Read the case study →</p>
        </Link>
        <Link
          to="/experiments/magazine-websites"
          className="group block rounded-2xl border border-coffee/30 bg-beige/40 p-8 shadow-warm transition-all hover:-translate-y-0.5 hover:border-coffee/60 hover:shadow-warm-lg"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-coffee px-3 py-1 text-xs uppercase tracking-[0.14em] text-primary-foreground">
              Featured · Design
            </span>
            <p className="text-xs text-muted-foreground">2025</p>
          </div>
          <h2 className="mt-4 text-balance text-2xl text-espresso transition-colors group-hover:text-coffee md:text-3xl">
            What If Websites Were Designed Like a Magazine?
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground">
            A design experiment exploring whether editorial and magazine-inspired layouts could
            replace conventional web design patterns.
          </p>
          <p className="mt-5 font-hand text-lg text-coffee">Read the experiment →</p>
        </Link>

        {experiments.map((e) => (
          <article
            key={e.title}
            className="rounded-2xl border border-border bg-card p-8 shadow-warm transition-all hover:-translate-y-0.5 hover:shadow-warm-lg"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.14em] ${statusColor(
                  e.status,
                )}`}
              >
                {e.status}
              </span>
              <p className="text-xs text-muted-foreground">{e.date}</p>
            </div>
            <h2 className="mt-4 text-balance text-2xl text-espresso md:text-3xl">{e.title}</h2>

            <Row label="Hypothesis">{e.hypothesis}</Row>
            <Row label="Result">{e.result}</Row>
            <Row label="Insight" hand>
              {e.insight}
            </Row>
          </article>
        ))}
      </section>
    </PageShell>
  );
}

function Row({
  label,
  children,
  hand,
}: {
  label: string;
  children: React.ReactNode;
  hand?: boolean;
}) {
  return (
    <div className="mt-5 grid grid-cols-[88px_1fr] gap-4 border-t border-border/60 pt-4">
      <p className="text-xs uppercase tracking-[0.16em] text-coffee">{label}</p>
      <p
        className={
          hand
            ? "font-hand text-xl leading-snug text-espresso"
            : "text-pretty text-base text-foreground/85"
        }
      >
        {children}
      </p>
    </div>
  );
}
