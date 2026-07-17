'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


/* ─────────────────────────── Types ─────────────────────────── */
type Category = 'All' | 'Web' | 'Mobile' | 'Graphic Design'

interface Project {
  id: number
  title: string
  category: Exclude<Category, 'All'>
  image: string
  description: string
  tools: string[]
  link: string
  image_full: string
}

/* ─────────────────────────── Data ──────────────────────────── */
const projects: Project[] = [
  {
    id: 1,
    title: 'LM Motors',
    category: 'Web',
    image: '/lm-motors-full.png',
    description:
      'Custom admin dashboard for vehicle inventory management, sales tracking, and dealership operations.',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://lm-motors.vercel.app/',
    image_full: '/lm-motors-full.png',
  },
  {
    id: 2,
    title: 'Takalani Day Care Center',
    category: 'Web',
    image: '/takalani-day-care-center.png',
    description:
      'Full-stack childcare management platform parent and admin portals with real-time enrollment, attendance, messaging, and payments, built with production-grade security hardening.',
    tools: ['Next.js', 'Supabase', 'Tailwind CSS', 'TypeScript'],
    link: 'https://takalani-day-care-center.vercel.app/',
    image_full: '/takalani-day-care-center.png',
  },
  {
    id: 3,
    title: 'Eagle Air Flight School',
    category: 'Web',
    image: '/eagle-air-thumbnail.png',
    description:
      'Flight training school website with course catalog.',
    tools: ['Next.js', 'Tailwind CSS'],
    link: 'https://eagle-air-flight-school.vercel.app/',
    image_full: '/eagle-air-thumbnail.png',
  },
  {
    id: 4,
    title: 'AristoCraft',
    category: 'Web',
    image: '/aristocraft-thumbnail.png',
    description:
      'Luxury artisan marketplace showcasing handcrafted products with advanced filtering and checkout.',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS',],
    link: 'https://aristocraft.vercel.app/',
    image_full: '/Aristocraft.png',
  },
  {
    id: 5,
    title: 'TOGB Agency',
    category: 'Web',
    image: '/togb.png',
    description:
      'Creative agency portfolio site showcasing case studies, services, and client work.',
    tools: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://togb-agency.vercel.app/',
    image_full: '/togb.png',
  },
  {
    id: 6,
    title: 'Hotel Nine Omega',
    category: 'Web',
    image: '/Hotel.png',
    description:
      'Boutique hotel website with room booking, photo gallery, and reservation management.',
    tools: ['Next.js','Tailwind CSS', 'JavaScript'],
    link: 'https://hotel-nine-omega.vercel.app/',
    image_full: '/Hotel.png',
  },
]

const CATEGORIES: Category[] = ['All', 'Web', 'Mobile', 'Graphic Design']

/* ─────────────────────────── Modal ─────────────────────────── */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xs bg-[rgba(11,11,11,0.20)]"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#0A0A0A] rounded-2xl border border-white/8 max-w-2xl w-full max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-gold transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Hero image */}
        <div className="w-full h-72 overflow-hidden rounded-t-2xl bg-black/60">
          <img
            src={project.image_full}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Category label */}
          <span className="section-label block mb-3">{project.category}</span>

          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-4 leading-tight">
            {project.title}
          </h2>

          {/* Divider */}
          <div className="w-10 h-px bg-gold mb-6 opacity-60" />

          {/* Description */}
          <p className="font-sans text-white/60 text-sm leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="mb-8">
            <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-gold-deep mb-3">
              Built With
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-[rgba(232,160,32,0.08)] border border-[rgba(232,160,32,0.18)] rounded-full text-xs font-mono text-white/70"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-deep text-dark font-medium font-mono text-[0.7rem] tracking-[0.15em] uppercase px-6 py-3 rounded-full transition-colors duration-300"
          >
            View Live Project
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─────────────────────────── Card ──────────────────────────── */
function ProjectCard({
  project,
  onClick,
}: {
  project: Project
  onClick: () => void
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group cursor-pointer rounded-xl overflow-hidden border border-white/5 backdrop-blur-xs bg-[rgba(11,11,11,0.20)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,160,32,0.1)]"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56 bg-black/40">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Category badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-[0.6rem] font-mono tracking-[0.2em] uppercase text-white/60">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-light text-white mb-2 group-hover:text-gold transition-colors duration-200">
          {project.title}
        </h3>
        <p className="font-sans text-xs text-white/40 leading-relaxed line-clamp-2">
          {project.description.length > 90
            ? project.description.substring(0, 90) + '…'
            : project.description}
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase">View project</span>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────── Main Section ─────────────────────── */
export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<Category>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  const openModal = useCallback((project: Project) => {
    setSelectedProject(project)
  }, [])

  const closeModal = useCallback(() => {
    setSelectedProject(null)
  }, [])

  return (
    <section
      id="portfolio"
      className="w-full py-24 md:py-32 px-4 md:px-8 border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <span className="section-label block mb-4">Portfolio</span>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-white leading-none">
              Featured <span className="gold-text italic">Projects</span>
            </h2>
            <p className="font-sans text-white/40 text-sm mt-4 max-w-sm font-light leading-relaxed">
              The work we&apos;ve delivered for ambitious brands.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full font-mono text-[0.65rem] tracking-[0.15em] uppercase transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-gold text-dark'
                    : 'bg-transparent border border-white/10 text-white/50 hover:border-[rgba(232,160,32,0.3)] hover:text-white/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => openModal(project)}
                />
              ))
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-24 text-center"
              >
                <p className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-white/25">
                  No projects in this category yet
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  )
}
