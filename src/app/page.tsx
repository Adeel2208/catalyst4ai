'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import LoadingScreen from '@/components/ui/LoadingScreen'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <main key="main" className="relative overflow-hidden">
          <ScrollProgress />
          <TopBar />
          <Navigation />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* Video Background */}
              <div className="absolute inset-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/front.mp4" type="video/mp4" />
                </video>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#003867]/85 via-[#004a6b]/80 to-[#2db8c7]/75"></div>
                
                {/* Animated overlay elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.15, 0.25, 0.15]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-[#2db8c7]/20 rounded-full blur-3xl"
                />
              </div>

              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                <div className="max-w-5xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/20">
                      Pioneering Medical AI Innovation
                    </span>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                      Transforming Healthcare with
                      <span className="block mt-2 bg-gradient-to-r from-[#2db8c7] to-white bg-clip-text text-transparent">
                        Artificial Intelligence
                      </span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                      Catalyst4AI specializes in cutting-edge AI solutions for medical science, leveraging Natural Language Processing and Computer Vision to revolutionize healthcare delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/careers">
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="group bg-white text-[#003867] px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center gap-3"
                        >
                          Join Our Team
                          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.button>
                      </Link>
                      <Link href="/about">
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="group bg-transparent border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center gap-3"
                        >
                          Learn More
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Problem & Solution Section */}
            <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                  {/* Section Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                  >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                      Problem & Solution
                    </h2>
                  </motion.div>

                  {/* Cards Grid */}
                  <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {/* Problem Card - Green */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="relative bg-gradient-to-br from-[#7ed957] via-[#6dd946] to-[#5dd935] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
                    >
                      {/* Decorative Icon */}
                      <div className="mb-8">
                        <svg 
                          className="w-20 h-20 sm:w-24 sm:h-24 text-gray-900/20 stroke-[1.5]" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 100 100"
                        >
                          <path 
                            d="M 20 50 Q 20 20, 50 20 Q 80 20, 80 50 Q 80 80, 50 80 Q 20 80, 20 50 Z" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                        Problem
                      </h3>
                      
                      <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                        Healthcare systems today face immense pressure: increasing patient volumes, administrative burdens, staffing shortages, and the constant need for improved outcomes. These challenges often lead to burnout, inefficiencies, and compromised patient experiences.
                      </p>

                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </motion.div>

                    {/* Solution Card - Orange/Pink Gradient */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="relative bg-gradient-to-br from-[#ffa726] via-[#ff8a65] to-[#ff7043] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
                    >
                      {/* Decorative Icon */}
                      <div className="mb-8">
                        <svg 
                          className="w-20 h-20 sm:w-24 sm:h-24 text-gray-900/20 stroke-[1.5]" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 100 100"
                        >
                          <ellipse 
                            cx="50" 
                            cy="50" 
                            rx="25" 
                            ry="35" 
                            transform="rotate(45 50 50)"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                        Solution
                      </h3>
                      
                      <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                        Our cutting-edge AI automation solutions address these pain points directly. From intelligent scheduling and predictive analytics to automated patient communication and diagnostic support, we provide tools that streamline operations, enhance decision-making, and elevate the standard of care.
                      </p>

                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-10 right-10 w-64 h-64 bg-[#2db8c7]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#003867]/5 rounded-full blur-3xl"></div>
            </section>

            {/* What We Do Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="py-20 lg:py-28 relative overflow-hidden"
            >
              {/* Video Background */}
              <div className="absolute inset-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/do.mp4" type="video/mp4" />
                </video>
                
                {/* White overlay to maintain readability */}
                <div className="absolute inset-0 bg-white/90"></div>
              </div>

              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                  {/* Section Header */}
                  <div className="text-center mb-20">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2db8c7]/20 to-[#25a5b3]/20 border-2 border-[#2db8c7]/30 mb-6"
                    >
                      <span className="text-base font-bold text-[#003867]">Our Core Capabilities</span>
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#003867] mb-6">
                      What We Do
                    </h2>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                      We deliver cutting-edge AI solutions and comprehensive medical software systems designed to transform healthcare delivery and improve patient outcomes
                    </p>
                  </div>

                  {/* Core AI Technologies - Featured Cards */}
                  <div className="mb-16">
                    <h3 className="text-2xl font-bold text-[#003867] mb-8 text-center">Core AI Technologies</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* NLP Card */}
                      <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#003867]/10 hover:border-[#003867]/30 transition-all duration-300 overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#003867]/5 to-transparent rounded-bl-full"></div>
                        <div className="relative z-10">
                          <div className="flex items-start gap-6 mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#003867] to-[#004a6b] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-2xl font-bold text-[#003867] mb-3 group-hover:text-[#2db8c7] transition-colors duration-300">
                                Natural Language Processing
                              </h4>
                              <p className="text-gray-700 leading-relaxed mb-4">
                                Transform unstructured medical text into actionable insights with our advanced NLP solutions for clinical documentation, patient records, and healthcare communication.
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {['Clinical Notes Analysis', 'Medical Coding', 'Report Generation', 'Data Extraction'].map((item, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-[#2db8c7] rounded-full"></div>
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      {/* Computer Vision Card */}
                      <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#2db8c7]/10 hover:border-[#2db8c7]/30 transition-all duration-300 overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#2db8c7]/5 to-transparent rounded-bl-full"></div>
                        <div className="relative z-10">
                          <div className="flex items-start gap-6 mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-2xl font-bold text-[#003867] mb-3 group-hover:text-[#2db8c7] transition-colors duration-300">
                                Computer Vision
                              </h4>
                              <p className="text-gray-700 leading-relaxed mb-4">
                                Leverage AI-powered medical imaging analysis for accurate diagnostics, automated detection, and enhanced radiology workflows across multiple specialties.
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {['Medical Imaging', 'Diagnostic Support', 'Pathology Analysis', 'Radiology AI'].map((item, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-[#003867] rounded-full"></div>
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Additional AI Capabilities */}
                  <div className="mb-16">
                    <h3 className="text-2xl font-bold text-[#003867] mb-8 text-center">Advanced AI Solutions</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { 
                          icon: String.fromCodePoint(0x1F9E0), 
                          title: 'Machine Learning', 
                          desc: 'Predictive models for disease progression and treatment outcomes',
                          color: 'from-red-500 to-pink-600'
                        },
                        { 
                          icon: String.fromCodePoint(0x2601, 0xFE0F), 
                          title: 'SaaS Platforms', 
                          desc: 'Scalable cloud-based AI solutions with global accessibility',
                          color: 'from-purple-500 to-indigo-600'
                        },
                        { 
                          icon: String.fromCodePoint(0x1F4CA), 
                          title: 'Healthcare Analytics', 
                          desc: 'Clinical insights and operational efficiency metrics',
                          color: 'from-orange-500 to-red-600'
                        },
                        { 
                          icon: String.fromCodePoint(0x1F680), 
                          title: 'AI Research', 
                          desc: 'Cutting-edge research in medical AI and algorithm development',
                          color: 'from-cyan-500 to-blue-600'
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5 }}
                          className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                          <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                            <span className="text-3xl">{item.icon}</span>
                          </div>
                          <h4 className="text-lg font-bold text-[#003867] mb-2">{item.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Complete Medical Software Solutions - Redesigned with Scrolling Cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative py-12"
                  >
                    <div className="text-center mb-12">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#003867] mb-4">
                        Complete Medical Software Solutions
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                        End-to-end healthcare software systems that integrate seamlessly with your existing infrastructure
                      </p>
                    </div>

                    {/* Scrolling Container */}
                    <div className="relative overflow-hidden">
                      {/* Gradient Fades */}
                      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
                      
                      {/* Scrolling Track - Right to Left */}
                      <div className="flex animate-marquee-reverse whitespace-nowrap py-4">
                        <div className="flex items-center space-x-6 px-6">
                          {[
                            { 
                              logo: '/emr.jpeg',
                              title: 'EHR/EMR Systems', 
                              desc: 'Comprehensive electronic health records management with real-time data access and seamless clinical workflows',
                              color: 'from-blue-400 to-blue-600'
                            },
                            { 
                              logo: '/HMS.png',
                              title: 'Hospital Management', 
                              desc: 'Complete HIS solutions for patient registration, bed management, and operational efficiency',
                              color: 'from-purple-400 to-purple-600'
                            },
                            { 
                              icon: String.fromCodePoint(0x1F9EA), 
                              title: 'LIMS Integration', 
                              desc: 'Laboratory information management with automated workflows and quality control',
                              color: 'from-green-400 to-green-600'
                            },
                            { 
                              logo: '/telemedicine.png',
                              title: 'Telemedicine', 
                              desc: 'Remote care platforms enabling virtual consultations and patient monitoring',
                              color: 'from-cyan-400 to-cyan-600'
                            },
                            { 
                              icon: String.fromCodePoint(0x1F464), 
                              title: 'Patient Portals', 
                              desc: 'Engaging patient interfaces for appointments, records access, and communication',
                              color: 'from-pink-400 to-pink-600'
                            },
                            { 
                              icon: String.fromCodePoint(0x1F48A), 
                              title: 'Pharmacy Systems', 
                              desc: 'Medication management with prescription tracking and inventory control',
                              color: 'from-orange-400 to-orange-600'
                            },
                            { 
                              icon: String.fromCodePoint(0x1F4B0), 
                              title: 'Revenue Cycle', 
                              desc: 'Billing and claims processing with automated revenue optimization',
                              color: 'from-yellow-400 to-yellow-600'
                            },
                            { 
                              icon: String.fromCodePoint(0x1F517), 
                              title: 'HL7/FHIR Integration', 
                              desc: 'Standards-based interoperability for seamless data exchange across systems',
                              color: 'from-indigo-400 to-indigo-600'
                            },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="inline-block w-[340px] flex-shrink-0"
                            >
                              <div className={`relative bg-gradient-to-br ${item.color} rounded-3xl p-6 shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 h-[280px]`}>
                                {/* Decorative Icon Background */}
                                <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
                                  <svg 
                                    className="w-20 h-20 text-white stroke-[1.5]" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 100 100"
                                  >
                                    <ellipse 
                                      cx="50" 
                                      cy="50" 
                                      rx="20" 
                                      ry="30" 
                                      transform={`rotate(${i * 45} 50 50)`}
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                </div>

                                {/* Content - Positioned inside card */}
                                <div className="relative z-10 flex flex-col h-full">
                                  {/* Logo or Icon */}
                                  <div className="mb-4 flex-shrink-0">
                                    {item.logo ? (
                                      <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-2xl p-3 flex items-center justify-center shadow-lg">
                                        <Image
                                          src={item.logo}
                                          alt={item.title}
                                          width={80}
                                          height={80}
                                          className="object-contain"
                                        />
                                      </div>
                                    ) : (
                                      <div className="text-5xl">{item.icon}</div>
                                    )}
                                  </div>

                                  {/* Title */}
                                  <h4 className="text-xl font-black text-white mb-2 flex-shrink-0 leading-tight whitespace-normal">
                                    {item.title}
                                  </h4>
                                  
                                  {/* Description - Fixed height to prevent overflow */}
                                  <p className="text-white/90 text-sm leading-relaxed whitespace-normal overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                                    {item.desc}
                                  </p>
                                </div>

                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className="flex items-center space-x-6 px-6">
                          {[
                            { 
                              logo: '/emr.jpeg',
                              title: 'EHR/EMR Systems', 
                              desc: 'Electronic health records with real-time data access and clinical workflows',
                              color: 'from-blue-400 to-blue-600'
                            },
                            { 
                              logo: '/HMS.png',
                              title: 'Hospital Management', 
                              desc: 'Complete HIS solutions for patient registration and operational efficiency',
                              color: 'from-purple-400 to-purple-600'
                            },
                            { 
                              icon: String.fromCodePoint(0x1F9EA), 
                              title: 'LIMS Integration', 
                              desc: 'Laboratory management with automated workflows and quality control',
                              color: 'from-green-400 to-green-600'
                            },
                            { 
                              logo: '/telemedicine.png',
                              title: 'Telemedicine', 
                              desc: 'Remote care platforms for virtual consultations and patient monitoring',
                              color: 'from-cyan-400 to-cyan-600'
                            },
                            { 
                              icon: String.fromCodePoint(0x1F464), 
                              title: 'Patient Portals', 
                              desc: 'Patient interfaces for appointments, records access, and communication',
                              color: 'from-pink-400 to-pink-600'
                            },
                            { 
                              icon: String.fromCodePoint(0x1F48A), 
                              title: 'Pharmacy Systems', 
                              desc: 'Medication management with prescription tracking and inventory',
                              color: 'from-orange-400 to-orange-600'
                            },
                            { 
                              icon: String.fromCodePoint(0x1F4B0), 
                              title: 'Revenue Cycle', 
                              desc: 'Billing and claims processing with automated revenue optimization',
                              color: 'from-yellow-400 to-yellow-600'
                            },
                            { 
                              icon: String.fromCodePoint(0x1F517), 
                              title: 'HL7/FHIR Integration', 
                              desc: 'Standards-based interoperability for seamless data exchange',
                              color: 'from-indigo-400 to-indigo-600'
                            },
                          ].map((item, i) => (
                            <div
                              key={`dup-${i}`}
                              className="inline-block w-[340px] flex-shrink-0"
                            >
                              <div className={`relative bg-gradient-to-br ${item.color} rounded-3xl p-6 shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 h-[280px]`}>
                                {/* Decorative Icon Background */}
                                <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
                                  <svg 
                                    className="w-20 h-20 text-white stroke-[1.5]" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 100 100"
                                  >
                                    <ellipse 
                                      cx="50" 
                                      cy="50" 
                                      rx="20" 
                                      ry="30" 
                                      transform={`rotate(${i * 45} 50 50)`}
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                </div>

                                {/* Content - Positioned inside card */}
                                <div className="relative z-10 flex flex-col h-full">
                                  {/* Logo or Icon */}
                                  <div className="mb-4 flex-shrink-0">
                                    {item.logo ? (
                                      <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl p-3 flex items-center justify-center">
                                        <Image
                                          src={item.logo}
                                          alt={item.title}
                                          width={64}
                                          height={64}
                                          className="object-contain"
                                        />
                                      </div>
                                    ) : (
                                      <div className="text-5xl">{item.icon}</div>
                                    )}
                                  </div>

                                  {/* Title */}
                                  <h4 className="text-2xl font-black text-white mb-3 flex-shrink-0">
                                    {item.title}
                                  </h4>
                                  
                                  {/* Description */}
                                  <p className="text-white/90 text-sm leading-relaxed flex-grow">
                                    {item.desc}
                                  </p>
                                </div>

                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className="flex items-center space-x-6 px-6">
                          {[
                            { 
                              logo: '/emr.jpeg',
                              title: 'EHR/EMR Systems', 
                              desc: 'Comprehensive electronic health records management with real-time data access and seamless clinical workflows',
                              color: 'from-blue-400 to-blue-600'
                            },
                            { 
                              logo: '/HMS.png',
                              title: 'Hospital Management', 
                              desc: 'Complete HIS solutions for patient registration, bed management, and operational efficiency',
                              color: 'from-purple-400 to-purple-600'
                            },
                            { 
                              icon: String.fromCodePoint(0x1F9EA), 
                              title: 'LIMS Integration', 
                              desc: 'Laboratory information management with automated workflows and quality control',
                              color: 'from-green-400 to-green-600'
                            },
                            { 
                              logo: '/telemedicine.png',
                              title: 'Telemedicine', 
                              desc: 'Remote care platforms enabling virtual consultations and patient monitoring',
                              color: 'from-cyan-400 to-cyan-600'
                            },
                            { 
                              icon: String.fromCodePoint(0x1F464), 
                              title: 'Patient Portals', 
                              desc: 'Engaging patient interfaces for appointments, records access, and communication',
                              color: 'from-pink-400 to-pink-600'
                            },
                            { 
                              icon: String.fromCodePoint(0x1F48A), 
                              title: 'Pharmacy Systems', 
                              desc: 'Medication management with prescription tracking and inventory control',
                              color: 'from-orange-400 to-orange-600'
                            },
                            { 
                              icon: String.fromCodePoint(0x1F4B0), 
                              title: 'Revenue Cycle', 
                              desc: 'Billing and claims processing with automated revenue optimization',
                              color: 'from-yellow-400 to-yellow-600'
                            },
                            { 
                              icon: String.fromCodePoint(0x1F517), 
                              title: 'HL7/FHIR Integration', 
                              desc: 'Standards-based interoperability for seamless data exchange across systems',
                              color: 'from-indigo-400 to-indigo-600'
                            },
                          ].map((item, i) => (
                            <div
                              key={`dup-${i}`}
                              className="inline-block w-80 flex-shrink-0"
                            >
                              <div className={`relative bg-gradient-to-br ${item.color} rounded-3xl p-8 shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 min-h-[320px] flex flex-col`}>
                                {/* Decorative Icon Background */}
                                <div className="absolute top-4 right-4 opacity-10">
                                  <svg 
                                    className="w-24 h-24 text-white stroke-[1.5]" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 100 100"
                                  >
                                    <ellipse 
                                      cx="50" 
                                      cy="50" 
                                      rx="20" 
                                      ry="30" 
                                      transform={`rotate(${i * 45} 50 50)`}
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                </div>

                                {/* Content - Positioned inside card */}
                                <div className="relative z-10 flex flex-col h-full">
                                  {/* Logo or Icon */}
                                  <div className="mb-6 flex-shrink-0">
                                    {item.logo ? (
                                      <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl p-3 flex items-center justify-center">
                                        <Image
                                          src={item.logo}
                                          alt={item.title}
                                          width={64}
                                          height={64}
                                          className="object-contain"
                                        />
                                      </div>
                                    ) : (
                                      <div className="text-5xl">{item.icon}</div>
                                    )}
                                  </div>

                                  {/* Title */}
                                  <h4 className="text-2xl font-black text-white mb-3 flex-shrink-0">
                                    {item.title}
                                  </h4>
                                  
                                  {/* Description */}
                                  <p className="text-white/90 text-sm leading-relaxed flex-grow">
                                    {item.desc}
                                  </p>
                                </div>

                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </motion.section>

            {/* Scrolling Technologies Section */}
            {/* Scrolling Technologies Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="py-20 bg-gradient-to-r from-gray-50 to-white overflow-hidden"
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="text-center">
                  <h2 className="text-4xl sm:text-5xl font-black text-[#003867] mb-6">
                    Technologies & Solutions We Work With
                  </h2>
                  <p className="text-xl text-gray-600">
                    Comprehensive medical AI and software capabilities
                  </p>
                </div>
              </div>

              {/* First Row - Scrolling Left */}
              <div className="relative mb-8">
                <div className="flex animate-marquee whitespace-nowrap">
                  <div className="flex items-center space-x-8 px-8">
                    {[
                      ' Deep Learning',
                      ' Predictive Analytics',
                      ' Clinical AI',
                      ' Drug Discovery AI',
                      ' Diagnostic Support',
                      ' Mobile Health Apps',
                      ' Cloud Infrastructure',
                      ' Healthcare Security',
                      ' Business Intelligence',
                      ' Automation Systems',
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center px-10 py-5 bg-white rounded-2xl shadow-lg border-2 border-gray-200 text-gray-800 font-bold text-xl"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-8 px-8">
                    {[
                      ' Deep Learning',
                      ' Predictive Analytics',
                      ' Clinical AI',
                      ' Drug Discovery AI',
                      ' Diagnostic Support',
                      ' Mobile Health Apps',
                      ' Cloud Infrastructure',
                      ' Healthcare Security',
                      ' Business Intelligence',
                      ' Automation Systems',
                    ].map((item, i) => (
                      <div
                        key={`dup-${i}`}
                        className="inline-flex items-center px-10 py-5 bg-white rounded-2xl shadow-lg border-2 border-gray-200 text-gray-800 font-bold text-xl"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second Row - Scrolling Right */}
              <div className="relative mb-8">
                <div className="flex animate-marquee-reverse whitespace-nowrap">
                  <div className="flex items-center space-x-8 px-8">
                    {[
                      ' EHR/EMR Systems',
                      ' HL7/FHIR Integration',
                      ' LIMS Solutions',
                      ' Telemedicine',
                      ' Patient Portals',
                      ' Revenue Cycle Management',
                      ' Appointment Scheduling',
                      ' Alert Systems',
                      ' Clinical Dashboards',
                      ' Pharmacy Management',
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-2xl shadow-lg text-white font-bold text-xl"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-8 px-8">
                    {[
                      ' EHR/EMR Systems',
                      ' HL7/FHIR Integration',
                      ' LIMS Solutions',
                      ' Telemedicine',
                      ' Patient Portals',
                      ' Revenue Cycle Management',
                      ' Appointment Scheduling',
                      ' Alert Systems',
                      ' Clinical Dashboards',
                      ' Pharmacy Management',
                    ].map((item, i) => (
                      <div
                        key={`dup-${i}`}
                        className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-2xl shadow-lg text-white font-bold text-xl"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Third Row - Scrolling Left */}
              <div className="relative">
                <div className="flex animate-marquee whitespace-nowrap">
                  <div className="flex items-center space-x-8 px-8">
                    {[
                      ' Medical Image Analysis',
                      ' Clinical Documentation',
                      ' Genomics AI',
                      ' Cardiology AI',
                      ' Neurology AI',
                      ' Radiology AI',
                      ' Pathology AI',
                      ' Ophthalmology AI',
                      ' Dental AI',
                      ' Laboratory AI',
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#003867] to-[#004a6b] rounded-2xl shadow-lg text-white font-bold text-xl"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-8 px-8">
                    {[
                      ' Medical Image Analysis',
                      ' Clinical Documentation',
                      ' Genomics AI',
                      ' Cardiology AI',
                      ' Neurology AI',
                      ' Radiology AI',
                      ' Pathology AI',
                      ' Ophthalmology AI',
                      ' Dental AI',
                      ' Laboratory AI',
                    ].map((item, i) => (
                      <div
                        key={`dup-${i}`}
                        className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#003867] to-[#004a6b] rounded-2xl shadow-lg text-white font-bold text-xl"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative py-20 lg:py-24 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#003867] via-[#004a6b] to-[#2db8c7]">
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#2db8c7]/20 via-transparent to-[#2db8c7]/20"
                  style={{ backgroundSize: '200% 200%' }}
                />
              </div>

              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                      Ready to Shape the Future of
                      <span className="block mt-2 text-[#2db8c7]">Medical AI?</span>
                    </h3>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      Join our innovative team and be part of transforming healthcare through artificial intelligence
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/careers">
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="group bg-white text-[#003867] px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center gap-3"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          View Open Positions
                          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.button>
                      </Link>
                      <Link href="/contact">
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="group bg-transparent border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center gap-3"
                        >
                          Get in Touch
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          </motion.div>
          
          <Footer />
        </main>
      )}
    </AnimatePresence>
  )
}

