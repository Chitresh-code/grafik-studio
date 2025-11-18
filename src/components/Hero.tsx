import { NavBar } from './NavBar'
import { HeroText } from './HeroText'
import { HeroCarousel } from './HeroCarousel'
import './Hero.css'
import heroBg from '../assets/hero-bg.jpg'
import heroOne from '../assets/hero-1.svg'
import heroTwo from '../assets/hero-2.svg'
import heroThree from '../assets/hero-3.svg'
import heroFour from '../assets/hero-4.svg'

const navLinks = [
  { label: 'About Us' },
  { label: 'Results', dropdown: true },
  { label: 'Email Audit' },
  { label: 'Services', dropdown: true },
  { label: 'Resources', dropdown: true },
]

const heroVisuals = [heroOne, heroTwo, heroThree, heroFour]

const carouselConfigs = [
  { images: heroVisuals },
  { images: [...heroVisuals.slice(1), heroVisuals[0]] },
  { images: [...heroVisuals.slice(2), ...heroVisuals.slice(0, 2)] },
]

export function Hero() {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <NavBar navLinks={navLinks} />
      <div className="hero-body">
        <HeroText />
        <div className="hero-right" aria-hidden="true">
          <div className="hero-columns">
            {carouselConfigs.map((config, index) => (
              <HeroCarousel
                key={index}
                images={config.images}
                duration={1000}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
