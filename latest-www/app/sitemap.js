import { careerPath, orderedRoles, origin, rolePath } from "../lib/careers/catalog.js";

export default function sitemap() {
  return ["/", careerPath, ...orderedRoles.map(rolePath)].map((path) => ({ url: origin + path }));
}
