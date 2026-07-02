import CinematicIntro from '@/components/sections/CinematicIntro'
import CoreRigor from '@/components/sections/CoreRigor'
import Architecture from '@/components/sections/Architecture'
import Performance from '@/components/sections/Performance'
import Philosophy from '@/components/sections/Philosophy'
import WorksArchive from '@/components/sections/WorksArchive'
import Methodology from '@/components/sections/Methodology'
import ProjectTransmission from '@/components/sections/ProjectTransmission'

import Hero1 from '@/components/sections/Hero1'
import Services from '@/components/sections/Services'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import ServiceBlock from '@/components/ui/ServiceBlock'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      {/* Cinematic Intro — contains Hero internally. On mobile renders Hero directly. */}
      {/* <CinematicIntro /> */}
      {/* Variant 5 — Master Assembly section order */}
      
      <Hero1 />
      <ServiceBlock>
        <Services />
        <FeaturedProjects/>
        <ProjectTransmission />
      </ServiceBlock>
      {/* <Philosophy />
      <CoreRigor />
      <WorksArchive />
      <Performance />
      <Methodology />
      <Architecture /> */}
    </main>
  )
}
