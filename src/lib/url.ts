/**
 * Resolve an internal app path against the deploy base (import.meta.env.BASE_URL).
 * Use for EVERY internal <a href> and asset path so the site works both at a
 * subpath (e.g. GitHub Pages → /VertexStudio/) and at root (a custom domain).
 * External links (http, mailto, tel, #anchors, relative) pass through untouched.
 */
const BASE = import.meta.env.BASE_URL; // e.g. "/VertexStudio/" or "/"

export function u(path: string): string {
  if (!path || !path.startsWith("/")) return path;
  return (BASE.replace(/\/$/, "") + path).replace(/([^:])\/{2,}/g, "$1/");
}
