import React from 'react'
import { useParams, Link } from 'react-router-dom'

const PROJECTS = {
  solar_monitoring: {
    title: 'AI-Assisted MPPT Solar Optimization',
    description: 'ML regression to predict duty cycles...'
  },
  solar_prediction: {
    title: 'AI-Powered Solar Cleaning Bot',
    description: 'Dirt-detection ML model and autonomous navigation...'
  },
  solarai_insights: {
    title: 'Survey Quality Check System',
    description: 'ML anomaly detection for survey responses...'
  }
}

export default function ProjectDetail(): JSX.Element {
  const { id } = useParams()
  const projectKey = id?.replace('-', '_') as keyof typeof PROJECTS
  const project = projectKey && projectKey in PROJECTS ? PROJECTS[projectKey] : null

  if (!project) return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Project not found</h2>
      <Link to="/projects" className="text-cyan-300">Back to projects</Link>
    </section>
  )

  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
      <p className="text-slate-300 mb-6">{project.description}</p>
      <Link to="/projects" className="text-cyan-300">Back</Link>
    </section>
  )
}
