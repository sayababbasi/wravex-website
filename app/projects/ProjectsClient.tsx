"use client"
import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/data/projects"
import { CTA } from "@/components/sections/CTA"

export function ProjectsClient() {
  return (
    <>
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-white relative border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="text-brand-blue font-bold tracking-[0.15em] text-[10px] uppercase mb-6">
              SELECTED WORK
            </div>
            <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold tracking-tighter text-brand-navy-deep leading-[1.05] mb-8">
              Built to make an impact.
            </h1>
            <p className="text-text-secondary text-[18px] md:text-[22px] font-medium leading-[1.6] max-w-2xl">
              We engineer digital products that solve complex operational challenges and drive measurable growth for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col gap-12 md:gap-32">
            {projects.map((project, i) => (
              <motion.div 
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
              >
                
                <div className={`order-2 lg:order-${i % 2 === 0 ? '1' : '2'} aspect-[4/3] rounded-2xl relative overflow-hidden bg-gradient-to-br from-[#0A1629] to-[#040C1A] group shadow-xl`}>
                  <div className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(32,184,232,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(18,97,201,0.4) 0%, transparent 50%)'
                  }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white/5 font-black text-6xl whitespace-nowrap pointer-events-none uppercase tracking-widest mix-blend-overlay">
                    {project.category}
                  </div>
                </div>

                <div className={`order-1 lg:order-${i % 2 === 0 ? '2' : '1'} flex flex-col`}>
                  <div className="text-brand-blue font-bold tracking-[0.1em] text-[11px] uppercase mb-4">
                    {project.category}
                  </div>
                  <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-brand-navy-deep leading-[1.15] mb-6">
                    {project.title}
                  </h2>
                  <p className="text-text-secondary text-[16px] leading-[1.7] font-medium mb-10 max-w-lg">
                    {project.fullDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.technologies.slice(0, 5).map((tech, j) => (
                      <span key={j} className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[12px] font-bold text-brand-navy-deep shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-3 text-brand-navy-deep hover:text-brand-blue font-bold transition-colors duration-300 text-[14px] uppercase tracking-wide group w-max"
                  >
                    View Case Study
                    <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  )
}
