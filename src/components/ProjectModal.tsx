import React from 'react'
import { motion } from 'framer-motion'

type Project = {
  id: string
  title: string
  description: string
  repo?: string
  image?: string
}

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative max-w-3xl w-full bg-theme-card glass rounded-xl p-6 z-10 border border-theme">
        <button onClick={onClose} className="absolute right-4 top-4 text-theme-secondary">Close</button>
        <h3 className="text-xl font-semibold mb-2 text-theme-primary">{project.title}</h3>
        {project.image && <img src={project.image} alt={project.title} className="w-full rounded mb-4" />}
        <p className="text-theme-secondary mb-4">{project.description}</p>
        {project.repo && (<a href={project.repo} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded bg-theme-accent text-slate-900 font-semibold hover:opacity-90 transition-opacity">View Repository</a>)}
      </motion.div>
    </div>
  )
}
