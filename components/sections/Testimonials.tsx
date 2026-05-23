'use client'
import { motion } from 'framer-motion'
import { testimonials } from '@/lib/constants'

export default function Testimonials() {
  if (!testimonials || testimonials.length === 0) return null

  return (
    <section id="testimonials" className="py-32 px-6 bg-surface border-y border-border/50">
      <div className="max-w-[1200px] mx-auto">
        
        <p className="section-label mb-6 text-center">06 — What clients say</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-base p-10 rounded-lg border border-border relative overflow-hidden group"
            >
              {/* Subtle hover background glow */}
              <div className="absolute inset-0 bg-linear-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Gold Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(test.stars)].map((_, starIndex) => (
                    <svg key={starIndex} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                <p className="font-display text-2xl font-light italic leading-snug text-text-primary mb-10">
                  "{test.quote}"
                </p>

                <div>
                  <p className="font-medium text-sm text-text-primary mb-1">{test.name}</p>
                  <p className="text-xs text-text-muted">{test.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
