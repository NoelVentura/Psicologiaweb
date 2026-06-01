function siteBase(): string {
	const base = import.meta.env.BASE_URL;
	return base.endsWith('/') ? base : `${base}/`;
}

/** Prefija una ruta pública (public/) con el base del sitio. */
export function publicAsset(path: string): string {
	const clean = path.replace(/^\//, '');
	return `${siteBase()}${clean}`;
}

function withBase(path: string): string {
	const clean = path.replace(/^\//, '');
	return `${siteBase()}${clean}`;
}

/** Ruta de la página de inicio (archivo .html en build estático). */
export const HOME = withBase('pagina-de-inicio.html');

/** Convierte una ruta interna al formato .html del sitio. */
export function toPage(path: string): string {
	if (!path || path === '/') return HOME;
	const clean = path.replace(/^\//, '').replace(/\/$/, '');
	const page = clean.endsWith('.html') ? clean : `${clean}.html`;
	return withBase(page);
}
