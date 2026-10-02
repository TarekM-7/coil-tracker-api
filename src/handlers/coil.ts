import { RequestHandler } from "express"

export const createCoil: RequestHandler = (req, res) => {
    res.json({
        msg: 'Desde Post'
    })
}

