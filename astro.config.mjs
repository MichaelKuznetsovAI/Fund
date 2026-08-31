import { defineConfig } from 'astro/config';

// Deployed as a GitHub Pages *project* site, which serves from /<repo>/.
// `base` only applies to the production build, so `npm run dev` still runs
// at the root. Internal links go through src/lib/path.ts to stay correct in
// both — see the note in that file.
//
// Moving to a custom domain later: drop `base`, set `site` to the domain,
// and add a `public/CNAME` file containing it.
export default defineConfig({
  site: 'https://michaelkuznetsovai.github.io',
  base: '/Fund',
  trailingSlash: 'ignore',
});
