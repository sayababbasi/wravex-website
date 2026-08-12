"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiAmazonaws, 
  SiDocker, 
  SiKubernetes, 
  SiTailwindcss 
} from "react-icons/si"

const technologies = [
  { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-black" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Node.js", Icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Python", Icon: SiPython, color: "text-[#3776AB]" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "AWS", Icon: SiAmazonaws, color: "text-[#232F3E]" },
  { name: "Docker", Icon: SiDocker, color: "text-[#2496ED]" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "text-[#326CE5]" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-[#06B6D4]" }
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
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center border border-gray-100 shadow-sm group-hover:border-brand-blue/30 group-hover:shadow-md transition-all duration-300">
                <tech.Icon className={`w-8 h-8 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ${tech.color} drop-shadow-sm`} />
              </div>
              <span className="text-[13px] font-bold text-text-secondary group-hover:text-brand-navy-deep transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
