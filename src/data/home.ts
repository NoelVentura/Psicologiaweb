import { toPage } from '../lib/paths';

export const announcement = {
	text: 'Guías claras sobre psicología, emociones y bienestar para el día a día.',
	ctaLabel: 'Ver artículos',
	ctaHref: '#catalogo',
};

export const hero = {
	kicker: 'Salud mental y bienestar',
	line1: 'PSICOLOGÍA CLARA.',
	line2: 'EL ACOMPAÑAMIENTO QUE NECESITAS CADA DÍA.',
	description:
		'Explora temas, tests informativos y artículos redactados con rigor para entenderte mejor y cuidar tu salud mental.',
	primaryCta: { label: 'Explorar artículos', href: '#catalogo' },
	secondaryCta: { label: 'Conoce el proyecto', href: toPage('/quienes-somos') },
	badges: ['Contenido revisado', 'Lenguaje cercano'],
};

export const introSection = {
	kicker: 'De la duda al entendimiento',
	title: 'Recursos claros para problemas emocionales complejos.',
};

export const pillars = [
	{
		kicker: 'Contenido',
		title: 'Artículos con rigor y claridad',
		description:
			'Publicamos guías sobre emociones, conductas y relaciones con un lenguaje accesible y ejemplos del día a día.',
		bullets: [
			'Textos basados en evidencia y revisión editorial',
			'Equipo de profesionales de salud mental',
			'Temas desde ansiedad y autoestima hasta formación',
		],
		stats: [
			{ value: '26+', label: 'artículos publicados' },
			{ value: '9', label: 'categorías temáticas' },
		],
		variant: 'featured' as const,
	},
	{
		kicker: 'Orientación',
		title: 'Cuándo pedir ayuda profesional',
		description:
			'La información divulgativa no sustituye una consulta clínica. Te animamos a buscar apoyo especializado cuando lo necesites.',
		bullets: [
			'Recomendaciones prudentes y responsables',
			'Directorio de profesionales (próximamente)',
			'Enfoque en el bienestar integral',
		],
	},
	{
		kicker: 'Herramientas',
		title: 'Tests y recursos prácticos',
		description:
			'Cuestionarios informativos para explorar rasgos y habilidades. No constituyen un diagnóstico clínico.',
		bullets: [
			'Tests de autoestima, burnout y más',
			'Guías de hábitos saludables',
			'Material útil en un solo lugar',
		],
	},
];

export const catalogSection = {
	kicker: 'Biblioteca de artículos',
	title: 'Contenido real, contexto cotidiano, lectura ágil.',
	ctaLabel: 'Ver todos los artículos',
	ctaHref: '#recientes',
	description:
		'Una selección de artículos destacados y recientes, organizados por categoría y listos para leer.',
	tabs: ['Destacados', 'Recientes', 'Populares', 'Tests', 'Pareja'],
};

export const reviewsSection = {
	kicker: 'Nuestro enfoque',
	title: 'Lo que nos guía al crear contenido',
	description:
		'Principios editoriales de Psicología con Maria Acevedo para acercar la psicología a quien busca respuestas claras.',
	items: [
		{
			quote:
				'Publicamos guías y artículos que ayudan a entender emociones, conductas y relaciones. Priorizamos un lenguaje claro, ejemplos cotidianos y recomendaciones prudentes.',
			name: 'Marta Vicente',
			role: 'Coordinación editorial',
		},
		{
			quote:
				'Colaboran profesionales de la salud mental y la educación en la revisión de los contenidos. No sustituimos una consulta clínica.',
			name: 'Clara Torres',
			role: 'Revisión de contenidos',
		},
		{
			quote:
				'Seguimos ampliando temas —desde ansiedad y autoestima hasta formación y tests informativos— para que encuentres material útil en un solo lugar.',
			name: 'Equipo editorial',
			role: 'Psicología con Maria Acevedo',
		},
	],
};

export const aboutBlock = {
	kicker: 'Sobre nosotros',
	title: 'Psicología cercana y basada en evidencia, para el día a día.',
	ctaLabel: 'Descubre el proyecto',
};

export const contactBlock = {
	kicker: 'Contacto',
	title: '¿Necesitas ayuda? Escríbenos.',
	description:
		'Cuéntanos tu consulta editorial o de colaboración. Te responderemos lo antes posible.',
	privacyLabel: 'He leído y acepto la política de privacidad',
	submitLabel: 'Enviar mensaje',
};
