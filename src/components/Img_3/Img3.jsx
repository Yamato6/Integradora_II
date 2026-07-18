import './Img3.css'

function Img3({ image_src = '', image_alt = '', style_vars = {}, image_style_vars = {} }) {
  return (
    <div className="img-3" style={style_vars}>
      <img src={image_src} alt={image_alt} className="img-3__image" style={image_style_vars} />
    </div>
  )
}

export default Img3
