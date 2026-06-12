'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 pt-40 pb-20 px-8 md:px-24 overflow-hidden relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 select-none pointer-events-none opacity-[0.05]">
        <span className="font-display text-[25vw] leading-none tracking-tighter uppercase font-bold text-white">Veltora</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-40">
          <div className="lg:col-span-5 space-y-12">
            <div className="flex items-center gap-2">
              <span className="font-display text-4xl tracking-[0.2em] font-light text-white uppercase">
                <span className="text-gold-deep">V</span>eltora
              </span>
            </div>
            <p className="text-white/40 text-xl font-light leading-relaxed max-w-sm">
              Crafting precision-built digital experiences for the next generation of industry leaders.
            </p>
            <div className="flex gap-8">
              {[
                { icon: 'fa-instagram', href: '#' },
                { icon: 'fa-linkedin-in', href: '#' },
                { icon: 'fa-x-twitter', href: '#' },
              ].map((social, i) => (
                <a key={i} href={social.href} className="text-white/30 hover:text-gold-deep transition-colors text-2xl">
                  <i className={`fa-brands ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="space-y-8">
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/20">Studio</p>
              <ul className="space-y-4 font-display text-lg text-white/60">
                <li><a href="#" className="hover:text-gold-deep transition-colors">The Lab</a></li>
                <li><a href="#" className="hover:text-gold-deep transition-colors">Manifesto</a></li>
                <li><a href="#" className="hover:text-gold-deep transition-colors">Work</a></li>
                <li><a href="#" className="hover:text-gold-deep transition-colors">Archive</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/20">Services</p>
              <ul className="space-y-4 font-display text-lg text-white/60">
                <li><a href="#" className="hover:text-gold-deep transition-colors">Engineering</a></li>
                <li><a href="#" className="hover:text-gold-deep transition-colors">UI Design</a></li>
                <li><a href="#" className="hover:text-gold-deep transition-colors">Branding</a></li>
                <li><a href="#" className="hover:text-gold-deep transition-colors">Strategy</a></li>
              </ul>
            </div>
            <div className="space-y-8 col-span-2 md:col-span-1">
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/20">Connect</p>
              <ul className="space-y-4 font-display text-lg text-white/60">
                <li><a href="#" className="hover:text-gold-deep transition-colors italic">Inquiry System</a></li>
                <li className="text-white/30 font-light text-sm">Pretoria, South Africa</li>
                <li className="text-white/30 font-light text-sm">+27 (0) 72 455 1290</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 sm:pt- border-t border-white/5 gap-8">
          <p className="font-mono text-[8px] uppercase tracking-widest text-white/20 italic">
            Precision built in Pretoria
          </p>
          <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">
            © {new Date().getFullYear()} Veltora Web Studio — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
