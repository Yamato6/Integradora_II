import './Text.css'

function Text({
  as: Tag = 'p',
  style_vars = {},
  paragraph_text = '',
  text = '',
}) {
  return (
    <Tag className="text-1" style={style_vars}>
      {paragraph_text || text}
    </Tag>
  )
}

export default Text
