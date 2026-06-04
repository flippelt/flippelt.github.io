import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

// Em GitHub Pages (repo de projeto) o build roda com BASE=/portfolio/.
// Na Netlify/raiz, fica em "/".
const base = process.env.BASE ?? '/'
const site = process.env.SITE ?? 'https://flippelt.github.io'

// https://astro.build/config
export default defineConfig({
  base,
  site,
  integrations: [react()],
})
