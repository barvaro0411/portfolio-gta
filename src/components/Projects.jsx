import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const missions = [
    {
      title: 'MISSION: SmartWallet',
      subtitle: 'FinancIA Mobile',
      description: 'Aplicación móvil Android de finanzas personales con Firebase, multi-moneda y análisis inteligente',
      tech: ['Kotlin', 'Firebase', 'Android', 'Room DB'],
      color: 'linear-gradient(to right, #FF6EC7, #A855F7)',
      github: 'https://github.com/barvaro0411/FinancIA-Mobile',
      gradient: 'linear-gradient(to bottom right, rgba(255, 110, 199, 0.2), rgba(168, 85, 247, 0.2))'
    },
    {
      title: 'MISSION: WebFinance',
      subtitle: 'FinancIA Web',
      description: 'Plataforma web de gestión financiera con diseño moderno y funcionalidades avanzadas',
      tech: ['React', 'JavaScript', 'CSS'],
      color: 'linear-gradient(to right, #A855F7, #00E5FF)',
      github: 'https://github.com/barvaro0411/FinancIA-Web',
      gradient: 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), rgba(0, 229, 255, 0.2))'
    },
    {
      title: 'MISSION: DiscountHunter',
      subtitle: 'La Feria Digital',
      description: 'Marketplace digital con sistema de códigos de descuento y autenticación',
      tech: ['JavaScript', 'Node.js', 'Web'],
      color: 'linear-gradient(to right, #FF8C42, #FF6EC7)',
      github: 'https://github.com/barvaro0411/la-feria-digital',
      gradient: 'linear-gradient(to bottom right, rgba(255, 140, 66, 0.2), rgba(255, 110, 199, 0.2))'
    },
    {
      title: 'MISSION: PriceFinder',
      subtitle: 'Precio Festín',
      description: 'Aplicación TypeScript para comparación de precios y búsqueda de ofertas',
      tech: ['TypeScript', 'React', 'API Integration'],
      color: 'linear-gradient(to right, #00E5FF, #A855F7)',
      github: 'https://github.com/barvaro0411/precio-festin',
      gradient: 'linear-gradient(to bottom right, rgba(0, 229, 255, 0.2), rgba(168, 85, 247, 0.2))'
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-7xl md:text-9xl mb-20 glitch"
          style={{ color: '#FF8C42' }}
        >
          MISSIONS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="p-8 rounded-3xl border-2 backdrop-blur relative overflow-hidden group cursor-pointer"
              style={{
                background: mission.gradient,
                borderColor: 'rgba(255, 110, 199, 0.3)'
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ background: mission.color }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-4xl text-white mb-2">{mission.title}</h3>
                    <p className="text-xl" style={{ color: '#00E5FF' }}>{mission.subtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      href={mission.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 rounded-full transition cursor-pointer"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                <p className="mb-6 leading-relaxed" style={{ color: '#D1D5DB' }}>
                  {mission.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {mission.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 rounded-full text-sm font-semibold border cursor-pointer"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'rgba(0, 229, 255, 0.3)'
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href={mission.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="px-6 py-3 rounded-full font-bold flex items-center gap-2 group cursor-pointer w-fit"
                  style={{ background: mission.color }}
                >
                  VIEW MISSION
                  <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
  