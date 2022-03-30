import mongoose from "mongoose";
import Driver from "../models/Driver.js";

export const getDrivers = async (req, res) => {
    try {
        const drivers = await Driver.find()
            .populate('weekPlans')
        res.status(200).json(drivers)
    } catch (error) {
        console.log(error);
    }
}

export const createDriver = async (req, res) => {
    const driver = req.body;
    const newDriver = new Driver(driver)
    try {
        await newDriver.save()
        res.status(201).json(newDriver)
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
   
}

export const updateDriver = async (req, res) => {
    const {id: _id} = req.params;
    const driver = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No driver with that id')
    const updatedDriver = await Driver.findByIdAndUpdate(_id, {...driver, _id}, {new: true})
    res.json(updatedDriver)
}

export const deleteDriver = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No driver with that id')
    await Driver.findByIdAndRemove(id)
    res.json({ message: 'Driver deleted successfully'})
}