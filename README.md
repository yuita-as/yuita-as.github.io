# Yuita Arum Sari — Academic Website

Static, dependency-free site for GitHub Pages. Light, compact design with one shared header and footer on every page.

## Preview locally
    python -m http.server 8000
then open http://localhost:8000

## Deploy
Upload every file (including the `assets` folder) to the repository root, then **Settings → Pages → Deploy from a branch → main / (root)**.

## Where to edit

| What | File |
|---|---|
| Menu & footer links (all pages) | `layout.js` |
| Colors, spacing, fonts | `styles.css` (variables at the top) |
| Research projects (home, research and project pages) | `projects-data.js` — only the funding *scheme* is shown, never amounts |
| Awards & recognition | `awards-data.js` |
| Undergraduate thesis archive | `supervision-data.js` (student NIMs are not stored) |
| Master's theses, competitions, internships | `supervision-extra.js` |
| Research assistants: name, period, topic, and achievements while in the team | `supervision-extra.js` → `RESEARCH_ASSISTANTS` |
| Blog posts | `blog-data.js` (opened via `post.html?slug=...`) |
| Home, About, CV, Publications, Books, Talks | the matching `.html` file |
| Google Sheets / Looker Studio links | `data-config.js` |

## Optional: live data from Google Sheets
Books, Talks, and Blog can load from a published Google Sheet (**File → Share → Publish to web → CSV**). Paste each CSV URL into `data-config.js`. Required first-row headings:

- Blog: `date, tag, title, summary, url`
- Books: `title, authors, year, publisher, pages, isbn, url, cover`
- Talks: `year, role, event, topic, url`

If a URL is empty, the content written in the HTML page is shown.

## Pages
`index.html` home · `bio.html` · `research.html` · `project.html?id=…` · `publications.html` · `books.html` · `awards.html` · `research-assistant.html` · `supervision.html` (overview) with `supervision-undergraduate.html`, `supervision-masters.html`, `supervision-competitions.html`, `supervision-internships.html` · `speaking.html` · `blog.html` / `post.html` · `cv.html` (printable) · `code.html` · `dashboard.html` · `papers.html` redirects to Publications.

Metrics on the home and CV pages are an August 2026 snapshot; update them periodically.
