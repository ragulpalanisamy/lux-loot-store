import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './layouts/Nav/Navbar';
import Footer from './layouts/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LuxLoot',
  description:
    'LuxLoot is a simple React application for browsing and viewing product catalogs. It features an intuitive interface with search functionality, making it easy to find and explore products quickly.',
  keywords: [
    'react',
    'next',
    'tailwind',
    'typescript',
    'ecommerce',
    'bazaar',
    'shopping',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
