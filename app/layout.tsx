import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Sunrise Movement Sierra Leone | United for a Greener Tomorrow',
  description: 'Youth-led climate and environmental organization advancing climate resilience, environmental justice, sustainable agriculture, clean energy access, and youth economic empowerment across Sierra Leone.',
  keywords: ['climate action', 'Sierra Leone', 'youth empowerment', 'environmental justice', 'sustainable agriculture', 'clean energy'],
  authors: [{ name: 'Sunrise Movement Sierra Leone' }],
  openGraph: {
    title: 'Sunrise Movement Sierra Leone',
    description: 'Empowering Youth. Restoring Ecosystems. Transforming Sierra Leone.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0d9488',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
