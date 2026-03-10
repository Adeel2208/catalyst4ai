'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/layout/Navigation'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'

export default function CoreValuesPage() {
  const values = [
    {
      title: 'Innovation & Excellence',
      icon: '🚀',
      description: 'We push the boundaries of what\'s possible in medical AI, constantly seeking new ways to improve healthcare outcomes through cutting-edge technology.',
      principles: [
        'Embrace emerging technologies',
        'Encourage creative problem-solving',
        'Maintain highest quality standards',
        'Continuous improvement mindset'
      ]
    },
    {
      title: 'Patient-Centric Approach',
      icon: '❤️',
      description: 'Every solution we develop is designed with the end goal of improving patient care and outcomes. We never lose sight of the human impact of our work.',
      principles: [
        'Prioritize patient safety',
        'Focus on clinical accuracy',
        'Design for healthcare professionals',
        'Measure impact on patient outcomes'
      ]
    },
    {
      title: 'Scientific Rigor',
      icon: '🔬',
      description: 'Our work is grounded in solid scientific methodology, peer-reviewed research, and evidence-based practices to ensure reliability and trustworthiness.',
      principles: [
        'Evidence-based development',
        'Rigorous testing protocols',
        'Transparent methodologies',
        'Peer review and validation'
      ]
    },
    {
      title: 'Ethical AI',
      icon: '⚖️',
      description: 'We are committed to developing AI systems that are fair, transparent, and accountable, with careful consideration of ethical implications.',
      principles: [
        'Bias detection and mitigation',
        'Data privacy and security',
        'Transparent decision-making',
        'Responsible AI deployment'
      ]
    },
    {
      title: 'Collaboration',
      icon: '🤝',
      description: 'We believe in the power of teamwork, bringing together diverse perspectives from AI experts, medical professionals, and healthcare stakeholders.',
      principles: [
        'Cross-functional teamwork',
        'Open communication',
        'Knowledge sharing',
        'Partnership with healthcare institutions'
      ]
    },
    {
      title: 'Continuous Learning',
      icon: '📚',
      description: 'In the rapidly evolving fields of AI and healthcare, we foster a culture of continuous learning and professional development.',
      principles: [
        'Regular training programs',
        'Research and development',
        'Industry conference participation',
        'Mentorship and growth opportunities'
      ]
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
              Our Core Values
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              The principles that guide everything we do at Catalyst4AI. 
              These values shape our culture, drive our decisions, and define who we are as a company.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#003867] to-[#004a6b] p-12 rounded-3xl shadow-2xl text-center"
            >
              <h2 className="text-3xl font-black text-white mb-6">Our Mission</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                To revolutionize healthcare delivery through innovative artificial intelligence solutions, 
                making advanced medical technology accessible and improving patient outcomes worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="grid md:grid-cols-3 gap-8 p-8">
                    <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                      <div className="text-7xl mb-4">{value.icon}</div>
                      <h3 className="text-2xl font-black text-[#003867] mb-3">{value.title}</h3>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {value.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-bold text-[#003867] mb-3">Key Principles:</h4>
                        {value.principles.map((principle, pIndex) => (
                          <motion.div
                            key={pIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: pIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 bg-[#2db8c7] rounded-full flex-shrink-0"></div>
                            <p className="text-gray-600">{principle}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-[#003867] mb-4">Our Vision</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Short-term Vision</h3>
                <p className="text-white/90 leading-relaxed">
                  Establish Catalyst4AI as a leading medical AI company in Pakistan, 
                  delivering innovative NLP and computer vision solutions that directly 
                  improve healthcare efficiency and patient outcomes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#003867] to-[#004a6b] p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Long-term Vision</h3>
                <p className="text-white/90 leading-relaxed">
                  Become a globally recognized leader in medical AI innovation, 
                  with our solutions deployed in healthcare institutions worldwide, 
                  fundamentally transforming how medical care is delivered.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-to-r from-[#003867] to-[#2db8c7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-white mb-6">
                Our Commitment
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                We are committed to upholding these values in every project we undertake, 
                every decision we make, and every interaction we have. Our values are not 
                just words on a page—they are the foundation of our company culture and 
                the driving force behind our success.
              </p>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-white text-[#003867] px-8 py-4 rounded-xl font-bold shadow-2xl"
              >
                Learn More About Us
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
