import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KaizenSpark Tech - Transform Your Business With Intelligent Technology",
  description: "AI-powered solutions and custom software development that help ambitious businesses scale faster, work smarter, and dominate their markets.",
  keywords: ["AI solutions", "custom software development", "digital transformation", "web development", "mobile apps", "cloud solutions"],
  authors: [{ name: "KaizenSpark Tech" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaizenspark.tech",
    title: "KaizenSpark Tech - Transform Your Business With Intelligent Technology",
    description: "AI-powered solutions and custom software development that help ambitious businesses scale faster, work smarter, and dominate their markets.",
    siteName: "KaizenSpark Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "KaizenSpark Tech - Transform Your Business With Intelligent Technology",
    description: "AI-powered solutions and custom software development that help ambitious businesses scale faster, work smarter, and dominate their markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

