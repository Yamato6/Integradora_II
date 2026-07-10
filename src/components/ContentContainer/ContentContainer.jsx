import './ContentContainer.css'

function ContentContainer({ title, meta, footer, children }) {
  return (
    <article className="content-container">
      <header className="content-container__header">
        <h3 className="content-container__title">{title}</h3>
        <small className="content-container__meta">{meta}</small>
      </header>
      <div className="content-container__body">{children}</div>
      <footer className="content-container__footer">{footer}</footer>
    </article>
  )
}

export default ContentContainer
