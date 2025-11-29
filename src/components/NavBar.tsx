import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import logo from '../assets/logo.svg'
import { useCalendly } from './CalendlyProvider'

export type NavLink = {
  label: string
  dropdown?: boolean
  href?: string
}

type NavBarProps = {
  navLinks: NavLink[]
}

export function NavBar({ navLinks }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { openCalendly } = useCalendly()

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="hero-nav">
      <div className="nav-container">
        <div className="nav-main">
          <Link className="logo-link" to="/" onClick={closeMenu}>
            <img src={logo} alt="Grafik Studios logo" />
          </Link>
        </div>
        <div className="desktop-nav-group">
          <nav className="primary-nav desktop-nav">
            {navLinks.map((item) => (
              <NavLinkItem key={item.label} item={item} />
            ))}
          </nav>
          <button className="cta-button desktop-nav" onClick={openCalendly}>
            <span className="cta-icon" aria-hidden="true">
              <Phone size={16} strokeWidth={2} />
            </span>
            Contact Us
          </button>
        </div>
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
      <div className={`mobile-nav-panel ${menuOpen ? 'is-open' : ''}`}>
        <nav>
          {navLinks.map((item) => (
            <NavLinkItem key={`mobile-${item.label}`} item={item} onClick={closeMenu} mobile />
          ))}
        </nav>
        <button
          className="cta-button"
          onClick={() => {
            closeMenu()
            openCalendly()
          }}
        >
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

function NavLinkItem({
  item,
  onClick,
  mobile,
}: {
  item: NavLink
  onClick?: () => void
  mobile?: boolean
}) {
  const className = `${mobile ? 'nav-item' : `nav-item ${item.dropdown ? 'has-dropdown' : ''}`}`
  const content = (
    <>
      {item.label}
      {item.dropdown && (
        <svg aria-hidden="true" focusable="false" viewBox="0 0 12 8" className="dropdown-icon">
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
    </>
  )

  if (item.href) {
    return (
      <Link to={item.href} className={className} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <a href="#" className={className} onClick={onClick}>
      {content}
    </a>
  )
}
