export interface ProjectLink {
  label: string
  href: string
  /** Link principal do card (vira o CTA destacado). */
  primary?: boolean
  /** Link de download (GitHub Releases): renderiza com seta de download ⬇. */
  release?: boolean
}

export interface Project {
  name: string
  tagline: string
  description: string
  stack: string[]
  links: ProjectLink[]
  /** Selo curto (ex.: "Publicado no npm"). */
  badge?: string
  /** Projetos em destaque: ordenados primeiro (menor = antes) e com borda "shiny". */
  featured?: number
}

// Apenas projetos autorais e públicos. Ficam de fora, de propósito:
// conteúdo privado, hubs internos e forks.
export const projects: Project[] = [
  {
    name: 'scenario-forge',
    tagline: 'Editor desktop para criar cenários do Immersive Terminal',
    description:
      'App nativo (Windows/macOS/Linux) que monta cenários por formulário — árvore de arquivos, flags de jogo (crack/tracer/lock), diálogo e eventos —, valida a consistência e testa no terminal real embutido (preview ao vivo via postMessage). Exporta a pasta versionável, um bundle JSON ou um link. Compartilha o motor (rpgterm-engine) com o terminal, então não há divergência de schema.',
    stack: ['Tauri 2 (Rust)', 'React', 'Vite', 'TypeScript'],
    badge: 'App desktop',
    links: [
      {
        label: 'Baixar (Win · macOS · Linux)',
        href: 'https://github.com/flippelt/scenario-forge/releases/latest',
        primary: true,
        release: true,
      },
      { label: 'Código', href: 'https://github.com/flippelt/scenario-forge' },
    ],
  },
  {
    name: 'gmcr-srd-systems',
    tagline: 'Monorepo de regras SRD pra 11 sistemas de RPG (D&D, Pathfinder, Starfinder, Lancer, Daggerheart…)',
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
    name: 'Immersive Terminal',
    featured: 1,
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
    name: 'rpgterm-engine',
    tagline: 'Motor de lógica do Immersive Terminal, publicado no npm',
    description:
      'O núcleo do terminal extraído como pacote, sem DOM: sistema de arquivos virtual, interpretador de comandos, mecânicas de crack/tracer/decrypt e composição de cenários. Fonte única consumida pelo terminal e pelo scenario-forge, com teste de paridade garantindo que ambos leem exatamente os mesmos flags.',
    stack: ['JavaScript (ESM)', 'Vitest'],
    badge: 'Publicado no npm',
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/rpgterm-engine', primary: true },
      { label: 'Código', href: 'https://github.com/flippelt/rpgterm-engine' },
    ],
  },
  {
    name: 'GM Control Room',
    featured: 3,
    tagline: 'Painel de controle de sessão de RPG em tempo real',
    description:
      'Dashboard multi-dispositivo para o mestre: cenas adaptativas (typewriter, pergaminho, terminal CRT), iluminação/clima, mixer de áudio, integração com Spotify, dados, tracker de combate e histórico de rolagens — tudo sincronizado via WebSocket. A tela dos jogadores é PWA instalável. Suporta 11 sistemas via @lippelt/srd-*.',
    stack: ['React', 'Node + Express', 'Socket.io', 'TypeScript (monorepo)', 'PWA'],
    badge: 'Self-hosted',
    links: [
      { label: 'Wiki', href: 'https://github.com/flippelt/gm-control-room/wiki', primary: true },
      { label: 'Código', href: 'https://github.com/flippelt/gm-control-room' },
      {
        label: 'Release v0.1.0',
        href: 'https://github.com/flippelt/gm-control-room/releases/latest',
        release: true,
      },
    ],
  },
  {
    name: 'Campaign Codex',
    featured: 2,
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
  {
    name: 'Guild Briefings',
    featured: 4,
    tagline: 'Dossiê diegético da party de RPG de fantasia para a 2ª tela da mesa',
    description:
      'Briefing da companhia de aventureiros para mostrar aos jogadores: cartazes de "procurado" dos personagens, quests em pergaminho com carimbo e selo de cera assinados pelo contratante, crônicas e divisão em parties. Importa fichas do D&D Beyond (JSON colado) ou manuais. PWA instalável, com dados versionáveis em briefing.json.',
    stack: ['React', 'Vite', 'TypeScript', 'PWA'],
    badge: 'Demo ao vivo',
    links: [
      { label: 'Demo ao vivo', href: 'https://flippelt.github.io/guild-briefings/', primary: true },
      { label: 'Código', href: 'https://github.com/flippelt/guild-briefings' },
    ],
  },
]
