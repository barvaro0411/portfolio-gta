import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import BackToTop from './components/BackToTop'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <Navbar />
      <BackToTop />
      
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </>
  )
}

export default App
