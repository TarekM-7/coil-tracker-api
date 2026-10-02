import { Router } from "express";
import { createCoil, getCoilById, getCoils, updateCoil } from "./handlers/coil";
import { handleInputErrors } from "./middleware";
import { coilValidation, idValidation } from "./validators/coil";

const router = Router()

router.get('/', getCoils)

router.get('/:id', 
    idValidation,
    handleInputErrors,
    getCoilById
)

router.post('/', 
    coilValidation,
    handleInputErrors,
    createCoil
)

router.put('/:id', 
    idValidation,
    coilValidation,
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