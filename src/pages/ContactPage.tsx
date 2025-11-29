import { useEffect } from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { navLinks } from '../data/navLinks'
import './ContactPage.css'

const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'

export function ContactPage() {
  useEffect(() => {
    if (document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)) {
      return
    }
    const script = document.createElement('script')
    script.src = CALENDLY_SCRIPT_SRC
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <NavBar navLinks={navLinks} />
        <div className="section-shell contact-hero-content">
          <div className="contact-hero-copy">
            <h1>Let’s plan your next lifecycle win.</h1>
            <p>
              Share your current goals, pipeline, and challenges. Within one session we’ll map the
              next steps and plug you into a team that can own strategy, creative, and execution.
            </p>
          </div>
        </div>
      </section>
      <section className="contact-details">
        <div className="section-shell contact-grid">
          <article>
            <h3>Availability</h3>
            <p>Monday – Friday, 9am to 6pm EST. We respond to every inquiry within one business day.</p>
          </article>
          <article>
            <h3>What to expect</h3>
            <p>
              A 30-minute discovery call to understand your programs, identify immediate wins, and
              outline how Grafik Studio can support your roadmap.
            </p>
          </article>
          <article>
            <h3>Bring to the call</h3>
            <p>
              Recent performance snapshots, current ESP setup, and any internal timelines or
              launches we should be aware of to hit the ground running.
            </p>
          </article>
        </div>
      </section>
      <section className="contact-calendly">
        <div className="section-shell">
          <div className="calendly-wrapper">
            {/* Calendly inline widget begin */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/girishgyanani99"
              style={{ minWidth: '320px', height: '700px' }}
            />
            {/* Calendly inline widget end */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
