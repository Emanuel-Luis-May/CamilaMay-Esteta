import type { SiteImage } from '../config/images'

const WIDTHS = [480, 720, 1080, 1440, 1920]

const isUnsplash = (src: string) => src.startsWith('https://images.unsplash.com/')

/**
 * Gera src/srcSet responsivos. Fotos do Unsplash são redimensionadas e
 * convertidas para AVIF/WebP pelo próprio CDN; arquivos locais são usados
 * como estão.
 */
export function imageSources(img: SiteImage, maxWidth = 1920) {
  if (!isUnsplash(img.src)) return { src: img.src, srcSet: undefined }
  const widths = WIDTHS.filter((w) => w <= maxWidth)
  const url = (w: number) => `${img.src}?auto=format&fit=max&w=${w}&q=72`
  return {
    src: url(widths[Math.min(2, widths.length - 1)]),
    srcSet: widths.map((w) => `${url(w)} ${w}w`).join(', '),
  }
}

/** Versão grande, para a ampliação da galeria. */
export function largeSource(img: SiteImage) {
  return isUnsplash(img.src) ? `${img.src}?auto=format&fit=max&w=2000&q=80` : img.src
}
