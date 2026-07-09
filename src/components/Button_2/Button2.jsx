import './Button2.css'

function Button2({ text_button = '', style_vars = {}, type = 'button', onClick }) {
  return (
    <button type={type} className="button-2" style={style_vars} onClick={onClick}>
      {text_button}
    </button>
  )
}

export default Button2
