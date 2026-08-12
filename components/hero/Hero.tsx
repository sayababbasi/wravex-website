"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#FAFBFC] overflow-hidden border-b border-border-subtle">
      
      <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start pt-10"
          >
            <div className="flex items-center gap-3 text-brand-blue font-bold tracking-[0.15em] text-[11px] md:text-xs uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              SOFTWARE &bull; AI &bull; AUTOMATION
            </div>

            <h1 className="text-[48px] md:text-[68px] lg:text-[76px] font-black tracking-[-0.03em] leading-[1.05] mb-6 text-brand-navy-deep text-left">
              WE BUILD SMART <br className="hidden md:block"/>
              SOFTWARE FOR A <br className="hidden md:block"/>
              <span className="text-brand-blue">FASTER</span> WORLD.
            </h1>
            
            <p className="text-[17px] md:text-[19px] text-text-secondary max-w-lg mb-12 font-medium leading-[1.6] text-left">
              Nexora Digital Technologies builds intelligent digital products, modern applications and automation solutions designed around real business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="bg-[#1A56DB] hover:bg-[#1E40AF] text-white h-[52px] px-8 rounded font-semibold transition-all duration-300">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-[52px] px-8 rounded font-medium border-gray-200 text-text-primary hover:bg-gray-50 transition-colors duration-300">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-2 opacity-50" />
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-16 mt-4 border-t border-gray-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                Trusted by businesses to deliver impact
              </p>
              <div className="flex flex-wrap gap-8 opacity-40 grayscale">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-current rounded-sm"></div>
                  <span className="font-bold tracking-tight text-xl">logoipsum</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-current"></div>
                  <span className="font-black tracking-tighter text-xl">LOGOIPSUM</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-serif italic font-bold tracking-tight text-xl">logo ipsum</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold tracking-widest text-lg">LOGOIPSUM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual Graphic */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative h-full min-h-[600px] w-full"
          >
            {/* Highly sophisticated SVG Arrow composition tracking Nexora identity */}
            <div className="absolute right-[-10%] lg:right-[-20%] top-1/2 -translate-y-1/2 w-[140%] max-w-[900px] aspect-[4/3] pointer-events-none">
              <svg viewBox="0 0 900 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background Grid Lines for structure */}
                <path d="M0 450 L900 450 M0 500 L900 500 M0 550 L900 550" stroke="#E4E7EC" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M600 0 L600 600 M650 0 L650 600 M700 0 L700 600 M750 0 L750 600" stroke="#E4E7EC" strokeWidth="1" strokeDasharray="4 4" />

                {/* Sub-layers for depth mimicking the mockup */}
                <path d="M -100 480 Q 300 480, 500 200 L 480 150 Q 250 430, -100 430 Z" fill="url(#grad2)" opacity="0.4" />
                <path d="M 0 550 Q 400 550, 750 250 L 730 200 Q 350 500, 0 500 Z" fill="url(#grad2)" opacity="0.3" />
                
                {/* Main Dynamic Arrow */}
                <path d="M -100 400 Q 350 400, 700 100 L 750 150 L 820 20 L 670 50 L 710 90 Q 300 350, -100 350 Z" fill="url(#grad1)" />
                
                {/* Volumetric Overlay Layer */}
                <path d="M -100 350 Q 300 350, 710 90 L 670 50 L 820 20 L 750 150 L 700 100 Q 350 400, -100 400 Z" fill="url(#grad3)" style={{mixBlendMode:'overlay'}} opacity="0.7"/>

                {/* Light Flares / Energy Accents */}
                <circle cx="750" cy="100" r="150" fill="url(#glow)" opacity="0.5" />
                <circle cx="200" cy="400" r="200" fill="url(#glow)" opacity="0.3" />
                
                {/* Structural Accent Lines */}
                <path d="M 100 350 L 400 150" stroke="#20B8E8" strokeWidth="0.5" opacity="0.3" />
                <path d="M 200 450 L 600 200" stroke="#20B8E8" strokeWidth="0.5" opacity="0.2" />

                <defs>
                  <linearGradient id="grad1" x1="0" y1="450" x2="800" y2="50" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0B2A5B" />
                    <stop offset="40%" stopColor="#1261C9" />
                    <stop offset="100%" stopColor="#20B8E8" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0" y1="550" x2="800" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1261C9" stopOpacity="0" />
                    <stop offset="100%" stopColor="#20B8E8" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="grad3" x1="0" y1="350" x2="800" y2="20" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#72D9F5" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#72D9F5" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
