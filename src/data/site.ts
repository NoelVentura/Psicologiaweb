import { toPage } from '../lib/paths';

export const site = {
	name: 'Psicología con Maria Acevedo',
	tagline: 'Salud mental y bienestar',
	description:
		'Guías claras sobre psicología, emociones, relaciones y hábitos saludables. Contenido divulgativo para entenderte mejor.',
};

export const headline = {
	text: 'Comprende tu mente, mejora tu bienestar.',
	title: 'Psicología clara y cercana',
	subtitle:
		'para el día a día: emociones, vínculos, estudios y herramientas prácticas que puedes aplicar desde casa.',
};

export { categories, getCategoryBySlug } from './categories';
export {
	featuredArticles,
	recentArticles,
	mostViewed,
	getArticlesByCategory,
	getArticle,
} from './articles';

const CDN = 'https://cdn0.psicologia-online.com';

export const navDiscover = [
	{ label: 'Adicciones y tratamientos', href: toPage('/categoria/adicciones-y-psicofarmacos') },
	{ label: 'Mundo laboral', href: toPage('/categoria/empresa') },
	{ label: 'Inspiración y reflexión', href: toPage('/categoria/frases-y-reflexiones') },
	{ label: 'Infancia y adolescencia', href: toPage('/categoria/ninos-y-adolescentes') },
	{ label: 'Formación PIR', href: toPage('/categoria/pir') },
	{ label: 'Fundamentos', href: toPage('/categoria/psicologia') },
	{ label: 'Pareja y sexualidad', href: toPage('/categoria/relaciones-de-pareja-y-sexualidad') },
	{ label: 'Tests y evaluación', href: toPage('/categoria/test-y-escalas') },
	{ label: 'Hábitos saludables', href: toPage('/categoria/vida-saludable') },
];

export const navNearYou = [
	{ label: 'Directorio de psicólogos', href: toPage('/directorio/psicologos') },
	{ label: 'Pedagogía', href: toPage('/directorio/pedagogos') },
	{ label: 'Logopedia', href: toPage('/directorio/logopedas') },
	{ label: 'Terapias', href: toPage('/directorio/terapeutas') },
	{ label: 'Sexología', href: toPage('/directorio/sexologos') },
	{ label: 'Cursos y formación', href: toPage('/directorio/formaciones') },
];

export const aboutSection = {
	title: 'Psicología para el día a día',
	text: 'En Psicología con Maria Acevedo reunimos explicaciones sencillas sobre salud mental y crecimiento personal. Nuestro objetivo es que encuentres ideas útiles, basadas en evidencia y redactadas con rigor, para cuidar tus emociones y tomar decisiones más conscientes.',
	linkLabel: 'Conoce el proyecto',
	linkHref: toPage('/quienes-somos'),
};

export const editors = [
	{
		name: 'Marta Vicente',
		role: 'Coordinación editorial',
		image: `${CDN}/es/users/4/0/0/img_4_100_square.jpg`,
	},
	{
		name: 'Clara Torres',
		role: 'Revisión de contenidos',
		image: `${CDN}/es/users/4/5/4/img_454_100_square.jpg`,
	},
];

export const collaborators = [
	{
		name: 'Sara Sanchis',
		role: 'Psicología clínica',
		image: `${CDN}/es/users/7/3/4/img_437_100_square.jpg`,
	},
	{
		name: 'Mary Dulcinia Lugo',
		role: 'Educación y divulgación',
		image: `${CDN}/es/users/2/6/4/img_462_100_square.jpg`,
	},
	{
		name: 'Alejandro Garcia Mingrone',
		role: 'Psicología clínica',
		image: `${CDN}/es/users/2/7/4/img_472_100_square.jpg`,
	},
	{
		name: 'Susana Martínez',
		role: 'Psicología clínica',
		image: `${CDN}/es/users/9/8/4/img_489_100_square.jpg`,
	},
	{
		name: 'Isbelia Farias',
		role: 'Sexología y sociología',
		image: `${CDN}/es/users/0/9/4/img_490_100_square.jpg`,
	},
	{
		name: 'María Piernas',
		role: 'Divulgación en salud',
		image: `${CDN}/es/users/1/9/4/img_491_100_square.jpg`,
	},
];

export const socialLinks = [
	{ label: 'X (Twitter)', href: '#' },
	{ label: 'Instagram', href: '#' },
	{ label: 'YouTube', href: '#' },
	{ label: 'Pinterest', href: '#' },
];

export const footerLinks = {
	legal: [
		{ label: 'Quiénes somos', href: toPage('/quienes-somos') },
		{ label: 'Contacto', href: toPage('/contacto') },
		{ label: 'Aviso legal', href: toPage('/terminos') },
		{ label: 'Privacidad', href: toPage('/privacidad') },
		{ label: 'Cookies', href: toPage('/cookies') },
	],
	languages: [],
};

export const quienesSomos = {
	title: 'Quiénes somos',
	intro:
		'Psicología con Maria Acevedo nace como un espacio de divulgación: acercamos la psicología a quien busca respuestas claras y cercanas.',
	objectives: [
		'Publicamos guías y artículos que ayudan a entender emociones, conductas y relaciones. Priorizamos un lenguaje claro, ejemplos cotidianos y recomendaciones prudentes.',
		'Colaboran profesionales de la salud mental y la educación en la revisión de los contenidos. No sustituimos una consulta clínica: animamos a pedir ayuda especializada cuando haga falta.',
		'Seguimos ampliando temas —desde ansiedad y autoestima hasta formación y tests informativos— para que encuentres material útil en un solo lugar.',
	],
};
