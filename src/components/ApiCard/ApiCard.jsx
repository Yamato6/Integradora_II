import './ApiCard.css'

function ApiCard({ title, source, footer, actions, children, isLoading = false, emptyMessage = 'Contenido no disponible' }) {
  const hasContent = children !== null && children !== undefined && children !== false
  const titleText = title || 'Contenido no disponible'
  const sourceText = source || 'Fuente no disponible'

  return (
    <article className={`api-card${isLoading ? ' api-card--loading' : ''}`} aria-busy={isLoading ? 'true' : undefined}>
      <header className="api-card__header">
        <h3 className="api-card__title">{titleText}</h3>
        <span className="api-card__source">{sourceText}</span>
      </header>

      <div className="api-card__content">
        {isLoading ? (
          <div className="api-card__state api-card__state--loading" role="status">
            <span className="api-card__state-icon" aria-hidden="true">…</span>
            <span className="api-card__state-text">Cargando contenido</span>
          </div>
        ) : hasContent ? (
          children
        ) : (
          <div className="api-card__state api-card__state--empty" role="status">
            <span className="api-card__state-icon" aria-hidden="true">!</span>
            <span className="api-card__state-text">{emptyMessage}</span>
          </div>
        )}
      </div>

      {!isLoading && actions ? <div className="api-card__actions">{actions}</div> : null}
      {!isLoading && footer ? <footer className="api-card__footer">{footer}</footer> : null}
    </article>
  )
}

export default ApiCard
