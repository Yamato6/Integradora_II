import express from 'express'
import process from 'node:process'
import { healthController, futureApiOneController, futureApiTwoController } from './controller.js'

const app = express()

app.use(express.json())

app.get('/api/health', healthController)
app.get('/api/api-one', futureApiOneController)
app.get('/api/api-two', futureApiTwoController)

app.use((error, req, res) => {
    res.status(500).json({ message: error.message || 'Internal server error' })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})