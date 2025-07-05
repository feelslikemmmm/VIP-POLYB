import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/sidebar';
import { MobileSidebar } from '@/components/mobile-sidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'VIP POLYB - Political Betting Platform',
  description: 'Political prediction and betting platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen bg-gray-900">
          <div className="hidden md:block">
            <Sidebar />
          </div>
          <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-800 border-b border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <MobileSidebar />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-900">V</span>
                </div>
                <span className="text-lg font-bold text-white">VIP POLYB</span>
              </div>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
