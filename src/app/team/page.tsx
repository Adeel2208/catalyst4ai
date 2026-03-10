'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/layout/Navigation'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'

export default function TeamPage() {
  const leadership = [
    {
      name: 'Chief Executive Officer',
      role: 'CEO',
      department: 'Executive Leadership',
      description: 'Visionary leader driving Catalyst4AI\'s mission to transform healthcare through AI innovation'
    },
    {
      name: 'Chief Technology Officer',
      role: 'CTO',
      department: 'Technology & AI',
      description: 'Leading technical strategy and AI research initiatives'
    },
    {
      name: 'Lead AI Engineer',
      role: 'Lead Engineer',
      department: 'AI Engineering',
      description: 'Overseeing AI model development and engineering excellence'
    },
  ]

  return (
    <main className="relative overflow-hidden bg-white">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#003867] to-[#2db8c7] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Our Team
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Meet the talented individuals driving innovation in medical AI. 
              Our diverse team brings together expertise in artificial intelligence, 
              healthcare, and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#003867] mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600">Guiding our vision and strategy</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-[#003867] to-[#004a6b] p-8 rounded-2xl shadow-xl text-center"
                >
                  <div className="w-24 h-24 bg-[#2db8c7] rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                  <p className="text-[#2db8c7] font-semibold mb-2">{leader.role}</p>
                  <p className="text-white/80 text-sm mb-4">{leader.department}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{leader.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Focus Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#2db8c7]/10 to-[#25a5b3]/10 border-2 border-[#2db8c7]/20 mb-8"
              >
                <span className="text-3xl">👥</span>
                <span className="text-lg font-bold text-[#003867]">Our Expertise</span>
              </motion.div>
              <h2 className="text-5xl sm:text-6xl font-black text-[#003867] mb-6">Our AI Engineering Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized expertise across medical AI domains, building cutting-edge solutions for healthcare
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  name: 'Natural Language Processing',
                  icon: (
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  description: 'Building AI models for clinical documentation, medical coding, and healthcare text analysis',
                  technologies: ['BERT', 'GPT', 'Transformers', 'spaCy', 'Medical NER'],
                  color: 'from-blue-500 to-blue-700'
                },
                {
                  name: 'Computer Vision',
                  icon: (
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ),
                  description: 'Developing diagnostic support systems for medical imaging and radiology',
                  technologies: ['CNNs', 'YOLO', 'ResNet', 'U-Net', 'Medical Imaging'],
                  color: 'from-[#2db8c7] to-[#25a5b3]'
                },
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-gray-100 hover:border-[#2db8c7]/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#2db8c7]/5 to-transparent rounded-bl-full"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                        {area.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#003867] mb-3 group-hover:text-[#2db8c7] transition-colors duration-300">
                          {area.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-gradient-to-r from-[#003867]/10 to-[#2db8c7]/10 text-[#003867] rounded-lg text-sm font-semibold border border-[#2db8c7]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'Machine Learning',
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  description: 'Predictive models for disease progression and treatment outcomes',
                  technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
                  color: 'from-purple-500 to-purple-700'
                },
                {
                  name: 'Deep Learning',
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  ),
                  description: 'Advanced neural architectures for healthcare applications',
                  technologies: ['GANs', 'RNNs', 'LSTMs'],
                  color: 'from-indigo-500 to-indigo-700'
                },
                {
                  name: 'MLOps',
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  description: 'Scalable infrastructure for AI deployment and monitoring',
                  technologies: ['Docker', 'Kubernetes', 'MLflow'],
                  color: 'from-green-500 to-green-700'
                },
                {
                  name: 'Data Engineering',
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  ),
                  description: 'Healthcare data pipelines and quality management',
                  technologies: ['Python', 'SQL', 'Spark'],
                  color: 'from-orange-500 to-orange-700'
                },
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#003867] mb-2">{area.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{area.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {area.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#003867] mb-4">Our Culture</h2>
              <p className="text-xl text-gray-600">What makes Catalyst4AI special</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  title: 'Innovation First',
                  description: 'We encourage creative thinking and experimentation to push the boundaries of medical AI',
                  icon: '💡'
                },
                {
                  title: 'Collaborative Environment',
                  description: 'Cross-functional teams working together to solve complex healthcare challenges',
                  icon: '🤝'
                },
                {
                  title: 'Continuous Learning',
                  description: 'Regular training, workshops, and access to latest research and technologies',
                  icon: '📚'
                },
                {
                  title: 'Work-Life Balance',
                  description: 'We value your well-being with flexible policies and comprehensive benefits',
                  icon: '⚖️'
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-200"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-[#003867] mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#003867] to-[#2db8c7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-white mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We're always looking for talented individuals who share our passion for innovation
            </p>
            <motion.a
              href="/careers"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-white text-[#003867] px-8 py-4 rounded-xl font-bold shadow-2xl"
            >
              View Open Positions
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
