import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import DarkToggle from './DarkToggle'

const navLinks = [
  { label: 'Home', href: '/#' },
  { label: 'About', href: '/#about' },
  { label: 'Internships', href: '/#internships' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Achievements', href: '/#achievements' },
  { label: 'Contact', href: '/#contact' }
]

export default function Nav(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <nav className="fixed top-0 w-full nav-bg backdrop-blur-md border-b border-t-theme sticky z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/portfolio/" className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-500 hover:scale-105 transition-transform">
          Kaarthickeyan D
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-theme-secondary hover:text-theme-accent transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <DarkToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <DarkToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg hover:bg-theme-secondary transition-colors"
          >
            {open ? <HiOutlineX className="w-6 h-6 text-theme-primary" /> : <HiOutlineMenu className="w-6 h-6 text-theme-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden border-t border-theme"
      >
        <div className="px-4 py-4 space-y-2 bg-theme-secondary">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded-lg text-theme-secondary hover:text-theme-accent hover:bg-theme-card transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  )
}
