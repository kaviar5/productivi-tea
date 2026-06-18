import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Divider } from "@/components/site-layout";

export const Route = createFileRoute("/case-studies/pulse")({
  head: () => ({
    meta: [
      { title: "The Pulse Paradox  | ProductiviTEA" },
      {
        name: "description",
        content:
          "How a ₹1 candy hit ₹300 Crores in two years exploring dopamine, pain loops, and cultural memory.",
      },
      { property: "og:title", content: "The Pulse Paradox" },
      {
        property: "og:description",
        content:
          "How a ₹1 candy hit ₹300 Crores in two years exploring dopamine, pain loops, and cultural memory.",
      },
    ],
  }),
  component: PulsePage,
});

function PulsePage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pt-16 pb-20">
        <Link to="/case-studies" className="text-sm text-coffee hover:underline">
          ← Case Studies
        </Link>

        <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-coffee">
          <span>Case Study</span>
          <span className="h-px w-8 bg-coffee/40" />
          <span className="text-muted-foreground">Behavioural Product Thinking</span>
        </div>

        <h1 className="mt-4 text-balance text-4xl text-espresso md:text-5xl">
          The Pulse Paradox
        </h1>
        <p className="mt-5 text-pretty text-lg text-muted-foreground">
          How a ₹1 candy hit ₹300 Crores in two years exploring dopamine, pain loops, and cultural memory.
        </p>

        <Divider />

        {/* ── SECTION 00 ── */}
        <Section eyebrow="00" title="The Anomaly">
          <p>In 2015, DS Group launched Pulse.</p>
          <p>
            A raw-mango hard candy with a spicy salted centre. Priced at ₹1.
          </p>
          <p>Nothing about it looked like a breakout product on paper.</p>
          <p>
            The candy market was crowded. Margins were thin. Distribution was
            already dominated by legacy brands.
          </p>
          <p>Within 8 months, Pulse crossed ₹100 Crores in revenue.</p>
          <p className="font-hand text-xl text-coffee">
            Within 2 years: ₹300 Crores.
          </p>
          <p>
            Most people called it luck. A viral moment. Right product, right
            time.
          </p>
          <p>
            But when I looked closer, I saw something more deliberate. Pulse
            didn't succeed because it was a good candy.
          </p>
          <p className="font-hand text-xl text-coffee">
            It succeeded because it was a well-engineered neurological
            experience.
          </p>

        </Section>

        {/* ── SECTION 01 ── */}
        <Section eyebrow="01" title="What I Was Trying to Understand">
          <p>
            I didn't come across Pulse as a marketer. I came across it as
            someone who eats too many of them and couldn't explain why.
          </p>
          <p>
            That felt worth investigating. Because most products that become
            habits don't do so by accident.
          </p>
          <p>
            So I started asking a different question . Not "why did Pulse sell well?" but:
          </p>
          <blockquote className="border-l-2 border-coffee/50 pl-4 font-hand text-xl text-espresso">
            "Why does eating one make you immediately want another?"
          </blockquote>
          <p>
            That question led me into behavioural neuroscience. And what I found
            was more interesting than any marketing case study.
          </p>
        </Section>

        {/* ── SECTION 02 ── */}
        <Section eyebrow="02" title="Hack #1: Reward Prediction Error">
          <p>The brain is a prediction machine.</p>
          <p>
            Before you eat anything, your brain makes a quiet forecast about
            what's coming based on appearance, smell, and memory.
          </p>
          <p>
            When you pick up Pulse, the brain sees a small green candy and
            predicts: sweet.
          </p>
          <p>Then the centre hits.</p>
          <p className="font-hand text-xl text-coffee">
            Salty. Spicy. Completely unexpected.
          </p>
          <p>
            This gap between expectation and reality is called a{" "}
            <span className="text-espresso font-medium">
              Reward Prediction Error
            </span>
            . When the outcome exceeds what the brain predicted, it releases a
            disproportionate dopamine spike , tagging the experience as
            important. Worth repeating.
          </p>
          <p>
            Pulse didn't just taste interesting. It triggered a neurological
            reward for being surprised.
          </p>

          {/* Reward prediction diagram */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-warm">
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-coffee">Mechanism</p>
              <p className="mt-1 text-2xl text-espresso">Reward Prediction Error</p>
              <div className="mt-6 grid grid-cols-3 items-center gap-4 text-center text-sm">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-coffee/30 bg-beige text-xl">🍬</div>
                  <span className="text-xs text-muted-foreground">Expectation</span>
                  <span className="font-medium text-espresso">Sweet candy</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="h-px w-full bg-coffee/30" />
                  <span className="rounded-full bg-coffee/10 px-3 py-1 text-xs text-coffee">Brain predicts →</span>
                  <div className="h-px w-full bg-coffee/30" />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-coffee bg-coffee/10 text-xl">🌶️</div>
                  <span className="text-xs text-muted-foreground">Reality</span>
                  <span className="font-medium text-espresso">Spicy explosion</span>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-beige/60 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.14em] text-coffee">Result</p>
                <p className="mt-1 text-base text-espresso">Outcome &gt; Expectation = Dopamine spike</p>
                <p className="mt-1 text-sm text-muted-foreground">Brain marks experience as "Important. Do again."</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ── SECTION 03 ── */}
        <Section eyebrow="03" title="Hack #2: The Pain = Pleasure Loop">
          <p>Spice isn't actually a taste.</p>
          <p>
            It's pain. Capsaicin (the compound behind heat) activates the
            trigeminal nerve, which sends a pain signal to the brain.
          </p>
          <p>
            The brain's immediate response is to flood the system with
            endorphins (the same natural opioids released during exercise or laughter) to soothe the irritation.
          </p>
          <p>
            The result: a mild biological high. The spice causes discomfort. The
            endorphins make that discomfort feel good.
          </p>
          <p className="font-hand text-xl text-coffee">
            Sugar + Endorphins = a sensation your brain keeps chasing.
          </p>
          <p>
            This is why spicy food is addictive to so many people. And it's why
            Pulse's "kick" doesn't push you away. It pulls you back.
          </p>

          {/* Pain-pleasure loop diagram */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-warm">
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-coffee">Mechanism</p>
              <p className="mt-1 text-2xl text-espresso">The Pain = Pleasure Loop</p>
              <div className="mt-6 flex flex-col gap-3">
                {[
                  { step: "01", label: "Spice activates Trigeminal Nerve", icon: "🌶️", color: "bg-red-50 border-red-200" },
                  { step: "02", label: "Brain reads signal as mild pain", icon: "⚡", color: "bg-amber-50 border-amber-200" },
                  { step: "03", label: "Endorphins released to soothe", icon: "✨", color: "bg-beige border-coffee/20" },
                  { step: "04", label: "Biological high, repeat craving", icon: "🔄", color: "bg-coffee/5 border-coffee/30" },
                ].map(({ step, label, icon, color }) => (
                  <div key={step} className={`flex items-center gap-4 rounded-xl border px-4 py-3 ${color}`}>
                    <span className="text-xs font-medium text-muted-foreground">{step}</span>
                    <span className="text-lg">{icon}</span>
                    <span className="text-sm text-espresso">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── SECTION 04 ── */}
        <Section eyebrow="04" title="Hack #3: The Attention Reset">
          <p>
            There's a well-documented phenomenon in sensory science called{" "}
            <span className="font-medium text-espresso">
              Sensory Specific Satiety
            </span>
            .
          </p>
          <p>
            The brain biologically tires of a single flavour in roughly three
            minutes. Interest drops. You stop noticing it. You move on.
          </p>
          <p>
            Pulse is designed to sidestep this entirely.
          </p>
          <p>
            You start with the outer layer: sweet, familiar, mildly fruity. The
            brain begins to adapt. Satiety begins to set in.
          </p>
          <p>
            Then the centre arrives. The flavour profile flips completely: salty,
            spicy, sharp.
          </p>
          <p className="font-hand text-xl text-coffee">
            The brain's attention clock resets to zero.
          </p>
          <p>
            It's not one candy. It's two sensory experiences engineered to
            interrupt each other at exactly the right moment.
          </p>

          {/* Attention reset chart */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-warm">
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-coffee">Mechanism</p>
              <p className="mt-1 text-2xl text-espresso">The Attention Reset</p>
              <div className="mt-6 relative h-32">
                <svg viewBox="0 0 400 120" className="w-full h-full">
                  {/* Axes */}
                  <line x1="40" y1="10" x2="40" y2="100" stroke="currentColor" strokeWidth="1" className="text-border" />
                  <line x1="40" y1="100" x2="390" y2="100" stroke="currentColor" strokeWidth="1" className="text-border" />
                  {/* Labels */}
                  <text x="10" y="55" fontSize="9" fill="currentColor" className="text-muted-foreground" transform="rotate(-90,10,55)">INTEREST</text>
                  <text x="210" y="115" fontSize="9" fill="currentColor" className="text-muted-foreground" textAnchor="middle">TIME</text>
                  {/* Decay curve (outer layer) */}
                  <path d="M50,20 C80,22 120,40 200,80" stroke="#8B6145" strokeWidth="2" fill="none" strokeDasharray="4,2" opacity="0.5"/>
                  {/* Spike at centre hit */}
                  <path d="M200,80 L220,18 L240,70 C280,85 330,90 380,95" stroke="#8B6145" strokeWidth="2.5" fill="none"/>
                  {/* Flavour flip label */}
                  <circle cx="220" cy="18" r="4" fill="#8B6145"/>
                  <text x="228" y="14" fontSize="8" fill="#8B6145" fontWeight="600">Flavour flip</text>
                  {/* Phase labels */}
                  <text x="110" y="95" fontSize="7.5" fill="currentColor" className="text-muted-foreground" textAnchor="middle">Sweet outer layer</text>
                  <text x="310" y="95" fontSize="7.5" fill="currentColor" className="text-muted-foreground" textAnchor="middle">Spicy centre</text>
                </svg>
              </div>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                They didn't just make a candy. They engineered a biological refresh button.
              </p>
            </div>
          </div>
        </Section>

        {/* ── SECTION 05 ── */}
        <Section eyebrow="05" title="The Hidden Ritual">
          <p>
            But neuroscience alone doesn't fully explain ₹300 Crores.
          </p>
          <p>
            There's a fourth layer: cultural memory.
          </p>
          <p>
            In India, raw mango with salt and chilli isn't a flavour. It's a
            ritual. It lives in childhood afternoons, in school bags, in summers
            spent outside. Almost every person who grew up in India has a
            specific sensory memory attached to it.
          </p>
          <p>
            Pulse didn't invent that memory. It compressed it into a ₹1 candy.
          </p>
          <p className="font-hand text-xl text-coffee">
            They sold nostalgia. Not candy.
          </p>
          <p>
            When the brain encounters a flavour tied to an emotional memory, the
            hippocampus and amygdala activate together. The experience doesn't
            just taste familiar. It feels meaningful.
          </p>
          <p>
            That's an entirely different category of product engagement.
          </p>

          {/* Cultural memory card */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-warm">
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-coffee">The formula</p>
              <p className="mt-1 text-2xl text-espresso">The Hidden Ritual</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-3xl">🥭</span>
                  <span className="text-sm font-medium text-espresso">Raw Mango</span>
                </div>
                <span className="text-2xl text-coffee/50">+</span>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-3xl">🧂</span>
                  <span className="text-sm font-medium text-espresso">Chilli & Salt</span>
                </div>
                <span className="text-2xl text-coffee/50">=</span>
                <div className="flex flex-col items-center gap-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coffee/10 text-2xl">❤️</div>
                  <span className="text-sm font-medium text-espresso">Childhood memory</span>
                </div>
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                In India, "Raw Mango + Salt" isn't a flavour. It's a childhood ritual.
              </p>
              <div className="mt-4 rounded-xl bg-beige/60 p-4 text-center">
                <p className="font-hand text-lg text-coffee">Biology + Culture = Unstoppable Sales</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ── SECTION 06 ── */}
        <Section eyebrow="06" title="What This Means for Product Thinking">
          <p>
            I started this as an exercise in curiosity. I ended it with a
            framework I now apply to almost everything I observe.
          </p>
          <p>
            Pulse is a masterclass in layered product design. Not because it did
            one thing brilliantly. It stacked four separate
            behavioural mechanisms, each reinforcing the others.
          </p>
          <div className="mt-2 space-y-3">
            {[
              ["Reward Prediction Error", "The surprise creates a dopamine spike that marks the experience as worth repeating."],
              ["Pain = Pleasure Loop", "The spice triggers endorphins, making discomfort feel like a reward."],
              ["Attention Reset", "The flavour flip defeats sensory satiety, extending engagement past the natural drop-off point."],
              ["Cultural Memory", "The raw-mango ritual bypasses rational evaluation and triggers emotional recall."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-xl border border-border bg-beige/30 p-4">
                <p className="font-medium text-espresso">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4">
            Most product teams optimise for one of these. Pulse hit all four
            simultaneously — and did it in a ₹1 candy.
          </p>
        </Section>

        {/* ── SECTION 07 ── */}
        <Section eyebrow="07" title="Takeaway">
          <p>
            The best products don't just solve a problem.
          </p>
          <p>
            They engineer an experience the brain is biologically inclined to
            repeat.
          </p>
          <p>
            Pulse isn't successful because it's sweet. It's successful because
            eating one feels like a small, surprising, slightly addictive
            ritual — one that millions of people already had a version of in
            their childhood.
          </p>
          <p className="font-hand text-xl text-coffee">
            They just packaged it at ₹1.
          </p>
          <p>
            The lesson I take from this isn't about candy. It's about how the
            most durable products are the ones that feel inevitable once you have
            them — even if nobody knew they needed them before.
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
