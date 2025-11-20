import React, { useState } from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

export default function Contact(): JSX.Element {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:kaarthickeyan.d@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => {
      setName('')
      setEmail('')
      setMessage('')
      setSent(false)
    }, 2000)
  }

  return (
    <section id="contact" className="w-full py-24 px-4 bg-slate-900">
      <div className="max-w-2xl mx-auto">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-500">
            Get In Touch
          </motion.h2>
          <motion.p variants={item} className="text-slate-400 mb-10 text-lg">
            Have a project or collaboration idea? Let's connect and build something amazing together.
          </motion.p>

          {sent ? (
            <motion.div variants={item} className="p-6 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 text-green-300 text-center font-semibold">
              ✨ Thank you! Your email client is opening. I'll get back to you soon!
            </motion.div>
          ) : (
            <motion.form onSubmit={handleSubmit} variants={item} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">Name</label>
                <input
                  id="name"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                <input
                  id="email"
                  required
                  type="email"
                  placeholder="your-email@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold hover:shadow-lg hover:shadow-cyan-400/50 transition-shadow"
              >
                Send Message
              </motion.button>
            </motion.form>
          )}

          {/* Quick contact options */}
          <motion.div variants={item} className="mt-12 pt-10 border-t border-slate-700">
            <p className="text-slate-400 text-sm mb-6">Or reach out directly:</p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:kaarthickeyan.d@gmail.com" className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold transition-colors">
                Email: kaarthickeyan.d@gmail.com
              </a>
              <a href="tel:+916383042509" className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold transition-colors">
                Phone: +91 63830 42509
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
