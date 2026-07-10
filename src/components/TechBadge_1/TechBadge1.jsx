import './TechBadge1.css'

function TechBadge1({ tech_name = '', tech_icon = '', style_vars = {} }) {
  return (
    <div className="tech-badge-1" style={style_vars}>
      {tech_icon && (
        <span className="tech-badge-1__icon" aria-hidden="true">{tech_icon}</span>
      )}
      <span className="tech-badge-1__name">{tech_name}</span>
    </div>
  )
}

export default TechBadge1
