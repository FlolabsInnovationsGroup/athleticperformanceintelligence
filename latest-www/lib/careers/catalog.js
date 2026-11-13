import roles from "./roles.json" with { type: "json" };
import { siteMeta } from "../site-meta.js";

export const brand = siteMeta.siteName;
export const origin = siteMeta.fallbackOrigin;
export const careerPath = "/learning-opportunities";
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
    question: "Is this a learning program or a job application?",
    answer: "Our primary invitation is to join an experiential learning and research community. The opportunities describe ways to learn and contribute to applied projects. This page is not a direct-hire job board, and participation does not promise employment.",
  },
  {
    question: "Who can participate?",
    answer: "We welcome motivated students, graduates, career changers and independent learners who are willing to contribute and learn collaboratively. Research Associate opportunities are separately intended for doctoral researchers, postdocs and experienced subject matter experts.",
  },
  {
    question: "How does the learning journey work?",
    answer: "Prospective participants review the available opportunities, complete the current intake process when open, take part in introductory learning and orientation, and discuss their interests and fit before joining an appropriate project team. Steps may vary by pathway.",
  },
  {
    question: "How much time should I expect to commit?",
    answer: "The program is remote-first and typically asks participants to plan for at least 8–10 hours each week. Specific expectations, arrangements and any terms are confirmed for each opportunity before participation.",
  },
  {
    question: "Do I need experience with professional athletes?",
    answer: "No. Curiosity, sound judgment and a willingness to learn matter for many pathways. Coursework, independent projects and experience from other fields can also be relevant. Experienced research opportunities have different expectations.",
  },
  {
    question: "Can the program lead to a career with Athletic Performance Intelligence?",
    answer: "Strong contributors may be considered for career opportunities if relevant roles become available and there is a mutual fit. Participation does not guarantee employment, payment or a future job offer.",
  },
  {
    question: "How can I apply to join the community?",
    answer: "Review the learning opportunities and the program information first. Verified application instructions will be published here when the next intake is open. No direct-hire application is offered on this page.",
  },
];
