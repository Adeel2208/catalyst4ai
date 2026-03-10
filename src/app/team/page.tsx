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
              <h2 className="text-4xl font-black text-[#003867] mb-4">Our AI Engineering Team</h2>
              <p className="text-xl text-gray-600">Specialized expertise across medical AI domains</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Natural Language Processing',
                  icon: '📝',
                  description: 'Building AI models for clinical documentation, medical coding, and healthcare text analysis',
                  technologies: ['BERT', 'GPT', 'Transformers', 'spaCy']
                },
                {
                  name: 'Computer Vision',
                  icon: '👁️',
                  description: 'Developing diagnostic support systems for medical imaging and radiology',
                  technologies: ['CNNs', 'YOLO', 'ResNet', 'U-Net']
                },
                {
                  name: 'Machine Learning',
                  icon: '🧠',
                  description: 'Creating predictive models for disease progression and treatment outcomes',
                  technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost']
                },
                {
                  name: 'Deep Learning',
                  icon: '🔬',
                  description: 'Researching and implementing advanced neural architectures for healthcare',
                  technologies: ['GANs', 'RNNs', 'LSTMs', 'Attention']
                },
                {
                  name: 'MLOps & Deployment',
                  icon: '⚙️',
                  description: 'Building scalable infrastructure for AI model deployment and monitoring',
                  technologies: ['Docker', 'Kubernetes', 'MLflow', 'AWS']
                },
                {
                  name: 'Data Engineering',
                  icon: '📊',
                  description: 'Managing healthcare data pipelines and ensuring data quality',
                  technologies: ['Python', 'SQL', 'Apache Spark', 'Airflow']
                },
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#2db8c7] hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{area.icon}</div>
                  <h3 className="text-2xl font-bold text-[#003867] mb-3 group-hover:text-[#2db8c7] transition-colors duration-300">
                    {area.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
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
