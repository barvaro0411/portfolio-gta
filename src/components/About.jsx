import { motion } from 'framer-motion'
import { Code2, Rocket, Zap, Briefcase } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const stats = [
    { icon: <Code2 className="w-8 h-8" />, value: 4, suffix: '+', label: 'PROYECTOS ACTIVOS' },
    { icon: <Briefcase className="w-8 h-8" />, value: 8, suffix: '+', label: 'MESES EXPERIENCIA' },
    { icon: <Rocket className="w-8 h-8" />, value: 100, suffix: '%', label: 'PASIÓN' },
    { icon: <Zap className="w-8 h-8" />, value: '∞', suffix: '', label: 'CAFÉ CONSUMIDO' },
  ]

  return (
    <section id="about" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: 'linear-gradient(to bottom, #0A0A0A, #050505, #0A0A0A)'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-7xl md:text-9xl mb-16"
          style={{ color: '#FF6EC7' }}
        >
          PLAYER_STATS
        </motion.h2>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl border-2 backdrop-blur"
              style={{
                background: 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), rgba(255, 110, 199, 0.2))',
                borderColor: 'rgba(255, 110, 199, 0.3)'
              }}
            >
              <motion.div 
                className="mb-4 flex justify-center" 
                style={{ color: '#00E5FF' }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <div className="font-display text-5xl text-white mb-2">
                {stat.value === '∞' ? (
                  stat.value
                ) : (
                  <>
                    {inView && <CountUp end={stat.value} duration={2.5} />}
                    {stat.suffix}
                  </>
                )}
              </div>
              <div className="text-xs" style={{ color: '#9CA3AF' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl border-2 backdrop-blur"
          style={{
            backgroundColor: 'rgba(10, 10, 10, 0.5)',
            borderColor: 'rgba(168, 85, 247, 0.5)'
          }}
        >
          <h3 className="font-display text-4xl mb-6" style={{ color: '#00E5FF' }}>
            BIO_DATA
          </h3>
          <p className="text-xl leading-relaxed mb-6" style={{ color: '#D1D5DB' }}>
            Técnico en <span className="font-bold" style={{ color: '#A855F7' }}>Análisis y Programación Computacional</span> titulado 
            de <span className="font-bold" style={{ color: '#FF6EC7' }}>DUOC UC</span>, con sólida experiencia en desarrollo de 
            software, automatización de procesos y diseño de soluciones escalables en entornos corporativos.
          </p>
          <p className="text-xl leading-relaxed" style={{ color: '#D1D5DB' }}>
            Especializado en desarrollo web y móvil con <span className="font-bold" style={{ color: '#FF6EC7' }}>C#</span>, 
            <span className="font-bold" style={{ color: '#A855F7' }}> Python</span>, 
            <span className="font-bold" style={{ color: '#FF8C42' }}> PHP</span> y 
            <span className="font-bold" style={{ color: '#00E5FF' }}> JavaScript</span>. 
            Experiencia práctica en <span className="font-bold" style={{ color: '#FF6EC7' }}>Banmédica y Vida Tres</span>, 
            desarrollando aplicaciones empresariales con .NET, Oracle, Django y Angular. 
            Competencias avanzadas en IA, automatización y metodologías ágiles.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
