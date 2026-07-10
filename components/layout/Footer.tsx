'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SideRays from '../ui/SideRays'

export default function Footer() {
  return (
    <div className="w-full px-4 md:px-8 pb-8 pt-20 bg-black">
      <footer className="glass-card rounded-[2.5rem] relative overflow-hidden pt-32 pb-12 px-8 md:px-24 border border-white/5">
        
        {/* Animated SideRays Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
          <SideRays
            speed={2}
            rayColor1="#EAB308"
            rayColor2="#C47810"
            intensity={2}
            spread={1.8}
            origin="top-right"
            tilt={0}
            saturation={1.5}
            blend={0.75}
            falloff={1.6}
            opacity={1}
          />
        </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 select-none pointer-events-none opacity-[0.05] z-0">
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
                <li><Link href="/about#approach" className="hover:text-gold-deep transition-colors">The Approach</Link></li>
                <li><Link href="/about#process" className="hover:text-gold-deep transition-colors">Process</Link></li>
                <li><Link href="/#portfolio" className="hover:text-gold-deep transition-colors">Case Studies</Link></li>
                <li><Link href="/about" className="hover:text-gold-deep transition-colors">Brand &amp; Assets</Link></li>
              </ul>
            </div>
            <div className="space-y-8">
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/20">Services</p>
              <ul className="space-y-4 font-display text-lg text-white/60">
                <li><Link href="/services/web-app-development" className="hover:text-gold-deep transition-colors">Web App Dev</Link></li>
                <li><Link href="/services/mobile-app-development" className="hover:text-gold-deep transition-colors">Mobile App Dev</Link></li>
                <li><Link href="/services/graphic-design" className="hover:text-gold-deep transition-colors">Graphic Design</Link></li>
                <li><Link href="/contact" className="hover:text-gold-deep transition-colors">Strategy &amp; Consultation</Link></li>
              </ul>
            </div>
            <div className="space-y-8 col-span-2 md:col-span-1">
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/20">Connect</p>
              <ul className="space-y-4 font-display text-lg text-white/60">
                <li><Link href="/contact" className="hover:text-gold-deep transition-colors italic">Inquiry System</Link></li>
                <li className="text-white/30 font-light text-sm">Pretoria, South Africa</li>
                <li><a href="tel:+27072453100" className="text-white/30 font-light text-sm hover:text-gold-deep transition-colors">+27 (0) 72 453 1990</a></li>
                <li><a href="mailto:hello@veltora.studio" className="text-white/30 font-light text-sm hover:text-gold-deep transition-colors">hello@veltora.studio</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 sm:pt- border-t border-white/5 gap-8">
          <div className="flex items-center gap-6">
            <Link href="/terms" className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors duration-200">
              Terms of Use
            </Link>
            <Link href="/privacy" className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">
            © {new Date().getFullYear()} Veltora Web Studio — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}
