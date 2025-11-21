import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }

export default function About(): JSX.Element {
  return (
    <section id="about" className="w-full py-20 px-4 bg-theme-section">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-500">
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div variants={item} className="space-y-4">
              <p className="text-lg text-theme-secondary leading-relaxed">
                I'm Kaarthickeyan D, an <span className="text-theme-accent font-semibold">AI & ML Engineer</span> passionate about building intelligent systems that solve real-world problems.
              </p>
              <p className="text-lg text-theme-secondary leading-relaxed">
                Specialized in <span className="text-violet-400 font-semibold">predictive modelling</span>, <span className="text-blue-400 font-semibold">solar system optimization</span>, <span className="text-theme-accent font-semibold">emergency traffic routing</span>, and <span className="text-pink-400 font-semibold">data analytics</span>.
              </p>
              <p className="text-lg text-theme-secondary leading-relaxed">
                I've worked on real-time systems, IoT-integrated ML pipelines, and AI-powered automation tools. My approach combines hands-on engineering, robust model design, and system-level understanding.
              </p>
            </motion.div>

            <motion.div variants={item} className="space-y-4">
              <p className="text-lg text-theme-secondary leading-relaxed">
                I enjoy building robust ML pipelines, prototyping research ideas into deployable tools, and working at the intersection of hardware-integrated AI and software systems.
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-theme-accent/20 border border-theme-accent mt-1" />
                  <span className="text-theme-secondary">Strong foundation in ML/AI algorithms and implementation</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-400/20 border border-violet-400 mt-1" />
                  <span className="text-theme-secondary">Proven track record in hackathons and competitions</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-400/20 border border-blue-400 mt-1" />
                  <span className="text-theme-secondary">Experience with full-stack development and deployment</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
