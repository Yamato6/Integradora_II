import { query, testConnection } from './repository.js'
import { fetchCatImages } from './catApiClient.js'

export async function getHealth() {
	const connection = await testConnection()

	return {
		message: 'Servidor listo',
		database: connection.ok === 1 ? 'mysql conectado' : 'mysql no disponible',
	}
}

export async function getFutureApiOne() {
	const cats = await fetchCatImages(5)

	return {
		source: 'TheCatAPI',
		fetchedAt: new Date().toISOString(),
		total: cats.length,
		images: cats.map((cat) => ({
			id: cat.id,
			url: cat.url,
			width: cat.width,
			height: cat.height,
		})),
	}
}

export async function getFutureApiTwo() {
	return query('SELECT 1 AS api_two_ready')
}
