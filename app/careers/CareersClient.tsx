"use client"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, CheckCircle2, X, Briefcase, MapPin } from "lucide-react"
import { Job, getJobsByCategory } from "../../data/careers"

export default function CareersClient() {
  const [activeTab, setActiveTab] = React.useState<'Experienced' | 'Internship'>('Experienced')
  const [selectedJob, setSelectedJob] = React.useState<Job | null>(null)
  
  // General Application State
  const [showGeneralForm, setShowGeneralForm] = React.useState(false)
  const [isApplying, setIsApplying] = React.useState(false)
  const [formStatus, setFormStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = React.useState("")

  const experiencedJobs = getJobsByCategory('Experienced')
  const internshipJobs = getJobsByCategory('Internship')

  const handleApply = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    setErrorMsg("")
    
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          role: selectedJob ? selectedJob.title : data.expertise || "General Application"
        }),
      })
      if (response.ok) {
        setFormStatus('success')
      } else {
        const resData = await response.json()
        setFormStatus('error')
        setErrorMsg(resData.error || "An error occurred.")
      }
    } catch (error) {
      setFormStatus('error')
      setErrorMsg("Network error. Please try again.")
    }
  }

  const closeForm = () => {
    setSelectedJob(null)
    setShowGeneralForm(false)
    setIsApplying(false)
    setFormStatus('idle')
    setErrorMsg("")
  }

  // Robust Scroll Lock
  React.useEffect(() => {
    if (selectedJob || showGeneralForm) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflowY = 'scroll' // Prevent layout shift
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflowY = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
  }, [selectedJob, showGeneralForm])

  // Escape Key Handler
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isApplying && selectedJob) {
          setIsApplying(false)
        } else {
          closeForm()
        }
      }
    }
    if (selectedJob || showGeneralForm) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [selectedJob, showGeneralForm, isApplying])

  return (
    <div className="bg-white selection:bg-brand-blue/20">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#FAFBFC] border-b border-gray-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70"></div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="text-brand-blue font-bold tracking-[0.15em] text-[11px] uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-brand-blue"></span>
                CAREERS AT AXIORA
              </div>
              <h1 className="text-[48px] md:text-[64px] lg:text-[76px] font-bold tracking-tighter text-brand-navy-deep leading-[1.05] mb-6">
                Build What&apos;s Next.
              </h1>
              <p className="text-text-secondary text-[18px] md:text-[20px] font-medium leading-[1.6] max-w-lg mb-10">
                We&apos;re building intelligent software, digital products, and automation systems for businesses that want to move faster. If you love solving meaningful problems with technology, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })
                    setActiveTab('Experienced')
                  }}
                  className="h-14 bg-brand-navy-deep hover:bg-brand-navy text-white px-8 font-bold rounded flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  View Open Positions <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => {
                    document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })
                    setActiveTab('Internship')
                  }}
                  className="h-14 bg-white border border-gray-200 hover:border-gray-300 text-brand-navy-deep px-8 font-bold rounded flex items-center justify-center transition-all shadow-sm hover:shadow-md"
                >
                  Explore Internships
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-brand-navy-deep flex items-center justify-center"
            >
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
              <div className="w-3/4 h-3/4 border border-white/10 rounded-full flex items-center justify-center relative">
                <div className="w-2/3 h-2/3 border border-white/20 rounded-full flex items-center justify-center relative">
                   <div className="w-1/3 h-1/3 bg-brand-blue rounded-full blur-xl absolute"></div>
                   <div className="w-16 h-16 bg-white rounded-full z-10 shadow-[0_0_40px_rgba(255,255,255,0.8)]"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. OPEN POSITIONS */}
      <section id="open-positions" className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-brand-navy-deep mb-6">Find Your Place at Axiora.</h2>
            <p className="text-text-secondary text-[18px] md:text-[20px] font-medium leading-[1.6] max-w-2xl mx-auto">
              We&apos;re always looking for people who care about quality, curiosity, and building technology that solves real problems.
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('Experienced')}
                className={`px-8 py-3 rounded-md text-[15px] font-bold transition-all ${activeTab === 'Experienced' ? 'bg-white text-brand-navy-deep shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Experienced Roles
              </button>
              <button
                onClick={() => setActiveTab('Internship')}
                className={`px-8 py-3 rounded-md text-[15px] font-bold transition-all ${activeTab === 'Internship' ? 'bg-white text-brand-navy-deep shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Internships
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'Experienced' ? (
              <motion.div 
                key="experienced"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {experiencedJobs.map(job => (
                  <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job)} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="internships"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Internship Philosophy */}
                <div className="bg-brand-navy-deep text-white rounded-2xl p-10 md:p-16 mb-16 shadow-xl">
                  <h3 className="text-[28px] md:text-[36px] font-bold mb-12 text-center">Start Your Career at Axiora.</h3>
                  <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-[18px] leading-relaxed">
                    Our internship opportunities are designed for students and early-career developers who want to learn by working on real technology, real products, and real engineering challenges.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="font-bold text-white">01</span>
                      </div>
                      <h4 className="text-[20px] font-bold mb-4 text-white">Learn</h4>
                      <p className="text-gray-400 text-[15px] leading-relaxed">Work alongside experienced people and strengthen your technical foundation.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="font-bold text-white">02</span>
                      </div>
                      <h4 className="text-[20px] font-bold mb-4 text-white">Build</h4>
                      <p className="text-gray-400 text-[15px] leading-relaxed">Apply what you know by contributing to practical software and digital products.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="font-bold text-white">03</span>
                      </div>
                      <h4 className="text-[20px] font-bold mb-4 text-white">Grow</h4>
                      <p className="text-gray-400 text-[15px] leading-relaxed">Develop the technical and professional skills needed for your career.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {internshipJobs.map(job => (
                    <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job)} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. HOW WE WORK */}
      <section className="py-24 bg-[#FAFBFC] border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-brand-navy-deep mb-16 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="text-[48px] font-bold text-gray-100 mb-6">01</div>
              <h3 className="text-[22px] font-bold text-brand-navy-deep mb-4">Think</h3>
              <p className="text-text-secondary leading-relaxed">Understand the problem before writing the solution.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="text-[48px] font-bold text-gray-100 mb-6">02</div>
              <h3 className="text-[22px] font-bold text-brand-navy-deep mb-4">Build</h3>
              <p className="text-text-secondary leading-relaxed">Turn ideas into thoughtful, reliable technology.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="text-[48px] font-bold text-gray-100 mb-6">03</div>
              <h3 className="text-[22px] font-bold text-brand-navy-deep mb-4">Improve</h3>
              <p className="text-text-secondary leading-relaxed">Iterate, test, learn, and continuously improve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY AXIORA */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-brand-navy-deep mb-16 text-center">Build Skills That Matter.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <h3 className="text-[20px] font-bold text-brand-navy-deep mb-4 flex items-center gap-3"><span className="text-brand-blue">01</span> Real Projects</h3>
              <p className="text-text-secondary leading-relaxed pl-8">Learn by contributing to practical software and digital products that real people use.</p>
            </div>
            <div>
              <h3 className="text-[20px] font-bold text-brand-navy-deep mb-4 flex items-center gap-3"><span className="text-brand-blue">02</span> Technical Growth</h3>
              <p className="text-text-secondary leading-relaxed pl-8">Work with modern technologies and rigorous engineering practices.</p>
            </div>
            <div>
              <h3 className="text-[20px] font-bold text-brand-navy-deep mb-4 flex items-center gap-3"><span className="text-brand-blue">03</span> Mentorship & Collaboration</h3>
              <p className="text-text-secondary leading-relaxed pl-8">Learn from teammates while contributing your own ideas and solutions.</p>
            </div>
            <div>
              <h3 className="text-[20px] font-bold text-brand-navy-deep mb-4 flex items-center gap-3"><span className="text-brand-blue">04</span> Career Development</h3>
              <p className="text-text-secondary leading-relaxed pl-8">Build experience, confidence, and a stronger professional foundation for your future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GENERAL APPLICATION CTA */}
      <section className="py-24 bg-brand-navy-deep text-white text-center">
        <div className="container mx-auto px-6 max-w-[800px]">
          <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight mb-6">Don&apos;t See Your Role?</h2>
          <p className="text-gray-300 text-[18px] md:text-[20px] leading-relaxed mb-12">
            We&apos;re always interested in meeting people who bring strong technical skills, curiosity, and a genuine interest in building great software.
          </p>
          <button 
            onClick={() => setShowGeneralForm(true)}
            className="h-14 bg-brand-blue hover:bg-[#1546b5] text-white px-10 font-bold rounded inline-flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
          >
            Send a General Application <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* MODAL: APPLICATION FORM */}
      <AnimatePresence>
        {(selectedJob || showGeneralForm) && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-[#070f1e]/45 backdrop-blur-[2px]"
              onClick={closeForm}
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 12 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white w-full h-[100dvh] md:h-auto md:max-h-[calc(100dvh-48px)] md:w-[min(1100px,calc(100vw-48px))] md:rounded-2xl flex flex-col shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* HEADER */}
              <div className="shrink-0 sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-5 md:px-12 md:py-8 flex justify-between items-start z-20">
                <div className="pr-4">
                  <div className="text-[11px] font-bold tracking-widest text-brand-blue uppercase mb-2">
                    {selectedJob ? `CAREERS / ${selectedJob.department}` : 'CAREERS / GENERAL'}
                  </div>
                  <h3 className="text-[24px] md:text-[32px] font-bold text-brand-navy-deep leading-tight mb-4">
                    {selectedJob ? selectedJob.title : 'General Application'}
                  </h3>
                  
                  {selectedJob && (
                    <div className="flex flex-wrap items-center gap-2 text-[13px] md:text-[14px] font-medium text-gray-600">
                      <span>{selectedJob.type}</span>
                      {selectedJob.category === 'Experienced' && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          <span className="text-brand-navy-deep font-semibold">{selectedJob.experience}</span>
                        </>
                      )}
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span>{selectedJob.location}</span>
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={closeForm} 
                  className="shrink-0 w-11 h-11 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-brand-navy-deep transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* CONTENT BODY */}
              <div className="flex-1 overflow-y-auto overscroll-contain bg-white">
                <div className="px-6 py-8 md:px-12 md:py-12">
                  
                  {formStatus === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                      <div className="w-20 h-20 bg-green-50 border border-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-[28px] md:text-[36px] font-bold text-brand-navy-deep mb-4">Application Prepared.</h3>
                      <p className="text-text-secondary text-[16px] md:text-[18px] max-w-lg leading-relaxed mb-8">
                        Thanks for your interest in Axiora Software. Your application has been successfully forwarded to our HR team for review.
                      </p>
                      <button onClick={closeForm} className="text-brand-blue font-bold hover:underline">Close Window</button>
                    </div>
                  ) : isApplying || showGeneralForm ? (
                    <div className="max-w-3xl mx-auto">
                      <div className="flex items-center gap-4 mb-10">
                        {selectedJob && (
                          <button 
                            onClick={() => setIsApplying(false)}
                            className="text-gray-500 hover:text-brand-navy-deep font-semibold text-[14px] flex items-center gap-2"
                          >
                            ← Back to Details
                          </button>
                        )}
                        <h4 className="font-bold text-brand-navy-deep text-[24px]">Submit Your Application</h4>
                      </div>
                      
                      <form onSubmit={handleApply} className="flex flex-col gap-8">
                        {formStatus === 'error' && (
                          <div className="p-4 bg-red-50 text-red-600 border border-red-200 rounded-md text-sm font-medium">
                            {errorMsg}
                          </div>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="flex flex-col gap-2.5">
                            <label className="text-[14px] font-bold text-brand-navy-deep">Full Name <span className="text-brand-blue">*</span></label>
                            <input name="name" required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3.5 text-[15px] outline-none focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue transition-all" />
                          </div>
                          <div className="flex flex-col gap-2.5">
                            <label className="text-[14px] font-bold text-brand-navy-deep">Email Address <span className="text-brand-blue">*</span></label>
                            <input name="email" required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3.5 text-[15px] outline-none focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue transition-all" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="flex flex-col gap-2.5">
                            <label className="text-[14px] font-bold text-brand-navy-deep">Phone Number</label>
                            <input name="phone" type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3.5 text-[15px] outline-none focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue transition-all" />
                          </div>
                          <div className="flex flex-col gap-2.5">
                            <label className="text-[14px] font-bold text-brand-navy-deep">Years of Experience <span className="text-brand-blue">*</span></label>
                            <select name="yearsExperience" required className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3.5 text-[15px] outline-none focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue transition-all">
                              <option value="">Select</option>
                              <option value="Student / Entry Level">Student / Entry Level</option>
                              <option value="1-3 Years">1-3 Years</option>
                              <option value="3-5 Years">3-5 Years</option>
                              <option value="5+ Years">5+ Years</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="flex flex-col gap-2.5">
                            <label className="text-[14px] font-bold text-brand-navy-deep">LinkedIn Profile</label>
                            <input name="linkedin" type="url" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3.5 text-[15px] outline-none focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue transition-all" />
                          </div>
                          <div className="flex flex-col gap-2.5">
                            <label className="text-[14px] font-bold text-brand-navy-deep">GitHub / Portfolio</label>
                            <input name="portfolio" type="url" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3.5 text-[15px] outline-none focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue transition-all" />
                          </div>
                        </div>
                        
                        {showGeneralForm && (
                          <div className="flex flex-col gap-2.5">
                            <label className="text-[14px] font-bold text-brand-navy-deep">Area of Expertise <span className="text-brand-blue">*</span></label>
                            <input name="expertise" required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3.5 text-[15px] outline-none focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue transition-all" placeholder="e.g. Frontend, Backend, UI/UX" />
                          </div>
                        )}

                        <div className="flex flex-col gap-2.5">
                          <label className="text-[14px] font-bold text-brand-navy-deep">Cover Letter / Message <span className="text-brand-blue">*</span></label>
                          <textarea name="message" required rows={6} className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3.5 text-[15px] outline-none focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue transition-all resize-y" placeholder="Tell us about your work and why you want to join..." />
                        </div>

                        <div className="pt-6 pb-24 md:pb-6">
                          <button 
                            type="submit" 
                            disabled={formStatus === 'loading'}
                            className="w-full h-[60px] bg-brand-blue hover:bg-[#1546b5] active:scale-[0.98] text-white font-bold rounded-md flex items-center justify-center gap-2 transition-all disabled:opacity-70 shadow-lg shadow-brand-blue/20"
                          >
                            {formStatus === 'loading' ? 'Preparing Application...' : (
                              <>Submit Application <ArrowRight className="w-5 h-5" /></>
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : selectedJob ? (
                    <div className="max-w-4xl">
                      {/* ROLE DESCRIPTION */}
                      <section className="mb-14">
                        <h4 className="text-[12px] font-bold text-brand-navy-deep tracking-wider uppercase mb-4">
                          {selectedJob.category === 'Internship' ? 'About the Internship' : 'About the Role'}
                        </h4>
                        <p className="text-text-secondary text-[16px] md:text-[18px] leading-relaxed">
                          {selectedJob.shortDescription}
                        </p>
                      </section>

                      {/* RESPONSIBILITIES */}
                      <section className="mb-14">
                        <h4 className="text-[12px] font-bold text-brand-navy-deep tracking-wider uppercase mb-6">
                          {selectedJob.category === 'Internship' ? "What You'll Learn & Do" : "Responsibilities"}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                          {selectedJob.responsibilities.map((req, i) => {
                            const num = String(i + 1).padStart(2, '0')
                            return (
                              <div key={i} className="flex gap-4">
                                <span className="text-[14px] font-bold text-gray-300 mt-0.5 select-none">{num}</span>
                                <p className="text-text-secondary text-[15px] leading-relaxed">{req}</p>
                              </div>
                            )
                          })}
                        </div>
                      </section>

                      {/* REQUIREMENTS */}
                      <section className="mb-14">
                        <h4 className="text-[12px] font-bold text-brand-navy-deep tracking-wider uppercase mb-6">
                          {selectedJob.category === 'Internship' ? "Who Can Apply" : "Requirements"}
                        </h4>
                        <ul className="space-y-4">
                          {selectedJob.requirements.map((req, i) => (
                            <li key={i} className="flex gap-4">
                              <span className="text-brand-blue shrink-0 mt-0.5">✓</span>
                              <span className="text-text-secondary text-[15px] leading-relaxed">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </section>

                      {/* NICE TO HAVE */}
                      {selectedJob.niceToHave && selectedJob.niceToHave.length > 0 && (
                        <section className="mb-14">
                          <h4 className="text-[12px] font-bold text-brand-navy-deep tracking-wider uppercase mb-6">Nice to Have</h4>
                          <ul className="space-y-4">
                            {selectedJob.niceToHave.map((req, i) => (
                              <li key={i} className="flex gap-4">
                                <span className="text-gray-300 shrink-0 mt-0.5">✓</span>
                                <span className="text-text-secondary text-[15px] leading-relaxed">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}

                      {/* SKILLS */}
                      {selectedJob.skills && selectedJob.skills.length > 0 && (
                        <section className="mb-16">
                          <h4 className="text-[12px] font-bold text-brand-navy-deep tracking-wider uppercase mb-6">Technologies & Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedJob.skills.map((skill, i) => (
                              <span key={i} className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 rounded text-[13px] font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </section>
                      )}
                      
                      {/* BOTTOM CTA FOR DESKTOP IN-FLOW */}
                      <div className="hidden md:block border-t border-gray-100 pt-12 pb-6 text-center">
                        <h3 className="text-[24px] font-bold text-brand-navy-deep mb-4">Ready to build with Axiora?</h3>
                        <p className="text-text-secondary mb-8">Take the next step in your career.</p>
                        <button 
                          onClick={() => setIsApplying(true)}
                          className="inline-flex items-center justify-center gap-2 h-14 px-10 bg-brand-navy-deep hover:bg-brand-blue text-white font-bold rounded-md transition-all shadow-lg"
                        >
                          Apply for This Position <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              
              {/* STICKY BOTTOM CTA FOR MOBILE */}
              {selectedJob && !isApplying && formStatus !== 'success' && (
                <div className="md:hidden shrink-0 bg-white border-t border-gray-100 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]" style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }}>
                  <button 
                    onClick={() => setIsApplying(true)}
                    className="w-full h-14 bg-brand-navy-deep text-white font-bold rounded-md flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                  >
                    Apply for This Position <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}

function JobCard({ job, onClick }: { job: Job, onClick: () => void }) {
  return (
    <div className="bg-white border border-gray-200 hover:border-brand-blue/30 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[12px] font-bold tracking-wider uppercase text-brand-blue">{job.department}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span className={`text-[12px] font-bold tracking-wider uppercase ${job.category === 'Experienced' ? 'text-red-600' : 'text-green-600'}`}>
            {job.experience}
          </span>
        </div>
        <h3 className="text-[24px] md:text-[28px] font-bold text-brand-navy-deep mb-3 group-hover:text-brand-blue transition-colors">{job.title}</h3>
        <p className="text-text-secondary line-clamp-2 max-w-2xl text-[15px] leading-relaxed mb-6">
          {job.shortDescription}
        </p>
        <div className="flex flex-wrap items-center gap-6 text-[14px] text-gray-500 font-medium">
          <div className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> {job.type}</div>
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {job.location}</div>
        </div>
      </div>
      <button 
        onClick={onClick}
        className="shrink-0 h-12 px-6 bg-gray-50 hover:bg-brand-blue hover:text-white text-brand-navy-deep font-bold rounded flex items-center gap-2 transition-all"
      >
        View Position <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}
