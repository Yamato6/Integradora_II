import './Img2.css'

function Img2({ image_src = '', image_alt = '', style_vars = {} }) {
  return (
    <div className="img-2" style={style_vars}>
      <img src={image_src} alt={image_alt} className="img-2__image" />
    </div>
  )
}

export default Img2
