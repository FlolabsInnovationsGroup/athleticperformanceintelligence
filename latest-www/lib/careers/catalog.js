import roles from "./roles.json" with { type: "json" };
import { siteMeta } from "../site-meta.js";

export const brand = siteMeta.siteName;
export const origin = siteMeta.fallbackOrigin;
export const careerPath = "/careers";
export const assets = "/career-assets";
export const rolePath = (role) => `${careerPath}/${role.slug}`;
export const roleKind = (role) => role.kind ?? "internship";

const disciplines = [
  {
    key: "performance-science",
    name: "Performance Science",
    description: "Study training, sleep, recovery and cognition in the context of each athlete’s sport.",
  },
  {
    key: "ai-data",
    name: "AI & Data",
    description: "Build models and data systems that help coaches interpret individual performance.",
  },
  {
    key: "engineering-wearables",
    name: "Engineering & Wearables",
    description: "Prototype devices and test how reliably they capture signals in motion.",
  },
  {
    key: "product-experience",
    name: "Product & Experience",
    description: "Design and test tools athletes and coaches can use in training and competition.",
  },
  {
    key: "research-governance",
    name: "Research & Governance",
    description: "Make performance research reproducible and help protect athlete data.",
  },
  {
    key: "growth-partnerships",
    name: "Growth & Partnerships",
    description: "Understand how sports organizations work and communicate the value of better evidence.",
  },
  {
    key: "operations-people",
    name: "Operations & People",
    description: "Help teams plan projects, coordinate delivery and bring new people into the work.",
  },
];

export const tracks = disciplines.map((track) => ({
  ...track,
  roles: roles.filter((role) => role.category === track.name),
}));
export const orderedRoles = tracks.flatMap((track) => track.roles);
export const trackFor = (role) => tracks.find((track) => track.name === role.category);

export const questions = [
  {
    question: "What kinds of roles can I explore?",
    answer: "The careers page covers internships in sports science, neuroscience, AI, engineering, wearables, design, research, partnerships and operations. Experienced researchers can also read about the Research Associate role.",
  },
  {
    question: "Who should consider the Research Associate role?",
    answer: "PhD holders, doctoral candidates, postdocs and experienced subject matter experts who can lead applied research. Relevant fields include sports science, physiology, biomechanics, neuroscience, statistics, machine learning and wearable sensing.",
  },
  {
    question: "Are the internships remote?",
    answer: "The pathways are designed for remote collaboration. Device testing, partner meetings and some research activities may require in-person arrangements. Check the role page for placement details as they are confirmed.",
  },
  {
    question: "Do I need experience working with professional athletes?",
    answer: "Relevant coursework, independent projects, research or transferable professional experience can help you show how you would contribute. Each role page explains the skills and interests relevant to that work.",
  },
  {
    question: "What kind of athlete data would I work with?",
    answer: "Depending on the role, projects can use training logs, check-ins, sensor data or competition results. Early experiments can use synthetic or appropriately consented data. Each project should document who can access the data and what the evidence can support.",
  },
  {
    question: "How do I apply?",
    answer: "Scroll through the role descriptions to review the work, relevant experience and sample projects. Application instructions will appear on the relevant role page when available.",
  },
];
