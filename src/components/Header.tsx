import { useEffect, useRef, useState } from 'react'
import { nav, whatsappLink, instagramLink } from '../config/site'
import { useScrolled } from '../hooks/useScrolled'
import { LogoHorizontal } from './BrandLogo'

export function Header() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Fecha o menu se a tela crescer para o layout desktop.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const solid = scrolled || open

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500 ${
        open
          ? 'border-transparent bg-paper'
          : solid
            ? 'border-ink/10 bg-paper/88 backdrop-blur-md'
            : 'border-transparent'
      }`}
    >
      <div
        className={`container-x flex items-center justify-between transition-[height] duration-500 ${
          scrolled ? 'h-16' : 'h-20 md:h-24'
        }`}
      >
        <a href="#inicio" aria-label="Camila May Missio, Biomédica Esteta — início" className="relative z-10">
          <LogoHorizontal compact={scrolled} />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-10 text-[0.9rem] tracking-[0.02em]">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="group relative py-2">
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline hidden !min-h-11 !px-5 !py-2 !text-[0.85rem] sm:inline-flex"
          >
            Agendar horário
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="relative z-10 -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-ink transition-transform duration-500 ${
                  open ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute bottom-0 right-0 h-px bg-ink transition-all duration-500 ${
                  open ? 'w-6 -translate-y-1.5 -rotate-45' : 'w-4'
                }`}
              />
            </span>
          </button>
        </div>
      </div>
    </header>

      {/* Menu mobile (fora do header: o backdrop-filter dele prenderia o position:fixed) */}
      <div
        id="menu-mobile"
        className={`fixed inset-0 z-40 bg-paper transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Menu" className="container-x flex h-full flex-col justify-between pb-10 pt-32">
          <ul className="space-y-2">
            {nav.map((item, i) => (
              <li
                key={item.href}
                className={`transition-[opacity,transform] duration-700 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${120 + i * 70}ms` : '0ms' }}
              >
                <a
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-display text-[2.6rem] leading-tight"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-6">
            <div className="hairline" />
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="btn btn-ink w-full"
            >
              Agendar horário
            </a>
            <a
              href={instagramLink()}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="link-line text-sm"
            >
              Instagram
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
