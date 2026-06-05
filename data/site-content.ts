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
  cta: { label: "Get in touch", href: "#cta" },
};

export const hero = {
  eyebrow: `${brand.name} | Powered by ${brand.brain}`,
  title: "Athletic Performance Intelligence for modern organizations",
  subtitle:
    "A platform that unifies mental, physical, behavioral, and contextual athletic data transforming it into structured intelligence connecting to your preferred device.",
  secondaryCta: { label: "Explore the System", href: "#models" },
  pdfBrief: {
    label: "Download overview (PDF)",
    href: "/media/athletic-performance-intelligence.pdf",
    downloadName: "Athletic-Performance-Intelligence-Hardware-Agnostic.pdf",
  },
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
    src: "/media/problem-fragmented-signals.png",
    alt: "Multiple athlete-performance dashboards showing fragmented and conflicting health metrics",
  },
  solution: {
    src: "/media/flobrain-dashboard.png",
    alt: "Laptop displaying a unified health and fitness performance dashboard with daily activity, weekly progress, heart rate, and goals",
  },
  reporting: {
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=2000&q=85",
    alt: "Team coaching discussion on the sideline during competition",
  },
  caipo: {
    src: "/media/caipo-device.jpg",
    alt: "CAIPO wearable hardware",
  },
};

export const problem = {
  title: "Fragmented signals. Manual workflows. Missed decision windows.",
  description:
    "Performance organizations collect more data than ever, yet insight remains siloed, uneven, and hard to operationalize when it matters most.",
  items: [
    {
      title: "Fragmented athlete data",
      body: "Metrics live across files, devices, and departments, never quite aligning into one operational picture.",
    },
    {
      title: "Incomplete readiness context",
      body: "Training load without recovery context, or subjective inputs without objective signals, limits confidence.",
    },
    {
      title: "Manual, repetitive workflows",
      body: "Staff spend time stitching reports instead of coaching, prioritizing interventions, and protecting availability.",
    },
    {
      title: "Insights that do not drive action",
      body: "Dashboards track activity, not decisions, leaving leaders without clear direction.",
    },
  ],
};

export const solution = {
  title: "A unified layer that brings real-time performance into one view.",
  lead: `Powered by ${brand.brain}`,
  body: [
    "FloBrain brings your data together into a consistent view of athletic performance, leading to clearer priorities, stronger communication, and more confident decisions across daily operations.",
  ],
  bullets: [
    "Mental, physical, behavioral, and contextual signals in one framework",
    "From raw inputs to explainable intelligence: built for coaching workflows",
    "Flexible adoption: start without hardware, expand with devices on your timeline",
  ],
};

export const models = {
  title: "Core intelligence models",
  subtitle:
    "Six connected views that turn complex athlete data into clear insights.",
  items: [
    {
      name: "Readiness",
      description:
        "A single view that shows how stress, recovery, and constraints affect readiness.",
    },
    {
      name: "Load",
      description:
        "Training and competition stress, measured with context to optimize progression.",
    },
    {
      name: "Recovery",
      description:
        "Recovery dynamics made comparable across roles, schedules, and individual response patterns.",
    },
    {
      name: "Risk",
      description:
        "Early insight into overload and risk patterns, without reducing athletes to a single score.",
    },
    {
      name: "Performance",
      description:
        "Structured tracking that shows how preparation leads to results",
    },
    {
      name: "Context",
      description:
        "Workload, schedule density, role demands, and environment form the context that shapes interpretation.",
    },
  ],
};

export const architecture = {
  title: "Hardware-agnostic by design. Powerful with or without devices.",
  subtitle:
    "Adopt performance intelligence in the way that fits your organization, then scale as your ecosystem matures.",
  withoutWearables: {
    title: "Without wearables",
    points: [
      "Capture data through workflows and inputs.",
      "Structured from day one.",
      "Fast onboarding for growing teams.",
    ],
  },
  withWearables: {
    title: "With any wearables",
    points: [
      "Integration of the devices already in use.",
      "Turn different data streams into a clear, consistent view.",
      "Unified reporting across all devices and sensor types.",
    ],
  },
  center: {
    title: "FloBrain",
    subtitle: "Performance intelligence core",
  },
};

export const howItWorks = {
  title: "From onboarding to optimization",
  subtitle: "A structured pipeline designed for real-world use, not demo scenarios.",
  steps: [
    {
      title: "Onboarding",
      body: "Define teams, roles, schedules, and the key insights your team relies on.",
    },
    {
      title: "Workflow & device integration",
      body: "Unify your workflows and wearables into one standardized system.",
    },
    {
      title: "Data collection",
      body: "Continuous data capture with a structured, reliable foundation built for high-performance environments.",
    },
    {
      title: "Analysis & modeling",
      body: "FloBrain applies its core models to turn data into consistent, comparable insights.",
    },
    {
      title: "Coaching insights",
      body: "Clear, actionable views that focus on decisions, not noise.",
    },
  ],
};

export const tiers = {
  title: "Start at the level that fits your team, and grow as your needs evolve.",
  subtitle:
    "Choose the entry point that matches your organization, upgrade as your performance infrastructure matures.",
  items: [
    {
      name: "Tier 1",
      label: "Without wearable",
      description: "Turn workflows and inputs into performance insights",
      highlights: [
        "Core models and reporting brought together.",
        "Onboarding designed for clarity and structure.",
        "A foundation that grows with you over time.",
      ],
    },
    {
      name: "Tier 2",
      label: "With wearables",
      description:
        "All your data together, wearables and workflows, in one clear view.",
      highlights: [
        "Flexible device use from individual to team level",
        "Normalized streams into FloBrain models",
        "Deeper continuity for readiness, recovery, and load decisions",
      ],
      featured: true,
    },
    {
      name: "Tier 3",
      label: "Full custom system",
      description:
        "End-to-end integration for organizations that need a setup tailored to them, with clear structure and alignment.",
      highlights: [
        "Custom integration architecture",
        "Advanced operational workflows",
        "Dedicated rollout and enablement partnership",
      ],
    },
  ],
};

export const reporting = {
  title: "Reporting that keeps teams and coach's goals aligned",
  subtitle:
    "Clear views for every role. Keeping consistent communication across all levels.",
  perspectives: [
    {
      title: "Built for athlete clarity",
      body: "Purposeful summaries that respect attention and trust, focused on meaning, not metric overload.",
      items: ["Readiness framing", "Recovery guidance", "Load awareness", "Role-relevant cues"],
    },
    {
      title: "Coach & Team operations",
      body: "Operational views designed for prioritization, planning, and cross-team alignment.",
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
  subtitle: "AI wearable companion. Connected by design.",
  description:
    "CAIPO strengthens the data collection and feedback layer for organizations that want an intelligent companion alongside athlete wear, designed for hardware flexibility and real-world workflows.",
  points: [
    "Built to complement your performance strategy, not limit it.",
    "Real-time feedback, built for performance optimization.",
    "Consistent data capture across wearable and non-wearable inputs.",
  ],
};

export const whyUs = {
  title: "Why MoodChanger",
  subtitle: "Built for sport. Ready to scale. Trusted to perform.",
  items: [
    {
      title: "Platform built for sport",
      body: "Built for real teams. Not just generic wellness.",
    },
    {
      title: "Device-optional platform",
      body: "Unify data across sources without depending on any devices",
    },
    {
      title: "Expert-driven insights",
      body: "Designed to scale from small organizations to enterprise.",
    },
    {
      title: "Scalable flexibility",
      body: "A unified intelligence layer that evolves with your organization while keeping athletes, staff, and performance goals aligned.",
    },
  ],
};

export const cta = {
  title: "See performance intelligence on your terms",
  subtitle:
    "Share a few details about your organization and priorities. We will follow up with tailored next steps, whether you want a product walkthrough, a scoping conversation, or both.",
  form: {
    namePlaceholder: "Full name",
    orgPlaceholder: "Organization",
    emailPlaceholder: "Work email",
    notePlaceholder: "What are you trying to solve this season?",
    submit: "Submit request",
    disclaimer:
      "This form is a front-end placeholder, wire it to your CRM or email pipeline when ready.",
  },
};

export const footer = {
  description:
    "Athletic Performance Intelligence by MoodChanger, powered by FloBrain.",
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
      title: "Resources",
      links: [
        {
          label: "Overview PDF (download)",
          href: "/media/athletic-performance-intelligence.pdf",
          download: "Athletic-Performance-Intelligence-Hardware-Agnostic.pdf",
        },
        { label: "How it works", href: "#how" },
        { label: "Reporting", href: "#reporting" },
        { label: "Why MoodChanger", href: "#why" },
      ],
    },
    {
      title: "Contact",
      links: [{ label: "Get in touch", href: "#cta" }],
    },
  ],
};
