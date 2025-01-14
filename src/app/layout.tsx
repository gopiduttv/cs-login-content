import type { Metadata } from "next";
import "./globals.css";
import { Inter, Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800','900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CS Layout",
  description: "CS Layout App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased text-black`}
      >
        {children}
      </body>
    </html>
  );
}
