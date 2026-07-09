import './Footer1.css'

function Footer1({ text = 'Footer', link_text = 'Link', link_href = '#' }) {
  return (
    <footer className="footer-1">
      <span>{text}</span>
      <a href={link_href}>{link_text}</a>
    </footer>
  )
}

export default Footer1
