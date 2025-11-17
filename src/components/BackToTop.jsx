import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import { animateScroll as scroll } from 'react-scroll'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuint'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full cursor-none shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #FF6EC7, #A855F7)',
            boxShadow: '0 0 30px rgba(255, 110, 199, 0.6)'
          }}
        >
          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
