"use client"
import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, CheckCircle2, MapPin, Mail } from "lucide-react"

export default function ContactClient() {
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
                GET IN TOUCH
              </div>
              <h1 className="text-[44px] md:text-[56px] lg:text-[72px] font-bold tracking-tighter text-brand-navy-deep leading-[1.05] mb-6">
                Let&apos;s Build Something<br />
                <span className="text-brand-blue">Remarkable.</span>
              </h1>
              <p className="text-text-secondary text-[18px] md:text-[20px] font-medium leading-[1.6] max-w-lg">
                Have an idea, a business challenge, or a digital product in mind? Tell us what you&apos;re building. Our team will help turn your vision into a practical, scalable solution.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="/contact/contact-hero.png" 
                alt="Axiora Software Technology" 
                fill 
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFO + FORM */}
      <section id="contact-form" className="py-24">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* LEFT: Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col"
            >
              <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-brand-navy-deep mb-6">Let&apos;s Talk</h2>
              <p className="text-text-secondary text-[16px] md:text-[18px] font-medium leading-[1.7] mb-12 max-w-md">
                Whether you&apos;re starting a new digital product, modernizing an existing system, or looking to automate your business, we&apos;d love to hear what you&apos;re working on.
              </p>
              
              <div className="flex flex-col gap-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold tracking-widest uppercase text-brand-navy-deep mb-2">EMAIL</h3>
                    <a href="mailto:hello@axiorasoftware.it.com" className="text-[16px] text-text-secondary hover:text-brand-blue font-medium transition-colors">hello@axiorasoftware.it.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold tracking-widest uppercase text-brand-navy-deep mb-2">VISIT US</h3>
                    <p className="text-[16px] text-text-secondary font-medium leading-relaxed max-w-[240px]">
                      Ground Floor, New, Liberty Tower,<br />
                      19/A Model Town Link Rd,<br />
                      Block K Model Town,<br />
                      Lahore, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Contact Form */}
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
                    <h3 className="text-[24px] font-bold text-brand-navy-deep mb-4">Thanks for reaching out.</h3>
                    <p className="text-text-secondary font-medium max-w-sm leading-[1.6]">
                      Your inquiry has been captured successfully. Our team will review your message and get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-brand-navy-deep">Full Name *</label>
                        <input required type="text" className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="Jane Doe" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-brand-navy-deep">Work Email *</label>
                        <input required type="email" className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="jane@company.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-brand-navy-deep">Company</label>
                        <input type="text" className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="Company Name" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-brand-navy-deep">Phone Number</label>
                        <input type="tel" className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-brand-navy-deep">Service *</label>
                        <select required className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all appearance-none text-brand-navy-deep">
                          <option value="">Select a service</option>
                          <option value="AI Solutions">AI Solutions</option>
                          <option value="Software Development">Software Development</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Mobile Development">Mobile Development</option>
                          <option value="Business Automation">Business Automation</option>
                          <option value="Digital Products">Digital Products</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-brand-navy-deep">Project Budget</label>
                        <select className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all appearance-none text-brand-navy-deep">
                          <option value="">Select a budget range</option>
                          <option value="Under $1,000">Under $1,000</option>
                          <option value="$1,000 – $5,000">$1,000 – $5,000</option>
                          <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                          <option value="$10,000 – $25,000">$10,000 – $25,000</option>
                          <option value="$25,000+">$25,000+</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-brand-navy-deep">Message *</label>
                      <textarea required rows={6} className="w-full min-h-[150px] bg-white border border-gray-200 hover:border-gray-300 rounded px-4 py-3 text-[14px] outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-y" placeholder="Tell us about your project, goals, timeline, or challenge..." />
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'loading'}
                      className="mt-4 h-14 bg-brand-blue hover:bg-[#1546b5] active:scale-[0.98] text-white font-bold rounded flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                    >
                      {formStatus === 'loading' ? 'Sending...' : (
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

      {/* 3. OFFICE LOCATION SECTION */}
      <section className="py-24 bg-[#FAFBFC] border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-brand-navy-deep leading-[1.1] mb-6">
                Find Us
              </h2>
              <p className="text-text-secondary text-[16px] md:text-[18px] font-medium leading-[1.7]">
                Our Lahore office is located in Model Town, providing a central base for building and delivering technology solutions for businesses.
              </p>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Ground+Floor,+New,+Liberty+Tower,+19/A+Model+Town+Link+Rd,+Block+K+Model+Town,+Lahore,+Pakistan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-navy-deep font-semibold transition-colors duration-300 text-[14px]"
            >
              Open in Google Maps
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200"
          >
            <Image 
              src="/contact/contact-map.png" 
              alt="Axiora Software Location Map" 
              fill 
              className="object-cover"
            />
            {/* Map Overlay Card */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-brand-navy-deep tracking-tight text-[18px]">Lahore Office</h4>
              </div>
              <p className="text-[14px] text-text-secondary font-medium leading-[1.6]">
                Ground Floor, New, Liberty Tower,<br />
                19/A Model Town Link Rd,<br />
                Block K Model Town,<br />
                Lahore, Pakistan
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. WHY WORK WITH AXIORA */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-brand-navy-deep leading-[1.1]">
              Built Around Your Goals.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { num: "01", title: "Business First", desc: "We focus on practical technology that solves real business problems." },
              { num: "02", title: "Built to Scale", desc: "We engineer systems with long-term growth and maintainability in mind." },
              { num: "03", title: "Modern Engineering", desc: "We use modern technologies and thoughtful architecture to build reliable digital products." },
              { num: "04", title: "Long-Term Thinking", desc: "We don't just build features. We build foundations for what's next." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="text-brand-blue font-bold tracking-widest text-[12px]">{item.num}</div>
                <h3 className="text-[20px] font-bold text-brand-navy-deep">{item.title}</h3>
                <p className="text-text-secondary text-[15px] font-medium leading-[1.6]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-24 md:py-32 bg-brand-navy-deep relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent z-0 opacity-60" />
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <h2 className="text-[40px] md:text-[56px] font-bold tracking-tighter text-white leading-[1.1] mb-6">
              Have an idea?<br />
              Let&apos;s make it real.
            </h2>
            <p className="text-gray-300 text-[18px] md:text-[20px] font-medium leading-[1.6] mb-10 max-w-lg">
              Tell us what you&apos;re building and let&apos;s explore what&apos;s possible.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact-form')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="h-14 px-8 bg-brand-blue hover:bg-[#1546b5] active:scale-[0.98] text-white font-bold rounded flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
