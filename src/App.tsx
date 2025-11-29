import { Routes, Route } from 'react-router-dom'
import { CalendlyProvider } from './components/CalendlyProvider'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { ContactPage } from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <CalendlyProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </CalendlyProvider>
  )
}

export default App
