import { Router } from "express";
import { body } from 'express-validator'
import { createCoil } from "./handlers/coil";

const router = Router()

router.get('/', (req, res) => {
    res.json({
        msg: 'From Get'
    })
})

router.post('/', 
    body('name')
        .notEmpty().withMessage('Coil´s name cannot be empty'),
    body('weight')
        .notEmpty().withMessage('Weight is required')
        .isFloat({ gt: 0, max: 999999.9999 }).withMessage('Weight must be a number greater than 0 and up to 999999.9999'),
    createCoil
)

router.put('/', (req, res) => {
    res.json({
        msg: 'From Put'
    })
})

router.patch('/', (req, res) => {
    res.json({
        msg: 'From Patch'
    })
})

router.delete('/', (req, res) => {
    res.json({
        msg: 'From Delete'
    })
})

export default router