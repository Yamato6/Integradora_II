import './NavBar1.css'

function NavBar1({ brand_text = 'Brand', link1_text = 'Home', link1_href = '#', link2_text = 'About', link2_href = '#', link3_text = 'Contact', link3_href = '#' }) {
  return (
    <nav className="navbar-1">
      <strong className="navbar-1__brand">{brand_text}</strong>
      <div className="navbar-1__links">
        <a href={link1_href}>{link1_text}</a>
        <a href={link2_href}>{link2_text}</a>
        <a href={link3_href}>{link3_text}</a>
      </div>
    </nav>
  )
}

export default NavBar1
