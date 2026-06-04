// Tailwind v4 is configured primarily in CSS (src/styles/global.css via @theme).
// This file is OPTIONAL in v4 and kept only for editor tooling / clarity and to
// document the content globs. Brand tokens (colors/fonts) live in global.css.
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
} satisfies Config;
