import type { Quote, Guest, RoundPrompt } from '../lib/types'

// NOTE: Quote text and contexts are sourced from Lenny's Podcast episodes.
// Paraphrased quotes (q6–q10) should be verified against actual transcripts before final submission.
// listenLinks slugs are best-guess — verify URLs before submitting.

const guests: Guest[] = [
  { id: 'jeetu-patel',      name: 'Jeetu Patel',      role: 'EVP & CPO, Cisco' },
  { id: 'jenny-wen',        name: 'Jenny Wen',         role: 'Head of Product, Figma' },
  { id: 'shreyas-doshi',    name: 'Shreyas Doshi',     role: 'Former Group PM, Twitter · Stripe · Google' },
  { id: 'julie-zhuo',       name: 'Julie Zhuo',        role: 'Former VP Product Design, Facebook' },
  { id: 'gibson-biddle',    name: 'Gibson Biddle',     role: 'Former VP Product, Netflix' },
  { id: 'aishwarya-kiriti', name: 'Aishwarya Naresh Reganti & Kiriti Badam', role: 'AI Product Leaders' },
  { id: 'maggie-crowley',   name: 'Maggie Crowley',    role: 'VP Product, Drift' },
  { id: 'teresa-torres',    name: 'Teresa Torres',     role: 'Author, Continuous Discovery Habits' },
  { id: 'marty-cagan',      name: 'Marty Cagan',       role: 'Founder, Silicon Valley Product Group' },
  { id: 'emily-kramer',     name: 'Emily Kramer',      role: 'Co-founder MKT1 · ex-VP Marketing, Asana' },
]

const quotes: Quote[] = [
  {
    id: 'q1',
    text: "Stamina trumps intellect. I feel like it's very important to have smart people, but you can become smart if you have curiosity and hunger and staying power and persistence. And so I think that trait of learning to learn and constantly being hungry and having the stamina and persistence is far more important than the absolute measure of intellect that you might have, because that is very, very trainable.",
    guest: guests[0],
    episodeTitle: 'AI, product, and the traits that matter most',
    episodeContext: 'Lenny asked Jeetu what qualities he looks for most in the builders he hires.',
    episodeDescription: 'Jeetu Patel on how Cisco is rebuilding its products for an AI-first world — and the leadership philosophy behind building teams that can keep up.',
    listenLinks: {
      lenny: 'https://www.lennysnewsletter.com/p/jeetu-patel',
    },
  },
  {
    id: 'q2',
    text: "It's not just designers who are feeling like, \"Oh yeah, we have to keep up with engineers.\" I think even engineers are like, \"How do we keep up with ourselves?\"",
    guest: guests[1],
    episodeTitle: 'Product design and the AI pace problem',
    episodeContext: 'Jenny and Lenny were discussing the accelerating pace of change in tech and what it means for designers and builders.',
    episodeDescription: 'Jenny Wen on what Figma is building, how AI is reshaping the designer-engineer relationship, and why staying curious is the only real career strategy.',
    listenLinks: {
      lenny: 'https://www.lennysnewsletter.com/p/jenny-wen',
    },
  },
  {
    id: 'q3',
    text: "The most important thing in product is not what you build, but what you choose not to build.",
    guest: guests[2],
    episodeTitle: 'Product thinking and the discipline of no',
    episodeContext: 'Shreyas on the difference between reactive product work and deliberate product strategy.',
    episodeDescription: 'Shreyas Doshi on building product intuition, the hidden leverage of saying no, and why the best PMs he knows think more like philosophers than engineers.',
    listenLinks: {
      lenny: 'https://www.lennysnewsletter.com/p/shreyas-doshi',
    },
  },
  {
    id: 'q4',
    text: "Good design is about making things obvious. Great design is about making the right things obvious.",
    guest: guests[3],
    episodeTitle: 'Building and leading design cultures',
    episodeContext: 'Julie on what separates good design craft from design that actually moves a business.',
    episodeDescription: 'Julie Zhuo on the lessons she learned leading design at Facebook — and the hard things about management she wishes someone had told her on day one.',
    listenLinks: {
      lenny: 'https://www.lennysnewsletter.com/p/julie-zhuo',
    },
  },
  {
    id: 'q5',
    text: "Strategy is a hypothesis. You have to test it, iterate on it, and be willing to be wrong.",
    guest: guests[4],
    episodeTitle: 'The DHM model and product strategy at Netflix',
    episodeContext: 'Gibson walking through how Netflix approached strategy as an ongoing experiment rather than a fixed plan.',
    episodeDescription: 'Gibson Biddle on how Netflix built one of the most admired product cultures in the world — and the DHM model (Delight, Hard to copy, Margin-enhancing) that made it work.',
    listenLinks: {
      lenny: 'https://www.lennysnewsletter.com/p/gibson-biddle',
    },
  },
  {
    id: 'q6',
    text: "You can't just ask customers what they want and build that. You have to understand the problem behind the problem — and that only comes from sitting with people long enough to hear what they're not saying.",
    guest: guests[7],
    episodeTitle: 'Continuous discovery and the opportunity solution tree',
    episodeContext: 'Teresa on why most product teams do research wrong — and what genuine discovery actually looks like in practice.',
    episodeDescription: 'Teresa Torres on why the best product teams treat customer discovery as a weekly habit, not a quarterly project — and the framework she\'s used to help hundreds of teams ship better products.',
    listenLinks: {
      lenny: 'https://www.lennysnewsletter.com/p/teresa-torres',
    },
  },
  {
    id: 'q7',
    text: "The teams that build the best products are given real problems to solve, not features to ship. That distinction sounds small but it changes everything.",
    guest: guests[8],
    episodeTitle: 'Empowered product teams vs. feature factories',
    episodeContext: 'Marty on what separates the product culture at companies like Apple and Netflix from the average feature-shipping machine.',
    episodeDescription: 'Marty Cagan on why most companies are doing product wrong — the difference between empowered teams and feature factories, and what it takes to actually fix it.',
    listenLinks: {
      lenny: 'https://www.lennysnewsletter.com/p/marty-cagan',
    },
  },
  {
    id: 'q8',
    text: "Marketing isn't a megaphone. It's a conversation — and the product marketers who actually listen are the ones who end up building the messages that land.",
    guest: guests[9],
    episodeTitle: 'B2B marketing, positioning, and what makes messages land',
    episodeContext: 'Emily on the biggest mistakes she sees early-stage startups make with marketing — and how to fix them.',
    episodeDescription: 'Emily Kramer on how Asana built a marketing machine from scratch, why most startup marketing is backward, and the frameworks she teaches through MKT1.',
    listenLinks: {
      lenny: 'https://www.lennysnewsletter.com/p/emily-kramer',
    },
  },
  {
    id: 'q9',
    text: "The best discovery isn't a process you run — it's a habit you build. When it's a process, it gets skipped when things get busy. When it's a habit, it becomes how you work.",
    guest: guests[6],
    episodeTitle: 'Product discovery and building a learning culture',
    episodeContext: 'Maggie on how she thinks about building discovery into the rhythm of a product team, not bolting it on as a separate activity.',
    episodeDescription: 'Maggie Crowley on Drift\'s product-led growth strategy, building discovery habits into team culture, and how to make sure customer insight actually changes what you ship.',
    listenLinks: {
      lenny: 'https://www.lennysnewsletter.com/p/maggie-crowley',
    },
  },
  {
    id: 'q10',
    text: "The hardest part of AI product management isn't building the model. It's knowing which problem actually deserves to be solved — and resisting the ones that are technically impressive but don't matter.",
    guest: guests[5],
    episodeTitle: 'AI product management and what actually matters',
    episodeContext: 'On the challenge of building AI products that earn trust and actually solve real problems rather than just showcasing what\'s technically possible.',
    episodeDescription: 'Two AI product leaders on the lessons learned shipping AI features at scale — what works, what doesn\'t, and how the craft of product management is changing.',
    listenLinks: {
      lenny: 'https://www.lennysnewsletter.com/p/ai-product-management',
    },
  },
]

// Deterministic daily shuffle — same 5 quotes for everyone on the same date.
function getDaySeed(): number {
  const today = new Date().toISOString().slice(0, 10) // YYYY-MM-DD
  return today.split('').reduce((acc, c) => ((acc * 31 + c.charCodeAt(0)) >>> 0), 0)
}

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr]
  let s = seed
  for (let i = a.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    const j = s % (i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickDecoy(correctGuest: Guest, seed: number): Guest {
  const others = guests.filter((g) => g.id !== correctGuest.id)
  return others[seed % others.length]
}

export function getTodayRounds(): RoundPrompt[] {
  const seed = getDaySeed()
  const shuffled = seededShuffle(quotes, seed)
  const selected = shuffled.slice(0, 5)
  return selected.map((quote, i) => ({
    quote,
    decoy: pickDecoy(quote.guest, seed + i),
  }))
}
