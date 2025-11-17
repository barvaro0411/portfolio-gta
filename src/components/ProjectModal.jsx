import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed inset-4 md:inset-20 z-50 overflow-y-auto"
          >
            <div 
              className="relative p-8 rounded-3xl border-2 backdrop-blur"
              style={{
                background: 'linear-gradient(to bottom right, rgba(10, 10, 10, 0.95), rgba(5, 5, 5, 0.95))',
                borderColor: 'rgba(255, 110, 199, 0.5)'
              }}
            >
              {/* Botón cerrar */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full"
                style={{ backgroundColor: 'rgba(255, 110, 199, 0.2)' }}
              >
                <X className="w-6 h-6" style={{ color: '#FF6EC7' }} />
              </motion.button>

              {/* Contenido */}
              <h2 className="font-display text-5xl mb-4" style={{ color: '#FF6EC7' }}>
                {project.title}
              </h2>
              <p className="text-2xl mb-6" style={{ color: '#00E5FF' }}>
                {project.subtitle}
              </p>
              
              <div className="mb-6">
                <h3 className="font-display text-2xl mb-3" style={{ color: '#A855F7' }}>
                  Descripción
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-display text-2xl mb-3" style={{ color: '#A855F7' }}>
                  Tecnologías
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full border"
                      style={{
                        backgroundColor: 'rgba(0, 229, 255, 0.1)',
                        borderColor: '#00E5FF',
                        color: '#00E5FF'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Características */}
              {project.features && (
                <div className="mb-6">
                  <h3 className="font-display text-2xl mb-3" style={{ color: '#A855F7' }}>
                    Características Principales
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span style={{ color: '#FF6EC7' }}>▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links */}
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-full flex items-center gap-2"
                  style={{ background: 'linear-gradient(to right, #FF6EC7, #A855F7)' }}
                >
                  <Github className="w-5 h-5" />
                  Ver Código
                </motion.a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
