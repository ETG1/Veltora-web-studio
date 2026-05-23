'use client'
import { motion } from 'framer-motion'
import { packages, techStack } from '@/lib/constants'

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Label + Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label mb-6">02 — Services</p>
          <h2 className="font-display font-light text-5xl md:text-6xl leading-tight mb-4">
            What we build
          </h2>
          <p className="text-text-secondary max-w-md mb-16">
            Every package includes ongoing monthly management — we don't just build and disappear.
          </p>
        </motion.div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.tier}
              className={`card-shimmer relative rounded-lg p-10 flex flex-col transition-all duration-300 ${
                pkg.highlighted
                  ? 'border border-gold bg-grad-card'
                  : 'border border-border bg-surface hover:border-border/80'
              }`}
              style={pkg.highlighted ? {
                boxShadow: '0 0 60px rgba(232, 160, 32, 0.08)'
              } : {}}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-10 px-3 py-1 bg-gold text-text-inverse text-xs font-medium rounded-full section-label">
                  Most popular
                </span>
              )}

              <p className="section-label mb-4">{pkg.tier}</p>
              <p className="text-text-secondary text-sm mb-8">{pkg.tagline}</p>

              <div className="mb-8">
                <p className="font-display text-4xl font-light gold-text">{pkg.setupFee}</p>
                <p className="text-text-muted text-sm mt-1">setup fee + {pkg.monthly}</p>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-3 text-sm text-center rounded transition-all duration-200 ${
                  pkg.highlighted
                    ? 'bg-gold text-text-inverse hover:bg-gold-deep'
                    : 'border border-border text-text-secondary hover:border-gold/50 hover:text-text-primary'
                }`}
              >
                {pkg.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Tech stack marquee */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 border-t border-border/40 pt-12"
        >
          <p className="section-label text-center mb-8">Built with</p>
          <div className="flex gap-8 flex-wrap justify-center">
            {techStack.map((tech) => (
              <span key={tech} className="text-text-muted text-sm font-mono hover:text-gold transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
