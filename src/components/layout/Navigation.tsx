'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div 
      className="hidden md:block fixed top-0 left-0 right-0 z-40 py-3 sm:py-4"
      style={{ opacity: navOpacity }}
    >
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div 
          className={`bg-white/90 backdrop-blur-xl rounded-full shadow-2xl border border-gray-200/50 px-6 lg:px-8 relative overflow-hidden transition-all duration-300 ${
            scrolled ? 'shadow-2xl' : 'shadow-xl'
          }`}
          whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
        >
          {/* Animated gradient background */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-[#2db8c7]/5 via-transparent to-[#2db8c7]/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
            style={{ backgroundSize: '200% 100%' }}
          />

          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 relative z-10">
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 flex-1">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative px-4 py-2 cursor-pointer group"
                    >
                      <span className={`text-base font-semibold transition-colors duration-200 ${
                        isActive ? 'text-[#2db8c7]' : 'text-gray-700 group-hover:text-[#2db8c7]'
                      }`}>
                        {item.name}
                      </span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      
                      {/* Hover indicator */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2db8c7]/50 to-[#25a5b3]/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </motion.div>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Brand Name */}
            <div className="lg:hidden flex-1">
              <motion.span 
                className="text-lg font-bold bg-gradient-to-r from-[#003867] to-[#2db8c7] bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Catalyst4AI
              </motion.span>
            </div>

            {/* Enhanced CTA Button */}
            <div className="hidden md:flex items-center">
              <Link href="/careers">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -10px rgba(45, 184, 199, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group px-8 lg:px-10 py-3 lg:py-4 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white font-bold rounded-full shadow-xl overflow-hidden text-base lg:text-lg cursor-pointer"
                >
                  {/* Shine effect */}
                  <motion.div
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    <span className="hidden lg:inline">Join Us</span>
                    <span className="lg:hidden">Jobs</span>
                  </span>
                  
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#25a5b3] to-[#2db8c7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-gray-700 hover:text-[#2db8c7] hover:bg-gray-100 transition-colors duration-200"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-2 border-t border-gray-200/50">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href
                    return (
                      <Link key={item.name} href={item.href}>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          onClick={() => setIsOpen(false)}
                          className={`block font-semibold text-base transition-all duration-200 px-4 py-3 rounded-xl cursor-pointer ${
                            isActive 
                              ? 'text-[#2db8c7] bg-[#2db8c7]/10' 
                              : 'text-gray-700 hover:text-[#2db8c7] hover:bg-gray-50'
                          }`}
                        >
                          {item.name}
                        </motion.div>
                      </Link>
                    )
                  })}
                  <Link href="/careers">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white py-3.5 rounded-xl font-bold text-base shadow-lg cursor-pointer mt-4"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                      Join Our Team
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>
    </motion.div>
  )
}
