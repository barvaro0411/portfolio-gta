import { motion } from 'framer-motion'
import { Mail, Github, Send, Linkedin, Phone, MapPin } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

const Contact = () => {
  const form = useRef()
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)

    const SERVICE_ID = 'service_ttqcrtb'
    const TEMPLATE_ID = 'template_rcr1rch'           // ← CAMBIA ESTO POR TU TEMPLATE ID REAL
    const PUBLIC_KEY = '-zKZSVthMhOEcJAHC'

    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form.current,
      PUBLIC_KEY
    )
    .then(() => {
      setSending(false)
      
      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 backdrop-blur shadow-lg max-w-sm"
          style={{
            background: 'linear-gradient(to right, rgba(255, 110, 199, 0.9), rgba(168, 85, 247, 0.9))',
            borderColor: '#FF6EC7'
          }}
        >
          <div className="flex items-center gap-2 md:gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl"
            >
              ✅
            </motion.div>
            <div>
              <p className="font-display text-lg md:text-xl text-white">MISSION COMPLETE!</p>
              <p className="text-xs md:text-sm text-white/80">Mensaje enviado correctamente</p>
            </div>
          </div>
        </motion.div>
      ), { duration: 4000 })
      
      e.target.reset()
    })
    .catch((error) => {
      setSending(false)
      console.error('Error:', error)
      
      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 backdrop-blur shadow-lg max-w-sm"
          style={{
            background: 'linear-gradient(to right, rgba(255, 0, 0, 0.9), rgba(200, 0, 0, 0.9))',
            borderColor: '#FF0000'
          }}
        >
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-xl md:text-2xl">❌</span>
            <div>
              <p className="font-display text-lg md:text-xl text-white">ERROR!</p>
              <p className="text-xs md:text-sm text-white/80">Intenta de nuevo</p>
            </div>
          </div>
        </motion.div>
      ), { duration: 4000 })
    })
  }

  return (
    <section id="contact" className="min-h-screen py-12 md:py-20 px-4 md:px-6 relative flex items-center">
      <Toaster position="top-center" />
      
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl lg:text-9xl mb-8 md:mb-16"
          style={{ color: '#A855F7' }}
        >
          SOCIAL_CLUB
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-3xl md:text-4xl mb-4 md:mb-6" style={{ color: '#FF6EC7' }}>
              ¿Listo para una nueva misión?
            </h3>
            <p className="text-base md:text-xl mb-6 md:mb-8 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales.
            </p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <motion.a
                href="https://github.com/barvaro0411"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5, scale: 1.01 }}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border transition cursor-pointer"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(0, 229, 255, 0.3)'
                }}
              >
                <Github className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#00E5FF' }} />
                <span className="text-sm md:text-base text-white break-all">github.com/barvaro0411</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/alvaro-acosta-15523b210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5, scale: 1.01 }}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border transition cursor-pointer"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(168, 85, 247, 0.3)'
                }}
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#A855F7' }} />
                <span className="text-sm md:text-base text-white break-all">alvaro-acosta-15523b210</span>
              </motion.a>

              <motion.a
                href="mailto:barvaro0411@gmail.com"
                whileHover={{ x: 5, scale: 1.01 }}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border transition cursor-pointer"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 110, 199, 0.3)'
                }}
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#FF6EC7' }} />
                <span className="text-sm md:text-base text-white break-all">barvaro0411@gmail.com</span>
              </motion.a>

              <motion.div
                whileHover={{ x: 5, scale: 1.01 }}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border transition"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 140, 66, 0.3)'
                }}
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#FF8C42' }} />
                <span className="text-sm md:text-base text-white">+56 9 6622 1297</span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5, scale: 1.01 }}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border transition"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(0, 229, 255, 0.3)'
                }}
              >
                <MapPin className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#00E5FF' }} />
                <span className="text-sm md:text-base text-white">Recoleta, Santiago, Chile</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8 p-4 md:p-6 rounded-xl border"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(168, 85, 247, 0.3)'
              }}
            >
              <div className="text-center">
                <div className="font-display text-2xl md:text-3xl" style={{ color: '#FF6EC7' }}>2-3</div>
                <div className="text-[10px] md:text-xs text-gray-400">Días respuesta</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl md:text-3xl" style={{ color: '#00E5FF' }}>100%</div>
                <div className="text-[10px] md:text-xs text-gray-400">Compromiso</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl md:text-3xl" style={{ color: '#FF8C42' }}>24/7</div>
                <div className="text-[10px] md:text-xs text-gray-400">Disponibilidad</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={form}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
          >
            <motion.input
              whileFocus={{ scale: 1.01, borderColor: '#A855F7' }}
              type="text"
              name="name"
              placeholder="Tu Nombre"
              required
              disabled={sending}
              className="w-full px-4 md:px-6 py-3 md:py-4 border-2 rounded-xl focus:outline-none text-white placeholder-gray-500 transition cursor-pointer text-sm md:text-base disabled:opacity-50"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(168, 85, 247, 0.3)'
              }}
            />
            
            <motion.input
              whileFocus={{ scale: 1.01, borderColor: '#A855F7' }}
              type="email"
              name="email"
              placeholder="Tu Email"
              required
              disabled={sending}
              className="w-full px-4 md:px-6 py-3 md:py-4 border-2 rounded-xl focus:outline-none text-white placeholder-gray-500 transition cursor-pointer text-sm md:text-base disabled:opacity-50"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(168, 85, 247, 0.3)'
              }}
            />
            
            <motion.textarea
              whileFocus={{ scale: 1.01, borderColor: '#A855F7' }}
              name="message"
              rows="5"
              placeholder="Tu Mensaje"
              required
              disabled={sending}
              className="w-full px-4 md:px-6 py-3 md:py-4 border-2 rounded-xl focus:outline-none text-white placeholder-gray-500 transition resize-none cursor-pointer text-sm md:text-base disabled:opacity-50"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(168, 85, 247, 0.3)'
              }}
            />
            
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: sending ? 1 : 1.02, boxShadow: '0 0 30px rgba(168, 85, 247, 0.6)' }}
              whileTap={{ scale: sending ? 1 : 0.98 }}
              className="w-full px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 shadow-lg transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(to right, #A855F7, #FF6EC7)'
              }}
            >
              {sending ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  ENVIANDO...
                </>
              ) : (
                <>
                  ENVIAR MENSAJE
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-20"
          style={{ color: '#6B7280' }}
        >
          <p className="font-display text-sm md:text-xl">© 2025 ÁLVARO PATRICIO ACOSTA GONZÁLEZ • MADE WITH 💜 IN CHILE</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
