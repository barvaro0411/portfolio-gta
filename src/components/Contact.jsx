import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'YOUR_SERVICE_ID',      // Reemplazar con tu Service ID
      'YOUR_TEMPLATE_ID',     // Reemplazar con tu Template ID
      form.current,
      'YOUR_PUBLIC_KEY'       // Reemplazar con tu Public Key
    )
    .then(() => {
      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="px-6 py-4 rounded-xl border-2 backdrop-blur shadow-lg"
          style={{
            background: 'linear-gradient(to right, rgba(255, 110, 199, 0.9), rgba(168, 85, 247, 0.9))',
            borderColor: '#FF6EC7'
          }}
        >
          <div className="flex items-center gap-3">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              ✅
            </motion.div>
            <div>
              <p className="font-display text-xl text-white">MISSION COMPLETE!</p>
              <p className="text-sm text-white/80">Mensaje enviado a barvaro0411@gmail.com</p>
            </div>
          </div>
        </motion.div>
      ), { duration: 3000 })
      
      e.target.reset()
    })
    .catch((error) => {
      console.error('Error:', error)
      toast.error('Error al enviar. Intenta de nuevo.')
    })
  }

  return (
    // ... resto del código
    <form ref={form} onSubmit={handleSubmit}>
      <input type="text" name="user_name" placeholder="Tu Nombre" required />
      <input type="email" name="user_email" placeholder="Tu Email" required />
      <textarea name="message" placeholder="Tu Mensaje" required />
      <button type="submit">ENVIAR MENSAJE</button>
    </form>
  )
}
export default Contact
