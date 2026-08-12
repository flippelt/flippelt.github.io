import type { Project } from './projects'

// Módulos de conteúdo para o Foundry VTT (sistema Wrath & Glory, da Cubicle 7).
// Reaproveitam o tipo `Project` e o mesmo card — o que muda é a seção onde
// aparecem: não são apps autorais, são conversões de material de mesa.
export const foundryModules: Project[] = [
  {
    name: 'Apocryphal Adversaries',
    featured: 1,
    tagline: 'Bestiário de Wrath & Glory para Foundry VTT — dez facções completas',
    description:
      'Conversão do An Abundance of Apocryphal Adversaries, o bestiário do Nathan Dowdell, feita com a permissão dele. São centenas de ameaças prontas para arrastar no mapa: Orks, Necrons, Tyranids, Drukhari, T’au, Asuryani, Legiões Demoníacas, Astra Militarum, a miscelânea (Slaugth, Hrud, Seraphon e os Agentes do Imperium) e os Heretic Astartes com as legiões traidoras — cada ameaça com armas, talentos, habilidades e opções de tier, além dos traços de adversário, relíquias e disciplinas psíquicas de cada facção.',
    stack: ['Foundry VTT v11–v14', 'Wrath & Glory', 'YAML → LevelDB', 'foundry-cli', 'CI de release'],
    badge: 'Módulo Foundry VTT',
    links: [
      {
        label: 'Código',
        href: 'https://github.com/flippelt/WnG-Apocryphal-Adversaries',
        primary: true,
      },
      {
        // Enquanto não há listagem no catálogo, o manifest é o caminho de
        // instalação: cola essa URL em "Install Module" no Foundry.
        label: 'Instalar via manifest',
        href: 'https://github.com/flippelt/WnG-Apocryphal-Adversaries/releases/latest/download/module.json',
        release: true,
      },
    ],
  },
  {
    name: 'An Abundance of Apocrypha',
    featured: 2,
    tagline: 'O material do Apocrypha jogável no Foundry: arquétipos, espécies, talentos e poderes',
    description:
      'Adaptação do An Abundance of Apocrypha e suas expansões para o sistema Wrath & Glory. O compêndio traz 181 arquétipos (com variantes de espécie), 18 pacotes de ascensão, 249 talentos, 199 poderes psíquicos, 29 espécies, 15 facções, o arsenal completo (armas, armaduras, equipamento e augméticas), 64 blocos de NPC e 173 diários — tudo integrado ao gerador de personagem do sistema. Mantenho o módulo a partir do trabalho original do Owen May, acompanhando as versões novas do sistema e do Foundry.',
    stack: ['Foundry VTT v11–v14', 'Wrath & Glory', 'YAML → LevelDB', 'foundry-cli'],
    badge: 'Publicado no Foundry',
    links: [
      {
        label: 'Instalar no Foundry',
        href: 'https://foundryvtt.com/packages/wng-apocrypha',
        primary: true,
      },
      { label: 'Código', href: 'https://github.com/flippelt/WnG-Apocrypha-FoundryVTT' },
    ],
  },
]
