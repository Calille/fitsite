# PT Diploma migration → main site

The Level 3 PT Diploma landing page now lives on the main Next.js site at:

**https://www.tphealthfitness.com/level-3-pt-course/**

Source of truth in this monorepo:

- Route: `src/app/level-3-pt-course/`
- Components: `src/components/level3-pt/`
- Content: `src/content/level3-pt.ts`
- Assets: `public/level3-pt/`
- Enquiry PHP: `public/api/enquiry.php`

The standalone `ptdiploma/` app is kept for reference only and should no longer be deployed as a live site.

## Subdomain redirect (required on cPanel)

Upload the contents of `ptdiploma/redirect-to-main/` to the
`pt.tphealthfitness.com` document root (e.g. `public_html/pt`), replacing the
old static export. That installs a 301 redirect (plus an HTML fallback) from
any `pt.tphealthfitness.com` URL to `/level-3-pt-course/` on the main site.
