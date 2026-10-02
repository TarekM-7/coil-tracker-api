import { RequestHandler } from "express"
import Coil from "../models/Coil.model"

export const getCoils: RequestHandler = async (req, res) => {
    const coils = await Coil.findAll({
        order: [['createdAt', 'DESC'], ['id', 'DESC']]
    })
    res.json({
        data: coils
    })
}

export const createCoil: RequestHandler = async (req, res) => {
    const { name, weight, width, progression, thickness } = req.body
    const coil = await Coil.create({ name, weight, width, progression, thickness })
    res.status(201).json({
        data: coil
    })
}

