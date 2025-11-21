import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from '../components/Typewriter'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
}

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

const floatVariants = {
  float: {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  }
}

export default function Hero(): JSX.Element {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background blobs */}
      <motion.div
        variants={floatVariants}
        animate="float"
        className="absolute top-10 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatVariants}
        animate="float"
        transition={{ duration: 5, delay: 1 }}
        className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500">
            <Typewriter words={['AI/ML Engineer', 'Solar AI Specialist', 'Data Scientist']} speed={60} pause={2000} />
          </motion.h1>

          <motion.p variants={item} className="text-lg md:text-xl text-theme-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Building intelligent systems for <span className="text-theme-accent font-semibold">solar optimization</span>, <span className="text-violet-400 font-semibold">emergency traffic routing</span>, and <span className="text-blue-400 font-semibold">data analytics</span>.
          </motion.p>

          <motion.div variants={item} className="flex items-center justify-center gap-4 flex-wrap">
            <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="btn-primary hover:shadow-xl hover:scale-105 transition-all">
              Download Resume
            </a>
            <a href="#projects" className="px-6 py-3 rounded-lg border-2 border-theme-accent text-theme-accent font-semibold hover:bg-theme-accent/10 transition-all">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 rounded-lg bg-theme-secondary text-theme-primary font-semibold hover:bg-theme-card transition-all">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
