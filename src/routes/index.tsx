import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Divider } from "@/components/site-layout";
import { caseStudies, notes } from "@/content/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProductiviTEA — Brewing Better Products" },
      {
        name: "description",
        content:
          "A collection of product case studies, ideas, experiments, and notes from a quiet corner of product management.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = caseStudies[0];
  const recentNotes = notes.slice(0, 3);

  return (
    <PageShell>
      {/* HERO */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-4 md:pt-28">
        <p className="font-hand text-xl text-coffee md:text-2xl">
          a quiet corner for product thinking
        </p>
        <h1 className="mt-5 text-balance text-5xl font-bold leading-tight text-espresso md:text-6xl">
          Brewing <em>Better</em> Products.
        </h1>
        <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
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

      {/* FEATURED CASE STUDY */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8 flex items-baseline justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-coffee">Featured Case Study</p>
          <Link to="/case-studies" className="text-sm text-coffee hover:underline">
            View all →
          </Link>
        </div>
        <Link
          to="/case-studies/$slug"
          params={{ slug: featured.slug }}
          className="group block rounded-2xl border border-coffee/30 bg-beige/40 p-8 shadow-warm transition-all hover:-translate-y-0.5 hover:border-coffee/60 hover:shadow-warm-lg"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-coffee/60">
            <span>{featured.tag}</span>
            <span className="h-px w-8 bg-coffee/30" />
            <span>{featured.readingTime}</span>
          </div>
          <h2 className="mt-4 text-2xl text-espresso transition-colors group-hover:text-coffee md:text-3xl">
            {featured.title}
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground">
            {featured.summary}
          </p>
          <p className="mt-5 font-hand text-lg text-coffee">Read the story →</p>
        </Link>
      </section>

      {/* LATEST NOTES */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="mb-8 flex items-baseline justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-coffee">Latest Notes</p>
          <Link to="/notes" className="text-sm text-coffee hover:underline">All notes →</Link>
        </div>
        <div className="flex flex-col gap-5">
          {recentNotes.map((n) => (
            <div
              key={n.slug}
              className="rounded-2xl border border-border bg-card p-6 shadow-warm"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.16em] text-coffee">{n.category}</p>
                <p className="text-xs text-muted-foreground">{n.date}</p>
              </div>
              <h3 className="mt-3 text-lg text-espresso">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
              <p className="mt-4 font-hand text-base text-coffee">{n.source}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
