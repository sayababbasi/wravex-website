"use client"
import * as React from "react"
import { motion } from "framer-motion"

const steps = [
  { num: "01", title: "Discover", description: "We understand your business, users and challenges." },
  { num: "02", title: "Plan", description: "We define the right strategy, architecture and roadmap." },
  { num: "03", title: "Design", description: "We craft intuitive interfaces and seamless experiences." },
  { num: "04", title: "Build", description: "We develop robust, scalable and secure solutions." },
  { num: "05", title: "Deliver", description: "We test, deploy and support for long-term success." }
]

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFBFC] border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        <div className="mb-16 md:mb-24">
          <div className="text-brand-blue font-bold tracking-[0.1em] text-[11px] uppercase mb-4">
            OUR PROCESS
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-brand-navy-deep leading-[1.1]">
            A clear process. Predictable results.
          </h2>
        </div>

        <div className="relative z-10">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-6 left-6 right-6 h-[1px] border-t-2 border-dashed border-gray-200 -z-10" />

          {/* Connecting Line (Mobile) */}
          <div className="lg:hidden absolute left-6 top-6 bottom-6 w-[1px] border-l-2 border-dashed border-gray-200 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-row lg:flex-col items-start gap-6 lg:gap-8"
              >
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-[14px] shrink-0 shadow-md">
                  {step.num}
                </div>
                <div className="pt-1 lg:pt-0">
                  <h3 className="text-xl font-bold text-brand-navy-deep mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-text-secondary font-medium leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
