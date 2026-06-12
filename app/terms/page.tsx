import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use | Veltora Web Studio',
  description: 'Terms of Use for Veltora Web Studio',
};

export default function TermsOfUse() {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <main className="min-h-screen relative bg-dark text-[#F5F5F5] pt-40 pb-24 px-6 md:px-12 selection:bg-gold selection:text-dark overflow-hidden">
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "url('/icon.svg')",
          backgroundSize: "80px 80px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center"
        }}
      />
      <article className="max-w-[720px] mx-auto relative z-10">
        <header className="mb-16">
          <h1 className="font-display text-5xl md:text-6xl text-[#F5F5F5] mb-6">
            Terms of Use
          </h1>
          <p className="font-display text-xl md:text-2xl text-white/70 italic mb-6">
            Plain language. No surprises.
          </p>
          <p className="font-mono text-sm tracking-widest text-white/45 uppercase">
            Last Updated: {currentDate}
          </p>
        </header>

        <div className="space-y-12 font-body text-lg leading-relaxed text-white/70">
          
          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">1. Acceptance</h2>
            <p>
              By submitting the contact form or engaging Veltora for services, the client agrees to these terms.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">2. Payment Terms</h2>
            <ul className="list-disc pl-5 space-y-2 text-white/60">
              <li>50% deposit required before work begins.</li>
              <li>Remaining 50% due on project delivery before the site goes live.</li>
              <li>Monthly management fees are billed on the 1st of each month.</li>
              <li>Late payments (over 7 days) may result in site suspension.</li>
              <li>All prices are in South African Rand (ZAR).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">3. Revisions</h2>
            <ul className="list-disc pl-5 space-y-2 text-white/60">
              <li><strong className="text-white/90">Forge:</strong> 1 round of revisions included.</li>
              <li><strong className="text-white/90">Velocity:</strong> 2 rounds of revisions included.</li>
              <li><strong className="text-white/90">Apex:</strong> 3 rounds of revisions included.</li>
              <li>A revision round constitutes one consolidated list of changes, not multiple separate requests.</li>
              <li>Additional revisions are billed at R850/hour.</li>
              <li>Revisions do not include new features or scope changes.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">4. Intellectual Property</h2>
            <ul className="list-disc pl-5 space-y-2 text-white/60">
              <li>Veltora retains full ownership of all work until final payment is received.</li>
              <li>Upon final payment, the client owns the website design and content.</li>
              <li>Veltora retains the right to display the project in its portfolio.</li>
              <li>Third-party assets (fonts, stock images, plugins) remain subject to their own licenses.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">5. Client Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2 text-white/60">
              <li>The client must provide all content (text, images, brand assets) within 7 days of project start.</li>
              <li>Delays caused by late client feedback will extend the delivery timeline accordingly.</li>
              <li>The client is responsible for providing accurate information for the project.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">6. Delivery Timeline</h2>
            <ul className="list-disc pl-5 space-y-2 text-white/60">
              <li>Timelines begin from deposit receipt AND content delivery — whichever is later.</li>
              <li>Veltora is not liable for delays caused by third-party services (hosting, domains, payment gateways, APIs).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">7. Monthly Management</h2>
            <ul className="list-disc pl-5 space-y-2 text-white/60">
              <li>Covers hosting oversight, minor updates, security monitoring, and uptime checks.</li>
              <li>Does not include new pages, new features, or redesigns.</li>
              <li>30 days written notice is required to cancel monthly management.</li>
              <li>No refunds on management fees already billed.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">8. Limitation of Liability</h2>
            <ul className="list-disc pl-5 space-y-2 text-white/60">
              <li>Veltora is not liable for business losses, lost revenue, or damages arising from website downtime, third-party failures, or client-side errors.</li>
              <li>Maximum liability is limited to the total amount paid by the client for the project.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">9. Termination</h2>
            <ul className="list-disc pl-5 space-y-2 text-white/60">
              <li>Either party may terminate with 14 days written notice.</li>
              <li>If the client terminates after work has begun, the deposit is non-refundable.</li>
              <li>If Veltora terminates, work completed to date will be delivered and a pro-rata refund of any unused deposit issued.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">10. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Republic of South Africa. Disputes will be resolved in South African courts.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">11. Changes to Terms</h2>
            <p>
              Veltora may update these terms at any time. Continued use of our services constitutes acceptance of the updated terms.
            </p>
          </section>

        </div>

        <footer className="mt-24 pt-8 border-t border-white/5">
          <Link href="/" className="font-mono text-xs tracking-widest text-gold uppercase hover:text-white transition-colors">
            ← Return to Studio
          </Link>
        </footer>
      </article>
    </main>
  );
}
