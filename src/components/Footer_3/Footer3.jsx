import './Footer3.css'

function Footer3({ left_text = 'Left', center_text = 'Center', right_text = 'Right' }) {
  return (
    <footer className="footer-3">
      <span>{left_text}</span>
      <span>{center_text}</span>
      <span>{right_text}</span>
    </footer>
  )
}

export default Footer3
