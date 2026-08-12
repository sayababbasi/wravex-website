"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { CTA } from "@/components/sections/CTA"

export default function AboutClient() {
  return (
    <>
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-white relative">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="text-brand-blue font-bold tracking-[0.15em] text-[10px] uppercase mb-6">
              WHO WE ARE
            </div>
            <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold tracking-tighter text-brand-navy-deep leading-[1.05] mb-8">
              Smart software for a faster world.
            </h1>
            <p className="text-text-secondary text-[18px] md:text-[22px] font-medium leading-[1.6] max-w-2xl">
              Wravex Innovation is a premier software engineering firm. We design, build, and scale resilient digital products that empower businesses to operate faster and smarter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 bg-[#FAFBFC] border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-brand-navy-deep leading-[1.1] mb-6">
                Our Philosophy
              </h2>
              <p className="text-text-secondary text-[16px] font-medium leading-[1.7]">
                We believe that technology should solve problems, not create them. We are obsessed with clean architecture, intuitive design, and scalable infrastructure.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {[
                { title: "Performance First", desc: "Speed is a feature. We architect our solutions from the ground up to load instantly and handle massive scale." },
                { title: "Design is Functional", desc: "Aesthetics must serve a purpose. Our interfaces are designed to reduce friction and guide users effortlessly." },
                { title: "Radical Transparency", desc: "We don't hide behind technical jargon. We maintain open communication and clear documentation." },
                { title: "Future-Proof Architecture", desc: "We don't chase fleeting trends. We build on battle-tested technologies that will stand the test of time." }
              ].map((val, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-[14px] mb-6">
                    0{i+1}
                  </div>
                  <h3 className="text-[18px] font-bold text-brand-navy-deep mb-3">
                    {val.title}
                  </h3>
                  <p className="text-text-secondary text-[14px] leading-[1.7] font-medium">
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
