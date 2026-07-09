import './Link1.css'

function Link1({ link_text = '', link_href = '#' }) {
  return (
    <a className="link-1" href={link_href}>
      <span className="link-1__text">{link_text}</span>
    </a>
  )
}

export default Link1
