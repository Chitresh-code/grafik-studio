import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { DiscountBanner } from './components/DiscountBanner'
import { Benefits } from './components/Benefits'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Hero />
      <Services />
      <DiscountBanner />
      <Benefits />
      <Footer />
    </div>
  )
}

export default App
