import { readFile } from "fs/promises";
import { join } from "path";
import { buildShareMetaTags, siteMeta } from "../lib/site-meta.js";

export async function GET(request) {
  let html = await readFile(join(process.cwd(), "public", "index.html"), "utf8");

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    request.nextUrl.origin ||
    siteMeta.fallbackOrigin;

  const meta = buildShareMetaTags(origin);
  const titleTag = `<title>${siteMeta.title}</title>`;

  if (html.includes("</title>")) {
    html = html.replace(/<title>[\s\S]*?<\/title>/, titleTag);
  } else {
    html = html.replace(/<head>/i, `<head>\n  ${titleTag}`);
  }

  // Insert share + icon meta once, right after <title>
  if (!html.includes('property="og:title"')) {
    html = html.replace(titleTag, `${titleTag}\n  ${meta}`);
  }

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
