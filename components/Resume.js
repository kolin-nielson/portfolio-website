// components/Resume.js
import React from 'react'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <div className="mt-10 text-center">
    <a 
      href="/Resume.pdf"
      download
      className="inline-block bg-sky-400 text-white px-6 py-3 rounded shadow hover:bg-sky-500 transition"
    >
      Download Resume (PDF)
    </a>
  </div>
  )
}

export default Resume
