// components/Resume.js
import React from 'react'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-sky-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>
        <motion.div
          className="mt-10 max-w-4xl mx-auto space-y-8 text-gray-700 dark:text-gray-300 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Header with contact info */}
          <div className="border-b border-gray-300 pb-4">
            <h3 className="text-2xl font-bold">Kolin Nielson</h3>
            <p className="mt-1">📍 Saint George, UT 84770 | 📞 +1 (435) 610-6364 | 📧 <a href="mailto:klnnielson@gmail.com" className="text-sky-400 hover:underline">klnnielson@gmail.com</a></p>
            <p className="mt-1">
              <a href="https://github.com/kolin-nielson" className="text-sky-400 hover:underline">GitHub</a> • <a href="https://www.linkedin.com/in/kolin-nielson-97a5b2237/" className="text-sky-400 hover:underline">LinkedIn</a>
            </p>
          </div>
          {/* Summary */}
          <div>
            <h4 className="text-xl font-semibold text-sky-400">Summary</h4>
            <p className="mt-2">
              Innovative and detail-oriented Software Engineer with hands-on experience in full-stack web development, iOS app development, and game design. Passionate about creating efficient, user-friendly applications and solving complex technical challenges. Adept at collaborating in Agile teams, integrating APIs, and optimizing system performance.
            </p>
          </div>
          {/* Technical Skills */}
          <div>
            <h4 className="text-xl font-semibold text-sky-400">Technical Skills</h4>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Languages:</strong> C#, C++, Python, Swift, JavaScript, SQL</li>
              <li><strong>Web Development:</strong> Vue.js, React Native, HTML, CSS, JavaScript</li>
              <li><strong>Backend & APIs:</strong> Node.js, Express, Flask, RESTful APIs</li>
              <li><strong>Databases:</strong> MongoDB, SQLite, SQL</li>
              <li><strong>Mobile Development:</strong> Swift (iOS), React Native (Android/iOS)</li>
              <li><strong>Game Development:</strong> Unity, C#, NavMesh AI, ML-Agents</li>
              <li><strong>Cloud & DevOps:</strong> Render, Firebase, GitHub, CI/CD</li>
              <li><strong>Version Control:</strong> Git, GitHub, Agile Development</li>
            </ul>
          </div>
          {/* Projects */}
          <div>
            <h4 className="text-xl font-semibold text-sky-400">Projects</h4>
            <div className="mt-4 space-y-4">
              <div className="p-4 border rounded-lg shadow">
                <h5 className="font-bold">Workout Logger (Full-Stack Web App)</h5>
                <p>
                  <strong>Purpose:</strong> Helps users track and manage workout sessions with a structured routine.
                </p>
                <p>
                  <strong>Technologies:</strong> Vue.js, Node.js, Express, MongoDB, JWT Authentication
                </p>
                <p>
                  <strong>Features:</strong> Interactive SPA, secure authentication, RESTful API, real-time tracking.
                </p>
              </div>
              <div className="p-4 border rounded-lg shadow">
                <h5 className="font-bold">Deadline: Zombie Survival Game (Unity Game Development)</h5>
                <p>
                  <strong>Purpose:</strong> A fast-paced zombie survival game with AI-driven mechanics.
                </p>
                <p>
                  <strong>Technologies:</strong> Unity, C#, NavMesh AI, Shaders, Particle Systems
                </p>
                <p>
                  <strong>Features:</strong> Dynamic AI, boss battles, skill-based gameplay, performance optimization.
                </p>
              </div>
              <div className="p-4 border rounded-lg shadow">
                <h5 className="font-bold">Collaborative Whiteboard (Real-Time Web App)</h5>
                <p>
                  <strong>Purpose:</strong> Enables real-time collaborative drawing.
                </p>
                <p>
                  <strong>Technologies:</strong> Vue.js, WebSocket, Node.js, Express, HTML5 Canvas
                </p>
                <p>
                  <strong>Features:</strong> Instant updates, drawing tools, auto-sync for new users.
                </p>
              </div>
              <div className="p-4 border rounded-lg shadow">
                <h5 className="font-bold">WeatherGrid (iOS App Development)</h5>
                <p>
                  <strong>Purpose:</strong> Displays real-time weather data in a grid format.
                </p>
                <p>
                  <strong>Technologies:</strong> Swift, Xcode, CoreLocation, OpenWeatherMap API
                </p>
                <p>
                  <strong>Features:</strong> Dynamic UI with temperature gradients, precise location integration.
                </p>
              </div>
              <div className="p-4 border rounded-lg shadow">
                <h5 className="font-bold">Unity Reinforcement Learning AI (Ongoing Project)</h5>
                <p>
                  <strong>Purpose:</strong> Researching adaptive AI behavior using reinforcement learning.
                </p>
                <p>
                  <strong>Technologies:</strong> Unity, ML-Agents, C#, Python
                </p>
                <p>
                  <strong>Features:</strong> AI training using ML-Agents toolkit.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="mt-10 text-center">
          <a 
            href="/Resume.pdf"
            download
            className="inline-block bg-sky-400 text-white px-6 py-3 rounded shadow hover:bg-sky-500 transition"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
