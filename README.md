# Camila May Missio — Biomédica Esteta

Landing page de Camila May Missio, biomédica esteta (design de sobrancelhas, micropigmentação e botox).
React + TypeScript + Vite + Tailwind CSS v4.

## Rodar o projeto

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:5173
npm run build     # versão de produção em dist/
npm run preview   # testa a versão de produção
```

> Neste computador (NixOS), o Node não está instalado globalmente. Use
> `nix-shell -p nodejs_22 --run "npm run dev"`.

## Antes de publicar — checklist

| O quê | Onde |
| --- | --- |
| Número do WhatsApp (só dígitos, com DDI e DDD) | `src/config/site.ts` → `whatsapp.number` |
| Usuário do Instagram (sem @) | `src/config/site.ts` → `instagram.handle` |
| Endereço, cidade e link do Google Maps | `src/config/site.ts` → `location` |
| Endereço do site, para a imagem de compartilhamento aparecer no WhatsApp | `.env` → `VITE_SITE_URL` |
| `<link rel="canonical">` com o domínio | `index.html` |
| Endereço/telefone nos dados estruturados (opcional) | `index.html` → bloco `application/ld+json` |

Enquanto o WhatsApp e o Instagram estiverem vazios, os botões funcionam mas
abrem o WhatsApp sem destinatário e a página inicial do Instagram. Em modo de
desenvolvimento, o console avisa o que falta preencher.

## Onde ficam os conteúdos

Tudo o que é editável fica em `src/config/`:

- **`site.ts`**: contatos, links, localização e menu.
- **`content.ts`**: textos do Hero, procedimentos (nome, descrição, mensagem
  do WhatsApp de cada um), Sobre, diferenciais, galeria e chamada final.
- **`images.ts`**: todas as fotografias, com texto alternativo, enquadramento
  e crédito.

## Substituir as fotografias ilustrativas

**Todas as fotos atuais são ilustrativas**, vindas do [Unsplash](https://unsplash.com/license)
(licença gratuita para uso comercial, sem marca d'água). Elas **não** mostram a
Camila, clientes do estúdio nem trabalhos dela. O site deixa isso claro na
legenda da seção Sobre, na nota da galeria e no rodapé.

Para trocar uma foto:

1. Salve a foto em `public/images/`, com cerca de 1600 px no lado maior,
   em JPG ou WebP, qualidade ~80.
2. Em `src/config/images.ts`, troque `src` por `'/images/nome-do-arquivo.jpg'`.
3. Atualize o `alt` (descrição da foto para leitores de tela e Google).
4. Ajuste `ratio` (largura ÷ altura) e, se preciso, `focus` (ex.: `'50% 30%'`
   para subir o enquadramento).
5. Mude `illustrative` para `false` e apague `credit`.

| Seção | Chave em `images.ts` | Foto atual | Sugestão de foto própria |
| --- | --- | --- | --- |
| Hero | `images.hero` | Sobrancelha em close (Veronika Veronikamaks) | Close de uma sobrancelha feita por ela, vertical 3:4 |
| Design de Sobrancelhas | `images.procedures.design` | Modelagem com pinça (Stefan Vibes) | Camila trabalhando, vertical |
| Micropigmentação | `images.procedures.micropigmentacao` | Procedimento com luvas (Sum Sum) | Procedimento no estúdio, vertical |
| Botox | `images.procedures.botox` | Perfil com pele natural (Icons8 Team) | Retrato de pele/rosto, vertical |
| Sobre | `images.about` | Interior com arcos (kimia kazemi) | **Retrato da Camila**, vertical 4:5 |
| Galeria | `gallery[]` (6 itens) | Fotos editoriais de referência | Registros reais dos atendimentos, com autorização das clientes |

### Casos especiais

- **Hero, linhas de mapeamento.** As linhas douradas sobre a foto do Hero
  foram posicionadas para *esta* sobrancelha. Ao trocar a foto, ajuste os
  pontos `ORIGIN`/`POINTS` e o desenho (`d` do `<path>`) em
  `src/components/Hero.tsx` (sistema de coordenadas 300×400). Se preferir,
  remova `<BrowMapping />`.
- **Sobre.** Quando houver um retrato da Camila, troque `images.about` e mude
  `about.photoCaption` em `content.ts` (ex.: `'Camila May Missio'`). A apresentação
  pessoal entra em `about.bio` (um parágrafo por item). Não inclua formação,
  certificações ou tempo de experiência sem confirmação.
- **Galeria.** Os itens se alternam entre a coluna larga e a estreita, e
  `aspect` define o recorte na grade (`'4/3'`, `'1/1'`, `'3/4'`, `'4/5'`). Com
  fotos reais, troque `gallerySection.title`/`note` em `content.ts`. Antes e
  depois só com fotos reais e autorização por escrito das clientes.
- **Créditos.** O rodapé lista automaticamente os autores das fotos com
  `illustrative: true`. Quando todas forem próprias, a lista fica vazia;
  remova então o bloco "Fotografias ilustrativas" em `src/components/Footer.tsx`.
- **Imagem de compartilhamento** (WhatsApp/Instagram/Facebook): é
  `public/og-image.jpg` (1200×630, logo sobre fundo escuro). Essas redes
  exigem endereço absoluto: preencha `VITE_SITE_URL` no `.env` (ex.:
  `https://camilamaymissio.netlify.app`) e rode o build de novo.

## Logo

Os arquivos originais estão em `brand/originais/` (fundo escuro, branco e
bege). Eles **não** são publicados no site.

A logo foi vetorizada em quatro partes, em `src/assets/brand/`: rosto
(`mark.svg`), nome (`word.svg`), divisor com lótus (`divider.svg`) e
"Biomédica Esteta" (`sub.svg`). O componente `src/components/BrandLogo.tsx`
monta essas partes de três formas:

| Uso | Componente | Onde aparece |
| --- | --- | --- |
| Horizontal (rosto + nome) | `LogoHorizontal` | Cabeçalho |
| Empilhada, igual ao original | `LogoStacked` | Rodapé |
| Só o rosto | `LogoMark` | Assinatura da seção Sobre |

Também foram gerados a partir dela: `public/favicon.png`,
`public/apple-touch-icon.png` (ícone na tela inicial do celular) e
`public/og-image.jpg`.

Se a designer entregar a logo em **SVG ou PDF vetorial**, troque os quatro
arquivos de `src/assets/brand/` pelas partes recortadas do original. A
vetorização atual é fiel, mas o arquivo da designer é sempre a referência.

## Estrutura

```
src/
  config/        conteúdos editáveis (site, textos, imagens)
  components/    Header, Hero, Procedures, About, Differentials,
                 Gallery + Lightbox, Cta, Footer, Picture, BrandLogo, BrowMark
  assets/brand/  logo vetorizada (4 partes em SVG)
  hooks/         useReveal (entradas ao rolar), useScrolled (header)
  lib/           image.ts (srcset responsivo), style.ts
  index.css      tokens de cor/tipografia, botões, animações
public/          favicon, ícone do celular, og-image, robots.txt
brand/originais/ arquivos originais da logo (não publicados)
```

## Identidade

- **Cores:** preto `#171513`, off-white `#F8F6F2`, nude `#D8C6B5`,
  dourado `#C6A46C`, bege `#EAE2D8`. Apoio: `#5E554D` para texto secundário,
  com contraste AA. O dourado aparece só em fios, marcadores e no botão sobre
  fundo escuro: sobre off-white ele não tem contraste suficiente para texto.
  Da logo vêm `#A88B55` (dourado do rosto sobre fundo claro) e `#CBC7B9`
  (cinza-pedra do nome sobre fundo escuro).
- **Tipografia:** Bodoni Moda (títulos; o alto contraste do traço lembra os
  fios da micropigmentação) e Jost (textos). As duas são servidas pelo próprio
  site, sem Google Fonts.
- **Motivo gráfico:** o arco de sobrancelha (`BrowMark`) e as linhas de
  mapeamento do Hero, a marcação que antecede o design de sobrancelhas.
- **Movimento:** uma sequência de abertura no Hero e entradas discretas ao
  rolar. Tudo é desativado com "reduzir movimento" no sistema.
