import { useEffect, useState } from 'react'

import './MemberCard.css'

import AvatarImage from '../AvatarImage/AvatarImage'

function MemberCard({
  member_name = '',
  member_role = '',
  member_image = '',
  member_responsibilities = [],
  member_fun_facts = '',
}) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        className="member-card"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <div className="member-card__image-wrap">
          <AvatarImage
            image_src={member_image}
            image_alt={member_name}
            style_vars={{
              width: '100%',
              height: '260px',
              '--img-1-width': '100%',
              '--img-1-max-width': 'none',
              '--img-1-radius': 'var(--radius-lg)',
              '--img-1-shadow': 'none',
            }}
          />
        </div>

        <div className="member-card__body">
          <span className="member-card__role">{member_role}</span>
          <h3 className="member-card__name">{member_name}</h3>
        </div>
      </button>

      {isOpen && (
        <div
          className="member-card__modal"
          role="presentation"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="member-card__dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`Detalle de ${member_name}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="member-card__close"
              onClick={() => setIsOpen(false)}
              aria-label={`Cerrar detalle de ${member_name}`}
            >
              ×
            </button>

            <div className="member-card__dialog-grid">
              <AvatarImage
                image_src={member_image}
                image_alt={member_name}
                style_vars={{
                  width: '100%',
                  height: '100%',
                  '--img-1-width': '100%',
                  '--img-1-max-width': 'none',
                  '--img-1-radius': 'var(--radius-xl)',
                  '--img-1-shadow': 'var(--shadow-lg)',
                }}
              />

              <div className="member-card__dialog-body">
                <p className="member-card__dialog-role">{member_role}</p>
                <h3 className="member-card__dialog-name">{member_name}</h3>

                <section className="member-card__dialog-section">
                  <h4>Responsabilidades</h4>
                  <ul className="member-card__list">
                    {member_responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </section>

                <section className="member-card__dialog-section">
                  <h4>Fun facts</h4>
                  <p className="member-card__facts">{member_fun_facts}</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MemberCard