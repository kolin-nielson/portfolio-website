// components/Footer.js
import React from 'react'

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-800 text-gray-100">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Kolin Nielson. All rights reserved.</p>
        <div className="mt-3">
          <a href="https://www.linkedin.com/in/kolin-nielson-97a5b2237/" className="text-sky-400 hover:underline mx-2">LinkedIn</a>
          <a href="https://github.com/kolin-nielson" className="text-sky-400 hover:underline mx-2">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
