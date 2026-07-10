import './SectionHeader1.css'

function SectionHeader1({ overline_text = '', title_text = '', subtitle_text = '', align = 'center', style_vars = {} }) {
  return (
    <div className={`section-header-1 section-header-1--${align}`} style={style_vars}>
      {overline_text && (
        <p className="section-header-1__overline">{overline_text}</p>
      )}
      <h2 className="section-header-1__title">{title_text}</h2>
      {subtitle_text && (
        <p className="section-header-1__subtitle">{subtitle_text}</p>
      )}
    </div>
  )
}

export default SectionHeader1
