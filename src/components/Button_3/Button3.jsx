import './Button3.css'

function Button3({ text_button = '', style_vars = {}, type = 'button', onClick }) {
  return (
    <button type={type} className="button-3" style={style_vars} onClick={onClick}>
      {text_button}
    </button>
  )
}

export default Button3
