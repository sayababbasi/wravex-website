import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: {
    template: "%s | Axiora Software",
    default: "Axiora Software | Smart software for a faster world.",
  },
  description: "Axiora Software builds intelligent software, AI solutions, digital products and automation systems for modern businesses.",
  keywords: ["Software Development", "AI Solutions", "Web Development", "Mobile Apps", "Enterprise Software", "Automation"],
  openGraph: {
    title: "Axiora Software",
    description: "Axiora Software builds intelligent software, AI solutions, digital products and automation systems for modern businesses.",
    url: "https://axiorasoftware.it.com",
    siteName: "Axiora Software",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Axiora Software Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  }
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-background text-text-primary selection:bg-brand-cyan/30 selection:text-white`}>
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
