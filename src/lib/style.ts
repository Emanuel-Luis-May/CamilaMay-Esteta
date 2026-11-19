import type { CSSProperties } from 'react'

/** Atraso da animação de entrada ao rolar ([data-reveal]). */
export const revealDelay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as CSSProperties
