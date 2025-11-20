import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } }
}

const item = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }

const skillsData = {
  'Programming Languages': [
    { name: 'Python', proficiency: 95 },
    { name: 'C++', proficiency: 85 },
    { name: 'Java', proficiency: 80 },
    { name: 'MATLAB', proficiency: 85 }
  ],
  'ML & AI': [
    { name: 'Scikit-learn', proficiency: 90 },
    { name: 'TensorFlow / Keras', proficiency: 85 },
    { name: 'Feature Engineering', proficiency: 90 },
    { name: 'Computer Vision (OpenCV)', proficiency: 88 }
  ],
  'Data & Tools': [
    { name: 'Pandas & NumPy', proficiency: 92 },
    { name: 'Streamlit', proficiency: 85 },
    { name: 'SQL', proficiency: 82 },
    { name: 'Linux & Git', proficiency: 88 }
  ],
  'Web & Frameworks': [
    { name: 'ReactJS', proficiency: 85 },
    { name: 'REST APIs', proficiency: 88 },
    { name: 'Framer Motion', proficiency: 82 },
    { name: 'TailwindCSS', proficiency: 90 }
  ]
}

export default function Skills(): JSX.Element {
  return (
    <section id="skills" className="w-full py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-500">
            Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 mt-10">
            {Object.entries(skillsData).map(([category, skills]) => (
              <motion.div key={category} variants={item} className="space-y-6">
                <h3 className="text-xl font-bold text-cyan-300 mb-6">{category}</h3>
                {skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <span className="text-cyan-300 text-sm">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
