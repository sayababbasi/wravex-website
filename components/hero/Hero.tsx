"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { HeroGraphic } from "./HeroGraphic"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column - Asymmetric width */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold tracking-wide uppercase mb-6">
                Wravex Innovation
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-brand-navy-deep leading-[1.1] mb-6"
            >
              We Build Smart<br />
              Software for a<br />
              <span className="text-brand-blue">Faster World.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed"
            >
              Wravex Innovation builds AI-powered solutions, modern web and mobile applications, intelligent automation, and custom software designed around real business needs.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" variant="primary">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </div>

          {/* Graphic Column */}
          <div className="lg:col-span-5 relative z-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <HeroGraphic />
            </motion.div>
          </div>
          
        </div>
      </Container>
    </section>
  )
}
