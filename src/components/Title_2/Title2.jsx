import './Title2.css'

function Title2({ title_text = '', style_vars = {}, as: Tag = 'h2' }) {
  return (
    <Tag className="title-2" style={style_vars}>
      {title_text}
    </Tag>
  )
}

export default Title2
