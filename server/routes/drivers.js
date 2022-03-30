import express from 'express'
import {
    getDrivers,
    createDriver,
    updateDriver,
    deleteDriver,
} from '../controllers/drivers.js'
import {
    createWeekPlan,
    getDriversWeekPlans,
} from '../controllers/weekPlans.js'

const router = express.Router()

router.get('/', getDrivers)
router.post('/', createDriver)
router.patch('/:id', updateDriver)
router.delete('/:id', deleteDriver)

router.post('/:driverId/weekplans', createWeekPlan)
router.get('/:driverId/weekplans', getDriversWeekPlans)

export default router
