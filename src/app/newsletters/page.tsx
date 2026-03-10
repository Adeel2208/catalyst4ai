'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/layout/Navigation'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'

export default function NewslettersPage() {
  const newsletters = [
    {
      title: 'AI in Medical Imaging: Latest Breakthroughs',
      date: 'March 2026',
      category: 'Research',
      excerpt: 'Exploring recent advances in computer vision for radiology and pathology, including our latest developments in automated diagnosis support systems.',
      topics: ['Computer Vision', 'Medical Imaging', 'Diagnostics']
    },
    {
      title: 'NLP Transforming Clinical Documentation',
      date: 'February 2026',
      category: 'Technology',
      excerpt: 'How natural language processing is revolutionizing the way healthcare professionals document patient encounters and extract insights from medical records.',
      topics: ['NLP', 'Clinical Documentation', 'Healthcare Efficiency']
    },
    {
      title: 'Catalyst4AI Year in Review 2025',
      date: 'January 2026',
      category: 'Company News',
      excerpt: 'Reflecting on our achievements, milestones, and the impact we\'ve made in the medical AI space throughout 2025.',
      topics: ['Company Updates', 'Milestones', 'Team Growth']
    },
    {
      title: 'Ethics in Medical AI Development',
      date: 'December 2025',
      category: 'Insights',
      excerpt: 'Our approach to ensuring fairness, transparency, and accountability in AI systems designed for healthcare applications.',
      topics: ['AI Ethics', 'Healthcare', 'Responsible AI']
    },
    {
      title: 'Machine Learning for Predictive Healthcare',
      date: 'November 2025',
      category: 'Research',
      excerpt: 'Leveraging ML algorithms to predict patient outcomes and enable proactive interventions in clinical settings.',
      topics: ['Machine Learning', 'Predictive Analytics', 'Patient Care']
    },
    {
      title: 'Building Our Team: Culture at Catalyst4AI',
      date: 'October 2025',
      category: 'Culture',
      excerpt: 'Inside look at our company culture, values, and what makes Catalyst4AI a great place to work for AI professionals.',
      topics: ['Company Culture', 'Team', 'Careers']
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
              Newsletters & Insights
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Stay updated with the latest developments in medical AI, company news, 
              research insights, and thought leadership from Catalyst4AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#003867] to-[#004a6b] p-8 rounded-2xl shadow-xl"
            >
              <div className="text-center mb-6">
                <h2 className="text-3xl font-black text-white mb-3">Subscribe to Our Newsletter</h2>
                <p className="text-white/80">Get the latest updates delivered to your inbox</p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#2db8c7]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-[#2db8c7] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#25a5b3] transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletters Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#003867] mb-4">Recent Newsletters</h2>
              <p className="text-xl text-gray-600">Explore our latest publications and insights</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {newsletters.map((newsletter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#2db8c7]/10 text-[#2db8c7] rounded-full text-sm font-semibold">
                        {newsletter.category}
                      </span>
                      <span className="text-gray-500 text-sm">{newsletter.date}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#003867] mb-3">
                      {newsletter.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {newsletter.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {newsletter.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-[#003867] font-bold flex items-center gap-2 group"
                    >
                      Read More
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-[#003867] mb-4">Topics We Cover</h2>
              <p className="text-xl text-gray-600">Explore content across various categories</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Research & Development', icon: '🔬', count: '12 articles' },
                { name: 'Technology Insights', icon: '💻', count: '18 articles' },
                { name: 'Company News', icon: '📰', count: '8 articles' },
                { name: 'Industry Trends', icon: '📈', count: '15 articles' },
                { name: 'AI Ethics', icon: '⚖️', count: '10 articles' },
                { name: 'Team & Culture', icon: '👥', count: '6 articles' },
                { name: 'Case Studies', icon: '📊', count: '9 articles' },
                { name: 'Tutorials', icon: '📚', count: '14 articles' },
              ].map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 text-center cursor-pointer"
                >
                  <div className="text-4xl mb-3">{topic.icon}</div>
                  <h3 className="font-bold text-[#003867] mb-2">{topic.name}</h3>
                  <p className="text-sm text-gray-500">{topic.count}</p>
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
              Want to Contribute?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We welcome guest posts and contributions from AI researchers, healthcare professionals, 
              and industry experts. Share your insights with our community.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-white text-[#003867] px-8 py-4 rounded-xl font-bold shadow-2xl"
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
