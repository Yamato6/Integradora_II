import './Title1.css'

function Title1({ title_text = '', style_vars = {}, as: Tag = 'h1' }) {
  return (
    <Tag className="title-1" style={style_vars}>
      {title_text}
    </Tag>
  )
}

export default Title1
