"use client"
import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/data/services"
import { CTA } from "@/components/sections/CTA"

export function ServicesClient() {
  return (
    <>
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-brand-navy-deep relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="text-brand-cyan font-bold tracking-[0.15em] text-[10px] uppercase mb-6">
              OUR SERVICES
            </div>
            <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold tracking-tighter text-white leading-[1.05] mb-8">
              Engineering solutions for complex problems.
            </h1>
            <p className="text-gray-300 text-[18px] md:text-[20px] font-medium leading-[1.6] max-w-2xl">
              We provide end-to-end technical expertise across the modern software stack, allowing us to build the exact solution your business needs without compromise.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col gap-32">
            {services.map((service, i) => (
              <div key={service.slug} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-5 lg:sticky lg:top-32"
                >
                  <div className="text-brand-blue font-bold tracking-[0.1em] text-[11px] uppercase mb-4">
                    0{i + 1}
                  </div>
                  <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-brand-navy-deep leading-[1.15] mb-6">
                    {service.title}
                  </h2>
                  <p className="text-text-secondary text-[16px] leading-[1.7] font-medium mb-8">
                    {service.fullDescription}
                  </p>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-brand-navy-deep hover:text-brand-blue font-bold transition-colors duration-300 border-b-2 border-brand-navy-deep hover:border-brand-blue pb-1 text-[14px] uppercase tracking-wide"
                  >
                    Explore {service.title}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-7 bg-[#FAFBFC] border border-gray-100 rounded-2xl p-8 md:p-14 shadow-sm"
                >
                  <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-navy-deep mb-8 border-b border-gray-200 pb-4">
                    Core Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                    {service.capabilities.map((cap, j) => (
                      <div key={j} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 mr-3 shrink-0 opacity-70" />
                        <span className="text-[15px] font-medium text-text-secondary leading-tight">{cap}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-navy-deep mb-8 border-b border-gray-200 pb-4">
                    Key Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech, j) => (
                      <span key={j} className="px-4 py-2 bg-white border border-gray-200 rounded text-[13px] font-semibold text-brand-navy-deep shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
