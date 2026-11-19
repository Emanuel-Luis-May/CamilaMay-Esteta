import { useEffect, useRef, type KeyboardEvent } from 'react'
import type { GalleryItem } from '../config/images'
import { largeSource } from '../lib/image'

type Props = {
  items: GalleryItem[]
  index: number | null
  onChange: (index: number | null) => void
}

/** Ampliação de imagens com teclado (← → Esc), toque (deslizar) e foco preso no diálogo. */
export function Lightbox({ items, index, onChange }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const touchX = useRef<number | null>(null)
  const open = index !== null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      document.documentElement.style.overflow = 'hidden'
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  const go = (step: number) => {
    if (index === null) return
    onChange((index + step + items.length) % items.length)
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') go(1)
    if (e.key === 'ArrowLeft') go(-1)
  }

  const current = index !== null ? items[index] : null

  return (
    <dialog
      ref={dialogRef}
      aria-label="Galeria ampliada"
      onClose={() => {
        document.documentElement.style.overflow = ''
        onChange(null)
      }}
      onKeyDown={onKeyDown}
      onClick={(e) => e.target === e.currentTarget && onChange(null)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
        touchX.current = null
      }}
      className="on-dark fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-ink/96 p-0 text-paper backdrop:bg-ink/80 open:flex open:flex-col"
    >
      {current && (
        <>
          <div className="flex items-center justify-between px-5 py-4 md:px-10 md:py-6">
            <p className="t-small text-paper/70" aria-live="polite">
              {index! + 1} de {items.length}
            </p>
            <button
              type="button"
              onClick={() => onChange(null)}
              className="-mr-2 flex h-11 items-center gap-3 px-2 text-sm tracking-[0.04em] text-paper/85 hover:text-paper"
              autoFocus
            >
              Fechar
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1" />
              </svg>
            </button>
          </div>

          <figure
            className="flex min-h-0 flex-1 flex-col items-center justify-center px-5 md:px-24"
            onClick={(e) => e.target === e.currentTarget && onChange(null)}
          >
            <img
              key={current.image.src}
              src={largeSource(current.image)}
              alt={current.image.alt}
              className="hero-fade max-h-[calc(100svh-11rem)] w-auto max-w-full object-contain"
            />
            <figcaption className="t-small mt-5 max-w-[40rem] text-center text-paper/65">
              {current.image.alt}
              {current.image.credit && (
                <span className="mt-1 block text-paper/50">
                  Foto ilustrativa de{' '}
                  <a href={current.image.credit.url} target="_blank" rel="noopener noreferrer" className="underline decoration-gold/60 underline-offset-4 hover:text-paper">
                    {current.image.credit.author}
                  </a>
                </span>
              )}
            </figcaption>
          </figure>

          <div className="flex items-center justify-center gap-4 py-5 md:absolute md:inset-x-6 md:top-1/2 md:-translate-y-1/2 md:justify-between md:py-0">
            {[
              { step: -1, label: 'Imagem anterior', d: 'M10 2L4 8l6 6' },
              { step: 1, label: 'Próxima imagem', d: 'M6 2l6 6-6 6' },
            ].map((b) => (
              <button
                key={b.step}
                type="button"
                onClick={() => go(b.step)}
                aria-label={b.label}
                className="flex h-12 w-12 items-center justify-center border border-paper/20 text-paper/85 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
                  <path d={b.d} stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
              </button>
            ))}
          </div>
        </>
      )}
    </dialog>
  )
}
