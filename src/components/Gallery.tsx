import { useState } from 'react'
import { gallerySection } from '../config/content'
import { gallery, type GalleryItem } from '../config/images'
import { revealDelay } from '../lib/style'
import { Lightbox } from './Lightbox'
import { Picture } from './Picture'

const ASPECT: Record<GalleryItem['aspect'], string> = {
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '3/4': 'aspect-[3/4]',
  '4/5': 'aspect-[4/5]',
}

function Heading({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <h2 id="galeria-titulo" data-reveal className="t-h2 max-w-[30rem]">
        {gallerySection.title}
      </h2>
      <p data-reveal style={revealDelay(120)} className="t-small mt-6 max-w-[26rem] text-muted">
        {gallerySection.note}
      </p>
    </div>
  )
}

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  // Itens alternam entre a coluna larga (pares) e a estreita (ímpares).
  const columns = [
    gallery.map((item, i) => ({ item, i })).filter(({ i }) => i % 2 === 0),
    gallery.map((item, i) => ({ item, i })).filter(({ i }) => i % 2 === 1),
  ]

  return (
    <section id="galeria" aria-labelledby="galeria-titulo" className="bg-sand py-24 md:py-36">
      <div className="container-x">
        <Heading className="mb-12 md:hidden" />

        <div className="flex gap-3 sm:gap-5 md:gap-8 lg:gap-12">
          {columns.map((col, c) => (
            <ul
              key={c}
              className={`flex flex-col gap-3 sm:gap-5 md:gap-8 lg:gap-12 ${
                c === 0 ? 'w-1/2 md:w-7/12' : 'w-1/2 md:w-5/12 md:pt-24'
              }`}
            >
              {c === 0 && (
                <li className="hidden md:block md:pb-8 lg:pb-14">
                  <Heading />
                </li>
              )}
              {col.map(({ item, i }) => (
                <li key={item.image.src} data-reveal style={revealDelay((i % 2) * 120)}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`group relative block w-full cursor-zoom-in overflow-hidden bg-nude ${ASPECT[item.aspect]}`}
                    aria-label={`Ampliar imagem: ${item.image.alt}`}
                  >
                    <Picture
                      image={item.image}
                      sizes="(min-width: 768px) 45vw, 50vw"
                      maxWidth={1440}
                      className="transition-transform duration-[1.4s] ease-[var(--ease-soft)] group-hover:scale-[1.03]"
                    />
                  </button>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <Lightbox items={gallery} index={active} onChange={setActive} />
    </section>
  )
}
