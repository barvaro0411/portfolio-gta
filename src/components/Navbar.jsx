import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'ABOUT', to: 'about' },
    { name: 'MISSIONS', to: 'projects' },
    { name: 'SKILLS', to: 'skills' },
    { name: 'EXPERIENCE', to: 'timeline' },
    { name: 'CONTACT', to: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg border-b"
      style={{ 
        backgroundColor: 'rgba(5, 5, 5, 0.8)',
        borderColor: 'rgba(255, 110, 199, 0.2)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-display text-3xl cursor-pointer"
            style={{ color: '#FF6EC7' }}
          >
            ÁLVARO.DEV
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active-link"
            >
              <motion.div
                whileHover={{ scale: 1.1, color: '#FF6EC7' }}
                className="font-bold text-white cursor-pointer transition"
              >
                {link.name}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-50"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden border-t"
        style={{ 
          backgroundColor: '#0A0A0A',
          borderColor: 'rgba(255, 110, 199, 0.2)'
        }}
      >
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              whileHover={{ x: 10, backgroundColor: 'rgba(255, 110, 199, 0.1)' }}
              className="block px-6 py-4 text-white cursor-pointer transition"
            >
              {link.name}
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
