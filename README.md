# Evoxnet Studio — screenshot-matched website

Static, responsive landing page built with **HTML**, **JavaScript**, a precompiled **Tailwind CSS** stylesheet, and custom CSS. Uses the supplied reference visual for design direction, with a bundled boutique storefront image. No database, build process, or server-side contact form required.

## Preview locally

```bash
cd evoxnet-studio-showcase
python3 -m http.server 8080
```
Open `http://localhost:8080/`. Alternatively open `index.html` directly, although a local server is recommended.

## Publish to GitHub Pages

1. Create a public GitHub repository (for example, `evoxnet-studio`).
2. Upload **the contents of this directory**, including `index.html`, `assets/`, `.nojekyll`, `robots.txt` and `sitemap.xml`, to the repository root. **Do not** upload only the ZIP.
3. In your repository navigate to **Settings → Pages → Build and deployment**.
4. Set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. For a project repo, GitHub will serve the site from `https://YOUR_USERNAME.github.io/YOUR_REPO/`. For a user site named `YOUR_USERNAME.github.io`, the address is `https://YOUR_USERNAME.github.io/`.
6. All CSS, JavaScript, and image references are `./assets/...`, so a project subpath works.

This project does not require `npm install`, `node_modules`, GitHub Actions, or backend hosting to publish.

## Important before going live

- **Contact details:** The website uses `+91 62967 71414` for WhatsApp and `contact@evoxnet.com` for email. Confirm that they are appropriate for public use, and search/replace if necessary.
- **SEO:** In `sitemap.xml`, replace `YOUR_USERNAME` and `YOUR_REPO` with your real GitHub Pages username and repository. Update `robots.txt` with the final absolute sitemap URL. Add a canonical link and Open Graph `og:url`/`og:image` with absolute URLs in `index.html` once the public address is known. Avoid using a fake `example.com` canonical.
- **SEO reality:** Proper page metadata and semantic markup help search engines, but rankings aren't guaranteed. Search Console, helpful content, performance and backlinks all matter.
- **Brand and content:** `StyleHub`, `serene`, and `northpoint` are **fictional examples**, not past clients. The content labels them as concepts; don't change that unless you have actual projects to show.
- **Prices:** No rates are invented. Packages are custom-quote only.
- **Form:** The form opens WhatsApp with a prepared message after validation. Visitors must confirm/send it in WhatsApp; nothing is sent to a backend or saved on this site.
- **Fonts:** Inter is loaded from Google Fonts when available, with a local system font fallback. All other images, scripts, and styles are stored locally.

## Edit the site

- `index.html` — content, navigation, business details, contact numbers, search metadata
- `assets/styles.css` — custom layout, colours, responsive breakpoints and animations
- `assets/tailwind.css` — already compiled Tailwind CSS
- `assets/main.js` — menu, active navigation, FAQs, package selector, WhatsApp form
- `assets/boutique-store.webp` — bundled hero photo, also used in preview mockups
- `assets/favicon.svg` — small logo icon

### Optional Tailwind recompilation

The precompiled stylesheet is included. If you change Tailwind utility classes and want to regenerate it, use:

```bash
npm install
npm run build:tailwind
```

Only `assets/tailwind.css` is regenerated; leave `assets/styles.css` in place.

## Accessibility & responsiveness

The website includes semantic landmarks, alt text, keyboard-accessible navigation, visible focus states, native FAQ details, responsive layouts and reduced-motion preferences. Test with your actual content, device and browser before release.
# localwebstudio
