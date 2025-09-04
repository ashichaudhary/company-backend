import request from 'supertest'
import express from 'express'


// minimal app for testing
const app = express()
app.get('/health', (_req, res) => res.json({ status: 'ok' }))


test('GET /health should return ok', async () => {
const res = await request(app).get('/health')
expect(res.status).toBe(200)
expect(res.body.status).toBe('ok')
})
