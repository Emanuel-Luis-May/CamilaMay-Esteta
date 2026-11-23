import type { CSSProperties } from 'react'
import { hero } from '../config/content'
import { images } from '../config/images'
import { whatsappLink } from '../config/site'
import { Picture } from './Picture'

const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

/** Botões do Hero: caixa-alta pequena e espaçada, como um rótulo. */
const BTN = 'btn !text-[0.75rem] uppercase tracking-[0.16em]'

export function Hero() {
  return (
    <section id="inicio" aria-label="Início" className="relative overflow-hidden pb-20 pt-28 md:pt-36 lg:pb-16 lg:pt-32">
      <div className="container-x grid items-center gap-14 lg:min-h-[calc(100svh-9rem)] lg:grid-cols-12 lg:gap-10">
        {/* Texto */}
        <div className="relative z-10 lg:col-span-6 lg:pr-6">
          <p className="hero-fade text-[0.7rem] font-[450] uppercase tracking-[0.24em] text-gold-deep" style={d(200)}>
            {hero.eyebrow}
          </p>

          <h1 className="hero-line mt-6 text-[clamp(2.75rem,5.2vw,5.1rem)] leading-[1.04] tracking-[-0.02em] md:mt-8">
            <span style={d(350)}>
              {hero.title} <em className="italic text-rose">{hero.titleAccent}</em>
            </span>
          </h1>

          <p className="hero-fade mt-7 max-w-[30rem] text-muted md:mt-9" style={d(900)}>
            {hero.text}
          </p>

          <div className="hero-fade mt-9 flex flex-wrap gap-3 sm:gap-4 md:mt-11" style={d(1050)}>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`${BTN} btn-ink`}>
              {hero.primaryCta}
            </a>
            <a href="#procedimentos" className={`${BTN} btn-outline`}>
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        {/* Fotografia */}
        <div className="relative aspect-[4/5] w-full lg:col-span-6 lg:h-[min(calc(100svh-10rem),50rem)] lg:w-auto lg:justify-self-end">
          <div className="hero-photo absolute inset-0 overflow-hidden bg-nude">
            <Picture image={images.hero} priority sizes="(min-width: 1024px) 45vw, 92vw" />
          </div>
        </div>
      </div>
    </section>
  )
}
