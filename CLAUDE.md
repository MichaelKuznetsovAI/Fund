# Iron Hand Capital — website

Marketing site for an investment fund running a single book across gold,
digital assets, and global trading strategies. Static Astro site, English only,
deployed to GitHub Pages.

**Status: pre-launch.** The fund is not yet registered or licensed anywhere, and
"Iron Hand Capital" is a working name. Nothing here has been through legal
review.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the built site
```

## Non-negotiables

**Never invent facts.** This is a fund site aimed at private investors, so
fabricated numbers, holdings, team members, track records or partners are a
legal problem, not a copy problem. Anything not yet real is written as a
visible `[bracketed placeholder]` — grep for `[` before any launch and make
sure every one has been resolved or removed.

**Do not publish strategy mechanism.** The public site describes *what* each
sleeve is and *why* it exists, never *how* it is executed. Detailed strategy
belongs in a private document delivered after investor qualification, not on a
public URL.

**Every internal link goes through `src/lib/path.ts`.** The production build
uses `base: '/Fund'` for GitHub Pages. A hardcoded `href="/strategy"` works in
dev and 404s in production. Use `path('/strategy')`.

## Architecture

```
src/
  layouts/Layout.astro      shell: fonts, theme boot, view transitions,
                            scroll-reveal + parallax engine
  components/
    MarketSurface.astro     fixed page-wide 3D volatility surface (canvas)
    HeroObjects.astro       the three pillar solids (canvas)
    Logo.astro  Header.astro  Footer.astro
    Hero.astro  PillarStrip.astro  PhilosophyTeaser.astro
    Coverage.astro          traded universe — PLACEHOLDER CONTENT
    CtaBand.astro
    DesignControls.astro    TEMPORARY palette/theme preview — delete on launch
  pages/                    index, strategy, approach, contact, legal
  lib/path.ts               base-path-safe internal links
  styles/global.css         palette engine, tokens, primitives, motion
docs/content-plan.md        sitemap + drafted copy
```

### The two canvases

Both are hand-written perspective renderers — no Three.js, nothing to download.

- **MarketSurface** is `position: fixed` and `transition:persist`, so one
  continuous landscape sits behind every page and keeps animating across
  navigation. Content sections are transparent by design; the surface shows
  through the gaps. Don't give sections opaque backgrounds.
- **HeroObjects** draws three solids whose form and motion each derive from the
  asset: a stack of cast ingots that barely moves (gold), a chain of blocks
  appending at the head (digital assets), an orbital system (trading). Labels
  are positioned from the real projected 3D centres, not fixed percentages —
  that is what keeps them off the solids at every viewport.

Both re-initialise on `astro:page-load` with `AbortController` teardown.
`ClientRouter` swaps the document, so one-shot init leaves a dead canvas.

### Theming

`src/styles/global.css` holds a palette engine: each palette supplies only a
hue + chroma seed (`--accent-h`, `--accent-c`, `--neutral-h`), and every
surface/text lightness derives from it once per theme. Three palettes ship
(`mercury` light-blue default, `jade`, `ion`) via `data-palette`; light/dark
via `data-theme`.

**Every visitor opens on light + mercury regardless of their OS setting** —
this is deliberate, so `prefers-color-scheme` is intentionally not consulted.
Dark is opt-in through the toggle and persists in `localStorage`. Do not
"restore" a `prefers-color-scheme` media query here.

Because ClientRouter replaces the `<html>` attributes on navigation, the
inline boot script in `Layout.astro` re-applies the stored theme and palette on
`astro:page-load`'s sibling event `astro:after-swap`. Without that, a chosen
theme silently reverts on the next page.

Canvas code reads the resolved tokens with `getComputedStyle` and re-reads on a
`MutationObserver` watching those two attributes — so theme switches repaint
the 3D correctly. Any new canvas work must do the same.

Adding a palette = adding one `[data-palette='x']` seed block. Do not hardcode
colours anywhere else.

### Motion

Slow and low-contrast on purpose — it should read as instrumentation, not
decoration. Canvases run at ~36fps and pause on `visibilitychange`.
`prefers-reduced-motion` is honoured throughout: reveals resolve to visible,
parallax is skipped, canvases render one static frame.

Scroll reveals use `[data-reveal]` + `--stagger`. If the IntersectionObserver
never fires, elements are force-shown — content must never get stuck invisible.

## Deployment

Push to `main` → `.github/workflows/deploy.yml` builds and publishes to Pages.
Repo Settings → Pages → Source must be set to **GitHub Actions** (one-time).

Live: https://michaelkuznetsovai.github.io/Fund/

Custom domain later: drop `base` from `astro.config.mjs`, set `site` to the
domain, add `public/CNAME`.

## Investor access — read before touching it

`/investor-access` gates the strategy room. This is a **static site**: there is
no server, so nothing can check a password.

**Do not put the detailed strategy in this repository behind a client-side
check.** Anything behind a JavaScript gate still ships in the same public
bundle and is readable with View Source — it would look protected while being
fully public, which is worse than not publishing it at all.

Both forms are deliberately unwired and say so on submit rather than faking a
success; the sign-in form also clears the password field, because there is
nowhere to send it. To make this real, either add a backend that serves the
room only to an authenticated session, or keep the material out of the web app
and deliver it as an access-controlled document after qualification.

## Before launch

- [ ] Legal review of all copy, especially `/legal` and the contact disclaimer
- [ ] If the gold sleeve uses leverage, risk disclosure must say so even though
      the mechanism stays private
- [ ] Replace placeholder content in `Coverage.astro` with the real universe
- [ ] Resolve every `[bracketed placeholder]`
- [ ] Delete `DesignControls.astro` and its mount in `Layout.astro`
- [ ] Wire the contact form to a real endpoint (currently inert)
- [ ] Wire the investor access-request form to a mailbox or CRM
- [ ] Decide how the strategy room is actually served — see the section above;
      it must not ship as static content behind a script
