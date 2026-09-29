import type {Metadata} from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OCTACORE Fitness, Nerul | Premium Gym & Training Center',
  description: 'Navi Mumbai’s premier fitness destination in Nerul Sector 1. High-intensity HIIT, Aerobics, CrossFit, Weight Training, and 1-on-1 Personal Training.',
  openGraph: {
    title: 'OCTACORE Fitness, Nerul | Premium Gym & Training Center',
    description: 'Transform your body at OCTACORE Fitness Nerul. 10,000+ sq.ft space, top-tier biomechanic equipment, certified trainers. Mon–Sat 6 AM–11 PM.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OCTACORE Fitness, Nerul | Premium Gym & Training Center',
    description: 'Transform your body at OCTACORE Fitness Nerul. 10,000+ sq.ft space, top-tier biomechanic equipment, certified trainers. Mon–Sat 6 AM–11 PM.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`dark scroll-smooth ${outfit.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-[#0B0C10] text-[#F3F4F6] antialiased selection:bg-[#FF5E00] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
