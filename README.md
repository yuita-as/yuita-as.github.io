# Yuita Arum Sari — Professional Academic Website

A responsive, accessible, dependency-free academic website. It is ready for free hosting on GitHub Pages and includes dedicated project pages plus a searchable supervision archive.

## Preview locally

Open `index.html` directly, or run a local server from this folder:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Sign in at [github.com](https://github.com) and create a new **public** repository, for example `yuita-arum-sari`.
2. On the repository page choose **Add file → Upload files**.
3. Upload **every file in this folder**, including `index.html`, `project.html`, `supervision.html`, all `.js` files, `styles.css`, `README.md`, and the entire `assets` folder. The files must remain at the repository root exactly as shown.
4. Commit the upload to the `main` branch.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch **main**, folder **/(root)**, then click **Save**.
8. Wait 1–3 minutes. Refresh the Pages settings screen until the green success message shows the live URL, usually `https://YOUR-USERNAME.github.io/yuita-arum-sari/`.
9. Open the URL in a private/incognito window and test the menu, four project-detail links, supervision search and filters, external links, and mobile layout.

For the cleanest address, name the repository `YOUR-USERNAME.github.io`; the site will then be available at `https://YOUR-USERNAME.github.io/`.

## Before publishing

- Confirm project descriptions and the complete 120-record supervision archive.
- Add an ORCID link when the verified ORCID iD is available.
- Academic metrics are a dated snapshot and should be updated periodically.
- The current design intentionally does not display a portrait photograph.
- The blue research-roadmap infographic was generated specifically for this website from the supplied six-domain roadmap.

## Site structure

- `index.html` — Home
- `bio.html` — biography, education, and working experience
- `research.html` — research areas, roadmap, and current projects
- `code.html` — datasets, repositories, and research-software links
- `papers.html` — selected papers
- `books.html` — verified book gallery
- `publications.html` — journals, patents, and HKI
- `cv.html` — concise academic CV
- `supervision.html` — searchable supervision archive; student NIMs are not displayed
- `speaking.html` — speaker, moderator, and jury engagements
- `blog.html` and `post.html` — expandable blog
- `dashboard.html` — optional Looker Studio embed

## Connect Google Sheets for live updates

This website can load the Blog, Books, and Speaker/Judge pages from public Google Sheets while retaining local fallback content.

1. Create one spreadsheet with separate sheets for `blog`, `books`, and `speaking`.
2. Use these exact first-row headings:
   - Blog: `date, tag, title, summary, url`
   - Books: `title, authors, year, publisher, pages, isbn, url, cover`
   - Speaking/Judge: `year, role, event, topic, url`
3. In Google Sheets choose **File → Share → Publish to web**.
4. Select the relevant sheet and choose **Comma-separated values (.csv)**.
5. Copy each published CSV URL.
6. Open `data-config.js` and paste the URLs into `blogCsv`, `booksCsv`, and `speakingCsv`.
7. Commit and push the edited file to GitHub. New spreadsheet rows will then appear on the site without another HTML edit.

Only publish information intended for public viewing. Google Sheets data loaded by this site is public to every website visitor.

## Connect Looker Studio

1. Make the Looker Studio report publicly viewable.
2. Enable report embedding and copy its `/embed/reporting/...` URL.
3. Paste that URL into `lookerStudioEmbed` in `data-config.js`.
4. Open `dashboard.html` to verify the embedded report.

External academic profiles such as Scholar, Scopus, and SINTA remain direct links because those platforms do not provide a dependable browser-side feed for a static GitHub Pages site.

## Main data sources

- FILKOM Universitas Brawijaya faculty profile
- SINTA author profile 6181778
- Google Scholar profile J5gQoNcAAAAJ
- Scopus author profile 57189058237
- Supplied education/research record and thesis-supervision record
