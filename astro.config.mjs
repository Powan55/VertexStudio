// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// IMPORTANT: set `site` to the client's final domain before Ship so canonical
// + sitemap URLs are absolute. Use the .pages.dev URL until the domain is live.
export default defineConfig({
  // GitHub Pages project site → served under /VertexStudio/.
  // (For a custom domain later: set site to the domain and remove `base`.)
  site: "https://powan55.github.io",
  base: "/VertexStudio",

  // Fully static export (default). Do NOT add an adapter unless a brief needs SSR.
  output: "static",

  // Zero client JS — fully static Astro (no React islands). Sitemap only.
  integrations: [sitemap()],

  // Predictable local URL for QA tools (Claude_Preview / Claude_in_Chrome).
  // Same port for `astro dev` and `astro preview`. strictPort => fail instead of
  // silently incrementing, so QA always knows where the site is.
  server: { port: 4321, host: true },

  vite: {
    plugins: [tailwindcss()],
    server: { strictPort: true },
    preview: { port: 4321, strictPort: true },
  },
});
