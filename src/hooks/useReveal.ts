import { useEffect } from 'react'

const SELECTOR = '[data-reveal]:not(.is-visible)'

/**
 * Revela suavemente os elementos com [data-reveal] quando entram na tela.
 * Também acompanha elementos que surgem depois do carregamento (ex.: após
 * uma atualização do conteúdo), para que nenhum fique invisível.
 */
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    const observeAll = () => document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => io.observe(el))
    observeAll()

    // Observar o mesmo elemento de novo não tem efeito, então basta varrer a cada mudança.
    const mo = new MutationObserver(observeAll)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      mo.disconnect()
      io.disconnect()
    }
  }, [])
}
