import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Divider } from "@/components/site-layout";
import figma1 from "@/assets/figma1.png.asset.json";
import figma2 from "@/assets/figma2.png.asset.json";
import figma3 from "@/assets/figma3.png.asset.json";
import figma4 from "@/assets/figma4.png.asset.json";
import figma5 from "@/assets/figma5.png.asset.json";

export const Route = createFileRoute("/experiments/magazine-websites")({
  head: () => ({
    meta: [
      { title: "What If Websites Were Designed Like a Magazine? — ProductiviTEA" },
      {
        name: "description",
        content:
          "A design experiment exploring whether editorial and magazine-inspired layouts could replace conventional web design patterns.",
      },
      {
        property: "og:title",
        content: "What If Websites Were Designed Like a Magazine?",
      },
      {
        property: "og:description",
        content:
          "A design experiment exploring whether editorial and magazine-inspired layouts could replace conventional web design patterns.",
      },
    ],
  }),
  component: MagazineExperimentPage,
});

const figmas = [
  { src: figma1.url, caption: "Storefront cover & contact spread" },
  { src: figma2.url, caption: "Nearest store locator card" },
  { src: figma3.url, caption: "Editorial menu navigation" },
  { src: figma4.url, caption: "Search as a quiet prompt" },
  { src: figma5.url, caption: "Category spreads — shirts & pants" },
];

function MagazineExperimentPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pt-16 pb-20">
        <Link to="/experiments" className="text-sm text-coffee hover:underline">
          ← Experiments
        </Link>
        <p className="mt-8 font-hand text-xl text-coffee">— a design experiment</p>
        <h1 className="mt-2 text-balance text-4xl text-espresso md:text-5xl">
          What If Websites Were Designed Like a Magazine?
        </h1>
        <p className="mt-5 text-pretty text-lg text-muted-foreground">
          A design experiment exploring whether editorial and magazine-inspired layouts could
          replace conventional web design patterns.
        </p>

        <Divider />

        <section className="mt-4">
          <p className="font-hand text-lg text-coffee">gallery</p>
          <h2 className="mt-1 text-2xl text-espresso md:text-3xl">Figma Exploration</h2>
          <p className="mt-3 text-base text-muted-foreground">
            Screens from the prototype — an e-commerce experience reimagined through editorial
            design principles.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {figmas.map((f, i) => (
              <figure
                key={i}
                className={`overflow-hidden rounded-2xl border border-border bg-card shadow-warm transition-all hover:-translate-y-0.5 hover:shadow-warm-lg ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={f.src}
                  alt={f.caption}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="px-5 py-3 font-hand text-base text-coffee">
                  {f.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <Divider />

        <Section eyebrow="01" title="Hypothesis">
          <p>
            While browsing websites, I kept noticing how every interface was beginning to look the
            same. Hero section, navigation bar, feature cards, CTA, footer. Efficient, familiar,
            and optimized — but often forgettable.
          </p>
          <p>That made me wonder:</p>
          <blockquote className="border-l-2 border-coffee/30 pl-5 font-hand text-xl text-espresso">
            "What if websites borrowed more from magazines than software?"
          </blockquote>
          <p>
            Magazines are designed to be explored. They use hierarchy, storytelling, asymmetrical
            layouts, and visual rhythm to guide attention. Websites, on the other hand, are usually
            designed to minimize friction and maximize task completion.
          </p>
          <p>My hypothesis was simple:</p>
          <p className="italic text-foreground/80">
            Could a website feel more memorable, immersive, and emotionally engaging if it was
            designed like a magazine rather than a traditional digital product?
          </p>
          <p>
            To explore this, I recreated an e-commerce experience entirely through editorial design
            principles using Figma.
          </p>
        </Section>

        <Section eyebrow="02" title="Result">
          <p>The outcome was visually compelling.</p>
          <p>
            The layouts felt distinctive, curated, and unlike most modern websites. The experience
            felt closer to browsing a fashion magazine than navigating an online store.
          </p>
          <p>
            The experiment successfully challenged conventional web patterns and created a stronger
            sense of personality and brand identity.
          </p>
          <p>
            However, despite looking aesthetically pleasing, I ultimately concluded that this
            approach would struggle to succeed as a real-world product for most use cases.
          </p>
        </Section>

        <Section eyebrow="03" title="Why?">
          <p>
            The biggest issue is that beautiful experiences are not always usable experiences.
          </p>
          <p>
            Modern websites evolved around user behavior. Over time, people have developed
            expectations about where navigation lives, how menus behave, how products are
            discovered, and how actions are performed.
          </p>
          <p>
            By replacing familiar patterns with editorial layouts, I unintentionally introduced
            friction. Users would likely spend more time figuring out the interface than completing
            their goals.
          </p>
          <p>This experiment conflicts with several established UX and product principles:</p>
          <ul className="space-y-3">
            {[
              ["Jakob's Law", "Users expect interfaces to behave like other interfaces they already know."],
              ["Recognition Over Recall", "Users should immediately recognize available actions instead of having to interpret them."],
              ["Information Scent", "Users need clear signals about where interactions will lead."],
              ["Cognitive Load Theory", "Every unconventional interaction increases the mental effort required to use a product."],
              ["Conversion-Oriented Design", "E-commerce experiences should reduce friction, while editorial experiences often introduce exploration."],
            ].map(([k, v]) => (
              <li key={k} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coffee" />
                <span>
                  <span className="text-espresso">{k}</span> — {v}
                </span>
              </li>
            ))}
          </ul>
          <p>
            In other words, the exact elements that made the concept feel unique are also the
            elements that make it less efficient.
          </p>
          <p>The design optimizes for curiosity and aesthetics.</p>
          <p>Most digital products optimize for clarity and outcomes.</p>
          <p>Those goals are not always aligned.</p>
        </Section>

        <Section eyebrow="04" title="Insight">
          <p>
            This experiment taught me that good product design is rarely about making something
            look different.
          </p>
          <p>
            It's about understanding why existing patterns became standards in the first place.
          </p>
          <p>
            The internet is full of interfaces that look similar because many of those conventions
            were shaped through years of user behavior, testing, and iteration.
          </p>
          <p>
            While I still love the visual personality of magazine-inspired websites, this
            exploration helped me appreciate an important product lesson:
          </p>
          <blockquote className="border-l-2 border-coffee/30 pl-5 font-hand text-xl text-espresso">
            Users don't reward originality alone. They reward products that help them achieve their
            goals with the least amount of effort.
          </blockquote>
          <p>Sometimes the most creative decision is knowing when not to reinvent a pattern.</p>
          <p>This experiment wasn't about finding a better design.</p>
          <p>
            It was about understanding the tradeoff between aesthetic innovation and usability —
            and why product thinking requires balancing both.
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
