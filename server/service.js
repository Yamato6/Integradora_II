import { query, testConnection } from './repository.js'

export async function getHealth() {
	const connection = await testConnection()

	return {
		message: 'Servidor listo',
		database: connection.ok === 1 ? 'mysql conectado' : 'mysql no disponible',
	}
}

export async function getFutureApiOne() {
	return query('SELECT 1 AS api_one_ready')
}

export async function getFutureApiTwo() {
	return query('SELECT 1 AS api_two_ready')
}
