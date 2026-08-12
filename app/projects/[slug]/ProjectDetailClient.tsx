"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Project } from "@/data/projects"
import { CTA } from "@/components/sections/CTA"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <>
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-brand-navy-deep relative overflow-hidden">
        {project.image && (
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover opacity-20 mix-blend-luminosity pointer-events-none" 
            priority
          />
        )}
        <div className="absolute inset-0 bg-brand-navy-deep/60" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0" />
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          
          <Link href="/projects" className="inline-flex items-center gap-2 text-brand-cyan hover:text-white transition-colors text-[13px] font-bold uppercase tracking-widest mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="text-white/60 font-bold tracking-[0.15em] text-[10px] uppercase mb-4">
              {project.category}
            </div>
            <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold tracking-tighter text-white leading-[1.05] mb-8">
              {project.title}
            </h1>
            <p className="text-gray-300 text-[18px] md:text-[22px] font-medium leading-[1.6] max-w-3xl">
              {project.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <h2 className="text-[24px] font-bold text-brand-navy-deep mb-6">The Challenge</h2>
              <div className="w-12 h-1 bg-brand-blue mb-8" />
              <p className="text-text-secondary text-[16px] md:text-[17px] leading-[1.8] font-medium">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <h2 className="text-[24px] font-bold text-brand-navy-deep mb-6">The Solution</h2>
              <div className="w-12 h-1 bg-brand-cyan mb-8" />
              <p className="text-text-secondary text-[16px] md:text-[17px] leading-[1.8] font-medium">
                {project.solution}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-[#FAFBFC] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px] text-center">
          <h3 className="text-[12px] font-bold tracking-widest uppercase text-brand-navy-deep mb-12">
            Technologies Used
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-5 py-2.5 bg-white border border-gray-200 rounded text-[14px] font-bold text-brand-navy-deep shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
