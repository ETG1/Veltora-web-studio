'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[900px] flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Gold Texture */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/6141905/pexels-photo-6141905.jpeg?auto=compress&cs=tinysrgb&w=1920&q=85" 
          alt="Atmospheric Gold"
          className="w-full h-full object-cover opacity-30 mix-blend-screen scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-dark via-transparent to-dark" />
        <div className="absolute inset-0 bg-linear-to-r from-dark via-transparent to-dark opacity-60" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mb-10"
        >
          <p className="section-label animate-pulse">Engineering Premium Digital Architecture</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.5rem,11vw,8rem)] leading-[0.85] font-light mb-14 flex flex-col items-center"
        >
          <span className="text-white drop-shadow-2xl">Precision-built</span>
          <span className="gold-text italic font-normal text-glow-gold">digital experiences</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-white/60 max-w-lg text-lg font-light leading-relaxed">
            Crafting high-performance digital ecosystems with cinematic aesthetics and architectural precision.
          </p>

          <div className="mt-8 flex items-center gap-12 border-t border-white/10 pt-10">
            {[
              { label: 'Global Clients', value: '8+' },
              { label: 'Delivery Rate', value: '100%' },
              { label: 'Load Performance', value: '<2s' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <span className="block font-display text-4xl text-gold group-hover:scale-110 transition-transform">{stat.value}</span>
                <span className="block text-[8px] font-mono tracking-widest uppercase text-white/40 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[8px] font-mono tracking-[0.3em] uppercase text-white/30">Scroll</span>
        <motion.div 
          animate={{ height: [40, 64, 40] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 bg-linear-to-b from-gold to-transparent" 
        />
      </div>
    </section>
  )
}
