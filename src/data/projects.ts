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
  /** Destaque: ordenados primeiro (menor = antes). Borda shiny se `shiny` não for false. */
  featured?: number
  /** Borda holográfica. Default: ligado quando há `featured`. */
  shiny?: boolean
}

// Apps autorais e públicos. Pacotes npm ficam em packages.ts; módulos
// Foundry em foundry-modules.ts. Fora de propósito: conteúdo privado,
// hubs internos e forks (ex.: lancer-briefings — crédito no README daquele repo).
export const projects: Project[] = [
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
    name: 'Campaign Codex',
    featured: 2,
    tagline: 'Wiki de campanhas de RPG, estática e temática',
    description:
      'Gerador de wiki multi-campanha a partir de Markdown: história, mapas, NPCs, eventos e personagens, com temas visuais por gênero (sci-fi, fantasia, cyberpunk e mais). Depois da sessão, a página /recap/ transforma notas bagunçadas em arquivos prontos para o códice.',
    stack: ['Astro', 'TypeScript', 'Content Collections'],
    badge: 'Demo ao vivo',
    links: [
      { label: 'Demo ao vivo', href: 'https://flippelt.github.io/campaign-codex/', primary: true },
      { label: 'Código', href: 'https://github.com/flippelt/campaign-codex' },
    ],
  },
  {
    name: 'GM Control Room',
    featured: 3,
    shiny: false,
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
  {
    name: 'Scenario Forge',
    featured: 5,
    shiny: false,
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
    name: 'mesa-press',
    tagline: 'Transforme Markdown em props em PDF',
    description:
      'CLI que gera handouts imprimíveis em A5/A6: carta em velino, cartaz de aviso e dataslate sci-fi, com QR opcional para o códice ou o terminal. Feito para o jogador segurar o papel — o irmão impresso do rpg-prop-kit.',
    stack: ['TypeScript', 'pdfkit', 'Vitest'],
    badge: 'CLI',
    links: [
      { label: 'Código', href: 'https://github.com/flippelt/mesa-press', primary: true },
    ],
  },
]
