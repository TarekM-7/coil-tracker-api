import express from 'express'
import productionOrdersRouter from './productionOrders.routes'
import db from './config/db'

export async function connectDB() {
    try {
        await db.authenticate()
        await db.sync()
        console.log('Connected to DB')
    } catch (error) {
        console.log(error)
        console.log('Error Connecting to DB from ')
    }
}

const server = express()

server.use('/api/production-orders', productionOrdersRouter)

export default server