import './Heading.css'

function Heading({
  as: Tag = 'h2',
  title_text = '',
  style_vars = {},
}) {
  return (
    <Tag className="title-1" style={style_vars}>
      {title_text}
    </Tag>
  )
}

export default Heading
