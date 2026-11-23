/**
 * Motivo gráfico da marca: o arco de uma sobrancelha em traço fino.
 * Usado como marcador nos diferenciais, no CTA e no favicon.
 */
export function BrowMark({ className = '', strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 48 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M2 13.5C8 8 16 3.6 26 2.6c6.4-.6 12 .8 15.6 3.4 2 1.4 3.4 3.4 4.4 5.6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
