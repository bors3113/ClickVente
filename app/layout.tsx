import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://clickvente.com'),
  title: {
    default: 'ClickVente - Web & AI Automation Agency | Transform Your Business',
    template: '%s | ClickVente'
  },
  description: 'Transform your business with cutting-edge web development and AI automation solutions. We help businesses scale faster with custom websites, AI chatbots, workflow automation, and lead generation tools. Get 3x more leads with our proven strategies.',
  keywords: [
    'web development',
    'AI automation',
    'chatbots',
    'workflow automation',
    'lead generation',
    'API integration',
    'business automation',
    'custom websites',
    'AI solutions',
    'digital transformation',
    'marketing automation',
    'CRM integration',
    'sales funnel optimization',
    'conversion optimization'
  ],
  authors: [{ name: 'ClickVente Team', url: 'https://clickvente.com' }],
  creator: 'ClickVente',
  publisher: 'ClickVente',
  category: 'Technology',
  classification: 'Business Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clickvente.com',
    siteName: 'ClickVente',
    title: 'ClickVente - Web & AI Automation Agency | Transform Your Business',
    description: 'Transform your business with cutting-edge web development and AI automation solutions. Get 3x more leads with our proven strategies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ClickVente - Web & AI Automation Agency',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@clickvente',
    creator: '@clickvente',
    title: 'ClickVente - Web & AI Automation Agency',
    description: 'Transform your business with cutting-edge web development and AI automation solutions.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://clickvente.com',
    languages: {
      'en-US': 'https://clickvente.com',
      'fr-FR': 'https://clickvente.com/fr',
      'es-ES': 'https://clickvente.com/es',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'msapplication-TileColor': '#CF7652',
    'theme-color': '#CF7652',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ClickVente",
              "description": "Web & AI Automation Agency specializing in custom websites, AI chatbots, and business automation solutions",
              "url": "https://clickvente.com",
              "logo": "https://clickvente.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "customer service",
                "availableLanguage": ["English", "French", "Spanish"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://twitter.com/clickvente",
                "https://linkedin.com/company/clickvente",
                "https://facebook.com/clickvente"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Custom Web Development",
                  "description": "Professional website development with modern technologies"
                },
                {
                  "@type": "Service", 
                  "name": "AI Automation",
                  "description": "AI-powered chatbots and workflow automation solutions"
                },
                {
                  "@type": "Service",
                  "name": "Lead Generation",
                  "description": "Advanced lead generation and conversion optimization"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 