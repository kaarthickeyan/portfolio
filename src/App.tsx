import React from 'react'
import Hero from './pages/Home'
import About from './pages/About'
import Internships from './pages/Internships'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import SEO from './components/SEO'

export default function App(): JSX.Element {
  return (
    <>
      <SEO />
      <div className="w-full flex flex-col min-h-screen">
        <main className="flex-1 w-full pt-20">
          <Hero />
          <About />
          <Internships />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
