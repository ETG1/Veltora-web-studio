'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

function NavLink({ href, label, isActive, onClick }: { href: string; label: string; isActive: boolean; onClick?: () => void }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative font-mono text-[0.7rem] tracking-[0.18em] uppercase font-medium transition-colors duration-200",
        isActive ? "text-[#F5F5F5]" : "text-[rgba(245,245,245,0.65)] hover:text-[#F5F5F5]"
      )}
    >
      {label}
      <motion.span
        initial={false}
        animate={{ width: isActive ? '100%' : '0%' }}
        transition={{ duration: 0.90, ease: "easeOut" }}
        className="absolute -bottom-1 left-0 h-px bg-gold"
      />
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const isScrolling = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setMenuOpen(false)
    
    isScrolling.current = true
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false
    }, 1000)
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    if (globalThis.location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setMenuOpen(false)
    setActiveSection('')
    
    isScrolling.current = true
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false
    }, 1000)
  }

  useEffect(() => {
    const sectionIds = NAV_LINKS
      .map(link => link.href.split('#')[1])
      .filter(Boolean)

    const observers: IntersectionObserver[] = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!isScrolling.current) {
            if (entry.isIntersecting) {
              setActiveSection(id)
            } else {
              setActiveSection((prev) => (prev === id ? '' : prev))
            }
          }
        },
        { rootMargin: '-20% 0px -60% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      // Clear active section if we are at the top (Hero section)
      if (window.scrollY < window.innerHeight * 0.5) {
        if (!isScrolling.current) {
          setActiveSection('')
        }
      }
    }
    onScroll() // check on mount
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Use a class instead of inline style so it doesn't override overflow-x: clip
    if (menuOpen) {
      document.documentElement.classList.add('menu-open')
    } else {
      document.documentElement.classList.remove('menu-open')
    }
    return () => document.documentElement.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-500 max-w-full mx-2 md:mx-12 lg:mx-16",
        scrolled
          ? "top-4 left-4 right-4 md:top-4 md:left-8 md:right-8 lg:top-4 lg:left-16 lg:right-16 rounded-xl md:rounded-2xl shadow-md shadow-gold/30 backdrop-blur-sm bg-[rgba(11,11,11,0.62)] border border-[rgba(232,160,32,0.18)]"
          : "top-4 left-0 right-0 rounded-none border-transparent"
      )}
    >
        <div className="h-16 w-full px-6 sm:px-4 md:px-6 flex items-center justify-between relative min-w-0">
        {/* Zone 1 — Logo */}
        <Link href="/" className="relative flex items-center gap-1.5 sm:gap-2.5 group shrink-0 min-w-0" onClick={handleLogoClick}>
          <Image
            src="/icon.svg"
            alt="Veltora"
            width={120}
            height={40}
            className="h-9 sm:h-11.25 w-auto max-w-22.5 sm:max-w-none"
            priority
          />
          <span className="hidden sm:block absolute sm:ml-7 text-2xl sm:text-3xl font-display text-white font-light whitespace-nowrap">eltora</span>
        </Link>

        {/* Zone 2 — Nav links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.split('#')[1]
            return (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={activeSection === sectionId}
                onClick={() => handleNavClick(sectionId)}
              />
            )
          })}
        </nav>

        {/* Zone 3 — CTA + hamburger */}
        <div className="shrink-0 flex items-center gap-2 sm:gap-4">
          <Link
            href="/#contact"
            className="hidden lg:inline-flex bg-transparent border border-[rgba(232,160,32,0.18)] text-gold hover:bg-gold hover:text-dark font-medium font-mono text-[0.68rem] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full items-center gap-2 transition-all duration-400 "
          >
            START PROJECT
            
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden w-6 h-4 relative flex flex-col justify-between items-end outline-none cursor-pointer shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              animate={menuOpen ? { rotate: -45, y: 7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-6 h-px bg-[#F5F5F5] origin-center block"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="w-3.5 h-px bg-gold block"
            />
            <motion.span
              animate={menuOpen ? { rotate: 45, y: -7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-6 h-px bg-[#F5F5F5] origin-center block"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden border-t border-[rgba(232,160,32,0.18)]"
          >
            <div className="pt-4 pb-6 px-3 sm:px-4 flex flex-col min-w-0">
              <ul className="flex flex-col mb-4 min-w-0">
                {NAV_LINKS.map((link, i) => {
                  const sectionId = link.href.split('#')[1]
                  const isActive = activeSection === sectionId

                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: 0.05 + i * 0.03 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => handleNavClick(sectionId)}
                        className={cn(
                          "block py-3 font-mono text-[0.75rem] sm:text-[0.85rem] tracking-[0.18em] uppercase font-medium transition-colors duration-200 truncate",
                          isActive ? "text-[#F5F5F5]" : "text-[rgba(245,245,245,0.65)] hover:text-[#F5F5F5]"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full min-w-0"
              >
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full justify-center bg-gold hover:bg-gold-deep text-dark font-medium font-mono text-[0.65rem] sm:text-[0.68rem] tracking-[0.15em] uppercase px-4 sm:px-5 py-2.5 rounded-full items-center gap-2 transition-colors duration-200 shrink-0"
                >
                  START PROJECT
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}