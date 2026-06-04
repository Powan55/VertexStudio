/**
 * SINGLE SOURCE OF TRUTH for VertexStudio (our own agency site, "client zero").
 * Nav, footer, services, process, pricing tiers, FAQs, concept demos, SEO meta,
 * and JSON-LD all read from here so content never drifts.
 *
 * Copy mirrors content/copy.md. Prices are PLACEHOLDERS until the operator sets them.
 */

import { u } from "./url";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  blurb: string;
}

export interface ProcessStep {
  n: number;
  title: string;
  what: string;
  need: string;
}

export interface Tier {
  name: string;
  positioning: string;
  /** PLACEHOLDER until operator confirms real numbers. */
  priceFrom: string;
  popular?: boolean;
  inclusions: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface Faq {
  group: string;
  q: string;
  a: string;
}

export interface ConceptDemo {
  slug: string;
  business: string;
  /** Short industry label, e.g. "Café & coffee roaster". */
  industry: string;
  problem: string;
  approach: string;
  /** Always framed as concept — no real metrics. */
  outcome: string;
  /** Screenshot path under /public (added by Designer). */
  image: string;
  /** The demo's own accent (distinct from VertexStudio brand) for card chrome. */
  accent: string;
}

export interface SiteConfig {
  name: string;
  legalName?: string;
  /** schema.org type for our org JSON-LD. */
  schemaType: string;
  /** Final production URL (no trailing slash). Matches astro.config `site`. */
  url: string;
  /** Default meta description. */
  description: string;
  /** Used in the home <title> as "{name} — {tagline}". */
  tagline: string;
  email: string;
  phone?: { e164: string; display: string };
  areaServed?: string;
  /** Default Open Graph image (1200x630) under /public. */
  ogImage: string;
  /** Primary north-star CTA. */
  cta: { label: string; href: string; kind: "quote" };
  nav: NavLink[];
  social: Partial<Record<"linkedin" | "instagram" | "x" | "github", string>>;
  /** Redesign guarantee — PLACEHOLDER wording, operator to confirm. */
  guarantee: string;
  services: Service[];
  process: ProcessStep[];
  tiers: Tier[];
  faqs: Faq[];
  conceptDemos: ConceptDemo[];
}

export const site: SiteConfig = {
  name: "VertexStudio",
  legalName: "VertexStudio",
  schemaType: "ProfessionalService",
  url: "https://powan55.github.io",
  description:
    "We design fast, modern, conversion-focused websites for local businesses — built in days, and you own everything. Request a website today.",
  tagline: "Websites that win local customers",
  email: "hello@vertexstudio.com", // PLACEHOLDER — operator confirms
  areaServed: "United States",
  ogImage: "/og-default.svg",
  cta: { label: "Request a website", href: u("/request"), kind: "quote" },
  nav: [
    { label: "Work", href: u("/work") },
    { label: "Process", href: u("/process") },
    { label: "Pricing", href: u("/pricing") },
    { label: "About", href: u("/about") },
    { label: "FAQ", href: u("/faq") },
  ],
  social: {
    // linkedin: "https://linkedin.com/company/...",
  },
  guarantee:
    "If you don't love your new design, we'll keep refining it until you do — or you don't pay for the redesign.",

  services: [
    {
      title: "New website",
      blurb:
        "A brand-new site for businesses starting from scratch. Clean, modern, and built from day one to turn visitors into customers.",
    },
    {
      title: "Website revamp",
      blurb:
        "Got a site that looks dated or barely loads on phones? We rebuild it fast and modern — without losing what's already working.",
    },
    {
      title: "E-commerce",
      blurb:
        "Sell products or take bookings online with a simple, secure store that's easy for your customers and easy for you to run.",
    },
  ],

  process: [
    {
      n: 1,
      title: "Discovery & brief",
      what: "We learn your business, your customers, and what a real win looks like — more calls, bookings, or quotes.",
      need: "A short conversation, any branding you have, and your honest answer to: when someone hires you, what made them choose you?",
    },
    {
      n: 2,
      title: "Design & build",
      what: "We design and build your site fast, with our AI-accelerated workflow and conversion in mind at every step.",
      need: "Your content where you have it — and where you don't, we'll help shape it.",
    },
    {
      n: 3,
      title: "Review & refine",
      what: "You review, we refine — until it's right. This is where our redesign guarantee lives.",
      need: "Honest feedback. Tell us plainly what you like and what you'd change.",
    },
    {
      n: 4,
      title: "Launch & handoff",
      what: "We launch it and hand you the keys — code, content, and domain are yours.",
      need: "A green light to go live, plus a few access details if you're moving from an old site.",
    },
  ],

  tiers: [
    {
      name: "Starter",
      positioning: "Get online and start taking calls — a focused site that does the essentials beautifully.",
      priceFrom: "Starting at $X,XXX",
      inclusions: [
        "Up to 3 pages (Home, About, Contact)",
        "Mobile-first, fast-loading design",
        "Basic SEO so you're found on Google",
        "Contact form straight to your inbox",
        "2 rounds of revisions",
        "30 days of post-launch support",
      ],
      ctaLabel: "Request a website",
      ctaHref: u("/request?plan=starter"),
    },
    {
      name: "Growth",
      positioning: "Built to grow with you — more pages, more reach, more ways to win customers.",
      priceFrom: "Starting at $X,XXX",
      popular: true,
      inclusions: [
        "Up to 6 pages incl. services or gallery",
        "Mobile-first, fast-loading design",
        "Stronger SEO for local search visibility",
        "Contact and quote/booking-request forms",
        "3 rounds of revisions",
        "60 days of post-launch support",
        "One integration (maps, reviews, scheduling)",
      ],
      ctaLabel: "Request a website",
      ctaHref: u("/request?plan=growth"),
    },
    {
      name: "Premium",
      positioning: "The full package — a complete site with online selling or booking, built to do the heavy lifting.",
      priceFrom: "Starting at $X,XXX",
      inclusions: [
        "8+ pages, fully tailored to your business",
        "Mobile-first, fast-loading design",
        "Advanced SEO for competitive local search",
        "E-commerce store or online booking",
        "Unlimited revisions until launch (in scope)",
        "90 days of post-launch support",
        "Multiple integrations (payments, scheduling, email)",
      ],
      ctaLabel: "Request a website",
      ctaHref: u("/request?plan=premium"),
    },
  ],

  faqs: [
    {
      group: "Getting started",
      q: "How long does it take?",
      a: "Most projects launch in days, not months. Our AI-accelerated workflow lets us move quickly without cutting corners. The exact timeline depends on the size of your site and how fast we get content and feedback from you — but speed is one of the big reasons businesses choose us.",
    },
    {
      group: "Getting started",
      q: "What do you need from me to start?",
      a: "Less than you'd think. A short conversation about your business, any branding you already have (logo, colors, photos), and your content where you have it. Where you don't have content, we'll help you shape it. Mostly, we need your goals and your honest feedback.",
    },
    {
      group: "Getting started",
      q: "Can I edit the site myself after launch?",
      a: "Yes. We build your site to be manageable, and at handoff we walk you through how to update it. And because you own everything, you're free to make changes yourself, have us help, or take it to anyone you like.",
    },
    {
      group: "Getting started",
      q: "Do you do e-commerce or booking?",
      a: "Yes — both. Whether you want to sell products online or let customers book appointments, we can build a simple, secure setup that's easy for them and easy for you. It's included in Premium and can be added to other plans.",
    },
    {
      group: "Ownership & tech",
      q: "Who owns the site and code?",
      a: "You do — completely. The code, the content, and the domain are all yours. We don't lock you into a platform or hold your files hostage. If you ever want to move your site elsewhere, you can take everything with you.",
    },
    {
      group: "Ownership & tech",
      q: "Is my site built to be found on Google?",
      a: "Yes. Every site includes SEO setup so search engines understand your pages and local customers can find you. It's part of every plan, with stronger setups on higher tiers for more competitive searches.",
    },
    {
      group: "Budget & revisions",
      q: "How does pricing work?",
      a: "We offer three plans — Starter, Growth, and Premium — each with a starting range. We confirm your exact price before any work begins, so there are no surprises. We're also happy to discuss payment options. (Prices shown on the site are placeholders until finalized.)",
    },
    {
      group: "Budget & revisions",
      q: "How does the redesign guarantee work?",
      a: "It's simple. If you don't love the design we deliver, we keep working on it until you do. If we still can't get you to love it, you don't pay for the redesign. We'd rather earn your happiness than just close out a project.",
    },
    {
      group: "Budget & revisions",
      q: "Are there hidden or ongoing costs?",
      a: "No hidden costs — we confirm everything upfront. The only ongoing expenses are the normal ones every website has, like domain renewal and hosting, and we'll explain those clearly before you commit.",
    },
    {
      group: "Revamps",
      q: "Will a revamp hurt my existing Google ranking?",
      a: "No — not when it's done right, and doing it right is exactly our job. When we rebuild your site, we carefully map your old pages to the new ones and set up proper redirects, so the trust your old pages earned carries over and visitors (and Google) always land in the right place. Protecting your search ranking is a core part of any revamp, not an afterthought.",
    },
    {
      group: "Revamps",
      q: "What happens to my old content when you revamp?",
      a: "Nothing is lost without your say-so. We review what's already working — the pages, words, and search terms bringing you traffic — and carry the valuable parts forward into the new design, improving them rather than throwing them away.",
    },
    {
      group: "Trust",
      q: "You're a new studio — why should I trust you?",
      a: "Fair question, and we'd rather answer it head-on. We're new, and we're not going to invent fake reviews or made-up results. Instead, we back our work with the redesign guarantee: if you don't love your new design, you don't pay for the redesign. The website you're reading right now is also our own proof of skill — we built it the same way we'll build yours.",
    },
    {
      group: "Trust",
      q: "What if it doesn't work out?",
      a: "Our guarantee is there for exactly that. If the design isn't right, we keep refining until it is, or you don't pay for the redesign. And because you own everything from day one, you're never stuck or trapped. The risk sits with us, not you.",
    },
  ],

  conceptDemos: [
    {
      slug: "harbor-and-vine",
      business: "Harbor & Vine",
      industry: "Café & coffee roaster",
      problem:
        "A neighborhood coffee roaster with a loyal in-person following but almost no presence online. Locals searching for “coffee near me” couldn't find their hours, their menu, or a reason to choose them over the chain down the street.",
      approach:
        "We designed a warm, mobile-first site that puts the essentials right where people look first — hours, location, and what's on tap today — with big, appetizing imagery and clear buttons to order ahead or plan a visit, all built to load fast on a phone.",
      outcome:
        "A site designed to turn a casual local search into a walk-in — clear, fast, and unmistakably theirs.",
      image: "/images/concept-harbor-and-vine.png",
      accent: "#E0894B",
    },
    {
      slug: "ironwood-builders",
      business: "Ironwood Builders",
      industry: "Contractor & remodeler",
      problem:
        "A skilled home remodeler whose best marketing was word of mouth — but whose website looked nothing like the quality of their work. Prospective clients landed on a slow, dated page and couldn't easily see past projects or request a quote.",
      approach:
        "We designed a confident, trust-building site that leads with the work: a clean gallery of before-and-after projects, plain-language services, and a simple “request a quote” form that's never more than a tap away.",
      outcome:
        "A site designed to match the craftsmanship of the work itself — and to make requesting a quote the easiest thing on the page.",
      image: "/images/concept-ironwood-builders.png",
      accent: "#3F8F6B",
    },
  ],
};
