import { useEffect, useState } from 'react'

import './Img3.css'

function Img3({ image_src = '', image_alt = '', style_vars = {}, image_style_vars = {} }) {
  const hasSource = Boolean(String(image_src || '').trim())
  const [status, setStatus] = useState(hasSource ? 'loading' : 'empty')

  useEffect(() => {
    setStatus(hasSource ? 'loading' : 'empty')
  }, [hasSource])

  const fallbackText = image_alt || 'Imagen no disponible'
  const stateText = status === 'loading'
    ? 'Cargando imagen'
    : status === 'error'
      ? 'No se pudo cargar la imagen'
      : fallbackText

  return (
    <div className={`img-3 img-3--${status}`} style={style_vars} aria-busy={status === 'loading' ? 'true' : undefined}>
      {hasSource && (
        <img
          src={image_src}
          alt={image_alt}
          className="img-3__image"
          style={image_style_vars}
          onLoad={() => setStatus('ready')}
          onError={() => setStatus('error')}
        />
      )}

      {status !== 'ready' && (
        <div className={`img-3__state img-3__state--${status}`} role="status">
          <span className="img-3__state-icon" aria-hidden="true">
            {status === 'loading' ? '…' : '!'}
          </span>
          <span className="img-3__state-text">{stateText}</span>
        </div>
      )}
    </div>
  )
}

export default Img3
