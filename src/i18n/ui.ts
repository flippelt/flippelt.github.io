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
  foundry: { title: string; lead: string }
  card: { techAriaLabel: string }
  footer: {
    /** "Feito por" — o link do GitHub é montado no template. */
    madeBy: string
    noteHtml: string
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
      ],
    },
    nav: {
      ariaLabel: 'Mapa da página',
      stations: [
        { id: 'inicio', label: 'início' },
        { id: 'sobre', label: 'sobre' },
        { id: 'projetos', label: 'projetos' },
        { id: 'foundry', label: 'foundry' },
        { id: 'links', label: 'links' },
      ],
    },
    about: {
      title: '// sobre',
      paragraphsHtml: [
        'Sou o Felipe. Não sou programador profissional — sou um <strong>entusiasta autodidata</strong> que mestra RPG de mesa e gosta de construir as próprias ferramentas, aprendendo conforme a necessidade aparece.',
        'Estudo as tecnologias e tento aplicá-las da melhor forma que consigo. Pelo caminho acumulo <strong>mais erros do que acertos</strong>, mas encaro cada projeto como uma chance de melhorar um pouco.',
        'Cada projeto aqui surgiu de ideias para melhorar a <em>imersão e a diversão dos meus jogadores</em> — e de ferramentas para me ajudar a conduzir melhor o fluxo do jogo e da história. Uma wiki para organizar campanhas, um painel para controlar a sessão em tempo real, um terminal retrô para criar atmosfera. Foram desenvolvidos porque eu não encontrava ferramentas prontas para realizar essas ideias — e as poucas que cheguei a encontrar estavam incompletas, não eram simples de usar, ou eram pagas.',
        'Por isso estão todos aqui, abertos e reunidos. Não são perfeitos, mas são feitos com cuidado e com vontade de acertar. Se foram úteis para mim, talvez sejam para você também — espero que façam bom proveito. 🎲',
      ],
    },
    projects: {
      title: '// projetos',
      lead: 'Um ecossistema de ferramentas para RPG de mesa — de uma biblioteca de UI publicada no npm a um painel de controle de sessão em tempo real. Tudo autoral e aberto.',
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
      ],
    },
    nav: {
      ariaLabel: 'Page map',
      stations: [
        { id: 'inicio', label: 'home' },
        { id: 'sobre', label: 'about' },
        { id: 'projetos', label: 'projects' },
        { id: 'foundry', label: 'foundry' },
        { id: 'links', label: 'links' },
      ],
    },
    about: {
      title: '// about',
      paragraphsHtml: [
        "I'm Felipe. I'm not a professional programmer — I'm a <strong>self-taught enthusiast</strong> who runs tabletop RPGs and likes building his own tools, learning as the need shows up.",
        'I study the technologies and try to apply them as well as I can. Along the way I pile up <strong>more mistakes than successes</strong>, but I treat every project as a chance to get a little better.',
        "Every project here grew out of ideas to improve my <em>players' immersion and fun</em> — and out of tools to help me run the game and the story more smoothly. A wiki to organise campaigns, a panel to control the session in real time, a retro terminal to set the mood. I built them because I couldn't find ready-made tools for those ideas — and the few I did find were incomplete, not simple to use, or paid.",
        "That's why they are all here, open and gathered in one place. They aren't perfect, but they're made with care and a real wish to get things right. If they were useful to me, maybe they'll be useful to you too — enjoy. 🎲",
      ],
    },
    projects: {
      title: '// projects',
      lead: 'An ecosystem of tools for tabletop RPGs — from a UI library published on npm to a real-time session control panel. All original, all open.',
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
      langSwitch: { href: '/', label: 'versão em português', setLang: 'pt-br' },
      reopenGate: '> reopen access terminal',
    },
  },
}
