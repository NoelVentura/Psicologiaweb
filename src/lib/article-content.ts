export interface ArticleContent {
	author: string | null;
	authorRole: string | null;
	publishedAt: string | null;
	bodyHtml: string;
}

const contentModules = import.meta.glob<ArticleContent>('../content/articles/*.json', {
	eager: true,
	import: 'default',
});

export function getArticleContent(slug: string): ArticleContent | undefined {
	const key = Object.keys(contentModules).find((path) => path.endsWith(`/${slug}.json`));
	return key ? contentModules[key] : undefined;
}
