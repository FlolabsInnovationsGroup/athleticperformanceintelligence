export const siteMeta = {
  title: "Athletic Performance Intelligence | Hardware Agnostic",
  description:
    "Athletic Performance Intelligence, Hardware Agnostic. Delivered to you by MoodChanger. Powered by FloBrain.",
  siteName: "Athletic Performance Intelligence",
  fallbackOrigin: "https://www.athleticperformanceintelligence.com",
};

/** Build <head> tags for favicon + Open Graph / Twitter share previews. */
export function buildShareMetaTags(origin) {
  const base = origin.replace(/\/$/, "");
  const { title, description, siteName } = siteMeta;
  const image = `${base}/og-image.png`;
  const url = `${base}/`;

  return `
  <meta name="description" content="${escapeAttr(description)}">
  <link rel="icon" href="/logo.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${escapeAttr(siteName)}">
  <meta property="og:title" content="${escapeAttr(title)}">
  <meta property="og:description" content="${escapeAttr(description)}">
  <meta property="og:url" content="${escapeAttr(url)}">
  <meta property="og:image" content="${escapeAttr(image)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${escapeAttr(title)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeAttr(title)}">
  <meta name="twitter:description" content="${escapeAttr(description)}">
  <meta name="twitter:image" content="${escapeAttr(image)}">
`.trim();
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}
