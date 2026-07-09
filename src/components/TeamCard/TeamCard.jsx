import './TeamCard.css'

function TeamCard({ avatar, name, role, description, footer, children }) {
  return (
    <article className="team-card">
      {avatar}
      <div className="team-card__body">
        <span className="team-card__role">{role}</span>
        <h3 className="team-card__name">{name}</h3>
        <p className="team-card__description">{description}</p>
        {children}
        <div className="team-card__footer">{footer}</div>
      </div>
    </article>
  )
}

export default TeamCard
