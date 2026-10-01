import express from 'express'
import router from './productionOrders.routes'

const server = express()

server.use('/api/production-orders', router)

export default server