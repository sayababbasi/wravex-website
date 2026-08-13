import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL('https://axiorasoftware.it.com'),
  title: {
    template: "%s | Axiora Software",
    default: "Axiora Software | Smart software for a faster world.",
  },
  description: "Axiora Software builds intelligent software, AI solutions, digital products and automation systems for modern businesses.",
  keywords: ["Software Development", "AI Solutions", "Web Development", "Mobile Apps", "Enterprise Software", "Automation", "Lahore", "Pakistan"],
  openGraph: {
    title: "Axiora Software | Smart software for a faster world.",
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
  twitter: {
    card: "summary_large_image",
    title: "Axiora Software",
    description: "Smart software for a faster world.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
