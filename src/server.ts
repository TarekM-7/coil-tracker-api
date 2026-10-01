import express from 'express'
import coilsRouter from './coils.routes'
import db from './config/db'
import colors from 'colors'

export async function connectDB() {
    await db.authenticate()
    await db.sync()
    console.log(colors.bgGreen.bold('Connected to DB'))
}

const server = express()

server.use('/api/coils', coilsRouter)

export default server