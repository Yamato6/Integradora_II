import './LandingPage.css'

import NavLanding1   from '../../components/NavLanding_1/NavLanding1'
import HeroBanner1   from '../../components/HeroBanner_1/HeroBanner1'
import SectionHeader1 from '../../components/SectionHeader_1/SectionHeader1'
import FeatureRow1   from '../../components/FeatureRow_1/FeatureRow1'
import Img3         from '../../components/Img_3/Img3'
import MemberCard   from '../../components/MemberCard/MemberCard'
import TecCard      from '../../components/TecCard/TecCard'
import introIllustration from '../../assets/api.jpg'
import memberImage1 from '../../assets/abran.jpg'
import memberImage2 from '../../assets/angel1.jpg'
import memberImage3 from '../../assets/angel2.jpg'
import memberImage4 from '../../assets/paco.jpg'

/* ── Datos de contenido ─────────────────────────────────────────── */

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

const MEMBERS = [
  {
    id: 1,
    member_name: 'Jeshua Abraham Pérez Díaz',
    member_role: 'Project Leader / Backend Developer',
    member_image: memberImage1,
    member_responsibilities: [
      'Coordinate the overall development process.',
      'Design and implement the backend architecture.',
      'Integrate frontend, backend, and database components.',
      'Support all development areas and ensure the project works as a complete system.',
    ],
    member_fun_facts: 'Enjoys visual novels and story-driven games.',
  },
  {
    id: 2,
    member_name: 'Angel Daniel Becerra Calderon',
    member_role: 'Software Quality & Metrics',
    member_image: memberImage2,
    member_responsibilities: [
      'Define software quality standards throughout the project.',
      'Verify that implemented features meet project requirements.',
      'Support testing, validation, and documentation activities.',
      'Monitor project metrics and contribute to continuous improvements.',
    ],
    member_fun_facts: 'A fan of the Mushoku Epstein series and Peak-on',
  },
  {
    id: 3,
    member_name: 'Angel Gabriel Barrera Rangel',
    member_role: 'Frontend Developer',
    member_image: memberImage3,
    member_responsibilities: [
      'Design and develop the user interface.',
      'Implement responsive layouts and interactive components.',
      'Maintain visual consistency across the platform.',
      'Improve the overall user experience through modern frontend practices.',
    ],
    member_fun_facts: 'Creator of several popular Persona game guides on Steam.',
  },
  {
    id: 4,
    member_name: 'Francisco Alejandro Garcia Vela',
    member_role: 'Database Developer',
    member_image: memberImage4,
    member_responsibilities: [
      'Design and maintain the relational database.',
      'Create tables, relationships, and database structures.',
      'Ensure data integrity and efficient data storage.',
      'Support backend integration with the database.',
    ],
    member_fun_facts: 'Former streamer and gacha game enthusiast.',
  },
]

const TECHNOLOGIES = [
  {
    id: 1,
    tec_name: 'React',
    tec_description: 'React is used to build the user interface through reusable components. It allows each section of the platform to be developed independently while maintaining a consistent design and improving the overall user experience.',
  },
  {
    id: 2,
    tec_name: 'Node.js',
    tec_description: 'Node.js provides the backend environment that processes client requests and coordinates communication between the frontend, external services, and the database. Its asynchronous architecture helps the application respond efficiently to multiple operations.',
  },
  {
    id: 3,
    tec_name: 'Express.js',
    tec_description: 'Express.js simplifies backend development by organizing routes, handling HTTP requests, and managing communication between the client and the server in a clean and structured way.',
  },
  {
    id: 4,
    tec_name: 'MySQL',
    tec_description: 'MySQL serves as the relational database of the project. It stores application information in structured tables, ensuring data consistency and supporting future scalability.',
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
        badge_text="Proyecto Integrador UTR 2026"
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

      {/* ── Sección de miembros ── */}
      <div className="landing-section landing-members-section" id="miembros">
        <div className="container">
          <div className="landing-members-content">
            <SectionHeader1
              overline_text="Miembros del Proyecto"
              title_text="The team behind Integral System"
              subtitle_text="Cada integrante aporta una parte concreta del flujo de trabajo: liderazgo, calidad, frontend y base de datos. La sección concentra su perfil esencial y expande la información al interactuar con cada tarjeta."
              align="center"
            />



            <div className="landing-members-grid">
              {MEMBERS.map((member) => (
                <MemberCard
                  key={member.id}
                  member_name={member.member_name}
                  member_role={member.member_role}
                  member_image={member.member_image}
                  member_responsibilities={member.member_responsibilities}
                  member_fun_facts={member.member_fun_facts}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Sección de Tecnologías ── */}
      <div className="landing-section landing-members-section" id="tecnologias">
        <div className="container">
          <div className="landing-members-content">
            <SectionHeader1
              overline_text="Tecnologías del Proyecto"
              title_text="Tools that power Integral System"
              subtitle_text="Las siguientes tecnologías sostienen la experiencia completa de la plataforma y permiten conectar la interfaz, el servidor y la base de datos de forma coherente."
              align="center"
            />

            <div className="landing-members-grid">
              {TECHNOLOGIES.map((technology) => (
                <TecCard
                  key={technology.id}
                  tec_name={technology.tec_name}
                  tec_description={technology.tec_description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

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
