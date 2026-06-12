'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    number: '01',
    category: 'Aviation Architecture',
    name: 'Eagle Air \nFlight School',
    description: '"The precision in layout reflects our cockpit checklists. Every pixel serves a purpose."',
    image: '/Eagle.png',
    imageFirst: true,
  },
  {
    id: 2,
    number: '02',
    category: 'Furniture Manufacturer',
    name: 'Aristocrafts',
    description: 'Precision-crafted digital presence for a furniture manufacturer where material quality meets pixel perfect presentation.',
    image: '/Aristocraft.png',
    imageFirst: false,
  },
]

export default function WorksArchive() {
  return (
    <section id="work" className="bg-dark py-48 px-8 md:px-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 flex flex-col md:flex-row items-end justify-between relative pl-8 md:pl-0"
        >
          <div className="absolute left-0 md:-left-12 top-0 w-px h-full bg-linear-to-b from-gold-deep via-transparent to-transparent" />
          <div className="relative">
            <span className="section-label block mb-6 uppercase">03 — Works Archive</span>
            <h2 className="font-display text-[clamp(3.5rem,7vw,6.5rem)] font-light text-white leading-none mb-6">
              Atmospheric <span className="italic gold-text">Portfolio</span>.
            </h2>
            <p className="text-white/40 text-sm font-light max-w-sm">
              Selected architectural builds for global leaders in aviation, hospitality, and luxury retail.
            </p>
            <div style={{ marginTop: '24px', marginBottom: '40px', display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E8A020', flexShrink: 0 }}>
                PORTFOLIO NOTE —
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', fontStyle: 'normal' }}>
                Select builds were initiated by Veltora independently.
              </span>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-end pb-4">
            <a href="javascript:void(0)" className="group flex items-center gap-6">
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/40 group-hover:text-white transition-colors">
                Browse Archive
              </span>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-all">
                <i className="fa-solid fa-arrow-right text-gold"></i>
              </div>
            </a>
          </div>
        </motion.div>

        <div className="space-y-48">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
            >
              {/* Image */}
              <div className={`lg:col-span-7 relative h-[700px] overflow-hidden rounded-[2px] group ${!project.imageFirst ? 'lg:order-2' : ''}`}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-2000 group-hover:scale-105"
                  decoding="async"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-1000" />
              </div>

              {/* Text */}
              <div className={`lg:col-span-5 ${!project.imageFirst ? 'lg:order-1 pl-12' : 'pr-12'}`}>
                <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-gold mb-8 block opacity-80">
                  {project.number} / {project.category}
                </span>
                <h3 className="font-display text-6xl text-white mb-10 leading-[1.1] italic font-light whitespace-pre-line">
                  {project.name}
                </h3>
                <p className="text-white/40 text-lg font-light leading-relaxed mb-12 italic">
                  {project.description}
                </p>
                <button className="px-12 py-5 rounded-full border border-white/20 text-[10px] font-bold tracking-[0.4em] text-white hover:bg-white hover:text-dark transition-all uppercase cursor-pointer">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
