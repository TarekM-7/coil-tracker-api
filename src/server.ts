import express from 'express'
import productionOrdersRouter from './productionOrders.routes'
import db from './config/db'

export async function connectDB() {
    await db.authenticate()
    await db.sync()
    console.log('Connected to DB')
}

const server = express()

server.use('/api/production-orders', productionOrdersRouter)

export default server