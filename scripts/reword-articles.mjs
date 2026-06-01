/**
 * Reescribe textos importados: marca propia, sin enlaces externos ni pies legales duplicados.
 * Uso: node scripts/reword-articles.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

const DIR = join(dirname(fileURLToPath(import.meta.url)), '../src/content/articles');

const PHRASES = [
	[/Psicología-Online/gi, 'Psicología con Maria Acevedo'],
	[/psicologia-online\.com/gi, ''],
	[/en este artículo de Psicología con Maria Acevedo te contamos/gi, 'en esta guía abordamos'],
	[/en este artículo de Psicología con Maria Acevedo/gi, 'en esta guía'],
	[/En Psicología con Maria Acevedo hemos creado/gi, 'Aquí encontrarás'],
	[/te contamos/gi, 'abordamos'],
	[/te explicamos/gi, 'verás explicado'],
	[/Por ello,/g, 'Por eso,'],
	[/No obstante,/g, 'Sin embargo,'],
	[/sin embargo,/g, 'aun así,'],
	[/Es decir,/g, 'En otras palabras,'],
	[/En definitiva,/g, 'En resumen,'],
	[/Al fin y al cabo,/g, 'En el fondo,'],
	[/a continuación/gi, 'a continuación'],
	[/¡Pruébalo!/g, 'Puedes probarlo cuando quieras.'],
];

const REMOVE_PATTERNS = [
	/<p>\s*Este artículo es meramente informativo[\s\S]*?<\/p>/gi,
	/<p>\s*Si deseas leer más artículos[\s\S]*?<\/p>/gi,
	/<p>\s*Los resultados obtenidos en estos tests[\s\S]*?<\/p>/gi,
	/<p>\s*Realizar un<strong> test[\s\S]*?validez clínica[\s\S]*?<\/p>/gi,
];

function rewordHtml(html) {
	let out = html;
	for (const [pattern, replacement] of PHRASES) {
		out = out.replace(pattern, replacement);
	}
	for (const pattern of REMOVE_PATTERNS) {
		out = out.replace(pattern, '');
	}

	const $ = cheerio.load(`<div id="root">${out}</div>`, { decodeEntities: false });
	const $root = $('#root');

	$root.find('a').each((_, el) => {
		const href = $(el).attr('href') || '';
		const text = $(el).text();
		if (!href || href === '#' || href.includes('psicologia')) {
			$(el).replaceWith(text);
		} else if (href.startsWith('http')) {
			$(el).attr('href', href);
			$(el).attr('target', '_blank');
			$(el).attr('rel', 'noopener noreferrer');
		}
	});

	return $root.html()?.trim() ?? out;
}

const files = readdirSync(DIR).filter((f) => f.endsWith('.json'));
let count = 0;

for (const file of files) {
	const path = join(DIR, file);
	const data = JSON.parse(readFileSync(path, 'utf8'));
	data.bodyHtml = rewordHtml(data.bodyHtml);
	if (data.authorRole) {
		data.authorRole = data.authorRole.replace(/Psicología-Online/gi, 'Psicología con Maria Acevedo').replace(/Por\s+\.\s*/i, '');
	}
	writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
	count++;
}

console.log(`Reescritos ${count} artículos en ${DIR}`);
