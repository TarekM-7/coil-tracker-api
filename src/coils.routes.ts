import { Router } from "express";
import { createCoil, deleteCoil, getCoilById, getCoils, updateCoil } from "./handlers/coil";
import { handleInputErrors, validateCoilExists } from "./middleware";
import { coilValidation, idValidation } from "./validators/coil";
import { paginationValidation } from "./validators/pagination";

const router = Router()

router.get('/', 
    paginationValidation, 
    handleInputErrors, 
    getCoils)

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

router.delete('/:id', 
    idValidation,
    handleInputErrors,
    validateCoilExists,    
    deleteCoil
)

export default router