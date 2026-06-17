import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageShell, Divider } from "@/components/site-layout";
import pdfAsset from "@/assets/swiggy-case-study.pdf.asset.json";

export const Route = createFileRoute("/experiments/right-problem")({
  head: () => ({
    meta: [
      { title: "Finding the Right Problem Before Solving It — ProductiviTEA" },
      {
        name: "description",
        content:
          "A user research exercise that taught me why assumptions should never replace evidence.",
      },
      {
        property: "og:title",
        content: "Finding the Right Problem Before Solving It",
      },
      {
        property: "og:description",
        content:
          "A user research exercise that taught me why assumptions should never replace evidence.",
      },
    ],
  }),
  component: RightProblemPage,
});

function RightProblemPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pt-16 pb-20">
        <Link to="/experiments" className="text-sm text-coffee hover:underline">
          ← Experiments
        </Link>

        <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-coffee">
          <span>Case Study</span>
          <span className="h-px w-8 bg-coffee/40" />
          <span className="text-muted-foreground">User Research</span>
        </div>

        <h1 className="mt-4 text-balance text-4xl text-espresso md:text-5xl">
          Finding the Right Problem Before Solving It
        </h1>
        <p className="mt-5 text-pretty text-lg text-muted-foreground">
          A user research exercise that taught me why assumptions should never
          replace evidence.
        </p>

        <Divider />

        <Section eyebrow="00" title="Case Study Deck">
          <p>
            The full deck — research findings, persona, journey map, stakeholder
            analysis, and proposed solution.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-warm">
            <object
              data={pdfAsset.url}
              type="application/pdf"
              className="block h-[80vh] w-full"
              aria-label="Swiggy product case study by Kavish Kumar"
            >
              <div className="p-6 text-center text-muted-foreground">
                Your browser can't display PDFs inline.{" "}
                <a href={pdfAsset.url} className="text-coffee underline">
                  Open the deck in a new tab
                </a>
                .
              </div>
            </object>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 bg-beige/40 px-4 py-3 text-sm">
              <p className="font-hand text-base text-coffee">2 pages · PDF</p>
              <div className="flex gap-3">
                <a
                  href={pdfAsset.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-coffee/40 px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-coffee transition-colors hover:bg-coffee hover:text-primary-foreground"
                >
                  Open in new tab
                </a>
                <a
                  href={pdfAsset.url}
                  download
                  className="rounded-full bg-coffee px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section eyebrow="01" title="Context">
          <p>As part of a product thinking exercise, I was given a simple objective:</p>
          <blockquote className="border-l-2 border-coffee/50 pl-4 font-hand text-xl text-espresso">
            Identify a meaningful user pain point and propose a solution for it.
          </blockquote>
          <p>
            Rather than jumping straight into ideation, I wanted to understand
            what problem was actually worth solving.
          </p>
        </Section>

        <Section eyebrow="02" title="My Initial Hypothesis">
          <p>
            Living in a Tier-1 city, I've noticed a growing shift toward
            healthier lifestyles. People around me frequently discuss calorie
            counts, protein intake, healthier alternatives, and mindful eating
            habits.
          </p>
          <p>
            Based on these observations, I assumed that one of the biggest pain
            points in the restaurant discovery and dine-out space would be the
            lack of health-conscious food options and transparency around
            nutritional information.
          </p>
          <p>I felt fairly confident in this assumption.</p>
          <p className="font-hand text-xl text-coffee">
            But assumptions are not evidence.
          </p>
        </Section>

        <Section eyebrow="03" title="Research">
          <p>
            Before committing to a solution, I decided to validate my thinking
            through user research. I created a survey and collected responses
            from restaurant-goers to better understand their dining experiences,
            frustrations, and expectations.
          </p>
          <p>The goal wasn't to prove my hypothesis right.</p>
          <p className="font-hand text-xl text-coffee">
            The goal was to discover whether I was right at all.
          </p>
        </Section>

        <Section eyebrow="04" title="What Surprised Me">
          <p>The results challenged my assumptions.</p>
          <p>
            While health-conscious dining was certainly relevant to some users,
            it wasn't the dominant pain point. Instead, a completely different
            issue consistently surfaced:
          </p>
          <blockquote className="border-l-2 border-coffee/50 pl-4 text-espresso">
            Users were frustrated when restaurants refused to honor discounts
            shown on dining platforms or rejected app-based payment and offer
            flows.
          </blockquote>
          <p>This wasn't the problem I expected to find.</p>
          <p>But it was the problem users actually cared about.</p>
          <p>That moment completely shifted the direction of my case study.</p>
        </Section>

        <Section eyebrow="05" title="Reframing the Problem">
          <p>The insight wasn't about discounts.</p>
          <p className="font-hand text-xl text-coffee">It was about trust.</p>
          <p>
            Users weren't asking for larger offers. They were asking for
            confidence that the offers already displayed in the app would
            actually work when they reached the restaurant.
          </p>
          <p>
            Once I identified that trust gap, I decided to focus the rest of the
            exercise on solving it.
          </p>
        </Section>

        <Section eyebrow="06" title="From Research to Solution">
          <p>
            After validating the problem, I created a detailed user persona,
            mapped the user journey, analyzed stakeholder incentives, and
            designed a solution aimed at reducing friction between users,
            restaurants, and the platform.
          </p>
          <p>
            The complete research findings, persona development, solution
            framework, stakeholder analysis, and success metrics are included in
            the case study deck above.
          </p>
        </Section>

        <Section eyebrow="07" title="Key Takeaway">
          <p>
            The most valuable lesson from this exercise wasn't the solution I
            proposed.
          </p>
          <p>
            It was learning how quickly a convincing assumption can fall apart
            when confronted with real user data.
          </p>
          <p>
            As product managers, our job isn't to prove our ideas are correct.
          </p>
          <p className="font-hand text-xl text-coffee">
            Our job is to discover what is actually true.
          </p>
          <p>
            This project reinforced the importance of user research, problem
            validation, and evidence-driven decision making before investing
            time into building solutions.
          </p>
        </Section>

        <Divider />
        <p className="text-center font-hand text-xl text-coffee">
          end of pour ·
        </p>
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
