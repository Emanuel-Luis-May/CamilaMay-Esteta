/**
 * TEXTOS DO SITE — procedimentos, sobre, diferenciais e chamadas.
 */
import type { LineIconName } from '../components/LineIcon'
import { images, type SiteImage } from './images'

export type Procedure = {
  id: string
  name: string
  /** Opcional: sem texto, o card mostra só o nome e o link. */
  description?: string
  image: SiteImage
}

export const hero = {
  /** Linha pequena em caixa-alta acima do título. */
  eyebrow: 'Biomédica Esteta · Medianeira — PR',
  /** O título termina com a palavra em destaque (itálico, tom rosado). */
  title: 'Realce sua beleza. Revele sua',
  titleAccent: 'essência.',
  text: 'Beleza, precisão e naturalidade em cada detalhe. Cuidados personalizados para valorizar aquilo que você tem de mais único.',
  primaryCta: 'Agendar atendimento',
  secondaryCta: 'Conhecer procedimentos',
}

export const proceduresSection = {
  title: 'Beleza em cada detalhe.',
  linkLabel: 'Consultar e agendar',
  /**
   * Mensagem pré-preenchida no WhatsApp ao clicar em "Consultar e agendar".
   * `{procedimento}` é trocado pelo nome do card clicado.
   */
  whatsappMessage: 'Olá, Camila! Gostaria de saber mais sobre {procedimento} e agendar uma avaliação.',
}

export const procedureMessage = (p: Procedure) =>
  proceduresSection.whatsappMessage.replace('{procedimento}', p.name)

export const procedures: Procedure[] = [
  {
    id: 'micropigmentacao',
    name: 'Micropigmentação',
    description:
      'Técnica que proporciona definição e preenchimento das sobrancelhas, buscando um resultado harmônico e natural.',
    image: images.procedures.micropigmentacao,
  },
  {
    id: 'botox',
    name: 'Botox',
    description:
      'Tratamento estético voltado à suavização de linhas de expressão, com avaliação individualizada.',
    image: images.procedures.botox,
  },
  {
    id: 'bioestimulador-de-colageno',
    name: 'Bioestimulador de Colágeno',
    description:
      'Estimula a produção natural de colágeno, contribuindo de forma gradual para a firmeza e a qualidade da pele.',
    image: images.procedures.bioestimulador,
  },
  {
    id: 'harmonizacao-facial',
    name: 'Harmonização Facial',
    description:
      'Conjunto de procedimentos que busca equilibrar as proporções do rosto, valorizando seus traços com naturalidade.',
    image: images.procedures.harmonizacao,
  },
  {
    id: 'fios-de-pdo',
    name: 'Fios de PDO',
    description:
      'Fios absorvíveis que auxiliam na sustentação da pele e estimulam o colágeno, com resultado gradual e natural.',
    image: images.procedures.fiosPdo,
  },
  {
    id: 'microagulhamento',
    name: 'Microagulhamento',
    description:
      'Microperfurações controladas que estimulam a renovação da pele, auxiliando na melhora da textura e do viço.',
    image: images.procedures.microagulhamento,
  },
  {
    id: 'skinbooster',
    name: 'Skinbooster',
    description:
      'Hidratação profunda da pele com ácido hialurônico, contribuindo para mais viço, maciez e luminosidade.',
    image: images.procedures.skinbooster,
  },
  {
    id: 'rinomodelacao',
    name: 'Rinomodelação',
    description:
      'Procedimento sem cirurgia que busca harmonizar o contorno do nariz, respeitando as proporções do rosto.',
    image: images.procedures.rinomodelacao,
  },
  {
    id: 'preenchimento-labial',
    name: 'Preenchimento Labial',
    description:
      'Realça o contorno e o volume dos lábios de forma equilibrada, valorizando o formato natural da boca.',
    image: images.procedures.preenchimentoLabial,
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
  /** Legenda opcional da foto (vazia = sem legenda). Ex.: 'Camila May Missio'. */
  photoCaption: '',
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

export const cta = {
  title: 'Sua beleza merece esse cuidado.',
  text: 'Agende seu atendimento e descubra como pequenos detalhes podem valorizar ainda mais sua beleza.',
  button: 'Agendar pelo WhatsApp',
}
