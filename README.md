# VertexStudio

Marketing website for **VertexStudio** — a web design studio that builds fast, modern, conversion-focused websites for small local businesses.

Built with **Astro 5** (static) · **Tailwind CSS v4** · **TypeScript**. Ships **zero client-side JavaScript**, with self-hosted variable fonts (Inter + Space Grotesk), full SEO + Organization JSON-LD, WCAG 2.1 AA contrast, and a Web3Forms-powered lead form.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/ (static)
npm run preview  # serve the production build
```

## Configuration

Copy `.env.example` → `.env` and set your Web3Forms access key (powers the "Request a website" form):

```
PUBLIC_WEB3FORMS_KEY=your_access_key
```

Before deploying, set the production URL in `astro.config.mjs` (`site`) and `public/robots.txt`.

## Deploy

Static output deploys anywhere. For Cloudflare Pages:

```bash
npm run build
npx wrangler pages deploy dist --project-name vertexstudio
```

## Structure

- `src/pages/` — routes: home, work, process, pricing, faq, about, request, thank-you, 404
- `src/components/astro/` — static UI sections (header, hero, footer, pricing, etc.)
- `src/lib/site.ts` — single source of truth (content, nav, pricing tiers, FAQs, schema)
- `src/lib/seo.ts`, `src/lib/organization.ts` — meta + JSON-LD helpers
- `src/styles/global.css` — design tokens (Tailwind v4 `@theme`)

---

© VertexStudio. Concept work shown on the site is not from real clients.
