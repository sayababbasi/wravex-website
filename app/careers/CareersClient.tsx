"use client"
import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function CareersClient() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setFormStatus('success')
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    }
  }

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="text-brand-blue font-bold tracking-[0.15em] text-[10px] uppercase mb-6">
                CAREERS AT AXIORA
              </div>
              <h1 className="text-[44px] md:text-[56px] lg:text-[72px] font-bold tracking-tighter text-brand-navy-deep leading-[1.05] mb-6">
                Build the Future of<br />
                <span className="text-brand-blue">Software.</span>
              </h1>
              <p className="text-text-secondary text-[18px] md:text-[20px] font-medium leading-[1.6] max-w-lg">
                We are always looking for exceptional engineers, designers, and thinkers. If you love solving complex problems with modern technology, you belong here.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="/careers/careers-hero.png" 
                alt="Careers at Axiora Software" 
                fill 
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. OPEN ROLES / APPLICATION FORM */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col"
            >
              <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-brand-navy-deep mb-6">Join the Team</h2>
              <p className="text-text-secondary text-[16px] md:text-[18px] font-medium leading-[1.7] mb-12 max-w-md">
                We operate as a high-trust, high-performance team. Submit your application below to get the conversation started.
              </p>
              
              <div className="bg-[#FAFBFC] border border-gray-200 p-8 rounded-2xl">
                <h3 className="font-bold text-brand-navy-deep mb-4 text-[18px]">General Application</h3>
                <p className="text-[14px] text-text-secondary leading-[1.6] mb-6">
                  Don&apos;t see a specific role listed? We&apos;re always open to meeting talented people. Tell us what you&apos;re best at and how you can help Axiora grow.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-[#FAFBFC] border border-gray-200 p-8 md:p-12 rounded-2xl shadow-sm">
                {formStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-16 h-16 bg-green-50 border border-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-[24px] font-bold text-brand-navy-deep mb-4">Application Received.</h3>
                    <p className="text-text-secondary font-medium max-w-sm leading-[1.6]">
                      Thank you for your interest in Axiora Software. Our hiring team will review your application and be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {formStatus === 'error' && (
                      <div className="p-4 bg-red-50 text-red-600 border border-red-200 rounded-md text-sm font-medium">
                        There was an error sending your application. Please try again.
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-brand-navy-deep">Full Name *</label>
                        <input name="name" required type="text" className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="Jane Doe" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-brand-navy-deep">Email Address *</label>
                        <input name="email" required type="email" className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="jane@example.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-brand-navy-deep">Role of Interest *</label>
                        <select name="role" required className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all appearance-none text-brand-navy-deep">
                          <option value="">Select a role</option>
                          <option value="Frontend Engineer">Frontend Engineer</option>
                          <option value="Backend Engineer">Backend Engineer</option>
                          <option value="Fullstack Engineer">Fullstack Engineer</option>
                          <option value="Product Designer (UI/UX)">Product Designer (UI/UX)</option>
                          <option value="Project Manager">Project Manager</option>
                          <option value="Sales / Business Development">Sales / Business Development</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-brand-navy-deep">LinkedIn Profile URL</label>
                        <input name="linkedin" type="url" className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="https://linkedin.com/in/..." />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-brand-navy-deep">Cover Letter / Message *</label>
                      <textarea name="message" required rows={6} className="w-full min-h-[150px] bg-white border border-gray-200 hover:border-gray-300 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-y" placeholder="Tell us why you'd be a great fit for Axiora..." />
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'loading'}
                      className="mt-4 h-14 bg-brand-blue hover:bg-[#1546b5] active:scale-[0.98] text-white font-bold rounded flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                    >
                      {formStatus === 'loading' ? 'Submitting...' : (
                        <>
                          Submit Application
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. BENEFITS */}
      <section className="py-24 bg-brand-navy-deep text-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight mb-6">Why Axiora?</h2>
            <p className="text-gray-300 text-[18px] font-medium leading-[1.6]">
              We believe in giving our team the tools, autonomy, and environment they need to do their best work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-white">Remote Flexibility</h3>
              <p className="text-gray-400 leading-relaxed text-sm">Work from anywhere or join us in our Lahore office. We value output and communication over strict office hours.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-white">Modern Tech Stack</h3>
              <p className="text-gray-400 leading-relaxed text-sm">We use the latest tools and frameworks. Build with React, Next.js, Node, Python, and cutting-edge AI technologies.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-white">Continuous Growth</h3>
              <p className="text-gray-400 leading-relaxed text-sm">Learn from a team of experienced professionals. We invest in our people and prioritize long-term career development.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
