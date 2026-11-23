import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { revealDelay } from '../lib/style'
import { procedureMessage, procedures, proceduresSection } from '../config/content'
import { whatsappLink } from '../config/site'
import { Picture } from './Picture'

/** Deslocamento vertical dos cards no desktop: composição escalonada. */
const OFFSETS = ['lg:mt-0', 'lg:mt-28', 'lg:mt-12']

const ARROWS = [
  { step: -1, label: 'Procedimentos anteriores', d: 'M10 2L4 8l6 6' },
  { step: 1, label: 'Próximos procedimentos', d: 'M6 2l6 6-6 6' },
] as const

/**
 * Carrossel com rolagem nativa (deslizar no celular, trackpad e setas no
 * desktop). Mostra parte do próximo card para indicar que há mais.
 */
export function Procedures() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [scroll, setScroll] = useState({ progress: 0, visible: 1, atStart: true, atEnd: false })

  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setScroll({
      progress: max > 0 ? el.scrollLeft / max : 0,
      visible: Math.min(1, el.clientWidth / el.scrollWidth),
      atStart: el.scrollLeft <= 2,
      atEnd: el.scrollLeft >= max - 2,
    })
  }, [])

  useLayoutEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  /** Avança ou volta exatamente um card. */
  const go = (step: number) => {
    const el = trackRef.current
    const card = el?.querySelector('li')
    if (!el || !card) return
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: step * (card.offsetWidth + gap), behavior: reduce ? 'auto' : 'smooth' })
  }

  const scrollable = scroll.visible < 1

  return (
    <section id="procedimentos" aria-labelledby="procedimentos-titulo" className="overflow-hidden py-24 md:py-36">
      <div className="container-x">
        <h2 id="procedimentos-titulo" data-reveal className="t-h2">
          {proceduresSection.title}
        </h2>

        <div className="hairline mt-12 md:mt-16" />

        <div
          role="region"
          aria-roledescription="carrossel"
          aria-label="Procedimentos"
          data-reveal
          style={revealDelay(200)}
          className="mt-14 md:mt-20"
        >
          <ul
            ref={trackRef}
            id="procedimentos-lista"
            onScroll={update}
            className="no-scrollbar -mx-5 flex snap-x snap-mandatory items-start gap-6 overflow-x-auto scroll-px-5 px-5 md:-mx-10 md:gap-10 md:scroll-px-10 md:px-10 xl:-mx-16 xl:gap-14 xl:scroll-px-16 xl:px-16"
          >
            {procedures.map((p, i) => (
              <li
                key={p.id}
                id={p.id}
                className={`w-[82%] shrink-0 snap-start sm:w-[58%] md:w-[44%] lg:w-[29%] ${OFFSETS[i % OFFSETS.length]}`}
              >
                <article aria-labelledby={`${p.id}-nome`} className="flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden bg-nude">
                    <Picture image={p.image} sizes="(min-width: 1024px) 29vw, (min-width: 768px) 44vw, 82vw" maxWidth={1440} />
                  </div>
                  <h3 id={`${p.id}-nome`} className="t-h3 mt-8">
                    {p.name}
                  </h3>
                  {p.description && <p className="mt-4 max-w-[26rem] text-muted">{p.description}</p>}
                  <a
                    href={whatsappLink(procedureMessage(p))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line mt-7 self-start text-[0.9375rem]"
                  >
                    {proceduresSection.linkLabel}
                    <span className="sr-only"> — {p.name} (abre o WhatsApp)</span>
                  </a>
                </article>
              </li>
            ))}
          </ul>

          {scrollable && (
            <div className="mt-14 flex items-center gap-6 md:mt-16 md:gap-10">
              <div aria-hidden="true" className="relative h-px flex-1 overflow-hidden bg-ink/15">
                <div
                  className="absolute inset-y-0 left-0 bg-gold-deep"
                  style={{
                    width: `${scroll.visible * 100}%`,
                    transform: `translateX(${(scroll.progress * (1 - scroll.visible) * 100) / scroll.visible}%)`,
                  }}
                />
              </div>
              <div className="flex gap-3">
                {ARROWS.map((b) => (
                  <button
                    key={b.step}
                    type="button"
                    onClick={() => go(b.step)}
                    disabled={b.step < 0 ? scroll.atStart : scroll.atEnd}
                    aria-label={b.label}
                    aria-controls="procedimentos-lista"
                    className="flex h-12 w-12 items-center justify-center border border-ink/20 text-ink/80 transition-colors duration-300 hover:border-gold-deep hover:text-gold-deep disabled:pointer-events-none disabled:opacity-30"
                  >
                    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
                      <path d={b.d} stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
