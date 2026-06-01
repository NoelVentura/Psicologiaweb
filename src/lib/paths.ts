function siteBase(): string {
	const base = import.meta.env.BASE_URL;
	return base.endsWith('/') ? base : `${base}/`;
}

/** Prefija una ruta pública (public/) con el base del sitio. */
export function publicAsset(path: string): string {
	const clean = path.replace(/^\//, '');
	return `${siteBase()}${clean}`;
}

/**
 * Ruta relativa a public/ (p. ej. videos/Maria.mp4).
 * Funciona en servidor local, GitHub Pages y al abrir dist/*.html con file://
 */
export function publicAssetRelative(path: string): string {
	return path.replace(/^\//, '');
}

function withBase(path: string): string {
	const clean = path.replace(/^\//, '');
	return `${siteBase()}${clean}`;
}

/** Ruta de la página de inicio (archivo .html en build estático). */
export const HOME = withBase('pagina-de-inicio.html');

/** URL absoluta de inicio (producción en GitHub Pages). */
export function homeUrl(site: URL | string | undefined): string {
	if (!site) return HOME;
	return new URL(HOME, site).href;
}

/** Convierte una ruta interna al formato .html del sitio. */
export function toPage(path: string): string {
	if (!path || path === '/') return HOME;
	const clean = path.replace(/^\//, '').replace(/\/$/, '');
	const page = clean.endsWith('.html') ? clean : `${clean}.html`;
	return withBase(page);
}
