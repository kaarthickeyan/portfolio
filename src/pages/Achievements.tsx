import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const item = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }

const achievementsData = [
  { rank: '🥇', title: '1st Place – Course5i Data Quality Hackathon', date: '2025', description: 'ML anomaly detection for survey data quality scoring.' },
  { rank: '🥈', title: '2nd Place – Techvilla Hackathon', date: '2024', description: 'Intelligent traffic control system with emergency routing.' },
  { rank: '🏆', title: 'Top 10 – IIT Bombay Techfest', date: '2024', description: 'AI-Assisted MPPT Solar Optimization research project.' },
  { rank: '✅', title: 'Smart India Hackathon – Qualified', date: '2024', description: 'Participated in nationwide innovation hackathon.' }
]

export default function Achievements(): JSX.Element {
  return (
    <section id="achievements" className="w-full py-20 px-4 bg-theme-section">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-500">
            Achievements & Awards
          </motion.h2>
          <motion.p variants={item} className="text-theme-tertiary mb-12 text-lg">
            Recognition for innovation, technical excellence, and problem-solving impact.
          </motion.p>

          <div className="space-y-6">
            {achievementsData.map((achievement, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="group relative flex gap-4 p-6 rounded-lg border border-theme hover:border-theme-accent bg-gradient-to-r from-theme-card to-theme-secondary hover:from-theme-card hover:to-theme-card transition-all"
              >
                {/* Rank badge */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-theme-accent/20 to-violet-500/20 flex items-center justify-center text-2xl">
                  {achievement.rank}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1 text-theme-primary group-hover:text-theme-accent transition-colors">{achievement.title}</h3>
                  <p className="text-sm text-theme-tertiary mb-2">{achievement.date}</p>
                  <p className="text-theme-secondary text-sm">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
