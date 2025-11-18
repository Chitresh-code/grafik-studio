import { useEffect, useState } from 'react'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { DiscountBanner } from './components/DiscountBanner'
import './App.css'

const navLinks = [
  { label: 'About Us' },
  { label: 'Results', dropdown: true },
  { label: 'Email Audit' },
  { label: 'Services', dropdown: true },
  { label: 'Resources', dropdown: true },
]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-shell">
      <NavBar navLinks={navLinks} isScrolled={isScrolled} />
      <Hero />
      <Services />
      <DiscountBanner />
    </div>
  )
}

export default App
