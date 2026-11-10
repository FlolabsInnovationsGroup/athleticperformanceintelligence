import {
  assets, brand, careerPath, orderedRoles, origin, questions, rolePath, trackFor, tracks,
} from "./catalog.js";

const hubTitle = "Sports Science & Sports Technology Internships";
const hubDescription =
  "Explore 36 internship pathways in sports science, neuroscience, AI, wearable engineering, design and more at Athletic Performance Intelligence.";
const shareImage = `${assets}/careers-share.jpg`;
const brandId = `${origin}/#organization`;

const icons = {
  search: '<circle cx="10.75" cy="10.75" r="5.75"/><path d="m15 15 4 4"/>',
  moon: '<path d="M20.4 14.6A8.5 8.5 0 0 1 9.4 3.6a8.5 8.5 0 1 0 11 11Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2m-3-7.07-1.41 1.42M6.34 17.66l-1.41 1.41"/>',
  menu: '<path d="M4 8h16M4 16h16"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
};

function icon(name) {
  return `<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;
}

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
    { name: "Internships", item: origin + careerPath },
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
    <a href="${careerPath}"${onHub ? ' aria-current="page"' : ""}>Internships</a>
    <a href="${careerPath}#program">Program</a>
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
      <a class="button small header-action" href="${careerPath}#roles">Find a role</a>
      <button type="button" class="theme-toggle" data-theme-toggle aria-label="Dark mode" aria-pressed="false">
        <span class="moon">${icon("moon")}</span><span class="sun">${icon("sun")}</span>
      </button>
      <details class="mobile-nav">
        <summary aria-label="Main navigation menu">${icon("menu")}</summary>
        <nav aria-label="Mobile navigation">${links}</nav>
      </details>
    </div>
  </header>`;
}

function footer(productBase) {
  return `
  <footer class="footer">
    <div class="wrap footer-inner">
      <div>
        <a class="wordmark" href="${productBase}/">
          <img src="/logo.svg" alt="" width="34" height="34" loading="lazy">
          <span>${brand}</span>
        </a>
        <p>Understand what helps each athlete perform at their best.</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="${careerPath}#roles">Browse internships</a>
        <a href="${careerPath}#program">About the program</a>
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
  <meta property="og:image" content="${origin + shareImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Athletic Performance Intelligence internships over an aerial view of a stadium">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${metadata.title}">
  <meta name="twitter:description" content="${metadata.description}">
  <meta name="twitter:image" content="${origin + shareImage}">
  <meta name="twitter:image:alt" content="Athletic Performance Intelligence internships over an aerial view of a stadium">
  <link rel="icon" href="/logo.svg" type="image/svg+xml">
  <link rel="preload" href="${assets}/schibsted-grotesk.woff2" as="font" type="font/woff2" crossorigin>
  <script>try{if(localStorage.getItem("api-site-theme")==="dark")document.documentElement.dataset.theme="dark"}catch{}</script>
  <link rel="stylesheet" href="${assets}/careers.css">
  <noscript><style>[data-controls],[data-theme-toggle]{display:none!important}</style></noscript>
  <script src="${assets}/careers.js" defer></script>
  ${graph.length ? `<script type="application/ld+json">${jsonLd(graph)}</script>` : ""}
</head>
<body>
  ${header(productBase, onHub)}
  <main id="main">${body}</main>
  ${footer(productBase)}
</body>
</html>`;
}

function brandOrganization() {
  return { "@type": "Organization", "@id": brandId, name: brand, url: `${origin}/`, logo: `${origin}/logo.svg` };
}

function fieldLines() {
  return `<svg class="field-lines" viewBox="0 0 560 380" fill="none" aria-hidden="true">
    <path d="M0 352h184c166 0 300-134 300-300V0M0 372h184c177 0 320-143 320-320V0M0 332h184c155 0 280-125 280-280V0M0 312h184c144 0 260-116 260-260V0M0 292h184c133 0 240-107 240-240V0M0 272h184c122 0 220-98 220-220V0M0 252h184c111 0 200-89 200-200V0M0 232h184c100 0 180-80 180-180V0" stroke="currentColor"/>
  </svg>`;
}

function hubHero() {
  return `
  <section class="hero" aria-labelledby="hero-title">
    <img class="hero-image" src="${assets}/stadium-1024.webp"
      srcset="${assets}/stadium-640.webp 640w, ${assets}/stadium-1024.webp 1024w"
      sizes="(min-width: 900px) 86vw, 100vw"
      alt="Aerial view of a football pitch and running track inside a stadium"
      width="1024" height="786" fetchpriority="high">
    <div class="hero-wash"></div>
    <div class="wrap hero-inner">
      <div class="hero-copy">
        <p class="eyebrow on-image"><span></span>Sports science and technology internships</p>
        <h1 id="hero-title">Build what helps <em>athletes perform.</em></h1>
        <p class="hero-lead">Work on questions that matter to athletes and coaches. Explore internship pathways in sports science, AI, wearables and the tools teams use to understand performance.</p>
        <div class="hero-actions">
          <a class="button" href="#roles">Explore internships</a>
          <a class="text-link inverse" href="#program">Get to know the program</a>
        </div>
      </div>
      <aside class="hero-note" aria-label="A question we study">
        <svg aria-hidden="true" width="118" height="34" viewBox="0 0 118 34" fill="none">
          <path d="M1 30h116M1 16h116" stroke="#d2fffa" stroke-opacity=".23"/>
          <path d="m1 25 13-3 14 1 12-8 14 3 13-7 13 2 12-7 12 1 12-5" stroke="#7af0e4" stroke-width="1.75"/>
          <circle cx="116" cy="2" r="2" fill="#7af0e4"/>
        </svg>
        <span>One athlete’s own baseline</span>
        <p>What changes before the result changes?</p>
      </aside>
    </div>
  </section>
  <div class="hero-facts">
    <div class="wrap facts-inner">
      <p><strong>${orderedRoles.length}</strong> internship pathways</p>
      <p><strong>${tracks.length}</strong> disciplines</p>
      <a class="text-link" href="#program">See how the work connects</a>
    </div>
  </div>`;
}

function card(role) {
  const searchable = [role.title, role.lead, role.category, role.keywords, ...role.tasks, ...role.skills].join(" ");
  return `
  <article class="role-card" data-role data-search="${escapeHtml(searchable)}">
    <a class="role-card-link" href="${rolePath(role)}">
      <h4>${escapeHtml(role.title)}</h4>
      <p>${escapeHtml(role.lead)}</p>
    </a>
  </article>`;
}

function directory() {
  return `
  <section class="directory wrap" id="roles" aria-labelledby="roles-title" data-directory>
    <div class="directory-head">
      <div>
        <p class="eyebrow">The role directory</p>
        <h2 id="roles-title">Find your internship</h2>
        <p>Compare responsibilities, skills and example projects across all seven disciplines.</p>
      </div>
      <div class="search-field" data-controls>
        <label for="role-search">Search internships</label>
        <div class="input-wrap">
          ${icon("search")}
          <input type="search" id="role-search" placeholder="Try EEG, wearables or Python" autocomplete="off" aria-controls="role-list">
        </div>
      </div>
    </div>
    <div class="directory-controls" data-controls>
      <fieldset class="filters">
        <legend class="sr-only">Filter by discipline</legend>
        <button type="button" data-track-filter="" aria-pressed="true">All disciplines</button>
        ${tracks.map((track) => `<button type="button" data-track-filter="${track.key}" aria-pressed="false">${escapeHtml(track.name)}</button>`).join("")}
      </fieldset>
      <p class="result-count" role="status" data-count>${orderedRoles.length} internship pathways</p>
    </div>
    <div id="role-list">
      ${tracks.map((track) => `
      <section class="track" id="${track.key}" data-track="${track.key}" aria-labelledby="title-${track.key}">
        <div class="track-intro">
          <h3 id="title-${track.key}">${escapeHtml(track.name)}</h3>
          <p>${escapeHtml(track.description)}</p>
        </div>
        <div class="role-grid">${track.roles.map(card).join("")}</div>
      </section>`).join("")}
    </div>
    <div class="no-results" data-empty hidden>
      <h3>No matching internships</h3>
      <p>Try a different search term or clear the discipline filter.</p>
      <button class="button" type="button" data-reset>Show all internships</button>
    </div>
  </section>`;
}

function program(productBase) {
  return `
  <section class="program" id="program" aria-labelledby="program-title">
    <div class="wrap program-inner">
      <div class="program-intro">
        <p class="eyebrow">How we work</p>
        <h2 id="program-title">Start with the athlete’s question</h2>
        <p>A team wants to understand a dip in performance. A sports scientist might compare the athlete’s recent sleep and training with their own history. A data engineer checks where the measurements came from. A designer helps the coach see what’s worth discussing.</p>
        <a class="text-link" href="${productBase}/#signature">Explore the Peak Performance Signature</a>
      </div>
      <div class="program-panel">
        <p class="eyebrow">What a project can involve</p>
        <dl>
          <div><dt>Body</dt><dd>Sleep, recovery, fueling and physiology.</dd></div>
          <div><dt>Mind</dt><dd>Attention, cognition and mental readiness.</dd></div>
          <div><dt>Context</dt><dd>Travel, environment and daily routines.</dd></div>
          <div><dt>Performance</dt><dd>Training load, sport-specific output and competition results.</dd></div>
        </dl>
      </div>
    </div>
  </section>`;
}

function faq() {
  return `
  <section class="faq wrap" id="questions" aria-labelledby="faq-title">
    <div>
      <p class="eyebrow">Applicant questions</p>
      <h2 id="faq-title">Before you choose a role</h2>
    </div>
    <div class="faq-list">
      ${questions.map(({ question, answer }) => `
        <details>
          <summary><span>${escapeHtml(question)}</span>${icon("plus")}</summary>
          <p>${escapeHtml(answer)}</p>
        </details>`).join("")}
    </div>
  </section>`;
}

export function renderHub({ preview = false } = {}) {
  const url = origin + careerPath;
  return page({
    title: hubTitle, description: hubDescription, path: careerPath, onHub: true, preview,
    body: hubHero() + directory() + program(preview ? origin : "") + faq(),
    graph: [
      brandOrganization(),
      {
        "@type": "CollectionPage", "@id": url, url, name: hubTitle, description: hubDescription,
        publisher: { "@id": brandId }, inLanguage: "en",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: orderedRoles.length,
          itemListElement: orderedRoles.map((role, index) => ({
            "@type": "ListItem", position: index + 1, name: role.title, url: origin + rolePath(role),
          })),
        },
      },
      breadcrumbs(careerPath),
    ],
  });
}

function roleList(heading, items) {
  return `<section class="role-section">
    <h2>${heading}</h2>
    <ul class="clean-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
  </section>`;
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
        <h2 id="related-title">Explore related internships</h2>
        <a class="text-link" href="${careerPath}#roles">View all internships</a>
      </div>
      <div class="related-grid">
        ${related.map((candidate) => `
        <a href="${rolePath(candidate)}">
          <p class="eyebrow">${escapeHtml(candidate.category)}</p>
          <h3>${escapeHtml(candidate.title)}</h3>
          <p>${escapeHtml(candidate.lead)}</p>
        </a>`).join("")}
      </div>
    </div>
  </section>`;
}

export function renderRole(role, { preview = false } = {}) {
  const track = trackFor(role);
  const path = rolePath(role);
  const url = origin + path;
  return page({
    title: role.title, description: role.description, path, preview,
    body: `
    <div class="wrap">
      <nav class="crumbs" aria-label="Breadcrumb">
        <ol>
          <li><a href="${preview ? origin : ""}/">Home</a></li>
          <li><a href="${careerPath}">Internships</a></li>
          <li aria-current="page">${escapeHtml(role.title)}</li>
        </ol>
      </nav>
    </div>
    <section class="role-hero" aria-labelledby="role-title">
      ${fieldLines()}
      <div class="wrap role-hero-inner">
        <p class="eyebrow on-image"><span></span>${escapeHtml(track.name)}</p>
        <h1 id="role-title">${escapeHtml(role.title)}</h1>
        <p>${escapeHtml(role.lead)}</p>
      </div>
    </section>
    <div class="wrap role-layout">
      <div class="role-content">
        <section class="role-section">
          <h2>About the internship</h2>
          <p>${escapeHtml(role.mission)}</p>
        </section>
        ${roleList("What you could work on", role.tasks)}
        ${roleList("Skills and interests", role.skills)}
        <section class="sample-project">
          <p class="eyebrow">A practical example</p>
          <h2>Sample project</h2>
          <p>${escapeHtml(role.project)}</p>
        </section>
      </div>
      <aside class="role-aside" aria-labelledby="pathway-title">
        <p class="eyebrow">Internship pathway</p>
        <h2 id="pathway-title">Application details</h2>
        <p>Application instructions and placement details will appear here when available.</p>
        <a class="text-link" href="${careerPath}#questions">Applicant questions</a>
        <a class="aside-discipline" href="${careerPath}#${track.key}">More in ${escapeHtml(track.name)}</a>
      </aside>
    </div>
    ${relatedRoles(role, track)}`,
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
    title: "Internship page not found",
    description: "Return to the Athletic Performance Intelligence internship directory.",
    path: careerPath,
    noindex: true,
    body: `<section class="wrap not-found">
      <p class="eyebrow">Internships</p>
      <h1>We couldn’t find that role.</h1>
      <p>Browse the directory to find an internship that fits your interests.</p>
      <a class="button" href="${careerPath}#roles">Explore internships</a>
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
