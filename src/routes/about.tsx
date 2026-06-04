import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, Divider } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ProductiviTEA" },
      { name: "description", content: "Personal story, resume, and how to get in touch." },
      { property: "og:title", content: "About — ProductiviTEA" },
      { property: "og:description", content: "Personal story, resume, and how to get in touch." },
    ],
  }),
  component: AboutPage,
});

const resume = [
  {
    when: "2023 — Present",
    role: "Senior Product Manager",
    org: "A reading app you've probably heard of",
    note: "Leading discovery, onboarding, and the quiet work of making things simpler.",
  },
  {
    when: "2021 — 2023",
    role: "Product Manager",
    org: "A small B2B SaaS",
    note: "Owned analytics and pricing. Learned to write before I built.",
  },
  {
    when: "2019 — 2021",
    role: "Associate PM",
    org: "Rotational program",
    note: "Three teams, three industries. One conclusion: users always know more than the deck.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="— a short biography"
        title="About"
        description="Hi, I'm a product manager who thinks best with a notebook open and a warm cup nearby. This site is where I keep my drafts."
      />

      <section className="mx-auto max-w-2xl space-y-6 px-6 text-pretty text-lg leading-relaxed text-foreground/85">
        <p>
          I came to product management the long way — through writing, support, and a brief
          detour into design. What stuck across all of it was a love for the in-between:
          listening to a customer in the morning and shaping a small decision by the afternoon.
        </p>
        <p>
          I believe the best products feel inevitable in hindsight and uncertain in the making.
          The work is mostly listening, mostly subtracting, and occasionally — when the room is
          quiet enough — saying the obvious thing first.
        </p>
        <p>
          Outside of work I read a lot of fiction, walk to think, and visit too many cafés in
          search of the perfect oat cortado.
        </p>
      </section>

      <Divider />

      <section className="mx-auto max-w-2xl px-6 pb-8">
        <h2 className="text-2xl text-espresso md:text-3xl">Resume</h2>
        <ol className="mt-6 space-y-6">
          {resume.map((r) => (
            <li
              key={r.when}
              className="grid grid-cols-1 gap-2 border-l-2 border-coffee/40 pl-5 md:grid-cols-[180px_1fr]"
            >
              <p className="font-hand text-lg text-coffee">{r.when}</p>
              <div>
                <p className="font-serif text-lg text-espresso">{r.role}</p>
                <p className="text-sm text-muted-foreground">{r.org}</p>
                <p className="mt-1 text-sm text-foreground/80">{r.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <Divider />

      <section className="mx-auto max-w-2xl px-6 pb-20">
        <h2 className="text-2xl text-espresso md:text-3xl">Say hello</h2>
        <p className="mt-3 text-base text-muted-foreground">
          Open to thoughtful conversation, slow correspondence, and occasional collaboration.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:hello@productivitea.example"
            className="rounded-full bg-coffee px-6 py-3 text-sm text-primary-foreground shadow-warm transition-all hover:-translate-y-0.5 hover:shadow-warm-lg"
          >
            hello@productivitea.example
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-cream px-6 py-3 text-sm text-espresso transition-colors hover:bg-beige"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-cream px-6 py-3 text-sm text-espresso transition-colors hover:bg-beige"
          >
            Twitter / X
          </a>
        </div>
      </section>
    </PageShell>
  );
}
