import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Divider } from "@/components/site-layout";

export const Route = createFileRoute("/notes/21-ux-laws")({
  head: () => ({
    meta: [
      { title: "21 UX Laws — ProductiviTEA" },
      { name: "description", content: "21 UX laws decoded into plain English with real examples — because most design decisions are really psychology decisions." },
    ],
  }),
  component: UXLawsPage,
});

const laws = [
  {
    number: "01",
    name: "Jacob's Law",
    oneliner: "Design the way users already expect things to work.",
    body: "Users spend most of their time on other products. So when they come to yours, they bring those habits. Fight those habits and you create friction. Use them and you get instant familiarity.",
    example: "Every e-commerce site puts the cart in the top right. Not because it's the best spot — because everyone learned it there first. Shopify, Amazon, Myntra. Top right. Always.",
  },
  {
    number: "02",
    name: "Aesthetic-Usability Effect",
    oneliner: "Beautiful things feel easier to use — even when they aren't.",
    body: "Users forgive usability flaws in products they find visually attractive. A polished interface creates a halo effect: people assume it's better built, more reliable, and easier to use — before they've even tried it.",
    example: "Apple products have had usability issues for decades. But people rarely blame Apple — they blame themselves. The aesthetic creates trust that outlasts the friction.",
  },
  {
    number: "03",
    name: "Doherty Threshold",
    oneliner: "If your product takes more than 400ms to respond, users start to feel like they're waiting.",
    body: "The moment a user has to consciously wait, the sense of control breaks. Even if the response is fast in absolute terms, perceived slowness kills engagement. If you can't be fast, at least be honest — show a progress indicator so people know something's happening.",
    example: "Spotify pre-loads the next song before you finish the current one. The wait disappears. Google search results in milliseconds. The moment you feel the lag is the moment you consider alternatives.",
  },
  {
    number: "04",
    name: "Fitts's Law",
    oneliner: "The bigger and closer a target, the faster users can click it.",
    body: "Every time a user has to click something, they're solving a small physics problem. The smaller the button and the farther away it is from where they already are, the more effort it takes. This is why mobile CTAs span the full width of the screen.",
    example: "The floating WhatsApp 'new chat' button is huge and sits in the bottom-right corner — exactly where your thumb naturally rests. Not a coincidence.",
  },
  {
    number: "05",
    name: "Hick's Law",
    oneliner: "More choices = more time to decide = higher chance of deciding nothing.",
    body: "Every option you add to a screen is a small tax on the user's attention. Too many options leads to decision paralysis — users freeze, feel overwhelmed, and often just leave. The antidote isn't to remove choice but to reduce the number of options visible at one time.",
    example: "Netflix doesn't show you every show. It shows you a curated row tailored to you. The full catalogue would paralyse. The curation converts.",
  },
  {
    number: "06",
    name: "Miller's Law",
    oneliner: "The average person can hold about 7 things in working memory at once.",
    body: "Working memory is a small, easily overloaded buffer. The more items you ask users to keep in mind simultaneously, the more cognitive effort they spend just tracking things — and the less attention they have for the actual task.",
    example: "Phone numbers are split into chunks (98765 43210, not 9876543210). Navigation bars cap at 5-7 items. Checkout flows break into steps. All of it is Miller's Law in practice.",
  },
  {
    number: "07",
    name: "Goal-Gradient Effect",
    oneliner: "The closer people feel to a goal, the harder they push to complete it.",
    body: "Progress creates momentum. When users can see they're almost done, they speed up. This is why showing a progress bar — even an artificial one — increases completion rates. Starting users at 10% done rather than 0% works for the same reason.",
    example: "LinkedIn's profile strength meter. The moment you see you're at 60%, you feel compelled to reach 100%. You add your education. Your skills. That photo you've been avoiding. The bar is doing the work.",
  },
  {
    number: "08",
    name: "Law of Common Region",
    oneliner: "Elements inside a shared boundary feel like they belong together.",
    body: "When you draw a box around things — through background colour, a border, or even just spacing — users read those elements as a single unit. It's one of the fastest ways to create structure without adding labels.",
    example: "Every card-based UI (Notion, Trello, your banking app) uses this. The card is a region. Everything inside it is understood as related. Without the card, you'd need labels for everything.",
  },
  {
    number: "09",
    name: "Law of Proximity",
    oneliner: "Things placed near each other are assumed to be related.",
    body: "Proximity is the simplest grouping signal available. Users don't need lines or boxes if things are simply close together — their brains make the connection automatically. Whitespace is equally powerful: it separates groups as much as proximity joins them.",
    example: "A form with 'First Name' and 'Last Name' close together, then a large gap, then 'Email' — users immediately understand there are two separate groups. No labels needed.",
  },
  {
    number: "10",
    name: "Law of Uniform Connectedness",
    oneliner: "Elements that look visually connected are assumed to be functionally connected.",
    body: "If two things share a colour, line, or shape — users read them as part of the same system. This means visual consistency isn't just aesthetic; it's a communication tool. Inconsistency sends an unintentional signal that things are unrelated.",
    example: "Google's product suite: Docs, Sheets, Slides — all use the same icon grid, colour logic, and menu structure. The visual connectedness signals 'these all belong to the same family'.",
  },
  {
    number: "11",
    name: "Law of Prägnanz",
    oneliner: "The brain always simplifies complex visuals into the simplest possible interpretation.",
    body: "When faced with ambiguity, users default to the simplest reading. This is why complex, multi-meaning logos feel confusing — the brain is working to reduce them. Your UI should do that work ahead of time.",
    example: "The Olympic rings are five overlapping circles. You don't see overlapping shapes — you see five distinct rings. The brain simplifies. CTA buttons are rectangles for this exact reason.",
  },
  {
    number: "12",
    name: "Law of Similarity",
    oneliner: "Things that look the same are assumed to do the same thing.",
    body: "Visual consistency is how users build mental models of your product. If two buttons look identical, users expect them to behave similarly. If one behaves differently, it creates confusion — not because users aren't paying attention, but because you've broken the pattern.",
    example: "Links on a webpage are blue and underlined — universally. When you visited a page, Google used to turn links purple. Users knew instantly, without reading, which pages they'd been to. One visual property. Total clarity.",
  },
  {
    number: "13",
    name: "Occam's Razor",
    oneliner: "When in doubt, remove it.",
    body: "The simplest explanation is usually correct — and the simplest design usually works best. Every element in a UI competes for attention. Elements that don't serve a clear purpose don't just sit there passively; they actively make everything else harder to process.",
    example: "Apple's website is mostly whitespace and product photography. Every instinct in marketing says: add more. Explain more. Prove more. Apple does the opposite — and it works precisely because it's unusual.",
  },
  {
    number: "14",
    name: "Pareto Principle",
    oneliner: "80% of the value comes from 20% of the features.",
    body: "Most users use most products for a small number of tasks most of the time. The long tail of features exists for edge cases. Build and prioritise accordingly — focus first on the 20% that delivers the majority of value.",
    example: "Instagram: most users open it, scroll the feed, and post occasionally. The other 40+ features exist for a small minority. The core product is three or four taps.",
  },
  {
    number: "15",
    name: "Parkinson's Law",
    oneliner: "Tasks expand to fill the time available for them.",
    body: "If users are given unlimited time to fill a form, they'll overthink it. If they believe the task should take 30 seconds, they'll move faster. Setting expectations around time — through progress bars, step counts, or copy — shapes the experience.",
    example: "Password managers autofill login details in under a second. What would have taken 15 seconds of typing takes none. The expectation resets. Users notice when something takes longer than that now.",
  },
  {
    number: "16",
    name: "Peak-End Rule",
    oneliner: "People remember the best (or worst) moment and the ending — not the average.",
    body: "Users don't evaluate experiences by averaging every moment. They remember peaks and endings. A product with a great onboarding moment and a satisfying completion screen will be remembered more fondly than a product that was consistently fine but forgettable throughout.",
    example: "Duolingo ends every lesson with confetti and an animation. The lesson itself might have been frustrating — but the ending is delightful. That's what you carry into the next session.",
  },
  {
    number: "17",
    name: "Postel's Law",
    oneliner: "Be flexible in what you accept from users. Be precise in what you output.",
    body: "Originally a principle from network engineering, this applies cleanly to UX. Accept messy, human input gracefully — then present clean, structured output. Don't make users conform to your system. Your system should conform to them.",
    example: "Google Maps accepts 'mumbai airport', 'BOM airport', 'Mumbai international', or even a typo. It figures it out and gives you a clean result. You don't have to know the formal name.",
  },
  {
    number: "18",
    name: "Serial Position Effect",
    oneliner: "Users remember the first and last items in a list better than the ones in the middle.",
    body: "The primacy effect means the first thing on a list gets more attention and sticks better in memory. The recency effect means the last item is easiest to recall. The items in the middle are a graveyard of good intentions.",
    example: "Navigation bars always put the most important link first and a key CTA last. Menus bury less important options in the middle. Your most important message should never live in the middle of a list.",
  },
  {
    number: "19",
    name: "Tesler's Law",
    oneliner: "Every system has a fixed amount of complexity. Someone has to deal with it — you or the user.",
    body: "Complexity can't be eliminated, only moved. When you simplify a UI, you're often absorbing complexity into the backend or into the design system. The question isn't how to remove complexity — it's who handles it: the product or the person.",
    example: "Gmail's 'Smart Reply' handles the complexity of composing a short reply. The user doesn't have to think of what to write — the system does it. The complexity moved from the user to the model.",
  },
  {
    number: "20",
    name: "Von Restorff Effect",
    oneliner: "The thing that stands out gets remembered.",
    body: "When something in a list or interface is visually distinct from everything else, users notice it and remember it. This is why pricing pages highlight a 'recommended' plan, why CTAs are a different colour from everything else, and why a single bold sentence in a paragraph gets read.",
    example: "Every SaaS pricing page: three columns, two in grey, one with a coloured border and a 'Most Popular' badge. You see it immediately. You probably start there. The Von Restorff Effect is doing its job.",
  },
  {
    number: "21",
    name: "Zeigarnik Effect",
    oneliner: "Unfinished tasks stick in your memory longer than completed ones.",
    body: "The brain keeps a background process running for incomplete tasks — a kind of mental open tab. Products use this deliberately: progress bars, streaks, and incomplete profile indicators all exploit this effect to bring users back.",
    example: "Duolingo's streak. A 47-day streak that you're about to break feels almost physically uncomfortable. That discomfort is the Zeigarnik Effect. The task is open. Your brain won't let it go.",
  },
];

function UXLawsPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pt-16 pb-20">
        <Link to="/notes" className="text-sm text-coffee hover:underline">
          ← Notes
        </Link>

        <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-coffee">
          <span>Framework</span>
          <span className="h-px w-8 bg-coffee/40" />
          <span className="text-muted-foreground">Laws of UX</span>
        </div>

        <h1 className="mt-4 text-balance text-4xl text-espresso md:text-5xl">
          21 UX Laws
        </h1>
        <p className="mt-5 text-pretty text-lg text-muted-foreground">
          I went down a rabbit hole on this. Turns out most design decisions are
          really psychology decisions and someone already named all the rules.
          Here are all 21, in plain English, with examples I actually understand.
        </p>

        <Divider />

        <div className="space-y-14">
          {laws.map((law) => (
            <section key={law.number} className="group">
              <div className="flex items-baseline gap-4">
                <span className="font-hand text-lg text-coffee/50">{law.number}</span>
                <h2 className="text-2xl text-espresso md:text-3xl">{law.name}</h2>
              </div>

              <p className="mt-3 font-hand text-xl text-coffee">{law.oneliner}</p>

              <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">
                {law.body}
              </p>

              <div className="mt-5 rounded-2xl border border-coffee/20 bg-beige/40 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.16em] text-coffee/60">In the wild</p>
                <p className="mt-2 text-sm leading-relaxed text-espresso md:text-base">
                  {law.example}
                </p>
              </div>
            </section>
          ))}
        </div>

        <Divider />
        <p className="text-center font-hand text-xl text-coffee">end of pour ·</p>
      </article>
    </PageShell>
  );
}
