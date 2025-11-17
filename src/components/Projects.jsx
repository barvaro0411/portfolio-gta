import { motion } from 'framer-motion'
import { Github, Play } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

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
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="relative p-8 rounded-2xl border-2 backdrop-blur cursor-pointer overflow-hidden"
                style={{
                  background: 'linear-gradient(to bottom right, #0A0A0A, #050505)',
                  borderColor: `${project.color}40`,
                  minHeight: '450px'
                }}
              >
                {/* GIF Demo */}
                {project.demo && hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/95 p-6"
                  >
                    <div className="relative w-full h-full">
                      <img 
                        src={project.demo} 
                        alt={`${project.title} demo`}
                        className="w-full h-full object-contain rounded-xl border-2"
                        style={{ borderColor: project.color }}
                      />
                      <div
                        className="absolute top-4 right-4 px-4 py-2 rounded-full flex items-center gap-2 font-bold"
                        style={{ backgroundColor: project.color }}
                      >
                        <Play className="w-4 h-4" fill="white" />
                        <span className="text-sm text-white">DEMO</span>
                      </div>
                    </div>
                  </motion.div>
                )}

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
                  
                  <h3 className="font-display text-3xl text-white mb-2">
                    {project.title}
                  </h3>
                  
                  {project.demo && (
                    <div className="flex items-center gap-1 text-xs font-bold mb-4" style={{ color: project.color }}>
                      <Play className="w-3 h-3" />
                      Hover para ver demo
                    </div>
                  )}

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 rounded-full text-sm border"
                        style={{
                          backgroundColor: `${project.color}15`,
                          borderColor: `${project.color}40`,
                          color: project.color
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 font-bold"
                    style={{ 
                      borderColor: project.color,
                      color: project.color,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    <Github className="w-4 h-4" />
                    Ver Código
                  </motion.a>
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
