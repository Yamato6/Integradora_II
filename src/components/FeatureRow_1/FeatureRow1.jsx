import './FeatureRow1.css'

function FeatureRow1({ feature_title = '', feature_text = '', feature_icon = '', style_vars = {} }) {
  return (
    <div className="feature-row-1" style={style_vars}>
      {feature_icon && (
        <div className="feature-row-1__icon" aria-hidden="true">
          {feature_icon}
        </div>
      )}
      <div className="feature-row-1__content">
        <h4 className="feature-row-1__title">{feature_title}</h4>
        <p className="feature-row-1__text">{feature_text}</p>
      </div>
    </div>
  )
}

export default FeatureRow1
