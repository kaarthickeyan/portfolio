import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }

  return (
    <footer className="w-full relative z-10 mt-8 bg-theme-solid border-t border-t-theme">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div initial="hidden" animate="show" variants={containerVariants} className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-500 mb-2">
              Kaarthickeyan D
            </h3>
            <p className="text-sm text-theme-tertiary">
              AI/ML Engineer | Solar AI | Traffic Intelligence | Data Analytics
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-theme-primary mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="/#about" className="block text-theme-tertiary hover:text-theme-accent transition-colors">About</a>
              <a href="/#projects" className="block text-theme-tertiary hover:text-theme-accent transition-colors">Projects</a>
              <a href="/#contact" className="block text-theme-tertiary hover:text-theme-accent transition-colors">Contact</a>
              <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="block text-theme-tertiary hover:text-theme-accent transition-colors">Resume</a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-theme-primary mb-3">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/kaarthickeyan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-lg bg-theme-secondary hover:bg-theme-card text-theme-secondary hover:text-theme-accent transition-all border border-theme">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/kaarthickeyan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-theme-secondary hover:bg-theme-card text-theme-secondary hover:text-theme-accent transition-all border border-theme">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/kaarthickeyan" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-lg bg-theme-secondary hover:bg-theme-card text-theme-secondary hover:text-theme-accent transition-all border border-theme">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="mailto:kaarthickeyan.d@gmail.com" aria-label="Email" className="p-2 rounded-lg bg-theme-secondary hover:bg-theme-card text-theme-secondary hover:text-theme-accent transition-all border border-theme">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div initial="hidden" animate="show" variants={itemVariants} className="border-t border-theme pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-theme-tertiary">
            © {currentYear} Kaarthickeyan D. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="mailto:kaarthickeyan.d@gmail.com" className="text-theme-tertiary hover:text-theme-accent transition-colors flex items-center gap-2">
              <FaEnvelope className="w-4 h-4" /> kaarthickeyan.d@gmail.com
            </a>
            <a href="tel:+916383042509" className="text-theme-tertiary hover:text-theme-accent transition-colors flex items-center gap-2">
              <FaPhone className="w-4 h-4" /> +91 63830 42509
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
