import './Badge1.css'

function Badge1({ badge_text = '', badge_variant = 'primary', style_vars = {} }) {
  return (
    <span className={`badge-1 badge-1--${badge_variant}`} style={style_vars}>
      {badge_text}
    </span>
  )
}

export default Badge1
