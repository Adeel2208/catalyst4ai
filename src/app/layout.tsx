import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.catalyst4ai.com'),
  title: {
    default: 'Catalyst4AI - Medical AI Innovation | NLP & Computer Vision Solutions',
    template: '%s | Catalyst4AI'
  },
  description: 'Catalyst4AI specializes in artificial intelligence solutions for medical science, leveraging NLP and computer vision to transform healthcare. Join our innovative team in Lahore, Pakistan.',
  keywords: [
    'Catalyst4AI',
    'medical AI',
    'healthcare artificial intelligence',
    'medical NLP',
    'medical computer vision',
    'AI healthcare solutions',
    'medical machine learning',
    'healthcare technology',
    'AI jobs lahore',
    'medical AI careers',
    'healthcare innovation',
    'clinical AI',
    'medical imaging AI',
    'healthcare NLP',
    'AI research medical',
    'digital health solutions',
    'medical data science',
    'AI company lahore pakistan'
  ],
  authors: [{ name: 'Catalyst4AI', url: 'https://www.catalyst4ai.com' }],
  creator: 'Catalyst4AI',
  publisher: 'Catalyst4AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://www.catalyst4ai.com',
    title: 'Catalyst4AI - Medical AI Innovation | NLP & Computer Vision',
    description: 'Pioneering artificial intelligence solutions for medical science. Specializing in NLP and computer vision to transform healthcare delivery and outcomes.',
    siteName: 'Catalyst4AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Catalyst4AI - Medical AI Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catalyst4AI - Medical AI Innovation',
    description: 'Pioneering artificial intelligence solutions for medical science. Join our innovative team in Lahore, Pakistan.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.catalyst4ai.com',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Catalyst4AI',
    description: 'Pioneering artificial intelligence solutions for medical science, specializing in NLP and computer vision to transform healthcare delivery.',
    url: 'https://www.catalyst4ai.com',
    logo: 'https://www.catalyst4ai.com/logo.png',
    image: 'https://www.catalyst4ai.com/og-image.jpg',
    email: 'careers@catalyst4ai.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2nd Floor, 13 P DHA Rahbar',
      addressLocality: 'Lahore',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    sameAs: [
      'https://www.linkedin.com/company/catalyst4ai',
    ],
    knowsAbout: [
      'Medical Artificial Intelligence',
      'Natural Language Processing',
      'Computer Vision',
      'Healthcare Technology',
      'Medical Machine Learning',
      'Clinical AI Solutions'
    ],
  }

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/MEDAP Logo.png" />
        <link rel="apple-touch-icon" href="/MEDAP Logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
