import './Status.css'

function Status({ variant = 'active', label = '' }) {
  return (
    <span className={`status status--${variant}`}>
      <span className="status__dot" aria-hidden="true" />
      <span className="status__label">{label}</span>
    </span>
  )
}

export default Status
