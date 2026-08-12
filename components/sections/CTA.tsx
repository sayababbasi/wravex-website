"use client"
import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-navy-deep overflow-hidden">
      
      {/* Background Graphic matching the mockup */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-40 transform translate-x-1/4 translate-y-1/4 w-full max-w-[900px] aspect-square">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M 50 450 Q 250 450, 450 100 L 500 150 L 550 0 L 420 40 L 470 90 Q 250 400, 50 400 Z" fill="url(#ctaGrad)" />
          <defs>
            <linearGradient id="ctaGrad" x1="0" y1="500" x2="500" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1261C9" stopOpacity="0" />
              <stop offset="100%" stopColor="#20B8E8" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:border-l-4 lg:border-brand-blue pl-0 lg:pl-10 max-w-xl"
          >
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-white leading-[1.1] mb-2">
              Have an idea?
            </h2>
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-brand-cyan leading-[1.1]">
              Let&apos;s build it together.
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start lg:items-end max-w-md lg:text-right"
          >
            <p className="text-gray-300 text-[16px] md:text-[17px] font-medium leading-[1.6] mb-8 text-left lg:text-right">
              Tell us what you&apos;re trying to build, improve or automate. We&apos;ll help turn your idea into a powerful digital solution.
            </p>
            <Button asChild size="lg" className="h-14 px-8 rounded bg-white hover:bg-gray-100 text-brand-navy-deep font-bold text-base transition-colors duration-300 shadow-lg">
              <Link href="/contact">
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
