import express from 'express'
import productionOrdersRouter from './productionOrders.routes'

const server = express()

server.use('/api/production-orders', productionOrdersRouter)

export default server