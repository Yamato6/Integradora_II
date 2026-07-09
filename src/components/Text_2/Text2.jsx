import './Text2.css'

function Text2({ paragraph_text = '', style_vars = {}, as: Tag = 'span' }) {
  return (
    <Tag className="text-2" style={style_vars}>
      {paragraph_text}
    </Tag>
  )
}

export default Text2
