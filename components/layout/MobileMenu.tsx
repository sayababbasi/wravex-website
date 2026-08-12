"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/ui/Logo"
import { Button } from "@/components/ui/Button"

interface MobileMenuProps {
  navLinks: { href: string; label: string }[]
}

export function MobileMenu({ navLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const drawerRef = React.useRef<HTMLDivElement>(null)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  // Prevent scroll when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Handle Escape Key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Handle Focus Trap
  React.useEffect(() => {
    if (isOpen && drawerRef.current) {
      // Small delay to allow animation to start before focusing
      const timeoutId = setTimeout(() => {
        const focusable = drawerRef.current?.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') as HTMLElement
        if (focusable) {
          focusable.focus()
        }
      }, 100)
      return () => clearTimeout(timeoutId)
    } else if (!isOpen && buttonRef.current) {
      // Restore focus to button when closed
      // Avoid stealing focus on initial mount
      if (document.activeElement === document.body) return;
      buttonRef.current.focus()
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  // Drawer Animation Variants
  const drawerVariants = {
    closed: { 
      x: "100%",
      transition: { 
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] 
      }
    },
    open: { 
      x: 0,
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  }

  // Backdrop Animation Variants
  const backdropVariants = {
    closed: { opacity: 0, pointerEvents: "none" as const, transition: { duration: 0.3 } },
    open: { opacity: 1, pointerEvents: "auto" as const, transition: { duration: 0.4 } }
  }

  // Item staggered animation
  const itemVariants = {
    closed: { opacity: 0, x: 15 },
    open: (i: number) => ({
      opacity: 1, 
      x: 0,
      transition: {
        delay: 0.15 + (i * 0.04),
        duration: 0.3,
        ease: "easeOut"
      }
    })
  }

  return (
    <div className="lg:hidden flex items-center justify-center">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(true)}
        className="p-2 -mr-2 text-brand-navy-deep hover:text-brand-blue transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-md"
        aria-label="Open mobile menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        <Menu className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={backdropVariants}
              onClick={closeMenu}
              className="fixed inset-0 bg-[#0A1223]/25 z-[100]"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-navigation"
              ref={drawerRef}
              initial="closed"
              animate="open"
              exit="closed"
              variants={drawerVariants}
              className="fixed top-0 right-0 w-[85vw] max-w-[380px] h-[100dvh] bg-white z-[101] shadow-[-10px_0_40px_rgba(0,0,0,0.08)] flex flex-col overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              style={{
                paddingTop: 'env(safe-area-inset-top)',
                paddingBottom: 'env(safe-area-inset-bottom)'
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 shrink-0">
                <div onClick={closeMenu}>
                  <Logo />
                </div>
                <button
                  onClick={closeMenu}
                  className="w-10 h-10 flex items-center justify-center text-brand-navy-deep hover:text-brand-blue hover:bg-gray-50 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue -mr-2"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col px-6 py-8 gap-6 flex-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                  return (
                    <motion.div key={link.href} custom={i} variants={itemVariants} initial="closed" animate="open" exit="closed">
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={cn(
                          "block text-[22px] font-semibold tracking-tight transition-colors",
                          isActive ? "text-brand-blue" : "text-brand-navy-deep hover:text-brand-blue"
                        )}
                      >
                        {isActive && <span className="text-brand-blue mr-2" aria-hidden="true">→</span>}
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}
                
                <motion.div custom={navLinks.length} variants={itemVariants} initial="closed" animate="open" exit="closed">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className={cn(
                      "block text-[22px] font-semibold tracking-tight transition-colors",
                      pathname === "/contact" ? "text-brand-blue" : "text-brand-navy-deep hover:text-brand-blue"
                    )}
                  >
                    {pathname === "/contact" && <span className="text-brand-blue mr-2" aria-hidden="true">→</span>}
                    Contact
                  </Link>
                </motion.div>
              </nav>

              {/* CTA at Bottom */}
              <motion.div 
                custom={navLinks.length + 1} 
                variants={itemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="px-6 pb-10 mt-auto shrink-0"
              >
                <Button 
                  asChild 
                  className="w-full h-[52px] bg-brand-navy-deep hover:bg-brand-blue text-white font-semibold rounded text-[16px] transition-colors shadow-sm"
                >
                  <Link href="/contact" onClick={closeMenu}>
                    Start a Project
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
