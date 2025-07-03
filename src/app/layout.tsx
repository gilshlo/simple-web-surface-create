import type { Metadata } from 'next';
import { Inter, Alegreya } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import SiteLayout from '@/components/layout/SiteLayout';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // Only include used weights
  display: 'swap',
  variable: '--font-inter',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Only include used weights
  display: 'swap',
  variable: '--font-alegreya',
});

export const metadata: Metadata = {
  title: 'Tax Chamber Hub',
  description: 'Israeli Tax Advisors Chamber',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${inter.variable} ${alegreya.variable}`}>
      <body className="font-body antialiased">
        <SidebarProvider>
          <SiteLayout>{children}</SiteLayout>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
