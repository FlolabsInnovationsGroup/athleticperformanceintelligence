import { origin } from "../lib/careers/catalog.js";

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
    ],
    sitemap: `${origin}/sitemap.xml`,
  };
}
