import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.json('From Get')
})

router.post('/', (req, res) => {
    res.json('From Post')
})

router.put('/', (req, res) => {
    res.json('From Put')
})

router.patch('/', (req, res) => {
    res.json('From Pacth')
})

router.delete('/', (req, res) => {
    res.json('From Delete')
})

export default router