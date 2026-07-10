import './LandingPage.css'

import NavLanding1   from '../../components/NavLanding_1/NavLanding1'
import HeroBanner1   from '../../components/HeroBanner_1/HeroBanner1'
import StatItem1     from '../../components/StatItem_1/StatItem1'
import SectionHeader1 from '../../components/SectionHeader_1/SectionHeader1'
import ServiceCard1  from '../../components/ServiceCard_1/ServiceCard1'
import FeatureRow1   from '../../components/FeatureRow_1/FeatureRow1'
import TechBadge1    from '../../components/TechBadge_1/TechBadge1'
import CTABanner1    from '../../components/CTABanner_1/CTABanner1'
import Divider1      from '../../components/Divider_1/Divider1'

/* ── Datos de contenido ─────────────────────────────────────────── */

const STATS = [
  { stat_value: '4',      stat_label: 'Pestañas del sistema' },
  { stat_value: '2',      stat_label: 'APIs externas'        },
  { stat_value: '100%',   stat_label: 'Arquitectura modular' },
  { stat_value: 'Local',  stat_label: 'Red controlada'       },
]

const SERVICES = [
  {
    card_tag:         'Pestaña 1',
    card_title:       'Panel del Equipo',
    card_description: 'Directorio visual del equipo de desarrollo. Tarjetas con fotografía, nombre, rol y especialidad de cada integrante del proyecto.',
    card_icon:        '👥',
  },
  {
    card_tag:         'Pestaña 2',
    card_title:       'TheCatAPI',
    card_description: 'Búsqueda y visualización de imágenes de gatos con filtros de raza. Integración REST con estados de carga, éxito y error.',
    card_icon:        '🐱',
  },
  {
    card_tag:         'Pestaña 3',
    card_title:       'Jikan API',
    card_description: 'Exploración de anime y manga desde MyAnimeList. Resultados en tarjetas con portada, título, puntuación y sinopsis.',
    card_icon:        '🎌',
  },
  {
    card_tag:         'Pestaña 4',
    card_title:       'Panel de Monitoreo',
    card_description: 'Vista del estado general del sistema. Indicadores en tiempo real del servidor, base de datos y conexión con las APIs externas.',
    card_icon:        '📊',
  },
]

const FEATURES = [
  {
    feature_icon:  '🧩',
    feature_title: 'Arquitectura modular',
    feature_text:  'Cada pestaña opera como un módulo independiente. Los cambios en una sección no afectan el funcionamiento del resto del sistema.',
  },
  {
    feature_icon:  '⚡',
    feature_title: 'Retroalimentación visual',
    feature_text:  'Skeleton loaders, estados de carga, éxito y error en cada componente. Animaciones Framer Motion que guían la atención del usuario.',
  },
  {
    feature_icon:  '🔗',
    feature_title: 'Integración cliente–servidor',
    feature_text:  'React en el frontend y Express en el backend se comunican mediante rutas REST limpias. El servidor actúa como intermediario seguro con las APIs externas.',
  },
]

const TECHS = [
  { tech_name: 'React',         tech_icon: '⚛️' },
  { tech_name: 'Vite',          tech_icon: '⚡' },
  { tech_name: 'Node.js',       tech_icon: '🟢' },
  { tech_name: 'Express',       tech_icon: '🚀' },
  { tech_name: 'Framer Motion', tech_icon: '🎞️' },
  { tech_name: 'MySQL',         tech_icon: '🗄️' },
  { tech_name: 'REST APIs',     tech_icon: '🔌' },
]

/* ── Componente ─────────────────────────────────────────────────── */

function LandingPage() {
  return (
    <div className="landing-page">

      {/* ── Navegación ── */}
      <NavLanding1 />

      {/* ── Hero ── */}
      <HeroBanner1
        badge_text="V1.0 — ALPHA · Proyecto Académico UTRE 2026"
        title_text="INTEGRAL_SYSTEM"
        subtitle_text="Plataforma web modular que integra servicios externos y supervisa el estado del sistema dentro de una red local controlada."
        btn1_text="Explorar Sistema →"
        btn2_text="Ver APIs"
      />

      {/* ── Barra de estadísticas ── */}
      <div className="landing-stats-bar">
        {STATS.map((s, i) => (
          <StatItem1
            key={i}
            stat_value={s.stat_value}
            stat_label={s.stat_label}
          />
        ))}
      </div>

      <Divider1 />

      {/* ── Sección de módulos / servicios ── */}
      <section className="landing-section" id="servicios">
        <div className="container">
          <SectionHeader1
            overline_text="Módulos del Sistema"
            title_text="Todo en una sola interfaz"
            subtitle_text="Cuatro pestañas funcionales, desarrolladas de forma independiente e integradas en una plataforma responsiva."
          />
          <div className="landing-services-grid">
            {SERVICES.map((s, i) => (
              <ServiceCard1
                key={i}
                card_tag={s.card_tag}
                card_title={s.card_title}
                card_description={s.card_description}
                card_icon={s.card_icon}
              />
            ))}
          </div>
        </div>
      </section>

      <Divider1 />

      {/* ── Sección de características ── */}
      <section className="landing-section landing-section--surface">
        <div className="container">
          <div className="landing-features-layout">
            <div className="landing-features-left">
              <SectionHeader1
                overline_text="¿Por qué modular?"
                title_text="Diseñado para crecer sin romper"
                subtitle_text="La separación estricta de responsabilidades permite agregar nuevas funcionalidades en el futuro sin rediseñar el sistema desde cero."
                align="left"
              />
            </div>
            <div className="landing-features-list">
              {FEATURES.map((f, i) => (
                <FeatureRow1
                  key={i}
                  feature_icon={f.feature_icon}
                  feature_title={f.feature_title}
                  feature_text={f.feature_text}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider1 />

      {/* ── Stack tecnológico ── */}
      <section className="landing-section" id="tecnologia">
        <div className="container">
          <SectionHeader1
            overline_text="Stack Tecnológico"
            title_text="Construido con herramientas modernas"
          />
          <div className="landing-tech-row">
            {TECHS.map((t, i) => (
              <TechBadge1
                key={i}
                tech_name={t.tech_name}
                tech_icon={t.tech_icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner1
        title_text="¿Listo para explorar el sistema?"
        subtitle_text="Accede al panel de control, consulta las APIs y monitorea el estado de los módulos en tiempo real."
        btn_text="Acceder al Sistema →"
      />

      {/* ── Footer ── */}
      <footer className="landing-footer">
        <p className="landing-footer__text">
          <strong>INTEGRAL_SYSTEM</strong> — V1.0-ALPHA&nbsp;&nbsp;·&nbsp;&nbsp;Proyecto Académico · UTRE 2026
        </p>
      </footer>

    </div>
  )
}

export default LandingPage
