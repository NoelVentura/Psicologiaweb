# Psicología con Maria Acevedo

Réplica minimalista de [psicologia-online.com](https://www.psicologia-online.com/): misma estructura, secciones y contenidos, con diseño limpio en blanco y negro.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:4321/pagina-de-inicio.html](http://localhost:4321/pagina-de-inicio.html) (la raíz `/` redirige automáticamente).

## Sitio publicado (GitHub Pages)

**https://noelventura.github.io/Psicologiaweb/pagina-de-inicio.html**

Importante: la barra `/` entre `Psicologiaweb` y `pagina-de-inicio.html` es obligatoria.

## Estructura

- `src/data/site.ts` — textos, menús y listados de artículos
- `src/pages/index.astro` — página principal
- `src/pages/quienes-somos.astro` — sección «Quiénes somos»

## Funciones

- **Imágenes reales** desde el CDN de psicologia-online.com
- **Páginas de categoría** en `/categoria/[slug]` (9 secciones del menú)
- **Páginas de artículo** en `/articulo/[slug]` con texto completo importado
- Para actualizar contenidos desde la fuente: `npm run import:articles`
- **Modo oscuro** — botón ☀/☽ en la cabecera; recuerda tu preferencia
