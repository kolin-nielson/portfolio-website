// components/Header.js
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { useTheme } from 'next-themes'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const sections = ['about', 'skills', 'projects', 'resume', 'contact']

const Header = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 bg-gray-50 dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-sky-400 cursor-pointer"
        >
          Kolin Nielson
        </motion.h1>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {sections.map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-gray-800 dark:text-gray-200 hover:text-sky-400 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-4"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              className="text-2xl"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </motion.div>
          </button>
        </nav>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800 dark:text-gray-200">
            {mobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-gray-50 dark:bg-gray-900 shadow-md overflow-hidden"
          >
            <nav className="flex flex-col items-center py-4 space-y-4">
              {sections.map((section) => (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer text-gray-800 dark:text-gray-200 hover:text-sky-400 transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              ))}
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                  setMobileMenuOpen(false)
                }}
                className="mt-2"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl"
                >
                  {theme === 'dark' ? '☀️' : '🌙'}
                </motion.div>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
