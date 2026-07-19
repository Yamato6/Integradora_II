import { useState } from 'react'

import './NavLanding1.css'

function NavLanding1({
  brand_text = 'INTEGRAL_SYSTEM',
  link1_text = 'Inicio',
  link2_text = 'Introducción',
  link3_text = 'Miembros',
  link4_text = 'Tecnologías',
  btn_text = '',
  btn_onClick,
  style_vars = {}
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="nav-landing-1" style={style_vars}>
      <div className="nav-landing-1__inner">

        <div className="nav-landing-1__brand">
          <span className="nav-landing-1__brand-text">{brand_text}</span>
        </div>

        <button
          type="button"
          className="nav-landing-1__menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="nav-landing-1-links"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span className="nav-landing-1__menu-toggle-label">Menú</span>
          <span className="nav-landing-1__menu-toggle-icon" aria-hidden="true">
            {isMenuOpen ? '✕' : '☰'}
          </span>
        </button>

        <nav
          id="nav-landing-1-links"
          className={`nav-landing-1__links${isMenuOpen ? ' nav-landing-1__links--open' : ''}`}
          aria-label="Navegación principal"
        >
          <a href="#inicio" className="nav-landing-1__link" onClick={handleNavLinkClick}>{link1_text}</a>
          <a href="#introduccion" className="nav-landing-1__link" onClick={handleNavLinkClick}>{link2_text}</a>
          <a href="#miembros" className="nav-landing-1__link" onClick={handleNavLinkClick}>{link3_text}</a>
          <a href="#tecnologias" className="nav-landing-1__link" onClick={handleNavLinkClick}>{link4_text}</a>
        </nav>

        {btn_text && (
          <button type="button" className="nav-landing-1__cta" onClick={btn_onClick}>
            {btn_text}
          </button>
        )}

      </div>
    </header>
  )
}

export default NavLanding1
