import { RequestHandler } from 'express'

export const handleInputErrors: RequestHandler = (req, res, next) => {
    console.log('From Middleware')
}