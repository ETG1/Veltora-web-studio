import React from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'web-app',
    title: 'Web App Development',
    description: 'Build secure and scalable web applications using the latest technologies tailored to your business goals.',
    image: '/dashboard.jpeg', // Replace with actual LM Motors dashboard screenshot
    link: '/services/web-app-development'
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Craft beautiful cross-platform apps for iOS and Android with high performance and exceptional user experience.',
    image: '/mobile-app-mockups.jpeg', // Replace with phone mockup image
    link: '/services/mobile-app-development'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Custom posters, logos, and brand visuals designed with precision and creativity to elevate your brand identity.',
    image: '/graphic-design-portfolio.jpeg', // Replace with design piece
    link: '/services/graphic-design'
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 pointer-events-none">
        
        {/* Section Header */}
        <div className="mb-16 pointer-events-auto">
          <span className="section-label block mb-4">What We Do</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-white leading-none">
            Our <span className="gold-text italic">Services</span>
          </h2>
          <p className="font-sans text-white/40 text-sm mt-4 max-w-sm font-light leading-relaxed">
            End-to-end digital solutions built for ambitious brands.
          </p>
        </div>

        {/* Desktop: 3-column grid | Mobile: single column stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group rounded-lg overflow-hidden border border-[#C9A23015] border-l-4 border-l-gold-deep hover:border-gold-deep hover:shadow-2xl hover:shadow-[rgba(201,162,48,0.12)] transition-all duration-300 flex flex-col backdrop-blur-xs bg-[rgba(11,11,11,0.20)] pointer-events-auto"
            >
              {/* Image Section */}
              <div className="w-full h-80 overflow-hidden bg-black/50">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col items-start grow">
                {/* Title: Using font-display to match Veltora's Cormorant Garamond */}
                <h3 className="font-display text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description: Using font-sans / default body font to match Veltora's DM Sans */}
                <p className="font-sans text-sm text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Gold divider line */}
                <div className="w-12 h-0.5 bg-gold mb-8"></div>

                {/* CTA Button */}
                <Link 
                  href={service.link} 
                  className="inline-flex bg-transparent border border-[rgba(232,160,32,0.18)] text-gold hover:bg-gold hover:text-dark font-medium font-mono text-[0.68rem] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full transition-all duration-400 mt-auto w-fit"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
