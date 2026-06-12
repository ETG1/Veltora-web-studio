'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const auditLogs = [
  { timestamp: '14:22:15', message: 'Analyzing FID metrics...', status: '[OPTIMAL]' },
  { timestamp: '14:22:18', message: 'Indexing Sitemap architecture...', status: '[COMPLETE]' },
  { timestamp: '14:22:21', message: 'Optimizing LCP delivery sequences...' },
]

export default function Performance() {
  return (
    <section className="bg-dark py-48 px-8 md:px-24 border-t border-white/5 relative">
      {/* Atmospheric background — tiger eye (Parallax) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-fixed"
        style={{
          backgroundImage: "url('/extreme_close-up_tiger_eye__pure.jpeg')",
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

      {/* Ambient glow left — sits above image */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold-deep/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 z-2" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
        {/* Left: Copy + metrics bars */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -left-12 top-0 w-px h-full bg-linear-to-b from-gold-deep via-transparent to-transparent" />
          <span className="section-label block mb-6 uppercase">04 — PROPRIETARY PERFORMANCE</span>
          <h2 className="font-display text-5xl md:text-7xl text-white font-light leading-tight mb-10">
            Performance <br />
            <span className="italic gold-text">by default.</span>
          </h2>
          <p className="text-white/50 text-xl font-light leading-relaxed mb-12 max-w-xl">
            Engineering supremacy is non-negotiable. Every build undergoes rigorous automated audits to ensure instantaneous response times and flawless technical SEO indexing.
          </p>

          {/* Metric bars */}
          <div className="grid grid-cols-2 gap-10">
            {[
              { label: 'Lighthouse Mastery', value: '100/100', pct: 100 },
              { label: 'SEO Status', value: 'Indexed', pct: 100 },
            ].map((m, i) => (
              <div key={m.label} className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">{m.label}</span>
                  <span className="text-3xl font-display text-white">{m.value}</span>
                </div>
                <div className="h-px w-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, delay: i * 0.1 + 0.8, ease: 'easeOut' }}
                    className="h-full bg-gold-deep shadow-[0_0_15px_rgba(196,120,16,0.4)]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Status pills */}
          <div className="mt-16 flex items-center gap-6">
            <div className="px-5 py-2 glass-card hairline-gold-border rounded-full text-[9px] font-mono tracking-widest text-white/40 uppercase">
              REAL-TIME AUDIT ACTIVE
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-mono tracking-widest text-white/20 uppercase">Core Vitals: Passing</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Terminal window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="glass-card rounded-2xl p-2 gold-glow relative overflow-hidden group">
            <div className="absolute inset-0 gold-wash opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
            <div className="bg-dark/80 rounded-xl overflow-hidden border border-white/5 relative z-10">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/2">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold-deep/30" />
                  <div className="w-2 h-2 rounded-full bg-white/5" />
                  <div className="w-2 h-2 rounded-full bg-white/5" />
                </div>
                <div className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em]">veltora_engine_v5.0</div>
              </div>

              <div className="p-8 md:p-10 space-y-10 backdrop-blur-xs bg-[rgba(11,11,11,0.20)]">
                {/* Vitals grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'LCP', value: '0.8', unit: 's' },
                    { label: 'CLS', value: '0.001', unit: '' },
                    { label: 'FID', value: '12', unit: 'ms' },
                  ].map((metric) => (
                    <div key={metric.label} className="glass-card p-5 rounded-xl border-white/5 text-center transition-premium hover:border-gold-deep/20">
                      <p className="text-[8px] font-mono text-white/20 uppercase mb-2">{metric.label}</p>
                      <p className="text-2xl font-display text-white italic">
                        {metric.value}
                        {metric.unit && <span className="text-xs non-italic opacity-40 ml-0.5">{metric.unit}</span>}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Audit log */}
                <div className="space-y-4 pt-6 font-mono text-[10px] text-white/40 border-t border-white/5">
                  {auditLogs.map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                      className="flex gap-4"
                    >
                      <span className="text-gold-deep">{log.timestamp}</span>
                      <span>
                        {log.message}
                        {log.status && <span className="text-gold-deep ml-1">{log.status}</span>}
                      </span>
                    </motion.div>
                  ))}
                  <div className="flex gap-4 pt-2">
                    <span className="text-white/80 uppercase tracking-widest">Veltora Engine: <span className='text-green-500'>All systems nominal.</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
