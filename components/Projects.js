// components/Projects.js
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const [filter, setFilter] = useState("all")
  const projects = [
    {
      id: 1,
      title: "Workout Logger",
      description: "A full-stack web app to track workouts with Vue.js, Node.js, Express, MongoDB, and JWT authentication.",
      category: "web",
      link: "#"
    },
    {
      id: 2,
      title: "Deadline: Zombie Survival",
      description: "A Unity game featuring dynamic AI, boss battles, and optimized performance.",
      category: "game",
      link: "#"
    },
    {
      id: 3,
      title: "Collaborative Whiteboard",
      description: "A real-time web app for shared drawing using Vue.js, WebSocket, and HTML5 Canvas.",
      category: "web",
      link: "#"
    },
    {
      id: 4,
      title: "WeatherGrid",
      description: "An iOS app displaying real-time weather data with dynamic UI, built with Swift and CoreLocation.",
      category: "web",
      link: "#"
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-400">Project Highlights</h2>
        <div className="flex justify-center mt-6 space-x-4">
          <button onClick={() => setFilter("all")} className="px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-500 transition">All</button>
          <button onClick={() => setFilter("web")} className="px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-500 transition">Web</button>
          <button onClick={() => setFilter("game")} className="px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-500 transition">Games</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-bold text-sky-400">{project.title}</h3>
              <p className="mt-3 text-gray-700 dark:text-gray-300">{project.description}</p>
              <a href={project.link} className="inline-block mt-4 text-sky-400 hover:underline">View Live</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
