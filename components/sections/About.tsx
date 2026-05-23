'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      
      {/* Background large faint '01' */}
      <div 
        className="absolute top-10 left-10 font-display select-none pointer-events-none"
        style={{ fontSize: '400px', lineHeight: 0.8, opacity: 0.02, color: '#E8A020' }}
        aria-hidden="true"
      >
        04
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <p className="section-label mb-16">04 — About</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2 className="font-display font-light text-4xl md:text-5xl leading-tight mb-8">
              One person.<br />
              <span className="gold-text italic">Full studio output.</span>
            </h2>

            <div className="space-y-6 text-text-secondary font-light text-lg leading-relaxed relative pl-6 border-l border-gold/30">
              <p>
                I'm a full-stack developer and designer based in Pretoria, South Africa — 
                originally from Kenya. Certified by ALX in software engineering, self-taught 
                in design, and deeply in love with Japanese precision and cinematic aesthetics.
              </p>
              <p>
                I built Veltora because I saw too many small businesses with great ideas but 
                weak digital presence — and too many web agencies charging enterprise prices 
                for template-level work.
              </p>
              <p>
                I do both sides: write every line of code and design every pixel. That means 
                no miscommunication between developer and designer. No markup for the middleman. 
                Just one person who cares deeply about the outcome.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="bg-surface border border-border p-8 rounded-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-grad-card opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <h3 className="font-display text-2xl text-text-primary mb-6 pb-4 border-b border-border/50">
                  Differentiators
                </h3>
                
                <ul className="space-y-4">
                  {[
                    { label: 'Full-stack', desc: 'React, Next.js, TypeScript, Supabase' },
                    { label: 'Design-capable', desc: 'Figma, graphic design, brand identity' },
                    { label: 'Certified', desc: 'ALX Software Engineering' },
                    { label: 'Pan-African', desc: 'SA + Kenya market understanding' },
                    { label: 'Professional', desc: 'English-native, deadline-driven, detail-obsessed' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <div>
                        <span className="text-text-primary font-medium block mb-0.5">{item.label}</span>
                        <span className="text-text-secondary">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Photo Placeholder */}
            <div className="mt-8 h-[200px] w-full rounded-lg bg-border flex items-center justify-center relative overflow-hidden border border-border">
               <div className="absolute inset-0 bg-base opacity-40 mix-blend-overlay" />
               <span className="text-text-muted font-mono text-xs z-10">[Photo Placeholder]</span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
