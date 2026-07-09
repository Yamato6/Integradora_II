import './Link3.css'

function Link3({ link_text = '', link_href = '#' }) {
  return (
    <a className="link-3" href={link_href}>
      <span className="link-3__text">{link_text}</span>
    </a>
  )
}

export default Link3
