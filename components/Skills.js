// components/Skills.js
import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skills = {
    "Frontend": [
      { name: "HTML", level: 100 },
      { name: "CSS", level: 100 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 70 },
      { name: "Tailwind CSS", level: 80 },
    ],
    "Backend": [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Python", level: 90 },
      { name: "RESTful APIs", level: 85 },
      { name: "GraphQL", level: 70 },
    ],
    "Mobile": [
      { name: "React Native", level: 70 },
      { name: "Swift", level: 80 },
    ],
    "Other Languages": [
        { name: "C#", level: 90 },
        { name: "C++", level: 80 },
    ],
    "Database & Cloud": [
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 80 },
      { name: "AWS", level: 60 },
    ],
    "AI & ML": [
      { name: "Unity ML-Agents", level: 80 },
      { name: "TensorFlow", level: 75 },
      { name: "Reinforcement Learning", level: 70 },
    ],
    "DevOps": [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 60 },
      { name: "CI/CD", level: 75 },
    ],
  }

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-400">Skills</h2>
        <div className="mt-8 space-y-8">
          {Object.keys(skills).map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-sky-400 mb-2">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills[category].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-sky-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
