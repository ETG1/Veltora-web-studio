'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  })
}

export default function Hero() {
  return (
    <section className="relative h-svh flex flex-col justify-center overflow-hidden">

      {/* Radial gold glow — background atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 80%, rgba(232,160,32,0.06) 0%, transparent 70%)'
        }}
      />

      {/* Giant kanji Easter egg */}
      <div
        className="absolute bottom-0 right-[-80px] font-display select-none pointer-events-none"
        style={{ fontSize: '800px', lineHeight: 1, opacity: 0.018, color: '#E8A020' }}
        aria-hidden="true"
      >
        虎
      </div>

      {/* Thin gold accent line */}
      <div className="absolute left-0 right-[40%] bottom-[38%] h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">

        {/* Section label */}
        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="section-label mb-10"
        >
          01 — Veltora Web Studio
        </motion.p>

        {/* Hero heading */}
        <div className="overflow-hidden">
          <motion.h1
            custom={0.35}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display font-light leading-none tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
          >
            Precision-built
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display font-light italic leading-none tracking-tight gold-text"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
          >
            digital experiences.
          </motion.h1>
        </div>

        {/* Descriptor + CTAs */}
        <motion.div
          custom={0.65}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8"
        >
          <p className="text-text-secondary font-light max-w-xs leading-relaxed">
            We build fast, modern websites that turn<br />
            your visitors into customers.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="px-6 py-3 bg-gold text-text-inverse text-sm font-medium rounded hover:bg-gold-deep transition-all duration-200"
            >
              Start a project
            </Link>
            <Link
              href="#work"
              className="px-6 py-3 border border-border text-text-secondary text-sm font-light rounded hover:border-gold/50 hover:text-text-primary transition-all duration-200"
            >
              View our work
            </Link>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={0.8}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-20 flex gap-12 border-t border-border/50 pt-8"
        >
          {[
            { value: '8+',    label: 'Projects delivered' },
            { value: '100%',  label: 'Client satisfaction' },
            { value: '<2s',   label: 'Average load time' },
            { value: '2',     label: 'Countries served' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-light gold-text">{stat.value}</p>
              <p className="text-text-muted text-xs mt-1 section-label" style={{fontSize:'0.65rem'}}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="section-label" style={{fontSize:'0.6rem'}}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-8 bg-linear-to-b from-gold/80 to-transparent"
        />
      </motion.div>

    </section>
  )
}
