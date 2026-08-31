/**
 * Build an internal href that survives a base path.
 *
 * GitHub Pages serves a project site from `/<repo>/`, so Astro is configured
 * with `base: '/Fund'` in production. Astro rewrites asset URLs for you but
 * NOT hrefs you write by hand — a hardcoded `/strategy` would 404 there while
 * working fine in dev. Route every internal link through this.
 *
 *   dev  (BASE_URL '/')      path('/strategy') -> '/strategy'
 *   prod (BASE_URL '/Fund/') path('/strategy') -> '/Fund/strategy'
 */
export function path(to = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const rest = to === '/' ? '' : `/${to.replace(/^\/+/, '')}`;
  return `${base}${rest}` || '/';
}

/** True when `current` (a pathname) is the page `to` refers to. */
export function isCurrent(current: string, to: string): boolean {
  const normalise = (s: string) => s.replace(/\/+$/, '') || '/';
  return normalise(current) === normalise(path(to));
}
