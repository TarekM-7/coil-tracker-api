import { RequestHandler } from "express"
import { validationResult } from 'express-validator'
import Coil from "../models/Coil.model"

export const createCoil: RequestHandler = async (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const { name, weight, width, progression, thickness } = req.body
    const coil = await Coil.create({ name, weight, width, progression, thickness })
    res.status(201).json({
        data: coil
    })
}

