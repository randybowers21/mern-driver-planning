import mongoose from 'mongoose'
import moment from 'moment'

import Driver from '../models/Driver.js'
import WeekPlan from '../models/WeekPlan.js'

const planningOptions = [
    {
        name: 'On',
        loadedMiles: 0,
        deadHead: 0,
    },
    {
        name: 'Off',
        loadedMiles: 0,
        deadHead: 0,
    },
    {
        name: 'St George-Barstow',
        loadedMiles: 275,
        deadHead: 0,
    },
    {
        name: 'St George-SLC',
        loadedMiles: 300,
        deadHead: 0,
    },
    {
        name: 'SLC-St George',
        loadedMiles: 300,
        deadHead: 0,
    },
    {
        name: 'SLC-Cedar City',
        loadedMiles: 250,
        deadHead: 50,
    },
    {
        name: 'Barstow-St George',
        loadedMiles: 275,
        deadHead: 0,
    },
    {
        name: 'Barstow-Vegas',
        loadedMiles: 155,
        deadHead: 120,
    },
    {
        name: 'St George-Vegas',
        loadedMiles: 120,
        deadHead: 155,
    },
    {
        name: 'Vegas-Barstow',
        loadedMiles: 155,
        deadHead: 120,
    },
    {
        name: 'Empty-Barstow',
        loadedMiles: 0,
        deadHead: 275,
    },
    {
        name: 'Empty-Cedar',
        loadedMiles: 50,
        deadHead: 250,
    },
    {
        name: 'Empty-St George',
        loadedMiles: 0,
        deadHead: 300,
    },
]

const getMiles = (plan) => {
    const dayPlans = Object.values(plan)
    if (plan) {
        const loadedMilesArr = []
        const deadHeadArr = []
        dayPlans.map((dayPlan) => {
            const found = planningOptions.find(({ name }) => {
                if (name === dayPlan) {
                    return true
                } else {
                    return false
                }
            })
            if (found) {
                loadedMilesArr.push(found.loadedMiles)
                deadHeadArr.push(found.deadHead)
            }
        })
        const loadedMiles = loadedMilesArr.reduce((prev, curr) => prev + curr)
        const deadHead = deadHeadArr.reduce((prev, curr) => prev + curr)
        return {
            loadedMiles,
            deadHead,
        }
    } else {
        return
    }
}

export const createWeekPlan = async (req, res) => {
    const weekPlan = req.body
    const { driverId } = req.params
    try {
        const newWeekPlan = new WeekPlan({
            ...weekPlan,
            createdAt: moment().startOf('week'),
            loadedMiles: 0,
            deadHead: 0,
        })
        const driver = await Driver.findById({ _id: driverId })
        driver.weekPlans.push(newWeekPlan)
        await newWeekPlan.save()
        await driver.save()
        await res.status(201).json(newWeekPlan)
    } catch (error) {
        console.log(error)
    }
}

export const updateWeekPlan = async (req, res) => {
    const weekPlan = req.body
    const { id } = req.params
    const miles = getMiles(weekPlan)
    try {
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send('No driver with that id')
        const updatedWeekPlan = await WeekPlan.findByIdAndUpdate(
            id,
            { ...weekPlan, ...miles, id },
            { new: true }
        )
        res.json(updatedWeekPlan)
    } catch (error) {
        console.log(error)
    }
}

export const getCurrentWeekPlans = async (req, res) => {
    try {
        const currentWeekPlans = await WeekPlan.find({
            createdAt: { $lte: moment(), $gte: moment().startOf('week') },
        }).populate('driver')
        res.json(currentWeekPlans)
    } catch (error) {
        console.log(error)
    }
}

export const getDriversWeekPlans = async (req, res) => {
    const { driverId } = req.params
    try {
        const foundWeekPlans = await WeekPlan.find({
            driver: driverId,
        }).populate('driver')
        res.json(foundWeekPlans)
    } catch (error) {
        console.log(error)
    }
}
