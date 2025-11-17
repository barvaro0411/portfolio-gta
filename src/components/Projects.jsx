import { motion, AnimatePresence } from 'framer-motion'
import { Github, Play, X } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const toggleDemo = (projectId) => {
    if (hoveredProject === projectId) {
      setHoveredProject(null)
    } else {
      setHoveredProject(projectId)
    }
  }

  const projects = [
    {
      id: 1,
      title: 'FinancIA Mobile',
      description: 'App móvil de finanzas personales con IA, multi-moneda y visualización de datos en tiempo real.',
      tech: ['Kotlin', 'Firebase', 'Room DB', 'Retrofit', 'OpenAI API'],
      github: 'https://github.com/barvaro0411/FinancIA-Mobile',
      demo: null,
      color: '#FF6EC7',
      status: 'En Desarrollo'
    },
    {
      id: 2,
      title: 'La Feria Digital',
      description: 'Marketplace con autenticación, gestión de productos, carrito de compras y códigos de descuento.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Bootstrap'],
      github: 'https://github.com/barvaro0411/la-feria-digital',
      demo: '/demos/laferia-demo.gif',
      color: '#A855F7',
      status: 'En Desarrollo'
    },
    {
      id: 3,
      title: 'Portal de Descuentos',
      description: 'Sitio web para códigos de descuento con sistema de búsqueda y categorías.',
      tech: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/barvaro0411/descuentos-web',
      demo: null,
      color: '#00E5FF',
      status: 'Completado'
    },
    {
      id: 4,
      title: 'Portfolio GTA VI',
      description: 'Portafolio personal con diseño inspirado en videojuegos AAA y animaciones fluidas.',
      tech: ['React', 'Framer Motion', 'Tailwind', 'EmailJS'],
      github: 'https://github.com/barvaro0411/portfolio-gta',
      demo: null,
      color: '#FF8C42',
      status: 'Completado'
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-7xl md:text-9xl mb-20"
          style={{ color: '#00E5FF' }}
        >
          MISSIONS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="relative p-6 md:p-8 rounded-2xl border-2 backdrop-blur overflow-hidden"
                style={{
                  background: 'linear-gradient(to bottom right, #0A0A0A, #050505)',
                  borderColor: `${project.color}40`,
                  minHeight: '400px'
                }}
              >
                {/* GIF Demo - Desktop (hover) y Mobile (click) */}
                <AnimatePresence>
                  {project.demo && hoveredProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 bg-black/95 flex items-center justify-center p-4 md:p-6"
                    >
                      <div className="relative w-full h-full">
                        <img 
                          src={project.demo} 
                          alt="Demo"
                          className="w-full h-full object-contain rounded-xl border-2"
                          style={{ borderColor: project.color }}
                        />
                        
                        {/* Botón cerrar en móvil */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setHoveredProject(null)
                          }}
                          className="md:hidden absolute top-2 right-2 p-2 rounded-full"
                          style={{ backgroundColor: project.color }}
                        >
                          <X className="w-5 h-5 text-white" />
                        </button>

                        {/* Badge DEMO */}
                        <div
                          className="absolute top-2 left-2 md:top-4 md:right-4 md:left-auto px-3 md:px-4 py-1 md:py-2 rounded-full flex items-center gap-2 font-bold text-xs md:text-sm"
                          style={{ backgroundColor: project.color }}
                        >
                          <Play className="w-3 h-3 md:w-4 md:h-4" fill="white" />
                          <span className="text-white">DEMO</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Contenido */}
                <div className="relative z-10">
                  <motion.div
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                    style={{ 
                      backgroundColor: `${project.color}20`, 
                      color: project.color 
                    }}
                  >
                    {project.status}
                  </motion.div>
                  
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border"
                        style={{
                          backgroundColor: `${project.color}15`,
                          borderColor: `${project.color}40`,
                          color: project.color
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* Botón Ver Demo (solo si tiene demo) */}
                    {project.demo && (
                      <button
                        onClick={() => toggleDemo(project.id)}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-bold text-sm md:text-base"
                        style={{ 
                          backgroundColor: project.color,
                          color: 'white'
                        }}
                      >
                        <Play className="w-4 h-4" />
                        Ver Demo
                      </button>
                    )}

                    {/* Botón Ver Código */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl border-2 font-bold text-sm md:text-base"
                      style={{ 
                        borderColor: project.color,
                        color: project.color,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      <Github className="w-4 h-4" />
                      Ver Código
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
