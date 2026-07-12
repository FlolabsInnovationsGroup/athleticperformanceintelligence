# Athletic Performance Intelligence Website Plan

> Implementation plan for the api-website project. Last updated with footer spec, project links, and LinkedIn social link.

## Current State

- Repo has the logo at `FloLabs_logo API.svg` (valid SVG, `#31D2C1` fills). Will be copied to `public/logo.svg` during build.
- Source content: 23-page PDF at `c:\Users\cg980\Downloads\Athletic Performance Intelligence Hardware Agnostic.pdf` (will be copied to `docs/`).
- Design rules: `AI Design and Coding Guide.md` from Obsidian vault (will be copied to `docs/`).
- CTA: **mailto** links via `NEXT_PUBLIC_CONTACT_EMAIL`. Use placeholder `hello@flolabs.com` in `.env.local` until a real address is provided.

---

## Phase 1: Project Foundation

Initialize with Next.js App Router, TypeScript, Tailwind CSS, and ESLint:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

**Folder layout** (minimal, human-readable):

```
api-website/
├── docs/
│   ├── Athletic-Performance-Intelligence-Hardware-Agnostic.pdf
│   ├── AI-Design-and-Coding-Guide.md
│   └── PLAN.md
├── public/
│   ├── logo.svg
│   ├── og-image.png
│   └── images/sections/*.webp
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── content/
│   │   └── site-content.ts
│   └── lib/
│       └── theme.ts
└── scripts/
    └── extract-pdf-images.py
```

Update the copied design guide's stack placeholders (Section 2) to **Next.js App Router / TypeScript / Tailwind CSS**.

---

## Phase 2: Design System (Human-Made, Not AI-Generic)

### Color tokens (Tailwind + CSS variables)

| Token | Value | Usage |
|-------|-------|-------|
| `brand` | `#31D2C1` | Logo color, primary accent, links, key highlights (same in light + dark) |
| `accent` | `#FDE035` | Sparingly: status chips, one standout CTA element |
| `surface-dark` | `#112836` | Dark mode page background |
| Light surfaces | off-white / warm gray derived from brand | Light mode backgrounds, cards |

**Rules:** no neon glows, random gradients, or decorative icon libraries. Borders and spacing do the structural work.

### Typography (avoid Inter/Roboto)

- **Headings:** `Fraunces` or `Libre Baskerville`
- **Body:** `IBM Plex Sans`

Apply `text-wrap: balance` on headings and `&nbsp;` where needed to prevent orphan words.

### Layout

- 12-column grid via a reusable `Container` (`max-w-7xl`, responsive gutters).
- Sections use presentation images as full-bleed backgrounds where available; text-only sections stay on the default surface until a supporting image is added.
- Consistent vertical rhythm: `py-16 md:py-24` section padding.

### Light / Dark mode

- `next-themes` with `class` strategy on `<html>`, no flash on load.
- Theme toggle in sticky header.
- Logo stays `#31D2C1` always.

---

## Phase 3: Content Architecture (Exact PDF Wording)

All copy lives in `src/content/site-content.ts`. **No rewriting, summarizing, or em-dashes.** Preserve PDF spelling/capitalization exactly: FloLabs, CAIPO, FloBrain, MoodChanger, Hephaestus, Flo Chronos.

Strip invisible Unicode joiners from PDF text (e.g. zero-width chars in `MoodChanger`) so text renders correctly.

### Long-scroll sections (single `page.tsx`, anchor IDs)

1. Hero
2. MoodChanger
3. FloBrain
4. What Is API
5. API System Models
6. The Challenge
7. The Solution
8. How API Works
9. Tier 1 (No Wearable)
10. Tier 1 Deliverables
11. How It Works Without Wearables (include once; PDF pages 11 and 16 are duplicates)
12. Tier 2 (With Wearable)
13. Tier 2 Device Flow
14. Tier 2 Dashboards
15. How It Works With Wearable
16. Tier 3 Overview
17. Tiers 1-3 Progressive Comparison
18. Consultancy Pricing / CTA
19. CAIPO
20. Coming Soon
21. Why MoodChanger
22. Footer

---

## Phase 4: Image Extraction and Mapping

Run `scripts/extract-pdf-images.py` using PyMuPDF + Pillow:

1. Extract **embedded images only** per PDF page (photos, dashboards, illustrations).
2. Skip recurring 1000x1000 logo watermarks and 200x200 decorative icons.
3. Convert selected images to WebP (quality ~85) in `public/images/sections/`.
4. **Do not** render full PDF pages as fallback screenshots.
5. Use extracted images as **section backgrounds** (text overlays with a readable scrim).
6. Text-only slides have no background until a supporting image is added manually.

| Section | Source asset | Background? |
|---------|-------------|-------------|
| Hero | *(none — add manually)* | No |
| MoodChanger | `page-02-img-3` | Yes |
| FloBrain | *(none — add manually)* | No |
| What Is API | *(none — add manually)* | No |
| API System Models | *(none — add manually)* | No |
| The Challenge | *(none — add manually)* | No |
| The Solution | *(none — add manually)* | No |
| How API Works | *(none — add manually)* | No |
| Tier 1 | `page-09-img-1` | Yes |
| Tier 1 Deliverables | `page-10-img-2` | Yes |
| How It Works (no wearable) | *(none — add manually)* | No |
| Tier 2 | `page-12-img-1` | Yes |
| Tier 2 Device Flow | `page-13-img-1..5` wearable logos | Inline content only |
| Tier 2 Dashboards | `page-14-img-2` | Yes |
| How It Works (with wearable) | *(none — add manually)* | No |
| Tier 3 | `page-17-img-1` | Yes |
| Tiers 1-3 Compare | *(none — add manually)* | No |
| Pricing / CTA | *(none — add manually)* | No |
| CAIPO | `page-20-img-1` | Yes |
| Coming Soon | `page-21-img-1..4` | Inline product grid |
| Why MoodChanger | *(none — add manually)* | No |
| Footer | No section image | No |

To add a manual background later: drop a WebP in `public/images/sections/`, add the path to `src/content/section-images.ts`, and pass `backgroundImage` on the matching `<Section>`.

---

## Phase 5: Core Components

### Footer spec (Hephaestus-style layout)

Reference: `docs/footer-reference.png` (save during build).

**Column 1: Brand + engagement**
- Logo + **Athletic Performance Intelligence** + `| by FloLabs Innovations Group`
- Description: MoodChanger's hardware-agnostic athletic performance intelligence system. Integrates multi-source athlete data into actionable insights, powered by FloBrain.
- **NEWSLETTER:** email input + "Send" button (UI only, no backend yet)
- **SOCIAL MEDIA** (YouTube + LinkedIn icons, new tab):
  - YouTube (Connecting the Dots): https://www.youtube.com/@flolabsinnovation
  - LinkedIn: https://www.linkedin.com/company/flolabs-innovation/

**Column 2: NAVIGATION** (in-page anchors)
- Home → `#hero`
- MoodChanger → `#moodchanger`
- FloBrain → `#flobrain`
- API → `#api`
- Services → `#tier-1`
- CAIPO → `#caipo`
- Contact → `#pricing`

**Column 3: PROJECTS** (external links)

| Label | URL |
|-------|-----|
| Athletic Performance Intelligence | https://www.athleticperformanceintelligence.com/ |
| Innovation Bootcamp University | https://www.bootcampuniversity.org/ |
| CAIPO | https://www.caipo.ai/ |
| Connecting the Dots | https://www.youtube.com/@flolabsinnovation |
| Flo Travel | https://www.flomadtravel.com/ |
| FloBrain | https://www.flobrain.ai/ |
| FloLabs Innovations | https://www.flolabsinnovations.com/ |
| FloLabs International | https://www.flolabs.international/ |
| FloStudios | https://www.flostudios.ai/ |
| Hephaestus International | https://hephaestus.international/ |
| MoodChanger | https://www.moodchanger.ai/ |
| Legal & Ethics Ventures Institute | https://www.legalethicsventuresinstitute.com/ |
| RoboCollective | https://www.robocollective.ai/ |
| Space Ventures Institute | https://www.spaceventuresinstitute.com/ |
| TARRL | https://tarrl.org/ |

**Column 4: COMPANY**
- Contact Us → mailto from `NEXT_PUBLIC_CONTACT_EMAIL`
- Careers → https://www.flolabsinnovations.com/
- Merch → https://flolabsrd.notion.site/merch-background
- Initial consultation → mailto CTA

**Bottom bar:** "Live long and prosper."

Footer background: `#112836` in both themes. Responsive: 4 cols → 2 cols → stacked.

---

## Phase 6: SEO and Metadata

- Title: `Athletic Performance Intelligence | Hardware Agnostic`
- Open Graph + Twitter Card tags
- `public/og-image.png` at 16:9
- Favicon via `public/logo.svg`
- `metadataBase`: https://www.athleticperformanceintelligence.com (or env override)

---

## Phase 7: QA Checklist

- Viewports: 320px, 768px, 1024px, 1440px
- Light + dark themes, logo at `#31D2C1`
- Exact PDF copy, no em-dashes, correct nomenclature
- All section images WebP
- Mailto CTA works
- `docs/` contains PDF, design guide, and this plan

---

## Pre-Build Checklist

1. ~~SVG logo~~ `FloLabs_logo API.svg` in repo root
2. ~~Contact email~~ placeholder `hello@flolabs.com`
3. ~~Footer links~~ 15 project URLs provided
4. ~~Newsletter~~ visual UI only
5. ~~Footer tagline~~ "Live long and prosper."
6. ~~LinkedIn~~ https://www.linkedin.com/company/flolabs-innovation/

---

## Implementation Order

1. Scaffold Next.js + Tailwind + copy reference docs into `docs/`
2. Design tokens, fonts, theme provider, base layout
3. Build `site-content.ts` with full PDF copy
4. Run image extraction script → WebP assets
5. Build section components
6. Wire single `page.tsx` long scroll with anchor nav + footer
7. Add metadata + og-image
8. Move logo to `public/logo.svg`
9. Full responsive + theme QA pass
