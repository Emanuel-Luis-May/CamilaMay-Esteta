import { revealDelay } from '../lib/style'
import { procedures, proceduresSection } from '../config/content'
import { whatsappLink } from '../config/site'
import { Picture } from './Picture'

/** Deslocamento vertical de cada coluna no desktop: composição escalonada. */
const OFFSETS = ['lg:mt-0', 'lg:mt-28', 'lg:mt-12']

export function Procedures() {
  return (
    <section id="procedimentos" aria-labelledby="procedimentos-titulo" className="py-24 md:py-36">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 id="procedimentos-titulo" data-reveal className="t-h2 md:col-span-7">
            {proceduresSection.title}
          </h2>
          <p data-reveal className="t-lead max-w-[24rem] text-muted md:col-span-4 md:col-start-9" style={revealDelay(120)}>
            {proceduresSection.subtitle}
          </p>
        </div>

        <div className="hairline mt-12 md:mt-16" />

        <ul className="mt-14 grid gap-x-10 gap-y-20 md:mt-20 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-14">
          {procedures.map((p, i) => (
            <li
              key={p.id}
              id={p.id}
              data-reveal
              className={`${OFFSETS[i % OFFSETS.length]} ${i === 2 ? 'md:col-span-2 md:max-w-[calc(50%-1.25rem)] md:justify-self-center lg:col-span-1 lg:max-w-none' : ''}`}
              style={revealDelay(i * 120)}
            >
              <article aria-labelledby={`${p.id}-nome`} className="flex flex-col">
                <div className="aspect-[4/5] overflow-hidden bg-nude">
                  <Picture image={p.image} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 92vw" maxWidth={1440} />
                </div>
                <h3 id={`${p.id}-nome`} className="t-h3 mt-8">
                  {p.name}
                </h3>
                <p className="mt-4 max-w-[26rem] text-muted">{p.description}</p>
                <a
                  href={whatsappLink(p.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line mt-7 self-start text-[0.9375rem]"
                >
                  {proceduresSection.linkLabel}
                  <span className="sr-only"> — {p.name} (abre o WhatsApp)</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
