/** Ruta de la página de inicio (archivo .html en build estático). */
export const HOME = '/pagina-de-inicio.html';

/** Convierte una ruta interna al formato .html del sitio. */
export function toPage(path: string): string {
	if (!path || path === '/') return HOME;
	const clean = path.replace(/\/$/, '');
	return clean.endsWith('.html') ? clean : `${clean}.html`;
}
