import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
}

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

const internshipsData = [
  {
    company: 'Course5i',
    title: 'Data Analyst Intern',
    period: 'May 2025 – Jul 2025',
    description: 'Led ML model development for survey data quality scoring and built automated reviewer dashboard.',
    highlights: [
      'Built ML model for survey data quality scoring',
      'Designed reviewer dashboard to inspect flagged surveys',
      'Automated data validation pipelines for streaming survey inputs'
    ]
  },
  {
    company: 'SolidPro',
    title: 'Software Engineer Intern',
    period: 'Jun 2024 – Jul 2024',
    description: 'Implemented predictive analytics dashboards and contributed to medical imaging research.',
    highlights: [
      'Implemented predictive analytics dashboards using Streamlit',
      'Text extraction pipelines for glucometer data',
      'Assisted research on kidney-stone segmentation'
    ]
  }
]

export default function Internships(): JSX.Element {
  return (
    <section id="internships" className="w-full py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-500">
            Professional Experience
          </motion.h2>
          <motion.p variants={item} className="text-slate-400 mb-12 text-lg">
            Internships where I've built ML systems and contributed to production tools.
          </motion.p>

          <div className="space-y-6">
            {internshipsData.map((internship, idx) => (
              <motion.article
                key={idx}
                variants={item}
                className="group relative overflow-hidden rounded-lg border border-slate-700 hover:border-cyan-400/50 bg-gradient-to-br from-slate-800/60 to-slate-900/60 hover:from-slate-800 hover:to-slate-900 p-8 transition-all"
              >
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-cyan-300">{internship.title}</h3>
                      <p className="text-lg font-semibold text-slate-300">{internship.company}</p>
                      <p className="text-sm text-slate-400">{internship.period}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6">{internship.description}</p>

                  <ul className="space-y-2">
                    {internship.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <span className="text-cyan-400 font-bold mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Accent line */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
