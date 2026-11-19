import { revealDelay } from '../lib/style'
import { differentials } from '../config/content'
import { BrowMark } from './BrowMark'

export function Differentials() {
  return (
    <section aria-labelledby="diferenciais-titulo" className="py-24 md:py-36">
      <div className="container-x grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <h2 id="diferenciais-titulo" data-reveal className="t-h2 md:sticky md:top-32 md:max-w-[22rem]">
            {differentials.title}
          </h2>
        </div>

        <ul className="md:col-span-7">
          {differentials.items.map((item, i) => (
            <li
              key={item.title}
              data-reveal
              style={revealDelay(i * 90)}
              className="grid grid-cols-[3.25rem_1fr] gap-x-4 border-t border-ink/12 py-9 last:border-b md:grid-cols-[4.5rem_1fr] md:py-11"
            >
              <BrowMark className="mt-3 w-9 text-gold md:w-11" strokeWidth={1.25} />
              <div>
                <h3 className="t-h3">{item.title}</h3>
                <p className="mt-3 max-w-[30rem] text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
