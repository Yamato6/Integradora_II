import './TecCard.css'

function TecCard({ tec_name = '', tec_description = '' }) {
  return (
    <article className="tec-card">
      <div className="tec-card__body">
        <span className="tec-card__eyebrow">Technology</span>
        <h3 className="tec-card__name">{tec_name}</h3>
        <p className="tec-card__description">{tec_description}</p>
      </div>
    </article>
  )
}

export default TecCard