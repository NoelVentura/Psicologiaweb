/**
 * Genera src/pages/pagina-de-inicio.html desde el build de Astro.
 * Ejecutar después de: npm run build
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import * as cheerio from 'cheerio';

const distHtml = 'dist/pagina-de-inicio.html';
if (!existsSync(distHtml)) {
	console.error('No existe dist/pagina-de-inicio.html. Ejecuta primero: npm run build');
	process.exit(1);
}

let html = readFileSync(distHtml, 'utf8');
const $ = cheerio.load(html, { xml: false, decodeEntities: false });

// Quitar atributos de scope Astro
$('*').each((_, el) => {
	if (!el.attribs) return;
	for (const key of Object.keys(el.attribs)) {
		if (key.startsWith('data-astro-cid')) {
			$(el).removeAttr(key);
		}
	}
});

// CSS: Layout + estilos inline de componentes
let css = '';
const astroDir = 'dist/_astro';
if (existsSync(astroDir)) {
	const layoutCss = readdirSync(astroDir).find((f) => f.startsWith('Layout') && f.endsWith('.css'));
	if (layoutCss) {
		css += readFileSync(join(astroDir, layoutCss), 'utf8');
	}
}
$('style').each((_, el) => {
	css += `\n${$(el).html() || ''}`;
	$(el).remove();
});

$('link[href*="_astro"]').remove();

mkdirSync('public/css', { recursive: true });
const cssPath = 'public/css/pagina-de-inicio.css';
writeFileSync(cssPath, css.trim());

if (!$('link[href="/css/pagina-de-inicio.css"]').length) {
	$('head').append('<link rel="stylesheet" href="/css/pagina-de-inicio.css" />');
}

let out = $.html({ decodeEntities: false });
if (!out.trimStart().toLowerCase().startsWith('<!doctype')) {
	out = `<!DOCTYPE html>\n${out}`;
}
const target = 'src/pages/pagina-de-inicio.html';
writeFileSync(target, out);

console.log(`✓ ${target}`);
console.log(`✓ ${cssPath}`);
