'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function InteractiveGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      setIsHovered(true);
      
      // Use requestAnimationFrame for buttery smooth updates
      frameId = requestAnimationFrame(() => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          setMousePos({ x, y });

          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          
          // Multiply by 0.01 for slight anti-gravity drift
          const deltaX = (e.clientX - centerX) * 0.01;
          const deltaY = (e.clientY - centerY) * 0.01;
          
          setOffset({ x: deltaX, y: deltaY });
        }
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 bg-dark overflow-hidden pointer-events-none"
    >
      {/* 1. Base Layer */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/icon.svg')",
          backgroundSize: "80px 80px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />
      
      {/* 2, 3 & 4. Interactive Overlay Layer */}
      <div 
        className="absolute inset-[-50px] pointer-events-none"
        style={{
          backgroundImage: "url('/icon.svg')",
          backgroundSize: "80px 80px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          WebkitMaskImage: `radial-gradient(250px circle at ${mousePos.x + 50}px ${mousePos.y + 50}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(250px circle at ${mousePos.x + 50}px ${mousePos.y + 50}px, black 0%, transparent 100%)`,
          filter: 'saturate(1.8) brightness(1.2)',
          opacity: isHovered ? 0.25 : 0,
          transition: 'opacity 0.4s ease, transform 0.1s ease-out',
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      />
    </div>
  );
}
