"use client"
import * as React from "react"
import { motion } from "framer-motion"

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "AWS", "Docker", "Kubernetes", "Tailwind CSS"
]

export function Technologies() {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-[1400px] text-center">
        
        <div className="text-brand-blue font-bold tracking-[0.1em] text-[11px] uppercase mb-4">
          TECHNOLOGY WE USE
        </div>
        <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-brand-navy-deep leading-[1.1] mb-16 md:mb-20">
          Modern technologies for modern solutions.
        </h2>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center">
          {technologies.map((tech, i) => (
            <motion.div 
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-14 h-14 rounded bg-white flex items-center justify-center border border-gray-100 shadow-sm text-brand-navy-deep font-bold text-lg group-hover:border-brand-blue/30 group-hover:shadow-md transition-all duration-300">
                {tech.substring(0, 2)}
              </div>
              <span className="text-[12px] font-bold text-text-secondary group-hover:text-brand-navy-deep transition-colors duration-300">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
