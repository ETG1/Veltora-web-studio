'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProjectTransmission() {
  return (
    <section id="contact" className="bg-dark py-48 px-8 md:px-24 border-t border-white/5 relative">
      {/* Atmospheric background — aerial city lights (Parallax) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-fixed"
        style={{
          backgroundImage: "url('/aerial_city_lights_at_night.jpeg')",
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

      {/* Ambient lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-gold-deep/10 via-transparent to-transparent opacity-30 z-2" />
      {/* Central ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-deep/5 blur-[160px] rounded-full pointer-events-none opacity-40 z-2" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Left: Heading + contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -left-12 top-0 w-px h-full bg-linear-to-b from-gold-deep via-transparent to-transparent hidden md:block" />
          <span className="section-label block mb-6 uppercase">
            07 — Project Transmission
          </span>
          <h2 className="font-display text-[clamp(4rem,9vw,6.5rem)] font-light text-white mb-10 leading-[0.9]">
            Let&apos;s Build <br />
            <span className="italic gold-text drop-shadow-2xl">Supremacy.</span>
          </h2>
          <p className="text-white/40 text-xl font-light leading-relaxed mb-16 max-w-md">
            We&apos;re currently accepting high-fidelity projects. Reach out to start a discovery session and define your digital architecture.
          </p>
          <div className="space-y-6 border-l border-gold-deep/20 pl-8">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/20 mb-2">Direct Channel</p>
              <a
                href="mailto:hello@veltora.studio"
                className="font-display text-3xl text-white hover:text-gold-deep transition-colors duration-500"
              >
                hello@veltora.studio
              </a>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/20 mb-2">Availability</p>
              <p className="text-white/60 text-sm font-light">Currently accepting new projects</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card hairline-gold-border rounded-2xl p-10 md:p-14 relative overflow-hidden group shadow-[0_0_30px_rgba(232,160,32,0.1)] bg-[rgba(11,11,11,0.20)] backdrop-blur-xs"
        >
          <div className="absolute inset-0 bg-linear-to-br from-white/2 to-transparent pointer-events-none" />
          <form className="relative z-10 space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
              <div className="space-y-3 ">
                <label className="font-mono text-[9px] uppercase tracking-widest text-white/30 block">Identity</label>
                <input
                  type="text"
                  className="w-full bg-white/3 border-b border-white/10 py-3 px-3 text-white font-light focus:outline-none focus:border-gold-deep focus:bg-white/5 transition-all rounded-xl "
                  placeholder="Full Name"
                />
              </div>
              <div className="space-y-3">
                <label className="font-mono text-[9px] uppercase tracking-widest text-white/30 block">Access Port</label>
                <input
                  type="email"
                  className="w-full bg-white/3 border-b border-white/10 py-3 text-white font-light focus:outline-none focus:border-gold-deep focus:bg-white/5 transition-all px-3 rounded-xl"
                  placeholder="Email Address"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="font-mono text-[9px] uppercase tracking-widest text-white/30 block">Architecture Tier</label>
              <div className="relative">
                <select className="w-full bg-white/3 border-b border-white/10 py-4 text-white/50 font-light focus:outline-none focus:border-gold-deep focus:bg-white/5 transition-all appearance-none cursor-pointer px-4 rounded-xl">
                  <option className="bg-dark">Forge Architecture</option>
                  <option className="bg-dark">Velocity Infrastructure</option>
                  <option className="bg-dark">Apex Ecosystem</option>
                  <option className="bg-dark">Custom Specification</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 px-4">
                  <i className="fa-solid fa-chevron-down text-[10px]"></i>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="font-mono text-[9px] uppercase tracking-widest text-white/30 block">Vision Brief</label>
              <textarea
                rows={4}
                className="w-full bg-white/3 border-b border-white/10 py-3 text-white font-light focus:outline-none focus:border-gold-deep focus:bg-white/5 transition-all resize-none px-3 rounded-xl"
                placeholder="Describe the supremacy you wish to build..."
              />
            </div>

            <div className="flex items-start gap-4">
              <label className="relative flex cursor-pointer items-center p-1" htmlFor="terms">
                <input
                  type="checkbox"
                  className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-[rgba(232,160,32,0.3)] transition-all checked:border-gold checked:bg-gold"
                  id="terms"
                  required
                />
                <span className="absolute text-dark opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </label>
              <label className="font-mono text-[0.75rem] tracking-widest text-[rgba(255,255,255,0.45)] cursor-pointer mt-1" htmlFor="terms">
                I have read and agree to the <Link href="/terms" className="text-gold hover:text-white transition-colors">Terms of Use</Link> and <Link href="/privacy" className="text-gold hover:text-white transition-colors">Privacy Policy</Link>.
              </label>
            </div>

            <button className="w-full py-6 bg-gold-deep text-dark font-bold uppercase tracking-[0.4em] rounded-full text-[10px] hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-500 shadow-2xl relative overflow-hidden group/btn">
              <span className="relative z-10">Transmit Inquiry</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
