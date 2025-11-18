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
  return (
    <div className="hero-nav">
      <div className="nav-container">
        <a className="logo-link" href="#">
          <img src={logo} alt="Grafik Studios logo" />
        </a>
        <nav className="primary-nav">
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
        <button className="cta-button">
          <span className="cta-icon" aria-hidden="true">
            <Phone size={16} strokeWidth={2} />
          </span>
          Contact Us
        </button>
      </div>
    </div>
  )
}
