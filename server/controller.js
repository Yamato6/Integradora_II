import { getFutureApiOne, getFutureApiTwo, getHealth } from './service.js'

export async function healthController(req, res, next) {
	try {
		res.json(await getHealth())
	} catch (error) {
		next(error)
	}
}

export async function futureApiOneController(req, res, next) {
	try {
		res.json(await getFutureApiOne())
	} catch (error) {
		next(error)
	}
}

export async function futureApiTwoController(req, res, next) {
	try {
		res.json(await getFutureApiTwo())
	} catch (error) {
		next(error)
	}
}
