'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const steps = [
  { num: '01', label: 'Discovery', title: 'The Blueprint',   desc: 'Defining the core objective and technical landscape of your vision.' },
  { num: '02', label: 'Design',    title: 'Aesthetic Logic', desc: 'Crafting high-fidelity interfaces that speak with authority and grace.' },
  { num: '03', label: 'Build',     title: 'Pure Syntax',     desc: 'Translating design into a performant, living digital experience.' },
  { num: '04', label: 'Launch',    title: 'The Genesis',     desc: 'Deployment onto the global edge, optimized for instant delivery.' },
]

const SWEEP_DURATION = 0.9 // seconds — total gold line sweep time

export default function Methodology() {
  const [hovered, setHovered] = useState<number | null>(null)

  const circleDelay = (i: number): string => {
    if (hovered === null || hovered === 0 || i > hovered) return '0s'
    const ratio = i / hovered
    return `${(ratio * SWEEP_DURATION).toFixed(3)}s`
  }

  return (
    <section id="process" className="py-40 px-8 md:px-24 bg-dark border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute -left-12 top-0 w-px h-full bg-linear-to-b from-gold-deep via-transparent to-transparent hidden md:block" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="relative">
            <span className="section-label block mb-6 uppercase">05 — Methodology</span>
            <h2 className="font-display text-6xl md:text-7xl font-light leading-[0.9] text-white">
              A lineage of <br />
              <span className="italic gold-text">order.</span>
            </h2>
          </div>
          <div className="h-px flex-1 mx-12 mb-4 bg-linear-to-r from-white/10 to-transparent hidden md:block" />
          <p className="max-w-xs text-sm font-light text-white/40 leading-relaxed mb-2">
            Every exceptional digital experience begins as a simple idea. What follows is a disciplined pursuit of excellence where precision emerges from high intention, sincere effort, and intelligent execution. Through strategy, design, engineering, and deployment, ideas are transformed into digital experiences built to endure.
          </p>
        </motion.div>

        <div className="relative">
          {/* Base track line - exactly from center of 1st to center of 4th circle */}
          <div 
            className="absolute top-[18px] left-[18px] h-px bg-white/10 hidden md:block" 
            style={{ width: 'calc(75% + 36px)' }}
          />

          {/* Gold sweep overlay */}
          <div
            className="absolute top-[18px] left-[18px] h-px hidden md:block"
            style={{
              width: hovered !== null && hovered > 0 ? `calc(${hovered * 25}% + ${hovered * 12}px)` : '0px',
              transition: hovered !== null && hovered > 0
                ? `width ${SWEEP_DURATION}s cubic-bezier(0.16, 1, 0.3, 1)`
                : 'width 0s',
              background: 'linear-gradient(to right, rgba(196,120,16,0.9), rgba(196,120,16,0.45))',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => {
              const isActive = hovered !== null && i <= hovered
              const delay = circleDelay(i)

              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pt-12 cursor-default"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Numbered circle with solid background to hide the line passing beneath */}
                  <div
                    className="absolute top-0 left-0 w-9 h-9 rounded-full border flex items-center justify-center bg-dark"
                    style={{
                      borderColor: isActive ? 'rgba(196,120,16,0.85)' : 'rgba(255,255,255,0.15)',
                      transition: `border-color 0.35s ease ${delay}`,
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        backgroundColor: isActive ? 'rgba(196,120,16,0.12)' : 'transparent',
                        transition: `background-color 0.35s ease ${delay}`,
                      }}
                    />
                    <span
                      className="relative z-10 font-mono text-[10px] tracking-widest leading-none"
                      style={{
                        color: isActive ? 'rgba(196,120,16,1)' : 'rgba(255,255,255,0.3)',
                        transition: `color 0.35s ease ${delay}`,
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-white/30 block mb-4 uppercase tracking-widest">{step.label}</span>
                  <h4 className="font-display text-2xl font-light text-white mb-4">{step.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
