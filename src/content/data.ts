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
