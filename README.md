# Grafik Studio Landing Page

Static replica of the Grafik Studio landing page. Everything lives in a single `index.html`, making it ready to deploy on any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

## Local Preview

```bash
# from repo root
npm install -g serve   # or use python -m http.server
serve .
# open the printed localhost URL
```

## Deploying

- **Netlify / Vercel**: drag-and-drop the folder or select the repo and choose a static site project (no build command required, publish directory is the repo root).
- **GitHub Pages**: enable Pages for the repository and select the main branch root as the source.
- **Any static host / S3**: upload `index.html` (and any additional assets you add later) directly.

## Customisation Notes

- Update the canonical URL and meta image in `index.html` (`<head>`) once you know your production domain and social share artwork.
- Replace the placeholder text logo inside the navbar with your actual SVG or image if desired. Drop the file into the project and swap the markup where the `brand-mark` span lives.
- All styles/scripts are inline and self-contained; add additional CSS or JS inside the existing `<style>` / `<script>` blocks as needed.

## Assets

The page still references Webflow’s CDN for layout CSS and video backgrounds. If you prefer everything self-hosted, download those assets, place them locally, and update the URLs in `index.html`.
