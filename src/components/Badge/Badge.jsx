import './Badge.css'

function Badge({ variant = 'default', label = '' }) {
  return (
    <span className={`badge badge--${variant}`}>
      {label}
    </span>
  )
}

export default Badge
