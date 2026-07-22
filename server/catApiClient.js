import process from 'node:process'

const CAT_API_BASE_URL = process.env.CAT_API_BASE_URL || 'https://api.thecatapi.com/v1'

export async function fetchCatImages(limit = 5) {
	const apiKey = process.env.CAT_API_KEY

	if (!apiKey) {
		throw new Error('CAT_API_KEY no esta configurada en las variables de entorno')
	}

	const response = await fetch(`${CAT_API_BASE_URL}/images/search?limit=${limit}`, {
		headers: {
			'x-api-key': apiKey,
		},
	})

	if (!response.ok) {
		throw new Error(`TheCatAPI respondio con estado ${response.status}`)
	}

	return response.json()
}
