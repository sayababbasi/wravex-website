"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

export function HeroGraphic() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-brand-cyan/5 rounded-full blur-3xl opacity-60" />
      
      {/* Main geometric shapes */}
      <div className="relative w-full h-full max-w-lg mx-auto">
        <motion.div
          animate={shouldReduceMotion ? {} : { 
            y: [-10, 10, -10],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-blue/10 rounded-2xl backdrop-blur-md border border-white/50 shadow-xl"
        />
        
        <motion.div
          animate={shouldReduceMotion ? {} : { 
            y: [15, -15, 15],
            x: [-5, 5, -5]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-brand-cyan/20 to-brand-blue/5 rounded-full backdrop-blur-md border border-white/30 shadow-lg"
        />

        <motion.div
          animate={shouldReduceMotion ? {} : { 
            y: [-5, 5, -5],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-brand-navy/5 rounded-[40px] rotate-12 backdrop-blur-sm border border-white/40"
        />

        {/* Abstract upward arrow / ribbon representation */}
        <div className="absolute inset-0 flex items-center justify-center">
           <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M120 40L200 120H150V200H90V120H40L120 40Z" 
                fill="url(#paint0_linear)"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="paint0_linear" x1="120" y1="40" x2="120" y2="200" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#20B8E8" stopOpacity="0.8"/>
                  <stop offset="1" stopColor="#1261C9" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
           </svg>
        </div>
      </div>
    </div>
  )
}
