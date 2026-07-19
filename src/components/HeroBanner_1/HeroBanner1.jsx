import './HeroBanner1.css'

function HeroBanner1({
  badge_text = '',
  title_text = '',
  subtitle_text = '',
  btn1_text = '',
  btn2_text = '',
  btn1_onClick,
  btn2_onClick,
  style_vars = {}
}) {
  return (
    <section className="hero-banner-1" style={style_vars}>
      <div className="hero-banner-1__bg" aria-hidden="true" />
      <div className="hero-banner-1__content">
        {badge_text && (
          <span className="hero-banner-1__badge">{badge_text}</span>
        )}
        <h1 className="hero-banner-1__title">{title_text}</h1>
        {subtitle_text && (
          <p className="hero-banner-1__subtitle">{subtitle_text}</p>
        )}
        {(btn1_text || btn2_text) && (
          <div className="hero-banner-1__actions">
            {btn1_text && (
              <button
                type="button"
                className="hero-banner-1__btn hero-banner-1__btn--primary"
                onClick={btn1_onClick}
              >
                {btn1_text}
              </button>
            )}
            {btn2_text && (
              <button
                type="button"
                className="hero-banner-1__btn hero-banner-1__btn--outline"
                onClick={btn2_onClick}
              >
                {btn2_text}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroBanner1
