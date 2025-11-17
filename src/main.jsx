import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import './index.css'
import App from './App.jsx'

// Inicializar Google Analytics
ReactGA.initialize('G-XXXXXXXXXX') // Reemplazar con tu Measurement ID
ReactGA.send('pageview')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
