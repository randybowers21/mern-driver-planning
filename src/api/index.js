import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

//DRIVERS
export const fetchDrivers = () => API.get('/drivers')
export const createDriver = (newDriver) => API.post('/drivers', newDriver)
export const updateDriver = (id, updatedDriver) =>
    API.patch(`/drivers/${id}`, updatedDriver)
export const deleteDriver = (id) => API.delete(`/drivers/${id}`)

//TRACTORS
export const fetchTractors = () => API.get('/tractors')
export const createTractor = (newTractor) => API.post('/tractors', newTractor)
export const updateTractor = (id, updatedTractor) =>
    API.patch(`/tractors/${id}`, updatedTractor)
export const deleteTractor = (id) => API.delete(`/tractors/${id}`)

//WEEKPLANS
export const createWeekPlan = (driverId, newWeekPlan) =>
    API.post(`/drivers/${driverId}/weekplans`, newWeekPlan)
export const updateWeekPlan = (id, weekPlan) =>
    API.patch(`/weekplans/${id}`, weekPlan)
export const getCurrentWeekPlans = () => API.get('/weekplans')
export const getDriversWeekPlans = (driverId) =>
    API.get(`/drivers/${driverId}/weekPlans`)
