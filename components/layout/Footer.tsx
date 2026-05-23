import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#080808] border-t border-border/30 pt-20 pb-8 px-6 overflow-hidden">
      
      {/* Background Watermark */}
      <div 
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 font-display select-none pointer-events-none whitespace-nowrap"
        style={{ fontSize: 'clamp(8rem, 20vw, 25rem)', lineHeight: 0.8, opacity: 0.015, color: '#E8A020' }}
        aria-hidden="true"
      >
        VELTORA
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Top Section - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20">
          
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col">
            <Link href="/" className="mb-6 inline-block">
              <span className="font-display text-2xl font-light tracking-[0.15em] text-text-primary">
                <span className="text-gold">V</span>ELTORA
              </span>
            </Link>
            <p className="text-text-secondary font-light text-sm max-w-xs mb-8">
              Precision-built digital experiences. We design and build high-performance websites for businesses that want to stand out.
            </p>
            <p className="text-text-muted text-xs font-mono mt-auto">
              © {currentYear} Veltora Web Studio. All rights reserved.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col">
            <h4 className="text-text-primary font-medium mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Work', 'Services', 'About', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-text-secondary hover:text-gold transition-colors text-sm font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Tech */}
          <div className="flex flex-col">
            <h4 className="text-text-primary font-medium mb-6">Connect</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="#" className="text-text-secondary hover:text-gold transition-colors text-sm font-light">
                  Twitter / X ↗
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-gold transition-colors text-sm font-light">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-gold transition-colors text-sm font-light">
                  Instagram ↗
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-gold transition-colors text-sm font-light">
                  GitHub ↗
                </a>
              </li>
            </ul>
            <p className="text-text-muted text-xs font-mono mt-auto">
              Built with Next.js & ☕
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-pulse" />
            Operating from Pretoria, South Africa
          </p>
          <p className="section-label" style={{fontSize: '0.65rem'}}>
            Proudly Pan-African
          </p>
        </div>

      </div>
    </footer>
  )
}
