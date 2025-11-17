import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Juan Pérez',
      role: 'CEO, Tech Startup',
      image: '👨‍💼',
      rating: 5,
      text: 'Álvaro desarrolló nuestra app móvil de forma impecable. Su conocimiento en Android y Firebase es excepcional.',
      color: '#FF6EC7'
    },
    {
      name: 'María González',
      role: 'Product Manager',
      image: '👩‍💻',
      rating: 5,
      text: 'Profesional, rápido y con gran atención al detalle. Superó nuestras expectativas en el proyecto web.',
      color: '#A855F7'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'CTO, Fintech',
      image: '👨‍🔧',
      rating: 5,
      text: 'Su experiencia en React y Firebase nos permitió lanzar nuestro MVP en tiempo récord. Altamente recomendado.',
      color: '#00E5FF'
    }
  ]

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-7xl md:text-9xl mb-20 text-center"
          style={{ color: '#FF6EC7' }}
        >
          REVIEWS
        </motion.h2>

        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="p-12 rounded-3xl border-2 backdrop-blur"
            style={{
              background: 'linear-gradient(to bottom right, rgba(10, 10, 10, 0.8), rgba(5, 5, 5, 0.8))',
              borderColor: `${testimonials[activeIndex].color}40`
            }}
          >
            {/* Rating */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-current"
                  style={{ color: testimonials[activeIndex].color }}
                />
              ))}
            </div>

            {/* Texto */}
            <p className="text-2xl text-gray-300 text-center mb-8 leading-relaxed italic">
              "{testimonials[activeIndex].text}"
            </p>

            {/* Autor */}
            <div className="flex items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-6xl"
              >
                {testimonials[activeIndex].image}
              </motion.div>
              <div>
                <h4 className="font-display text-2xl text-white">
                  {testimonials[activeIndex].name}
                </h4>
                <p style={{ color: testimonials[activeIndex].color }}>
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Controles */}
          <div className="flex gap-4 justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-4 rounded-full border-2 cursor-none"
              style={{
                backgroundColor: 'rgba(255, 110, 199, 0.2)',
                borderColor: '#FF6EC7'
              }}
            >
              <ChevronLeft className="w-6 h-6" style={{ color: '#FF6EC7' }} />
            </motion.button>

            {/* Indicadores */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.3 }}
                  className="w-3 h-3 rounded-full cursor-none"
                  style={{
                    backgroundColor: index === activeIndex ? '#FF6EC7' : 'rgba(255, 110, 199, 0.3)'
                  }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-4 rounded-full border-2 cursor-none"
              style={{
                backgroundColor: 'rgba(255, 110, 199, 0.2)',
                borderColor: '#FF6EC7'
              }}
            >
              <ChevronRight className="w-6 h-6" style={{ color: '#FF6EC7' }} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
