/**
 * IMAGENS DO SITE — arquivo único para substituir as fotografias.
 *
 * Todas as fotografias atuais são ILUSTRATIVAS (Unsplash e Pexels, licenças
 * gratuitas para uso comercial: https://unsplash.com/license e
 * https://www.pexels.com/license/). Elas não mostram a Camila, clientes do
 * estúdio nem trabalhos realizados por ela.
 *
 * Para trocar por uma foto própria:
 *   1. Coloque o arquivo em `public/images/` (ex.: public/images/hero.jpg).
 *   2. Troque `src` por '/images/hero.jpg'.
 *   3. Atualize `alt` descrevendo a foto real.
 *   4. Mude `illustrative` para false e remova `credit`.
 *
 * Fotos do Unsplash e do Pexels são baixadas em 3 larguras por
 * scripts/baixar-fotos.sh e servidas com tamanhos responsivos (ver
 * src/lib/image.ts). Para fotos próprias, exporte cada uma com cerca de
 * 1600 px no lado maior, em JPG ou WebP, com qualidade ~80.
 */

export type Credit = { author: string; url: string }

export type SiteImage = {
  src: string
  alt: string
  /** Proporção original (largura / altura). Evita saltos de layout. */
  ratio: number
  /** Enquadramento (CSS object-position) quando a foto é recortada. */
  focus?: string
  /** true enquanto a foto for de banco de imagens. */
  illustrative: boolean
  credit?: Credit
}

/**
 * Fotos de banco de imagem ficam salvas no próprio site, em public/images/fotos/
 * (3 larguras cada), para não depender do CDN externo ao carregar a página.
 * Ao adicionar uma foto aqui, rode: bash scripts/baixar-fotos.sh
 */
const unsplash = (id: string) => `/images/fotos/u-${id}`
const pexels = (id: number) => `/images/fotos/p-${id}`

export const images = {
  hero: {
    src: pexels(10658350),
    alt: 'Retrato de mulher de rosto inclinado, com pele luminosa e maquiagem nude suave',
    ratio: 4785 / 6000,
    focus: '50% 35%',
    illustrative: true,
    credit: { author: 'Alexander Krivitskiy', url: 'https://www.pexels.com/photo/a-woman-s-face-10658350/' },
  },

  procedures: {
    micropigmentacao: {
      src: unsplash('1529259491550-3eeaa2780bfa'),
      alt: 'Close-up de olhos claros com sobrancelhas bem definidas e naturais',
      ratio: 3 / 2,
      focus: '30% 40%',
      illustrative: true,
      credit: {
        author: 'JC Gellidon',
        url: 'https://unsplash.com/photos/closeup-photo-of-womans-face-AlZX3aSW5Iw',
      },
    },
    botox: {
      src: unsplash('1544717304-a2db4a7b16ee'),
      alt: 'Mulher de perfil com pele natural e cabelos soltos, sobre fundo claro',
      ratio: 2 / 3,
      focus: '50% 30%',
      illustrative: true,
      credit: { author: 'Icons8 Team', url: 'https://unsplash.com/photos/y2T5hT7pWx4' },
    },
    bioestimulador: {
      src: unsplash('1556942040-df93bd3bdd19'),
      alt: 'Retrato de mulher com pele luminosa e a mão apoiada no contorno do rosto',
      ratio: 4 / 5,
      focus: '50% 45%',
      illustrative: true,
      credit: { author: 'Oliver Johnson', url: 'https://unsplash.com/photos/womans-face-yH0dth2yEQE' },
    },
    harmonizacao: {
      src: unsplash('1785861084191-3600dfc2a6d6'),
      alt: 'Profissional de luvas realizando uma aplicação estética no queixo de uma mulher',
      ratio: 3 / 2,
      focus: '45% 50%',
      illustrative: true,
      credit: {
        author: 'Sum Sum',
        url: 'https://unsplash.com/photos/a-woman-receiving-a-cosmetic-injection-on-her-chin-35IcCEwNTqc',
      },
    },
    fiosPdo: {
      src: unsplash('1695990190064-e8ca2ca16af6'),
      alt: 'Mulher com sardas e as mãos emoldurando o contorno do rosto, em luz dourada',
      ratio: 2 / 3,
      focus: '50% 40%',
      illustrative: true,
      credit: {
        author: 'Mohamed hamdi',
        url: 'https://unsplash.com/photos/woman-with-freckles-in-golden-light-_Yca73BgigE',
      },
    },
    microagulhamento: {
      src: unsplash('1761718209835-c8586b7dcac0'),
      alt: 'Close-up de tratamento de pele com aplicação de produto no rosto com pincel',
      ratio: 2 / 3,
      focus: '50% 50%',
      illustrative: true,
      credit: {
        author: 'kimia kazemi',
        url: 'https://unsplash.com/photos/facial-treatment-with-brush-applying-white-cream-to-face-Xxs9WvkUPLo',
      },
    },
    skinbooster: {
      src: unsplash('1551184451-76b762941ad6'),
      alt: 'Close-up de rosto com pele luminosa e um feixe de luz quente sobre o olho',
      ratio: 2 / 3,
      focus: '50% 40%',
      illustrative: true,
      credit: {
        author: 'Kamila Maciejewska',
        url: 'https://unsplash.com/photos/portrait-of-woman-face-b2bXKspL5MY',
      },
    },
    rinomodelacao: {
      src: unsplash('1785860945533-918a531bcdeb'),
      alt: 'Profissional de luvas realizando uma aplicação estética no nariz de uma mulher',
      ratio: 4 / 3,
      focus: '45% 45%',
      illustrative: true,
      credit: {
        author: 'Sum Sum',
        url: 'https://unsplash.com/photos/technician-applying-eyebrow-treatment-to-a-woman-x0r5YvOJFCg',
      },
    },
    preenchimentoLabial: {
      src: unsplash('1752245818739-890854ca3b81'),
      alt: 'Close-up de lábios carnudos em tom malva, com a mão apoiada no rosto',
      ratio: 2 / 3,
      focus: '50% 55%',
      illustrative: true,
      credit: {
        author: 'bahareh moradian',
        url: 'https://unsplash.com/photos/a-woman-with-freckles-and-her-hand-on-her-lips-S5Gipx7uMCU',
      },
    },
  },

  /**
   * Sobre: hoje é uma foto de ambiente. Quando houver um retrato da Camila,
   * troque aqui e ajuste `about.photoCaption` em src/config/content.ts.
   */
  about: {
    src: pexels(35884502),
    alt: 'Sala de estética com maca branca diante de um armário preto de puxadores dourados, com vela acesa',
    ratio: 3712 / 5568,
    focus: '50% 55%',
    illustrative: true,
    credit: {
      author: 'Marine Fougère',
      url: 'https://www.pexels.com/photo/serene-spa-interior-with-massage-table-and-candle-35884502/',
    },
  },
} satisfies Record<string, SiteImage | Record<string, SiteImage>>

/** Lista única de créditos, exibida no rodapé. */
export const photoCredits: Credit[] = (() => {
  const all: SiteImage[] = [
    images.hero,
    ...Object.values(images.procedures),
    images.about,
  ]
  const seen = new Set<string>()
  return all
    .filter((img) => img.illustrative && img.credit)
    .map((img) => img.credit!)
    .filter((c) => (seen.has(c.url) ? false : (seen.add(c.url), true)))
})()
