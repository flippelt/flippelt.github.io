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

Os projetos exibidos ficam em [`src/data/projects.ts`](src/data/projects.ts).
A lista é deliberadamente curada: apenas projetos **autorais e públicos**.
Conteúdo privado, hubs internos e forks ficam de fora.

## Deploy

Pensada para deploy estático (Netlify na raiz ou GitHub Pages).
Para GitHub Pages em repo de projeto, faça o build com a base:

```bash
BASE=/portfolio/ npm run build
```
