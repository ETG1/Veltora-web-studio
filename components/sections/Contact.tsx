'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (res.ok) {
        setStatus('success')
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      
      {/* Background large faint element */}
      <div 
        className="absolute bottom-[-10%] right-[-5%] font-display select-none pointer-events-none"
        style={{ fontSize: '600px', lineHeight: 0.8, opacity: 0.015, color: '#E8A020' }}
        aria-hidden="true"
      >
        07
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <p className="section-label mb-16">07 — Let's work together</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Copy & Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <h2 className="font-display font-light text-5xl md:text-6xl leading-tight mb-8">
              Start a project
            </h2>
            
            <p className="text-text-secondary leading-relaxed mb-12 max-w-md">
              Ready to elevate your digital presence? Fill out the form, and we'll get back to you within 24 hours to schedule a discovery call.
            </p>

            <div className="space-y-8 mt-auto">
              <div>
                <p className="section-label mb-2" style={{fontSize:'0.65rem'}}>Email us</p>
                <a href="mailto:hello@veltora.co.za" className="text-lg text-text-primary hover:text-gold transition-colors font-light">
                  hello@veltora.co.za
                </a>
              </div>
              
              <div>
                <p className="section-label mb-2" style={{fontSize:'0.65rem'}}>WhatsApp</p>
                <a href="tel:+27000000000" className="text-lg text-text-primary hover:text-gold transition-colors font-light">
                  +27 (0) 00 000 0000
                </a>
              </div>

              <div>
                <p className="section-label mb-2" style={{fontSize:'0.65rem'}}>Location</p>
                <p className="text-lg text-text-primary font-light">Pretoria, South Africa</p>
                <p className="text-sm text-text-muted mt-1">Available in SA · Kenya · Remote Worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-surface border border-border p-8 md:p-10 rounded-lg relative overflow-hidden min-h-[500px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center mb-6 bg-gold/5">
                      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-3xl text-text-primary mb-3">Message sent</h3>
                    <p className="text-text-secondary max-w-sm">
                      Thank you for reaching out. We've received your request and will be in touch shortly.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-8 text-sm text-text-muted hover:text-gold transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-mono text-text-muted uppercase tracking-wider">Name <span className="text-gold">*</span></label>
                        <input required type="text" id="name" name="name" className="bg-base border border-border rounded px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-gold/50 transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-mono text-text-muted uppercase tracking-wider">Email <span className="text-gold">*</span></label>
                        <input required type="email" id="email" name="email" className="bg-base border border-border rounded px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-gold/50 transition-colors" placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-xs font-mono text-text-muted uppercase tracking-wider">Company</label>
                        <input type="text" id="company" name="company" className="bg-base border border-border rounded px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-gold/50 transition-colors" placeholder="Optional" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="package" className="text-xs font-mono text-text-muted uppercase tracking-wider">Package Interest</label>
                        <select id="package" name="package" className="bg-base border border-border rounded px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-gold/50 transition-colors appearance-none">
                          <option value="">Not sure yet</option>
                          <option value="Forge">Forge (R3,500 setup)</option>
                          <option value="Velocity">Velocity (R6,500 setup)</option>
                          <option value="Apex">Apex (R12,000 setup)</option>
                          <option value="Custom">Custom / Enterprise</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-mono text-text-muted uppercase tracking-wider">Message <span className="text-gold">*</span></label>
                      <textarea required id="message" name="message" rows={4} className="bg-base border border-border rounded px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-gold/50 transition-colors resize-none" placeholder="Tell us about your project goals..." />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-400 text-sm">Something went wrong. Please try again or email us directly.</p>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="mt-2 w-full py-4 bg-gold text-text-inverse text-sm font-medium rounded hover:bg-gold-deep transition-all duration-300 disabled:opacity-70 flex items-center justify-center"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
