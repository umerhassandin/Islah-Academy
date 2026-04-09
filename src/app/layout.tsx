import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Islah Quran Academy | Learn Quran Online with Expert Qaris",
  description: "Authentic Pakistani Quran teachers (Qaris) for USA-based students. Master Tajweed, memorization, and reciting with Qari Saleem Ur Rehman.",
  metadataBase: new URL("https://islahquranacademy.com"),
  keywords: ["learn quran online", "pakistani quran teachers", "tajweed classes", "hifz program", "quran academy for usa students"],
  authors: [{ name: "Qari Saleem Ur Rehman", url: "https://islahquranacademy.com" }],
  openGraph: {
    title: "Islah Quran Academy | Learn Quran Online with Expert Qaris",
    description: "Authentic Pakistani Quran teachers (Qaris) for USA-based students.",
    url: "https://islahquranacademy.com",
    siteName: "Islah Quran Academy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Islah Quran Academy | Expert Quran Teachers",
    description: "Learn Quran with Tajweed from the comfort of your home.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased selection:bg-gold-500 selection:text-white`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
