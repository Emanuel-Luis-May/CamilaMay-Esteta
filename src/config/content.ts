/**
 * TEXTOS DO SITE — procedimentos, sobre, diferenciais e chamadas.
 */
import type { LineIconName } from '../components/LineIcon'
import { images, type SiteImage } from './images'

export type Procedure = {
  id: string
  name: string
  description: string
  image: SiteImage
  /** Mensagem pré-preenchida no WhatsApp ao clicar em "Consultar e agendar". */
  whatsappMessage: string
}

export const hero = {
  titleLines: ['Realce sua beleza.', 'Revele sua essência.'],
  text: 'Beleza, precisão e naturalidade em cada detalhe. Cuidados personalizados para valorizar aquilo que você tem de mais único.',
  primaryCta: 'Agendar atendimento',
  secondaryCta: 'Conhecer procedimentos',
}

export const proceduresSection = {
  title: 'Beleza em cada detalhe.',
  subtitle: 'Procedimentos pensados para valorizar sua beleza natural.',
  linkLabel: 'Consultar e agendar',
}

export const procedures: Procedure[] = [
  {
    id: 'design-de-sobrancelhas',
    name: 'Design de Sobrancelhas',
    description:
      'Realce a harmonia do seu rosto com um design personalizado, respeitando seus traços e características naturais.',
    image: images.procedures.design,
    whatsappMessage: 'Olá, Camila! Gostaria de saber mais e agendar um Design de Sobrancelhas.',
  },
  {
    id: 'micropigmentacao',
    name: 'Micropigmentação',
    description:
      'Técnica que proporciona definição e preenchimento das sobrancelhas, buscando um resultado harmônico e natural.',
    image: images.procedures.micropigmentacao,
    whatsappMessage: 'Olá, Camila! Gostaria de saber mais e agendar uma avaliação de Micropigmentação.',
  },
  {
    id: 'botox',
    name: 'Botox',
    description:
      'Tratamento estético voltado à suavização de linhas de expressão, com avaliação individualizada.',
    image: images.procedures.botox,
    whatsappMessage: 'Olá, Camila! Gostaria de saber mais e agendar uma avaliação para Botox.',
  },
]

export const about = {
  title: 'Beleza que respeita sua essência.',
  text: 'Cada rosto possui sua própria beleza. Meu trabalho é valorizar seus traços naturais através de procedimentos personalizados, atenção aos detalhes e cuidado em cada etapa do atendimento.',
  /**
   * Apresentação pessoal da Camila. Cada item vira um parágrafo abaixo do
   * texto principal. Deixe vazio até ter o texto definitivo — nada aparece.
   * Não inclua formação ou certificações sem confirmação da Camila.
   */
  bio: [] as string[],
  /** Legenda da foto. Ao usar um retrato real, troque por algo como 'Camila May Missio'. */
  photoCaption: 'Imagem ilustrativa',
}

export const differentials = {
  title: 'O que guia cada atendimento.',
  /** Ícones disponíveis: veja src/components/LineIcon.tsx. */
  items: [
    {
      icon: 'fingerprint',
      title: 'Atendimento personalizado',
      text: 'Cada procedimento começa por ouvir você e entender o que deseja realçar.',
    },
    {
      icon: 'compass',
      title: 'Atenção aos detalhes',
      text: 'Medidas, proporções e acabamento observados com calma, do início ao fim.',
    },
    {
      icon: 'lotus',
      title: 'Valorização da beleza natural',
      text: 'O objetivo é harmonizar os seus traços, nunca transformá-los em outros.',
    },
    {
      icon: 'drop',
      title: 'Cuidado e responsabilidade',
      text: 'Higiene, avaliação individual e orientações claras em cada procedimento.',
    },
  ] satisfies { icon: LineIconName; title: string; text: string }[],
}

export const gallerySection = {
  title: 'Referências de beleza natural.',
  note: 'Fotografias ilustrativas de referência estética. Não retratam clientes nem trabalhos realizados no estúdio.',
}

export const cta = {
  title: 'Sua beleza merece esse cuidado.',
  text: 'Agende seu atendimento e descubra como pequenos detalhes podem valorizar ainda mais sua beleza.',
  button: 'Agendar pelo WhatsApp',
}
