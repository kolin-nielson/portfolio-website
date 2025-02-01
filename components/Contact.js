// components/Contact.js
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.send(
      'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID',     // Replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID'          // Replace with your EmailJS public key/user ID
    )
    .then((result) => {
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    }, (error) => {
      alert('Failed to send message: ' + error.text)
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <motion.form 
          onSubmit={sendEmail}
          className="max-w-md mx-auto mt-8 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <label className="block mb-1 text-left">Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-left">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-left">Message</label>
            <textarea 
              name="message" 
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-sky-400 py-3 rounded hover:bg-sky-500 transition"
          >
            Send Message
          </button>
        </motion.form>
        <div className="mt-8">
          <p>Email: <a href="mailto:klnnielson@gmail.com" className="text-sky-400 hover:underline">klnnielson@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/kolin-nielson" className="text-sky-400 hover:underline">github.com/kolin-nielson</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/kolin-nielson-97a5b2237/" className="text-sky-400 hover:underline">linkedin.com/in/kolin-nielson-97a5b2237/</a></p>
        </div>
      </div>
    </section>
  )
}

export default Contact
