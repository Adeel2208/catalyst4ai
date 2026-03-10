'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'

export default function CEOMessagePage() {
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
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/20">
              Leadership Message
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Message from the CEO
            </h1>
            <p className="text-xl text-white/90 italic">
              "Transforming healthcare through the power of artificial intelligence"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Opening Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#2db8c7]/10 to-[#25a5b3]/10 rounded-2xl p-8 border-l-4 border-[#2db8c7] mb-12"
            >
              <p className="text-2xl text-gray-700 leading-relaxed italic">
                "At Catalyst4AI, we believe that artificial intelligence has the power to revolutionize healthcare—not by replacing human expertise, but by amplifying it."
              </p>
            </motion.div>

            {/* Message Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-gray-700 leading-relaxed text-xl">
                At Catalyst4AI, we believe that artificial intelligence has the power to revolutionize healthcare—not by replacing human expertise, but by amplifying it. Healthcare systems today face immense challenges: exponentially growing medical data, increasingly complex clinical workflows, and unprecedented demand for accurate, timely diagnoses. We're addressing these challenges head-on with cutting-edge AI solutions specifically designed for the medical field, specializing in Natural Language Processing and Computer Vision—powerful technologies that help clinicians extract meaningful insights from vast amounts of medical documentation, streamline clinical note-taking, improve patient records accuracy, and assist radiologists and pathologists in analyzing medical images with unprecedented precision. What sets us apart is our unwavering commitment to clinical accuracy, ethical AI, and real-world impact, ensuring every algorithm we develop meets the highest standards of medical accuracy while prioritizing fairness, transparency, and accountability. This website serves as our digital presence—a window into who we are and what we stand for. While we're not focused on marketing products, we want potential team members to understand the exciting work we're doing and the culture we've built. At Catalyst4AI, you'll find a learning environment where innovation thrives, where you'll work with global clients on cutting-edge projects, and where your contributions directly impact healthcare outcomes. We offer competitive compensation, comprehensive benefits including fuel and medical allowances, gym memberships, bi-annual increments, and generous paid leave policies—but more than benefits, we offer purpose. The future of healthcare is being written today, and at Catalyst4AI, we're proud to be among those holding the pen. If you're passionate about AI, excited about healthcare, and want to be part of something meaningful, I invite you to explore our website, learn about our work, and consider joining us on this transformative journey. Together, we can make healthcare smarter, more efficient, and more accessible for everyone.
              </p>

              {/* CEO Signature */}
              <div className="bg-[#003867] text-white rounded-2xl p-10 mt-12">
                <div className="border-t border-white/20 pt-6">
                  <p className="text-2xl font-bold mb-1">CEO Name</p>
                  <p className="text-[#2db8c7] text-lg">Chief Executive Officer</p>
                  <p className="text-white/80">Catalyst4AI</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-[#003867] mb-4">Interested in Joining Us?</h3>
              <p className="text-gray-600 mb-6">
                Explore our open positions and discover how you can contribute to the future of medical AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/careers">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white px-8 py-4 rounded-xl font-bold shadow-lg"
                  >
                    View Open Positions
                  </motion.button>
                </Link>
                <Link href="/team">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white text-[#003867] px-8 py-4 rounded-xl font-bold border-2 border-[#003867] hover:bg-[#003867] hover:text-white transition-all"
                  >
                    Meet Our Team
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
