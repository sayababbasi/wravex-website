"use client"
import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { projects } from "@/data/projects"

export function Projects() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFBFC] border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="text-brand-blue font-bold tracking-[0.1em] text-[11px] uppercase mb-4">
              SELECTED WORK
            </div>
            <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight text-brand-navy-deep leading-[1.1]">
              Real Projects. Real Impact.
            </h2>
          </div>
          <Link 
            href="/projects" 
            className="group flex items-center gap-2 text-brand-blue hover:text-brand-navy-deep font-semibold transition-colors duration-300 text-[14px]"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative h-[400px] md:h-[450px] rounded-xl overflow-hidden bg-brand-navy-deep flex flex-col justify-end p-8 md:p-10"
            >
              {/* Fake Image Background Overlay for Premium Aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/95 via-brand-navy-deep/60 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1B4282] via-brand-navy-deep to-brand-navy-deep z-0 scale-100 group-hover:scale-105 transition-transform duration-700" />
              
              <div className="relative z-20">
                <span className="text-brand-cyan font-bold tracking-[0.15em] text-[10px] uppercase mb-4 block opacity-90">
                  {project.category}
                </span>
                <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-4 tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-[14px] md:text-[15px] font-medium leading-[1.6] max-w-sm">
                  {project.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="absolute bottom-8 md:bottom-10 right-8 md:right-10 z-20 w-11 h-11 bg-white rounded flex items-center justify-center text-brand-navy-deep shadow-lg transform transition-all duration-300 group-hover:scale-110">
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </div>

              <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-30">
                <span className="sr-only">View {project.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
