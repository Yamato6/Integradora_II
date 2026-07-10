import './NavBar3.css'

function NavBar3({ brand_text = 'Brand', link1_text = 'Docs', link1_href = '#', link2_text = 'UI', link2_href = '#', link3_text = 'Support', link3_href = '#' }) {
  return (
    <nav className="navbar-3">
      <span className="navbar-3__brand">{brand_text}</span>
      <div className="navbar-3__links">
        <a href={link1_href}>{link1_text}</a>
        <a href={link2_href}>{link2_text}</a>
        <a href={link3_href}>{link3_text}</a>
      </div>
    </nav>
  )
}

export default NavBar3
