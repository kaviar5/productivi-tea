import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Divider } from "@/components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProductiviTEA — Brewing Better Products" },
      {
        name: "description",
        content:
          "A collection of product case studies, behavioural observations, and notes from my journey into product management.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-4 md:pt-28">
        <h1 className="text-balance text-5xl font-bold leading-tight text-espresso md:text-6xl">
          Brewing <em>Better</em> Products.
        </h1>
        <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
          Product case studies, behavioural observations, and notes from my
          journey into product management.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/case-studies"
            className="rounded-full bg-coffee px-6 py-3 text-sm text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5"
          >
            Read the case studies
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-border px-6 py-3 text-sm text-espresso transition-all hover:border-coffee/60"
          >
            About me
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 mt-16">
        <Divider />
      </div>

      {/* FEATURED CASE STUDY — ReClaim */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8 flex items-baseline justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-coffee">Featured Case Study</p>
          <Link to="/case-studies" className="text-sm text-coffee hover:underline">
            View all →
          </Link>
        </div>
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
          <h2 className="mt-4 text-2xl text-espresso transition-colors group-hover:text-coffee md:text-3xl">
            ReClaim: Reinvest in Yourself, Reclaim Your Life
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground">
            Exploring whether accountability, rather than productivity, is the
            real problem modern productivity apps fail to solve.
          </p>
          <p className="mt-5 font-hand text-lg text-coffee">Read the case study →</p>
        </Link>
      </section>

      {/* LATEST EXPERIMENT */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="mb-8 flex items-baseline justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-coffee">Latest Experiment</p>
          <Link to="/experiments" className="text-sm text-coffee hover:underline">
            All experiments →
          </Link>
        </div>
        <Link
          to="/experiments/magazine-websites"
          className="group block rounded-2xl border border-border bg-card p-8 shadow-warm transition-all hover:-translate-y-0.5 hover:border-coffee/40 hover:shadow-warm-lg"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs uppercase tracking-[0.16em] text-coffee">Design Experiment</span>
            <p className="text-xs text-muted-foreground">2025</p>
          </div>
          <h3 className="mt-3 text-xl text-espresso transition-colors group-hover:text-coffee md:text-2xl">
            What If Websites Were Designed Like a Magazine?
          </h3>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            A design experiment exploring whether editorial and magazine-inspired
            layouts could replace conventional web design patterns.
          </p>
          <p className="mt-5 font-hand text-lg text-coffee">Read the experiment →</p>
        </Link>
      </section>
    </PageShell>
  );
}
