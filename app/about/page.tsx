'use client'

import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimationFrame, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import ShapeGrid from '@/components/ui/ShapeGrid'

function MarqueeCard() {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  const velocity = useSpring(1, { stiffness: 50, damping: 20 });
  
  useEffect(() => {
    if (isLogoHovered) {
      velocity.set(0);
    } else if (isCardHovered) {
      velocity.set(3); // Logos move faster when the card tilts
    } else {
      velocity.set(1);
    }
  }, [isCardHovered, isLogoHovered, velocity]);

  useAnimationFrame((t, delta) => {
    let moveBy = velocity.get() * (delta / 25);
    let currentX = x.get();
    currentX -= moveBy;
    
    if (containerRef.current) {
       const width = containerRef.current.scrollWidth / 3;
       if (currentX <= -width) {
         currentX += width;
       }
    }
    x.set(currentX);
  });

  const icons = [
    "nextdotjs.svg",
    "typescript.svg",
    "supabase.svg",
    "react.svg",
    "postgresql.svg",
    "javascript.svg",
    "authdotjs.svg",
    "vercel.svg",
    "github.svg",
    "canva.svg"
  ];
  const duplicated = [...icons, ...icons, ...icons];

  return (
    <div 
      className="glass-card rounded-2xl p-4 md:p-6 h-full flex flex-col justify-center relative overflow-hidden group transition-premium backdrop-blur-xs bg-[rgba(11,11,11,0.20)] transform duration-700 hover:-rotate-2 hover:scale-[1.02] gold-glow"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <div className="absolute inset-0 bg-linear-to-br from-gold-deep/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="relative z-10 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-gold-deep/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[9px] text-white/30 tracking-widest uppercase">stack.ts</span>
        </div>
        <span className="text-[#C9A230] text-[10px] font-mono tracking-widest uppercase block mb-2">CAPABILITIES</span>
        <h3 className="text-white font-light text-xl">Certified Stack & Tools</h3>
      </div>
      
      <div 
        className="relative w-full overflow-hidden py-4 z-10"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
      >
        <motion.div 
          ref={containerRef}
          style={{ x }}
          className="flex w-max gap-12 items-center"
        >
           {duplicated.map((src, i) => (
             <img 
               key={i}
               src={`/${src}`} 
               alt={src.split('.')[0]} 
               onMouseEnter={() => setIsLogoHovered(true)}
               onMouseLeave={() => setIsLogoHovered(false)}
               className={`w-12 h-12 object-contain opacity-40 transition-all duration-500 hover:opacity-100 hover:scale-110 shrink-0 cursor-pointer ${
                 src === 'github.svg' ? 'invert' : 'grayscale hover:grayscale-0'
               }`}
             />
           ))}
        </motion.div>
      </div>
    </div>
  )
}

function IDECard() {
  const [activeFile, setActiveFile] = useState<'markets' | 'certification'>('markets');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card rounded-2xl p-6 h-full flex flex-col justify-center relative overflow-hidden group transition-premium backdrop-blur-xs bg-[rgba(11,11,11,0.20)] gold-glow "
    >
      <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
        <div className="flex gap-2 relative z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-[#C9A230]/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/30 tracking-widest">workspace.veltora</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 min-h-[160px]">
        <div className="w-full sm:w-[40%] flex sm:flex-col gap-2 border-b sm:border-b-0 sm:border-r border-white/5 pb-4 sm:pb-0 sm:pr-4 overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setActiveFile('markets')}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 group/file shrink-0 ${activeFile === 'markets' ? 'bg-[#C9A230]/10' : 'hover:bg-white/5'}`}
          >
            <img 
              src="/globe.svg" 
              alt="Markets"
              className={`w-4 h-4 transition-all duration-300 ${activeFile === 'markets' ? 'opacity-100 drop-shadow-[0_0_8px_rgba(201,162,48,0.6)]' : 'opacity-60 grayscale group-hover/file:opacity-100 group-hover/file:grayscale-0 group-hover/file:drop-shadow-[0_0_8px_rgba(201,162,48,0.4)]'}`} 
            />
            <span className={`text-[11px] font-mono transition-all duration-300 ${activeFile === 'markets' ? 'text-[#C9A230] drop-shadow-[0_0_8px_rgba(201,162,48,0.6)]' : 'text-white/60 group-hover/file:text-[#C9A230] group-hover/file:drop-shadow-[0_0_8px_rgba(201,162,48,0.4)]'}`}>Markets.config</span>
          </button>
          
          <button 
            onClick={() => setActiveFile('certification')}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 group/file shrink-0 ${activeFile === 'certification' ? 'bg-[#C9A230]/10' : 'hover:bg-white/5'}`}
          >
            <img 
              src="/icon.svg" 
              alt="Certification"
              className={`w-4 h-4 transition-all duration-300 ${activeFile === 'certification' ? 'opacity-100 drop-shadow-[0_0_8px_rgba(201,162,48,0.6)]' : 'opacity-60 grayscale group-hover/file:opacity-100 group-hover/file:grayscale-0 group-hover/file:drop-shadow-[0_0_8px_rgba(201,162,48,0.4)]'}`} 
            />
            <span className={`text-[11px] font-mono transition-all duration-300 ${activeFile === 'certification' ? 'text-[#C9A230] drop-shadow-[0_0_8px_rgba(201,162,48,0.6)]' : 'text-white/60 group-hover/file:text-[#C9A230] group-hover/file:drop-shadow-[0_0_8px_rgba(201,162,48,0.4)]'}`}>Certification.alx</span>
          </button>
        </div>

        <div className="w-full sm:w-[60%] relative flex items-center pt-2 sm:pt-0">
          <AnimatePresence mode="wait">
            {activeFile === 'markets' && (
              <motion.div
                key="markets"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3 block">Markets</span>
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  Building for Africa and the global digital frontier with precision-tuned interfaces.
                </p>
              </motion.div>
            )}
            {activeFile === 'certification' && (
              <motion.div
                key="certification"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="w-full relative"
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-7xl font-display text-white/2 italic transition-premium hover:text-[#C9A230]/8">ALX</div>
                <div className="relative z-10">
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3 block">Certification</span>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    ALX Certified Software Engineer.<br/> Detail-obsessed. Architecture-driven.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* Animated ShapeGrid Background (Page-wide) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ShapeGrid 
          speed={0.8}
          squareSize={30}
          direction="diagonal"
          borderColor="rgba(232, 160, 32, 0.38)"
          hoverFillColor="rgba(232, 160, 32, 0.45)"
          shape="hexagon"
          hoverTrailAmount={0}
        />
      </div>

      {/* Hero Section */}
      <div className="w-full px-4 md:px-6 lg:px-8 pt-24 md:pt-32 pb-12 md:pb-24 relative z-10">
        <div className="relative w-full h-[60vh] overflow-hidden bg-black rounded-[2.5rem] border border-white/8">
          {/* Background Image */}
          <img 
            src="/Silhouette_standing_on_cliff.jpeg" 
            alt="About Veltora background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay for content readability */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-16 max-w-7xl mx-auto pt-20">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <span className="text-[#C9A230] text-sm font-mono tracking-widest uppercase mb-2 block">
                Studio
              </span>

              {/* Breadcrumbs */}
              <nav className="mb-6">
                <ol className="flex items-center gap-2 font-sans text-sm">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-[#C9A230] transition">
                      Home
                    </Link>
                  </li>
                  <li className="text-gray-500">/</li>
                  <li className="text-white">
                    About
                  </li>
                </ol>
              </nav>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 leading-[0.9]">
                  About <span className="italic gold-text drop-shadow-2xl">Veltora</span>
                </h1>

                {/* Subtitle */}
                <p className="font-sans text-base md:text-lg text-gray-300 max-w-lg">
                  One person. Full studio output. Zero compromises on quality or speed.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Bottom Gradient for seamless transition to next section */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Who I Am & Why Veltora Exists */}
      <section className="py-32 px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C9A230] mb-6 block">Who I Am</span>
              <h2 className="font-display text-4xl text-white font-light mb-8">
                Hi. I'm Eli, founder of <span className="italic text-[#C9A230]">Veltora Web Studio.</span>
              </h2>
              <div className="space-y-6 text-white/70 font-light leading-relaxed">
                <p>
                  I build high-performance digital experiences — websites, applications, and brand identities for founders and ambitious brands that refuse to compromise on speed, reliability, or results.
                </p>
                <p>
                  I'm based in Pretoria, South Africa, and I've spent the last 5+ years obsessing over precision in code, design, and strategy. From concept to launch, I handle every detail — architecture, interface, performance, deployment. The outcome is always the same: fast, reliable, built to grow.
                </p>
                <p>
                  I'm not interested in vanity metrics or shortcuts. Every project I take on gets treated like it's my own business, because your success directly impacts how Veltora grows.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card p-10 rounded-2xl border-l-4 border-l-[#C9A230] bg-black/40 backdrop-blur-md">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C9A230] mb-6 block">Why Veltora Exists</span>
              <div className="space-y-6 text-white/70 font-light leading-relaxed">
                <p>
                  For years, I watched founders and brands struggle with the gap between their vision and execution. They'd hire agencies that looked slick but couldn't deliver speed. They'd hire developers who built fast but ignored design. They'd spend money on tools instead of actual growth.
                </p>
                <p>
                  Veltora exists to close that gap. I started this studio because I believed one person — if focused and skilled across the full stack — could deliver better results than a bloated team. No committees. No delays. No feature creep disguised as "additional value."
                </p>
                <p>
                  The name, Veltora, references the tiger ("tora" in Japanese). Not because I'm trying to sound cool, but because I wanted to embody what tigers actually represent: <strong className="text-gold font-normal">precision, speed, and the discipline to only do what matters.</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* My Approach */}
      <section id="approach" className="py-32 px-4 md:px-6 lg:px-8 bg-black/30 border-y border-white/5 relative z-10 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-white font-light">
              My <span className="text-[#C9A230] italic">Approach</span>
            </h2>
            <p className="font-sans text-white/60 mt-6 max-w-xl mx-auto font-light">
              Three principles guide every project and decision I make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { num: "01", title: "Precision Over Perfection", desc: "Perfection is a distraction. Precision is a discipline. I focus on the details that move the needle — architecture, performance, user experience — and ignore the rest. Every decision serves your business goals." },
              { num: "02", title: "Speed as a Feature", desc: "Slow websites lose users. Slow launches lose momentum. I build for speed by default. Sub-2-second load times, optimized assets, lean code. Your users feel the difference immediately." },
              { num: "03", title: "Outcomes Over Output", desc: "I don't measure success by project completion. I measure it by your results — conversions, user retention, revenue impact. If the website doesn't drive business outcomes, it's not done." }
            ].map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-10 rounded-2xl group hover:border-[#C9A230]/40 transition-colors"
              >
                <div className="font-mono text-3xl font-light text-[#C9A230] opacity-80 mb-6">
                  {principle.num}
                </div>
                <h3 className="font-display text-2xl text-white mb-4">{principle.title}</h3>
                <p className="font-sans text-white/60 text-sm leading-relaxed font-light">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Philosophy Cards */}
      <section id="process" className="py-32 px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full overflow-hidden"
          >
            <div className="mb-12">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C9A230] mb-4 block">Background</span>
              <h2 className="font-display text-4xl text-white font-light">
                Credentials & <span className="text-[#C9A230] italic">Experience</span>
              </h2>
            </div>
            
            <div className="space-y-10">
              <div className="border-l border-white/10 pl-6 hover:border-[#C9A230] transition-colors">
                <h3 className="font-display text-xl text-white mb-2 wrap-break-word">ALX Software Engineering Certified</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-none">
                  Completed the advanced software engineering program through ALX, focusing on full-stack development, system design, and engineering best practices.
                </p>
              </div>
              
              <div className="border-l border-white/10 pl-6 hover:border-[#C9A230] transition-colors">
                <h3 className="font-display text-xl text-white mb-2 wrap-break-word">Self-Taught Front-End Developer</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-none">
                  Over 5+ years building interfaces with React, Next.js, and TypeScript. Obsessed with performance, accessibility, and user experience.
                </p>
              </div>
              
              <div className="border-l border-white/10 pl-6 hover:border-[#C9A230] transition-colors">
                <h3 className="font-display text-xl text-white mb-2 wrap-break-word">Self-Taught Designer & Brand Strategist</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-none">
                  Graphic design, logo design, brand systems, visual strategy. Every pixel serves the brand narrative.
                </p>
              </div>
              
              <div className="border-l border-white/10 pl-6 hover:border-[#C9A230] transition-colors">
                <h3 className="font-display text-xl text-white mb-2 wrap-break-word">Full-Stack Builder</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-4 line-clamp-none">
                  From concept sketches to deployed applications, I own the entire process: strategy, design, development, optimization, deployment.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Supabase', 'Framer Motion', 'Three.js', 'Vercel'].map(tech => (
                    <span key={tech} className="text-[10px] font-mono text-[#C9A230] bg-[#C9A230]/10 px-2.5 py-1 rounded-sm border border-[#C9A230]/20 shrink-0 whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 h-full justify-center w-full overflow-hidden"
          >
            <MarqueeCard />
            <IDECard />
          </motion.div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="py-32 px-4 md:px-6 lg:px-8 bg-black/40 border-y border-white/5 relative z-10 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 lg:row-span-2 flex flex-col justify-center mb-8 lg:mb-0">
              <h2 className="font-display text-4xl text-white font-light leading-tight">
                Proof <span className="text-[#C9A230] italic">Points</span>
              </h2>
              <p className="font-sans text-white/50 mt-4 font-light">
                Results speak louder than promises. Here is what we deliver consistently across every project.
              </p>
            </div>
            
            {[
              { stat: "8+", label: "Global Clients", desc: "Startups, agencies, e-commerce brands, and service businesses across South Africa, Kenya, and beyond." },
              { stat: "100%", label: "Project Delivery Rate", desc: "Every project ships on time, on scope, and to specification. No exceptions." },
              { stat: "<2s", label: "Average Load Performance", desc: "Every application I build loads in under 2 seconds, even on slower networks. Speed is non-negotiable." },
              { stat: "100", label: "Lighthouse Score", desc: "Perfect performance, accessibility, best practices, and SEO across all projects." },
              { stat: "1", label: "Full Stack Ownership", desc: "No handoffs. No \"that's the designer's job\" or \"that's the developer's problem.\" One person, complete execution." }
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="glass-card p-8 rounded-2xl flex flex-col"
              >
                <div className="font-display text-5xl text-[#C9A230] mb-3">{point.stat}</div>
                <h4 className="font-sans text-lg text-white mb-3">{point.label}</h4>
                <p className="font-sans text-sm text-white/50 font-light leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-4 md:px-6 lg:px-8 relative z-10 text-center ">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl text-white font-light mb-8">
            Ready to <span className="text-[#C9A230] italic">work together?</span>
          </h2>
          <p className="font-sans text-xl text-white/70 mb-12 font-light max-w-2xl mx-auto">
            Whether you're launching a startup, scaling a business, or building a brand that demands excellence, let's talk about your project.
          </p>
          <Link 
            href="#contact" 
            className="inline-flex bg-[#C9A230] hover:bg-[#b08d28] text-black font-semibold font-sans text-sm uppercase tracking-widest px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(201,162,48,0.4)]"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  )
}
