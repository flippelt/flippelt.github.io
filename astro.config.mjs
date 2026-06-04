import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

// Domínio próprio (lippelt.dev) servido na raiz. O CNAME em public/ aponta o
// domínio para o GitHub Pages. Dá para sobrescrever no build via env, se um dia
// for servido em subpasta.
const base = process.env.BASE ?? '/'
const site = process.env.SITE ?? 'https://lippelt.dev'

// https://astro.build/config
export default defineConfig({
  base,
  site,
  integrations: [react()],
})
