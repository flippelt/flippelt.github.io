import type { Project } from './projects'

// Bibliotecas publicadas no npm. Mesmo card dos projetos; a seção é outra
// porque não são apps da mesa — são peças que os apps consomem.
export const npmPackages: Project[] = [
  {
    name: 'SRD Systems',
    tagline: 'Regras SRD pra 11 sistemas de RPG (D&D, Pathfinder, Starfinder, Lancer, Daggerheart…)',
    description:
      'Cada sistema é um pacote npm independente sob @lippelt/srd-*: contrato comum (dice presets, conditions, tracker fields, regras automatizadas) + 11 sistemas — D&D 3.5/5e (2014 e 2024), Pathfinder 1e/2e, Starfinder 1e/2e, Lancer, GUMSHOE, Daggerheart e Candela Obscura. Consumido pelo GM Control Room.',
    stack: ['TypeScript', 'tsup', 'Vitest', 'npm workspaces', 'CI tag-release'],
    badge: '11 pacotes no npm',
    links: [
      {
        label: 'npm (@lippelt/srd-core)',
        href: 'https://www.npmjs.com/package/@lippelt/srd-core',
        primary: true,
      },
      { label: 'Código', href: 'https://github.com/flippelt/gmcr-srd-systems' },
    ],
  },
  {
    name: 'rpg-prop-kit',
    tagline: 'Biblioteca de componentes React com estética CRT retrô',
    description:
      'Pacote publicado no npm: telas CRT, efeito de máquina de escrever e sequências de boot para ferramentas de RPG. É o que dá o visual desta própria página.',
    stack: ['React', 'TypeScript', 'Vite (library)', 'Vitest'],
    badge: 'Publicado no npm',
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/rpg-prop-kit', primary: true },
      { label: 'Código', href: 'https://github.com/flippelt/rpg-prop-kit' },
    ],
  },
  {
    name: 'rpgterm-engine',
    tagline: 'Motor de lógica do Immersive Terminal, publicado no npm',
    description:
      'O núcleo do terminal extraído como pacote, sem DOM: sistema de arquivos virtual, interpretador de comandos, mecânicas de crack/tracer/decrypt e composição de cenários. Fonte única consumida pelo terminal e pelo Scenario Forge, com teste de paridade garantindo que ambos leem exatamente os mesmos flags.',
    stack: ['JavaScript (ESM)', 'Vitest'],
    badge: 'Publicado no npm',
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/rpgterm-engine', primary: true },
      { label: 'Código', href: 'https://github.com/flippelt/rpgterm-engine' },
    ],
  },
]
