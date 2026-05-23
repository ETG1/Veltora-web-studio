'use client'
import { motion } from 'framer-motion'
import { process } from '@/lib/constants'

export default function Process() {
  return (
    <section id="process" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        <p className="section-label mb-6 text-center md:text-left">05 — How it works</p>
        <h2 className="font-display font-light text-4xl md:text-5xl leading-tight mb-20 text-center md:text-left">
          From idea to live in weeks
        </h2>

        <div className="relative">
          
          {/* Animated Gold Line - Desktop */}
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px bg-border">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-gold origin-left"
            />
          </div>

          {/* Animated Gold Line - Mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-[28px] w-px bg-border">
             <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-gold origin-top"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-6 relative z-10">
            {process.map((item, i) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex md:flex-col items-start gap-6 md:gap-8 flex-1"
              >
                {/* Step Number Badge */}
                <div className="shrink-0 w-14 h-14 rounded-full bg-surface border border-border flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="font-mono text-gold text-lg">{item.step}</span>
                </div>

                {/* Step Content */}
                <div>
                  <h3 className="font-display text-2xl text-text-primary mb-3">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed pr-4 md:pr-0">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
