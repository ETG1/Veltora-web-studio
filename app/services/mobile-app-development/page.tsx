import React from 'react';
import Link from 'next/link';
import ShapeGrid from '@/components/ui/ShapeGrid';

export const metadata = {
  title: 'Mobile App Development | Veltora Web Studio',
  description: 'Custom iOS and Android apps built for performance and growth.',
}

export default function MobileAppDevelopmentPage() {
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
        <div className="relative w-full h-[50vh] overflow-hidden bg-black rounded-[2.5rem] border border-white/5">
        {/* Background Image */}
        <img 
          src="/mobile-app-mockups.jpeg" 
          alt="Mobile application interface on iOS and Android devices"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark Overlay for content readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

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
                  Mobile App Development
                </li>
              </ol>
            </nav>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
              Mobile App <span className="italic gold-text drop-shadow-2xl">Development</span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-base md:text-lg text-gray-300 max-w-lg">
              Custom iOS and Android apps built for performance and growth.
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

      {/* B. What We Deliver */}
      <section className="py-24 px-4 md:px-8 bg-black/40 backdrop-blur-xs border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-gold-deep mb-4">Capabilities</p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light">
              What We <span className="gold-text italic">Deliver</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Native iOS & Android applications",
              "Cross-platform apps (Flutter, React Native)",
              "Intuitive, responsive UI/UX design",
              "Third-party API integrations & backend connectivity",
              "App store optimization & deployment"
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-6 glass-card rounded-xl hover:border-gold/30 transition-colors">
                <div className="shrink-0 w-6 h-6 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-sm mt-0.5">✓</div>
                <p className="font-sans text-sm text-white/80 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. How We Work */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-white font-light">
              How We <span className="gold-text italic">Work</span>
            </h2>
          </div>
          <div className="space-y-16">
            {[
              { num: "01", title: "Concept & Planning", desc: "We define your app's core features, user flows, and technical requirements. Clear roadmap before development starts." },
              { num: "02", title: "Design & Development", desc: "We design beautiful interfaces and build with clean, maintainable code. You see progress at every milestone." },
              { num: "03", title: "Testing & QA", desc: "Rigorous testing across devices ensures your app performs flawlessly. No compromises on quality." },
              { num: "04", title: "Launch & Support", desc: "We handle app store submission, monitor performance, and provide ongoing updates and maintenance." }
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

      {/* D. Industries We Serve */}
      <section className="py-24 px-4 md:px-8 bg-black/40 border-y border-white/5 relative backdrop-blur-xs">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white font-light mb-12">
            Industries We <span className="gold-text italic">Serve</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            {["E-commerce", "SaaS", "Fintech", "Healthcare", "Logistics", "Education", "Social Platforms"].map((industry, i) => (
              <div key={i} className="glass-card px-5 py-2.5 rounded-full border border-white/10 hover:border-gold/40 text-sm font-mono text-white/80 transition-colors cursor-default">
                {industry}
              </div>
            ))}
          </div>
            <p className="font-sans text-white/60 max-w-2xl mx-auto">
            We build apps that solve real problems and drive real results for ambitious brands.
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
              { title: "Performance First", desc: "Fast load times, smooth animations, zero lag. Your app performs beautifully on every device." },
              { title: "Built to Scale", desc: "From launch day to millions of users, your infrastructure grows seamlessly with demand." },
              { title: "Results-Focused", desc: "We measure success by your metrics — user retention, engagement, revenue. That's what matters." }
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
            Ready to launch your <span className="gold-text italic text-glow-gold">app?</span>
          </h2>
          <p className="font-sans text-xl text-white/70 mb-12 font-light">
            From concept to app store, we handle every detail. Let's discuss your vision.
          </p>
          <Link 
            href="#contact" 
            className="inline-flex bg-gold hover:bg-gold-deep text-dark font-medium font-mono text-sm tracking-[0.15em] uppercase px-8 py-4 rounded-full transition-colors duration-300"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
