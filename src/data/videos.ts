/**
 * Enlaces a vídeos (YouTube, Vimeo, etc.).
 * Archivos locales: colócalos en public/videos/ y usa url: '/videos/nombre.mp4'
 */
export type VideoEntry = {
	id: string;
	title: string;
	/** URL completa (YouTube/Vimeo) o ruta local (/videos/archivo.mp4) */
	url: string;
	/** 'embed' para iframes de plataformas; 'file' para MP4/WebM en public/videos */
	type: 'embed' | 'file';
};

export const videos: VideoEntry[] = [
	// Ejemplo YouTube:
	// {
	// 	id: 'ejemplo',
	// 	title: 'Título del vídeo',
	// 	url: 'https://www.youtube.com/embed/VIDEO_ID',
	// 	type: 'embed',
	// },
	// Ejemplo archivo local (public/videos/mi-video.mp4):
	// {
	// 	id: 'mi-video',
	// 	title: 'Mi vídeo',
	// 	url: '/videos/mi-video.mp4',
	// 	type: 'file',
	// },
];
