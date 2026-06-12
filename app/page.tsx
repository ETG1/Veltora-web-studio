import CinematicIntro from '@/components/sections/CinematicIntro'
import CoreRigor from '@/components/sections/CoreRigor'
import Architecture from '@/components/sections/Architecture'
import Performance from '@/components/sections/Performance'
import Philosophy from '@/components/sections/Philosophy'
import WorksArchive from '@/components/sections/WorksArchive'
import Methodology from '@/components/sections/Methodology'
import ProjectTransmission from '@/components/sections/ProjectTransmission'
import Hero from '@/components/sections/Hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      {/* Cinematic Intro — contains Hero internally. On mobile renders Hero directly. */}
      {/* <CinematicIntro /> */}
      {/* Variant 5 — Master Assembly section order */}
      <Hero />
      <Philosophy />
      <CoreRigor />
      <WorksArchive />
      <Performance />
      <Methodology />
      <Architecture />
      <ProjectTransmission />
    </main>
  )
}
