export const brand = {
  name: "MoodChanger",
  brain: "FloBrain",
  tagline: "Athletic Performance Intelligence",
};

export const nav = {
  links: [
    { label: "Platform", href: "#solution" },
    { label: "Models", href: "#models" },
    { label: "Architecture", href: "#architecture" },
    { label: "How it works", href: "#how" },
    { label: "Tiers", href: "#tiers" },
    { label: "CAIPO", href: "#caipo" },
  ],
  cta: { label: "Book a Demo", href: "#cta" },
};

export const hero = {
  eyebrow: `${brand.name} · Powered by ${brand.brain}`,
  title: "Athletic Performance Intelligence for modern organizations",
  subtitle:
    "A hardware-agnostic platform that unifies mental, physical, behavioral, and contextual athlete data — then transforms it into structured intelligence for coaches, staff, and performance leaders.",
  primaryCta: { label: "Book a Demo", href: "#cta" },
  secondaryCta: { label: "Explore the System", href: "#models" },
  chips: [
    "Readiness & recovery",
    "Load & risk signals",
    "Unified reporting",
    "Wearable optional",
  ],
};

export const media = {
  hero: {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=85",
    alt: "Athletes training in a high-performance facility with focused lighting",
  },
  problem: {
    src: "https://images.unsplash.com/photo-1461896836934-30fdb49c67c6?auto=format&fit=crop&w=1600&q=85",
    alt: "Stadium tunnel leading to the field, emphasizing performance environment",
  },
  solution: {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1600&q=85",
    alt: "Coach reviewing athlete preparation in a professional training setting",
  },
  reporting: {
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=2000&q=85",
    alt: "Team coaching discussion on the sideline during competition",
  },
  caipo: {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85",
    alt: "Abstract technology light trails suggesting real-time data flow",
  },
};

export const problem = {
  title: "Fragmented signals. Manual workflows. Slow decisions.",
  description:
    "Performance organizations collect more data than ever — yet insight remains siloed, uneven, and hard to operationalize when it matters most.",
  items: [
    {
      title: "Fragmented athlete data",
      body: "Metrics live across files, devices, and departments — never quite aligning into one operational picture.",
    },
    {
      title: "Incomplete readiness context",
      body: "Training load without recovery context — or subjective inputs without objective signals — limits confidence.",
    },
    {
      title: "Manual, repetitive workflows",
      body: "Staff spend time stitching reports instead of coaching, prioritizing interventions, and protecting availability.",
    },
    {
      title: "Insights that do not drive action",
      body: "Dashboards show activity, not decisions — leaving leaders without clear, repeatable performance intelligence.",
    },
  ],
};

export const solution = {
  title: "One intelligence layer. Unified performance truth.",
  lead: `${brand.name}, powered by ${brand.brain}`,
  body: [
    "FloBrain ingests raw and fragmented inputs — from workflows, integrations, and optional wearables — and structures them into consistent performance models.",
    "The result is decision support for daily operations: clearer prioritization, stronger communication across staff, and a scalable intelligence foundation for the organization.",
  ],
  bullets: [
    "Mental, physical, behavioral, and contextual signals in one framework",
    "From raw inputs to explainable intelligence — built for coaching workflows",
    "Flexible adoption: start without hardware, expand with devices on your timeline",
  ],
};

export const models = {
  title: "Core intelligence models",
  subtitle:
    "Six interconnected lenses that translate complex athlete reality into operational language for staff.",
  items: [
    {
      name: "Readiness",
      description:
        "A consolidated view of preparedness — balancing stress, recovery signals, and constraints.",
    },
    {
      name: "Load",
      description:
        "Training and competition stress quantified with context so progression stays intentional.",
    },
    {
      name: "Recovery",
      description:
        "Recovery dynamics made comparable across roles, schedules, and individual response patterns.",
    },
    {
      name: "Risk",
      description:
        "Early visibility into overload and vulnerability patterns — without reducing athletes to single scores.",
    },
    {
      name: "Performance",
      description:
        "Outcome-aligned tracking that connects preparation signals to what the organization values most.",
    },
    {
      name: "Context",
      description:
        "Travel, schedule density, role demands, and environment — the situational layer that shapes interpretation.",
    },
  ],
};

export const architecture = {
  title: "Hardware-agnostic by design",
  subtitle:
    "Adopt performance intelligence in the way that fits your organization — then scale as your ecosystem matures.",
  withoutWearables: {
    title: "Without wearables",
    points: [
      "Workflow-driven capture and staff inputs",
      "Structured models from day one",
      "Fast onboarding for academies and programs starting lean",
    ],
  },
  withWearables: {
    title: "With any wearables",
    points: [
      "Bring the devices your athletes already use",
      "Normalize disparate streams into FloBrain intelligence",
      "Unified reporting across brands and sensor types",
    ],
  },
  center: {
    title: "FloBrain",
    subtitle: "Performance intelligence core",
  },
};

export const howItWorks = {
  title: "From onboarding to insight",
  subtitle: "A disciplined pipeline designed for real organizations — not demo-day fiction.",
  steps: [
    {
      title: "Onboarding",
      body: "Define squads, roles, schedules, and the intelligence surfaces your staff needs.",
    },
    {
      title: "Workflow & device integration",
      body: "Connect operational workflows and optional wearables — standardized through FloBrain.",
    },
    {
      title: "Data collection",
      body: "Continuous capture with governance-minded structure — built for elite environments.",
    },
    {
      title: "Analysis & modeling",
      body: "FloBrain applies the core models to produce consistent, comparable intelligence.",
    },
    {
      title: "Coaching insights",
      body: "Actionable views for coaches, scientists, and leaders — aligned to decisions, not noise.",
    },
  ],
};

export const tiers = {
  title: "Consultancy tiers built for adoption",
  subtitle:
    "Choose the entry point that matches your organization — upgrade as your performance infrastructure matures.",
  items: [
    {
      name: "Tier 1",
      label: "No wearable",
      description:
        "Stand up performance intelligence using workflows and structured inputs — ideal for fast alignment across staff.",
      highlights: [
        "Core FloBrain models and reporting surfaces",
        "Operational onboarding with clear governance",
        "Expand later without rebuilding your foundation",
      ],
    },
    {
      name: "Tier 2",
      label: "With wearables",
      description:
        "Unify wearable streams alongside workflow data — one intelligence layer, one reporting language.",
      highlights: [
        "Device flexibility across athletes and teams",
        "Normalized streams into FloBrain models",
        "Deeper continuity for readiness, recovery, and load decisions",
      ],
      featured: true,
    },
    {
      name: "Tier 3",
      label: "Full custom system",
      description:
        "End-to-end integration for organizations that require bespoke pipelines, advanced governance, and full-stack alignment.",
      highlights: [
        "Custom integration architecture",
        "Advanced operational workflows",
        "Dedicated rollout and enablement partnership",
      ],
    },
  ],
};

export const reporting = {
  title: "Reporting built for athletes — and the staff who support them",
  subtitle:
    "Perspective-aware surfaces that keep communication coherent from the training floor to leadership reviews.",
  perspectives: [
    {
      title: "Athlete-facing clarity",
      body: "Purposeful summaries that respect attention and trust — focused on meaning, not metric overload.",
      items: ["Readiness framing", "Recovery guidance", "Load awareness", "Role-relevant cues"],
    },
    {
      title: "Coach & staff operations",
      body: "Operational views for prioritization, intervention planning, and cross-functional alignment.",
      items: [
        "Load management",
        "Recovery analysis",
        "Risk monitoring",
        "Performance tracking",
      ],
    },
  ],
};

export const caipo = {
  title: "CAIPO",
  subtitle: "AI wearable companion — ecosystem, not a gimmick",
  description:
    "CAIPO strengthens the data collection and feedback layer for organizations that want an intelligent companion alongside athlete wear — designed for hardware flexibility and real-world workflows.",
  points: [
    "Wearable-adjacent intelligence that supports consistent capture",
    "Real-time feedback patterns tuned for coaching environments",
    "Designed to complement your device strategy — not lock you into one",
  ],
};

export const whyUs = {
  title: "Why MoodChanger",
  subtitle: "Sport-first intelligence — engineered for adoption, scale, and credibility with performance staff.",
  items: [
    {
      title: "Sport-first platform",
      body: "Built around how elite teams actually operate — not generic wellness charts.",
    },
    {
      title: "Device-agnostic ecosystem",
      body: "Unify streams without forcing a single hardware bet across your organization.",
    },
    {
      title: "Consultancy-backed insight",
      body: "Tiers and enablement designed for real rollout — from academies to enterprise programs.",
    },
    {
      title: "Scalable for organizations",
      body: "A coherent intelligence layer that stays consistent as squads, seasons, and systems evolve.",
    },
  ],
};

export const cta = {
  title: "See performance intelligence on your terms",
  subtitle:
    "Book a demo for a guided walkthrough — or request a consultation to map adoption, integration, and governance for your environment.",
  primary: { label: "Book a Demo", href: "#cta" },
  secondary: { label: "Request a Consultation", href: "#cta" },
  form: {
    namePlaceholder: "Full name",
    orgPlaceholder: "Organization",
    emailPlaceholder: "Work email",
    notePlaceholder: "What are you trying to solve this season?",
    submit: "Submit request",
    disclaimer:
      "This form is a front-end placeholder — wire it to your CRM or email pipeline when ready.",
  },
};

export const footer = {
  description:
    "Athletic Performance Intelligence by MoodChanger — powered by FloBrain.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Platform", href: "#solution" },
        { label: "Models", href: "#models" },
        { label: "Architecture", href: "#architecture" },
        { label: "CAIPO", href: "#caipo" },
      ],
    },
    {
      title: "Tiers",
      links: [
        { label: "Tier 1 — No wearable", href: "#tiers" },
        { label: "Tier 2 — With wearables", href: "#tiers" },
        { label: "Tier 3 — Full integration", href: "#tiers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "How it works", href: "#how" },
        { label: "Reporting", href: "#reporting" },
        { label: "Why MoodChanger", href: "#why" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Book a demo", href: "#cta" },
        { label: "Consultation", href: "#cta" },
      ],
    },
  ],
  legal: "© {year} MoodChanger. All rights reserved.",
};
