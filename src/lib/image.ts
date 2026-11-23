import type { SiteImage } from '../config/images'

/** Larguras salvas por scripts/baixar-fotos.sh (arquivo `<base>-<largura>.jpg`). */
const LOCAL_WIDTHS = [640, 1080, 1440]
const isLocalSet = (src: string) => src.startsWith('/images/fotos/')

/**
 * Gera src/srcSet responsivos. Fotos de banco de imagem (salvas em
 * public/images/fotos/) têm 3 larguras; outros arquivos são usados como estão.
 */
export function imageSources(img: SiteImage, maxWidth = 1920) {
  if (!isLocalSet(img.src)) return { src: img.src, srcSet: undefined }
  const fit = LOCAL_WIDTHS.filter((w) => w <= maxWidth)
  const widths = fit.length ? fit : [LOCAL_WIDTHS[0]]
  const url = (w: number) => `${img.src}-${w}.jpg`
  return {
    src: url(widths[Math.min(1, widths.length - 1)]),
    srcSet: widths.map((w) => `${url(w)} ${w}w`).join(', '),
  }
}
