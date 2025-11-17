import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award } from 'lucide-react'

const Timeline = () => {
  const experiences = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Analista Programador',
      company: 'Banmédica y Vida Tres',
      location: 'Las Condes, Santiago',
      period: 'Abril 2024 - Noviembre 2024',
      description: 'Desarrollo y mantenimiento de aplicaciones empresariales en entorno corporativo del sector salud. Implementación de soluciones con tecnologías .NET, Python y frameworks modernos.',
      color: '#FF6EC7',
      achievements: [
        'C# .NET + Oracle',
        'Python Django + MySQL',
        'Angular + Bootstrap',
        'QA y Testing',
        'Scripts IA con Python'
      ]
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Gestor Logístico y Digital',
      company: 'Marcos Fotos Chile',
      location: 'Recoleta, Santiago',
      period: '2017 - 2022',
      description: 'Gestión de inventario, digitalización de procesos logísticos y desarrollo web. Implementación de estrategias digitales y automatización de flujos de trabajo.',
      color: '#A855F7',
      achievements: [
        'PHP + WordPress',
        'Gestión de Inventario',
        'Digitalización de Procesos',
        'Estrategias Digitales',
        'Automatización'
      ]
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Técnico en Análisis y Programación',
      company: 'DUOC UC',
      location: 'Santiago, Chile',
      period: '2020 - 2024',
      description: 'Formación técnica en desarrollo de software, bases de datos y metodologías ágiles. Especialización en desarrollo web, móvil y arquitectura de software.',
      color: '#00E5FF',
      achievements: [
        'Desarrollo Web & Mobile',
        'Bases de Datos',
        'Metodologías Ágiles',
        'Design Thinking',
        'Arquitectura de Software'
      ]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certificaciones Profesionales',
      company: 'DUOC UC & SENCE',
      location: 'Santiago, Chile',
      period: '2021 - 2024',
      description: 'Formación continua en tecnologías modernas y mejores prácticas del desarrollo de software. Actualización constante en frameworks y herramientas actuales.',
      color: '#FF8C42',
      achievements: [
        'Calidad de Software',
        'JavaScript + Python',
        'HTML5 + CSS + Bootstrap',
        'Metodologías Ágiles & Lean',
        'Inglés Intermedio TOEIC'
      ]
    }
  ]

  return (
    <section id="timeline" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-7xl md:text-9xl mb-20"
          style={{ color: '#FF8C42' }}
        >
          EXPERIENCE
        </motion.h2>

        <div className="relative">
          {/* Línea vertical */}
          <div 
            className="absolute left-8 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(to bottom, #FF6EC7, #A855F7, #00E5FF, #FF8C42)' }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-20 pb-16"
            >
              {/* Punto en la línea */}
              <motion.div
                whileHover={{ scale: 1.5, rotate: 360 }}
                className="absolute left-6 top-0 w-6 h-6 rounded-full border-4 border-[#050505] cursor-pointer"
                style={{ backgroundColor: exp.color }}
              />

              {/* Contenido */}
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="p-6 rounded-xl border-2 backdrop-blur cursor-pointer"
                style={{
                  background: 'linear-gradient(to bottom right, rgba(10, 10, 10, 0.8), rgba(5, 5, 5, 0.8))',
                  borderColor: `${exp.color}40`
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${exp.color}20`, color: exp.color }}
                  >
                    {exp.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-white mb-1">{exp.title}</h3>
                    <p className="text-lg mb-1" style={{ color: exp.color }}>{exp.company}</p>
                    {exp.location && (
                      <p className="text-sm mb-2" style={{ color: '#6B7280' }}>📍 {exp.location}</p>
                    )}
                    <p className="text-sm mb-3" style={{ color: '#9CA3AF' }}>📅 {exp.period}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                {/* Achievements */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1 rounded-full text-sm border cursor-pointer"
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
