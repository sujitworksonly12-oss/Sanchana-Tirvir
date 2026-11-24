import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Works from '../components/Works.jsx'
import Clients from '../components/Clients.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Works />
      <Clients />
      <Footer />
    </main>
  )
}
