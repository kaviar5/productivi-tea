import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Divider } from "@/components/site-layout";

export const Route = createFileRoute("/experiments/bokksu-india")({
  head: () => ({
    meta: [
      { title: "The Bokksu of India? — ProductiviTEA" },
      {
        name: "description",
        content:
          "Exploring whether cultural discovery can become a subscription business.",
      },
      {
        property: "og:title",
        content: "The Bokksu of India?",
      },
      {
        property: "og:description",
        content:
          "Exploring whether cultural discovery can become a subscription business.",
      },
    ],
  }),
  component: BokksuIndiaPage,
});

function BokksuIndiaPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pt-16 pb-20">
        <Link to="/experiments" className="text-sm text-coffee hover:underline">
          ← Experiments
        </Link>
        <p className="mt-8 font-hand text-xl text-coffee">
          — a product exploration
        </p>
        <h1 className="mt-2 text-balance text-4xl text-espresso md:text-5xl">
          The Bokksu of India?
        </h1>
        <p className="mt-5 text-pretty text-lg text-muted-foreground">
          Exploring whether cultural discovery can become a subscription business.
        </p>

        <Divider />

        <Section eyebrow="00" title="Concept Deck">
          <p>
            Pitch decks, concept visuals, packaging mockups, and future research
            will be shared here as the idea evolves.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card/50 p-10 text-center shadow-warm transition-all hover:border-coffee/40">
              <span className="text-3xl">📑</span>
              <p className="mt-3 font-hand text-lg text-coffee">
                Pitch Deck
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Coming soon
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card/50 p-10 text-center shadow-warm transition-all hover:border-coffee/40">
              <span className="text-3xl">🎨</span>
              <p className="mt-3 font-hand text-lg text-coffee">
                Concept Visuals
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Coming soon
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card/50 p-10 text-center shadow-warm transition-all hover:border-coffee/40">
              <span className="text-3xl">📦</span>
              <p className="mt-3 font-hand text-lg text-coffee">
                Packaging Mockups
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Coming soon
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card/50 p-10 text-center shadow-warm transition-all hover:border-coffee/40">
              <span className="text-3xl">🔬</span>
              <p className="mt-3 font-hand text-lg text-coffee">
                Research
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Coming soon
              </p>
            </div>
          </div>
        </Section>

        <Section eyebrow="01" title="Context">
          <p>This idea started from a simple observation.</p>
          <p>
            People love discovering new places, cultures, traditions, and foods.
          </p>
          <p>
            But most people cannot travel whenever curiosity strikes.
          </p>
          <div className="space-y-1 pl-2">
            <p>Travel is expensive.</p>
            <p>Time is limited.</p>
            <p>Distance is a barrier.</p>
          </div>
          <p>
            At the same time, people are increasingly looking for experiences
            rather than products.
          </p>
          <p>That made me wonder:</p>
          <blockquote className="border-l-2 border-coffee/30 pl-5 font-hand text-xl text-espresso">
            What if a small piece of travel could be delivered home?
          </blockquote>
          <p>Not just as snacks.</p>
          <p>But as an experience.</p>
        </Section>

        <Section eyebrow="02" title="The Inspiration">
          <p>
            While exploring startup ideas, I came across Bokksu — a Japanese
            subscription box that delivers curated snacks, tea, collectibles,
            and cultural stories from Japan.
          </p>
          <p>What fascinated me wasn't the snacks.</p>
          <p>It was the experience.</p>
          <div className="space-y-1 pl-2">
            <p>The anticipation.</p>
            <p>The discovery.</p>
            <p>The storytelling.</p>
          </div>
          <p>And it made me ask:</p>
          <blockquote className="border-l-2 border-coffee/30 pl-5 font-hand text-xl text-espresso">
            Why doesn't India have a large-scale version of this?
          </blockquote>
          <p>
            India has extraordinary cultural diversity. Different cuisines.
            Different festivals. Different traditions. Different local brands.
          </p>
          <p>
            Yet most commerce experiences remain transactional. Search. Add to
            cart. Checkout.
          </p>
          <p>
            There is very little mystery, storytelling, anticipation, or
            cultural discovery.
          </p>
        </Section>

        <Section eyebrow="03" title="The Idea">
          <p>
            The concept is a monthly subscription-based mystery box centered
            around a specific region or culture.
          </p>
          <p>Each box would include:</p>
          <ul className="space-y-3">
            {[
              "Curated snacks",
              "Tea or beverages",
              "A culture guide or magazine",
              "Stories behind local products",
              "Regional trivia and traditions",
              "Small collectibles or souvenirs",
              "Recommendations for films, music, places, and experiences",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coffee" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-hand text-xl text-coffee">
            The goal isn't to sell snacks.
          </p>
          <p className="font-hand text-xl text-coffee">
            The goal is to package curiosity.
          </p>
        </Section>

        <Section eyebrow="04" title="Two Possible Experiences">
          <h3 className="text-xl text-espresso md:text-2xl">
            India Discovery Box
          </h3>
          <p>
            A more accessible tier focused on Indian states and regional
            cultures.
          </p>
          <p className="text-muted-foreground">Examples:</p>
          <ul className="space-y-2">
            {[
              "Hidden Gems of Kashmir",
              "Diwali in Tamil Nadu",
              "Flavours of Bengal",
              "Street Food of Delhi",
              "Royal Rajasthan",
              "Northeast India Discovery Box",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coffee" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <blockquote className="border-l-2 border-coffee/30 pl-5 font-hand text-lg text-espresso">
            Positioning: "Experience every state without leaving home."
          </blockquote>

          <h3 className="mt-8 text-xl text-espresso md:text-2xl">
            International Discovery Box
          </h3>
          <p>A premium tier focused on global cultures.</p>
          <p className="text-muted-foreground">Examples:</p>
          <ul className="space-y-2">
            {[
              "Japanese Imports",
              "Italian Café Box",
              "Korean Convenience Store Box",
              "French Bakery Box",
              "Mexican Street Snacks Box",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coffee" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <blockquote className="border-l-2 border-coffee/30 pl-5 font-hand text-lg text-espresso">
            Positioning: "Visit Japan, Italy, Korea, and more from your room."
          </blockquote>
        </Section>

        <Section eyebrow="05" title="The Market Gap">
          <p>
            My hypothesis is that India has marketplaces for snacks. India has
            marketplaces for imported goods. India has gifting products.
          </p>
          <p>
            But there doesn't appear to be a large-scale subscription experience
            that combines:
          </p>
          <ul className="space-y-3">
            {[
              "Food",
              "Storytelling",
              "Discovery",
              "Collectibles",
              "Cultural education",
              "Beautiful packaging",
              "Monthly anticipation",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coffee" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>Most existing businesses are commerce-first.</p>
          <p>This would be experience-first.</p>
          <p className="font-hand text-xl text-coffee">
            The product isn't the box.
          </p>
          <p className="font-hand text-xl text-coffee">
            The product is the feeling of discovering somewhere new.
          </p>
        </Section>

        <Section eyebrow="06" title="Why Users Might Buy">
          <h3 className="text-lg font-medium text-espresso">
            Curated Discovery
          </h3>
          <p>
            Most users don't know what they should try next. The box removes
            the effort of discovery.
          </p>
          <p>
            Just like Spotify Discover Weekly removes the effort of finding new
            music, the box removes the effort of finding new experiences.
          </p>
          <p className="font-hand text-xl text-coffee">
            Users aren't buying snacks. They're buying discovery.
          </p>

          <h3 className="mt-6 text-lg font-medium text-espresso">
            Mystery Box Psychology
          </h3>
          <p>
            Part of the excitement comes from not knowing exactly what arrives.
            The mystery creates anticipation.
          </p>
          <p>
            This leverages variable rewards, where unpredictable outcomes often
            generate stronger engagement than predictable ones.
          </p>

          <h3 className="mt-6 text-lg font-medium text-espresso">
            Experience Economy
          </h3>
          <p>
            People increasingly spend money on experiences rather than products.
          </p>
          <p>The snacks become a medium.</p>
          <p>The experience becomes the product.</p>

          <h3 className="mt-6 text-lg font-medium text-espresso">
            Storytelling As A Feature
          </h3>
          <p>
            A snack becomes more meaningful when users understand where it comes
            from, why it matters, and how people consume it locally.
          </p>
          <p>
            The culture guide transforms the product from consumption into
            exploration.
          </p>

          <h3 className="mt-6 text-lg font-medium text-espresso">
            Gifting Potential
          </h3>
          <p>This concept naturally fits gifting.</p>
          <div className="space-y-1 pl-2">
            <p>Birthdays.</p>
            <p>Festivals.</p>
            <p>Corporate gifts.</p>
            <p>Long-distance friendships.</p>
            <p>College care packages.</p>
          </div>
          <p>People often remember experiences more than objects.</p>
        </Section>

        <Section eyebrow="07" title="A Swiggy-Style Flywheel">
          <p>
            This is where the idea became more interesting to me.
          </p>
          <p>
            The box itself may not be the end product. It could become a
            discovery engine.
          </p>
          <div className="space-y-2">
            <p>Users discover a local brand through the box.</p>
            <p>They scan a QR code.</p>
            <p>They purchase a larger pack later.</p>
          </div>
          <p>The box generates discovery.</p>
          <p>Discovery generates commerce.</p>
          <p>Commerce generates repeat purchases.</p>
          <p>
            This transforms the product from a subscription business into a
            customer acquisition channel for regional brands.
          </p>
        </Section>

        <Section eyebrow="08" title="Why Doesn't This Already Exist?">
          <p>
            Whenever I find myself excited about an idea, I try to ask a harder
            question:
          </p>
          <blockquote className="border-l-2 border-coffee/30 pl-5 font-hand text-xl text-espresso">
            If this opportunity is so obvious, why hasn't someone already built it
            successfully?
          </blockquote>
          <p>That led me to several concerns.</p>
          <p>
            The biggest challenge isn't creating the first box. It's creating
            the tenth.
          </p>
          <p>The first purchase is driven by curiosity.</p>
          <p>The second purchase is driven by value.</p>
          <p>The sixth purchase is driven by habit.</p>
          <p className="font-hand text-xl text-coffee">
            And habit is much harder to build.
          </p>
        </Section>

        <Section eyebrow="09" title="Why It Might Fail In India">
          <h3 className="text-lg font-medium text-espresso">
            Indians Are Extremely Value Conscious
          </h3>
          <p>A customer spending ₹1,499 may ask:</p>
          <blockquote className="border-l-2 border-coffee/30 pl-5 text-espresso">
            "Could I have bought all of these snacks separately for less?"
          </blockquote>
          <p>
            If users evaluate the box purely on the monetary value of its
            contents, the business becomes vulnerable.
          </p>
          <p>
            The company cannot compete on snack value. It must compete on
            experience value.
          </p>

          <h3 className="mt-6 text-lg font-medium text-espresso">
            Discovery Is Not Yet A Habit
          </h3>
          <p>People regularly watch content. People regularly listen to music.</p>
          <p>
            But do people regularly seek cultural discovery through food? The
            behavior may not exist at scale.
          </p>
          <p>
            Which means educating the customer may become part of the product.
          </p>

          <h3 className="mt-6 text-lg font-medium text-espresso">
            Retention Could Collapse
          </h3>
          <p>The first box is exciting.</p>
          <p>The second box is interesting.</p>
          <p>The fifth box is the real test.</p>
          <p>
            If every month doesn't feel significantly different, users may
            quickly churn.
          </p>
          <p>
            Like most subscription businesses, retention matters far more than
            acquisition.
          </p>

          <h3 className="mt-6 text-lg font-medium text-espresso">
            The International Tier May Be A Trap
          </h3>
          <p>
            The international version sounds exciting. It is also significantly
            harder.
          </p>
          <div className="space-y-1 pl-2">
            <p>Import duties.</p>
            <p>Customs.</p>
            <p>Shelf-life constraints.</p>
            <p>Sourcing challenges.</p>
            <p>Regulatory complexity.</p>
          </div>
          <p>
            The India tier may actually be the smarter starting point despite
            appearing less glamorous.
          </p>

          <h3 className="mt-6 text-lg font-medium text-espresso">
            Curation Doesn't Scale Easily
          </h3>
          <p>
            Unlike traditional ecommerce, every month effectively becomes a new
            product launch.
          </p>
          <div className="space-y-1 pl-2">
            <p>New themes.</p>
            <p>New suppliers.</p>
            <p>New stories.</p>
            <p>New packaging.</p>
          </div>
          <p>The operational complexity compounds over time.</p>
        </Section>

        <Section eyebrow="10" title="Product Insight">
          <p>
            The biggest insight from exploring this idea was realizing that
            this isn't really a snack business.
          </p>
          <div className="space-y-1 pl-2">
            <p>It's a discovery business.</p>
            <p>The snacks are the entry point.</p>
            <p>The stories are the differentiator.</p>
            <p>The collectibles are the memory.</p>
            <p>The subscription is the habit.</p>
          </div>
          <p className="font-hand text-xl text-coffee">
            The real product is curiosity.
          </p>
        </Section>

        <Section eyebrow="11" title="Takeaway">
          <p>
            When I first thought about this idea, I saw it as a snack
            subscription.
          </p>
          <p>
            The more I explored it, the more I realized it wasn't really about
            snacks at all.
          </p>
          <p>It was about discovery.</p>
          <p>The interesting question isn't:</p>
          <blockquote className="border-l-2 border-coffee/30 pl-5 text-espresso">
            "Would people buy snacks from another region?"
          </blockquote>
          <p>The interesting question is:</p>
          <blockquote className="border-l-2 border-coffee/30 pl-5 font-hand text-xl text-espresso">
            "Would people subscribe to curiosity?"
          </blockquote>
          <p>That's what makes this idea difficult.</p>
          <p>And that's also what makes it interesting.</p>
          <p>The product isn't the food.</p>
          <p className="font-hand text-xl text-coffee">
            The product is the feeling of exploring somewhere new.
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
