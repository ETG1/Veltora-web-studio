import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Veltora Web Studio — Precision-built digital experiences',
  description: 'We design and build high-performance websites for businesses that want to stand out. Fast websites. Real results.',
  keywords: ['web design', 'web development', 'South Africa', 'Kenya', 'Next.js', 'Veltora'],
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://veltora.co.za' },
  openGraph: {
    title: 'Veltora Web Studio',
    description: 'Precision-built digital experiences.',
    url: 'https://veltora.co.za',
    siteName: 'Veltora',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veltora Web Studio',
    description: 'Precision-built digital experiences.',
    images: ['/og-image.png'],
  },
}

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Cursor from '@/components/ui/Cursor'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Cursor />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
