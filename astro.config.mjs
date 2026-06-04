// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// IMPORTANT: set `site` to the client's final domain before Ship so canonical
// + sitemap URLs are absolute. Use the .pages.dev URL until the domain is live.
export default defineConfig({
  // VertexStudio — staging URL until the custom domain is live (then update + redeploy).
  site: "https://vertexstudio.pages.dev",

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
