import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Veltora Web Studio',
  description: 'POPIA-compliant privacy policy for Veltora Web Studio.',
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="font-mono text-sm tracking-widest text-white/45 uppercase">
            Last Updated: {currentDate}
          </p>
        </header>

        <div className="space-y-12 font-body text-lg leading-relaxed text-white/70">
          
          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">1. Who We Are</h2>
            <p>
              Veltora Web Studio is a sole proprietor web design and development studio based in Pretoria, South Africa. This privacy policy explains how we collect, use, and protect your personal information when you use our website (veltora-web-studio.vercel.app) or interact with us.
            </p>
            <ul className="mt-4 space-y-2 text-white/60">
              <li><strong className="text-white/90">Owner:</strong> [Your full name]</li>
              <li><strong className="text-white/90">Email:</strong> <a href="mailto:hello@veltora.studio" className="text-gold hover:text-white transition-colors">hello@veltora.studio</a></li>
              <li><strong className="text-white/90">Phone:</strong> +27 (0) 72 455 1290</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">2. What We Collect & Why</h2>
            <p>
              When you reach out to us via our contact form, we collect the following information:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-white/60">
              <li>Your full name and email address (so we can reply to you)</li>
              <li>Your company name, if provided</li>
              <li>Your selected service tier and project description (so we can understand your needs before we talk)</li>
            </ul>
            <p className="mt-4">
              We only collect what we absolutely need to start a conversation about your project.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">3. Legal Basis for Processing</h2>
            <p>
              Under the Protection of Personal Information Act (POPIA), we process your data based on your <strong className="text-white/90">consent</strong> (when you submit the contact form) and our <strong className="text-white/90">legitimate interest</strong> in responding to your project inquiries and operating our business effectively.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">4. How Data is Stored & Retained</h2>
            <p>
              The information you submit is securely stored in Supabase, a cloud database whose servers are located in the European Union (EU). We retain project inquiries for <strong className="text-white/90">12 months</strong>. If we don't end up working together, your information is permanently deleted from our database after this period.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">5. Sharing Your Information</h2>
            <p>
              We respect your privacy. We <strong className="text-white/90">do not</strong> sell your data, use it for marketing lists, or share it with third parties. Supabase acts strictly as our data processor to store the information securely.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">6. Your Rights</h2>
            <p>
              Under POPIA, you have the right to:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-white/60">
              <li><strong className="text-white/90">Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong className="text-white/90">Correction:</strong> Ask us to update or fix any inaccurate data.</li>
              <li><strong className="text-white/90">Deletion:</strong> Request that we delete your personal information.</li>
              <li><strong className="text-white/90">Object:</strong> Object to how we process your data.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, simply email us at <a href="mailto:hello@veltora.studio" className="text-gold hover:text-white transition-colors">hello@veltora.studio</a>.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">7. Complaints</h2>
            <p>
              If you feel we haven't addressed your concerns, you have the right to lodge a complaint with the Information Regulator of South Africa.
            </p>
            <ul className="mt-4 space-y-2 text-white/60">
              <li><strong className="text-white/90">Email:</strong> <a href="mailto:POPIAComplaints@inforegulator.org.za" className="text-gold hover:text-white transition-colors">POPIAComplaints@inforegulator.org.za</a></li>
              <li><strong className="text-white/90">Website:</strong> <a href="https://inforegulator.org.za/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">inforegulator.org.za</a></li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">8. Cookies</h2>
            <p>
              This website uses <strong className="text-white/90">no tracking cookies</strong>. We don't track your behavior, target you with ads, or use analytics that compromise your privacy. You can browse our work in peace.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this policy occasionally to reflect changes in our practices or legal requirements. The latest version will always be available on this page, with the "Last Updated" date reflecting the most recent revisions.
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
