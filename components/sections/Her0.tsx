'use client';

import LaserFlow from '../ui/LaserFlow';
import { useRef, useEffect } from 'react';
import type React from 'react';

function ActiveNodesMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseVx: number;
      baseVy: number;
      hasTag: boolean;
      tagText: string;
      flickerOffset: number;
    }

    const nodes: Node[] = [];
    const numNodes = 85;
    const connectionDistance = 120;
    const mouse = { x: -1000, y: -1000 };
    const mouseRadius = 200;

    const tags = [
      "SYSTEM OPTIMIZED",
      "99.9% UPTIME",
      "EDGE NODE: ACTIVE",
      "LATENCY: 12MS",
      "CORE SYNC: OK",
      "LOAD BALANCED"
    ];

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    const initNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < numNodes; i++) {
        const bx = (Math.random() - 0.5) * 0.3;
        const by = (Math.random() - 0.5) * 0.3;
        nodes.push({
          x: Math.random() * (width || 800),
          y: Math.random() * (height || 400),
          vx: bx,
          vy: by,
          baseVx: bx,
          baseVy: by,
          hasTag: false,
          tagText: "",
          flickerOffset: Math.random() * 100
        });
      }
      
      let tagsAssigned = 0;
      const targetTags = 4;
      while (tagsAssigned < targetTags) {
        const node = nodes[Math.floor(Math.random() * nodes.length)];
        if (!node.hasTag) {
          node.hasTag = true;
          node.tagText = tags[Math.floor(Math.random() * tags.length)];
          tagsAssigned++;
        }
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (nodes.length === 0) initNodes(); 
    });
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius;
          // Radial pull (towards mouse)
          const radialX = -dx / dist;
          const radialY = -dy / dist;
          
          // Tangential pull (orbit swirl)
          const tangentX = dy / dist;
          const tangentY = -dx / dist;

          node.vx += (radialX * 0.05 + tangentX * 0.15) * force;
          node.vy += (radialY * 0.05 + tangentY * 0.15) * force;
          
          // Speed limit when swarming
          const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
          if (speed > 2.5) {
            node.vx = (node.vx / speed) * 2.5;
            node.vy = (node.vy / speed) * 2.5;
          }
        } else {
          // Ease back to original gentle float
          node.vx += (node.baseVx - node.vx) * 0.02;
          node.vy += (node.baseVy - node.vy) * 0.02;
        }

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) { node.x = 0; node.vx *= -1; node.baseVx *= -1; }
        if (node.x > width) { node.x = width; node.vx *= -1; node.baseVx *= -1; }
        if (node.y < 0) { node.y = 0; node.vy *= -1; node.baseVy *= -1; }
        if (node.y > height) { node.y = height; node.vy *= -1; node.baseVy *= -1; }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          
          const cdx = node.x - other.x;
          const cdy = node.y - other.y;
          const cDist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cDist < connectionDistance) {
            const opacity = 1 - (cDist / connectionDistance);
            
            // Dynamic brightness near mouse
            let alpha = opacity * 0.05; // Faint base line
            const midX = (node.x + other.x) / 2;
            const midY = (node.y + other.y) / 2;
            const mDx = midX - mouse.x;
            const mDy = midY - mouse.y;
            const mDist = Math.sqrt(mDx * mDx + mDy * mDy);
            
            if (mDist < mouseRadius) {
              const swarmBonus = ((mouseRadius - mDist) / mouseRadius) * 0.4;
              alpha += opacity * swarmBonus;
            }

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(234, 160, 35, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(234, 160, 35, 0.6)';
        ctx.fill();

        // Draw tag
        if (node.hasTag) {
          const isFlickering = Math.sin(time * 0.01 + node.flickerOffset) > 0.8 && Math.random() > 0.5;
          const opacity = isFlickering ? 0.4 : 0.9;
          
          ctx.fillStyle = `rgba(234, 160, 35, ${opacity})`;
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.textBaseline = 'middle';
          if ('letterSpacing' in ctx) {
            (ctx as any).letterSpacing = '1px';
          }
          // Fix text flickering by rounding coordinates to integers
          ctx.fillText(node.tagText, Math.round(node.x + 8), Math.round(node.y));
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full bg-transparent rounded-[20px] pointer-events-auto"
    />
  );
}

// Image Example Interactive Reveal Effect
export default function LaserFlowBoxExample() {
  const revealImgRef = useRef<HTMLImageElement>(null);

  return (
    <div 
      style={{ 
        height: '800px', 
        position: 'relative', 
        overflow: 'hidden',
        backgroundColor: '#080808'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.20}
        verticalBeamOffset={-0.15}
        color="#E8A020"
      />

      {/* Text Content (Left side) */}
      <div className="absolute left-[8%] z-10 pointer-events-none flex flex-col items-start text-left max-w-3xl" style={{ top: '25%' }}>
        <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.85] font-light mb-6 flex flex-col items-start">
          <span className="text-white drop-shadow-2xl">Precision-built</span>
          <span className="gold-text italic font-normal text-glow-gold">digital experiences.</span>
        </h1>
        <p className="text-white/60 max-w-2xl text-[clamp(1rem,1.2vw,1.1rem)] font-light leading-relaxed">
          Where architectural precision meets cinematic aesthetic. <br/>Bespoke infrastructure for brands that demand nothing less than total <span className="gold-text italic font-normal text-glow-gold">supremacy</span>.
        </p>
      </div>
      
      <div style={{
        position: 'absolute',
        top: '65%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '86%',
        height: '60%',
        backgroundColor: '#080808',
        backgroundImage: 'radial-gradient(circle, rgba(232, 160, 32, 0.15) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        borderRadius: '20px',
        border: '1px solid rgba(232, 160, 32, 0.22)',
        boxShadow: '0 0 40px rgba(196, 120, 16, 0.12)',
        zIndex: 6,
        overflow: 'hidden'
      }}>
        <ActiveNodesMap />
      </div>

      <img
        ref={revealImgRef}
        src="/dark_background,glowing_amber_circuit.jpeg"
        alt="Reveal effect"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          objectFit: 'cover',
          zIndex: 5,
          mixBlendMode: 'lighten',
          opacity: 0.3,
          pointerEvents: 'none',
          '--mx': '-9999px',
          '--my': '-9999px',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        } as React.CSSProperties}
      />
    </div>
  );
}