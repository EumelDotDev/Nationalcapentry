import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "National Carpentry Installation | Master Millwork",
  description: "Highly experienced in mill working, high-end, and finish carpentry for commercial and residential services across Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased bg-zinc-950 text-zinc-50`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
