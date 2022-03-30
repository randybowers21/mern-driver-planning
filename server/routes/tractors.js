import express from 'express'
import {
    getTractors,
    createTractor,
    deleteTractor,
    updateTractor,
} from '../controllers/tractors.js'

const router = express.Router()

router.get('/', getTractors)
router.post('/', createTractor)
router.patch('/:id', updateTractor)
router.delete('/:id', deleteTractor)

export default router
