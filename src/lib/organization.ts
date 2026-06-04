/**
 * JSON-LD for VertexStudio — Organization / ProfessionalService.
 * Reads from site.ts so structured data always matches the visible site.
 * URLs are base-aware (work under a subpath deploy).
 */
import { site } from "./site";
import { u } from "./url";

export function organizationJsonLd(): string {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": site.schemaType,
    name: site.name,
    description: site.description,
    slogan: site.tagline,
    url: new URL(u("/"), site.url).toString(),
    email: site.email,
    image: new URL(u(site.ogImage), site.url).toString(),
    serviceType: "Web design and development",
  };

  if (site.legalName) schema.legalName = site.legalName;
  if (site.phone) schema.telephone = site.phone.e164;
  if (site.areaServed) schema.areaServed = site.areaServed;

  const sameAs = Object.values(site.social).filter(Boolean);
  if (sameAs.length) schema.sameAs = sameAs;

  return JSON.stringify(schema);
}
