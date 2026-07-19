import { useEffect, useState } from 'react'

import './AvatarImage.css'

function AvatarImage({ image_src = '', image_alt = '', style_vars = {} }) {
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
    <div className={`img-1 img-1--${status}`} style={style_vars} aria-busy={status === 'loading' ? 'true' : undefined}>
      {hasSource && (
        <img
          src={image_src}
          alt={image_alt}
          className="img-1__image"
          onLoad={() => setStatus('ready')}
          onError={() => setStatus('error')}
        />
      )}

      {status !== 'ready' && (
        <div className={`img-1__state img-1__state--${status}`} role="status">
          <span className="img-1__state-icon" aria-hidden="true">
            {status === 'loading' ? '…' : '!'}
          </span>
          <span className="img-1__state-text">{stateText}</span>
        </div>
      )}
    </div>
  )
}

export default AvatarImage
