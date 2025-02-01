// components/About.js
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.img 
          src="/images/profile.jpg"
          alt="Kolin Nielson"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 object-cover shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-sky-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          I’m a passionate Software Engineer with hands-on experience in full-stack web development, iOS app development, and game design. I create elegant, efficient solutions to complex technical challenges—be it interactive web applications, immersive games, or innovative AI projects.
        </motion.p>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Beyond coding, I enjoy collaborating with diverse teams, contributing to open-source projects, and staying on top of emerging technologies. Whether mentoring aspiring developers or exploring the latest tech trends, I’m always eager to learn and grow.
        </motion.p>
      </div>
    </section>
  )
}

export default About
