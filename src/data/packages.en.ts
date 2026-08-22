import type { Project } from './projects'

// English version of src/data/packages.ts — keep the two in sync.
export const npmPackagesEn: Project[] = [
  {
    name: 'SRD Systems',
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
    name: 'rpg-prop-kit',
    tagline: 'React components for the table: CRT and analog props',
    description:
      'npm package: CRT screens, typewriter and boot sequences, plus parchment, wax seal, poster, metal plate and dataslate. CSS classes work without React. It is what gives this very page its look.',
    stack: ['React', 'TypeScript', 'Vite (library)', 'Vitest'],
    badge: 'Published on npm',
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/rpg-prop-kit', primary: true },
      { label: 'Source', href: 'https://github.com/flippelt/rpg-prop-kit' },
    ],
  },
  {
    name: 'rpgterm-engine',
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
]
