import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Gradientes de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Contenido de texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 backdrop-blur"
            style={{ 
              backgroundColor: 'rgba(168, 85, 247, 0.2)',
              border: '1px solid rgba(168, 85, 247, 0.4)'
            }}
          >
            <span style={{ color: '#A855F7' }} className="font-bold text-xs sm:text-sm">
              👋 ¡Hola! Soy Desarrollador Full Stack
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent block">
              ÁLVARO
            </span>
            <span className="text-white block">ACOSTA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed"
          >
            Desarrollador especializado en{' '}
            <span className="text-pink-400 font-bold">Android/Kotlin</span>,{' '}
            <span className="text-purple-400 font-bold">React</span> y{' '}
            <span className="text-cyan-400 font-bold">Node.js</span>.
            <br className="hidden sm:block" />
            Transformo ideas en aplicaciones funcionales y atractivas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-white shadow-lg transition cursor-pointer text-sm sm:text-base w-full sm:w-auto"
              style={{ background: 'linear-gradient(to right, #A855F7, #EC4899)' }}
            >
              Ver Proyectos
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 font-bold text-white backdrop-blur transition cursor-pointer text-sm sm:text-base text-center w-full sm:w-auto"
              style={{ 
                borderColor: '#00E5FF',
                backgroundColor: 'rgba(0, 229, 255, 0.1)'
              }}
            >
              Contactar
            </motion.a>
          </motion.div>

          {/* Iconos sociales */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center sm:justify-start"
          >
            <motion.a
              href="https://github.com/barvaro0411"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              className="p-2 sm:p-3 rounded-full backdrop-blur transition cursor-pointer"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/alvaro-acosta-15523b210"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              className="p-2 sm:p-3 rounded-full backdrop-blur transition cursor-pointer"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.a>

            <motion.a
              href="mailto:barvaro0411@gmail.com"
              whileHover={{ scale: 1.2, rotate: 360 }}
              className="p-2 sm:p-3 rounded-full backdrop-blur transition cursor-pointer"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Imagen de perfil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative order-first md:order-last"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 60px rgba(168, 85, 247, 0.3)',
                '0 0 80px rgba(236, 72, 153, 0.4)',
                '0 0 60px rgba(0, 229, 255, 0.3)',
                '0 0 80px rgba(168, 85, 247, 0.3)',
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative"
          >
            <img 
              src="/images/nueva.jpg"
              alt="Álvaro Acosta"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-3xl"
              style={{
                border: '4px solid',
                borderImage: 'linear-gradient(45deg, #A855F7, #EC4899, #00E5FF) 1'
              }}
            />
            
            {/* Efecto de brillo */}
            <motion.div
              animate={{ 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1), rgba(0, 229, 255, 0.1))',
                pointerEvents: 'none'
              }}
            />
          </motion.div>

          {/* Badge flotante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-md shadow-xl"
            style={{
              background: 'linear-gradient(to right, rgba(168, 85, 247, 0.9), rgba(236, 72, 153, 0.9))',
              border: '2px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <p className="text-white font-bold text-xs sm:text-sm">🚀 Disponible para proyectos</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, y: { duration: 1.5, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToProjects}
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#A855F7' }} />
      </motion.div>
    </section>
  )
}

export default Hero
