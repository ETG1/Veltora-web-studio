import React from 'react';
import Link from 'next/link';
import ShapeGrid from '@/components/ui/ShapeGrid';

export const metadata = {
  title: 'Graphic Design | Veltora Web Studio',
  description: 'Custom posters, logos, and brand identities designed with precision and creativity.',
}

export default function GraphicDesignPage() {
  return (
    <main className="min-h-screen bg-dark text-white relative">
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

      {/* A. Hero Section */}
      <div className="w-full px-4 md:px-8 pt-24 md:pt-32 pb-12 md:pb-24 relative z-10">
        <div className="relative w-full h-[50vh] overflow-hidden bg-black rounded-[2.5rem] border border-white/8">
        {/* Background Image */}
        <img 
          src="/graphic-design-portfolio.jpeg" 
          alt="Custom graphic design and branding work"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark Overlay for content readability */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-16 max-w-7xl mx-auto pt-20">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <span className="text-[#C9A230] text-sm font-sans tracking-widest uppercase mb-2 block">
              Service
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
                  Graphic Design
                </li>
              </ol>
            </nav>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
              Graphic <span className="italic gold-text drop-shadow-2xl">Design</span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-base md:text-lg text-gray-300 max-w-lg">
              Custom posters, logos, and brand identities designed with precision and creativity.
            </p>

            {/* CTA Button */}
            <Link href="#contact" className="inline-block mt-8 px-6 py-3 bg-[#C9A230] text-black font-sans font-semibold rounded-lg hover:bg-gold transition sm:inline-block pointer-events-auto">
              Get Started
            </Link>
          </div>
        </div>

        {/* Bottom Gradient for seamless transition to next section */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-dark to-transparent pointer-events-none" />
        </div>
      </div>

      {/* B. What We Create */}
      <section className="py-24 px-4 md:px-8 bg-black/40 backdrop-blur-xs border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-gold-deep mb-4">Capabilities</p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light">
              What We <span className="gold-text italic">Create</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Logo design & brand identity systems",
              "Custom posters & promotional materials",
              "Brand guidelines & visual standards",
              "Social media assets & marketing collateral",
              "Packaging design & visual storytelling",
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-6 glass-card rounded-xl hover:border-gold/30 transition-colors">
                <div className="shrink-0 w-6 h-6 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-sm mt-0.5">✓</div>
                <p className="font-sans text-sm text-white/80 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. Our Process */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-white font-light">
              Our <span className="gold-text italic">Process</span>
            </h2>
          </div>
          <div className="space-y-16">
            {[
              {
                num: "01",
                title: "Discovery & Brief",
                desc: "We understand your brand, target audience, and creative direction. The stronger the brief, the stronger the design.",
              },
              {
                num: "02",
                title: "Concept & Exploration",
                desc: "We develop multiple design directions showing different creative angles. You choose the direction that resonates.",
              },
              {
                num: "03",
                title: "Refinement & Iteration",
                desc: "We polish the chosen concept — refining typography, colors, layout, and details until it's perfect.",
              },
              {
                num: "04",
                title: "Delivery & Support",
                desc: "Final files, brand guidelines, and full support for implementation across all touchpoints.",
              },
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                <div className="shrink-0 font-mono text-3xl md:text-5xl font-light text-gold opacity-50">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-2xl text-white mb-3">{step.title}</h3>
                  <p className="font-sans text-white/60 text-base leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D. Who We Work With */}
      <section className="py-24 px-4 md:px-8 bg-black/40 border-y border-white/5 relative backdrop-blur-xs">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white font-light mb-4">
            Who We <span className="gold-text italic">Work With</span>
          </h2>
          <p className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-gold-deep mb-12">
            We design for
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            {[
              "Startups",
              "Creative Agencies",
              "E-commerce Brands",
              "Nonprofits",
              "Hospitality",
              "Tech Companies",
              "Retail Brands",
            ].map((client, i) => (
              <div
                key={i}
                className="glass-card px-5 py-2.5 rounded-full border border-white/10 hover:border-gold/40 text-sm font-mono text-white/80 transition-colors cursor-default"
              >
                {client}
              </div>
            ))}
          </div>
          <p className="font-sans text-white/60 max-w-2xl mx-auto">
            We design for brands that understand: great design isn&apos;t decoration, it&apos;s strategy.
          </p>
        </div>
      </section>

      {/* E. Why Veltora */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-white font-light">
              Why <span className="gold-text italic">Veltora</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 backdrop-blur-xs">
            {[
              {
                title: "Precision Over Trends",
                desc: "We design systems that endure, not fleeting aesthetics. Every choice serves your brand strategy.",
              },
              {
                title: "Originality First",
                desc: "No templates, no shortcuts. Every design is custom-built to your brand's unique story.",
              },
              {
                title: "Built for Implementation",
                desc: "Designs that look great and work across every medium — print, digital, physical, web.",
              },
            ].map((reason, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl border-t border-t-gold/20">
                <h3 className="font-display text-2xl text-white mb-4">{reason.title}</h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. CTA Section */}
      <section className="py-32 px-4 md:px-8 relative text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl text-white font-light mb-8">
            Ready to elevate your <span className="gold-text italic text-glow-gold">brand?</span>
          </h2>
          <p className="font-sans text-xl text-white/70 mb-12 font-light">
            Let&apos;s create something that stands out. Tell us about your vision and we&apos;ll bring it to life with precision and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#contact"
              className="inline-flex bg-gold hover:bg-gold-deep text-dark font-medium font-mono text-sm tracking-[0.15em] uppercase px-8 py-4 rounded-full transition-colors duration-300"
            >
              Schedule Consultation
            </Link>
            <Link
              href="#contact"
              className="inline-flex bg-transparent border border-[rgba(232,160,32,0.18)] text-gold hover:bg-gold hover:text-dark font-medium font-mono text-[0.68rem] tracking-[0.15em] uppercase px-8 py-4 rounded-full transition-all duration-400"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
