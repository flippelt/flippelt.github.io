// Strings de interface das duas versões da página. O conteúdo dos cards vive
// em src/data/* (projects.ts / projects.en.ts etc.); aqui fica só o texto de
// moldura: hero, navegação, títulos de seção, prosa do "sobre" e rodapé.
export type Locale = 'pt-br' | 'en'

export interface BootLineDef {
  text: string
  status: 'default' | 'ok' | 'error' | 'muted'
}

export interface UIStrings {
  /** <html lang>, <title> e meta description. */
  htmlLang: string
  title: string
  description: string
  ogLocale: string
  /** h1 acessível/SEO (o hero visual é o typewriter, não um heading). */
  h1: string
  skipToContent: string
  hero: {
    ariaLabel: string
    lines: BootLineDef[]
    navAriaLabel: string
    ctas: { href: string; label: string }[]
  }
  nav: {
    ariaLabel: string
    stations: { id: string; label: string }[]
  }
  about: {
    title: string
    /** Parágrafos com marcação inline (<strong>/<em>) — renderizados via set:html. */
    paragraphsHtml: string[]
  }
  projects: { title: string; lead: string }
  packages: { title: string; lead: string }
  foundry: { title: string; lead: string }
  card: { techAriaLabel: string }
  footer: {
    /** "Feito por" — o link do GitHub é montado no template. */
    madeBy: string
    noteHtml: string
    /** Convite a agir — HTML inline (links). */
    ctaHtml: string
    /** Troca de idioma: aponta para a OUTRA versão. */
    langSwitch: { href: string; label: string; setLang: Locale }
    reopenGate: string
  }
}

export const ui: Record<Locale, UIStrings> = {
  'pt-br': {
    htmlLang: 'pt-BR',
    title: 'Felipe Lippelt — Ferramentas para RPG de mesa',
    description:
      'Projetos autorais de software para mestres e mesas de RPG: bibliotecas, apps em tempo real, ferramentas de imersão e módulos de conteúdo para o Foundry VTT.',
    ogLocale: 'pt_BR',
    h1: 'Felipe Lippelt — ferramentas para mestres e mesas de RPG',
    skipToContent: 'Pular para o conteúdo',
    hero: {
      ariaLabel: 'Apresentação',
      lines: [
        { text: '> booting rpg.toolkit // felipe lippelt', status: 'muted' },
        { text: '> carregando módulos de mesa...', status: 'ok' },
        { text: '', status: 'muted' },
        { text: 'FELIPE LIPPELT', status: 'default' },
        { text: 'ferramentas para mestres e mesas de RPG', status: 'muted' },
      ],
      navAriaLabel: 'Navegação',
      ctas: [
        { href: '#sobre', label: '▾ sobre' },
        { href: '#projetos', label: '▾ projetos' },
        { href: '#foundry', label: '▾ foundry' },
      ],
    },
    nav: {
      ariaLabel: 'Mapa da página',
      stations: [
        { id: 'inicio', label: 'início' },
        { id: 'sobre', label: 'sobre' },
        { id: 'projetos', label: 'projetos' },
        { id: 'pacotes', label: 'pacotes' },
        { id: 'foundry', label: 'foundry' },
        { id: 'links', label: 'links' },
      ],
    },
    about: {
      title: '// sobre',
      paragraphsHtml: [
        'Sou o Felipe. <strong>Mestro RPG de mesa e construo as próprias ferramentas</strong>, aprendendo conforme a necessidade aparece. Não é o meu emprego — é o ofício que escolhi praticar.',
        'Cada projeto aqui nasceu de uma ideia para melhorar a <em>imersão e a diversão dos meus jogadores</em>, ou para conduzir melhor o fluxo do jogo. Uma wiki para organizar campanhas, um painel para controlar a sessão em tempo real, um terminal retrô para criar atmosfera. Construí porque não encontrava ferramentas prontas — e as poucas que achei estavam incompletas, não eram simples de usar, ou eram pagas.',
        'Por isso estão todos aqui, abertos e reunidos. Se foram úteis para mim, talvez sejam para você também. 🎲',
      ],
    },
    projects: {
      title: '// projetos',
      lead: 'Um ecossistema de ferramentas para RPG de mesa — de um terminal retrô a um painel de controle de sessão em tempo real. Tudo autoral e aberto.',
    },
    packages: {
      title: '// pacotes',
      lead: 'Bibliotecas publicadas no npm: a UI CRT desta página, o motor do terminal e as regras dos 11 sistemas do GM Control Room.',
    },
    foundry: {
      title: '// módulos foundry',
      lead: 'Além das ferramentas, converto material de mesa para o Foundry VTT — dois módulos de conteúdo para o sistema Wrath & Glory (Warhammer 40.000). Projetos de fã, sem fins lucrativos.',
    },
    card: { techAriaLabel: 'Tecnologias' },
    footer: {
      madeBy: 'Feito por Felipe Lippelt',
      noteHtml:
        'Esta página é estática (Astro) e usa a biblioteca <code>rpg-prop-kit</code> para o visual CRT.',
      ctaHtml:
        'Achou útil? <a href="https://github.com/flippelt" target="_blank" rel="noopener noreferrer">Abre uma issue</a> no GitHub — ou instala um dos módulos Foundry acima.',
      langSwitch: { href: '/en/', label: 'english version', setLang: 'en' },
      reopenGate: '> reabrir terminal de acesso',
    },
  },
  en: {
    htmlLang: 'en',
    title: 'Felipe Lippelt — Tabletop RPG tools',
    description:
      'Original software projects for game masters and tabletop RPG tables: libraries, real-time apps, immersion tools and Foundry VTT content modules.',
    ogLocale: 'en_US',
    h1: 'Felipe Lippelt — tools for game masters and their tables',
    skipToContent: 'Skip to content',
    hero: {
      ariaLabel: 'Introduction',
      lines: [
        { text: '> booting rpg.toolkit // felipe lippelt', status: 'muted' },
        { text: '> loading tabletop modules...', status: 'ok' },
        { text: '', status: 'muted' },
        { text: 'FELIPE LIPPELT', status: 'default' },
        { text: 'tools for game masters and their tables', status: 'muted' },
      ],
      navAriaLabel: 'Navigation',
      ctas: [
        { href: '#sobre', label: '▾ about' },
        { href: '#projetos', label: '▾ projects' },
        { href: '#foundry', label: '▾ foundry' },
      ],
    },
    nav: {
      ariaLabel: 'Page map',
      stations: [
        { id: 'inicio', label: 'home' },
        { id: 'sobre', label: 'about' },
        { id: 'projetos', label: 'projects' },
        { id: 'pacotes', label: 'packages' },
        { id: 'foundry', label: 'foundry' },
        { id: 'links', label: 'links' },
      ],
    },
    about: {
      title: '// about',
      paragraphsHtml: [
        "I'm Felipe. <strong>I run tabletop RPGs and build my own tools</strong>, learning as the need shows up. This isn't my day job — it's the craft I chose to practice.",
        "Every project here grew out of an idea to improve my <em>players' immersion and fun</em>, or to run the game more smoothly. A wiki to organise campaigns, a panel to control the session in real time, a retro terminal to set the mood. I built them because I couldn't find ready-made tools — and the few I did find were incomplete, not simple to use, or paid.",
        "That's why they are all here, open and gathered in one place. If they were useful to me, maybe they'll be useful to you too. 🎲",
      ],
    },
    projects: {
      title: '// projects',
      lead: 'An ecosystem of tools for tabletop RPGs — from a retro terminal to a real-time session control panel. All original, all open.',
    },
    packages: {
      title: '// packages',
      lead: 'Libraries published on npm: the CRT UI this page uses, the terminal engine, and the rules for the 11 GM Control Room systems.',
    },
    foundry: {
      title: '// foundry modules',
      lead: 'Beyond the tools, I convert tabletop material for Foundry VTT — two content modules for the Wrath & Glory system (Warhammer 40,000). Fan-made, non-commercial.',
    },
    card: { techAriaLabel: 'Technologies' },
    footer: {
      madeBy: 'Made by Felipe Lippelt',
      noteHtml:
        'This page is static (Astro) and uses the <code>rpg-prop-kit</code> library for the CRT look.',
      ctaHtml:
        'Found it useful? <a href="https://github.com/flippelt" target="_blank" rel="noopener noreferrer">Open an issue</a> on GitHub — or install one of the Foundry modules above.',
      langSwitch: { href: '/', label: 'versão em português', setLang: 'pt-br' },
      reopenGate: '> reopen access terminal',
    },
  },
}
