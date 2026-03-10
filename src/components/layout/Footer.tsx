'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Mail, MapPin, Linkedin, Twitter, Heart } from 'lucide-react'

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Core Values", href: "/core-values" },
      { name: "Certifications", href: "/certifications" },
      { name: "CEO Message", href: "/ceo-message" },
    ]
  },
  {
    title: "Careers",
    links: [
      { name: "Open Positions", href: "/careers" },
      { name: "Why Join Us", href: "/careers" },
      { name: "Benefits", href: "/careers" },
      { name: "Apply Now", href: "/contact" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Newsletters", href: "/newsletters" },
      { name: "Contact Us", href: "/contact" },
    ]
  }
]

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Updated with Catalyst4AI
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to receive updates on medical AI innovations, career opportunities, 
              and insights from our team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2db8c7] focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-[#2db8c7]/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/MEDAP Logo.png"
                  alt="Catalyst4AI Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold">Catalyst4AI</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Pioneering artificial intelligence solutions for medical science. Specializing in NLP and 
              Computer Vision to transform healthcare delivery and improve patient outcomes.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#2db8c7]" />
                <span className="text-gray-300">careers@catalyst4ai.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#2db8c7] mt-1" />
                <span className="text-gray-300">2nd Floor, 13 P DHA Rahbar<br />Lahore, Pakistan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-[#2db8c7] rounded-2xl flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href}>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-[#2db8c7] transition-colors duration-200 cursor-pointer inline-block"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Catalyst4AI. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ y: -1 }}
                className="text-gray-400 hover:text-[#2db8c7] transition-colors duration-200"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -1 }}
                className="text-gray-400 hover:text-[#2db8c7] transition-colors duration-200"
              >
                Terms of Service
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-950 py-4"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8 text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="relative w-4 h-4">
                <Image
                  src="/MEDAP Logo.png"
                  alt="Catalyst4AI"
                  fill
                  className="object-contain"
                />
              </div>
              <span>Medical AI Innovation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart size={14} />
              <span>Transforming Healthcare</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
