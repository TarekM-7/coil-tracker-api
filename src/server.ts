import express from 'express'
import productionOrderRouter from './productionOrders.routes'

const server = express()

server.use('/api/production-orders', productionOrderRouter)

export default server