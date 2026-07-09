import './AvatarImage.css'

function AvatarImage({ image_src = '', image_alt = '', style_vars = {} }) {
  return (
    <div className="img-1" style={style_vars}>
      <img src={image_src} alt={image_alt} className="img-1__image" />
    </div>
  )
}

export default AvatarImage
