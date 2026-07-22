import express from 'express'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { healthController, futureApiOneController, futureApiTwoController } from './controller.js'

const envPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '.env')

try {
	process.loadEnvFile(envPath)
} catch (error) {
	if (error.code !== 'ENOENT') throw error
}

const app = express()

app.use(express.json())

app.get('/api/health', healthController)
app.get('/api/api-one', futureApiOneController)
app.get('/api/api-two', futureApiTwoController)

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message || 'Internal server error' })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})