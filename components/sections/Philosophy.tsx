'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Philosophy() {
  return (
    <section id="about" className="py-40 px-8 md:px-24 bg-dark border-t border-white/5 relative">
      {/* Atmospheric background — silhouette standing on cliff (Parallax) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-fixed"
        style={{
          backgroundImage: "url('/Silhouette_standing_on_cliff.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark overlay — 0.88 opacity for lighter image */}
      <div className="absolute inset-0 z-1 pointer-events-none" style={{ background: 'rgba(8,8,8,0.88)' }} />
      
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
          <div className="absolute -left-12 top-0 w-px h-full bg-linear-to-b from-gold-deep via-transparent to-transparent" />
          <span className="section-label block mb-8 uppercase">01 — The Philosophy</span>
          <h2 className="font-display text-6xl font-light leading-[0.9] text-white mb-10">
            One person. <br />
            <span className="italic gold-text">Full studio output.</span>
          </h2>
          <p className="text-white/50 text-xl font-light leading-relaxed mb-8 max-w-lg">
            Veltora exists at the intersection of cinematic design and elite engineering. We eliminate the noise between vision and execution.
          </p>
          <div className="flex gap-4">
            <div className="px-4 py-2 glass-card rounded-full text-[10px] font-mono tracking-widest text-white/60 uppercase">CERTIFIED ALX ENG</div>
            <div className="px-4 py-2 glass-card rounded-full text-[10px] font-mono tracking-widest text-white/60 uppercase">DESIGN-LED CODE</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="glass-card p-8 rounded-2xl border-white/5 group hover:border-gold-deep/20 transition-premium backdrop-blur-xs bg-[rgba(11,11,11,0.20)] relative overflow-hidden hover:-translate-y-1 hover:gold-glow">
            <div className="absolute inset-0 bg-linear-to-br from-gold-deep/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[10px] font-mono text-white/30 block mb-4 uppercase tracking-widest">Tech Stack</span>
              <p className="text-sm text-white font-light">Next.js, TypeScript, Supabase, Tailwind, Framer Motion.</p>
            </div>
          </div>
          <div className="glass-card p-8 rounded-2xl border-white/5 group hover:border-gold-deep/20 transition-premium backdrop-blur-xs bg-[rgba(11,11,11,0.20)] relative overflow-hidden hover:-translate-y-1 hover:gold-glow">
            <div className="absolute inset-0 bg-linear-to-br from-gold-deep/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[10px] font-mono text-white/30 block mb-4 uppercase tracking-widest">Markets</span>
              <p className="text-sm text-white font-light leading-relaxed">Building for Africa and the global digital frontier with precision-tuned interfaces.</p>
            </div>
          </div>
          <div className="col-span-2 glass-card p-8 rounded-2xl border-white/5 group hover:border-gold-deep/20 transition-premium backdrop-blur-xs bg-[rgba(11,11,11,0.20)] relative overflow-hidden hover:-translate-y-1 hover:gold-glow">
            <div className="absolute inset-0 bg-linear-to-br from-gold-deep/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[10px] font-mono text-white/30 block mb-4 uppercase tracking-widest">Certification</span>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold-deep/10 flex items-center justify-center border border-gold-deep/20 shrink-0">
                  <i className="fa-solid fa-award text-gold-deep"></i>
                </div>
                <p className="text-sm text-white font-light">ALX Certified Software Engineer. Detail-obsessed. Architecture-driven.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
