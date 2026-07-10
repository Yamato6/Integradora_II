import './NavBar2.css'

function NavBar2({ brand_text = 'Brand', link1_text = 'Home', link1_href = '#', link2_text = 'Work', link2_href = '#', link3_text = 'Blog', link3_href = '#' }) {
  return (
    <nav className="navbar-2">
      <div className="navbar-2__brand">{brand_text}</div>
      <div className="navbar-2__links">
        <a href={link1_href}>{link1_text}</a>
        <a href={link2_href}>{link2_text}</a>
        <a href={link3_href}>{link3_text}</a>
      </div>
    </nav>
  )
}

export default NavBar2
