import mongoose from 'mongoose'
import Tractor from '../models/Tractor.js'
import Driver from '../models/Driver.js'

export const getTractors = async (req, res) => {
    try {
        const tractors = await Tractor.find()
            .populate('dayDriver')
            .populate('nightDriver')
        res.status(200).json(tractors)
    } catch (error) {
        console.log(error)
    }
}

export const createTractor = async (req, res) => {
    const tractor = req.body
    const getName = (name) => {
        const newName = name.split(' ')
        return newName
    }
    console.log(tractor)
    const dayDriver = getName(tractor.dayDriver)
    const nightDriver = getName(tractor.nightDriver)
    const foundDayDriver = await Driver.find({
        firstName: dayDriver[0],
        lastName: dayDriver[1],
    })
    const foundNightDriver = await Driver.find({
        firstName: nightDriver[0],
        lastName: nightDriver[1],
    })
    const newTractor = {
        number: tractor.number,
        dayDriver: foundDayDriver[0]._id,
        nightDriver: foundNightDriver[0]._id,
    }
    try {
        await new Tractor(newTractor).save()
        await res.status(201).json(newTractor)
    } catch (error) {
        console.log(error)
    }
}

export const updateTractor = async (req, res) => {
    const { id } = req.params
    const tractor = req.body
    const getName = (name) => {
        const newName = name.split(' ')
        return newName
    }
    console.log(tractor)
    const dayDriver = getName(tractor.dayDriver)
    const nightDriver = getName(tractor.nightDriver)
    const foundDayDriver = await Driver.find({
        firstName: dayDriver[0],
        lastName: dayDriver[1],
    })
    const foundNightDriver = await Driver.find({
        firstName: nightDriver[0],
        lastName: nightDriver[1],
    })
    const newTractor = {
        number: tractor.number,
        dayDriver: foundDayDriver[0]._id,
        nightDriver: foundNightDriver[0]._id,
    }
    try {
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send('No driver with that id')
        const updatedTractor = await Tractor.findByIdAndUpdate(id, {
            ...newTractor,
        })
        res.json(updatedTractor)
    } catch (error) {}
}

export const deleteTractor = async (req, res) => {
    const { id } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send('No driver with that id')
        await Tractor.findByIdAndRemove(id)
        res.json({ message: 'Tractor deleted successfully' })
    } catch (error) {
        console.log(error)
    }
}
