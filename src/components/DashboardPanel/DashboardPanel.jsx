import './DashboardPanel.css'

function DashboardPanel({ title, meta, footer, children }) {
  return (
    <article className="dashboard-panel">
      <header className="dashboard-panel__header">
        <div>
          <h3 className="dashboard-panel__title">{title}</h3>
          <small className="dashboard-panel__meta">{meta}</small>
        </div>
      </header>
      <div className="dashboard-panel__content">{children}</div>
      <footer className="dashboard-panel__footer">{footer}</footer>
    </article>
  )
}

export default DashboardPanel
