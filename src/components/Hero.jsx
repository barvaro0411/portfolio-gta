import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), #0A0A0A, rgba(255, 110, 199, 0.2))'
        }}
      />
      
      {/* Grid animado */}
      <motion.div
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 grid-background"
      />

      {/* Orbes flotantes de fondo */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, #FF6EC7, transparent)' }}
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, #A855F7, transparent)' }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="font-display text-9xl md:text-[12rem] leading-none mb-4"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255, 110, 199, 0.5)', 
                '0 0 40px rgba(255, 110, 199, 1)', 
                '0 0 20px rgba(255, 110, 199, 0.5)'
              ] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              background: 'linear-gradient(to right, #FF6EC7, #A855F7, #FF8C42)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ÁLVARO
          </motion.h1>
          
          {/* Efecto de escritura con TODAS las especialidades */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-display text-4xl md:text-6xl mb-8"
            style={{ color: '#00E5FF', minHeight: '80px' }}
          >
            <TypeAnimation
              sequence={[
                'FULL STACK DEVELOPER',
                2000,
                'C# .NET DEVELOPER',
                2000,
                'PYTHON SPECIALIST',
                2000,
                'REACT DEVELOPER',
                2000,
                'ANGULAR EXPERT',
                2000,
                'KOTLIN ANDROID DEV',
                2000,
                'FIREBASE EXPERT',
                2000,
                'DJANGO DEVELOPER',
                2000,
                'PHP SPECIALIST',
                2000,
                'ORACLE DATABASE PRO',
                2000,
                'IA & AUTOMATION',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
            style={{ color: '#D1D5DB' }}
          >
            Creando experiencias digitales épicas desde Chile 🇨🇱
          </motion.p>

          <motion.div className="flex gap-4 justify-center flex-wrap">
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 110, 199, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 text-white font-bold text-xl rounded-full border-2 shadow-lg cursor-pointer"
                style={{
                  background: 'linear-gradient(to right, #FF6EC7, #A855F7)',
                  borderColor: '#FF6EC7'
                }}
              >
                VIEW MISSIONS
              </motion.button>
            </Link>

            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 229, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 text-white font-bold text-xl rounded-full border-2 shadow-lg cursor-pointer"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: '#00E5FF'
                }}
              >
                CONTACT ME
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <ChevronDown className="w-10 h-10" style={{ color: '#FF6EC7' }} />
        </motion.div>
      </Link>
    </section>
  )
}

export default Hero
