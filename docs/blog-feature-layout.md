# Blog con layout `feature`

Artículos largos con tipografía Manrope (títulos) y DM Sans (cuerpo), shell en `BlogArticleFeature.astro` y estilos en `src/styles/blog-feature.css`.

Referencia publicada: `src/content/blog/entrevistas-tecnicas-ia.md` (+ `en/`, `fi/`).

## Crear un post nuevo

1. Copia `src/content/blog-feature.template.md` a tres archivos:
   - `src/content/blog/{slug}.md` (español, define el slug URL)
   - `src/content/blog/en/{slug}.md`
   - `src/content/blog/fi/{slug}.md`
2. Imágenes en `public/images/blog/{slug}/` (hero recomendado 16:9).
3. Frontmatter obligatorio para `feature`:
   - `layout: feature`
   - `title`, `description`, `pubDate`, `audience`
   - `titleHighlight` (parte del H1 en verde; el shell añade `:` antes si el título la incluye al final)
   - `subtitle` (entradilla bajo el H1)
   - `heroImage` y `ogImage` (misma ruta si no hay imagen OG distinta)
4. El post por defecto (`layout` omitido o `default`) sigue usando `BlogArticle.astro` con prose simple.

## Shell (automático)

No va en el markdown:

- Enlace «Volver al blog»
- H1 con acento, subtítulo, fecha, audiencia, autor (Caye), compartir
- Hero bajo la meta (si hay `heroImage`)
- Contenedor `.bf-main`: max-width **1100px**, padding **78px 32px 0**
- CTA global del sitio debajo del artículo

## Bloques HTML en el cuerpo

Usa HTML en el `.md` (sin sangrar con 4 espacios). Clases todas prefijadas con `bf-`:

| Clase | Uso |
|--------|-----|
| `bf-pullquote` | Cita con borde izquierdo |
| `bf-section-heading` + `bf-section-num` + `bf-section-title` + `bf-section-lead` / `bf-section-accent` | Sección numerada 01, 02… |
| `bf-bento` + `bf-bento-card--cream` / `--dark` | Dos columnas comparativas |
| `bf-bento-label` / `bf-bento-list` | Etiqueta caps y lista con — |
| `bf-figure` | Imagen + `figcaption` |
| `bf-idea` | «La idea clave» (fondo menta) |
| `bf-highlight` | Aviso en caja menta |
| `bf-split` + `bf-split-media` + `bf-callout` | Imagen + caja verde (radius 8px) |
| `bf-callout-lead` | Línea destacada dentro del callout |
| `bf-triptych` | Tres columnas con bordes |
| `bf-steps` | Lista numerada con pastillas |
| `bf-conclusion` | Cierre en dos columnas |

Párrafos normales en markdown; listas `1.` solo si no usas `bf-steps`.

## Tipografía (CSS)

- Título página: `clamp(44px, 6vw, 76px)`, weight 500, line-height 1.03
- Títulos de sección: `clamp(28px, 4.2vw, 48px)`, weight 500
- Imágenes y cajas destacadas: **border-radius 8px** (`--bf-img-radius`)

## Build

```bash
npm run build
```

URLs: `/blog/{slug}/`, `/en/blog/{slug}/`, `/fi/blog/{slug}/`.