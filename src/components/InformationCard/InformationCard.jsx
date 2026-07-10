import './InformationCard.css'

function InformationCard({ icon, title, text, children }) {
  return (
    <article className="information-card">
      <div className="information-card__icon">{icon}</div>
      <div className="information-card__content">
        <h3 className="information-card__title">{title}</h3>
        <p className="information-card__text">{text}</p>
        {children}
      </div>
    </article>
  )
}

export default InformationCard
