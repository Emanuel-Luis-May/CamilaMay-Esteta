import { photoCredits } from '../config/images'
import { instagramLink, nav, site, whatsappLink } from '../config/site'
import { LogoStacked } from './BrandLogo'

export function Footer() {
  const year = new Date().getFullYear()
  const { address, city, mapsUrl } = site.location
  const hasAddress = Boolean(address || city)

  return (
    <footer className="on-dark bg-ink text-paper">
      <div className="container-x">
        <div className="h-px bg-gold/25" />

        <div className="grid gap-12 py-16 md:grid-cols-12 md:gap-8 md:py-20">
          <div className="md:col-span-5">
            <a href="#inicio" aria-label="Camila May Missio, Biomédica Esteta — voltar ao início" className="block w-[15rem] md:w-[16.5rem]">
              <LogoStacked tone="dark" />
            </a>
            <p className="t-small mt-8 max-w-[18rem] text-paper/60">
              Micropigmentação, botox, bioestimulador de colágeno, harmonização facial, fios de PDO, microagulhamento, skinbooster, rinomodelação e preenchimento labial.
            </p>
          </div>

          <nav aria-label="Rodapé" className="md:col-span-2">
            <h2 className="t-small font-sans text-paper/45">Navegação</h2>
            <ul className="mt-5 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-paper/85 transition-colors hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <h2 className="t-small font-sans text-paper/45">Contato</h2>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a href={instagramLink()} target="_blank" rel="noopener noreferrer" className="text-paper/85 transition-colors hover:text-gold">
                  Instagram
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-paper/85 transition-colors hover:text-gold">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="t-small font-sans text-paper/45">Localização</h2>
            <address className="mt-5 not-italic text-paper/85">
              {hasAddress ? (
                <>
                  {address && <span className="block">{address}</span>}
                  {city && <span className="block">{city}</span>}
                  {mapsUrl && (
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="link-line mt-3 text-sm">
                      Ver no mapa
                    </a>
                  )}
                </>
              ) : (
                <span className="block max-w-[16rem]">Atendimento com hora marcada. Endereço informado no agendamento.</span>
              )}
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-paper/10 py-8 text-[0.8125rem] text-paper/50 md:flex-row md:items-start md:justify-between">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <details className="group md:max-w-[28rem] md:text-right">
            <summary className="cursor-pointer list-none transition-colors hover:text-paper/80 [&::-webkit-details-marker]:hidden">
              Fotografias ilustrativas (Unsplash e Pexels) <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 leading-relaxed">
              As imagens deste site são de bancos de imagem e não retratam clientes nem trabalhos realizados no estúdio. Créditos:{' '}
              {photoCredits.map((c, i) => (
                <span key={c.url}>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="underline decoration-paper/25 underline-offset-2 hover:text-paper/80">
                    {c.author}
                  </a>
                  {i < photoCredits.length - 1 ? ', ' : '.'}
                </span>
              ))}
            </p>
          </details>
        </div>
      </div>
    </footer>
  )
}
