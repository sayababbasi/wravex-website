"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')
    // Simulate network request since this is frontend only
    setTimeout(() => {
      setFormStatus('success')
    }, 1500)
  }

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="text-brand-blue font-bold tracking-[0.15em] text-[10px] uppercase mb-6">
              LET&apos;S TALK
            </div>
            <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold tracking-tighter text-brand-navy-deep leading-[1.05] mb-8">
              Start your project.
            </h1>
            <p className="text-text-secondary text-[18px] font-medium leading-[1.6] max-w-md mb-12">
              Fill out the form and our team will get back to you within 24 hours to schedule an initial consultation.
            </p>

            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-[11px] font-bold tracking-widest uppercase text-brand-navy-deep mb-2">Email</h4>
                <a href="mailto:hello@wravex.com" className="text-[16px] text-text-secondary hover:text-brand-blue font-medium transition-colors">hello@wravex.com</a>
              </div>
              <div>
                <h4 className="text-[11px] font-bold tracking-widest uppercase text-brand-navy-deep mb-2">Headquarters</h4>
                <p className="text-[16px] text-text-secondary font-medium leading-relaxed max-w-[200px]">
                  123 Innovation Street<br />
                  San Francisco, CA 94107
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#FAFBFC] border border-gray-100 p-8 md:p-12 rounded-2xl shadow-sm">
              {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy-deep mb-4">Request Received</h3>
                  <p className="text-text-secondary font-medium max-w-sm">
                    Thank you for reaching out. We will review your project details and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-brand-navy-deep">Full Name</label>
                      <input required type="text" className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-brand-navy-deep">Company</label>
                      <input required type="text" className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue transition-colors" placeholder="Acme Inc." />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-brand-navy-deep">Work Email</label>
                    <input required type="email" className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue transition-colors" placeholder="john@example.com" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-brand-navy-deep">Services Required</label>
                    <select required className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue transition-colors appearance-none text-brand-navy-deep">
                      <option value="">Select a service</option>
                      <option value="ai">AI Solutions</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile Development</option>
                      <option value="automation">Automation</option>
                      <option value="software">Custom Business Software</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-brand-navy-deep">Project Details</label>
                    <textarea required rows={5} className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue transition-colors resize-none" placeholder="Tell us about your goals, timeline, and budget..." />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'loading'}
                    className="mt-4 h-14 bg-brand-navy-deep hover:bg-brand-blue text-white font-bold rounded flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                  >
                    {formStatus === 'loading' ? 'Submitting...' : (
                      <>
                        Send Inquiry
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
  )
}
