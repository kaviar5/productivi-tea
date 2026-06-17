import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Divider } from "@/components/site-layout";

export const Route = createFileRoute("/case-studies/reclaim")({
  head: () => ({
    meta: [
      { title: "ReClaim: Reinvest in Yourself, Reclaim Your Life — ProductiviTEA" },
      {
        name: "description",
        content:
          "Exploring whether accountability, rather than productivity, is the real problem modern productivity apps fail to solve.",
      },
      {
        property: "og:title",
        content: "ReClaim: Reinvest in Yourself, Reclaim Your Life",
      },
      {
        property: "og:description",
        content:
          "Exploring whether accountability, rather than productivity, is the real problem modern productivity apps fail to solve.",
      },
    ],
  }),
  component: ReclaimPage,
});

const PITCH_PDF_URL = "/reclaim-pitch.pdf";

function ReclaimPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pt-16 pb-20">
        <Link to="/case-studies" className="text-sm text-coffee hover:underline">
          ← Case Studies
        </Link>

        <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-coffee">
          <span>Case Study</span>
          <span className="h-px w-8 bg-coffee/40" />
          <span className="text-muted-foreground">Product Concept</span>
        </div>

        <h1 className="mt-4 text-balance text-4xl text-espresso md:text-5xl">
          ReClaim: Reinvest in Yourself, Reclaim Your Life
        </h1>
        <p className="mt-5 text-pretty text-lg text-muted-foreground">
          Exploring whether accountability, rather than productivity, is the real
          problem modern productivity apps fail to solve.
        </p>

        <Divider />

        <Section eyebrow="00" title="Pitch Deck">
          <p>
            The complete concept — business model, market opportunity, SWOT analysis,
            revenue strategy, and product prototype.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-warm">
            <object
              data={PITCH_PDF_URL}
              type="application/pdf"
              className="block h-[80vh] w-full"
              aria-label="ReClaim pitch deck by Kavish Kumar"
            >
              <div className="p-6 text-center text-muted-foreground">
                Your browser can't display PDFs inline.{" "}
                <a href={PITCH_PDF_URL} className="text-coffee underline">
                  Open the deck in a new tab
                </a>
                .
              </div>
            </object>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 bg-beige/40 px-4 py-3 text-sm">
              <p className="font-hand text-base text-coffee">7 slides · PDF</p>
              <div className="flex gap-3">
                <a
                  href={PITCH_PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-coffee/40 px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-coffee transition-colors hover:bg-coffee hover:text-primary-foreground"
                >
                  Open in new tab
                </a>
                <a
                  href={PITCH_PDF_URL}
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
          <p>I've always been interested in productivity systems.</p>
          <p>Like many students, I've tried everything:</p>
          <div className="space-y-1 pl-4">
            {["To-do lists.", "Habit trackers.", "Pomodoro timers.", "Calendar apps.", "Study planners."].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coffee/60" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p>Most of them worked for a few days.</p>
          <p>Then motivation faded.</p>
          <p>
            Over time, I noticed the same pattern not only in myself but also among
            my friends in college.
          </p>
          <p>The issue wasn't that people didn't know what they needed to do.</p>
          <p className="font-hand text-xl text-coffee">Most people already knew.</p>
          <p>The issue was actually doing it consistently.</p>
        </Section>

        <Section eyebrow="02" title="The Observation">
          <p>
            While talking to friends and observing my own behavior, I noticed
            something interesting.
          </p>
          <p>People rarely fail because they lack information.</p>
          <p>They fail because there are no meaningful consequences for inaction.</p>
          <div className="space-y-1 pl-4">
            {["Missing a workout.", "Skipping a study session.", "Ignoring a personal goal."].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coffee/60" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p>Most productivity apps simply let users try again tomorrow.</p>
          <p className="font-hand text-xl text-coffee">
            The cost of failure is essentially zero.
          </p>
          <p>That made me wonder:</p>
          <blockquote className="border-l-2 border-coffee/50 pl-4 font-hand text-xl text-espresso">
            What if productivity wasn't a planning problem? What if it was an
            accountability problem?
          </blockquote>
        </Section>

        <Section eyebrow="03" title="The Hypothesis">
          <p>I formed a simple hypothesis:</p>
          <blockquote className="border-l-2 border-coffee/50 pl-4 text-espresso">
            People are naturally more motivated to avoid losing something than they
            are to gain something.
          </blockquote>
          <p>
            This idea comes from Behavioral Economics and Prospect Theory, where
            loss aversion is often a stronger motivator than rewards.
          </p>
          <p className="font-hand text-xl text-coffee">
            If users had something meaningful at stake, would they become more
            consistent in pursuing their goals?
          </p>
        </Section>

        <Section eyebrow="04" title="Problem Statement">
          <p>Most productivity apps focus on organisation.</p>
          <p>Very few focus on accountability.</p>
          <p>
            Users can create goals, schedules, reminders, and plans — but there is
            rarely a meaningful incentive to follow through.
          </p>
          <p>As a result, many productivity tools suffer from the same issue:</p>
          <div className="space-y-1 pl-4">
            {["High initial engagement.", "Low long-term commitment."].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coffee/60" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="05" title="The Idea">
          <p>This led me to conceptualise ReClaim.</p>
          <p className="font-hand text-xl text-coffee">
            A productivity platform built around monetary accountability.
          </p>
          <p>Instead of simply setting a goal, users invest money into it.</p>
          <p>If they successfully complete their commitment, they reclaim their investment.</p>
          <p>If they fail, they lose it.</p>
          <p>The objective wasn't to punish users.</p>
          <p>
            The objective was to introduce real accountability into digital
            productivity.
          </p>
          <p>
            The complete concept, business model, market opportunity analysis, SWOT
            analysis, revenue strategy, and product prototype are included in the
            pitch deck above.
          </p>
        </Section>

        <Section eyebrow="06" title="Product Thinking">
          <p>What fascinated me most about this idea wasn't the app itself.</p>
          <p>It was the psychology behind it.</p>
          <p>The concept combines multiple behavioural and product principles.</p>
        </Section>

        <Section eyebrow="06 · i" title="Loss Aversion">
          <p>
            People generally experience the pain of losing something more intensely
            than the pleasure of gaining something.
          </p>
          <p className="font-hand text-xl text-coffee">
            A ₹500 loss often feels more powerful than a ₹500 reward.
          </p>
        </Section>

        <Section eyebrow="06 · ii" title="Commitment Devices">
          <p>
            A commitment device is a mechanism that helps people follow through on
            actions they already want to take.
          </p>
          <p>
            By putting money at stake, users create a self-imposed commitment
            system.
          </p>
        </Section>

        <Section eyebrow="06 · iii" title="Accountability Loops">
          <p>Most productivity products focus on planning loops.</p>
          <p className="font-hand text-xl text-coffee">
            ReClaim focuses on accountability loops.
          </p>
          <p>The difference is subtle but important.</p>
          <p>Planning helps users decide what to do.</p>
          <p>Accountability helps users actually do it.</p>
        </Section>

        <Section eyebrow="06 · iv" title="Social Motivation">
          <p>
            The concept also explores group challenges and shared accountability.
          </p>
          <p>
            Research consistently shows that commitment becomes stronger when goals
            become visible to others.
          </p>
        </Section>

        <Section eyebrow="07" title="Beyond Productivity">
          <p>
            As I explored the idea further, I realised the concept could extend
            beyond studying or work.
          </p>
          <p>The same framework could potentially apply to:</p>
          <div className="space-y-1 pl-4">
            {[
              "Fitness goals",
              "Habit formation",
              "Skill development",
              "Addiction recovery",
              "Team accountability",
              "Educational programs",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coffee/60" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="font-hand text-xl text-coffee">
            This transformed the idea from a productivity app into a broader
            behavioural change platform.
          </p>
        </Section>

        <Section eyebrow="08" title="What I Learned">
          <p>
            This project taught me an important lesson about product discovery.
          </p>
          <p>Sometimes the most interesting opportunities don't come from asking:</p>
          <blockquote className="border-l-2 border-coffee/50 pl-4 text-espresso">
            "How do I help people become more productive?"
          </blockquote>
          <p>They come from asking:</p>
          <blockquote className="border-l-2 border-coffee/50 pl-4 font-hand text-xl text-espresso">
            "Why do people fail even when they already know what they should be
            doing?"
          </blockquote>
          <p>ReClaim was my attempt to explore that question.</p>
          <p>
            Whether the solution succeeds or fails, the exercise helped me think
            more deeply about behavioural design, incentives, motivation,
            accountability, and the psychology behind product adoption.
          </p>
          <p>And perhaps most importantly:</p>
          <p className="font-hand text-xl text-coffee">
            It taught me that solving the right problem is often more important than
            building the right feature.
          </p>
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
