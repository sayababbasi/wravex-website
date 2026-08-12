import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: {
    template: "%s | Wravex Innovation",
    default: "Wravex Innovation | Smart software for a faster world.",
  },
  description: "Wravex Innovation is a premier software engineering firm building scalable, resilient digital products that empower businesses to operate faster and smarter.",
  keywords: ["Software Development", "AI Solutions", "Web Development", "Mobile Apps", "Enterprise Software", "Automation"],
  openGraph: {
    title: "Wravex Innovation",
    description: "Smart software for a faster world.",
    url: "https://wravex.com",
    siteName: "Wravex Innovation",
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
