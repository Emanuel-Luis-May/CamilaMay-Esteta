import { cta } from '../config/content'
import { whatsappLink } from '../config/site'
import { revealDelay } from '../lib/style'
import { BrowMark } from './BrowMark'

export function Cta() {
  return (
    <section id="contato" aria-labelledby="cta-titulo" className="on-dark relative overflow-hidden bg-ink py-28 text-paper md:py-44">
      <BrowMark
        className="pointer-events-none absolute -right-[18%] top-1/2 w-[120%] -translate-y-[38%] text-gold opacity-25 md:-right-[6%] md:w-[68%]"
        strokeWidth={1}
      />

      <div className="container-x relative grid gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <span aria-hidden="true" data-reveal className="mb-10 block h-px w-14 bg-gold" />
          <h2 id="cta-titulo" data-reveal className="t-h2 max-w-[38rem] text-[clamp(2.4rem,5.4vw,4.75rem)]">
            {cta.title}
          </h2>
        </div>
        <div data-reveal style={revealDelay(150)} className="md:col-span-4 md:col-start-9">
          <p className="t-lead text-paper/75">{cta.text}</p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-10 w-full sm:w-auto">
            {cta.button}
            <svg viewBox="0 0 24 24" className="h-[1.1rem] w-[1.1rem]" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.69 8.24-8.23 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
