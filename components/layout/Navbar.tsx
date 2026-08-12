"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { MobileMenu } from "@/components/layout/MobileMenu"
import { ChevronDown, ArrowRight } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Solutions", href: "/solutions" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Wravex Innovation" 
              width={140} 
              height={40} 
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
              return (
                <div key={link.name} className="relative py-2 group">
                  <Link 
                    href={link.href}
                    className={cn(
                      "text-[15px] font-medium transition-colors flex items-center gap-1",
                      isActive ? "text-brand-blue" : "text-brand-navy-deep hover:text-brand-blue"
                    )}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60 mt-0.5" />}
                  </Link>
                  {isActive && (
                    <motion.div 
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    />
                  )}
                </div>
              )
            })}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4 shrink-0">
            <Button asChild size="sm" className="hidden lg:inline-flex h-10 px-6 rounded bg-brand-navy-deep hover:bg-brand-blue text-white transition-colors duration-300 shadow-md">
              <Link href="/contact">
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
            <MobileMenu navLinks={navLinks.map(l => ({ href: l.href, label: l.name }))} />
          </div>
        </div>
      </div>
    </header>
  )
}
