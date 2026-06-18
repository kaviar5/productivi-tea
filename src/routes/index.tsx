import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-layout";
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
      { property: "og:title", content: "ProductiviTEA — Brewing Better Products" },
      {
        property: "og:description",
        content:
          "Case studies, ideas, experiments, and notes from my journey into product management.",
      },
    ],
  }),
  component: Home,
});

const MARQUEE_TEXT = [
  "CASE STUDIES", "·", "PRODUCT THINKING", "·",
  "BEHAVIOURAL DESIGN", "·", "UX OBSERVATIONS", "·",
  "NOTES", "·", "EXPERIMENTS", "·",
  "CASE STUDIES", "·", "PRODUCT THINKING", "·",
  "BEHAVIOURAL DESIGN", "·", "UX OBSERVATIONS", "·",
  "NOTES", "·", "EXPERIMENTS", "·",
];

function Home() {
  const featured = caseStudies[0];
  const recentNotes = notes.slice(0, 3);

  return (
    <PageShell>
      {/* HERO: dark full-bleed */}
      <section className="relative flex min-h-[92vh] flex-col justify-between overflow-hidden bg-espresso px-6 pb-0 pt-16 md:px-14 md:pt-20">
        <p className="font-hand text-xl text-coffee/70 md:text-2xl">
          a quiet corner for product thinking
        </p>
        <div className="mt-10 md:mt-0 md:self-center w-full">
          <h1 className="font-serif font-black leading-[0.9] tracking-tight text-[clamp(3.5rem,10vw,8.5rem)] text-cream">
            Brewing<br />
            <span className="italic font-black text-coffee">Better</span><br />
            Products.
          </h1>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-sm text-base text-cream/50 md:text-lg">
              Product case studies, behavioural observations,
              and notes from my journey into product management.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/case-studies"
                className="rounded-full bg-coffee px-6 py-3 text-sm text-espresso font-medium transition-all hover:bg-coffee/90 hover:-translate-y-0.5"
              >
                Read the case studies
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-cream/20 px-6 py-3 text-sm text-cream/70 transition-all hover:border-cream/40 hover:text-cream"
              >
                About me
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 overflow-hidden border-t border-cream/10 py-3">
          <div className="flex animate-marquee whitespace-nowrap gap-6 w-max">
            {MARQUEE_TEXT.map((word, i) => (
              <span
                key={i}
                className={`text-xs uppercase tracking-[0.22em] ${
                  word === "·" ? "text-coffee/40" : "text-cream/30"
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24 md:px-14">
        <div className="mb-8 flex items-baseline justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-coffee">Featured Case Study</p>
          <Link to="/case-studies" className="text-sm text-coffee hover:underline">
            View all →
          </Link>
        </div>
        <Link
          to="/case-studies/$slug"
          params={{ slug: featured.slug }}
          className="group block"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-coffee/60">
            <span>{featured.tag}</span>
            <span className="h-px w-8 bg-coffee/30" />
            <span>{featured.readingTime}</span>
          </div>
          <h2 className="mt-4 font-serif text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight text-espresso transition-colors group-hover:text-coffee">
            {featured.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            {featured.summary}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="font-hand text-xl text-coffee">Read the story</span>
            <span className="h-px w-12 bg-coffee/40 transition-all group-hover:w-20" />
          </div>
        </Link>
      </section>

      <div className="mx-auto max-w-5xl px-6 md:px-14">
        <div className="h-px w-full bg-border" />
      </div>

      {/* LATEST NOTES */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20 md:px-14">
        <div className="mb-10 flex items-baseline justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-coffee">Latest Notes</p>
          <Link to="/notes" className="text-sm text-coffee hover:underline">All notes →</Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {recentNotes.map((n) => (
            <div
              key={n.slug}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-warm transition-all hover:-translate-y-0.5 hover:border-coffee/40"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-coffee">{n.category}</p>
                <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-espresso">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
              </div>
              <p className="mt-5 font-hand text-base text-coffee">{n.source}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
