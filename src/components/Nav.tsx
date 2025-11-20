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
    <nav className="fixed top-0 w-full bg-gradient-to-b from-slate-950/95 to-slate-950/80 backdrop-blur-md border-b border-slate-800/50 sticky z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-500 hover:scale-105 transition-transform">
          Kaarthickeyan D
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-300 hover:text-cyan-300 transition-colors relative group"
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
            className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {open ? <HiOutlineX className="w-6 h-6 text-slate-200" /> : <HiOutlineMenu className="w-6 h-6 text-slate-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden border-t border-slate-800/50"
      >
        <div className="px-4 py-4 space-y-2 bg-slate-900/50">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded-lg text-slate-300 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  )
}
