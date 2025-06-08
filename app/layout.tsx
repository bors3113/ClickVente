import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ClickVente - Web & AI Automation Agency',
  description: 'Transform your business with cutting-edge web development and AI automation solutions. We help businesses scale faster with custom websites, AI chatbots, workflow automation, and lead generation tools.',
  keywords: 'web development, AI automation, chatbots, workflow automation, lead generation, API integration',
  authors: [{ name: 'ClickVente Team' }],
  openGraph: {
    title: 'ClickVente - Web & AI Automation Agency',
    description: 'Transform your business with cutting-edge web development and AI automation solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 