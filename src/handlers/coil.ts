import { Request, Response } from "express"

export const createCoil = (req: Request, res: Response) => {
    res.json({
        msg: 'From Post'
    })
}

