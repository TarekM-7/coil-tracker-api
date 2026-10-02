import { Router } from "express";
import { createCoil, getCoilById, getCoils, updateCoil } from "./handlers/coil";
import { handleInputErrors, validateCoilExists } from "./middleware";
import { coilValidation, idValidation } from "./validators/coil";

const router = Router()

router.get('/', getCoils)

router.get('/:id', 
    idValidation,
    handleInputErrors,
    validateCoilExists,
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
    validateCoilExists,
    updateCoil)

router.delete('/', (req, res) => {
    res.json({
        msg: 'From Delete'
    })
})

export default router