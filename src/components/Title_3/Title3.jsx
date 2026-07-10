import './Title3.css'

function Title3({ title_text = '', style_vars = {}, as: Tag = 'h3' }) {
  return (
    <Tag className="title-3" style={style_vars}>
      {title_text}
    </Tag>
  )
}

export default Title3
