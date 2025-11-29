import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { DiscountBanner } from '../components/DiscountBanner'
import { Benefits } from '../components/Benefits'
import { Footer } from '../components/Footer'

export function HomePage() {
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
