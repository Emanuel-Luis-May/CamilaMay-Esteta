/**
 * IMAGENS DO SITE — arquivo único para substituir as fotografias.
 *
 * Todas as fotografias atuais são ILUSTRATIVAS (Unsplash, licença gratuita
 * para uso comercial: https://unsplash.com/license). Elas não mostram a
 * Camila, clientes do estúdio nem trabalhos realizados por ela.
 *
 * Para trocar por uma foto própria:
 *   1. Coloque o arquivo em `public/images/` (ex.: public/images/hero.jpg).
 *   2. Troque `src` por '/images/hero.jpg'.
 *   3. Atualize `alt` descrevendo a foto real.
 *   4. Mude `illustrative` para false e remova `credit`.
 *
 * Fotos do Unsplash recebem tamanhos responsivos automaticamente (ver
 * src/lib/image.ts). Para arquivos locais, exporte cada foto com cerca de
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

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`

export const images = {
  hero: {
    src: unsplash('1698335107935-e2c8287c4947'),
    alt: 'Close-up de uma sobrancelha bem desenhada, em tons nude, sobre pele natural',
    ratio: 3 / 4,
    focus: '50% 45%',
    illustrative: true,
    credit: {
      author: 'Veronika Veronikamaks',
      url: 'https://unsplash.com/photos/a-close-up-of-a-persons-eye-with-a-pair-of-scissors-FXdBwvIJWq4',
    },
  },

  procedures: {
    design: {
      src: unsplash('1792679430669-caa0d70a9c52'),
      alt: 'Profissional modelando uma sobrancelha com pinça',
      ratio: 2 / 3,
      focus: '45% 40%',
      illustrative: true,
      credit: {
        author: 'Stefan Vibes',
        url: 'https://unsplash.com/photos/woman-getting-eyebrows-shaped-with-tweezers--k0_8bZ4L8c',
      },
    },
    micropigmentacao: {
      src: unsplash('1785860945533-918a531bcdeb'),
      alt: 'Profissional de luvas realizando um procedimento nas sobrancelhas',
      ratio: 4 / 3,
      focus: '62% 50%',
      illustrative: true,
      credit: {
        author: 'Sum Sum',
        url: 'https://unsplash.com/photos/technician-applying-eyebrow-treatment-to-a-woman-x0r5YvOJFCg',
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
  },

  /**
   * Sobre: hoje é uma foto de ambiente. Quando houver um retrato da Camila,
   * troque aqui e ajuste `about.photoCaption` em src/config/content.ts.
   */
  about: {
    src: unsplash('1731514709874-30eead90613b'),
    alt: 'Ambiente de estúdio de beleza com arcos claros e luz quente',
    ratio: 2 / 3,
    focus: '50% 50%',
    illustrative: true,
    credit: { author: 'kimia kazemi', url: 'https://unsplash.com/photos/uzEWY67n-xE' },
  },
} satisfies Record<string, SiteImage | Record<string, SiteImage>>

/**
 * Galeria editorial. A ordem define a posição: os itens se alternam entre a
 * coluna larga (1º, 3º, 5º...) e a coluna estreita (2º, 4º, 6º...).
 * `aspect` define o recorte exibido na grade; a ampliação mostra a foto inteira.
 */
export type GalleryItem = { image: SiteImage; aspect: '4/3' | '1/1' | '3/4' | '4/5' }

export const gallery: GalleryItem[] = [
  {
    aspect: '4/3',
    image: {
      src: unsplash('1542833807-ad5af0977050'),
      alt: 'Olho com maquiagem suave em tons pêssego e sobrancelha delicada',
      ratio: 700 / 552,
      illustrative: true,
      credit: {
        author: 'Linh Ha',
        url: 'https://unsplash.com/photos/a-close-up-of-a-womans-eye-with-makeup-nt6KRD9im7A',
      },
    },
  },
  {
    aspect: '3/4',
    image: {
      src: unsplash('1637325262485-5cf1abb98c05'),
      alt: 'Retrato de mulher com cabelo preso e suéter de gola alta em tons neutros',
      ratio: 2 / 3,
      focus: '50% 35%',
      illustrative: true,
      credit: { author: 'Teslariu Mihai', url: 'https://unsplash.com/photos/UWUlKFicthA' },
    },
  },
  {
    aspect: '1/1',
    image: {
      src: unsplash('1777521778743-d152c0404e32'),
      alt: 'Fotografia em preto e branco de olho e sobrancelha em detalhe',
      ratio: 700 / 644,
      illustrative: true,
      credit: {
        author: 'Zoe Denney-Goodyer',
        url: 'https://unsplash.com/photos/close-up-of-a-human-eye-with-detailed-eyelashes-and-eyebrow-otYarkxbZzo',
      },
    },
  },
  {
    aspect: '4/5',
    image: {
      src: unsplash('1761169563770-c6b8e61eb57a'),
      alt: 'Olho castanho e sobrancelha iluminados por luz quente lateral',
      ratio: 700 / 1028,
      focus: '50% 40%',
      illustrative: true,
      credit: {
        author: 'Kimia Khoubani',
        url: 'https://unsplash.com/photos/close-up-of-a-human-eye-with-warm-lighting-oc5j3o3L7oc',
      },
    },
  },
  {
    aspect: '4/3',
    image: {
      src: unsplash('1588892838749-6e03aed62918'),
      alt: 'Close-up de olho verde com cílios definidos e pele luminosa',
      ratio: 700 / 565,
      illustrative: true,
      credit: { author: 'Andriyko Podilnyk', url: 'https://unsplash.com/photos/IU-qCwVJuR4' },
    },
  },
  {
    aspect: '4/5',
    image: {
      src: unsplash('1674932668403-33398b81c92f'),
      alt: 'Retrato de jovem com sardas e maquiagem natural',
      ratio: 2 / 3,
      focus: '50% 30%',
      illustrative: true,
      credit: { author: 'Yoad Shejtman', url: 'https://unsplash.com/photos/YhMFYJZgMA0' },
    },
  },
]

/** Lista única de créditos, exibida no rodapé. */
export const photoCredits: Credit[] = (() => {
  const all: SiteImage[] = [
    images.hero,
    ...Object.values(images.procedures),
    images.about,
    ...gallery.map((g) => g.image),
  ]
  const seen = new Set<string>()
  return all
    .filter((img) => img.illustrative && img.credit)
    .map((img) => img.credit!)
    .filter((c) => (seen.has(c.url) ? false : (seen.add(c.url), true)))
})()
