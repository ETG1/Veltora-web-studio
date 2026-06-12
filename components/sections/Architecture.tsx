'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const packages = [
  {
    tier: 'Forge',
    number: '01',
    subtitle: 'Foundation',
    tagline: 'Rapid deployment architecture for emerging brands requiring immediate prestige.',
    setupPrice: 'R3,500',
    monthlyPrice: 'R600',
    features: ['4-Page Architecture', 'Mobile Responsive', 'Standard SEO'],
    cta: 'Configure Forge',
    highlighted: false,
  },
  {
    tier: 'Velocity',
    number: '02',
    subtitle: 'Momentum',
    tagline: 'High-velocity infrastructure designed for rapid scaling and complex conversion funnels.',
    setupPrice: 'R6,500',
    monthlyPrice: 'R900',
    features: ['Custom Design System', 'CMS Infrastructure', 'Advanced SEO Strategy'],
    cta: 'Forge Velocity',
    highlighted: true,
  },
  {
    tier: 'Apex',
    number: '03',
    subtitle: 'Supremacy',
    tagline: 'The pinnacle of digital craftsmanship. Bespoke ecosystems with deep logic integrations.',
    setupPrice: 'R12,000',
    monthlyPrice: 'R1,200',
    features: ['Bespoke Web Apps', 'Database Logic', 'Dedicated Support'],
    cta: 'Request Apex',
    highlighted: false,
  },
]

export default function Architecture() {
  return (
    <section id="services" className="bg-dark py-48 px-8 md:px-24 border-t border-white/5 relative">
      {/* Atmospheric background — amber circuit board (Parallax) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-fixed"
        style={{
          backgroundImage: "url('/dark_background,glowing_amber_circuit.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark overlay — 0.88 opacity for lighter/glowing image */}
      <div className="absolute inset-0 z-1 pointer-events-none" style={{ background: 'rgba(8,8,8,0.88)' }} />
      
      {/* Top Gradient Bleed */}
      <div className="absolute top-0 left-0 right-0 h-[180px] z-2 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #080808 0%, transparent 100%)' }} />
      {/* Bottom Gradient Bleed */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] z-2 pointer-events-none" style={{ background: 'linear-gradient(to top, #080808 0%, transparent 100%)' }} />

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-deep/5 blur-[120px] rounded-full pointer-events-none opacity-40 z-2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8 relative"
        >
          <div className="absolute -left-12 top-0 w-px h-full bg-linear-to-b from-gold-deep via-transparent to-transparent hidden md:block" />
          <div className="max-w-2xl relative">
            <p className="section-label mb-6 uppercase">06 — Architecture</p>
            <h2 className="font-display text-5xl md:text-7xl text-white font-light leading-tight">
              Proprietary <br />
              <span className="italic gold-text">Foundations.</span>
            </h2>
          </div>
          <div className="md:max-w-xs">
            <p className="text-white/50 text-sm leading-relaxed font-light">
              Every exceptional digital experience begins as a simple idea. What follows is a disciplined pursuit of excellence where precision emerges from high intention, sincere effort, and intelligent execution. Through strategy, design, engineering, and deployment, ideas are transformed into digital experiences built to endure.

            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-12 glass-card rounded-2xl flex flex-col justify-between group transition-premium relative overflow-hidden gold-glow backdrop-blur-xs bg-[rgba(11,11,11,0.20)] ${
                pkg.highlighted
                  ? 'border-gold-deep/40 md:-translate-y-8 hover:-translate-y-2 md:hover:-translate-y-3 shadow-[0_40px_100px_rgba(196,120,16,0.15)] z-10'
                  : 'hairline-gold-border hover:-translate-y-2'
              }`}
            >
              {/* Gold wash on hover */}
              <div className={`absolute inset-0 gold-wash transition-opacity duration-300 group-hover:opacity-100 ${pkg.highlighted ? 'opacity-20' : 'opacity-0'}`} />

              {/* Background "V" watermark for highlighted */}
              {pkg.highlighted && (
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                  <span className="font-display text-9xl leading-none italic font-bold text-gold-deep">V</span>
                </div>
              )}

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <span className={`font-mono text-[9px] uppercase tracking-widest text-gold-deep ${pkg.highlighted ? 'font-bold' : ''}`}>
                    {pkg.number} / {pkg.subtitle}
                  </span>
                  {pkg.highlighted && (
                    <span className="px-3 py-1 bg-gold-deep/10 text-gold-deep text-[8px] font-bold uppercase tracking-widest rounded-full border border-gold-deep/20">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="font-display text-4xl text-white mb-6 font-light">{pkg.tier}</h3>
                <p className={`text-sm leading-relaxed font-light ${pkg.highlighted ? 'text-white/70' : 'text-white/50'}`}>
                  {pkg.tagline}
                </p>

                <div className="border-t border-white/6 my-4" />
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/35 mb-[6px]">
                    Starting from
                  </span>
                  <span className="font-display font-light text-[clamp(2rem,3.5vw,2.8rem)] text-gold leading-none mb-1">
                    {pkg.setupPrice}
                  </span>
                  <span className="font-body text-[12px] font-light text-white/35">
                    + {pkg.monthlyPrice}/mo management
                  </span>
                </div>
                <div className="border-t border-white/6 my-4" />

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-xs font-light ${pkg.highlighted ? 'text-white font-medium' : 'text-white/60'}`}>
                      <span className={`rounded-full bg-gold-deep ${pkg.highlighted ? 'w-1.5 h-1.5 shadow-[0_0_8px_#C47810]' : 'w-1 h-1'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all relative z-10 ${
                  pkg.highlighted
                    ? 'bg-gold-deep text-dark border-transparent hover:bg-gold shadow-lg shadow-gold-deep/20'
                    : 'border border-white/10 text-white/60 hover:bg-gold-deep hover:text-dark hover:border-transparent'
                }`}
              >
                {pkg.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
