import * as api from '../api'

import {
    FETCH_ALL_DRIVERS,
    CREATE_DRIVER,
    UPDATE_DRIVER,
    DELETE_DRIVER,
} from '../constants/actionTypes'

export const getDrivers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchDrivers()
        dispatch({ type: FETCH_ALL_DRIVERS, payload: data })
    } catch (error) {
        console.log(error)
    }
}

// export const fetchDriver = (driverId) => async (dispatch) => {
//     try {
//         const { data } = await api.fetchDriver()
//         dispatch({ type: FETCH_DRIVER, payload: data })
//     } catch (error) {
//         console.log(error)
//     }
// }

export const createDriver = (driver) => async (dispatch) => {
    try {
        const { data } = await api.createDriver(driver)
        dispatch({ type: CREATE_DRIVER, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateDriver = (id, driver) => async (dispatch) => {
    try {
        const { data } = await api.updateDriver(id, driver)
        dispatch({ type: UPDATE_DRIVER, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteDriver = (id) => async (dispatch) => {
    try {
        await api.deleteDriver(id)
        dispatch({ type: DELETE_DRIVER, payload: id })
    } catch (error) {
        console.log(error)
    }
}
