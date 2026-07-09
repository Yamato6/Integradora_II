import './Text3.css'

function Text3({ paragraph_text = '', style_vars = {}, as: Tag = 'small' }) {
  return (
    <Tag className="text-3" style={style_vars}>
      {paragraph_text}
    </Tag>
  )
}

export default Text3
