import { RequestHandler } from "express"
import Coil from "../models/Coil.model"
import { matchedData } from "express-validator"

export const getCoils: RequestHandler = async (req, res) => {
    const {page = 1, limit = 20 } = matchedData(req)
    const offset = (page - 1) * limit

    const {count, rows} = await Coil.findAndCountAll({
        order: [['createdAt', 'DESC'], ['id', 'DESC']],
        limit,
        offset
    })
    res.json({
        data: rows,
        meta: {
            page,
            limit,
            total: count,
            totalPages: Math.ceil(count / limit)
        }
    })
}

export const getCoilById: RequestHandler<{ id: string }> = async (req, res) => {
    res.json({
        data: req.coil
    })
}

export const createCoil: RequestHandler = async (req, res) => {
    const { name, weight, width, progression, thickness } = req.body
    const coil = await Coil.create({ name, weight, width, progression, thickness })
    res.status(201).json({
        data: coil
    })
}

export const updateCoil: RequestHandler<{ id: string }> = async (req, res) => {

    const { name, weight, width, progression, thickness } = req.body
    await req.coil!.update({ name, weight, width, progression, thickness })
    
    res.json({
        data: req.coil
    })
} 

export const deleteCoil: RequestHandler<{ id: string }> = async (req, res) => {
    await req.coil!.destroy()
    res.status(204).end()
}