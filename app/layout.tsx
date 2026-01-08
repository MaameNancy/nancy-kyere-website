import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nancy Kyere | Strategy & Pivot Consulting',
  description: 'Helping professionals transition from Business to Tech through strategy, not just degrees. Join our WhatsApp community for no-gatekeeping resources.',
  openGraph: {
    title: 'Nancy Kyere | Strategy & Pivot Consulting',
    description: 'Stop planning. Start pivoting.',
    url: 'https://nancykyere.com',
    siteName: 'Nancy Kyere',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nancy Kyere - Strategy & Pivot Consulting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nancy Kyere | Strategy & Pivot Consulting',
    description: 'Stop planning. Start pivoting.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}> 
      <body className="antialiased font-sans bg-white text-gray-950 selection:bg-maroon selection:text-white"> 
        <Header />
        <main> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}