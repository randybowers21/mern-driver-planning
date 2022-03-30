import * as api from '../api'

import {
    CREATE_TRACTOR,
    FETCH_ALL_TRACTORS,
    DELETE_TRACTOR,
    UPDATE_TRACTOR,
} from '../constants/actionTypes'

export const getTractors = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTractors()
        dispatch({ type: FETCH_ALL_TRACTORS, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createTractor = (tractor) => async (dispatch) => {
    try {
        const { data } = await api.createTractor(tractor)
        dispatch({ type: CREATE_TRACTOR, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateTractor = (id, tractor) => async (dispatch) => {
    try {
        const { data } = await api.updateTractor(id, tractor)
        dispatch({ type: UPDATE_TRACTOR, payload: data })
    } catch (error) {}
}

export const deleteTractor = (id) => async (dispatch) => {
    try {
        await api.deleteTractor(id)
        dispatch({ type: DELETE_TRACTOR, payload: id })
    } catch (error) {
        console.log(error)
    }
}
