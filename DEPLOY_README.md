# Tiruni Karunarathna — Portfolio (React + Vite + Tailwind)

## Deploying to your existing hosting (public_html)

You don't need a Node server to run this site — it's a static site once built.

1. Upload everything inside the `dist/` folder (already built for you) to your
   `public_html` directory on your host, replacing the old files.
2. That's it. `index.html`, `assets/`, `images/`, and the favicon files all sit
   at the same level `public_html` already expects.

If you want to make changes first, see "Local development" below, then run
`npm run build` again and re-upload the new `dist/` contents.

## Local development

```
npm install
npm run dev       # local dev server with hot reload
npm run build     # produces the dist/ folder to upload
```

## Before you publish — a few things to double check

1. **DP-700 result** — `src/data/content.js` lists DP-700 as "In Progress"
   since the exam outcome wasn't confirmed. Update the `status` field once
   you have the result.
2. **ITX360 internship description** — I generalized the client description
   to "financial services clients" instead of naming LOLC, Incube, and
   Central Finance specifically, since I didn't know if you have permission
   to name client engagements publicly. Add real names back in
   `src/data/content.js` → `experience` if you're able to.
3. **Contact form** — reuses your existing Web3Forms access key from the old
   site, so it should work immediately without any setup.
4. **GitHub / Tableau links** — pulled from your old footer
   (github.com/ApsaaraK, Tableau Public profile, Medium). Double-check these
   are still current.
5. **Project URLs** — only Phoenix Lanka had a live URL in the old site
   (phoenixlanka.com). Add live URLs for FlyCeylon, Engspire, etc. in
   `src/data/content.js` if they're publicly viewable.

## What changed from the old site

- Removed the fabricated testimonials and placeholder stats (45+ projects,
  10TB+ data processed, 99.9% uptime, 3+ years experience) — replaced with a
  live GitHub stats widget and a Tableau dashboard gallery.
- The four old "case study" pages (Real-Time Pipeline, Data Warehouse,
  ML Infrastructure, Tableau Dashboards) are kept as **Architecture Design
  Studies**, honestly labeled as self-directed learning work, with the
  fabricated performance numbers (e.g. "8.4M events/sec", "12,480 connected
  devices") removed. The technical content and diagrams are real and kept.
- Added your real projects front and center: the Sri Lanka Cost-of-Living
  Data Portfolio (flagship), Phoenix Lanka, FlyCeylon, the Sweets
  Manufacturing ERP, and Engspire.
- Added a proper Experience timeline (ITX360 internship, freelance work,
  Brandix background) — this wasn't on the old site at all, and it's the
  strongest thing recruiters will want to see.
