import { revealDelay } from '../lib/style'
import { about } from '../config/content'
import { images } from '../config/images'
import { site } from '../config/site'
import { LogoMark } from './BrandLogo'
import { Picture } from './Picture'

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="bg-sand py-24 md:py-36">
      <div className="container-x grid gap-14 md:grid-cols-12 md:items-center md:gap-10">
        <figure data-reveal className="md:col-span-5 lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-nude">
            <Picture image={images.about} sizes="(min-width: 768px) 40vw, 92vw" maxWidth={1440} />
          </div>
          {about.photoCaption && (
            <figcaption className="t-small mt-4 text-muted">{about.photoCaption}</figcaption>
          )}
        </figure>

        <div className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
          <h2 id="sobre-titulo" data-reveal className="t-h2">
            {about.title}
          </h2>
          <p data-reveal className="t-lead mt-8 text-ink/85" style={revealDelay(120)}>
            {about.text}
          </p>
          {about.bio.map((paragraph, i) => (
            <p key={i} data-reveal className="mt-5 text-muted">
              {paragraph}
            </p>
          ))}
          <div data-reveal className="mt-12 flex items-center gap-5" style={revealDelay(220)}>
            <LogoMark className="h-16 shrink-0 text-gold-mark" />
            <p className="border-l border-ink/15 pl-5">
              <span className="block font-display text-[1.5rem] italic leading-tight">{site.name}</span>
              <span className="t-small mt-1 block text-muted">{site.tagline}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
