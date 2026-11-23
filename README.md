# Camila May Missio — Biomédica Esteta

Landing page institucional. Procedimentos: micropigmentação, botox,
bioestimulador de colágeno, harmonização facial, fios de PDO, microagulhamento,
skinbooster, rinomodelação e preenchimento labial.

**Stack:** React 19, TypeScript, Vite, Tailwind CSS v4. Fontes (Bodoni Moda e
Jost) servidas localmente via Fontsource.

## Desenvolvimento

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # verificação de tipos
npm run build      # gera dist/
npm run preview    # serve o build localmente
```

## Configuração

Todo o conteúdo editável fica em `src/config/`:

| Arquivo | Conteúdo |
| --- | --- |
| `site.ts` | Contatos, links, localização e menu |
| `content.ts` | Textos das seções e modelo da mensagem de WhatsApp dos procedimentos |
| `images.ts` | Fotografias: caminho, `alt`, proporção, enquadramento e crédito |

Variáveis de ambiente (`.env`):

| Variável | Uso |
| --- | --- |
| `VITE_SITE_URL` | URL absoluta do site, sem barra final. Necessária para a imagem de compartilhamento (`og:image`). |

Com WhatsApp e Instagram vazios, os botões abrem os apps sem destinatário. Em
desenvolvimento, o console lista os campos pendentes.

## Fotografias

As fotos atuais são ilustrativas, do [Unsplash](https://unsplash.com/license) e do [Pexels](https://www.pexels.com/license/),
e não retratam a profissional nem clientes. O site informa isso na seção Sobre
e no rodapé.

Elas ficam salvas no próprio site, em `public/images/fotos/` (3 larguras cada),
para não depender do CDN do Unsplash/Pexels, que às vezes trava em alguns
tamanhos. Ao adicionar uma foto com `unsplash('id')` ou `pexels(id)` em
`src/config/images.ts`, rode:

```bash
bash scripts/baixar-fotos.sh   # baixa só as fotos que ainda não existem
```

Para substituir uma foto:

1. Adicione o arquivo em `public/images/` (JPG ou WebP, ~1600 px no lado maior).
2. Em `src/config/images.ts`, atualize `src` e `alt`.
3. Ajuste `ratio` (largura ÷ altura) e, se necessário, `focus` (ex.: `'50% 30%'`).
4. Defina `illustrative: false` e remova `credit`.

| Seção | Chave | Foto sugerida |
| --- | --- | --- |
| Hero | `images.hero` | Retrato de rosto com pele luminosa, vertical 4:5 |
| Micropigmentação | `images.procedures.micropigmentacao` | Procedimento no estúdio, vertical |
| Botox | `images.procedures.botox` | Retrato de pele/rosto, vertical |
| Bioestimulador de Colágeno | `images.procedures.bioestimulador` | Retrato de pele/rosto, vertical |
| Harmonização Facial | `images.procedures.harmonizacao` | Procedimento no estúdio, vertical |
| Fios de PDO | `images.procedures.fiosPdo` | Retrato de pele/rosto, vertical |
| Microagulhamento | `images.procedures.microagulhamento` | Procedimento no estúdio, vertical |
| Skinbooster | `images.procedures.skinbooster` | Retrato de pele/rosto, vertical |
| Rinomodelação | `images.procedures.rinomodelacao` | Retrato de rosto, vertical |
| Preenchimento Labial | `images.procedures.preenchimentoLabial` | Procedimento no estúdio, vertical |
| Sobre | `images.about` | Retrato da profissional, vertical 4:5 |

Observações:

- **Hero:** textos em `hero` (`content.ts`). A palavra final do título
  (`titleAccent`) aparece em itálico no tom `rose`.
- **Sobre:** com retrato real, atualize `about.photoCaption` em `content.ts`.
  Formação, certificações e tempo de experiência só com confirmação.
- **Créditos:** o rodapé lista os autores das fotos com `illustrative: true`.
  Sem fotos ilustrativas, remova o bloco correspondente em
  `src/components/Footer.tsx`.
- **Compartilhamento:** `public/og-image.jpg` (1200×630). Requer
  `VITE_SITE_URL` preenchida e novo build.

## Logo

- `brand/originais/`: arquivos originais (não publicados).
- `src/assets/brand/`: versão vetorizada em quatro SVGs — `mark`, `word`,
  `divider` e `sub`.
- `src/components/BrandLogo.tsx`: `LogoHorizontal` (cabeçalho), `LogoStacked`
  (rodapé) e `LogoMark` (seção Sobre).
- Derivados em `public/`: `favicon.png`, `apple-touch-icon.png`, `og-image.jpg`.

Se houver arquivo vetorial original (SVG/PDF), substitua os SVGs de
`src/assets/brand/` a partir dele.

## Identidade visual

| Token | Cor |
| --- | --- |
| Preto | `#171513` |
| Off-white | `#F8F6F2` |
| Nude | `#D8C6B5` |
| Dourado | `#C6A46C` |
| Bege | `#EAE2D8` |
| Texto secundário | `#5E554D` |
| Dourado da logo (fundo claro) | `#A88B55` |
| Cinza da logo (fundo escuro) | `#CBC7B9` |

O dourado `#C6A46C` não tem contraste suficiente para texto sobre off-white;
use-o apenas em detalhes gráficos ou sobre fundo escuro. As animações respeitam
`prefers-reduced-motion`.

Tipografia: Bodoni Moda (títulos) e Jost (texto).

## Estrutura

```
src/
  config/        conteúdo editável (site, textos, imagens)
  components/    seções da página e componentes de apoio
  assets/brand/  logo vetorizada
  hooks/         useReveal, useScrolled
  lib/           utilitários (srcset responsivo, estilos)
  index.css      tokens, botões e animações
public/          favicon, ícones, og-image, robots.txt
brand/originais/ originais da logo (não publicados)
```
