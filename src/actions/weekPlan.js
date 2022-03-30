import * as api from '../api'

export const createWeekPlan = (driverId, weekPlan) => async (dispatch) => {
    try {
        const { data } = await api.createWeekPlan(driverId, weekPlan)
        dispatch({ type: 'CREATE_WEEK_PLAN', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateWeekPlan = (id, weekPlan) => async (dispatch) => {
    try {
        const { data } = await api.updateWeekPlan(id, weekPlan)
        dispatch({ type: 'UPDATE_WEEK_PLAN', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getCurrentWeekPlans = () => async (dispatch) => {
    try {
        const { data } = await api.getCurrentWeekPlans()
        dispatch({ type: 'FETCH_CURRENT_WEEK_PLANS', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getDriversWeekPlans = (driverId) => async (dispatch) => {
    try {
        const { data } = await api.getDriversWeekPlans(driverId)
        dispatch({ type: 'weekPlans/fetchAllDriversPlans', payload: data })
    } catch (error) {
        console.log(error)
    }
}
