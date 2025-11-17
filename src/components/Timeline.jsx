import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award } from 'lucide-react'

const Timeline = () => {
  const experiences = [
    {
      icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Analista Programador',
      company: 'Banmédica y Vida Tres',
      location: 'Las Condes, Santiago',
      period: 'Abril 2024 - Nov 2024',
      description: 'Desarrollo y mantenimiento de aplicaciones empresariales en el sector salud.',
      color: '#FF6EC7',
      achievements: [
        'C# .NET + Oracle',
        'Python Django',
        'Angular',
        'QA Testing',
        'Scripts IA'
      ]
    },
    {
      icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Gestor Logístico Digital',
      company: 'Marcos Fotos Chile',
      location: 'Recoleta, Santiago',
      period: '2017 - 2022',
      description: 'Gestión de inventario y digitalización de procesos logísticos.',
      color: '#A855F7',
      achievements: [
        'PHP + WordPress',
        'Gestión Inventario',
        'Digitalización',
        'Automatización'
      ]
    },
    {
      icon: <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Técnico en Análisis y Programación',
      company: 'DUOC UC',
      location: 'Santiago, Chile',
      period: '2020 - 2024',
      description: 'Formación en desarrollo de software, bases de datos y metodologías ágiles.',
      color: '#00E5FF',
      achievements: [
        'Desarrollo Web',
        'Desarrollo Móvil',
        'Bases de Datos',
        'Metodologías Ágiles',
        'Design Thinking'
      ]
    },
    {
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Certificaciones Profesionales',
      company: 'DUOC UC & SENCE',
      location: 'Santiago, Chile',
      period: '2021 - 2024',
      description: 'Formación continua en tecnologías modernas.',
      color: '#FF8C42',
      achievements: [
        'Calidad Software',
        'JavaScript',
        'Python',
        'HTML5 + CSS',
        'Metodologías Ágiles'
      ]
    }
  ]

  return (
    <section id="timeline" className="min-h-screen py-12 md:py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl lg:text-9xl mb-12 md:mb-20"
          style={{ color: '#FF8C42' }}
        >
          EXPERIENCE
        </motion.h2>

        <div className="relative">
          {/* Línea vertical */}
          <div 
            className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(to bottom, #FF6EC7, #A855F7, #00E5FF, #FF8C42)' }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12 md:pl-20 pb-12 md:pb-16"
            >
              {/* Punto en la línea */}
              <motion.div
                whileHover={{ scale: 1.5, rotate: 360 }}
                className="absolute left-3 md:left-6 top-0 w-4 h-4 md:w-6 md:h-6 rounded-full border-2 md:border-4 border-[#050505] cursor-pointer"
                style={{ backgroundColor: exp.color }}
              />

              {/* Contenido */}
              <motion.div
                whileHover={{ x: 5, scale: 1.01 }}
                className="p-4 md:p-6 rounded-xl border-2 backdrop-blur cursor-pointer"
                style={{
                  background: 'linear-gradient(to bottom right, rgba(10, 10, 10, 0.8), rgba(5, 5, 5, 0.8))',
                  borderColor: `${exp.color}40`
                }}
              >
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 md:p-3 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: `${exp.color}20`, color: exp.color }}
                  >
                    {exp.icon}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl md:text-2xl text-white mb-1 break-words">{exp.title}</h3>
                    <p className="text-base md:text-lg mb-1 break-words" style={{ color: exp.color }}>{exp.company}</p>
                    {exp.location && (
                      <p className="text-xs md:text-sm mb-1 break-words" style={{ color: '#6B7280' }}>📍 {exp.location}</p>
                    )}
                    <p className="text-xs md:text-sm mb-2 md:mb-3" style={{ color: '#9CA3AF' }}>📅 {exp.period}</p>
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed">{exp.description}</p>

                {/* Achievements */}
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border cursor-pointer"
                      style={{
                        backgroundColor: `${exp.color}15`,
                        borderColor: `${exp.color}40`,
                        color: exp.color
                      }}
                    >
                      {achievement}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
