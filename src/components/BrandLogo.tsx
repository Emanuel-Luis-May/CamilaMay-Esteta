/**
 * Logo oficial de Camila May Missio, vetorizada a partir dos arquivos em
 * brand/originais/. Cada parte é um SVG em src/assets/brand/ aplicado como
 * máscara: a cor vem de `currentColor`, então a mesma logo serve para fundo
 * claro e escuro.
 */
import type { CSSProperties } from 'react'
import dividerUrl from '../assets/brand/divider.svg'
import markUrl from '../assets/brand/mark.svg'
import subUrl from '../assets/brand/sub.svg'
import wordUrl from '../assets/brand/word.svg'

/** Proporções (largura / altura) de cada parte vetorizada. */
const RATIO = { mark: 1380 / 1668, word: 3856 / 304, divider: 2844 / 232, sub: 2248 / 136 }

export const BRAND_LABEL = 'Camila May Missio, Biomédica Esteta'

function Shape({ src, ratio, className = '', style }: { src: string; ratio: number; className?: string; style?: CSSProperties }) {
  const mask = `url("${src}") center / contain no-repeat`
  return (
    <span
      aria-hidden="true"
      className={`block bg-current ${className}`}
      style={{ aspectRatio: ratio, mask, WebkitMask: mask, ...style }}
    />
  )
}

/** Só o rosto em traço — o símbolo da marca. */
export function LogoMark({ className = '' }: { className?: string }) {
  return <Shape src={markUrl} ratio={RATIO.mark} className={className} />
}

type Tone = 'light' | 'dark'

/**
 * Versão horizontal, para o cabeçalho: símbolo à esquerda, nome e
 * "Biomédica Esteta" à direita.
 */
export function LogoHorizontal({ tone = 'light', compact = false }: { tone?: Tone; compact?: boolean }) {
  const mark = tone === 'light' ? 'text-gold-mark' : 'text-gold'
  const word = tone === 'light' ? 'text-ink' : 'text-stone'
  const sub = tone === 'light' ? 'text-muted' : 'text-stone/80'
  return (
    <span role="img" aria-label={BRAND_LABEL} className="inline-flex items-center gap-3 md:gap-3.5">
      <Shape
        src={markUrl}
        ratio={RATIO.mark}
        className={`${mark} transition-[height] duration-500 ${compact ? 'h-9' : 'h-10 md:h-12'}`}
      />
      <span className="flex flex-col items-center gap-[0.4rem]">
        <Shape src={wordUrl} ratio={RATIO.word} className={`${word} w-[10.5rem] md:w-[12.5rem]`} />
        <Shape src={subUrl} ratio={RATIO.sub} className={`${sub} w-[8.25rem] md:w-[9.75rem]`} />
      </span>
    </span>
  )
}

/**
 * Versão empilhada, igual ao arquivo original (rosto, nome, divisor com lótus
 * e subtítulo). Posições em % medidas na arte original.
 */
export function LogoStacked({ tone = 'dark', className = '' }: { tone?: Tone; className?: string }) {
  const gold = tone === 'light' ? 'text-gold-mark' : 'text-gold'
  const text = tone === 'light' ? 'text-ink' : 'text-stone'
  const part = (left: number, top: number, width: number): CSSProperties => ({
    position: 'absolute',
    left: `${left}%`,
    top: `${top}%`,
    width: `${width}%`,
  })
  return (
    <span role="img" aria-label={BRAND_LABEL} className={`relative block aspect-[964/625] ${className}`}>
      <Shape src={markUrl} ratio={RATIO.mark} className={gold} style={part(32.26, 0, 35.79)} />
      <Shape src={wordUrl} ratio={RATIO.word} className={text} style={part(0, 68.8, 100)} />
      <Shape src={dividerUrl} ratio={RATIO.divider} className={gold} style={part(13.38, 83.04, 73.76)} />
      <Shape src={subUrl} ratio={RATIO.sub} className={text} style={part(20.85, 94.56, 58.3)} />
    </span>
  )
}
