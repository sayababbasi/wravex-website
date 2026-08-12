import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: {
    template: "%s | Nexora Digital Technologies",
    default: "Nexora Digital Technologies | Smart software for a faster world.",
  },
  description: "Nexora Digital Technologies builds intelligent software, AI solutions, digital products and automation systems for modern businesses.",
  keywords: ["Software Development", "AI Solutions", "Web Development", "Mobile Apps", "Enterprise Software", "Automation"],
  openGraph: {
    title: "Nexora Digital Technologies",
    description: "Smart software for a faster world.",
    url: "https://nexoradigitaltechnologies.com",
    siteName: "Nexora Digital Technologies",
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
