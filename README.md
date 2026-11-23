# Camila May Missio — Biomédica Esteta

Landing page institucional. Procedimentos: micropigmentação, botox,
bioestimulador de colágeno, harmonização facial, fios de PDO, microagulhamento,
skinbooster, rinomodelação e preenchimento labial.

**Stack:** HTML, CSS e JavaScript puros. Sem framework, sem build e sem
dependências. Fontes (Bodoni Moda e Jost) servidas localmente.

## Desenvolvimento

Não há nada para instalar ou compilar: o site é a própria pasta. Para ver
localmente, sirva a pasta com qualquer servidor estático, por exemplo:

```bash
python3 -m http.server 8000   # http://localhost:8000
```

Use um servidor em vez de abrir o `index.html` direto (`file://`): nesse modo o
navegador bloqueia os SVGs da logo, aplicados como máscara, e ela aparece como
blocos de cor. Na hospedagem isso não acontece.

## Publicação

Envie a pasta para a hospedagem, **exceto** `brand/`, `scripts/` e
`README.md`, que não fazem parte do site:

```
index.html  css/  js/  assets/  images/
favicon.png  apple-touch-icon.png  og-image.jpg  robots.txt
```

Antes de publicar, no `<head>` do `index.html`:

- troque `/og-image.jpg` nas metatags `og:image` e `twitter:image` pelo endereço
  absoluto (ex.: `https://SEU-DOMINIO/og-image.jpg`). WhatsApp, Instagram e
  Facebook exigem esse formato na imagem de compartilhamento;
- adicione `<link rel="canonical" href="https://SEU-DOMINIO/" />`.

## Estrutura

```
index.html        todo o conteúdo do site (textos, links, fotos)
css/style.css     estilos: tokens de cor/fonte, componentes e seções
js/main.js        cabeçalho, menu mobile, carrossel, animações de entrada
assets/brand/     logo vetorizada (mark, word, divider, sub)
assets/fonts/     fontes Bodoni Moda e Jost (woff2)
images/fotos/     fotografias em 3 larguras (640, 1080, 1440)
favicon.png, apple-touch-icon.png, og-image.jpg, robots.txt
brand/originais/  originais da logo (não publicados)
scripts/          baixar-fotos.sh (não publicado)
```

## Editando o conteúdo

Tudo fica no `index.html`, organizado por seção (`Cabeçalho`, `Início`,
`Procedimentos`, `Sobre`, `Diferenciais`, `Chamada final`, `Rodapé`).

### WhatsApp e Instagram

Os links de WhatsApp seguem o formato:

```
https://wa.me/554598432801?text=<mensagem codificada>
```

- **Número:** só dígitos, com DDI e DDD. Para trocar, substitua
  `554598432801` em todo o arquivo (busca e substituição).
- **Mensagem:** codificada para URL (espaço vira `%20`, `á` vira `%C3%A1`
  etc.). Para gerar, use no console do navegador:
  `encodeURIComponent('Olá, Camila! Gostaria de agendar um atendimento.')`.
- Botões gerais usam: *“Olá, Camila! Gostaria de agendar um atendimento.”*
- Cada card de procedimento usa: *“Olá, Camila! Gostaria de saber mais sobre
  {procedimento} e agendar uma avaliação.”*

Instagram: `https://www.instagram.com/camilamaymissio/` (menu mobile e rodapé).

### Procedimentos

Cada procedimento é um `<li class="proc-card">` dentro de
`#procedimentos-lista`. Para adicionar, copie um card inteiro e ajuste `id`,
foto, nome, descrição e a mensagem do link. O deslocamento vertical dos cards
no desktop e as setas do carrossel se ajustam sozinhos.

### Sobre

- **Apresentação pessoal:** há um comentário no lugar certo. Cada parágrafo é um
  `<p data-reveal class="about__bio">`. Formação, certificações e tempo de
  experiência só com confirmação da Camila.
- **Legenda da foto:** com um retrato real, descomente o `<figcaption>`.

### Endereço

No rodapé, em `<address>`. O link “Ver no mapa” aponta para o Google Maps.

### Hero

A palavra final do título fica em `<em>` e aparece em itálico no tom `rose`.

## Fotografias

As fotos atuais são ilustrativas, do [Unsplash](https://unsplash.com/license) e
do [Pexels](https://www.pexels.com/license/), e não retratam a profissional nem
clientes. O site informa isso na seção Sobre e no rodapé.

Elas ficam salvas no próprio site, em `images/fotos/` (3 larguras cada), para
não depender do CDN do Unsplash/Pexels, que às vezes trava em alguns tamanhos.

Cada foto é um `<img>` com `src`, `srcset` e `sizes`:

```html
<img
  src="images/fotos/u-<id>-1080.jpg"
  srcset="images/fotos/u-<id>-640.jpg 640w, images/fotos/u-<id>-1080.jpg 1080w, images/fotos/u-<id>-1440.jpg 1440w"
  sizes="…" alt="…" width="1200" height="…"
  loading="lazy" decoding="async"
  style="object-position: 50% 40%" />
```

- `width`/`height`: proporção original da foto (com `width="1200"`, `height` =
  1200 ÷ largura × altura). Evita saltos de layout.
- `object-position`: enquadramento quando a foto é recortada.

**Nova foto do Unsplash ou Pexels:** escreva o `<img>` com o padrão
`u-<id do Unsplash>` ou `p-<número do Pexels>` e rode:

```bash
bash scripts/baixar-fotos.sh   # baixa só as fotos que ainda não existem
```

**Foto própria:** exporte com cerca de 1600 px no lado maior (JPG ou WebP,
qualidade ~80), coloque em `images/` e use só `src` (sem `srcset`/`sizes`).
Atualize o `alt` descrevendo a foto real e remova o crédito correspondente no
rodapé. Sem fotos de banco de imagem, remova o bloco `<details class="credits">`.

| Seção | Onde | Foto sugerida |
| --- | --- | --- |
| Hero | `.hero-photo` | Retrato de rosto com pele luminosa, vertical 4:5 |
| Procedimentos | cada `.proc-card` | Procedimento no estúdio ou retrato de pele/rosto, vertical |
| Sobre | `.about__figure` | Retrato da profissional, vertical 4:5 |

Compartilhamento: `og-image.jpg` (1200×630).

## Logo

- `brand/originais/`: arquivos originais (não publicados).
- `assets/brand/`: versão vetorizada em quatro SVGs (`mark`, `word`, `divider`
  e `sub`), aplicados como máscara no CSS (`.logo-part--*`). A cor vem de
  `color`, então a mesma logo serve para fundo claro e escuro.
- Versões no HTML: `.logo` (horizontal, cabeçalho), `.logo-stacked` (empilhada,
  rodapé) e o símbolo sozinho na seção Sobre.
- Derivados na raiz: `favicon.png`, `apple-touch-icon.png`, `og-image.jpg`.

Se houver arquivo vetorial original (SVG/PDF), substitua os SVGs de
`assets/brand/` a partir dele.

## Identidade visual

Cores definidas como variáveis em `:root`, no início de `css/style.css`:

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
