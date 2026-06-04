import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

// User site served at the root of https://flippelt.github.io (repo named
// flippelt.github.io). base stays "/"; override SITE/BASE via env if ever
// moved to a custom domain or subpath.
const base = process.env.BASE ?? '/'
const site = process.env.SITE ?? 'https://flippelt.github.io'

// https://astro.build/config
export default defineConfig({
  base,
  site,
  integrations: [react()],
})
