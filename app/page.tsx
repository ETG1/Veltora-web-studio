import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  )
}
