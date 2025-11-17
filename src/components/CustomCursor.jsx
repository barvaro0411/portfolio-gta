import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Solo agregamos los listeners si es un dispositivo con puntero fino (PC)
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener('mousemove', handleMouseMove)
      
      const hoverElements = document.querySelectorAll('a, button, input, textarea')
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        hoverElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter)
          el.removeEventListener('mouseleave', handleMouseLeave)
        })
      }
    }
  }, [])

  return (
    <>
      {/* Cursor principal - Oculto en móvil (hidden), visible en escritorio (md:block) */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div 
          className="w-5 h-5 rounded-full border-2"
          style={{ 
            borderColor: '#FF6EC7',
            boxShadow: '0 0 20px rgba(255, 110, 199, 0.6)'
          }}
        />
      </motion.div>

      {/* Cursor secundario (trailing) - Oculto en móvil */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full hidden md:block"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: '#FF6EC7',
          boxShadow: '0 0 10px rgba(255, 110, 199, 0.8)'
        }}
      />
    </>
  )
}

export default CustomCursor