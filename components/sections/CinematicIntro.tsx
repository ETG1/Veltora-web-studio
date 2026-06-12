'use client'

import { useRef, useEffect, useState } from 'react'
import { useScroll, useTransform, motion, useMotionValueEvent, cubicBezier } from 'framer-motion'
import Hero from '@/components/sections/Hero'

export default function CinematicIntro() {
  // ── Mobile detection wrapper ────────────────────────────────────
  // useState + useEffect avoids SSR/client hydration mismatch.
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  if (isMobile === null) return null
  if (isMobile) return <Hero />

  return <CinematicSequence />
}

function CinematicSequence() {
  // ── Refs ────────────────────────────────────────────────────────
  const containerRef = useRef<HTMLDivElement>(null)
  const isActiveRef  = useRef(true)

  // ── Scroll tracking ─────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // ── Transforms ──────────────────────────────────────────────────

  // Phase 1→2: hold then zoom
  const cinematicEase = cubicBezier(0.16, 1, 0.3, 1)
  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.65],
    [1, 1, 14],
    { ease: cinematicEase }
  )

  // Phase 3: image fades out
  const imageOpacity = useTransform(
    scrollYProgress,
    [0.65, 0.80],
    [1, 0]
  )

  // Phase 3: Hero fades in
  const heroOpacity = useTransform(
    scrollYProgress,
    [0.60, 0.80],
    [0, 1]
  )

  // ── Skip logic ──────────────────────────────────────────────────
  // Escape or click during Phase 1/2 jumps past the 350vh container.
  // Listeners are disabled once Phase 3 begins (progress ≥ 0.65).
  useEffect(() => {
    const skip = () => {
      if (!isActiveRef.current) return
      const el = containerRef.current
      if (!el) return
      // el.offsetTop + el.offsetHeight lands *past* the entire container (skipping Hero entirely).
      // Subtracting window.innerHeight lands exactly at scrollYProgress = 1, where Hero is fully visible.
      const skipTarget = el.offsetTop + el.offsetHeight - window.innerHeight
      window.scrollTo({ top: skipTarget, behavior: 'instant' })
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') skip() }

    window.addEventListener('click', skip)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('click', skip)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  // Disable skip once Phase 3 starts
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    isActiveRef.current = latest < 0.65
  })

  // ── Desktop: full cinematic sequence ───────────────────────────
  return (
    <div ref={containerRef} style={{ height: '350vh', position: 'relative' }}>

      {/* Sticky panel — locks to viewport during scroll sequence */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          zIndex: 40,
          background: '#080808',
        }}
      >
        {/* ── Cinematic image — zooms toward laptop screen ── */}
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            scale,
            transformOrigin: '50.5% 59%',
            opacity: imageOpacity,
            willChange: 'transform',
          }}
        >
          <img
            src="/hero-cinematic.jpeg"
            alt=""
            aria-hidden="true"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </motion.div>

        {/* ── Hero fades in through the zoomed laptop screen ── */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: heroOpacity,
            zIndex: 10,
          }}
        >
          <Hero />
        </motion.div>
      </div>

    </div>
  )
}
