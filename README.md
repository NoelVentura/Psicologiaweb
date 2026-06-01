# Psicología con Maria Acevedo

Réplica minimalista de [psicologia-online.com](https://www.psicologia-online.com/): misma estructura, secciones y contenidos, con diseño limpio en blanco y negro.

## Vista previa local (antes de subir a GitHub)

Edita la página de inicio en **`src/pages/pagina-de-inicio.astro`** (no abras `dist/` con doble clic: con `file://` no cargan estilos ni vídeo).

### 1. Mientras modificas (recomendado)

```bash
npm install
npm run dev
```

Abre [http://localhost:4321/pagina-de-inicio.html](http://localhost:4321/pagina-de-inicio.html). Los cambios se ven al guardar el archivo.

### 2. Probar el HTML generado en `dist/` (como tras `npm run build`)

```bash
npm run preview:local
```

Sirve la carpeta `dist/` en un servidor local (equivalente a ver `pagina-de-inicio.html` bien, sin `file://`).

### 3. Probar igual que en GitHub Pages (con `/Psicologiaweb/` en las rutas)

```bash
npm run preview:github
```

Abre [http://localhost:4321/Psicologiaweb/pagina-de-inicio.html](http://localhost:4321/Psicologiaweb/pagina-de-inicio.html).

### Subir cambios a GitHub

```bash
git add .
git commit -m "Describe tu cambio"
git push origin master:main
```

GitHub Actions vuelve a publicar el sitio en unos minutos.

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
