import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { DiscountBanner } from './components/DiscountBanner'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Hero />
      <Services />
      <DiscountBanner />
    </div>
  )
}

export default App
