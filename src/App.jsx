
import './App.css'
import './styles/global.css'
import './styles/button.css'
import './styles/Badge.css'
import './styles/Status.css'
import './styles/ApiCard.css'
import './styles/ContentContainer.css'
import './styles/DashboardPanel.css'
import './styles/InformationCard.css'
import './styles/TeamCard.css'

const palette = [
  { name: 'Primary', value: 'var(--color-primary)', className: 'swatch swatch-primary' },
  { name: 'Primary dark', value: 'var(--color-primary-dark)', className: 'swatch swatch-primary-dark' },
  { name: 'Primary light', value: 'var(--color-primary-light)', className: 'swatch swatch-primary-light' },
  { name: 'Secondary', value: 'var(--color-secondary)', className: 'swatch swatch-secondary' },
  { name: 'Background', value: 'var(--color-background)', className: 'swatch swatch-background' },
  { name: 'Surface', value: 'var(--color-surface)', className: 'swatch swatch-surface' },
  { name: 'Panel', value: 'var(--color-panel)', className: 'swatch swatch-panel' },
  { name: 'Border', value: 'var(--color-border)', className: 'swatch swatch-border' },
  { name: 'Success', value: 'var(--color-success)', className: 'swatch swatch-success' },
  { name: 'Warning', value: 'var(--color-warning)', className: 'swatch swatch-warning' },
  { name: 'Error', value: 'var(--color-error)', className: 'swatch swatch-error' },
  { name: 'Info', value: 'var(--color-info)', className: 'swatch swatch-info' },
]

const buttonExamples = [
  { label: 'Primario', className: 'btn btn-primary' },
  { label: 'Secundario', className: 'btn btn-secondary' },
  { label: 'Outline', className: 'btn btn-outline' },
  { label: 'Ghost', className: 'btn btn-ghost' },
  { label: 'Icono', className: 'btn btn-primary btn-icon', icon: '→' },
  { label: 'Deshabilitado', className: 'btn btn-secondary', disabled: true },
  { label: 'Cargando', className: 'btn btn-primary btn-loading', loading: true },
]

const badgeExamples = [
  { label: 'Default', className: 'badge badge-default' },
  { label: 'Primary', className: 'badge badge-primary' },
  { label: 'Success', className: 'badge badge-success' },
  { label: 'Warning', className: 'badge badge-warning' },
  { label: 'Error', className: 'badge badge-error' },
  { label: 'Live', className: 'badge badge-live' },
  { label: 'Outline', className: 'badge badge-outline' },
]

const statusExamples = [
  { label: 'Active', className: 'status status-active' },
  { label: 'Inactive', className: 'status status-inactive' },
  { label: 'Loading', className: 'status status-loading' },
  { label: 'Success', className: 'status status-success' },
  { label: 'Warning', className: 'status status-warning' },
  { label: 'Error', className: 'status status-error' },
  { label: 'Live', className: 'status status-live' },
  { label: 'Pending', className: 'status status-pending' },
]

const statChips = [
  { value: '128321', className: 'count-up', label: 'count-up' },
  { value: 'Updated now', className: 'live-update', label: 'live-update' },
  { value: 'Flash OK', className: 'flash-success', label: 'flash-success' },
  { value: 'Flash Err', className: 'flash-error', label: 'flash-error' },
]

const apiExamples = [
  {
    title: 'Usuarios activos',
    source: 'GET /api/users',
    text: '128 usuarios activos en la ultima hora.',
  },
  {
    title: 'Pedidos recientes',
    source: 'GET /api/orders',
    text: '24 pedidos con estado pendiente de revision.',
  },
]

const infoCards = [
  {
    icon: 'i',
    title: 'Acceso rapido',
    text: 'Sirve para validar el layout base, el icono circular y el texto secundario.',
  },
  {
    icon: '!',
    title: 'Estados',
    text: 'Verifica los espaciados internos, la tipografia y la jerarquia visual.',
  },
  {
    icon: '?',
    title: 'Contenido largo',
    text: 'Comprueba como se comporta una tarjeta con texto extendido en varias lineas.',
  },
]

const teamMembers = [
  {
    name: 'Ana Lopez',
    role: 'Frontend Lead',
    description: 'Prueba de avatar, nombre, rol y footer de la tarjeta de equipo.',
    colorA: '#007BFF',
    colorB: '#1A1D20',
  },
  {
    name: 'Carlos Vega',
    role: 'UI Engineer',
    description: 'La imagen mantiene el aspect-ratio y el recorte con object-fit cover.',
    colorA: '#2EAF62',
    colorB: '#0F5132',
  },
  {
    name: 'Maria Torres',
    role: 'Product Design',
    description: 'Sirve para comprobar color del rol, descripcion y alineacion del footer.',
    colorA: '#F6B73C',
    colorB: '#7A4B00',
  },
]

function makeAvatar(label, colorA, colorB) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colorA}" />
          <stop offset="100%" stop-color="${colorB}" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#g)" />
      <circle cx="300" cy="240" r="110" fill="rgba(255,255,255,0.88)" />
      <path d="M150 520c26-98 104-150 150-150s124 52 150 150" fill="rgba(255,255,255,0.88)" />
      <text x="50%" y="88%" text-anchor="middle" font-family="Arial, sans-serif" font-size="54" fill="white" letter-spacing="2">${label}</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

function App() {
  return (
    <main className="demo-page">
      <section className="card demo-highlight">
        <div className="section-header">
          <p className="eyebrow">Carga inicial</p>
          <h1>Badges y Status al inicio</h1>
          <p>Estas dos secciones aparecen primero para que puedas ver su comportamiento apenas carga la pagina.</p>
        </div>

        <div className="stack-grid">
          <div>
            <h2>Badge</h2>
            <div className="chip-row">
              {badgeExamples.map((item) => (
                <span key={item.label} className={item.className}>
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2>Status</h2>
            <div className="status-grid-demo">
              {statusExamples.map((item) => (
                <span key={item.label} className={item.className}>
                  <span className="status-dot" aria-hidden="true" />
                  <span>{item.label}</span>
                </span>
              ))}
            </div>

            <div className="chip-row chip-row--metrics">
              {statChips.map((item) => (
                <div key={item.label} className="metric-chip">
                  <span className="label">{item.label}</span>
                  <span className={item.className}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hero card">
        <div className="hero-copy">
          <p className="eyebrow">Demo de estilos</p>
          <h1>Prueba visual de variables, globales y botones</h1>
          <p>
            Esta pantalla sirve para comprobar que se están aplicando los estilos de
            <strong> variables.css</strong>, <strong>global.css</strong> y <strong>button.css</strong>.
          </p>
          <div className="button-row">
            <button className="btn btn-primary">Acción principal</button>
            <button className="btn btn-secondary">Acción secundaria</button>
          </div>
        </div>

        <aside className="hero-panel">
          <small>Tipografía</small>
          <h2>Space Grotesk + Inter</h2>
          <p>H1, H2, H3, párrafos, links, small y focus visible se ven aquí.</p>
          <a href="#buttons">Ir a botones</a>
        </aside>
      </section>

      <section className="card">
        <div className="section-header">
          <h2>Paleta de variables</h2>
          <p>Todos los tokens de color declarados en variables.css.</p>
        </div>
        <div className="swatch-grid grid">
          {palette.map((item) => (
            <article key={item.name} className={item.className}>
              <span>{item.name}</span>
              <small>{item.value}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="section-header">
          <h2>Escala visual</h2>
          <p>Sombras, radios, espaciado y utilidades de layout.</p>
        </div>

        <div className="layout-showcase grid">
          <div className="sample sample-shadow-sm">shadow-sm</div>
          <div className="sample sample-shadow-md">shadow-md</div>
          <div className="sample sample-shadow-lg">shadow-lg</div>
          <div className="sample sample-radius-pill">radius-pill</div>
        </div>

        <div className="utility-demo flex">
          <div className="utility-box">flex</div>
          <div className="utility-box">grid</div>
          <div className="utility-box utility-box-center">flex-center</div>
        </div>
      </section>

      <section className="card" id="buttons">
        <div className="section-header">
          <h2>Botones</h2>
          <p>Prueba todas las variantes definidas en button.css.</p>
        </div>
        <div className="button-grid">
          {buttonExamples.map((button) => (
            <button
              key={button.label}
              className={button.className}
              disabled={button.disabled}
              aria-busy={button.loading || undefined}
            >
              {button.icon ? <span aria-hidden="true">{button.icon}</span> : null}
              <span>{button.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="card state-grid">
        <article className="state-card success">
          <h3>Success</h3>
          <p>Usa --color-success y --color-success-light.</p>
        </article>
        <article className="state-card warning">
          <h3>Warning</h3>
          <p>Usa --color-warning y --color-warning-light.</p>
        </article>
        <article className="state-card error">
          <h3>Error</h3>
          <p>Usa --color-error y --color-error-light.</p>
        </article>
        <article className="state-card info">
          <h3>Info</h3>
          <p>Usa --color-info y --color-info-light.</p>
        </article>
      </section>

      <section className="card">
        <div className="section-header">
          <h2>ContentContainer</h2>
          <p>Base, bordered, glass y helpers de grid.</p>
        </div>

        <div className="content-grid content-grid--cards">
          <article className="content-container">
            <div className="content-container__header">
              <h3>Base</h3>
              <small>content-container</small>
            </div>
            <div className="content-container__body">
              <p>Contenedor estandar con fondo de superficie, borde y sombra suave.</p>
              <p>Tambien comprueba el espaciado vertical entre bloques internos.</p>
            </div>
            <div className="content-container__footer">
              <small>Footer del contenedor</small>
            </div>
          </article>

          <article className="content-container content-container--bordered">
            <div className="content-container__header">
              <h3>Bordered</h3>
              <small>content-container--bordered</small>
            </div>
            <div className="content-container__body">
              <p>Usa el borde primario mas grueso para validar la variante destacada.</p>
            </div>
            <div className="content-container__footer">
              <button className="btn btn-outline">Revisar</button>
            </div>
          </article>

          <article className="content-container content-container--glass">
            <div className="content-container__header">
              <h3>Glass</h3>
              <small>content-container--glass</small>
            </div>
            <div className="content-container__body">
              <p>Prueba el desenfoque y el fondo semitransparente del panel.</p>
            </div>
            <div className="content-container__footer">
              <a href="#dashboard">Ir al dashboard</a>
            </div>
          </article>
        </div>
      </section>

      <section className="card" id="dashboard">
        <div className="section-header">
          <h2>DashboardPanel</h2>
          <p>Estructura con header, content y footer dentro de un panel principal.</p>
        </div>

        <article className="dashboard-panel">
          <div className="dashboard-panel__header">
            <h3 className="dashboard-panel__title">Resumen semanal</h3>
            <small>Actualizado hace 2 min</small>
          </div>

          <div className="dashboard-panel__content">
            <div className="content-grid content-grid--dashboard">
              <div className="sample sample-shadow-sm">Metric 1</div>
              <div className="sample sample-shadow-md">Metric 2</div>
              <div className="sample sample-shadow-lg">Metric 3</div>
            </div>
            <p>Esta zona comprueba el padding interno, el gap de contenido y la jerarquia del titulo.</p>
          </div>

          <div className="dashboard-panel__footer">
            <button className="btn btn-primary">Ver detalle</button>
          </div>
        </article>
      </section>

      <section className="card">
        <div className="section-header">
          <h2>ApiCard</h2>
          <p>Tarjetas de respuesta API con header, contenido y acciones.</p>
        </div>

        <div className="content-grid content-grid--cards">
          {apiExamples.map((item) => (
            <article key={item.title} className="api-card">
              <div className="api-card__header">
                <h3 className="api-card__title">{item.title}</h3>
                <span className="api-card__source">{item.source}</span>
              </div>
              <div className="api-card__content">
                <p>{item.text}</p>
                <small>Sirve para revisar bordes, sombra y padding del card.</small>
              </div>
              <div className="api-card__actions">
                <button className="btn btn-secondary">Detalles</button>
                <button className="btn btn-ghost">Exportar</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="section-header">
          <h2>InformationCard</h2>
          <p>Tarjetas informativas con icono, titulo y texto de apoyo.</p>
        </div>

        <div className="content-grid content-grid--cards">
          {infoCards.map((item) => (
            <article key={item.title} className="info-card">
              <div className="info-card__icon" aria-hidden="true">
                {item.icon}
              </div>
              <div className="info-card__content">
                <h3 className="info-card__title">{item.title}</h3>
                <p className="info-card__text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="section-header">
          <h2>TeamCard</h2>
          <p>Tarjetas de equipo con imagen, rol, descripcion y footer.</p>
        </div>

        <div className="content-grid content-grid--cards">
          {teamMembers.map((member) => (
            <article key={member.name} className="team-card">
              <img
                className="team-card__image"
                src={makeAvatar(member.name.split(' ').map((part) => part[0]).join(''), member.colorA, member.colorB)}
                alt={member.name}
              />
              <div className="team-card__body">
                <span className="team-card__role">{member.role}</span>
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__description">{member.description}</p>
                <div className="team-card__footer">
                  <small>Disponible</small>
                  <button className="btn btn-outline">Perfil</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
