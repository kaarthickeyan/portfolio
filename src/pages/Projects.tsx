import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectModal from '../components/ProjectModal'

const PROJECTS = [
  {
    id: 'solar_mppt',
    title: 'AI-Assisted MPPT Solar Optimization',
    description: 'ML regression model to predict duty cycles using infrared temperature sensors. Boost-converter optimization achieving 23% efficiency improvement in dynamic conditions. Selected top 10 in IIT Bombay Techfest research competition.',
    tags: ['ML', 'Regression', 'IoT'],
    repo: 'https://github.com/kaarthickeyan/solar_prediction',
    image: '/projects/solar_mppt.png'
  },
  {
    id: 'solar_cleaning',
    title: 'AI-Powered Solar Cleaning Bot',
    description: 'Dirt-detection ML model using computer vision and autonomous navigation for robotic cleaning. College-funded project with institutional approval. Real-time debris identification and path optimization.',
    tags: ['CV', 'IoT', 'Robotics'],
    repo: 'https://github.com/kaarthickeyan/solar_prediction',
    image: '/projects/solar_cleaner.png'
  },
  {
    id: 'traffic_control',
    title: 'Intelligent Traffic Control System',
    description: 'Ambulance detection using YOLOv8, emergency GPS routing with traffic signal preemption. 2nd place at Techvilla Hackathon. Reduces emergency response time by 40%.',
    tags: ['CV', 'ML', 'Real-time'],
    repo: 'https://github.com/kaarthickeyan/SmartCity_Health_Domain',
    image: '/projects/traffic_control.png'
  },
  {
    id: 'survey_quality',
    title: 'Survey Quality Check System',
    description: 'ML anomaly detection engine for survey responses with automated flagging. Reviewer dashboard for insights. 1st prize at Course5i Data Quality Hackathon.',
    tags: ['ML', 'Analytics', 'Dashboard'],
    repo: 'https://github.com/premanganate/Hashtag-C5I',
    image: '/projects/survey_qc.png'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

export default function Projects(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = Array.from(new Set(PROJECTS.flatMap(p => p.tags)))
  const filteredProjects = selectedTag ? PROJECTS.filter(p => p.tags.includes(selectedTag)) : PROJECTS

  return (
    <section id="projects" className="w-full py-20 px-4 bg-slate-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-500">
            Featured Projects
          </motion.h2>
          <motion.p variants={item} className="text-slate-400 mb-8 text-lg">
            AI/ML systems solving real-world problems in solar systems, traffic intelligence, and data analytics.
          </motion.p>

          {/* Tag filters */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedTag === null ? 'bg-cyan-400 text-slate-900' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedTag === tag ? 'bg-cyan-400 text-slate-900' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                variants={item}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 hover:border-cyan-400/50 transition-all cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Image overlay */}
                {project.image && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">{project.title}</h3>

                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-xs rounded bg-cyan-400/20 text-cyan-300 font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-slate-700">
                    <a href={project.repo} onClick={e => e.stopPropagation()} target="_blank" rel="noreferrer" className="flex-1 px-3 py-2 rounded text-sm font-semibold bg-slate-700 hover:bg-slate-600 text-center transition-colors">
                      Repository
                    </a>
                    <button onClick={e => { e.stopPropagation(); setSelectedProject(project.id) }} className="flex-1 px-3 py-2 rounded text-sm font-semibold bg-cyan-400 text-slate-900 hover:bg-cyan-300 transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal project={PROJECTS.find(x => x.id === selectedProject) ?? null} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
