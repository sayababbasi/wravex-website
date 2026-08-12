"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Solutions as SolutionsSection } from "@/components/sections/Solutions"
import { CTA } from "@/components/sections/CTA"

export function SolutionsClient() {
  return (
    <>
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-[#FAFBFC] border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="text-brand-blue font-bold tracking-[0.15em] text-[10px] uppercase mb-6">
              OUR SOLUTIONS
            </div>
            <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold tracking-tighter text-brand-navy-deep leading-[1.05] mb-8">
              Transforming operations through intelligent automation.
            </h1>
            <p className="text-text-secondary text-[18px] md:text-[22px] font-medium leading-[1.6] max-w-2xl">
              We design and implement comprehensive technological solutions that directly address your most complex operational bottlenecks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Re-use the existing Solutions component which was built for the homepage */}
      <SolutionsSection />

      <CTA />
    </>
  )
}
