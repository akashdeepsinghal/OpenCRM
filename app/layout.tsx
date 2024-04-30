import { Inter } from 'next/font/google';
import '@/app/ui/global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { template: '%s | Acme Dashboard', default: 'Acme Dashboard' },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
