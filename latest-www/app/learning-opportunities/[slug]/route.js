import { orderedRoles } from "../../../lib/careers/catalog.js";
import { htmlResponse, renderNotFound, renderRole } from "../../../lib/careers/pages.js";

export const dynamic = "force-static";

export function generateStaticParams() {
  return orderedRoles.map(({ slug }) => ({ slug }));
}

export async function GET(_request, { params }) {
  const { slug } = await params;
  const role = orderedRoles.find((candidate) => candidate.slug === slug);
  return role ? htmlResponse(renderRole(role)) : htmlResponse(renderNotFound(), 404);
}
