'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CoreRigor() {
  return (
    <section className="py-40 px-8 md:px-24 bg-dark border-t border-white/5 relative">
      {/* Atmospheric background — tiger fur texture (Parallax) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-fixed"
        style={{
          backgroundImage: "url('/tiger_fur_close-up,_pure_black.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark overlay — 0.75 opacity, image is already very dark */}
      <div className="absolute inset-0 z-1 pointer-events-none" style={{ background: 'rgba(8,8,8,0.75)' }} />
      
      {/* Top Gradient Bleed */}
      <div className="absolute top-0 left-0 right-0 h-[180px] z-2 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #080808 0%, transparent 100%)' }} />
      {/* Bottom Gradient Bleed */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] z-2 pointer-events-none" style={{ background: 'linear-gradient(to top, #080808 0%, transparent 100%)' }} />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -left-12 top-0 w-px h-full bg-linear-to-b from-gold-deep via-transparent to-transparent hidden md:block" />
          <span className="section-label block mb-6 uppercase">02 — CORE RIGOR</span>
          <h2 className="font-display text-5xl md:text-6xl text-white font-light leading-tight mb-8">
            The intersection of <br />
            <span className="italic gold-text">art & arithmetic.</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-xl">
            Our approach transcends mere aesthetic. We write lean, performant code that honors the design intent while pushing the boundaries of what is possible on the modern web.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono text-[10px] tracking-widest text-white mb-2 uppercase opacity-80">Performance</h4>
              <p className="text-sm text-white/40">Sub-200ms interactions and flawless LCP scores.</p>
            </div>
            <div>
              <h4 className="font-mono text-[10px] tracking-widest text-white mb-2 uppercase opacity-80">Scalability</h4>
              <p className="text-sm text-white/40">Systems built to evolve with your project roadmap.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 relative"
        >
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-px h-64 bg-linear-to-b from-transparent via-gold-deep/30 to-transparent" />

          {/* Code Card */}
          <div className="glass-card rounded-2xl p-8 transform rotate-1 gold-glow relative overflow-hidden group transition-premium hover:rotate-0 backdrop-blur-xs bg-[rgba(11,11,11,0.20)]">
            <div className="absolute inset-0 bg-linear-to-br from-gold-deep/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 font-mono">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-deep/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <span className="text-[9px] text-white/30 tracking-widest uppercase">main.ts</span>
              </div>
              <pre className="text-[11px] text-white/60 leading-loose">
                <span className="text-gold-deep">import</span> {'{'} <span className="text-white">Craft</span> {'}'} <span className="text-gold-deep">from</span> <span className="text-white">'@veltora/core'</span>;{'\n'}
                {'\n'}
                <span className="text-gold-deep">export default</span> <span className="text-white">Craft</span>({'{'}{'\n'}
                {'  '}aesthetic: <span className="text-white">'Cinematic'</span>,{'\n'}
                {'  '}rigor: <span className="text-white">true</span>,{'\n'}
                {'  '}output: () ={'>'} <span className="text-white">'Excellence'</span>{'\n'}
                {'}'});
              </pre>
            </div>
          </div>

          {/* Fidelity Meter Card */}
          <div className="glass-card rounded-2xl p-10 transform -rotate-2 gold-glow relative overflow-hidden group transition-premium hover:rotate-0 backdrop-blur-xs bg-[rgba(11,11,11,0.20)]">
            <div className="absolute inset-0 bg-linear-to-br from-gold-deep/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex justify-between items-center">
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-gold-deep block mb-2 uppercase">FIDELITY INDEX</span>
                <span className="text-5xl font-display italic font-light text-white">99.8<span className="text-xl non-italic ml-1 opacity-40">%</span></span>
              </div>
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle 
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.05)" 
                    strokeWidth="2" 
                  />
                  <motion.circle 
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="var(--color-gold-deep)" 
                    strokeWidth="2" 
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    whileInView={{ strokeDashoffset: 283 * (1 - 0.998) }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="font-mono text-[10px] text-gold-deep font-bold tracking-widest">PRO</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
