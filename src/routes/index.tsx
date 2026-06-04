import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Divider } from "@/components/site-layout";
import coffeeCup from "@/assets/coffee-cup.jpg";
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

function Home() {
  const featured = caseStudies[0];
  const recentNotes = notes.slice(0, 3);
  const recentIdeas = ideas.slice(0, 3);

  return (
    <PageShell>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-16 pb-12 md:grid-cols-[1.2fr_1fr] md:pt-24">
        <div>
          <p className="font-hand text-2xl text-coffee">— a quiet corner for product thinking</p>
          <h1 className="mt-3 text-balance text-6xl leading-[1.05] text-espresso md:text-7xl">
            Brewing <span className="italic">Better</span> Products.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
            A collection of product case studies, product ideas, experiments, and notes
            from my journey into product management.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-full bg-beige/40 blur-3xl" />
          <img
            src={coffeeCup}
            alt="A hand-drawn cup of coffee with rising steam"
            width={1024}
            height={1024}
            className="mx-auto w-full max-w-sm"
          />
        </div>
      </section>

      <Divider />

      {/* Featured Case Study */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-3xl text-espresso md:text-4xl">Featured Case Study</h2>
          <Link to="/case-studies" className="text-sm text-coffee hover:underline">
            View all →
          </Link>
        </div>
        <Link
          to="/case-studies/$slug"
          params={{ slug: featured.slug }}
          className="group block overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-warm transition-all hover:-translate-y-0.5 hover:shadow-warm-lg md:p-12"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-coffee">
            <span>{featured.tag}</span>
            <span className="h-px w-8 bg-coffee/40" />
            <span className="text-muted-foreground">{featured.readingTime}</span>
          </div>
          <h3 className="mt-5 max-w-3xl text-balance text-3xl text-espresso transition-colors group-hover:text-coffee md:text-4xl">
            {featured.title}
          </h3>
          <p className="mt-4 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            {featured.summary}
          </p>
          <p className="mt-6 font-hand text-xl text-coffee">Read the story →</p>
        </Link>
      </section>

      {/* Two columns: Notes + Ideas */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2">
        <div>
          <div className="mb-5 flex items-baseline justify-between">
            <h2 className="text-2xl text-espresso md:text-3xl">Latest Notes</h2>
            <Link to="/notes" className="text-sm text-coffee hover:underline">All notes →</Link>
          </div>
          <ul className="space-y-4">
            {recentNotes.map((n) => (
              <li
                key={n.slug}
                className="rounded-xl border border-border bg-card p-5 shadow-warm transition-all hover:-translate-y-0.5 hover:border-coffee/40"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-coffee">{n.category}</p>
                <h3 className="mt-2 font-serif text-lg text-espresso">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
                <p className="mt-3 font-hand text-base text-coffee">— {n.source}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-5 flex items-baseline justify-between">
            <h2 className="text-2xl text-espresso md:text-3xl">Recent Ideas</h2>
            <Link to="/ideas" className="text-sm text-coffee hover:underline">The vault →</Link>
          </div>
          <ul className="space-y-4">
            {recentIdeas.map((idea) => (
              <li
                key={idea.title}
                className="rounded-xl border border-dashed border-coffee/30 bg-cream p-5 paper-lines transition-all hover:-translate-y-0.5 hover:border-coffee/60"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.16em] text-coffee">{idea.category}</p>
                  <span className="font-hand text-base text-coffee">{"·".repeat(idea.spice)}</span>
                </div>
                <h3 className="mt-2 font-serif text-lg text-espresso">{idea.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{idea.pitch}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
