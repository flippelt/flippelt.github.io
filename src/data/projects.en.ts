import type { Project } from './projects'

// English version of src/data/projects.ts — same apps, same order, same
// links/featured/stack; only the copy is translated. Keep the two files in
// sync when adding or removing a project.
export const projectsEn: Project[] = [
  {
    name: 'Immersive Terminal',
    featured: 1,
    tagline: 'Interactive retro terminal emulator for tabletop RPG sessions',
    description:
      'A playable terminal that simulates in-fiction systems (Alien, Lancer, Blade Runner, Fallout and more). The GM authors scenarios in JSON; players explore with commands, decrypt and crack files. Bilingual (PT-BR/EN) and 100% offline.',
    stack: ['React 19', 'Vite', 'Vitest', 'i18n'],
    badge: 'Live demo',
    links: [
      {
        label: 'Live demo',
        href: 'https://flippelt.github.io/Immersive-Terminal-for-RPGs/',
        primary: true,
      },
      { label: 'Source', href: 'https://github.com/flippelt/Immersive-Terminal-for-RPGs' },
    ],
  },
  {
    name: 'Campaign Codex',
    featured: 2,
    tagline: 'Static, themeable RPG campaign wiki',
    description:
      'Multi-campaign wiki generator from Markdown: lore, maps, NPCs, events and characters, with visual themes per genre (sci-fi, fantasy, cyberpunk and more). After a session, /recap/ turns messy notes into drop-in Codex files.',
    stack: ['Astro', 'TypeScript', 'Content Collections'],
    badge: 'Live demo',
    links: [
      { label: 'Live demo', href: 'https://flippelt.github.io/campaign-codex/', primary: true },
      { label: 'Source', href: 'https://github.com/flippelt/campaign-codex' },
    ],
  },
  {
    name: 'GM Control Room',
    featured: 3,
    tagline: 'Real-time RPG session control panel',
    description:
      "Multi-device dashboard for the GM: adaptive scenes (typewriter, parchment, CRT terminal), lighting/weather, an audio mixer, Spotify integration, dice, a combat tracker and roll history — all synced over WebSocket. The players' screen is an installable PWA. Supports 11 systems via @lippelt/srd-*.",
    stack: ['React', 'Node + Express', 'Socket.io', 'TypeScript (monorepo)', 'PWA'],
    badge: 'Self-hosted',
    links: [
      { label: 'Wiki', href: 'https://github.com/flippelt/gm-control-room/wiki', primary: true },
      { label: 'Source', href: 'https://github.com/flippelt/gm-control-room' },
      {
        label: 'Release v0.1.0',
        href: 'https://github.com/flippelt/gm-control-room/releases/latest',
        release: true,
      },
    ],
  },
  {
    name: 'Guild Briefings',
    featured: 4,
    tagline: "Diegetic fantasy-party dossier for the table's second screen",
    description:
      'An adventuring-company briefing to show your players: character "wanted" posters, parchment quests stamped and wax-sealed by the quest giver, chronicles and party rosters. Imports character sheets from D&D Beyond (pasted JSON) or rulebooks. Installable PWA, with versionable data in briefing.json.',
    stack: ['React', 'Vite', 'TypeScript', 'PWA'],
    badge: 'Live demo',
    links: [
      { label: 'Live demo', href: 'https://flippelt.github.io/guild-briefings/', primary: true },
      { label: 'Source', href: 'https://github.com/flippelt/guild-briefings' },
    ],
  },
  {
    name: 'Scenario Forge',
    featured: 5,
    tagline: 'Desktop editor for authoring Immersive Terminal scenarios',
    description:
      'Native app (Windows/macOS/Linux) that builds scenarios through forms — file tree, game flags (crack/tracer/lock), dialogue and events —, validates their consistency and tests them in a real embedded terminal (live preview via postMessage). Exports a versionable folder, a JSON bundle or a link. Shares its engine (rpgterm-engine) with the terminal, so there is no schema drift.',
    stack: ['Tauri 2 (Rust)', 'React', 'Vite', 'TypeScript'],
    badge: 'Desktop app',
    links: [
      {
        label: 'Download (Win · macOS · Linux)',
        href: 'https://github.com/flippelt/scenario-forge/releases/latest',
        primary: true,
        release: true,
      },
      { label: 'Source', href: 'https://github.com/flippelt/scenario-forge' },
    ],
  },
  {
    name: 'mesa-press',
    tagline: 'Turn Markdown into PDF props',
    description:
      'CLI that renders printable A5/A6 handouts: a vellum letter, a notice poster and a sci-fi dataslate, with an optional QR pointing at the Codex or the terminal. Built for the player to hold the paper — the printed sibling of rpg-prop-kit.',
    stack: ['TypeScript', 'pdfkit', 'Vitest'],
    badge: 'CLI',
    links: [
      { label: 'Source', href: 'https://github.com/flippelt/mesa-press', primary: true },
    ],
  },
]
