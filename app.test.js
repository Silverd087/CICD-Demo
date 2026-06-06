const request = require('supertest')
const app = require('./app')

describe('GET /health',()=>{
    it('returns 200 with status ok', async () =>{
        const res = await request(app).get('/health')
        expect(res.statusCode).toBe(200)
        expect(res.body.status).toBe('OK')
    })
})

describe('Get /users',()=>{
    it('return a list of users',async ()=>{
        const res = await request(app).get('/users')
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
        expect(res.body.length).toBeGreaterThan(0)
    })
})

describe('Post /users',()=>{
    it('Creates a user when name is provided',async ()=>{
        const res = await request(app).post('/users').send({name:'charlie'})
        expect(res.statusCode).toBe(201)
        expect(res.body.name).toBe('charlie')
    })
    it('returns 400 when name is missing',async ()=>{
        const res = await request(app).post('/users').send({})
        expect(res.statusCode).toBe(400)
        expect(res.body.error).toBe('User name is required')
    })
})

