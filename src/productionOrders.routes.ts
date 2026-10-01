import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.json({
        msg: 'From Get'
    })
})

router.post('/', (req, res) => {
    res.json({
        msg: 'From Post'
    })
})

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