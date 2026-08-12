"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const capabilities = [
  {
    category: "AI Solutions",
    items: ["AI Agents", "Generative AI", "Machine Learning", "RAG Systems", "Intelligent Automation", "AI-powered Applications"]
  },
  {
    category: "Web Development",
    items: ["Corporate Websites", "SaaS Platforms", "Web Applications", "Dashboards", "E-commerce", "API Integrations"]
  },
  {
    category: "Mobile Development",
    items: ["iOS", "Android", "Cross-platform", "Mobile Applications", "API Integration"]
  },
  {
    category: "Automation",
    items: ["Workflow Automation", "Business Process Automation", "AI Automation", "Data Workflows", "System Integrations"]
  },
  {
    category: "Business Software",
    items: ["ERP", "CRM", "LMS", "Inventory Systems", "Management Platforms", "Custom Enterprise Applications"]
  }
]

export function Capabilities() {
  return (
    <section className="py-24 bg-gray-50/50 border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-navy-deep mb-4">
            Comprehensive Engineering Capabilities
          </h2>
          <p className="text-text-secondary text-[17px] font-medium leading-relaxed">
            We provide end-to-end technical expertise across the modern software stack, allowing us to build the exact solution your business needs without compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 xl:gap-6">
          {capabilities.map((cap, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="font-bold text-brand-navy-deep uppercase tracking-[0.1em] text-[11px] mb-6 pb-4 border-b border-gray-200">
                {cap.category}
              </h3>
              <ul className="space-y-4">
                {cap.items.map((item, j) => (
                  <li key={j} className="flex items-start text-[14px] text-text-secondary font-medium leading-tight">
                    <Check className="w-3.5 h-3.5 text-brand-blue mr-3 shrink-0 mt-0.5 opacity-70" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
