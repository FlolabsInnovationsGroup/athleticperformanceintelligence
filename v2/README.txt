Athletic Performance Intelligence - WORKING COPY (dev handoff)

Contents
- index.html   The page (markup, inline styles and the small logic block at the bottom).
- support.js   Runtime that renders index.html. Must sit next to it. Do not edit.
- assets/      All images used by the page (relative paths: assets/..., assets/wearables/...).

How to view
Open index.html in a browser. Keep the folder structure as is. If a browser blocks local scripts,
run a local server from this folder, e.g.  python3 -m http.server  and open http://localhost:8000

Notes for the dev team
- Mobile layout applies at 700px wide and under (CSS media queries in the style block near the top of index.html).
- Contact form (top nav "Lets connect") has no backend. It opens the visitor's email app addressed to hello@flolabs.com
  (see contactSubmit in the logic block). Replace with your form endpoint.
- Font loads from Google Fonts. External links: flobrain.ai, caipo.ai, moodchanger.ai.
- Content and layout are final for review; text changes were made by the content owner section by section.
