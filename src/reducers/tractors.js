import {
    FETCH_ALL_TRACTORS,
    CREATE_TRACTOR,
    DELETE_TRACTOR,
    UPDATE_TRACTOR,
} from '../constants/actionTypes'

export default (tractors = [], action) => {
    switch (action.type) {
        case FETCH_ALL_TRACTORS:
            return action.payload
        case CREATE_TRACTOR:
            return [...tractors, action.payload]
        case UPDATE_TRACTOR:
            return tractors.map((tractor) =>
                tractor._id === action.payload._id ? action.payload : tractor
            )
        case DELETE_TRACTOR:
            return tractors.filter((tractor) => tractor._id !== action.payload)
        default:
            return tractors
    }
}
