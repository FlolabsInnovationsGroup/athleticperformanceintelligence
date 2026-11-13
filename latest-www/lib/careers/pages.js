import {
  assets, brand, careerPath, orderedRoles, origin, questions, roleKind, rolePath, trackFor, tracks,
} from "./catalog.js";

const hubTitle = "Internships, Research & Learning Opportunities";
const hubDescription =
  "Join a learning and research community through internships and applied projects in sports science, neuroscience, AI, and wearable technology.";
const stadium = `${assets}/stadium-1024.webp`;
const stadiumAlt = "Aerial view of a football pitch and running track";
const brandId = `${origin}/#organization`;

function escapeHtml(value) {
  const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return String(value).replace(/[&<>"']/g, (character) => entities[character]);
}

function jsonLd(schema) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": schema })
    .replace(/</g, "\\u003c");
}

function breadcrumbs(path, label) {
  const items = [
    { name: brand, item: `${origin}/` },
    { name: "Internships & Learning", item: origin + careerPath },
  ];
  if (path !== careerPath) items.push({ name: label, item: origin + path });
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, ...item,
    })),
  };
}

function header(productBase, onHub) {
  const links = `
    <a href="${productBase}/#api">Platform</a>
    <a href="${careerPath}"${onHub ? ' aria-current="page"' : ""}>Internships &amp; Learning</a>
    <a href="${careerPath}#methodology">Methodology</a>
    <a href="${careerPath}#questions">FAQ</a>`;
  return `
  <a class="skip" href="#main">Skip to content</a>
  <header class="masthead">
    <div class="wrap masthead-inner">
      <a class="wordmark" href="${productBase}/">
        <img src="/logo.svg" alt="" width="38" height="38">
        <span>${brand}</span>
      </a>
      <nav class="desktop-nav" aria-label="Main navigation">${links}</nav>
      <button type="button" class="theme-toggle" data-theme-toggle aria-pressed="false">Dark mode</button>
      <details class="mobile-nav">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">${links}</nav>
      </details>
    </div>
  </header>`;
}

function footer(productBase) {
  return `
  <footer class="footer">
    <div class="wrap footer-inner">
      <a class="wordmark" href="${productBase}/">
        <img src="/logo.svg" alt="" width="34" height="34" loading="lazy">
        <span>${brand}</span>
      </a>
      <nav aria-label="Footer navigation">
        <a href="${careerPath}#roles">Learning opportunities</a>
        <a href="${careerPath}#methodology">Athlete performance methodology</a>
        <a href="${productBase}/#signature">Peak Performance Signature</a>
      </nav>
    </div>
  </footer>`;
}

function page({ title, description, path, body, graph = [], onHub = false, preview = false, noindex = false }) {
  const canonical = origin + path;
  const fullTitle = `${title} | ${brand}`;
  const productBase = preview ? origin : "";
  const metadata = {
    title: escapeHtml(fullTitle),
    description: escapeHtml(description),
    canonical: escapeHtml(canonical),
  };
  return `<!doctype html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${metadata.title}</title>
  <meta name="description" content="${metadata.description}">
  <meta name="robots" content="${preview || noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}">
  ${noindex ? "" : `<link rel="canonical" href="${metadata.canonical}">`}
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${brand}">
  <meta property="og:title" content="${metadata.title}">
  <meta property="og:description" content="${metadata.description}">
  <meta property="og:url" content="${metadata.canonical}">
  <meta property="og:image" content="${origin + stadium}">
  <meta property="og:image:width" content="1024">
  <meta property="og:image:height" content="786">
  <meta property="og:image:alt" content="${stadiumAlt}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${metadata.title}">
  <meta name="twitter:description" content="${metadata.description}">
  <meta name="twitter:image" content="${origin + stadium}">
  <meta name="twitter:image:alt" content="${stadiumAlt}">
  <link rel="icon" href="/logo.svg" type="image/svg+xml">
  <link rel="preload" href="${assets}/schibsted-grotesk.woff2" as="font" type="font/woff2" crossorigin>
  <script>try{if(localStorage.getItem("api-site-theme")==="dark")document.documentElement.dataset.theme="dark"}catch{}</script>
  <link rel="stylesheet" href="${assets}/careers.css">
  <noscript><style>[data-theme-toggle]{display:none!important}</style></noscript>
  <script src="${assets}/careers.js" defer></script>
  ${graph.length ? `<script type="application/ld+json">${jsonLd(graph)}</script>` : ""}
</head>
<body>
  ${header(productBase, onHub)}
  <main id="main" tabindex="-1">${body}</main>
  ${footer(productBase)}
</body>
</html>`;
}

function brandOrganization() {
  return { "@type": "Organization", "@id": brandId, name: brand, url: `${origin}/`, logo: `${origin}/logo.svg` };
}

function hubHero() {
  return `
  <section class="hero" aria-labelledby="hero-title">
    <div class="wrap hero-inner">
      <div class="hero-copy">
        <h1 id="hero-title">Internships, research and learning opportunities</h1>
        <p class="hero-lead">Learn by building alongside people exploring AI, neuroscience, sports science and wearable technology. Contribute to real research and product challenges while developing the skills to take on more responsibility.</p>
        <p class="hero-lead">Our first goal is to welcome committed learners into a collaborative community. This is not a conventional job board or an application for immediate employment. Experienced researchers can explore the Research Associate pathway.</p>
        <p class="hero-links"><a class="text-link" href="#journey">How learning works</a><a class="text-link" href="#roles">Explore opportunities</a></p>
      </div>
      <img class="hero-image" src="${stadium}"
        srcset="${assets}/stadium-640.webp 640w, ${stadium} 1024w"
        sizes="(min-width: 1280px) 610px, (min-width: 761px) 48vw, 94vw"
        alt="${stadiumAlt}" width="1024" height="786" fetchpriority="high">
    </div>
  </section>`;
}

function learningJourney() {
  return `
  <section class="wrap learning-journey" id="journey" aria-labelledby="journey-title">
    <div class="journey-intro">
      <p class="eyebrow">Learning comes first</p>
      <h2 id="journey-title">Build experience through participation</h2>
      <p>We are looking for people who want to learn, collaborate and make meaningful contributions over time. You do not have to be ready for a full-time role to get started. We look for commitment, curiosity and a willingness to improve through feedback.</p>
    </div>
    <div class="journey-steps">
      <section><h3>Explore your interests</h3><p>Choose a field or project that interests you. Learn what the work involves and the skills you can develop.</p></section>
      <section><h3>Get to know the community</h3><p>Start with an application when intake is open, introductory learning, orientation and conversations about mutual fit.</p></section>
      <section><h3>Learn through real work</h3><p>Collaborate on research, experiments, software, prototypes or operations, with regular team discussion and feedback.</p></section>
      <section><h3>Grow into new opportunities</h3><p>Build a record of useful contributions and develop new capabilities. Career opportunities may be considered separately when available.</p></section>
    </div>
    <div class="participation-note">
      <h3>Before you join</h3>
      <p>Participation is remote-first and generally requires at least 8–10 hours each week. Specific arrangements are confirmed before you begin. A learning opportunity is not an offer of employment and does not guarantee a paid position later.</p>
      <a class="text-link" href="#questions">Read the participation questions</a>
    </div>
  </section>`;
}

function roleEntry(role) {
  const labels = roleLabels(role);
  return `
  <article class="role-entry" aria-labelledby="role-${role.slug}">
    <header class="role-entry-header">
      <h4 id="role-${role.slug}"><a href="${rolePath(role)}">${escapeHtml(role.title)}</a></h4>
      <p>${escapeHtml(role.lead)}</p>
    </header>${roleDescription(role, labels, true)}
  </article>`;
}

function roleListings() {
  return `
  <section class="role-listings wrap" id="roles" aria-labelledby="roles-title">
    <header class="listings-head">
      <h2 id="roles-title">Explore learning opportunities</h2>
      <p class="listings-description">These are project pathways within a learning and research community. Internship pathways emphasize development and contribution; the Research Associate pathway is intended for experienced researchers.</p>
    </header>${tracks.map((track) => `
    <section class="track" id="${track.key}" aria-labelledby="title-${track.key}">
      <div class="track-intro">
        <h3 id="title-${track.key}">${escapeHtml(track.name)}</h3>
        <p>${escapeHtml(track.description)}</p>
      </div>
      <div class="role-stack">${track.roles.map(roleEntry).join("")}</div>
    </section>`).join("")}
  </section>`;
}

function program(productBase) {
  return `
  <div class="program">
    <section class="wrap program-intro" id="program" aria-labelledby="program-title">
      <h2 id="program-title">Athlete performance research</h2>
      <p>When a coach asks why an athlete’s performance has changed, we start with the athlete’s own history. We compare recent training, sleep, travel and competition results, then check whether the measurements are reliable enough to guide the next decision.</p>
      <a class="text-link" href="${productBase}/#signature">Peak Performance Signature</a>
    </section>
    <section class="wrap method-overview" id="methodology" aria-labelledby="methodology-title">
      <h2 id="methodology-title">Loop Engineering and Recursive Self Improvement</h2>
      <p>We use Loop Engineering and Recursive Self Improvement (RSI) in every role. In sports science, that could mean testing whether a change in recovery timing helps an athlete feel ready for the next session, then using the result to improve the next study.</p>
      <dl class="method-steps">
        <div>
          <dt>Loop Engineering</dt>
          <dd>Agree on the outcome and the athlete’s baseline with performance staff. Test a defined change under comparable conditions, then review the results and any other factors that could explain them.</dd>
        </div>
        <div>
          <dt>Recursive Self Improvement (RSI)</dt>
          <dd>Use each result to improve how the next test is designed, how data is collected, or how a model interprets it. Check the revision against fresh observations. The athlete and staff review the evidence before changing training or recovery.</dd>
        </div>
      </dl>
    </section>
  </div>`;
}

function faq() {
  return `
  <section class="faq wrap" id="questions" aria-labelledby="faq-title">
    <h2 id="faq-title">Learning program questions</h2>
    <div class="faq-list">${questions.map(({ question, answer }) => `
      <section>
        <h3>${escapeHtml(question)}</h3>
        <p>${escapeHtml(answer)}</p>
      </section>`).join("")}
    </div>
  </section>`;
}

export function renderHub({ preview = false } = {}) {
  const url = origin + careerPath;
  return page({
    title: hubTitle, description: hubDescription, path: careerPath, onHub: true, preview,
    body: hubHero() + learningJourney() + roleListings() + program(preview ? origin : "") + faq(),
    graph: [
      brandOrganization(),
      {
        "@type": "CollectionPage", "@id": url, url, name: hubTitle, description: hubDescription,
        publisher: { "@id": brandId }, inLanguage: "en",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: orderedRoles.map((role) => ({
            "@type": "WebPage", name: role.title, url: origin + rolePath(role),
          })),
        },
      },
      breadcrumbs(careerPath),
    ],
  });
}

function roleLabels(role) {
  return roleKind(role) === "research"
    ? { about: "About the role", work: "What you’ll lead", fit: "Research experience" }
    : { about: "About the internship", work: "Responsibilities", fit: "Skills and experience" };
}

function roleList(heading, items, level) {
  return `<section class="role-section">
    <${level}>${heading}</${level}>
    <ul class="clean-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
  </section>`;
}

function roleDescription(role, labels, inline = false) {
  const level = inline ? "h5" : "h2";
  const methodId = inline ? `${role.slug}-method` : "role-method";
  return `
  <div class="role-content">
    <section class="role-section">
      <${level}>${labels.about}</${level}>
      <p>${escapeHtml(role.mission)}</p>
    </section>
    <div class="role-requirements">
      ${roleList(labels.work, role.tasks, level)}
      ${roleList(labels.fit, role.skills, level)}
    </div>
    <section class="role-method" id="${methodId}" aria-labelledby="${methodId}-title">
      <${level} id="${methodId}-title">Loop Engineering and Recursive Self Improvement</${level}>
      <dl class="method-steps">
        <div><dt>Loop Engineering</dt><dd>${escapeHtml(role.method.loop)}</dd></div>
        <div><dt>Recursive Self Improvement (RSI)</dt><dd>${escapeHtml(role.method.rsi)}</dd></div>
      </dl>${inline ? "" : `\n      <a class="text-link" href="${careerPath}#methodology">See how we apply RSI to athlete performance</a>`}
    </section>
    <section class="sample-project">
      <${level}>Sample project</${level}>
      <p>${escapeHtml(role.project)}</p>
    </section>
  </div>`;
}

function relatedRoles(role, track) {
  const ownTrack = track.roles.filter((candidate) => candidate !== role);
  const nearby = track.key === "performance-science" ? "research-governance" : "performance-science";
  const adjacent = tracks.find((candidate) => candidate.key === nearby);
  const related = [...ownTrack, ...adjacent.roles].slice(0, 3);
  return `
  <section class="related" aria-labelledby="related-title">
    <div class="wrap">
      <div class="related-head">
        <h2 id="related-title">Related opportunities</h2>
        <a class="text-link" href="${careerPath}#roles">Explore all opportunities</a>
      </div>
      <ul class="related-list">${related.map((candidate) => `
        <li><a class="text-link" href="${rolePath(candidate)}">${escapeHtml(candidate.title)}</a></li>`).join("")}
      </ul>
    </div>
  </section>`;
}

export function renderRole(role, { preview = false } = {}) {
  const track = trackFor(role);
  const path = rolePath(role);
  const url = origin + path;
  const research = roleKind(role) === "research";
  const labels = roleLabels(role);
  return page({
    title: role.title, description: role.description, path, preview,
    body: `
    <div class="wrap">
      <nav class="crumbs" aria-label="Breadcrumb">
        <ol>
          <li><a href="${preview ? origin : ""}/">Home</a></li>
          <li><a href="${careerPath}">Internships &amp; Learning</a></li>
          <li aria-current="page">${escapeHtml(role.title)}</li>
        </ol>
      </nav>
    </div>
    <section class="role-hero" aria-labelledby="role-title">
      <div class="wrap role-hero-inner">
        <h1 id="role-title">${escapeHtml(role.title)}</h1>
        <p>${escapeHtml(role.lead)}</p>
        <p class="role-program-context">This opportunity is part of a collaborative learning and research program, not an immediate employment offer.</p>
      </div>
    </section>
    <div class="wrap role-layout">${roleDescription(role, labels)}
      <aside class="role-aside" aria-labelledby="pathway-title">
        <h2 id="pathway-title">Learning pathway</h2>
        <p>Explore this work as part of a learn-and-contribute community. Confirmed intake details and participation terms will be published when available; this is not a direct-hire application.</p>
        <a class="text-link" href="${careerPath}#journey">How the program works</a>
        <a class="text-link" href="#role-method">How this role uses RSI</a>
        <a class="text-link" href="${careerPath}#questions">Program questions</a>
        <a class="text-link" href="${careerPath}#${track.key}">${escapeHtml(track.name)} roles</a>
      </aside>
    </div>
    ${research ? "" : relatedRoles(role, track)}`,
    graph: [
      brandOrganization(),
      {
        "@type": "WebPage", "@id": url, url, name: role.title, description: role.description,
        publisher: { "@id": brandId }, isPartOf: { "@id": origin + careerPath },
        about: { "@type": "Thing", name: role.category }, inLanguage: "en",
      },
      breadcrumbs(path, role.title),
    ],
  });
}

export function renderNotFound() {
  return page({
    title: "Opportunity not found",
    description: "Explore Athletic Performance Intelligence learning and research opportunities.",
    path: careerPath,
    noindex: true,
    body: `<section class="wrap not-found">
      <h1>We couldn’t find that opportunity.</h1>
      <a class="text-link" href="${careerPath}#roles">Learning opportunities</a>
    </section>`,
  });
}

export function htmlResponse(body, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
