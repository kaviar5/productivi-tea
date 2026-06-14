import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, Divider } from "@/components/site-layout";
import resume from "@/assets/kavish-resume.pdf.asset.json";

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

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="— a short biography"
        title="About"
        description="Hi, I'm Kavish. I'm a product enthusiast exploring the intersection of technology, business, and human behavior. ProductiviTEA is my digital notebook; a place where I document product case studies, startup ideas, experiments, and lessons from books, products, and people."
      />

      <section className="mx-auto max-w-2xl space-y-6 px-6 text-pretty text-lg leading-relaxed text-foreground/85">
        <p>
          My path into product has been anything but linear. I've worked on 6G communication
          research, built startup concepts, led student communities, and explored the intersection
          of technology, business, and human behavior.
        </p>
        <p>
          What excites me most is understanding why people behave the way they do, identifying
          meaningful problems, and designing solutions that create value. I'm particularly interested
          in product strategy, user research, product analytics, and early-stage startups.
        </p>
        <p>
          Through ProductiviTEA, I share product teardowns, case studies, Figma prototypes, startup
          concepts, and observations gathered from everyday life. I treat it as a public archive of
          my thinking; a place to learn, experiment, and improve over time.
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-6 pt-10">
        <blockquote className="border-l-2 border-coffee/30 pl-5 text-base italic leading-relaxed text-foreground/70">
          "Jack of all trades, master of none, though oftentimes better than master of one."
          <span className="mt-2 block text-sm not-italic text-muted-foreground">
            Apparently the majority of the people don't know the whole quote, and that's why I like
            it even more now.
          </span>
        </blockquote>
      </section>

      <Divider />

      <section className="mx-auto max-w-2xl px-6 pb-8">
        <h2 className="text-2xl text-espresso md:text-3xl">Resume</h2>
        <p className="mt-3 text-base text-muted-foreground">
          A snapshot of my experience across product, research, startups, and leadership.
        </p>
        <a
          href={resume.url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center rounded-full bg-coffee px-8 py-3 text-sm font-medium text-primary-foreground shadow-warm transition-all hover:-translate-y-0.5 hover:shadow-warm-lg"
        >
          View Resume
        </a>
      </section>

      <Divider />

      <section className="mx-auto max-w-2xl px-6 pb-20">
        <h2 className="text-2xl text-espresso md:text-3xl">Say hello</h2>
        <p className="mt-3 text-base text-muted-foreground">
          Always happy to discuss products, startups, technology, research, or ambitious ideas.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:kavishkumar.m@gmail.com"
            className="rounded-full bg-coffee px-6 py-3 text-sm text-primary-foreground shadow-warm transition-all hover:-translate-y-0.5 hover:shadow-warm-lg"
          >
            kavishkumar.m@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/kavish-kumar-m-0a6a58289/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-cream px-6 py-3 text-sm text-espresso transition-colors hover:bg-beige"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </PageShell>
  );
}
