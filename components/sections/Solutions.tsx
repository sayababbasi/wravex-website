"use client"
import * as React from "react"
import { motion } from "framer-motion"

export function Solutions() {
  return (
    <section className="py-24 md:py-32 bg-white relative border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-12 items-center">
          
          {/* Left: Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:pr-12"
          >
            <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-brand-navy-deep leading-[1.1] mb-6">
              Technology That Moves Your Business Forward.
            </h2>
            <p className="text-text-secondary text-[17px] font-medium leading-relaxed max-w-md">
              We don&apos;t just write code. We build scalable digital products and intelligent workflows that drive better efficiency, smarter processes, and measurable growth.
            </p>
          </motion.div>

          {/* Right: Flow Diagram */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#FAFBFC] border border-gray-100 rounded-xl p-8 md:p-14 shadow-sm"
          >
            <div className="flex flex-col relative max-w-md mx-auto">
              {/* Connecting Line */}
              <div className="absolute left-6 top-8 bottom-8 w-px bg-gray-200" />
              
              <div className="flex gap-6 relative z-10 mb-12">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm text-brand-navy-deep">
                  <span className="font-bold text-xs tracking-wider">01</span>
                </div>
                <div className="pt-2">
                  <h4 className="text-brand-navy-deep font-bold text-xs tracking-[0.1em] uppercase mb-1">Business Need</h4>
                  <p className="text-text-secondary text-[14px] font-medium">Identifying the core bottleneck or opportunity.</p>
                </div>
              </div>

              <div className="flex gap-6 relative z-10 mb-12">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm text-brand-navy-deep">
                  <span className="font-bold text-xs tracking-wider">02</span>
                </div>
                <div className="pt-2">
                  <h4 className="text-brand-navy-deep font-bold text-xs tracking-[0.1em] uppercase mb-1">Technology</h4>
                  <p className="text-text-secondary text-[14px] font-medium">Selecting the right modern software stack.</p>
                </div>
              </div>

              <div className="flex gap-6 relative z-10 mb-12 group">
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center shrink-0 shadow-md text-white">
                  <span className="font-bold text-xs tracking-wider">03</span>
                </div>
                <div className="pt-2">
                  <h4 className="text-brand-blue font-bold text-xs tracking-[0.1em] uppercase mb-1">Solution</h4>
                  <p className="text-text-secondary text-[14px] font-medium">Custom engineering and precise execution.</p>
                </div>
              </div>

              <div className="flex gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-brand-navy-deep flex items-center justify-center shrink-0 shadow-md text-white">
                  <span className="font-bold text-xs tracking-wider">04</span>
                </div>
                <div className="pt-2">
                  <h4 className="text-brand-navy-deep font-bold text-xs tracking-[0.1em] uppercase mb-1">Business Value</h4>
                  <p className="text-brand-navy-deep/80 text-[14px] font-medium">Better efficiency, connected systems, scalable growth.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
