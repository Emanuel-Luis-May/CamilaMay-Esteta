/**
 * DADOS DE CONTATO E LINKS — edite aqui.
 *
 * ⚠️ Antes de publicar, preencha `whatsapp.number` e `instagram.handle`.
 * Enquanto estiverem vazios, os botões continuam visíveis, mas o WhatsApp
 * abre sem destinatário e o Instagram abre a página inicial da rede.
 */
export const site = {
  name: 'Camila May Missio',
  tagline: 'Biomédica Esteta',

  whatsapp: {
    /** Só números, com DDI e DDD. Ex.: '5511987654321' */
    number: '',
    /** Mensagem padrão enviada pelos botões gerais de agendamento. */
    defaultMessage: 'Olá, Camila! Gostaria de agendar um atendimento.',
  },

  instagram: {
    /** Sem @. Ex.: 'camilamay.studio' */
    handle: '',
  },

  /**
   * Localização. Deixe em branco até ter o endereço definitivo:
   * o rodapé mostra "Endereço informado no agendamento".
   */
  location: {
    address: '', // Ex.: 'Rua Exemplo, 123 — Sala 4'
    city: '', // Ex.: 'São Paulo — SP'
    mapsUrl: '', // Link do Google Maps
  },

  /** Usado nas metatags. Também atualize index.html ao mudar o domínio. */
  url: '',
} as const

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
] as const

export function whatsappLink(message: string = site.whatsapp.defaultMessage) {
  const text = encodeURIComponent(message)
  return site.whatsapp.number
    ? `https://wa.me/${site.whatsapp.number}?text=${text}`
    : `https://wa.me/?text=${text}`
}

export function instagramLink() {
  return site.instagram.handle
    ? `https://www.instagram.com/${site.instagram.handle}/`
    : 'https://www.instagram.com/'
}

if (import.meta.env.DEV) {
  if (!site.whatsapp.number) console.warn('[config] Preencha site.whatsapp.number em src/config/site.ts')
  if (!site.instagram.handle) console.warn('[config] Preencha site.instagram.handle em src/config/site.ts')
}
