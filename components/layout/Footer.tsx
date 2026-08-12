import Link from "next/link"
import { Container } from "@/components/ui/Container"

export function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-sm bg-brand-cyan flex items-center justify-center text-brand-navy-deep font-bold">
                W
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                WRAVEX
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm text-lg">
              Smart software for a faster world. We design and build intelligent digital solutions.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg mb-2">Company</h4>
            <Link href="/" className="text-gray-400 hover:text-brand-cyan transition-colors">Home</Link>
            <Link href="/about" className="text-gray-400 hover:text-brand-cyan transition-colors">About</Link>
            <Link href="/services" className="text-gray-400 hover:text-brand-cyan transition-colors">Services</Link>
            <Link href="/projects" className="text-gray-400 hover:text-brand-cyan transition-colors">Projects</Link>
            <Link href="/contact" className="text-gray-400 hover:text-brand-cyan transition-colors">Contact</Link>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg mb-2">Services</h4>
            <Link href="/services/ai-solutions" className="text-gray-400 hover:text-brand-cyan transition-colors">AI Solutions</Link>
            <Link href="/services/web-development" className="text-gray-400 hover:text-brand-cyan transition-colors">Web Development</Link>
            <Link href="/services/mobile-development" className="text-gray-400 hover:text-brand-cyan transition-colors">Mobile Development</Link>
            <Link href="/services/automation" className="text-gray-400 hover:text-brand-cyan transition-colors">Automation</Link>
            <Link href="/services/business-software" className="text-gray-400 hover:text-brand-cyan transition-colors">Business Software</Link>
          </div>

          {/* Connect & Contact */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg mb-2">Connect</h4>
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">X (Twitter)</a>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg mb-2">Contact</h4>
              <a href="mailto:hello@wravex.com" className="text-gray-400 hover:text-brand-cyan transition-colors">hello@wravex.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Wravex Innovation. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
