import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const menuItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'MISSIONS', id: 'projects' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'CONTACT', id: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 backdrop-blur-md border-b"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderColor: 'rgba(168, 85, 247, 0.3)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Responsive */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-display text-xl sm:text-2xl md:text-3xl cursor-pointer"
          onClick={() => scrollToSection('hero')}
          style={{ color: '#FF6EC7' }}
        >
          ÁLVARO.DEV
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.1, color: '#FF6EC7' }}
              onClick={() => scrollToSection(item.id)}
              className="font-bold text-sm tracking-wider transition"
              style={{ color: '#FFFFFF' }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg"
          style={{ color: '#FF6EC7' }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-4 pb-4 space-y-3"
        >
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-3 rounded-lg font-bold text-sm tracking-wider transition"
              style={{ 
                color: '#FFFFFF',
                backgroundColor: 'rgba(168, 85, 247, 0.1)'
              }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
