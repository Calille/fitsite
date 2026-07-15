# AGENTS.md

## Cursor Cloud specific instructions

### Repository layout — three independent Next.js apps
This repo contains three separate Next.js apps, each with its own `package.json`
and `node_modules`. They do not share dependencies; install in each directory.

| App | Directory | Next.js | Purpose | Dev port |
| --- | --- | --- | --- | --- |
| `fitsite` (main site) | `/` | 15.2.4 | TP Health & Fitness marketing site | 3000 |
| `ptdiploma` | `ptdiploma/` | 15.2.4 | Standalone Level 3 PT Diploma landing page | use `-p 3001` |
| `tp-performance` | `tpperformance/` | 16.1.6 (Tailwind v4) | Standalone TP Performance landing page | use `-p 3002` |

The update script runs `npm install` in all three directories on startup.

### Running (dev)
- Main site: `npm run dev` (serves on http://localhost:3000).
- Subprojects default to port 3000 too, so run them on other ports, e.g.
  `cd ptdiploma && npm run dev -- -p 3001` and `cd tpperformance && npm run dev -- -p 3002`.

### Known build gotcha (pre-existing, do not "fix" as setup)
`npm run build` in the repo root fails during `Checking validity of types` with
`Cannot find module '@/components/Nav'` from `ptdiploma/src/app/page.tsx`. Cause:
the root `tsconfig.json` `include` globs `**/*.tsx` (which pulls in the
`ptdiploma/` subproject) but its `exclude` only lists `tpperformance`, not
`ptdiploma`. The `@/*` path alias then resolves against the root `src/`. This is
a repository issue unrelated to environment setup. The dev server (`npm run dev`)
compiles routes on demand and is unaffected. Build each subproject from inside
its own directory instead.

### Static export + email/lead capture
- `next.config.mjs` sets `output: 'export'` (static site) and
  `eslint.ignoreDuringBuilds: true` (so `npm run lint` reports pre-existing
  lint errors that the build ignores).
- API routes under `src/app/api` are not part of the static export; production
  email is handled by the PHP files in the repo root (see `QUIZ-SETUP.md`,
  `PHP-EMAIL-SETUP.md`, `EMAILJS-SETUP.md`).
- The `/menopause-way/` lead-capture popup POSTs directly to Mailchimp
  (`no-cors`) and always shows "Successfully subscribed!" then auto-closes after
  ~2s; it requires outbound network but no local secrets.
- Optional `EMAIL_*` / `MOMENCE_*` env vars (see `QUIZ-SETUP.md`) are only needed
  for the quiz/email API features, not for developing the marketing pages.
