import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Divider } from "@/components/site-layout";
import { caseStudies, notes, ideas } from "@/content/data";

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

const marqueeItems = [
  "CASE STUDIES",
  "PRODUCT THINKING",
  "BEHAVIOURAL DESIGN",
  "UX OBSERVATIONS",
  "NOTES",
  "EXPERIMENTS",
];

function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden border-y border-coffee/20 bg-beige/70 py-4">
      <div className="marquee-track flex whitespace-nowrap">
        {loop.map((w, i) => (
          <span
            key={i}
            className="mx-8 text-sm uppercase tracking-[0.32em] text-coffee md:text-base"
          >
            {w} <span className="ml-8 text-coffee/50">·</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}

function Home() {
  const featured = caseStudies[0];
  const recentNotes = notes.slice(0, 3);
  const recentIdeas = ideas.slice(0, 3);

  return (
    <PageShell>
      {/* Editorial Hero */}
      <section className="relative flex min-h-[calc(100vh-72px)] flex-col">
        <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-6 py-16 md:px-12 md:py-24">
          <p className="font-hand text-2xl text-coffee md:text-3xl">
            — a quiet corner for product thinking
          </p>
          <h1 className="mt-6 font-serif font-semibold leading-[0.88] tracking-[-0.04em] text-espresso text-[clamp(3.5rem,15vw,16rem)]">
            Brewing <span className="italic font-light">Better</span>
            <br />
            Products.
          </h1>
          <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-md text-pretty text-base text-muted-foreground md:text-lg">
              A collection of product case studies, product ideas, experiments,
              and notes from my journey into product management.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/case-studies"
                className="rounded-full bg-coffee px-6 py-3 text-sm text-primary-foreground shadow-warm transition-all hover:-translate-y-0.5 hover:shadow-warm-lg"
              >
                Read the case studies
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-border bg-cream px-6 py-3 text-sm text-espresso transition-colors hover:bg-beige"
              >
                About me
              </Link>
            </div>
          </div>
        </div>
        <Marquee />
      </section>

      {/* Featured Case Study */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-10 flex items-baseline justify-between border-b border-coffee/20 pb-4">
          <div>
            <p className="font-hand text-lg text-coffee">— featured</p>
            <h2 className="mt-1 text-4xl text-espresso md:text-5xl">Case Study</h2>
          </div>
          <Link to="/case-studies" className="text-sm uppercase tracking-[0.18em] text-coffee hover:underline">
            View all →
          </Link>
        </div>
        <Link
          to="/case-studies/$slug"
          params={{ slug: featured.slug }}
          className="group block border-t border-espresso/10 py-10 transition-colors hover:border-coffee/60"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-coffee">
            <span>{featured.tag}</span>
            <span className="h-px w-8 bg-coffee/40" />
            <span className="text-muted-foreground">{featured.readingTime}</span>
          </div>
          <h3 className="mt-6 max-w-4xl text-balance font-serif text-5xl leading-[1.02] text-espresso transition-colors group-hover:text-coffee md:text-7xl">
            {featured.title}
          </h3>
          <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            {featured.summary}
          </p>
          <p className="mt-8 font-hand text-2xl text-coffee">Read the story →</p>
        </Link>
      </section>

      <Divider />

      {/* Two columns: Notes + Ideas */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="mb-6 flex items-baseline justify-between border-b border-coffee/20 pb-3">
            <h2 className="text-3xl text-espresso md:text-4xl">Latest Notes</h2>
            <Link to="/notes" className="text-xs uppercase tracking-[0.18em] text-coffee hover:underline">
              All →
            </Link>
          </div>
          <ul className="divide-y divide-border/70">
            {recentNotes.map((n) => (
              <li key={n.slug} className="group py-6 transition-colors">
                <p className="text-xs uppercase tracking-[0.22em] text-coffee">{n.category}</p>
                <h3 className="mt-2 font-serif text-2xl text-espresso transition-colors group-hover:text-coffee">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
                <p className="mt-3 font-hand text-base text-coffee">— {n.source}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-6 flex items-baseline justify-between border-b border-coffee/20 pb-3">
            <h2 className="text-3xl text-espresso md:text-4xl">Recent Ideas</h2>
            <Link to="/ideas" className="text-xs uppercase tracking-[0.18em] text-coffee hover:underline">
              Vault →
            </Link>
          </div>
          <ul className="space-y-4">
            {recentIdeas.map((idea) => (
              <li
                key={idea.title}
                className="rounded-xl border border-dashed border-coffee/30 bg-cream p-5 paper-lines transition-all hover:-translate-y-0.5 hover:border-coffee/60"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.22em] text-coffee">{idea.category}</p>
                  <span className="font-hand text-base text-coffee">{"·".repeat(idea.spice)}</span>
                </div>
                <h3 className="mt-2 font-serif text-xl text-espresso">{idea.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{idea.pitch}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
