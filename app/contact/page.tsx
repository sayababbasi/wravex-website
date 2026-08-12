"use client"

import * as React from "react"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    
    // Simulate network request
    setTimeout(() => {
      setStatus("success")
      // Reset form (optional)
      const form = e.target as HTMLFormElement;
      form.reset()
    }, 1500)
  }

  return (
    <div className="bg-background min-h-screen pt-32 pb-20 md:pt-40 md:pb-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Information */}
          <div className="flex flex-col gap-12">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold tracking-wide uppercase mb-6">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-brand-navy-deep leading-[1.1] mb-6">
                Let&apos;s Build Something Great Together.
              </h1>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                Whether you need a custom SaaS platform, an AI integration, or automated workflows—tell us about your project. Our senior engineers are ready to help.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-border-subtle flex items-center justify-center text-brand-blue shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy-deep mb-1">Email Us</h3>
                  <p className="text-text-secondary mb-2">For new projects, partnerships, or general inquiries.</p>
                  <a href="mailto:hello@wravex.com" className="text-brand-blue font-semibold hover:underline">hello@wravex.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-border-subtle flex items-center justify-center text-brand-blue shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy-deep mb-1">Global Remote</h3>
                  <p className="text-text-secondary">
                    We are a distributed team working with clients worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 md:p-12 rounded-[24px] shadow-sm border border-border-subtle">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-brand-navy-deep mb-4">Message Sent</h2>
                <p className="text-text-secondary text-lg mb-8 max-w-sm">
                  Thank you for reaching out. A senior member of our team will review your details and respond shortly.
                </p>
                <Button variant="outline" onClick={() => setStatus("idle")}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-brand-navy-deep mb-2">Project Inquiry</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-brand-navy-deep">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="h-12 px-4 rounded-lg bg-background border border-border-subtle focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-brand-navy-deep">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="h-12 px-4 rounded-lg bg-background border border-border-subtle focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-semibold text-brand-navy-deep">Company (Optional)</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="h-12 px-4 rounded-lg bg-background border border-border-subtle focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                    placeholder="Company Name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-sm font-semibold text-brand-navy-deep">Estimated Budget *</label>
                  <select 
                    id="budget" 
                    required 
                    className="h-12 px-4 rounded-lg bg-background border border-border-subtle focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all appearance-none"
                  >
                    <option value="" disabled selected>Select a range</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k+">$100k+</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="details" className="text-sm font-semibold text-brand-navy-deep">Project Details *</label>
                  <textarea 
                    id="details" 
                    required 
                    rows={5}
                    className="p-4 rounded-lg bg-background border border-border-subtle focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about the problem you are trying to solve..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={status === "loading"}
                  className="w-full mt-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : "Submit Inquiry"}
                </Button>
                
                <p className="text-xs text-text-secondary text-center mt-2">
                  By submitting this form, you agree to our Privacy Policy.
                </p>
              </form>
            )}
          </div>

        </div>
      </Container>
    </div>
  )
}
