"use client"
import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ArrowRight, UserCheck, Code, Layers, Sparkles, Handshake } from "lucide-react"

const principles = [
  {
    title: "Business First",
    description: "We start with your goals and build solutions that drive impact.",
    icon: <UserCheck className="w-7 h-7 stroke-[1.5]" />
  },
  {
    title: "Purposeful Engineering",
    description: "Every feature has a reason. We build what matters.",
    icon: <Code className="w-7 h-7 stroke-[1.5]" />
  },
  {
    title: "Scalable Foundation",
    description: "Our solutions are built to grow with your business.",
    icon: <Layers className="w-7 h-7 stroke-[1.5]" />
  },
  {
    title: "Human-Centered Design",
    description: "Great software is simple, intuitive and delightful.",
    icon: <Sparkles className="w-7 h-7 stroke-[1.5]" />
  },
  {
    title: "Long-Term Partnership",
    description: "We succeed when our clients do. Always.",
    icon: <Handshake className="w-7 h-7 stroke-[1.5]" />
  }
]

export function WhyWravex() {
  return (
    <section className="py-24 md:py-32 bg-white relative border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left: Statement */}
          <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-32 h-fit">
            <div className="text-brand-blue font-bold tracking-[0.1em] text-[11px] uppercase mb-6">
              WHY WRAVEX
            </div>
            
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-brand-navy-deep leading-[1.15] mb-6">
              We combine innovation with reliable execution.
            </h2>
            
            <p className="text-text-secondary text-[16px] leading-relaxed mb-10 font-medium max-w-sm">
              Our approach is simple — understand the problem, design the right solution, and build it with precision. We focus on long-term value, not just code.
            </p>
            
            <Button asChild variant="outline" className="rounded-full border-gray-300 text-brand-navy-deep font-semibold text-sm hover:bg-gray-50 hover:text-brand-blue transition-colors px-6 h-11">
              <Link href="/about">
                Know More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Right: Principles Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-x-10 md:gap-y-16">
            {principles.map((principle, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-start"
              >
                <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-blue mb-6 shadow-sm">
                  {principle.icon}
                </div>
                <h3 className="text-[17px] font-bold text-brand-navy-deep mb-3 tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-[14px] text-text-secondary font-medium leading-[1.6]">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
