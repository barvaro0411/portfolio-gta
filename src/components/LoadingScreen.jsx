import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Logo animado */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-24 h-24 border-4 border-t-transparent rounded-full mb-8"
        style={{ borderColor: '#FF6EC7' }}
      />
      
      {/* Texto principal */}
      <motion.h1
        animate={{ 
          opacity: [0.5, 1, 0.5],
          textShadow: [
            '0 0 20px rgba(255, 110, 199, 0.5)',
            '0 0 40px rgba(255, 110, 199, 1)',
            '0 0 20px rgba(255, 110, 199, 0.5)'
          ]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="font-display text-6xl md:text-8xl mb-4"
        style={{ color: '#FF6EC7' }}
      >
        LOADING
      </motion.h1>

      {/* Subtexto */}
      <motion.p
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-xl mb-8"
        style={{ color: '#A855F7' }}
      >
        Preparando la experiencia...
      </motion.p>

      {/* Dots animados */}
      <motion.div className="flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -20, 0],
              backgroundColor: ['#FF6EC7', '#A855F7', '#FF6EC7']
            }}
            transition={{ 
              duration: 0.6, 
              repeat: Infinity,
              delay: i * 0.15
            }}
            className="w-3 h-3 rounded-full"
          />
        ))}
      </motion.div>

      {/* Barra de progreso */}
      <motion.div
        className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mt-8"
      >
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="h-full w-1/2 rounded-full"
          style={{
            background: 'linear-gradient(to right, transparent, #FF6EC7, transparent)'
          }}
        />
      </motion.div>

      {/* Texto inferior */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 text-sm"
        style={{ color: '#6B7280' }}
      >
        © 2025 ÁLVARO ACOSTA
      </motion.p>
    </motion.div>
  )
}

export default LoadingScreen
