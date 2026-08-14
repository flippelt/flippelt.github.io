# portfolio

Vitrine dos projetos autorais de RPG do Felipe Lippelt — uma landing estática
que serve tanto como apresentação técnica quanto como porta de entrada para
usar as ferramentas.

**Stack:** [Astro](https://astro.build) + ilhas [React](https://react.dev). O
visual CRT vem da biblioteca própria [`rpg-prop-kit`](https://www.npmjs.com/package/rpg-prop-kit)
(dogfooding: a página usa o pacote que ela apresenta).

## Desenvolvimento

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera dist/
npm run preview    # serve o build
npm run check      # astro check (tipos)
```

## Conteúdo

Os projetos exibidos ficam em [`src/data/projects.ts`](src/data/projects.ts)
(e os módulos do Foundry em [`src/data/foundry-modules.ts`](src/data/foundry-modules.ts)).
A lista é deliberadamente curada: apenas projetos **autorais e públicos**.
Conteúdo privado, hubs internos e forks (ex.: `lancer-briefings`) ficam de fora.

Os cards de app/lib agrupam-se por família (`terminal`, `gm`, `secondScreen`,
`kit`) — o rótulo de cada família vive em [`src/i18n/ui.ts`](src/i18n/ui.ts).

## Idiomas e o "terminal de acesso"

A página existe em **pt-br** (`/`) e **inglês** (`/en/`). Cada arquivo de dados
tem um par `*.en.ts` com a tradução, e os textos de moldura (hero, seções,
rodapé) vivem em [`src/i18n/ui.ts`](src/i18n/ui.ts) — ao mexer num, mexa no outro.

Na primeira visita, um overlay de "login" ([`LoginGate`](src/components/LoginGate.tsx))
digita credenciais fake e pede o idioma; a escolha vai para `localStorage`
(chave `lang`) e um script inline no `<head>` de `/` decide entre mostrar o
gate, seguir em pt-br ou redirecionar para `/en/`. Clique ou qualquer tecla
pula a digitação. Depois do gate, o hero não redigita. O rodapé troca de idioma
e reabre o terminal (limpando a chave). Crawlers/no-JS nunca veem o gate.

## Deploy (GitHub Pages)

O workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
publica em `https://flippelt.github.io` a cada push na `main` (e também
via *workflow_dispatch*). Em *Settings → Pages*, a source precisa ser
**GitHub Actions**.

Domínio próprio (`lippelt.dev`) fica para um passo separado: registrar o DNS,
adicionar `public/CNAME` e apontar `site` no `astro.config.mjs`.

Enquanto isso, dá para servir em qualquer host estático com `npm run build`
(saída em `dist/`).
