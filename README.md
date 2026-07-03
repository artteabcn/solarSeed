# Solar Khanom — Astro site

Scaffolded from `artteabcn/solarSeed` for deployment on Cloudflare Pages.

## Before you deploy

1. **Verify the numbers.** `src/components/Hero.astro`, `KPICards.astro`, and
   `Timeline.astro` are set to the 120-panel / 87.6 kWp / THB 1,500,000
   project. `Estimated IRR` is still marked "Pending verification" —
   fill that in once you have a real return figure; don't publish a guessed
   one on an equity-raise page.
2. **Add real PDFs / pages** for the links that currently 404:
   `/memorandum.pdf`, `/technical-roadmap.pdf`, `/terms`, `/privacy`.

## Local development

```bash
npm install
npm run dev
```

## Deploy to Cloudflare Pages

This repo now includes `wrangler.toml` and a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that auto-deploys on every push to `main` —
matching your other Cloudflare Pages clones.

**One-time setup:**

1. Push this project to a GitHub repo (e.g. update `artteabcn/solarSeed` or a
   new repo like `artteabcn/solar-khanom-web`).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect
   to Git**, or just create an empty Pages project named `solar-khanom` (the
   name must match `name` in `wrangler.toml` and `--project-name` in the
   workflow) so the Actions deploy has somewhere to push to.
3. Create a **Cloudflare API token** (My Profile → API Tokens → Create Token →
   "Edit Cloudflare Workers and Pages" template works) and grab your
   **Account ID** (right sidebar of any zone, or Workers & Pages overview).
4. In the GitHub repo: **Settings → Secrets and variables → Actions**, add:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
5. Push to `main` — the workflow builds and deploys automatically. You can
   also trigger it manually from the Actions tab (`workflow_dispatch`).

**Manual deploy (no GitHub, ad hoc)**

```bash
npm install
npm run build
npx wrangler pages deploy dist --project-name=solar-khanom
```

Needs `wrangler login` or a `CLOUDFLARE_API_TOKEN` env var locally.

## Next phase (not in this scaffold)

The Shareholder Portal (login, dashboard, D1-backed data) needs the
`@astrojs/cloudflare` adapter and `output: 'server'` in `astro.config.mjs`,
plus a `wrangler.toml` with a D1 binding. Keep that as a separate milestone
once the public marketing site is live and the figures above are verified.
