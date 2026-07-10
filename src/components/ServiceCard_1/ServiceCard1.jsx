import './ServiceCard1.css'

function ServiceCard1({ card_title = '', card_description = '', card_icon = '', card_tag = '', style_vars = {} }) {
  return (
    <article className="service-card-1" style={style_vars}>
      {card_icon && (
        <div className="service-card-1__icon" aria-hidden="true">
          {card_icon}
        </div>
      )}
      {card_tag && (
        <span className="service-card-1__tag">{card_tag}</span>
      )}
      <h3 className="service-card-1__title">{card_title}</h3>
      <p className="service-card-1__description">{card_description}</p>
    </article>
  )
}

export default ServiceCard1
