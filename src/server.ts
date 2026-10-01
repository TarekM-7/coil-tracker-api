import express from 'express'
import router from './routes'

const server = express()

server.use('/api/production-orders', router)

export default server