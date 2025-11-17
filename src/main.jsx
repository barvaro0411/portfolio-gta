import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactGA from "react-ga4";

// --- ZONA DE CORRECCIÓN ---
const TRACKING_ID = "TU-ID-G-AQUI"; // Pon tu ID real aquí

// Verificamos si initialize existe directamente, si no, buscamos en .default
if (typeof ReactGA.initialize === 'function') {
  ReactGA.initialize(TRACKING_ID);
} else if (ReactGA.default && typeof ReactGA.default.initialize === 'function') {
  ReactGA.default.initialize(TRACKING_ID); // Esto suele arreglarlo en Rolldown
  console.log("GA inicializado vía .default");
} else {
  console.warn("No se pudo inicializar Google Analytics");
}
// --------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)