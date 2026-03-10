'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003867] via-[#004a6b] to-[#2db8c7]">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#2db8c7]/20 rounded-full blur-3xl"
          />
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -30, 0], 
                x: [0, i % 2 === 0 ? 20 : -20, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 5 + i, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/95 backdrop-blur-sm shadow-2xl mb-8"
            >
              <span className="text-4xl">🚀</span>
              <span className="text-[#003867] font-bold text-lg">Transforming Healthcare with AI</span>
            </motion.div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              About Catalyst4AI
            </h1>
            <p className="text-2xl sm:text-3xl text-white/95 leading-relaxed max-w-4xl mx-auto font-medium">
              Pioneering the future of healthcare through artificial intelligence innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are - Enhanced */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2db8c7]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#003867]/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#2db8c7]/10 to-[#25a5b3]/10 border-2 border-[#2db8c7]/20 mb-8"
              >
                <span className="text-3xl">🏢</span>
                <span className="text-lg font-bold text-[#003867]">Our Story</span>
              </motion.div>
              <h2 className="text-5xl sm:text-6xl font-black text-[#003867] mb-8">Who We Are</h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
                Catalyst4AI is a medical AI company based in Lahore, Pakistan, specializing in artificial intelligence 
                solutions for healthcare. Our core expertise lies in Natural Language Processing (NLP), Computer Vision, 
                and Agentic AI systems—technologies that are transforming how medical professionals diagnose, treat, and care for patients.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                We're pioneering the development of autonomous AI agents that can reason, plan, and take actions in complex 
                healthcare environments. Our agentic AI systems leverage reinforcement learning and multi-agent architectures 
                to continuously improve their performance, adapting to new medical knowledge and clinical scenarios. These 
                intelligent agents work alongside healthcare professionals, providing real-time decision support, automating 
                routine tasks, and enabling more personalized patient care at scale.
              </p>
            </motion.div>

            {/* Mission & Vision Cards - Enhanced with Better Graphics */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#003867]/10 hover:border-[#003867]/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#003867]/5 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#003867] to-[#004a6b] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-[#003867] mb-4 group-hover:text-[#2db8c7] transition-colors duration-300">
                        Our Mission
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To revolutionize healthcare delivery through innovative AI solutions that improve patient outcomes, 
                    enhance clinical efficiency, and make advanced medical technology accessible to healthcare providers worldwide.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    We leverage cutting-edge technologies including Natural Language Processing, Computer Vision, Agentic AI, 
                    and Reinforcement Learning to build intelligent systems that assist medical professionals in making 
                    faster, more accurate diagnoses and treatment decisions.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our mission extends beyond technology—we're committed to democratizing access to AI-powered healthcare 
                    solutions, ensuring that even resource-constrained healthcare facilities can benefit from state-of-the-art 
                    medical AI systems.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
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
                      <h3 className="text-3xl font-bold text-[#003867] mb-4 group-hover:text-[#2db8c7] transition-colors duration-300">
                        Our Vision
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To become a globally recognized leader in medical AI innovation, with our solutions deployed in 
                    healthcare institutions worldwide, fundamentally transforming how medical care is delivered.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    We envision a future where autonomous AI agents work seamlessly alongside healthcare professionals, 
                    utilizing reinforcement learning to continuously improve diagnostic accuracy and treatment recommendations. 
                    Our agentic AI systems will proactively identify health risks, suggest preventive measures, and optimize 
                    clinical workflows in real-time.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    By 2030, we aim to have our AI-powered solutions integrated into major healthcare networks across continents, 
                    processing millions of patient interactions daily, and contributing to breakthrough discoveries in medical research.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location with Google Maps */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#2db8c7]/10 to-[#25a5b3]/10 border-2 border-[#2db8c7]/20 mb-8"
              >
                <span className="text-3xl">📍</span>
                <span className="text-lg font-bold text-[#003867]">Our Location</span>
              </motion.div>
              <h2 className="text-5xl sm:text-6xl font-black text-[#003867] mb-8">Visit Us</h2>
              
              {/* Location Info */}
              <div className="max-w-3xl mx-auto mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-[#2db8c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-[#003867]">2nd Floor, 13 P DHA Rahbar</p>
                    <p className="text-2xl font-bold text-[#003867]">Lahore, Pakistan</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 mb-8">
                  <svg className="w-6 h-6 text-[#2db8c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:careers@catalyst4ai.com" className="text-xl font-semibold text-[#2db8c7] hover:text-[#003867] transition-colors">
                    careers@catalyst4ai.com
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://maps.app.goo.gl/6tnE4DcRzQizkSVc7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Open in Google Maps
                  </a>
                  <a 
                    href="mailto:careers@catalyst4ai.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#003867] border-2 border-[#003867] rounded-xl font-bold shadow-lg hover:bg-[#003867] hover:text-white hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Google Maps Embed - Larger */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              style={{ height: '600px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.0234567890123!2d74.3456789!3d31.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI3JzI0LjQiTiA3NMKwMjAnNDQuNCJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Catalyst4AI Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
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
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-5xl font-black text-white mb-6">
                Join Our Journey
              </h2>
              <p className="text-2xl text-white/90 mb-10 leading-relaxed">
                Be part of a team that's transforming healthcare through AI innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/careers">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-white text-[#003867] px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all flex items-center gap-3"
                  >
                    View Careers
                    <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
