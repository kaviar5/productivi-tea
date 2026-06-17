import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Divider } from "@/components/site-layout";

export const Route = createFileRoute("/case-studies/login-detail")({
  head: () => ({
    meta: [
      { title: "The Tiny Login Detail That Reduced a Decision — ProductiviTEA" },
      {
        name: "description",
        content:
          "How a small UI cue quietly reduced cognitive effort during authentication.",
      },
      {
        property: "og:title",
        content: "The Tiny Login Detail That Reduced a Decision",
      },
      {
        property: "og:description",
        content:
          "How a small UI cue quietly reduced cognitive effort during authentication.",
      },
    ],
  }),
  component: LoginDetailPage,
});

// TODO: Once Lovable credits are restored, upload the screenshot via Lovable
// and replace this base64 string with an asset import like:
// import loginScreenshot from "@/assets/login-screenshot.png.asset.json"
// then use loginScreenshot.url as the src below.
const loginScreenshotBase64 =
  "data:image/png;base64,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";

function LoginDetailPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pt-16 pb-20">
        <Link to="/case-studies" className="text-sm text-coffee hover:underline">
          ← Case Studies
        </Link>

        <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-coffee">
          <span>Case Study</span>
          <span className="h-px w-8 bg-coffee/40" />
          <span className="text-muted-foreground">UX Observation</span>
        </div>

        <h1 className="mt-4 text-balance text-4xl text-espresso md:text-5xl">
          The Tiny Login Detail That Reduced a Decision
        </h1>
        <p className="mt-5 text-pretty text-lg text-muted-foreground">
          How a small UI cue quietly reduced cognitive effort during authentication.
        </p>

        <Divider />

        <Section eyebrow="00" title="Observation">
          <p>
            While using Lovable, I came across what initially looked like a standard login screen.
          </p>
          <p>The usual options were present:</p>
          <ul className="space-y-1 pl-4">
            <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coffee/60" /><span>Continue with Google</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coffee/60" /><span>Continue with GitHub</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coffee/60" /><span>Continue with Apple</span></li>
          </ul>
          <p>At first glance, there was nothing particularly remarkable about the interface.</p>
          <p>
            Then I noticed a small label beside the Google option:
          </p>
          <p className="font-hand text-xl text-coffee">"Last used"</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-warm">
            <img
              src={loginScreenshotBase64}
              alt="Lovable login screen showing the 'Last used' label beside Google sign-in"
              className="block w-full object-cover"
            />
            <p className="border-t border-border/60 bg-beige/40 px-4 py-3 font-hand text-base text-coffee">
              The login screen that sparked this observation
            </p>
          </div>
        </Section>

        <Section eyebrow="01" title="Why It Caught My Attention">
          <p>The feature is almost invisible.</p>
          <p>Yet it solves a surprisingly common problem.</p>
          <p>
            Many users today have multiple accounts spread across different providers. For example,
            someone might have:
          </p>
          <ul className="space-y-1 pl-4">
            <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coffee/60" /><span>Multiple Google accounts</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coffee/60" /><span>Multiple GitHub accounts</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coffee/60" /><span>Different work and personal identities</span></li>
          </ul>
          <p>Every login screen creates a tiny decision:</p>
          <blockquote className="border-l-2 border-coffee/50 pl-4 font-hand text-xl text-espresso">
            "Which method did I use last time?"
          </blockquote>
          <p>The cost of this decision is small.</p>
          <p>But it exists.</p>
          <p>
            Lovable removes that moment entirely. Instead of asking me to remember, the interface
            remembers for me.
          </p>
        </Section>

        <Section eyebrow="02" title="Product Thinking Behind It">
          <p>What impressed me wasn't the label itself.</p>
          <p>It was the understanding of user psychology behind it.</p>
          <p>The design leverages several established product and UX principles.</p>
        </Section>

        <Section eyebrow="02 · i" title="Recognition Over Recall">
          <p>
            One of Nielsen's usability heuristics states that systems should minimise the user's
            memory load.
          </p>
          <p>
            Rather than forcing users to recall how they previously authenticated, the interface
            surfaces that information directly.
          </p>
          <p className="font-hand text-xl text-coffee">
            The user recognises the correct option instead of remembering it.
          </p>
        </Section>

        <Section eyebrow="02 · ii" title="Cognitive Load Reduction">
          <p>Every decision consumes mental effort.</p>
          <p>Individually, these decisions are insignificant.</p>
          <p>Collectively, they create friction.</p>
          <p>
            By highlighting the previously used authentication method, the product removes one
            unnecessary decision from the login flow.
          </p>
        </Section>

        <Section eyebrow="02 · iii" title="Hick's Law">
          <p>
            Hick's Law states that decision time increases as the number of available choices
            increases.
          </p>
          <p>The login screen technically presents three authentication options.</p>
          <p>
            However, by highlighting one as the most likely choice, the interface subtly guides
            users toward a decision without removing freedom.
          </p>
          <p className="font-hand text-xl text-coffee">
            The perceived complexity becomes lower than the actual complexity.
          </p>
        </Section>

        <Section eyebrow="02 · iv" title="Progressive Guidance">
          <p>The product doesn't force a choice.</p>
          <p>It simply provides context.</p>
          <p>
            This is a good example of guidance rather than control — the interface nudges without
            restricting.
          </p>
        </Section>

        <Section eyebrow="02 · v" title="Reducing Interaction Cost">
          <p>
            A common product principle is that the fastest interaction is the one that never has to
            happen.
          </p>
          <p>
            The "Last Used" indicator reduces the likelihood that users pause, think, or select the
            wrong provider.
          </p>
          <p className="font-hand text-xl text-coffee">
            The savings are measured in seconds, but they occur every time a user returns.
          </p>
        </Section>

        <Section eyebrow="03" title="Why This Matters">
          <p>Most users will never consciously notice this feature.</p>
          <p className="font-hand text-xl text-coffee">And that's precisely why I like it.</p>
          <p>
            Great product experiences are often created through dozens of tiny decisions that
            individually feel insignificant but collectively make a product feel effortless.
          </p>
          <p>Nobody signs up for a product because of a "Last Used" label.</p>
          <p>
            But details like this contribute to a feeling every product team wants:
          </p>
          <blockquote className="border-l-2 border-coffee/50 pl-4 font-hand text-xl text-espresso">
            "It just works."
          </blockquote>
        </Section>

        <Section eyebrow="04" title="Takeaway">
          <p>
            This observation reinforced a lesson I keep seeing across great products:
          </p>
          <p className="font-hand text-xl text-coffee">
            Users shouldn't spend mental energy on things the system already knows.
          </p>
          <p>
            Sometimes the best product improvements aren't new features. They're small reductions
            in cognitive effort that make an experience feel smoother without users ever realising
            why.
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
