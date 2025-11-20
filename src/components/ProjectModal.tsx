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
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative max-w-3xl w-full bg-slate-900/80 glass rounded-xl p-6 z-10">
        <button onClick={onClose} className="absolute right-4 top-4 text-slate-300">Close</button>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        {project.image && <img src={project.image} alt={project.title} className="w-full rounded mb-4" />}
        <p className="text-slate-300 mb-4">{project.description}</p>
        {project.repo && (<a href={project.repo} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded bg-cyan-300 text-slate-900 font-semibold">View Repository</a>)}
      </motion.div>
    </div>
  )
}
