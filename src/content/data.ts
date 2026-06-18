export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  readingTime: string;
  date: string;
  tag: string;
  problem: string;
  analysis: string[];
  solution: string[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "rebrewing-onboarding",
    title: "Rebrewing Onboarding for a Reading App",
    summary:
      "How rethinking the first five minutes lifted week-one retention by 22% — without adding a single feature.",
    role: "Product Lead",
    readingTime: "8 min read",
    date: "March 2025",
    tag: "Growth",
    problem:
      "New readers were signing up, finishing the tour, and never coming back. Activation was happening in form, not in feeling.",
    analysis: [
      "Funnel teardown revealed users dropped on the 'pick 5 topics' screen, not the sign-up wall.",
      "Eight user interviews surfaced a quiet theme: people wanted to start reading, not configure a profile.",
      "Cohort analysis showed users who opened a book in session one were 4.1× more likely to return on day seven.",
    ],
    solution: [
      "Removed the topic picker. Replaced it with a single first-read suggestion based on signup intent.",
      "Moved profile setup to a soft, dismissable prompt after the first chapter.",
      "Added a quiet 'continue reading' nudge — no email, just a calm in-app card.",
    ],
    outcome:
      "Week-one retention climbed from 31% to 38%. Average first session length grew from 90 seconds to 4 minutes.",
  },
  {
    slug: "menu-of-one",
    title: "A Menu of One: Simplifying Pricing",
    summary:
      "Three tiers became one. Conversion went up, support tickets went down, and the team finally agreed on what we sold.",
    role: "Senior PM",
    readingTime: "6 min read",
    date: "January 2025",
    tag: "Strategy",
    problem:
      "The pricing page was an accumulation of compromises. Sales had a fourth secret tier. Customers were paralyzed.",
    analysis: [
      "Mapped feature usage against tier — 80% of value came from features in every tier.",
      "Talked to 12 churned accounts. None mentioned price. All mentioned confusion.",
      "Compared against 6 competitors; complexity was the category default, not a requirement.",
    ],
    solution: [
      "Collapsed into a single plan with usage-based add-ons.",
      "Rewrote the pricing page in plain language, removed the comparison table.",
      "Built a 'what you get' visual instead of a checklist.",
    ],
    outcome:
      "Trial-to-paid conversion improved by 17%. Pricing-related support volume dropped 60%.",
  },
  {
    slug: "the-quiet-dashboard",
    title: "The Quiet Dashboard",
    summary:
      "A design exercise in removing — fewer charts, fewer numbers, more meaning. Featured in our quarterly retro.",
    role: "PM, Analytics",
    readingTime: "5 min read",
    date: "November 2024",
    tag: "Design",
    problem:
      "Our analytics dashboard had grown to 23 widgets. Power users loved it. Everyone else bounced in 11 seconds.",
    analysis: [
      "Heatmaps showed only 4 widgets received meaningful attention.",
      "Surveyed users described the dashboard as 'a wall of numbers'.",
      "Interviews revealed people wanted a sentence, not a chart.",
    ],
    solution: [
      "Built a 'morning brief' view: three sentences summarizing the previous day.",
      "Tucked the full dashboard behind a 'see the numbers' link.",
      "Added one small ritual: a daily question to react to.",
    ],
    outcome:
      "Daily active dashboard users tripled. NPS on the analytics surface went from 12 to 41.",
  },
];

export type Note = {
  slug: string;
  title: string;
  source: string;
  category: "Book" | "Lesson" | "Framework" | "Journal";
  excerpt: string;
  date: string;
};

export const notes: Note[] = [
  {
    slug: "inspired-takeaways",
    title: "Inspired — the four risks",
    source: "Marty Cagan",
    category: "Book",
    excerpt:
      "Value, usability, feasibility, viability. Most teams test the third and ship to find out about the first.",
    date: "May 2025",
  },
  {
    slug: "jobs-to-be-done",
    title: "JTBD: the milkshake didn't want a friend",
    source: "Christensen lecture notes",
    category: "Framework",
    excerpt:
      "Hire a product the way you'd hire a contractor: for the job, not the resume. The interview is the user research.",
    date: "April 2025",
  },
  {
    slug: "writing-as-thinking",
    title: "Writing is the work",
    source: "Amazon-style memo practice",
    category: "Lesson",
    excerpt:
      "If you can't write the one-pager, you don't understand the problem. The slide deck is a hiding place.",
    date: "April 2025",
  },
  {
    slug: "feedback-vs-data",
    title: "Feedback is anecdote with feelings",
    source: "Journal",
    category: "Journal",
    excerpt:
      "Treat every loud opinion as a hypothesis, not a directive. The customer is always interesting, not always right.",
    date: "March 2025",
  },
  {
    slug: "continuous-discovery",
    title: "Continuous Discovery Habits",
    source: "Teresa Torres",
    category: "Book",
    excerpt:
      "Talk to three users a week. Forever. The cadence is the insight; the meeting is the practice.",
    date: "February 2025",
  },
  {
    slug: "the-shape-of-strategy",
    title: "Strategy is a shape, not a list",
    source: "Lesson from a Q1 retro",
    category: "Lesson",
    excerpt:
      "Roadmaps are outputs. Strategy is the shape of the choices you're willing to make and the ones you're not.",
    date: "January 2025",
  },
  {
    slug: "ux-law-jacobs",
    title: "Jacob's Law: design for where people already are",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Users spend most of their time on other products — so they arrive at yours carrying a mental model built elsewhere. Fight it and you create friction. Match it and you earn trust before you've earned attention. The cart lives top-right. The logo goes home. These aren't design choices anymore. They're debts you owe.",
    date: "June 2025",
  },
  {
    slug: "ux-law-aesthetic-usability",
    title: "Aesthetic-Usability Effect: beautiful things feel easier",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "People rate visually appealing designs as more usable — even when they aren't. A polished UI gives users permission to trust it. The dangerous flip side: beauty masks real problems for longer than an ugly design ever would. It buys goodwill. It doesn't substitute for thinking.",
    date: "June 2025",
  },
  {
    slug: "ux-law-doherty",
    title: "Doherty Threshold: 400ms is the edge of feeling in control",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Under 400ms, users feel like they're driving. Past it, they feel like they're waiting. The fix isn't always speed — it's the illusion of speed. Progress bars, skeleton screens, optimistic updates: psychological contracts that say 'we heard you.' Silence says nothing, and users fill silence with doubt.",
    date: "June 2025",
  },
  {
    slug: "ux-law-fitts",
    title: "Fitts's Law: the button that costs effort will be ignored",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Time-to-target is a function of distance and size. Tiny touch targets. CTAs marooned in whitespace. Submit buttons at the bottom of long forms with no anchor. Every extra pixel of travel is a micro-tax on intent. Make the thing you want clicked large, close, and obvious.",
    date: "June 2025",
  },
  {
    slug: "ux-law-hicks",
    title: "Hick's Law: more choices, more paralysis",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Decision time grows with the number of options. Give someone three paths and they'll pick one. Give them thirty and they'll close the tab. The product instinct is always to add. The design instinct has to be the counterweight. Menus that hide complexity aren't dumbing down — they're respecting cognitive load.",
    date: "June 2025",
  },
  {
    slug: "ux-law-miller",
    title: "Miller's Law: 7 ± 2, and then it spills",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Working memory holds roughly seven items at a time. After that, things fall out. This is why onboarding flows that dump twelve tips at once don't stick, why nine-item nav bars confuse, and why the most important design move is often chunking — breaking complexity into groups small enough to hold in your head.",
    date: "June 2025",
  },
  {
    slug: "ux-law-goal-gradient",
    title: "Goal-Gradient Effect: the closer you are, the faster you run",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Effort accelerates as a goal comes into view. Dropbox's onboarding checklist, LinkedIn's completeness bar, Duolingo's streak — they manufacture proximity to a finish line. Users who feel almost done push harder than users who feel they're starting. Show early progress, even if it's a little artificial. The first checkmark matters most.",
    date: "June 2025",
  },
  {
    slug: "ux-law-common-region",
    title: "Law of Common Region: a box says 'these belong together'",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Put elements inside a shared boundary — a card, a panel, a border — and users read them as a unit. It's one of the cheapest ways to communicate structure without a word of copy. Elements that float without a container feel orphaned. Grouping is meaning. Don't make users guess what goes with what.",
    date: "June 2025",
  },
  {
    slug: "ux-law-proximity",
    title: "Law of Proximity: things near each other feel related",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Space is syntax. Elements placed close together get read as belonging to the same idea. This is why a label floating between two form fields is a UX crime — the eye doesn't know which it belongs to. Whitespace isn't decoration; it's punctuation. Use it to separate what shouldn't be grouped and tighten what should.",
    date: "June 2025",
  },
  {
    slug: "ux-law-uniform-connectedness",
    title: "Law of Uniform Connectedness: shared style signals shared meaning",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Elements that look alike get treated alike. This is why design systems exist — not to make everything look the same, but to make relationships visible through consistency. When a secondary button looks like a primary one, users lose the hierarchy. Style carries meaning. Every visual decision is a signal about what something is for.",
    date: "June 2025",
  },
  {
    slug: "ux-law-praegnanz",
    title: "Law of Prägnanz: the brain always finds the simplest shape",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "When faced with ambiguity, the eye reduces complexity to its simplest interpretation. Users don't parse ornate iconography — they guess. Complexity that can't be decoded gets ignored. This is why CTAs are rectangles, why icons lean on convention, and why the most sophisticated interface design often looks like the most obvious one.",
    date: "June 2025",
  },
  {
    slug: "ux-law-similarity",
    title: "Law of Similarity: same look, same function — break it intentionally",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Users assume elements that look alike do the same thing. That's a feature when true and a bug when it isn't (a disabled state that looks exactly like an active one). The inverse is the useful tool: if you want something noticed as different, make it look different. The odd one out gets remembered.",
    date: "June 2025",
  },
  {
    slug: "ux-law-occams-razor",
    title: "Occam's Razor: the simplest design that works is the right design",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Between two designs that do the same thing, pick the one with fewer moving parts. Every element you add creates something a user has to notice, interpret, or ignore. The instinct to keep adding is the enemy. Dieter Rams said it cleanly: good design is as little design as possible. The best revision is usually subtraction.",
    date: "June 2025",
  },
  {
    slug: "ux-law-pareto",
    title: "Pareto Principle: 80% of the value lives in 20% of the features",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Most users use a small fraction of what you've built, most of the time. The corollary is uncomfortable: most of your roadmap is delivering marginal value. The Pareto lens forces a useful question — if we could only ship the 20% that matters most, what would it be? The MVP isn't a phase. It's a discipline.",
    date: "June 2025",
  },
  {
    slug: "ux-law-parkinson",
    title: "Parkinson's Law: work expands to fill whatever time you give it",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Tasks take as long as users expect them to take. If your checkout feels like two minutes but takes five, the experience feels broken even if nothing went wrong. Autofill, saved addresses, smart defaults — these don't just reduce effort, they reset the clock on expectation. Make the task shorter than the user feared.",
    date: "June 2025",
  },
  {
    slug: "ux-law-peak-end",
    title: "Peak-End Rule: people remember the best moment and the last one",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Users don't average their experience — they summarize it by its emotional peaks and how it ended. A painful checkout ending with a delightful confirmation screen gets remembered differently than a smooth one ending cold. This is why good designers obsess over empty states and success screens. The ending writes the review.",
    date: "June 2025",
  },
  {
    slug: "ux-law-postel",
    title: "Postel's Law: be generous in what you accept, strict in what you send",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Accept 'US', 'u.s.', or 'United States' — normalize it on your end, not the user's. Long forms aren't thorough; they're rude. Every field you add is a reason to abandon. The robustness principle is a hospitality principle: meet users where they are, absorb their imprecision, never make them feel like they failed a test just to sign up.",
    date: "June 2025",
  },
  {
    slug: "ux-law-serial-position",
    title: "Serial Position Effect: first and last are remembered; middle is noise",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "In any sequence, people recall the beginning and the end most reliably. The middle blurs. Nav bars know this — critical actions go far left or far right. Pricing pages know this — the plan you want bought sits at an edge. If you have something important to say, don't bury it in the center. That's where attention goes to fade.",
    date: "June 2025",
  },
  {
    slug: "ux-law-tesler",
    title: "Tesler's Law: complexity doesn't disappear — it just moves",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Every system has an irreducible amount of complexity. The only question is who holds it: the user or the product. Gmail's smart reply isn't removing a decision — it's making it for you. Good design absorbs complexity on behalf of the user. Bad design hands it back and calls it flexibility.",
    date: "June 2025",
  },
  {
    slug: "ux-law-von-restorff",
    title: "Von Restorff Effect: the different thing gets remembered",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "In a list of similar objects, the outlier sticks. That's why CTA buttons are a different color from everything else, why pricing tables highlight one plan, why notification badges are red in a sea of grey. The effect only works if the thing is genuinely distinct. A page full of highlights has no highlights. Contrast requires restraint.",
    date: "June 2025",
  },
  {
    slug: "ux-law-zeigarnik",
    title: "Zeigarnik Effect: unfinished things live rent-free in your head",
    source: "Laws of UX — Jon Yablonski",
    category: "Lesson",
    excerpt:
      "Incomplete tasks create cognitive tension that persists until resolved. This is why progress bars are sticky, why LinkedIn won't let the completeness badge rest, and why two-step flows convert better than one. Starting something creates a mild obligation to finish it. Give users one small win, leave one obvious next step open. The loop wants to close.",
    date: "June 2025",
  },
];

export type Idea = {
  title: string;
  pitch: string;
  category: string;
  spice: 1 | 2 | 3;
};

export const ideas: Idea[] = [
  {
    title: "Slow Inbox",
    pitch: "An email client that only delivers at 9am and 4pm. The hours in between are yours.",
    category: "Productivity",
    spice: 1,
  },
  {
    title: "Notebook for Teams",
    pitch: "A shared, append-only notebook for product decisions. No edits, no deletes — only revisions.",
    category: "Collaboration",
    spice: 2,
  },
  {
    title: "Reading Receipts",
    pitch: "A quiet community layer over your books — see what your three favorite thinkers underlined.",
    category: "Social",
    spice: 2,
  },
  {
    title: "Cafe Mode",
    pitch: "A soundscape app that gently nudges you to leave when you've been camping too long.",
    category: "Wellness",
    spice: 1,
  },
  {
    title: "Receipt Memory",
    pitch: "A camera roll for paper receipts that auto-files them as memories, not expenses.",
    category: "Personal",
    spice: 1,
  },
  {
    title: "Decision Diary",
    pitch: "A weekly prompt: what did you decide, what did you defer, what surprised you? Searchable forever.",
    category: "Reflection",
    spice: 2,
  },
  {
    title: "Office Hours",
    pitch: "A marketplace where senior PMs hold 30-min office hours instead of writing one more LinkedIn post.",
    category: "Career",
    spice: 3,
  },
  {
    title: "Quiet Standup",
    pitch: "Asynchronous standups that read like a journal entry. Five sentences, no Slack threads.",
    category: "Workflow",
    spice: 1,
  },
];

export type Experiment = {
  title: string;
  hypothesis: string;
  result: string;
  insight: string;
  status: "Shipped" | "Killed" | "Ongoing";
  date: string;
};

export const experiments: Experiment[] = [
  {
    title: "The 90-second onboarding cut",
    hypothesis: "If we remove the topic picker, users will reach a 'first read' moment faster and return more.",
    result: "Time-to-first-read fell from 2m 40s to 0m 38s. D7 retention +22%.",
    insight: "Configuration is a tax we charge users for our indecision.",
    status: "Shipped",
    date: "March 2025",
  },
  {
    title: "Pricing as a paragraph",
    hypothesis: "Replacing the comparison table with prose will improve trial conversion.",
    result: "Conversion lift of 17%. Bounce rate on /pricing fell by 31%.",
    insight: "Tables compare. Prose convinces. Most pricing pages do the wrong job.",
    status: "Shipped",
    date: "January 2025",
  },
  {
    title: "The morning brief",
    hypothesis: "A daily three-sentence summary will replace the dashboard for 80% of users.",
    result: "70% of opens go to the brief; full dashboard usage stable among power users.",
    insight: "Summaries don't kill detail — they protect it from people who don't need it.",
    status: "Shipped",
    date: "November 2024",
  },
  {
    title: "Streaks for non-gamers",
    hypothesis: "A gentle streak indicator (no fire emojis) will improve weekly active reading.",
    result: "Net neutral on WAU. Qual feedback: people felt watched, not motivated.",
    insight: "Streaks borrow against trust. Don't unless the user asked for the loan.",
    status: "Killed",
    date: "September 2024",
  },
  {
    title: "Decision diary prompts",
    hypothesis: "Weekly retro prompts improve self-reported clarity for IC PMs.",
    result: "Eight weeks in; 14 participants; clarity scores trending up. Continuing.",
    insight: "The act of writing is the intervention. The tool is just the appointment.",
    status: "Ongoing",
    date: "Ongoing",
  },
];
