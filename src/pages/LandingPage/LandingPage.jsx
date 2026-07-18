import './LandingPage.css'

import NavLanding1   from '../../components/NavLanding_1/NavLanding1'
import HeroBanner1   from '../../components/HeroBanner_1/HeroBanner1'
import StatItem1     from '../../components/StatItem_1/StatItem1'
import SectionHeader1 from '../../components/SectionHeader_1/SectionHeader1'
import ServiceCard1  from '../../components/ServiceCard_1/ServiceCard1'
import FeatureRow1   from '../../components/FeatureRow_1/FeatureRow1'
import Img3         from '../../components/Img_3/Img3'
import TechBadge1    from '../../components/TechBadge_1/TechBadge1'
import CTABanner1    from '../../components/CTABanner_1/CTABanner1'
import Divider1      from '../../components/Divider_1/Divider1'
import introIllustration from '../../assets/api.jpg'

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

const INTRO_HIGHLIGHTS = [
  {
    feature_icon:  '💻',
    feature_title: 'Modern Full-Stack Architecture',
    feature_text:  'Integral System conecta React, Node.js, Express y MySQL en una arquitectura coherente que separa interfaz, servidor y datos para facilitar el mantenimiento.',
  },
  {
    feature_icon:  '📱',
    feature_title: 'Responsive User Interface',
    feature_text:  'La experiencia se adapta a pantallas de escritorio, tablet y móvil para que el acceso al sistema siga siendo claro, legible y consistente en cualquier dispositivo.',
  },
  {
    feature_icon:  '🔗',
    feature_title: 'Backend & Database Integration',
    feature_text:  'El frontend dialoga con un backend intermediario que coordina las rutas REST, administra la persistencia y mantiene la comunicación con la base de datos MySQL.',
  },
  {
    feature_icon:  '🌐',
    feature_title: 'External API Connectivity',
    feature_text:  'Las integraciones con servicios externos amplían el alcance funcional del sistema sin romper su estructura modular ni comprometer el flujo de interacción.',
  },
  {
    feature_icon:  '⚡',
    feature_title: 'Scalable and Modular Design',
    feature_text:  'Cada módulo se mantiene independiente para que nuevas pestañas, servicios o mejoras puedan incorporarse sin rehacer la experiencia principal.',
  },
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

      {/* ── Introducción ── */}
      <section className="landing-section landing-section--surface" id="introduccion">
        <div className="container">
          <div className="landing-features-layout" style={{ alignItems: 'stretch' }}>
            <div className="landing-features-left" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <SectionHeader1
                overline_text="Introducción del Proyecto"
                title_text="Welcome to Integral System"
                subtitle_text="Integral System es una aplicación web modular desarrollada para el proyecto Integradora II de la Universidad Tecnológica El Retoño, construida con React, Node.js, MySQL y APIs externas para unir interfaz responsiva, comunicación con backend y gestión de datos en una sola experiencia."
                align="left"
                style_vars={{ marginBottom: 0 }}
              />

              <p className="section-header-1__subtitle" style={{ marginTop: 0 }}>
                La propuesta reúne componentes independientes, consumo de servicios externos y persistencia de información para mostrar cómo una arquitectura bien separada mejora el mantenimiento, la escalabilidad y la claridad de una plataforma real.
              </p>

              <div style={{ width: '100%', aspectRatio: '16 / 10', display: 'flex' }}>
                <Img3
                  image_src={introIllustration}
                  image_alt="Ilustración abstracta del sistema Integral System"
                  style_vars={{ height: '100%', width: '100%', border: 'none' }}
                  image_style_vars={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
                />
              </div>
            </div>

            <div className="landing-features-list">
              <SectionHeader1
                overline_text="Main Highlights"
                title_text="Ideas that define the platform"
                subtitle_text="Estos puntos resumen la arquitectura, la experiencia visual y la forma en que el sistema conecta servicios, datos y presentación."
                align="left"
              />

              {INTRO_HIGHLIGHTS.map((feature, i) => (
                <FeatureRow1
                  key={i}
                  feature_icon={feature.feature_icon}
                  feature_title={feature.feature_title}
                  feature_text={feature.feature_text}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider1 />

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
