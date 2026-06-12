'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimationFrame, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

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
      className="glass-card rounded-2xl p-6 h-full flex flex-col justify-center relative overflow-hidden group transition-premium backdrop-blur-xs bg-[rgba(11,11,11,0.20)] transform duration-700 hover:-rotate-2 hover:scale-[1.02] gold-glow"
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
        <span className="text-amber-500 text-[10px] font-mono tracking-widest uppercase block mb-2">03 / CAPABILITIES</span>
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
      {/* Top Window Control Bar */}
      <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
        <div className="flex gap-2 relative z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/30 tracking-widest">workspace.veltora</span>
      </div>

      {/* Main IDE Area */}
      <div className="flex gap-6 min-h-[160px]">
        {/* Sidebar */}
        <div className="w-[35%] flex flex-col gap-2 border-r border-white/5 pr-4">
          <button 
            onClick={() => setActiveFile('markets')}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 group/file ${activeFile === 'markets' ? 'bg-amber-500/10' : 'hover:bg-white/5'}`}
          >
            <img 
              src="/markets.svg" 
              alt="Markets"
              className={`w-4 h-4 transition-all duration-300 ${activeFile === 'markets' ? 'opacity-100 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 'opacity-60 grayscale group-hover/file:opacity-100 group-hover/file:grayscale-0 group-hover/file:drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]'}`} 
            />
            <span className={`text-[11px] font-mono transition-all duration-300 ${activeFile === 'markets' ? 'text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 'text-white/60 group-hover/file:text-amber-400 group-hover/file:drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]'}`}>Markets.config</span>
          </button>
          
          <button 
            onClick={() => setActiveFile('certification')}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 group/file ${activeFile === 'certification' ? 'bg-amber-500/10' : 'hover:bg-white/5'}`}
          >
            <img 
              src="/certification.svg" 
              alt="Certification"
              className={`w-4 h-4 transition-all duration-300 ${activeFile === 'certification' ? 'opacity-100 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 'opacity-60 grayscale group-hover/file:opacity-100 group-hover/file:grayscale-0 group-hover/file:drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]'}`} 
            />
            <span className={`text-[11px] font-mono transition-all duration-300 ${activeFile === 'certification' ? 'text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 'text-white/60 group-hover/file:text-amber-400 group-hover/file:drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]'}`}>Certification.alx</span>
          </button>
        </div>

        {/* Content Pane */}
        <div className="w-[65%] relative flex items-center">
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
                {/* ALX Watermark */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-8xl font-display text-white/2 italic pointer-events-none select-none">ALX</div>
                <div className="relative z-10">
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3 block">Certification</span>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    ALX Certified Software Engineer. Detail-obsessed. Architecture-driven.
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

export default function Philosophy() {
  return (
    <section id="about" className="py-40 px-8 md:px-24 bg-dark border-t border-white/5 relative">
      {/* Atmospheric background — silhouette standing on cliff (Parallax) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-fixed"
        style={{
          backgroundImage: "url('/Silhouette_standing_on_cliff.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark overlay — 0.88 opacity for lighter image */}
      <div className="absolute inset-0 z-1 pointer-events-none" style={{ background: 'rgba(8,8,8,0.88)' }} />
      
      {/* Top Gradient Bleed */}
      <div className="absolute top-0 left-0 right-0 h-[180px] z-2 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #080808 0%, transparent 100%)' }} />
      {/* Bottom Gradient Bleed */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] z-2 pointer-events-none" style={{ background: 'linear-gradient(to top, #080808 0%, transparent 100%)' }} />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -left-12 top-0 w-px h-full bg-linear-to-b from-gold-deep via-transparent to-transparent" />
          <span className="section-label block mb-8 uppercase">01 — The Philosophy</span>
          <h2 className="font-display text-6xl font-light leading-[0.9] text-white mb-10">
            One person. <br />
            <span className="italic gold-text">Full studio output.</span>
          </h2>
          <p className="text-white/50 text-xl font-light leading-relaxed mb-8 max-w-lg">
            Veltora exists at the intersection of cinematic design and elite engineering. We eliminate the noise between vision and execution.
          </p>
          <div className="flex gap-4">
            <div className="px-4 py-2 glass-card rounded-full text-[10px] font-mono tracking-widest text-white/60 uppercase">CERTIFIED ALX ENG</div>
            <div className="px-4 py-2 glass-card rounded-full text-[10px] font-mono tracking-widest text-white/60 uppercase">DESIGN-LED CODE</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <MarqueeCard />
          <IDECard />
        </motion.div>
      </div>
    </section>
  )
}
