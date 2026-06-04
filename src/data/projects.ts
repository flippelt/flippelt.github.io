export interface ProjectLink {
  label: string
  href: string
  /** Link principal do card (vira o CTA destacado). */
  primary?: boolean
}

export interface Project {
  name: string
  tagline: string
  description: string
  stack: string[]
  links: ProjectLink[]
  /** Selo curto (ex.: "Publicado no npm"). */
  badge?: string
}

// Apenas projetos autorais e públicos. Ficam de fora, de propósito:
// conteúdo privado, hubs internos e forks.
export const projects: Project[] = [
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
    name: 'Immersive Terminal',
    tagline: 'Emulador de terminal retrô interativo para mesas de RPG',
    description:
      'Terminal jogável que simula sistemas (Alien, Lancer, Blade Runner, Fallout e mais). O mestre monta cenários em JSON; os jogadores exploram com comandos, decriptam e invadem arquivos. Bilíngue (PT-BR/EN) e 100% offline.',
    stack: ['React 19', 'Vite', 'Vitest', 'i18n'],
    badge: 'Demo ao vivo',
    links: [
      {
        label: 'Demo ao vivo',
        href: 'https://flippelt.github.io/Immersive-Terminal-for-RPGs/',
        primary: true,
      },
      { label: 'Código', href: 'https://github.com/flippelt/Immersive-Terminal-for-RPGs' },
    ],
  },
  {
    name: 'GM Control Room',
    tagline: 'Painel de controle de sessão de RPG em tempo real',
    description:
      'Dashboard multi-dispositivo para o mestre: cenas na tela dos jogadores, iluminação/clima, mixer de áudio, integração com Spotify, rolador de dados e tracker de combate — tudo sincronizado via WebSocket.',
    stack: ['React', 'Node + Express', 'Socket.io', 'TypeScript (monorepo)'],
    links: [{ label: 'Código', href: 'https://github.com/flippelt/gm-control-room', primary: true }],
  },
  {
    name: 'Campaign Codex',
    tagline: 'Wiki de campanhas de RPG, estática e temática',
    description:
      'Gerador de wiki multi-campanha a partir de Markdown: história, mapas, NPCs, eventos e personagens, com temas visuais por gênero (sci-fi, fantasia, cyberpunk e mais).',
    stack: ['Astro', 'TypeScript', 'Content Collections'],
    badge: 'Demo ao vivo',
    links: [
      { label: 'Demo ao vivo', href: 'https://flippelt.github.io/campaign-codex/', primary: true },
      { label: 'Código', href: 'https://github.com/flippelt/campaign-codex' },
    ],
  },
]
