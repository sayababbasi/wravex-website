"use client"
import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    client: "Fintech Platform",
    title: "Global Payment Infrastructure",
    description: "A high-performance system processing $1M+ daily transactions with sub-second latency.",
    tags: ["React", "Go", "AWS"],
    color: "bg-brand-blue/5",
  },
  {
    client: "Healthcare SaaS",
    title: "AI-Powered Diagnostics",
    description: "An autonomous agent assisting doctors with real-time patient data analysis.",
    tags: ["Next.js", "Python", "LLMs"],
    color: "bg-brand-cyan/5",
  },
  {
    client: "E-Commerce Enterprise",
    title: "Headless Storefront",
    description: "A decoupled architecture enabling 3x faster page loads and multi-region deployment.",
    tags: ["Next.js", "Shopify", "Vercel"],
    color: "bg-gray-100",
  },
  {
    client: "Logistics Dashboard",
    title: "Real-time Fleet Tracking",
    description: "A comprehensive dashboard for monitoring 10,000+ vehicles globally.",
    tags: ["Vue", "Node.js", "WebSockets"],
    color: "bg-brand-navy-deep/5",
  }
]

export function ProjectsPreview() {
  const targetRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // To map 0 -> 1 scroll progress to 0% -> -[percent]% x offset
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <div className="absolute top-32 left-0 w-full px-6 md:px-12 lg:px-24 z-20 pointer-events-none">
          <div className="flex justify-between items-end max-w-[1400px] mx-auto w-full">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-brand-navy-deep">
              Featured Work.
            </h2>
            <Link href="/projects" className="pointer-events-auto group flex items-center gap-2 text-brand-blue hover:text-brand-navy-deep transition-colors mb-2 font-medium text-sm tracking-wide">
              View Archive
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-6 lg:gap-8 px-[10vw] pt-24">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-[85vw] md:w-[60vw] lg:w-[40vw] h-[50vh] max-h-[500px] shrink-0 flex flex-col justify-between p-8 lg:p-12 rounded-xl border border-border-subtle bg-white shadow-sm relative group hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-brand-blue font-semibold text-xs tracking-widest uppercase mb-4 block">
                  {project.client}
                </span>
                
                <h3 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4 text-brand-navy-deep leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary text-base lg:text-lg mb-8 max-w-sm leading-relaxed font-normal">
                  {project.description}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-md border border-border-subtle text-xs text-text-secondary font-medium bg-gray-50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Geometric Element */}
              <div className={`absolute right-8 top-8 w-24 h-24 rounded-full ${project.color} opacity-50 group-hover:scale-110 transition-transform duration-500`} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
