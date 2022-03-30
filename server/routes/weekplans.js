import express from 'express'
import {
    getCurrentWeekPlans,
    updateWeekPlan,
} from '../controllers/weekPlans.js'

const router = express.Router()

router.get('/', getCurrentWeekPlans)
router.patch('/:id', updateWeekPlan)
// router.post('/:driverId', createWeekPlan);
// router.patch('/:id', updateDriver);
// router.delete('/:id', deleteDriver)

export default router
