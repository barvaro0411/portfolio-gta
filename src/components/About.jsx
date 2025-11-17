import { Download } from 'lucide-react'

// Dentro del componente, después de la bio:
<motion.div className="flex justify-center mt-8">
  <motion.a
    href="/CV-Alvaro-Patricio-Acosta-Gonzalez.pdf"
    download
    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 110, 199, 0.6)' }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 cursor-pointer"
    style={{
      background: 'linear-gradient(to right, #FF6EC7, #A855F7)',
      color: 'white'
    }}
  >
    <Download className="w-5 h-5" />
    DESCARGAR CV
  </motion.a>
</motion.div>
