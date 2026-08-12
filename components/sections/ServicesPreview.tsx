"use client"
import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Brain, Code2, Smartphone, Workflow, Layers } from "lucide-react"

const services = [
  {
    num: "01",
    title: "AI Solutions",
    description: "Intelligent systems, AI agents and automation solutions that augment human capability.",
    icon: <Brain className="w-7 h-7 stroke-[1.5]" />,
    href: "/services/ai-solutions",
  },
  {
    num: "02",
    title: "Web Development",
    description: "High-performance websites and web applications built for scalability and growth.",
    icon: <Code2 className="w-7 h-7 stroke-[1.5]" />,
    href: "/services/web-development",
  },
  {
    num: "03",
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver seamless user experiences.",
    icon: <Smartphone className="w-7 h-7 stroke-[1.5]" />,
    href: "/services/mobile-development",
  },
  {
    num: "04",
    title: "Automation",
    description: "Streamline workflows, reduce manual work and increase efficiency with smart automation.",
    icon: <Workflow className="w-7 h-7 stroke-[1.5]" />,
    href: "/services/automation",
  },
  {
    num: "05",
    title: "Business Software",
    description: "Custom business platforms and enterprise software tailored to your operations.",
    icon: <Layers className="w-7 h-7 stroke-[1.5]" />,
    href: "/services/business-software",
  }
]

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32 h-fit">
            <div className="flex items-center gap-2 text-brand-blue font-bold tracking-[0.1em] text-[11px] md:text-xs uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              WHAT WE DO
            </div>
            
            <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight text-brand-navy-deep leading-[1.1] mb-6">
              Technology Built<br/>Around Your Business.
            </h2>
            
            <p className="text-text-secondary text-[16px] md:text-[17px] leading-relaxed max-w-md mb-10 font-medium">
              From intelligent systems to enterprise platforms, we design, build and deliver software that drives real business results.
            </p>
            
            <Link 
              href="/services" 
              className="group flex items-center gap-2 text-brand-blue hover:text-brand-navy-deep font-semibold transition-colors duration-300 text-[15px]"
            >
              Explore all services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column - Service List */}
          <div className="lg:col-span-7 flex flex-col">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 py-8 border-b border-gray-200 first:border-t hover:bg-gray-50/50 transition-colors duration-300 px-4 -mx-4 sm:mx-0 sm:px-0"
              >
                <div className="flex items-center gap-6 shrink-0 sm:w-28">
                  <span className="text-brand-blue font-bold text-lg">{service.num}</span>
                  <div className="text-brand-navy-deep group-hover:text-brand-blue transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-12 gap-4 items-start sm:items-center">
                  <div className="sm:col-span-5 font-bold text-lg md:text-xl text-brand-navy-deep group-hover:text-brand-blue transition-colors duration-300">
                    {service.title}
                  </div>
                  <div className="sm:col-span-6 text-[13px] md:text-[14px] text-text-secondary leading-[1.6] sm:pr-4 font-medium">
                    {service.description}
                  </div>
                  <div className="hidden sm:flex sm:col-span-1 justify-end text-brand-blue/50 group-hover:text-brand-blue transition-colors duration-300">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <Link href={service.href} className="absolute inset-0 z-10">
                  <span className="sr-only">Learn more about {service.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
