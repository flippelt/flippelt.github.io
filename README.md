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
Conteúdo privado, hubs internos e forks ficam de fora.

## Idiomas e o "terminal de acesso"

A página existe em **pt-br** (`/`) e **inglês** (`/en/`). Cada arquivo de dados
tem um par `*.en.ts` com a tradução, e os textos de moldura (hero, seções,
rodapé) vivem em [`src/i18n/ui.ts`](src/i18n/ui.ts) — ao mexer num, mexa no outro.

Na primeira visita, um overlay de "login" ([`LoginGate`](src/components/LoginGate.tsx))
digita credenciais fake e pede o idioma; a escolha vai para `localStorage`
(chave `lang`) e um script inline no `<head>` de `/` decide entre mostrar o
gate, seguir em pt-br ou redirecionar para `/en/`. O rodapé troca de idioma e
reabre o terminal (limpando a chave). Crawlers/no-JS nunca veem o gate.

## Deploy (GitHub Pages → lippelt.dev)

A configuração já está pronta: [`public/CNAME`](public/CNAME) aponta para
`lippelt.dev`, o `site` do Astro está em `https://lippelt.dev` e há um workflow
de deploy em [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
(hoje com gatilho **manual**, para não rodar antes da hora).

**Checklist de go-live:**

1. **Domínio** — ter o `lippelt.dev` registrado e acesso ao DNS.
2. **DNS** — apontar para o GitHub Pages:
   - apex `lippelt.dev` → registros `A` para `185.199.108–111.153`
     (ou `ALIAS`/`ANAME` → `flippelt.github.io`);
   - `www` → `CNAME` para `flippelt.github.io`.
3. **Visibilidade** — o repositório precisa ser **público** (plano grátis) ou
   estar em **GitHub Pro** (repo privado com Pages).
4. **Pages** — em *Settings → Pages*, definir *Source = GitHub Actions* e o
   *Custom domain = lippelt.dev* (deixe "Enforce HTTPS" ligado).
5. **Ativar o deploy** — trocar o gatilho do workflow de `workflow_dispatch`
   para `on: push` (ou rodá-lo manualmente em *Actions*).

Enquanto isso não acontece, dá para servir em qualquer host estático com
`npm run build` (saída em `dist/`).
