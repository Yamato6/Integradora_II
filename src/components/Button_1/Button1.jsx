import './Button1.css'

function Button1({ text_button = '', style_vars = {}, type = 'button', onClick }) {
  return (
    <button type={type} className="button-1" style={style_vars} onClick={onClick}>
      {text_button}
    </button>
  )
}

export default Button1
