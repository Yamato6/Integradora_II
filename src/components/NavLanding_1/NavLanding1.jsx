import './NavLanding1.css'

function NavLanding1({
  brand_text = 'INTEGRAL_SYSTEM',
  version_text = '',
  link1_text = 'Inicio',
  link2_text = 'Servicios',
  link3_text = 'Tecnología',
  link4_text = 'Equipo',
  btn_text = 'Explorar →',
  btn_onClick,
  style_vars = {}
}) {
  return (
    <header className="nav-landing-1" style={style_vars}>
      <div className="nav-landing-1__inner">

        <div className="nav-landing-1__brand">
          <span className="nav-landing-1__brand-text">{brand_text}</span>
          <span className="nav-landing-1__version">{version_text}</span>
        </div>

        <nav className="nav-landing-1__links" aria-label="Navegación principal">
          <a href="#" className="nav-landing-1__link">{link1_text}</a>
          <a href="#servicios" className="nav-landing-1__link">{link2_text}</a>
          <a href="#tecnologia" className="nav-landing-1__link">{link3_text}</a>
          <a href="#equipo" className="nav-landing-1__link">{link4_text}</a>
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
