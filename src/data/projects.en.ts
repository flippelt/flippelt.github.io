import type { Project } from './projects'

// English version of src/data/projects.ts — same projects, same order, same
// links/featured/family/stack; only the copy is translated. Keep the two files
// in sync when adding or removing a project.
export const projectsEn: Project[] = [
  {
    name: 'Immersive Terminal',
    family: 'terminal',
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
    name: 'Scenario Forge',
    family: 'terminal',
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
    name: 'rpgterm-engine',
    family: 'terminal',
    tagline: 'The Immersive Terminal logic engine, published on npm',
    description:
      'The terminal core extracted as a DOM-free package: virtual file system, command interpreter, crack/tracer/decrypt mechanics and scenario composition. The single source consumed by both the terminal and Scenario Forge, with a parity test guaranteeing they read exactly the same flags.',
    stack: ['JavaScript (ESM)', 'Vitest'],
    badge: 'Published on npm',
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/rpgterm-engine', primary: true },
      { label: 'Source', href: 'https://github.com/flippelt/rpgterm-engine' },
    ],
  },
  {
    name: 'GM Control Room',
    family: 'gm',
    featured: 2,
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
    name: 'SRD Systems',
    family: 'gm',
    tagline: 'SRD rules for 11 RPG systems (D&D, Pathfinder, Starfinder, Lancer, Daggerheart…)',
    description:
      'Each system is an independent npm package under @lippelt/srd-*: a shared contract (dice presets, conditions, tracker fields, automated rules) + 11 systems — D&D 3.5/5e (2014 and 2024), Pathfinder 1e/2e, Starfinder 1e/2e, Lancer, GUMSHOE, Daggerheart and Candela Obscura. Consumed by GM Control Room.',
    stack: ['TypeScript', 'tsup', 'Vitest', 'npm workspaces', 'CI tag-release'],
    badge: '11 packages on npm',
    links: [
      {
        label: 'npm (@lippelt/srd-core)',
        href: 'https://www.npmjs.com/package/@lippelt/srd-core',
        primary: true,
      },
      { label: 'Source', href: 'https://github.com/flippelt/gmcr-srd-systems' },
    ],
  },
  {
    name: 'Guild Briefings',
    family: 'secondScreen',
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
    name: 'Campaign Codex',
    family: 'secondScreen',
    tagline: 'Static, themeable RPG campaign wiki',
    description:
      'Multi-campaign wiki generator from Markdown: lore, maps, NPCs, events and characters, with visual themes per genre (sci-fi, fantasy, cyberpunk and more).',
    stack: ['Astro', 'TypeScript', 'Content Collections'],
    badge: 'Live demo',
    links: [
      { label: 'Live demo', href: 'https://flippelt.github.io/campaign-codex/', primary: true },
      { label: 'Source', href: 'https://github.com/flippelt/campaign-codex' },
    ],
  },
  {
    name: 'rpg-prop-kit',
    family: 'kit',
    tagline: 'React component library with a retro CRT aesthetic',
    description:
      'Package published on npm: CRT screens, a typewriter effect and boot sequences for RPG tools. It is what gives this very page its look.',
    stack: ['React', 'TypeScript', 'Vite (library)', 'Vitest'],
    badge: 'Published on npm',
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/rpg-prop-kit', primary: true },
      { label: 'Source', href: 'https://github.com/flippelt/rpg-prop-kit' },
    ],
  },
]
