import * as React from "react"
import Link from "next/link"
import Image from "next/image"

const LinkedinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>)
const GithubIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>)
const TwitterIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>)
const YoutubeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>)

export function Footer() {
  return (
    <footer className="bg-[#0A1629] text-gray-300 py-16 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-6 block">
              <Image 
                src="/logo.png" 
                alt="Wravex Innovation" 
                width={140} 
                height={40} 
                className="h-10 w-auto opacity-90"
              />
            </Link>
            <p className="text-[14px] font-medium text-gray-400 mb-8 max-w-[250px]">
              Smart software for a faster world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors duration-300 text-gray-400" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors duration-300 text-gray-400" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors duration-300 text-gray-400" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors duration-300 text-gray-400" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-[14px] text-gray-400 hover:text-brand-cyan transition-colors">About Us</Link></li>
              <li><Link href="/process" className="text-[14px] text-gray-400 hover:text-brand-cyan transition-colors">Our Process</Link></li>
              <li><Link href="/careers" className="text-[14px] text-gray-400 hover:text-brand-cyan transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-[14px] text-gray-400 hover:text-brand-cyan transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/ai-solutions" className="text-[14px] text-gray-400 hover:text-brand-cyan transition-colors">AI Solutions</Link></li>
              <li><Link href="/services/web-development" className="text-[14px] text-gray-400 hover:text-brand-cyan transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-development" className="text-[14px] text-gray-400 hover:text-brand-cyan transition-colors">Mobile Development</Link></li>
              <li><Link href="/services/automation" className="text-[14px] text-gray-400 hover:text-brand-cyan transition-colors">Automation</Link></li>
              <li><Link href="/services/business-software" className="text-[14px] text-gray-400 hover:text-brand-cyan transition-colors">Business Software</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-[14px] text-gray-400 hover:text-white transition-colors"><a href="mailto:hello@wravex.com">hello@wravex.com</a></li>
              <li className="text-[14px] text-gray-400">+1 (123) 456-7890</li>
              <li className="text-[14px] text-gray-500 leading-relaxed mt-2">
                123 Innovation Street<br />
                San Francisco, CA 94107<br />
                USA
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Wravex Innovation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
