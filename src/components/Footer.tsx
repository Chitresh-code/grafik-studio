import { useState } from 'react'
import { Linkedin, Dribbble, Instagram, Youtube, Twitter, Facebook, Mail, MapPin } from 'lucide-react'
import './Footer.css'
import footerImage from '../assets/footer-klaviyo.png'
import { useCalendly } from './CalendlyProvider'

const socialIcons = [
  { name: 'LinkedIn', icon: Linkedin },
  { name: 'Dribbble', icon: Dribbble },
  { name: 'Instagram', icon: Instagram },
  { name: 'YouTube', icon: Youtube },
  { name: 'Twitter', icon: Twitter },
  { name: 'Facebook', icon: Facebook },
  { name: 'Email', icon: Mail },
  { name: 'Location', icon: MapPin },
]

const navSections = [
  {
    title: 'Services',
    links: ['Email Marketing', 'Email Audit', 'Email Deliverability', 'Klaviyo Agency'],
  },
  {
    title: 'Learn More',
    links: ['Career', 'FAQs', 'Courses Login', 'Sitemap', 'Partners', 'Trainings'],
  },
]

export function Footer() {
  const { openCalendly } = useCalendly()
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() =>
    navSections.reduce((acc, section) => ({ ...acc, [section.title]: true }), {})
  )

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="section-shell footer-content">
          <div className="footer-brand">
            <img src={footerImage} alt="Klaviyo Master Elite Badge" />
            <p>Learn how to get the most out of Klaviyo with the grafik studio team.</p>
            <button className="primary-button light" onClick={openCalendly}>
              Book a Call
            </button>
          </div>
          <div className="footer-links">
            {navSections.map(({ title, links }) => (
              <div
                key={title}
                className={`footer-section ${openSections[title] ? 'is-open' : ''}`}
              >
                <button
                  className="section-toggle"
                  onClick={() => toggleSection(title)}
                  aria-expanded={openSections[title]}
                  aria-controls={`section-${title}`}
                >
                  <h4>{title}</h4>
                  <span className="toggle-icon" aria-hidden="true" />
                </button>
                <div className="section-content" id={`section-${title}`}>
                  <ul>
                    {links.map((link) => (
                      <li key={link}>{link}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="newsletter">
              <h4>Sign Up For Our Newsletter</h4>
              <div className="newsletter-input">
                <input placeholder="Email Address" aria-label="Email address" />
                <button type="button" aria-label="Submit email">
                  →
                </button>
              </div>
              <div className="social-icons">
                {socialIcons.map(({ name, icon: Icon }) => (
                  <span key={name} aria-label={name} title={name}>
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="section-shell footer-bottom-content">
          <span>© grafikstudio</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
            <span>|</span>
            <a href="#">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
