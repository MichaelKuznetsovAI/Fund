import { defineConfig } from 'astro/config';

// Served from the custom domain at the root — see public/CNAME, which is what
// tells GitHub Pages to answer for it. No `base` needed: the site used to be
// a GitHub Pages *project* site (served from /Fund) and every internal link
// goes through src/lib/path.ts for exactly that reason. That helper reads
// BASE_URL at build time, so removing `base` here was the only change
// required — nothing in the page code had to move.
export default defineConfig({
  site: 'https://iron-hand.com',
  trailingSlash: 'ignore',
});
