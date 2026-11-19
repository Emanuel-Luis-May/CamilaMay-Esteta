import type { CSSProperties } from 'react'
import { hero } from '../config/content'
import { images } from '../config/images'
import { site, whatsappLink } from '../config/site'
import { Picture } from './Picture'

const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

/**
 * Linhas de mapeamento de sobrancelha — a marcação que antecede o design:
 * guias partindo da base do nariz até início, arco e cauda da sobrancelha.
 * Coordenadas no sistema 300×400 (proporção 3:4 da foto do Hero).
 * Ao trocar a foto do Hero, ajuste os pontos ou remova <BrowMapping />.
 */
const ORIGIN = { x: 296, y: 340 }
const POINTS = [
  { x: 240, y: 103, end: { x: 233, y: 75 } }, // início
  { x: 169, y: 103, end: { x: 154, y: 75 } }, // arco
  { x: 36, y: 262, end: { x: 5, y: 253 } }, // cauda
]

function BrowMapping() {
  return (
    <svg
      viewBox="0 0 300 400"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      aria-hidden="true"
    >
      <g stroke="var(--color-paper)" strokeWidth="0.6" fill="none" opacity="0.75">
        {POINTS.map((p, i) => (
          <line
            key={i}
            x1={ORIGIN.x}
            y1={ORIGIN.y}
            x2={p.end.x}
            y2={p.end.y}
            pathLength={1}
            className="map-line"
            style={d(1500 + i * 160)}
           
          />
        ))}
      </g>
      <path
        d="M240 103C205 92 160 100 120 125S50 200 36 262"
        stroke="var(--color-gold)"
        strokeWidth="0.8"
        fill="none"
        pathLength={1}
        className="map-line"
        style={d(2100)}
       
      />
      {POINTS.map((p, i) => (
        <g key={i} className="map-dot" style={d(2500 + i * 120)}>
          <circle cx={p.x} cy={p.y} r="4.5" stroke="var(--color-gold)" strokeWidth="0.6" fill="none" />
          <circle cx={p.x} cy={p.y} r="1.6" fill="var(--color-gold)" />
        </g>
      ))}
    </svg>
  )
}

export function Hero() {
  return (
    <section id="inicio" aria-label="Início" className="relative overflow-hidden pb-20 pt-24 md:pt-32 lg:pb-16">
      <div className="container-x grid items-center lg:min-h-[calc(100svh-9rem)] lg:grid-cols-12">
        {/* Fotografia */}
        <div className="relative ml-auto aspect-[3/4] w-[80%] sm:w-[58%] lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:ml-0 lg:h-[min(calc(100svh-10rem),50rem)] lg:w-auto lg:justify-self-end">
          <div className="hero-photo absolute inset-0 overflow-hidden bg-nude">
            <Picture image={images.hero} priority sizes="(min-width: 1024px) 40vw, 80vw" />
          </div>
          <BrowMapping />

          {/* Assinatura */}
          <p
            className="hero-fade absolute right-full top-0 mr-3 flex rotate-180 items-center gap-3 font-display text-[0.95rem] italic tracking-[0.02em] text-ink/80 [writing-mode:vertical-rl] md:mr-5 lg:bottom-0 lg:top-auto"
            style={d(2600)}
          >
            <span aria-hidden="true" className="h-10 w-px bg-gold" />
            {site.name}
          </p>
        </div>

        {/* Texto */}
        <div className="relative z-10 mt-10 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:mt-0">
          {/* No desktop cada frase ocupa uma linha; a segunda avança sobre a borda da foto. */}
          <h1 className="t-display lg:whitespace-nowrap">
            <span className="hero-line">
              <span style={d(350)}>{hero.titleLines[0]}</span>
            </span>
            <span className="hero-line pl-[0.55em] lg:pl-[1.15em]">
              <span style={d(500)}>{hero.titleLines[1]}</span>
            </span>
          </h1>

          <p className="hero-fade t-lead mt-8 max-w-[33rem] text-muted md:mt-10" style={d(1000)}>
            {hero.text}
          </p>

          <div className="hero-fade mt-10 flex flex-wrap items-center gap-x-9 gap-y-5" style={d(1150)}>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ink">
              {hero.primaryCta}
            </a>
            <a href="#procedimentos" className="link-line text-[0.9375rem]">
              {hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
