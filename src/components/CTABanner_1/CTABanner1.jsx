import './CTABanner1.css'

function CTABanner1({ title_text = '', subtitle_text = '', btn_text = '', btn_onClick, style_vars = {} }) {
  return (
    <section className="cta-banner-1" style={style_vars}>
      <div className="cta-banner-1__glow" aria-hidden="true" />
      <div className="cta-banner-1__content">
        <h2 className="cta-banner-1__title">{title_text}</h2>
        {subtitle_text && (
          <p className="cta-banner-1__subtitle">{subtitle_text}</p>
        )}
        {btn_text && (
          <button type="button" className="cta-banner-1__btn" onClick={btn_onClick}>
            {btn_text}
          </button>
        )}
      </div>
    </section>
  )
}

export default CTABanner1
