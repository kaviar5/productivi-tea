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

export const caseStudies: CaseStudy[] = [];

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
    slug: "21-ux-laws",
    title: "21 UX laws I didn't know I already knew",
    source: "Laws of UX",
    category: "Framework",
    excerpt:
      "Turns out most design decisions are really psychology decisions. Someone already named all the rules.",
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
