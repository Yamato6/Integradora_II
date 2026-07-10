# INTEGRAL_SYSTEM — Landing Page Concept

Concepto de página principal inspirado en [Sensata Technologies](https://www.sensata.com),
adaptado al design system del proyecto (`variables.css` + `global.css`).

---

## Estructura de archivos

```
landing_concept/
├── components/
│   ├── Badge_1/         → Badge1.jsx + Badge1.css
│   ├── CTABanner_1/     → CTABanner1.jsx + CTABanner1.css
│   ├── Divider_1/       → Divider1.jsx + Divider1.css
│   ├── FeatureRow_1/    → FeatureRow1.jsx + FeatureRow1.css
│   ├── HeroBanner_1/    → HeroBanner1.jsx + HeroBanner1.css
│   ├── NavLanding_1/    → NavLanding1.jsx + NavLanding1.css
│   ├── SectionHeader_1/ → SectionHeader1.jsx + SectionHeader1.css
│   ├── ServiceCard_1/   → ServiceCard1.jsx + ServiceCard1.css
│   ├── StatItem_1/      → StatItem1.jsx + StatItem1.css
│   └── TechBadge_1/     → TechBadge1.jsx + TechBadge1.css
└── pages/
    └── LandingPage/     → LandingPage.jsx + LandingPage.css
```

---

## Cómo integrar en tu proyecto Vite React

1. Copia la carpeta `components/*` dentro de `src/components/`
2. Copia la carpeta `pages/LandingPage/` dentro de `src/pages/LandingPage/`
3. En tu `App.jsx` o en tu router, importa la página:

```jsx
import LandingPage from './pages/LandingPage/LandingPage'
```

4. Asegúrate de que `global.css` (que importa `variables.css`) esté importado en
   `main.jsx` o `App.jsx` **antes** de cualquier componente — las CSS variables deben
   estar disponibles globalmente.

---

## API de cada componente

### `<Badge1>`
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `badge_text` | string | `''` | Texto del badge |
| `badge_variant` | `primary` \| `success` \| `warning` \| `error` \| `dark` | `primary` | Variante de color |
| `style_vars` | object | `{}` | Estilos inline adicionales |

### `<Divider1>`
| Prop | Tipo | Default |
|---|---|---|
| `style_vars` | object | `{}` |

### `<StatItem1>`
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `stat_value` | string | `''` | Número/valor grande |
| `stat_label` | string | `''` | Etiqueta descriptiva |
| `style_vars` | object | `{}` | |

### `<ServiceCard1>`
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `card_title` | string | `''` | Título de la tarjeta |
| `card_description` | string | `''` | Descripción |
| `card_icon` | string | `''` | Emoji o texto de ícono |
| `card_tag` | string | `''` | Overline tag (ej: "Pestaña 2") |
| `style_vars` | object | `{}` | |

### `<FeatureRow1>`
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `feature_title` | string | `''` | Título del feature |
| `feature_text` | string | `''` | Descripción |
| `feature_icon` | string | `''` | Emoji o ícono |
| `style_vars` | object | `{}` | |

### `<SectionHeader1>`
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `overline_text` | string | `''` | Texto pequeño encima del título |
| `title_text` | string | `''` | Título H2 principal |
| `subtitle_text` | string | `''` | Párrafo debajo del título |
| `align` | `center` \| `left` | `center` | Alineación del bloque |
| `style_vars` | object | `{}` | |

### `<HeroBanner1>`
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `badge_text` | string | `''` | Pill badge encima del título |
| `title_text` | string | `''` | H1 principal |
| `subtitle_text` | string | `''` | Párrafo descriptivo |
| `btn1_text` | string | `''` | Texto del botón primario |
| `btn2_text` | string | `''` | Texto del botón secundario (outline) |
| `btn1_onClick` | function | — | Handler botón 1 |
| `btn2_onClick` | function | — | Handler botón 2 |
| `style_vars` | object | `{}` | |

### `<CTABanner1>`
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `title_text` | string | `''` | Título CTA |
| `subtitle_text` | string | `''` | Subtítulo |
| `btn_text` | string | `''` | Texto del botón |
| `btn_onClick` | function | — | Handler del botón |
| `style_vars` | object | `{}` | |

### `<TechBadge1>`
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `tech_name` | string | `''` | Nombre de la tecnología |
| `tech_icon` | string | `''` | Emoji/ícono representativo |
| `style_vars` | object | `{}` | |

### `<NavLanding1>`
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `brand_text` | string | `'INTEGRAL_SYSTEM'` | Nombre del sistema |
| `version_text` | string | `'V1.0'` | Badge de versión |
| `link1_text` | string | `'Inicio'` | Enlace 1 |
| `link2_text` | string | `'Servicios'` | Enlace 2 |
| `link3_text` | string | `'Tecnología'` | Enlace 3 |
| `link4_text` | string | `'Equipo'` | Enlace 4 |
| `btn_text` | string | `'Explorar →'` | CTA de la navbar |
| `btn_onClick` | function | — | Handler del CTA |
| `style_vars` | object | `{}` | |

---

## Notas de diseño

- Todos los componentes siguen el mismo patrón de `Button1`: `props → JSX → CSS`
- No hay hooks ni lógica de estado — 100% presentacionales
- Todas las clases CSS consumen tokens de `variables.css` vía `var(--...)`
- Las responsive breakpoints siguen: Desktop ≥1024px · Tablet 640-1023px · Mobile <640px
- El fondo del Hero y el CTABanner usan gradientes radiales sobre `--color-header` (#1A1D20),
  con acento azul `rgba(0,123,255, ...)` como el design guide especifica
