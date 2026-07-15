# Level 3 PT Diploma — pt.tphealthfitness.com

Standalone Next.js landing page for the TP Health & Fitness Level 3 PT Diploma.
Static export, deployed to the cPanel subdomain document root. This project does
not import from or modify the main site codebase.

## Before going live (action required)

1. **START DATE.** The original brief listed 27th September 2025, which has passed.
   The page currently shows the literal placeholder `[START_DATE]`. Set the real
   date in ONE place: `src/content/site.ts` (`START_DATE`), then rebuild.
2. **Photos.** Grey placeholder slots are in place for `[HERO_IMAGE]` (16:9),
   `[STUDIO_IMAGE]` (4:3), `[TRAINING_IMAGE_1]` (4:3), `[TEAM_IMAGE]` (3:4),
   `[TRAINING_IMAGE_2]` (4:3). Swap the `ImagePlaceholder` components for real
   images when Teighlor's Google Drive photos arrive. Also replace the OG image
   in `src/app/layout.tsx` (currently the TP logo) with a real photo for better
   social sharing.

## Build and deploy

```bash
npm install
npm run build     # outputs static site to out/
```

1. In cPanel, create the subdomain `pt.tphealthfitness.com` (document root e.g.
   `public_html/pt`).
2. Upload the **contents of `out/`** to that document root. The enquiry endpoint
   `api/enquiry.php` is included in `out/` automatically (it lives in `public/`),
   so the form posts same-origin with no CORS setup.
3. Run **AutoSSL** in cPanel (SSL/TLS Status) so the subdomain serves over HTTPS.
4. Send a test enquiry from the live page and confirm it reaches
   teighlor@tphealthfitness.com (check spam the first time).
5. Add a link to https://pt.tphealthfitness.com from the main site (separate
   change in the main site project; not done here by design).

## Decisions and notes for the reviewer

- **Form handling: PHP `mail()`, not Resend.** The brief allowed reusing an
  existing working handler. The TP Performance subdomain already runs a proven
  PHP `mail()` handler on this same cPanel host, so `public/api/enquiry.php`
  adapts that pattern (plus honeypot rejection and the "PT Diploma enquiry:
  {name}" subject). No API key exists in the repo or client JS. If deliverability
  is poor, swap the `mail()` call for a Resend API call inside the same file.
- **Colours.** The brief asked for "navy and orange from the existing palette",
  but the core TP brand (and the logo) is teal. There is no literal navy in the
  main site config. Exact values pulled from the existing codebase and used here:
  navy `#1a4a4e` (deep teal-navy from tphealthfitness.com), orange `#F97316`
  (accent from the TP Performance stylesheet), teal `#56b5bd` (logo, small
  accents), mist `#F0F9FA` (tint). The teal logo is rendered white on navy
  surfaces for contrast. If Teighlor expects a truer navy, change the two navy
  hex values in `tailwind.config.ts`.
- **Fonts.** Syne (display) + DM Sans (body), the pairing already used on the
  TP Performance subdomain, so the family of sites feels consistent.
- **Spelling to confirm with Teighlor:** none on this page, but note the main
  site has a pending "Kayleigh/Kayeigh" question from earlier work.
- **Honeypot:** hidden field named `company`; server rejects any submission
  where it is filled. Client also validates required fields, email format, and
  a lenient UK phone format.
- The booking link (ptqualificationdiploma.info/tphealth-pt) appears only as a
  subordinate text link under the pricing card and in the footer, per the brief.
