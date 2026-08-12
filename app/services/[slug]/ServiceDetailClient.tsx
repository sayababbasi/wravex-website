"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Service } from "@/data/services"
import { CTA } from "@/components/sections/CTA"

export function ServiceDetailClient({ service }: { service: Service }) {
  return (
    <>
      {/* Detail Hero */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-brand-navy-deep relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="text-brand-cyan font-bold tracking-[0.15em] text-[10px] uppercase mb-6">
              SERVICE CAPABILITY
            </div>
            <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold tracking-tighter text-white leading-[1.05] mb-8">
              {service.title}
            </h1>
            <p className="text-gray-300 text-[18px] md:text-[22px] font-medium leading-[1.6] max-w-2xl">
              {service.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-12 items-start">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-brand-navy-deep leading-[1.15] mb-6">
                What we build.
              </h2>
              <p className="text-text-secondary text-[17px] font-medium leading-[1.6] max-w-md mb-12">
                Our {service.title.toLowerCase()} practice focuses on engineering resilient, scalable architectures that provide immediate business value.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {service.capabilities.map((cap, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="w-10 h-10 rounded bg-white border border-gray-200 flex items-center justify-center text-brand-navy-deep shadow-sm font-bold text-xs mb-4">
                      0{i + 1}
                    </div>
                    <h4 className="font-bold text-brand-navy-deep text-[15px] leading-tight">{cap}</h4>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#FAFBFC] border border-gray-100 rounded-2xl p-8 md:p-14 shadow-sm relative overflow-hidden"
            >
              <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-navy-deep mb-10 border-b border-gray-200 pb-4">
                Implementation Workflow
              </h3>
              
              <div className="relative">
                <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-gray-200" />
                
                {service.workflow.map((step, i) => (
                  <div key={i} className="flex gap-6 relative z-10 mb-10 last:mb-0">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-brand-blue flex items-center justify-center shrink-0 shadow-sm">
                      <div className="w-2.5 h-2.5 bg-brand-blue rounded-full" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-brand-navy-deep font-bold text-[15px] mb-1">{step.title}</h4>
                      <p className="text-text-secondary text-[14px] font-medium leading-[1.6]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 max-w-[1400px] text-center">
          <div className="text-brand-blue font-bold tracking-[0.1em] text-[11px] uppercase mb-4">
            TECHNOLOGY STACK
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-brand-navy-deep leading-[1.1] mb-16">
            Engineered with modern tools.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {service.technologies.map((tech, i) => (
              <span key={i} className="px-6 py-3 bg-white border border-gray-200 rounded text-[15px] font-bold text-brand-navy-deep shadow-sm">
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
