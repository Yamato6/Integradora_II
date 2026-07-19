import { useEffect, useState } from 'react'

import './Img2.css'

function Img2({ image_src = '', image_alt = '', style_vars = {} }) {
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
    <div className={`img-2 img-2--${status}`} style={style_vars} aria-busy={status === 'loading' ? 'true' : undefined}>
      {hasSource && (
        <img
          src={image_src}
          alt={image_alt}
          className="img-2__image"
          onLoad={() => setStatus('ready')}
          onError={() => setStatus('error')}
        />
      )}

      {status !== 'ready' && (
        <div className={`img-2__state img-2__state--${status}`} role="status">
          <span className="img-2__state-icon" aria-hidden="true">
            {status === 'loading' ? '…' : '!'}
          </span>
          <span className="img-2__state-text">{stateText}</span>
        </div>
      )}
    </div>
  )
}

export default Img2
