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
    description: "Talk with sports organizations about how they use performance data and what they need from new tools.",
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
    question: "What do sports science interns work on?",
    answer: "Sports science interns study how athletes respond to training, recovery, travel and cognitive demands. Other internships work on wearable sensors, athlete data, performance models and the tools coaches use to interpret the results.",
  },
  {
    question: "Who should consider the Research Associate role?",
    answer: "The Research Associate role is for PhD holders, doctoral candidates, postdocs and experienced subject matter experts with a record of applied research. Relevant fields include sports science, physiology, biomechanics, neuroscience, statistics, machine learning and wearable sensing.",
  },
  {
    question: "Are the internships remote?",
    answer: "Most collaboration is designed to happen remotely. Device testing, partner meetings and some research activities may need to happen in person. Placement details will appear on the relevant role page as they’re confirmed.",
  },
  {
    question: "Do I need experience working with professional athletes?",
    answer: "For internships, relevant coursework, independent projects, research and experience from other fields can show how you’d contribute. Read the skills and experience section for the role you’re considering.",
  },
  {
    question: "What kind of athlete data would I work with?",
    answer: "Projects may use training logs, athlete check-ins, wearable sensor readings or competition results. Early tests can use simulated data or data athletes have consented to share. Teams document who can access it and what conclusions it supports.",
  },
  {
    question: "How do I apply?",
    answer: "Each role page will list application instructions when they’re available. You can read the responsibilities, skills and sample projects here now.",
  },
];
