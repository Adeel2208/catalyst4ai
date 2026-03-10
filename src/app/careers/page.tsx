'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'

export default function CareersPage() {
  const openPositions = [
    {
      title: 'AI Software Engineer',
      department: 'AI Engineering',
      type: 'Full-time',
      location: 'Lahore, Pakistan',
      experience: '2-4 years',
      description: 'Develop and deploy AI solutions for healthcare applications, working with cutting-edge ML models and medical software systems.'
    },
    {
      title: 'Junior AI Engineer',
      department: 'AI Engineering',
      type: 'Full-time',
      location: 'Lahore, Pakistan',
      experience: '0-2 years',
      description: 'Join our team to learn and contribute to medical AI projects, working alongside experienced engineers on NLP and computer vision solutions.'
    },
  ]

  return (
    <main className="relative overflow-hidden">
      <TopBar />
      <Navigation />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/career.mp4" type="video/mp4" />
          </video>
          
          {/* Darker gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          
          {/* Additional dark overlay in center for text */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-transparent"></div>
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
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white shadow-2xl mb-8"
            >
              {String.fromCodePoint(0x1F4BC)}
              <span className="text-[#003867] font-bold text-lg">Career Opportunities at Catalyst4AI</span>
            </motion.div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight" style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.9), 0 8px 40px rgba(0,0,0,0.6)'
            }}>
              Join Our Team
            </h1>
            <div className="bg-black/50 backdrop-blur-md rounded-3xl px-8 py-6 inline-block shadow-2xl">
              <p className="text-2xl sm:text-3xl text-white leading-relaxed max-w-4xl font-semibold" style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 1px 5px rgba(0,0,0,0.9)'
              }}>
                Be part of a team that's revolutionizing healthcare through artificial intelligence
              </p>
            </div>
            
            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-16"
            >
              <div className="w-8 h-12 border-2 border-white rounded-full mx-auto flex items-start justify-center p-2 shadow-lg">
                <div className="w-1.5 h-3 bg-white rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #003867 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
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
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#2db8c7]/10 to-[#25a5b3]/10 border-2 border-[#2db8c7]/20 mb-8 shadow-lg"
              >
                {String.fromCodePoint(0x1F4BC)}
                <span className="text-xl font-bold text-[#003867]">Why Choose Us</span>
              </motion.div>
              <h2 className="text-5xl sm:text-6xl font-black text-[#003867] mb-6">
                Why Catalyst4AI?
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                Competitive benefits and a culture of innovation that empowers you to grow
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: String.fromCodePoint(0x1F4B0), title: 'Market Competitive Salary', desc: 'Industry-leading compensation packages that recognize your value', color: 'from-green-500 to-emerald-600' },
                { icon: String.fromCodePoint(0x1F4B0), title: 'Fuel Allowance', desc: 'Monthly transportation support for your daily commute', color: 'from-blue-500 to-cyan-600' },
                { icon: String.fromCodePoint(0x1F4B0), title: 'Medical Allowance', desc: 'Comprehensive health coverage for you and your family', color: 'from-red-500 to-pink-600' },
                { icon: String.fromCodePoint(0x1F3CB, 0xFE0F), title: 'Gym Membership', desc: 'Premium fitness facilities to keep you healthy and energized', color: 'from-orange-500 to-amber-600' },
                { icon: String.fromCodePoint(0x1F4B0), title: 'Bi-Annual Increments', desc: 'Regular performance reviews with salary increases', color: 'from-purple-500 to-violet-600' },
                { icon: String.fromCodePoint(0x1F4B0), title: 'Paid Leaves', desc: 'Generous vacation and sick leave policy for work-life balance', color: 'from-teal-500 to-cyan-600' },
                { icon: String.fromCodePoint(0x1F4B0), title: 'Learning Environment', desc: 'Continuous skill development and training opportunities', color: 'from-indigo-500 to-blue-600' },
                { icon: String.fromCodePoint(0x1F4B0), title: 'Global Client Exposure', desc: 'Collaborate with international healthcare organizations', color: 'from-[#2db8c7] to-[#25a5b3]' },
                { icon: String.fromCodePoint(0x1F4B0), title: 'Innovation Culture', desc: 'Work on cutting-edge AI research and breakthrough projects', color: 'from-[#003867] to-[#004a6b]' },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group relative bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                      <span className="text-4xl">{benefit.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#003867] mb-3 group-hover:text-white transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {benefit.desc}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#2db8c7]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-[#003867]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
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
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#2db8c7]/10 to-[#25a5b3]/10 border-2 border-[#2db8c7]/20 mb-8 shadow-lg"
              >
                {String.fromCodePoint(0x1F4BC)}
                <span className="text-xl font-bold text-[#003867]">Current Openings</span>
              </motion.div>
              <h2 className="text-5xl sm:text-6xl font-black text-[#003867] mb-6">Open Positions</h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                Find your next opportunity and start making an impact
              </p>
            </motion.div>

            {/* Positions List */}
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group relative bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-[#2db8c7] hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/0 via-[#2db8c7]/0 to-[#2db8c7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">
                    {/* Left side - Icon and details */}
                    <div className="flex-1">
                      <div className="flex items-start gap-6 mb-6">
                        <motion.div 
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="w-20 h-20 bg-gradient-to-br from-[#003867] to-[#2db8c7] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                        >
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-black text-[#003867] mb-3 group-hover:text-[#2db8c7] transition-colors duration-300">
                            {position.title}
                          </h3>
                          <p className="text-gray-700 text-lg leading-relaxed mb-4">{position.description}</p>
                        </div>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-3">
                        <span className="px-5 py-2.5 bg-[#003867] text-white rounded-full text-sm font-bold shadow-md">
                          {position.department}
                        </span>
                        <span className="px-5 py-2.5 bg-[#2db8c7] text-white rounded-full text-sm font-bold shadow-md">
                          {position.type}
                        </span>
                        <span className="px-5 py-2.5 bg-purple-600 text-white rounded-full text-sm font-bold shadow-md">
                          {position.experience}
                        </span>
                        <span className="px-5 py-2.5 bg-gray-700 text-white rounded-full text-sm font-bold flex items-center gap-2 shadow-md">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {position.location}
                        </span>
                      </div>
                    </div>

                    {/* Right side - Apply button */}
                    <Link href={`/careers/apply?position=${encodeURIComponent(position.title)}`}>
                      <motion.button
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/btn relative bg-gradient-to-r from-[#003867] via-[#004a6b] to-[#2db8c7] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 overflow-hidden"
                      >
                        <span className="relative z-10">Apply Now</span>
                        <svg className="w-6 h-6 relative z-10 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                      </motion.button>
                    </Link>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#2db8c7]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
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
              <div className="text-6xl mb-6">{String.fromCodePoint(0x1F3AF)}</div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                Don't See the Right Position?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-white text-[#003867] px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center gap-3 mx-auto"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Your Resume
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
