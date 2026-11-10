import { readFile } from "fs/promises";
import { join } from "path";
import { buildShareMetaTags, siteMeta } from "../lib/site-meta.js";

const bundleTemplate = /(<script type="__bundler\/template">\s*)("[\s\S]*?")(\s*<\/script>)/;
const careerLink = '<a href="/careers" style="font-size:14px;color:var(--muted)" style-hover="color:var(--brand-ink)">Careers</a>';

function addCareersNavigation(html) {
  // The homepage export keeps its visible header and footer inside a JSON template.
  const withFallback = html.replace(
    "This page requires JavaScript to display.",
    'This page requires JavaScript to display. <a href="/careers" style="color:#086d62;font-weight:700">Explore internships</a>.',
  );
  return withFallback.replace(bundleTemplate, (script, open, json, close) => {
    let template;
    try {
      template = JSON.parse(json);
    } catch {
      return script;
    }

    const updated = template
      .replace(/(<a href="#technology"[^>]*>Technology<\/a>)(?=[^<]*<a href="#pricing")/, `$1\n      ${careerLink}`)
      .replace(/<a href="https:\/\/www\.flolabsinnovations\.com\/"[^>]*>Careers<\/a>/, careerLink);
    if (updated === template) return script;

    // Keep any closing script tags inside the JSON string from ending the wrapper.
    return open + JSON.stringify(updated).replace(/<\//g, "<\\u002F") + close;
  });
}

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

  return new Response(addCareersNavigation(html), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
