"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

interface MobileMenuProps {
  navLinks: { href: string; label: string }[]
}

export function MobileMenu({ navLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  // Close menu when route changes via onClick instead of useEffect to avoid cascading render

  // Prevent scroll when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 -mr-2 text-brand-navy-deep hover:text-brand-blue transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Full screen panel */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col">
          <div className="flex items-center justify-between p-4 px-4 md:px-8">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <div className="w-8 h-8 rounded-sm bg-brand-blue flex items-center justify-center text-white font-bold">
                W
              </div>
              <span className="font-bold text-xl tracking-tight text-brand-navy-deep">
                WRAVEX
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 -mr-2 text-brand-navy-deep hover:text-brand-blue transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-8 p-4">
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-2xl font-semibold transition-colors hover:text-brand-blue",
                    pathname === link.href ? "text-brand-blue" : "text-brand-navy-deep"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={cn(
                  "text-2xl font-semibold transition-colors hover:text-brand-blue",
                  pathname === "/contact" ? "text-brand-blue" : "text-brand-navy-deep"
                )}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <Button asChild variant="primary" size="lg" className="w-full max-w-xs mt-4">
              <Link href="/contact" onClick={() => setIsOpen(false)}>Start a Project</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
