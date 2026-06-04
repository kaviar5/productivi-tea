import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Divider } from "@/components/site-layout";
import { caseStudies } from "@/content/data";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.title} — ProductiviTEA` },
            { name: "description", content: loaderData.summary },
            { property: "og:title", content: loaderData.title },
            { property: "og:description", content: loaderData.summary },
          ],
        }
      : {},
  component: CaseStudyPage,
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-xl px-6 py-24 text-center">
        <h1 className="text-3xl text-espresso">This case study is still brewing.</h1>
        <Link to="/case-studies" className="mt-6 inline-block text-coffee hover:underline">
          ← Back to case studies
        </Link>
      </div>
    </PageShell>
  ),
});

function CaseStudyPage() {
  const cs = Route.useLoaderData();

  return (
    <PageShell>
      <article className="mx-auto max-w-2xl px-6 pt-16 pb-20">
        <Link to="/case-studies" className="text-sm text-coffee hover:underline">
          ← Case studies
        </Link>
        <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-coffee">
          <span>{cs.tag}</span>
          <span className="h-px w-8 bg-coffee/40" />
          <span className="text-muted-foreground">{cs.readingTime}</span>
          <span className="text-muted-foreground">· {cs.date}</span>
        </div>
        <h1 className="mt-4 text-balance text-4xl text-espresso md:text-5xl">{cs.title}</h1>
        <p className="mt-5 text-pretty text-lg text-muted-foreground">{cs.summary}</p>
        <p className="mt-3 font-hand text-lg text-coffee">Role: {cs.role}</p>

        <Divider />

        <Section eyebrow="01" title="Problem">
          <p>{cs.problem}</p>
        </Section>

        <Section eyebrow="02" title="Analysis">
          <ul className="space-y-3">
            {cs.analysis.map((a, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coffee" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="03" title="Solution">
          <ul className="space-y-3">
            {cs.solution.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coffee" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="04" title="Outcome">
          <p>{cs.outcome}</p>
        </Section>

        <Divider />
        <p className="text-center font-hand text-xl text-coffee">end of pour ·</p>
      </article>
    </PageShell>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <p className="font-hand text-lg text-coffee">{eyebrow}</p>
      <h2 className="mt-1 text-2xl text-espresso md:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 text-pretty text-base leading-relaxed text-foreground/85 md:text-lg">
        {children}
      </div>
    </section>
  );
}
