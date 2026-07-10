import './ApiCard.css'

function ApiCard({ title, source, footer, actions, children }) {
  return (
    <article className="api-card">
      <header className="api-card__header">
        <h3 className="api-card__title">{title}</h3>
        <span className="api-card__source">{source}</span>
      </header>
      <div className="api-card__content">{children}</div>
      <div className="api-card__actions">{actions}</div>
      <footer className="api-card__footer">{footer}</footer>
    </article>
  )
}

export default ApiCard
