import { useState } from 'react'
import { Phone } from 'lucide-react'
import logo from '../assets/logo.svg'

type NavLink = {
  label: string
  dropdown?: boolean
}

type NavBarProps = {
  navLinks: NavLink[]
}

export function NavBar({ navLinks }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="hero-nav">
      <div className="nav-container">
        <div className="nav-main">
          <a className="logo-link" href="#">
            <img src={logo} alt="Grafik Studios logo" />
          </a>
          <button
            className={`mobile-menu-toggle ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="desktop-nav-group">
          <nav className="primary-nav desktop-nav">
            {navLinks.map((item) => (
              <a
                href="#"
                className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}
                key={item.label}
              >
                {item.label}
                {item.dropdown && (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 12 8"
                    className="dropdown-icon"
                  >
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
            ))}
          </nav>
          <button className="cta-button desktop-nav">
            <span className="cta-icon" aria-hidden="true">
              <Phone size={16} strokeWidth={2} />
            </span>
            Contact Us
          </button>
        </div>
      </div>
      <div className={`mobile-nav-panel ${menuOpen ? 'is-open' : ''}`}>
        <nav>
          {navLinks.map((item) => (
            <a
              href="#"
              className="nav-item"
              key={`mobile-${item.label}`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button className="cta-button" onClick={closeMenu}>
          <span className="cta-icon" aria-hidden="true">
            <Phone size={16} strokeWidth={2} />
          </span>
          Contact Us
        </button>
      </div>
      {menuOpen && <div className="mobile-nav-overlay" onClick={closeMenu} />}
    </div>
  )
}
