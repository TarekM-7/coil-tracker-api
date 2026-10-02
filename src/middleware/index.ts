import { ErrorRequestHandler, RequestHandler } from 'express'
import { validationResult } from 'express-validator'
import Coil from '../models/Coil.model'

export const handleInputErrors: RequestHandler = (req, res, next) => {
    
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    next()
}

export const handleErrors: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err)

    const status = err.status || 500
    const message= status === 500 ? 'Internal server error' : err.message

    res.status(status).json({ errors: [{ msg: message }] })
}

export const validateCoilExists: RequestHandler<{ id: string }> = async (req, res, next) => {
    const coil = await Coil.findByPk(req.params.id)
    if(!coil){
        return res.status(404).json({
            errors: [{ msg: 'Coil not found' }] 
        })
    }
    req.coil = coil
    next()
}