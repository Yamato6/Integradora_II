import './Link2.css'

function Link2({ link_text = '', link_href = '#' }) {
  return (
    <a className="link-2" href={link_href}>
      <span className="link-2__text">{link_text}</span>
    </a>
  )
}

export default Link2
