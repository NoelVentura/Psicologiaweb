export interface Category {
	slug: string;
	label: string;
	description: string;
}

export const categories: Category[] = [
	{
		slug: 'adicciones-y-psicofarmacos',
		label: 'Adicciones y tratamientos',
		description:
			'Dependencias, consumo problemático y papel de la medicación cuando interviene un profesional.',
	},
	{
		slug: 'empresa',
		label: 'Mundo laboral',
		description:
			'Estrés laboral, liderazgo, equipos y equilibrio entre trabajo y vida personal.',
	},
	{
		slug: 'frases-y-reflexiones',
		label: 'Inspiración y reflexión',
		description: 'Ideas y citas para pausar, reflexionar y cuidar tu bienestar emocional.',
	},
	{
		slug: 'ninos-y-adolescentes',
		label: 'Infancia y adolescencia',
		description:
			'Crecimiento, autoestima, convivencia escolar y apoyo emocional en edades tempranas.',
	},
	{
		slug: 'pir',
		label: 'Formación PIR',
		description:
			'Orientación para estudiantes de psicología y quienes preparan oposiciones o el PIR.',
	},
	{
		slug: 'psicologia',
		label: 'Fundamentos',
		description:
			'Conceptos clave, trastornos frecuentes y enfoques terapéuticos explicados con claridad.',
	},
	{
		slug: 'relaciones-de-pareja-y-sexualidad',
		label: 'Pareja y sexualidad',
		description: 'Vínculos afectivos, comunicación, límites e intimidad desde la psicología.',
	},
	{
		slug: 'test-y-escalas',
		label: 'Tests y evaluación',
		description:
			'Cuestionarios informativos para explorar rasgos y habilidades; no sustituyen un diagnóstico.',
	},
	{
		slug: 'vida-saludable',
		label: 'Hábitos saludables',
		description: 'Sueño, estrés, autocuidado y rutinas que favorecen la salud mental.',
	},
];

export function getCategoryBySlug(slug: string): Category | undefined {
	return categories.find((c) => c.slug === slug);
}
