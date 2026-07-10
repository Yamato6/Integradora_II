import './Text1.css'

function Text1({ paragraph_text = '', style_vars = {}, as: Tag = 'p' }) {
  return (
    <Tag className="text-1" style={style_vars}>
      {paragraph_text}
    </Tag>
  )
}

export default Text1
