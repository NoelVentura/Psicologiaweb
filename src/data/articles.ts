import { toPage } from '../lib/paths';

const CDN = 'https://cdn0.psicologia-online.com';

export interface Article {
	slug: string;
	title: string;
	image: string;
	category: string;
	featured?: boolean;
}

export const articles: Article[] = [
	{
		slug: 'dinamicas-autoestima',
		title: 'Dinámicas y actividades efectivas para trabajar la autoestima en niños, adolescentes y adultos',
		image: `${CDN}/es/posts/7/6/9/dinamicas_y_actividades_efectivas_para_trabajar_la_autoestima_en_ninos_adolescentes_y_adultos_7967_558_288.jpg`,
		category: 'ninos-y-adolescentes',
		featured: true,
	},
	{
		slug: 'estres-cronico',
		title: 'Estrés crónico: qué es, causas y qué hacer para reducirlo',
		image: `${CDN}/es/posts/6/8/9/estres_cronico_que_es_causas_y_que_hacer_para_reducirlo_7986_300_150.jpg`,
		category: 'vida-saludable',
		featured: true,
	},
	{
		slug: 'psicoeducacion',
		title: 'Psicoeducación: qué es, en qué consiste y cómo se aplica',
		image: `${CDN}/es/posts/4/8/9/psicoeducacion_que_es_en_que_consiste_y_como_se_aplica_7984_300_150.jpg`,
		category: 'psicologia',
		featured: true,
	},
	{
		slug: 'desestabilizar-narcisista',
		title:
			'¿Cómo desestabilizar a un narcisista? Estrategias para recuperar tu poder sin entrar en su juego psicológico',
		image: `${CDN}/es/posts/0/8/9/como_desestabilizar_a_un_narcisista_estrategias_para_recuperar_tu_poder_sin_entrar_en_su_juego_psicologico_7980_300_150.jpg`,
		category: 'relaciones-de-pareja-y-sexualidad',
		featured: true,
	},
	{
		slug: 'mutismo-selectivo-adultos',
		title: 'Mutismo selectivo en adultos: causas, síntomas y tratamiento',
		image: `${CDN}/es/posts/8/7/9/mutismo_selectivo_en_adultos_causas_sintomas_y_tratamiento_7978_300_150.jpg`,
		category: 'psicologia',
		featured: true,
	},
	{
		slug: 'intercambios-estudiantes-ue',
		title: 'Destinos y tendencias en los intercambios de estudiantes en la UE de 14 a 18 años',
		image: `${CDN}/es/posts/1/9/9/destinos_y_tendencias_en_los_intercambios_de_estudiantes_en_la_ue_de_14_a_18_anos_7991_300_150.jpg`,
		category: 'ninos-y-adolescentes',
	},
	{
		slug: 'beso-cuello',
		title: '¿Qué significa un beso en el cuello?',
		image: `${CDN}/es/posts/9/8/9/que_significa_un_beso_en_el_cuello_7989_300_150.jpg`,
		category: 'relaciones-de-pareja-y-sexualidad',
	},
	{
		slug: 'hematofobia',
		title: 'Fobia a la sangre o hematofobia: qué es, causas y cómo superarla',
		image: `${CDN}/es/posts/8/8/9/fobia_a_la_sangre_o_hematofobia_que_es_causas_y_como_superarla_7988_300_150.jpg`,
		category: 'psicologia',
	},
	{
		slug: 'trastorno-angustia',
		title: 'Qué es el trastorno de angustia: síntomas, causas y cómo superarlo',
		image: `${CDN}/es/posts/7/8/9/que_es_el_trastorno_de_angustia_sintomas_causas_y_como_superarlo_7987_300_150.jpg`,
		category: 'psicologia',
	},
	{
		slug: 'pensamientos-intrusivos-muerte',
		title: 'Pensamientos intrusivos de muerte: qué son, causas y cómo gestionarlos',
		image: `${CDN}/es/posts/0/9/9/pensamientos_intrusivos_de_muerte_que_son_causas_y_como_gestionarlos_7990_300_150.jpg`,
		category: 'psicologia',
	},
	{
		slug: 'cinofobia',
		title: 'Cinofobia o miedo a los perros: causas, síntomas y tratamiento',
		image: `${CDN}/es/posts/5/8/9/cinofobia_o_miedo_a_los_perros_causas_sintomas_y_tratamiento_7985_300_150.jpg`,
		category: 'psicologia',
	},
	{
		slug: 'hombre-narcisista',
		title: 'Hombre narcisista: rasgos y personalidad',
		image: `${CDN}/es/posts/3/8/9/hombre_narcisista_rasgos_y_personalidad_7983_300_150.jpg`,
		category: 'relaciones-de-pareja-y-sexualidad',
	},
	{
		slug: 'rehabilitacion-neuropsicologica',
		title: '¿Qué es la rehabilitación neuropsicológica y qué significa?',
		image: `${CDN}/es/posts/2/8/9/que_es_la_rehabilitacion_neuropsicologica_y_que_significa_7982_300_150.jpg`,
		category: 'psicologia',
	},
	{
		slug: 'estimulacion-cognitiva-mayores',
		title:
			'Ejercicios de estimulación cognitiva para mayores para mejorar memoria y concentración en casa',
		image: `${CDN}/es/posts/1/8/9/ejercicios_de_estimulacion_cognitiva_para_mayores_para_mejorar_memoria_y_concentracion_en_casa_7981_300_150.jpg`,
		category: 'vida-saludable',
	},
	{
		slug: 'estudiar-psicologia-distancia',
		title:
			'Cómo estudiar psicología a distancia: claves para organizarte, aprender mejor y construir tu futuro profesional',
		image: `${CDN}/es/posts/9/7/9/como_estudiar_psicologia_a_distancia_claves_para_organizarte_aprender_mejor_y_construir_tu_futuro_profesional_7979_300_150.jpg`,
		category: 'pir',
	},
	{
		slug: 'no-quiero-mi-pareja',
		title: 'No quiero a mi pareja, pero no puedo dejarlo: ¿qué hago?',
		image: `${CDN}/es/posts/1/7/9/no_quiero_a_mi_pareja_pero_no_puedo_dejarlo_que_hago_7971_300_150.jpg`,
		category: 'relaciones-de-pareja-y-sexualidad',
	},
	{
		slug: 'belonefobia',
		title: 'Miedo a las agujas o belonefobia: causas, síntomas y cómo tratarla',
		image: `${CDN}/es/posts/7/7/9/miedo_a_las_agujas_o_belonefobia_causas_sintomas_y_como_tratarla_7977_300_150.jpg`,
		category: 'psicologia',
	},
	{
		slug: 'test-16-pf',
		title: 'Test de personalidad: 16 factores (16 PF)',
		image: `${CDN}/es/posts/4/1/3/test_de_personalidad_16_factores_16_pf_3314_300_150.jpg`,
		category: 'test-y-escalas',
	},
	{
		slug: 'tipos-de-familia',
		title: 'Los tipos de familia que existen y sus características',
		image: `${CDN}/es/posts/0/9/5/los_tipos_de_familia_que_existen_y_sus_caracteristicas_4590_300_150.jpg`,
		category: 'psicologia',
	},
	{
		slug: 'fortalezas-persona',
		title: 'Las fortalezas de una persona: lista con ejemplos',
		image: `${CDN}/es/posts/3/4/2/las_fortalezas_de_una_persona_lista_con_ejemplos_5243_300_150.jpg`,
		category: 'psicologia',
	},
	{
		slug: 'test-inteligencias-multiples',
		title: 'Test de inteligencias múltiples',
		image: `${CDN}/es/posts/1/4/2/test_de_inteligencias_multiples_4241_300_150.jpg`,
		category: 'test-y-escalas',
	},
	{
		slug: 'test-vocacional',
		title: 'Test vocacional para saber qué estudiar',
		image: `${CDN}/es/posts/9/7/2/test_vocacional_para_saber_que_estudiar_4279_300_150.jpg`,
		category: 'test-y-escalas',
	},
	{
		slug: 'test-liderazgo',
		title: 'Test de liderazgo con resultados',
		image: `${CDN}/es/posts/9/9/1/test_de_liderazgo_con_resultados_4199_300_150.jpg`,
		category: 'test-y-escalas',
	},
	{
		slug: 'habilidades-persona',
		title: 'Habilidades de una persona: lista y ejemplos',
		image: `${CDN}/es/posts/4/0/9/habilidades_de_una_persona_lista_y_ejemplos_4904_300_150.jpg`,
		category: 'empresa',
	},
	{
		slug: 'sindrome-burnout',
		title: 'Síndrome de Burnout: qué es, causas, síntomas, tratamiento y consecuencias',
		image: `${CDN}/es/posts/8/3/5/sindrome_de_burnout_que_es_causas_sintomas_tratamiento_y_consecuencias_4538_300_150.jpg`,
		category: 'empresa',
	},
	{
		slug: 'test-rosenberg',
		title: 'Test de autoestima de Rosenberg online',
		image: `${CDN}/es/posts/2/3/9/test_de_autoestima_de_rosenberg_online_3932_300_150.jpg`,
		category: 'test-y-escalas',
	},
];

const featuredSlugs = new Set([
	'dinamicas-autoestima',
	'estres-cronico',
	'psicoeducacion',
	'desestabilizar-narcisista',
	'mutismo-selectivo-adultos',
]);

const recentSlugs = [
	'intercambios-estudiantes-ue',
	'beso-cuello',
	'hematofobia',
	'trastorno-angustia',
	'pensamientos-intrusivos-muerte',
	'cinofobia',
	'hombre-narcisista',
	'rehabilitacion-neuropsicologica',
	'estimulacion-cognitiva-mayores',
	'estudiar-psicologia-distancia',
	'no-quiero-mi-pareja',
	'belonefobia',
];

const popularSlugs = [
	'test-16-pf',
	'tipos-de-familia',
	'fortalezas-persona',
	'test-inteligencias-multiples',
	'test-vocacional',
	'test-liderazgo',
	'habilidades-persona',
	'sindrome-burnout',
	'test-rosenberg',
];

function toCard(article: Article) {
	return {
		title: article.title,
		href: toPage(`/articulo/${article.slug}`),
		image: article.image,
		featured: article.featured,
		categorySlug: article.category,
	};
}

const bySlug = Object.fromEntries(articles.map((a) => [a.slug, a]));

export function getArticle(slug: string): Article | undefined {
	return bySlug[slug];
}

export function getArticlesByCategory(categorySlug: string): Article[] {
	return articles.filter((a) => a.category === categorySlug);
}

export const featuredArticles = articles
	.filter((a) => featuredSlugs.has(a.slug))
	.map(toCard);

export const recentArticles = recentSlugs
	.map((slug) => bySlug[slug])
	.filter(Boolean)
	.map(toCard);

export const mostViewed = popularSlugs
	.map((slug) => bySlug[slug])
	.filter(Boolean)
	.map(toCard);
