/**
 * SEO/meta helper. One source for <title>, description, canonical, Open Graph,
 * and Twitter tags. Call buildMeta() per page and spread into <BaseLayout>.
 */
import { site } from "./site";

export interface PageMeta {
  /** Page-specific title (without the brand suffix). */
  title: string;
  /** Page-specific description; falls back to the site description. */
  description?: string;
  /** Path for canonical/OG URL, e.g. "/" or "/contact". */
  path: string;
  /** Override OG image (absolute or root-relative). */
  image?: string;
  /** Set true to exclude from indexing (e.g. thank-you pages). */
  noindex?: boolean;
}

export interface ResolvedMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
  twitterCard: "summary_large_image";
  noindex: boolean;
}

function absolute(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  return new URL(pathOrUrl, site.url).toString();
}

export function buildMeta(meta: PageMeta): ResolvedMeta {
  const description = meta.description ?? site.description;
  const fullTitle =
    meta.path === "/" ? `${site.name} — ${site.tagline}` : `${meta.title} | ${site.name}`;
  const canonical = absolute(meta.path);
  const image = absolute(meta.image ?? site.ogImage);

  return {
    title: fullTitle,
    description,
    canonical,
    ogTitle: fullTitle,
    ogDescription: description,
    ogUrl: canonical,
    ogImage: image,
    twitterCard: "summary_large_image",
    noindex: meta.noindex ?? false,
  };
}
