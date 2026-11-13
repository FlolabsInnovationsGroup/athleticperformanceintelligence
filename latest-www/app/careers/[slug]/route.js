import { orderedRoles } from "../../../lib/careers/catalog.js";

export const dynamic = "force-static";

export function generateStaticParams() {
  return orderedRoles.map(({ slug }) => ({ slug }));
}

export async function GET(_request, { params }) {
  const { slug } = await params;
  const found = orderedRoles.some((role) => role.slug === slug);
  return found ? new Response(null, {
    status: 308,
    headers: { Location: `/learning-opportunities/${slug}` },
  }) : new Response("Opportunity not found", { status: 404 });
}
