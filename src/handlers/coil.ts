import { RequestHandler } from "express"
import Coil from "../models/Coil.model"

export const createCoil: RequestHandler = async (req, res) => {
    try {
        const { name, weight, width, progression, thickness } = req.body
        const coil = await Coil.create({ name, weight, width, progression, thickness })
        res.status(201).json({
            data: coil
        })
    } catch (error) {
        console.log(error)
    }
}

