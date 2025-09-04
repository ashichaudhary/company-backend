import express from 'express'


const app = express()
const port = process.env.PORT || 3000


app.get('/health', (_req, res) => res.json({ status: 'ok' }))
app.get('/', (_req, res) => res.send('Hello from Company API'))


app.listen(port, () => console.log(`API listening on ${port}`))
