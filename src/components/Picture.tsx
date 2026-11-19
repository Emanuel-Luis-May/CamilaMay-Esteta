import type { SiteImage } from '../config/images'
import { imageSources } from '../lib/image'

type Props = {
  image: SiteImage
  sizes: string
  className?: string
  priority?: boolean
  maxWidth?: number
}

/** Imagem responsiva com dimensões reservadas (sem saltos de layout). */
export function Picture({ image, sizes, className = '', priority = false, maxWidth }: Props) {
  const { src, srcSet } = imageSources(image, maxWidth)
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={image.alt}
      width={1200}
      height={Math.round(1200 / image.ratio)}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      style={{ objectPosition: image.focus }}
      className={`h-full w-full object-cover ${className}`}
    />
  )
}
