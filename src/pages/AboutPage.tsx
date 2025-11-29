import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { About } from '../components/About'
import './AboutPage.css'
import { navLinks } from '../data/navLinks'
import { useCalendly } from '../components/CalendlyProvider'

export function AboutPage() {
  const { openCalendly } = useCalendly()

  return (
    <div className="about-page">
      <section className="about-page-hero">
        <NavBar navLinks={navLinks} />
        <div className="about-page-hero-content section-shell">
          <div className="about-page-hero-copy">
            <span className="about-page-eyebrow">Who We Are</span>
            <h1>Trusted partners for lifecycle and CRM teams</h1>
            <p>
              Grafik Studio combines creative direction, retention strategy, and production rigor to
              ship high-performing campaigns for modern eCommerce brands. We embed alongside your
              team to solve bandwidth gaps, build new programs, and protect the voice of your brand.
            </p>
          </div>
        </div>
      </section>
      <div className="about-page-about">
        <About />
      </div>
      <section className="about-page-cta">
        <div className="section-shell about-page-cta-card">
          <div>
            <p className="about-page-cta-eyebrow">Let’s work together</p>
            <h2>Need a dependable email partner?</h2>
            <p>
              We’ll audit your lifecycle program, improve performance, and give your team back the
              focus they need.
            </p>
          </div>
          <div className="about-page-cta-actions">
            <button className="primary-button light" onClick={openCalendly}>
              Book a Call
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
