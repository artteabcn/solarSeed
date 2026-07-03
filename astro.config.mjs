import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static build — deploys directly to Cloudflare Pages, no adapter needed.
// If/when you add the Shareholder Portal (login + D1), switch to
// @astrojs/cloudflare and output: 'server' at that point.
export default defineConfig({
  site: 'https://solar-khanom.pages.dev',
  integrations: [tailwind({ applyBaseStyles: false })],
});
