import { Router } from "express";
import { body, param } from 'express-validator'
import { createCoil, getCoilById, getCoils, updateCoil } from "./handlers/coil";
import { handleInputErrors } from "./middleware";

const router = Router()

router.get('/', getCoils)

router.get('/:id', 
    param('id')
        .isInt({min: 1, max: 2147483647}).withMessage('Invalid ID'),
    handleInputErrors,
    getCoilById
)

router.post('/', 
    body('name')
        .trim()
        .notEmpty().withMessage('Name cannot be empty').bail()
        .isLength({ max: 100 }).withMessage('Name must be up to 100 characters'),
    body('weight')
        .notEmpty().withMessage('Weight is required').bail()
        .isFloat({ gt: 0, max: 999999.9999 }).withMessage('Weight must be a number greater than 0 and up to 999999.9999'),
    body('width')
        .notEmpty().withMessage('Width is required').bail()
        .isFloat({ gt: 0, max: 999999.9999 }).withMessage('Width must be a number greater than 0 and up to 999999.9999'),
    body('progression')
        .notEmpty().withMessage('Progression is required').bail()
        .isFloat({ gt: 0, max: 999999.9999 }).withMessage('Progression must be a number greater than 0 and up to 999999.9999'),
    body('thickness')
        .notEmpty().withMessage('Thickness is required').bail()
        .isFloat({ gt: 0, max: 999999.9999 }).withMessage('Thickness must be a number greater than 0 and up to 999999.9999'),
    handleInputErrors,
    createCoil
)

router.put('/:id', 
    param('id')
        .isInt({min: 1, max: 2147483647}).withMessage('Invalid ID'),
    body('name')
        .trim()
        .notEmpty().withMessage('Name cannot be empty').bail()
        .isLength({ max: 100 }).withMessage('Name must be up to 100 characters'),
    body('weight')
        .notEmpty().withMessage('Weight is required').bail()
        .isFloat({ gt: 0, max: 999999.9999 }).withMessage('Weight must be a number greater than 0 and up to 999999.9999'),
    body('width')
        .notEmpty().withMessage('Width is required').bail()
        .isFloat({ gt: 0, max: 999999.9999 }).withMessage('Width must be a number greater than 0 and up to 999999.9999'),
    body('progression')
        .notEmpty().withMessage('Progression is required').bail()
        .isFloat({ gt: 0, max: 999999.9999 }).withMessage('Progression must be a number greater than 0 and up to 999999.9999'),
    body('thickness')
        .notEmpty().withMessage('Thickness is required').bail()
        .isFloat({ gt: 0, max: 999999.9999 }).withMessage('Thickness must be a number greater than 0 and up to 999999.9999'),
    handleInputErrors,
    updateCoil)

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