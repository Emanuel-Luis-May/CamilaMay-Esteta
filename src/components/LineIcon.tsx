/**
 * Ícones em traço fino desenhados para os diferenciais.
 * Mesmo estilo em todos: caixa 48×48, traço de 1px, pontas arredondadas.
 */
const ICONS = {
  /** Impressão digital: o que é único em cada pessoa. */
  fingerprint: (
    <>
      <path d="M13 31c-.6-3-.7-6 0-9 1.4-6.4 5.8-10.5 11-10.5 6.8 0 11.5 5.6 11.5 13 0 1.5-.1 3-.4 4.5" />
      <path d="M17.5 36.5c-1.2-3-1.6-6.4-1.1-10 .7-5 3.7-8.5 7.6-8.5 4.4 0 7.5 3.6 7.5 8.6 0 3.2-.6 6.4-1.8 9.4" />
      <path d="M22 38.5c-1.4-3.4-2-7-1.6-10.6.3-2.7 1.6-4.4 3.6-4.4 2 0 3.3 1.7 3.3 4.4 0 3.6-.8 7-2.4 10.1" />
      <path d="M24 28c0 3.6-.4 6.6-1.4 9.4" />
    </>
  ),
  /** Compasso de proporção: medida e precisão. */
  compass: (
    <>
      <circle cx="24" cy="10.5" r="2.5" />
      <path d="M22.9 12.8 14 38M25.1 12.8 34 38" />
      <path d="M17 29.5c4.6 1.6 9.4 1.6 14 0" />
      <path d="M24 6v2" />
    </>
  ),
  /** Lótus, como na logo: beleza natural. */
  lotus: (
    <>
      <path d="M24 13c4.6 4.4 5.6 11.4 0 20-5.6-8.6-4.6-15.6 0-20Z" />
      <path d="M24 33c-6.3-.4-11.6-4.6-12.8-11.6 5.6.4 9.8 3.7 12.8 11.6Z" />
      <path d="M24 33c6.3-.4 11.6-4.6 12.8-11.6-5.6.4-9.8 3.7-12.8 11.6Z" />
      <path d="M13 37.5c7.3-1.6 14.7-1.6 22 0" />
    </>
  ),
  /** Gota com cruz: higiene e cuidado. */
  drop: (
    <>
      <path d="M24 9.5c-5.8 7.4-9.5 13-9.5 18a9.5 9.5 0 0 0 19 0c0-5-3.7-10.6-9.5-18Z" />
      <path d="M24 24v8M20 28h8" />
    </>
  ),
}

export type LineIconName = keyof typeof ICONS

export function LineIcon({ name, className = '' }: { name: LineIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {ICONS[name]}
    </svg>
  )
}
