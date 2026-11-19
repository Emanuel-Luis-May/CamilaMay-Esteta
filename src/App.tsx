import { About } from './components/About'
import { Cta } from './components/Cta'
import { Differentials } from './components/Differentials'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Procedures } from './components/Procedures'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Procedures />
        <About />
        <Differentials />
        <Gallery />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
