import type { Project } from './projects'

// English version of src/data/foundry-modules.ts — keep the two in sync.
export const foundryModulesEn: Project[] = [
  {
    name: 'Apocryphal Adversaries',
    tagline: 'Wrath & Glory bestiary for Foundry VTT — ten complete factions',
    description:
      "A conversion of An Abundance of Apocryphal Adversaries, Nathan Dowdell's homebrew bestiary, made with his permission. Hundreds of threats ready to drop onto your maps: Orks, Necrons, Tyranids, Drukhari, T'au, Asuryani, the Daemonic Legions, the Astra Militarum, the miscellany (Slaugth, Hrud, Seraphon and the Agents of the Imperium) and the Heretic Astartes with the traitor legions — every threat with its weapons, talents, abilities and tier options, plus each faction's adversary traits, relics and psychic disciplines.",
    stack: ['Foundry VTT v11–v14', 'Wrath & Glory', 'YAML → LevelDB', 'foundry-cli', 'Release CI'],
    badge: 'Foundry VTT module',
    links: [
      {
        label: 'Source',
        href: 'https://github.com/flippelt/WnG-Apocryphal-Adversaries',
        primary: true,
      },
      {
        // Not listed in the Foundry catalogue yet: installing means pasting
        // this manifest URL into "Install Module" in Foundry.
        label: 'Install via manifest',
        href: 'https://github.com/flippelt/WnG-Apocryphal-Adversaries/releases/latest/download/module.json',
        release: true,
      },
    ],
  },
  {
    name: 'An Abundance of Apocrypha',
    tagline: 'The Apocrypha material playable in Foundry: archetypes, species, talents and powers',
    description:
      "An adaptation of An Abundance of Apocrypha and its expansions for the Wrath & Glory system. The compendium ships 181 archetypes (with species variants), 18 ascension packages, 249 talents, 199 psychic powers, 29 species, 15 factions, the full armoury (weapons, armour, gear and augmetics), 64 NPC stat blocks and 173 journals — all wired into the system's character generator. I maintain the module building on Owen May's original work, keeping pace with new system and Foundry releases.",
    stack: ['Foundry VTT v11–v14', 'Wrath & Glory', 'YAML → LevelDB', 'foundry-cli', 'Release CI'],
    badge: 'Published on Foundry',
    links: [
      {
        label: 'Install on Foundry',
        href: 'https://foundryvtt.com/packages/wng-apocrypha',
        primary: true,
      },
      { label: 'Source', href: 'https://github.com/flippelt/WnG-Apocrypha-FoundryVTT' },
    ],
  },
]
