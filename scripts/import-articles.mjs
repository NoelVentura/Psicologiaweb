/**
 * Importa el contenido HTML de artículos desde psicologia-online.com
 * Uso: node scripts/import-articles.mjs
 */
import * as cheerio from 'cheerio';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const BASE = 'https://www.psicologia-online.com';
const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), '../src/content/articles');

const ARTICLES = [
	['dinamicas-autoestima', 'dinamicas-y-actividades-efectivas-para-trabajar-la-autoestima-en-ninos-adolescentes-y-adultos-7967.html'],
	['estres-cronico', 'estres-cronico-que-es-causas-y-que-hacer-para-reducirlo-7986.html'],
	['psicoeducacion', 'psicoeducacion-que-es-en-que-consiste-y-como-se-aplica-7984.html'],
	['desestabilizar-narcisista', 'como-desestabilizar-a-un-narcisista-estrategias-para-recuperar-tu-poder-sin-entrar-en-su-juego-psicologico-7980.html'],
	['mutismo-selectivo-adultos', 'mutismo-selectivo-en-adultos-causas-sintomas-y-tratamiento-7978.html'],
	['intercambios-estudiantes-ue', 'destinos-y-tendencias-en-los-intercambios-de-estudiantes-en-la-ue-de-14-a-18-anos-7991.html'],
	['beso-cuello', 'que-significa-un-beso-en-el-cuello-7989.html'],
	['hematofobia', 'fobia-a-la-sangre-o-hematofobia-que-es-causas-y-como-superarla-7988.html'],
	['trastorno-angustia', 'que-es-el-trastorno-de-angustia-sintomas-causas-y-como-superarlo-7987.html'],
	['pensamientos-intrusivos-muerte', 'pensamientos-intrusivos-de-muerte-que-son-causas-y-como-gestionarlos-7990.html'],
	['cinofobia', 'cinofobia-o-miedo-a-los-perros-causas-sintomas-y-tratamiento-7985.html'],
	['hombre-narcisista', 'hombre-narcisista-rasgos-y-personalidad-7983.html'],
	['rehabilitacion-neuropsicologica', 'que-es-la-rehabilitacion-neuropsicologica-y-que-significa-7982.html'],
	['estimulacion-cognitiva-mayores', 'ejercicios-de-estimulacion-cognitiva-para-mayores-para-mejorar-memoria-y-concentracion-en-casa-7981.html'],
	['estudiar-psicologia-distancia', 'como-estudiar-psicologia-a-distancia-claves-para-organizarte-aprender-mejor-y-construir-tu-futuro-profesional-7979.html'],
	['no-quiero-mi-pareja', 'no-quiero-a-mi-pareja-pero-no-puedo-dejarlo-que-hago-7971.html'],
	['belonefobia', 'miedo-a-las-agujas-o-belonefobia-causas-sintomas-y-como-tratarla-7977.html'],
	['test-16-pf', 'test-de-personalidad-16-factores-16-pf-3314.html'],
	['tipos-de-familia', 'los-tipos-de-familia-que-existen-y-sus-caracteristicas-4590.html'],
	['fortalezas-persona', 'las-fortalezas-de-un-a-persona-lista-con-ejemplos-5243.html'],
	['test-inteligencias-multiples', 'test-de-inteligencias-multiples-4241.html'],
	['test-vocacional', 'test-vocacional-para-saber-que-estudiar-4279.html'],
	['test-liderazgo', 'test-de-liderazgo-con-resultados-4199.html'],
	['habilidades-persona', 'habilidades-de-una-persona-lista-y-ejemplos-4904.html'],
	['sindrome-burnout', 'sindrome-de-burnout-que-es-causas-sintomas-tratamiento-y-consecuencias-4538.html'],
	['test-rosenberg', 'test-de-autoestima-de-rosenberg-online-3932.html'],
];

// URL corregida para fortalezas
ARTICLES[19] = ['fortalezas-persona', 'las-fortalezas-de-una-persona-lista-con-ejemplos-5243.html'];

const REMOVE_SELECTORS = [
	'.publibydfp',
	'.recomendado-incrustado',
	'.recomendado',
	'.indice',
	'script',
	'style',
	'iframe',
	'.valoracion',
	'.comentarios',
	'.relacionados',
	'.compartir',
	'.open-compartir',
	'nav',
	'.breadcrumb',
].join(', ');

function cleanHtml($, fragment) {
	fragment.find(REMOVE_SELECTORS).remove();
	fragment.find('[onclick]').removeAttr('onclick');
	fragment.find('[data-js-selector]').removeAttr('data-js-selector');
	fragment.find('picture').each((_, pic) => {
		const img = $(pic).find('img').first();
		if (img.length) $(pic).replaceWith(img.clone());
	});
	fragment.find('a[href^="https://www.psicologia-online.com"]').each((_, el) => {
		$(el).attr('target', '_blank');
		$(el).attr('rel', 'noopener noreferrer');
	});
	fragment.find('h2.titulo--apartado').each((_, h2) => {
		$(h2).removeClass('titulo titulo--h2 titulo--apartado');
	});
	return fragment.html() ?? '';
}

function extractArticle(html) {
	const $ = cheerio.load(html, { decodeEntities: true });
	const $article = $('article.columna-post').first();
	if (!$article.length) return null;

	const authorLink = $article.find('.nombre_autor a').first();
	const author = authorLink.text().trim() || null;
	const authorRole = $article
		.find('.nombre_autor')
		.text()
		.replace(/Por\s+.+?,/i, '')
		.replace(author || '', '')
		.trim()
		.split(/\d/)[0]
		?.trim();
	const publishedAt = $article.find('.date_publish').text().trim() || null;

	let bodyHtml = '';

	const $intro = $article.find('.intro').first().clone();
	$intro.find('.imagen_wrap').remove();
	bodyHtml += cleanHtml($, $intro);

	$article.find('h2.titulo--apartado').each((_, h2) => {
		const $h2 = $(h2).clone();
		const $section = $(h2).next('.apartado').clone();
		bodyHtml += `<h2 id="${$h2.attr('id') || ''}">${$h2.text().trim()}</h2>`;
		if ($section.length) bodyHtml += cleanHtml($, $section);
	});

	// Bloques sueltos (tests, etc.)
	$article.find('.apartado').each((_, apartado) => {
		const prev = $(apartado).prev('h2.titulo--apartado');
		if (!prev.length) bodyHtml += cleanHtml($, $(apartado).clone());
	});

	return { author, authorRole: authorRole || null, publishedAt, bodyHtml: bodyHtml.trim() };
}

async function fetchArticle(path) {
	const url = `${BASE}/${path}`;
	const res = await fetch(url, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PsicologiaWebImport/1.0)' },
	});
	if (!res.ok) throw new Error(`${res.status} ${url}`);
	return res.text();
}

function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}

mkdirSync(OUT_DIR, { recursive: true });

let ok = 0;
let fail = 0;

for (const [slug, path] of ARTICLES) {
	try {
		console.log(`Importando: ${slug}...`);
		const html = await fetchArticle(path);
		const data = extractArticle(html);
		if (!data?.bodyHtml) throw new Error('Sin contenido extraído');
		writeFileSync(join(OUT_DIR, `${slug}.json`), JSON.stringify(data, null, 2), 'utf8');
		ok++;
		await sleep(800);
	} catch (err) {
		console.error(`  ERROR ${slug}:`, err.message);
		fail++;
	}
}

console.log(`\nListo: ${ok} importados, ${fail} fallidos → ${OUT_DIR}`);
