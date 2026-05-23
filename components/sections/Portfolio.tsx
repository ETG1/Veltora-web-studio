'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/lib/constants'

const categories = ['All', 'Education', 'Hospitality', 'Business', 'Sports', 'Community', 'Automotive', 'Agency']

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label mb-6">03 — Selected work</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="font-display font-light text-5xl md:text-6xl leading-tight">
              Projects that speak
            </h2>
            {/* Category filter pills */}
            <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  active === cat
                    ? 'bg-gold text-text-inverse'
                    : 'border border-border text-text-muted hover:border-gold/40 hover:text-text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

        {/* Project grid — asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`card-shimmer group relative rounded-lg overflow-hidden bg-surface border border-border 
                cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-gold/40
                ${project.size === 'large' && i % 3 === 0 ? 'md:col-span-7' : 'md:col-span-5'}
                ${project.size === 'large' && i % 3 !== 0 ? 'md:col-span-5' : ''}
                ${project.size === 'medium' ? 'md:col-span-4' : ''}
              `}
              style={{ minHeight: project.size === 'large' ? '400px' : '320px' }}
            >
              {/* Project image placeholder — replace with actual screenshot */}
              <div className="absolute inset-0 bg-linear-to-br from-surface to-base" />
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="font-display text-8xl text-gold">{project.name[0]}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-base/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gold text-text-inverse text-sm rounded hover:bg-gold-deep transition-colors"
                >
                  View live site ↗
                </Link>
              </div>

              {/* Card content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="section-label" style={{fontSize:'0.6rem'}}>{project.category}</span>
                  <span className="section-label text-text-muted" style={{fontSize:'0.6rem'}}>{project.year}</span>
                </div>
                <h3 className="font-display text-xl font-light text-text-primary">{project.name}</h3>
                <p className="text-text-muted text-xs mt-1">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
