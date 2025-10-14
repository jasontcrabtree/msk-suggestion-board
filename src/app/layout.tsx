import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// @ts-expect-error import error out of scope for now
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MSK Suggestion Board',
  description: 'MSK suggestion management board',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter} antialiased relative overflow-hidden text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
