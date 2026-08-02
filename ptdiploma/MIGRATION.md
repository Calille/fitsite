# PT Diploma migration → main site

The Level 3 PT Diploma landing page now lives on the main Next.js site at:

**https://www.tphealthfitness.com/level-3-pt-course/**

Source of truth in this monorepo:

- Route: `src/app/level-3-pt-course/`
- Components: `src/components/level3-pt/`
- Content: `src/content/level3-pt.ts`
- Assets: `public/level3-pt/`
- Enquiry PHP: `public/api/enquiry.php`

The standalone `ptdiploma/` app is kept for reference only and should **no longer** be deployed as a live site.

---

## Two separate uploads (do both)

These are **two different document roots**. Uploading the main site alone does **not** redirect the subdomain. Until step 2 is done, `pt.tphealthfitness.com` will keep serving its old content.

### Upload 1 — Main site (tphealthfitness.com)

1. Build on this branch: `npm run build`
2. The static export is in **`cpanel-build/`** (not `out/`).
3. In cPanel → **File Manager**, open the main site document root (usually `public_html/`).
4. Upload **the contents of `cpanel-build/`** into that folder (replace existing site files).
   - Or upload a zip of those contents and Extract in `public_html/`.
5. Confirm these exist after upload:
   - `public_html/index.html`
   - `public_html/level-3-pt-course/index.html`
   - `public_html/level3-pt/` (images + videos)
   - `public_html/api/enquiry.php`
   - `public_html/.htaccess`

### Upload 2 — Subdomain redirect (pt.tphealthfitness.com)

1. In cPanel → **Domains** / **Subdomains**, find `pt.tphealthfitness.com` and note its document root (often `public_html/pt` or similar).
2. Open that folder in File Manager.
3. Upload **the contents of `ptdiploma/redirect-to-main/`** into that folder, replacing the old PT Diploma site files:
   - `.htaccess` (301 redirect — keep the leading dot; File Manager may hide it until “Show Hidden Files” is on)
   - `index.html` (fallback redirect if rewrite rules fail)
4. Optional but recommended: remove leftover old PT Diploma assets (`_next/`, old images, etc.) from the subdomain root so only the redirect files remain.
5. Visit `https://pt.tphealthfitness.com` — it should land on  
   `https://www.tphealthfitness.com/level-3-pt-course/`.

---

## After both uploads — quick smoke checks

1. `https://www.tphealthfitness.com/` — Google “5 stars” badge + Meet Teighlor photo
2. `https://www.tphealthfitness.com/level-3-pt-course/` — full course page, videos, enquiry form
3. Navbar shows **Level 3 PT Course**
4. `https://www.tphealthfitness.com/team/` — roles + Jo bio; Kayleigh under Studio Team
5. `https://pt.tphealthfitness.com` — redirects to the new course page
6. Submit a test enquiry on the course page and confirm email to Teighlor

---

## Deploy packages (if using zips)

From a clean build of this branch you can use:

- `deploy-packages/main-site-cpanel-build.zip` — extract into main site document root
- `deploy-packages/pt-subdomain-redirect.zip` — extract into `pt.` subdomain document root

Rebuild packages after any new code change with:

```bash
npm run build
mkdir -p deploy-packages
(cd cpanel-build && zip -r ../deploy-packages/main-site-cpanel-build.zip .)
(cd ptdiploma/redirect-to-main && zip -r ../../deploy-packages/pt-subdomain-redirect.zip .)
```
