import { FETCH_ALL_DRIVERS, CREATE_DRIVER, UPDATE_DRIVER, DELETE_DRIVER } from "../constants/actionTypes";

export default (drivers = [], action) => {
    switch (action.type) {
        case FETCH_ALL_DRIVERS:
            return action.payload; 
        case CREATE_DRIVER:
            return [...drivers, action.payload];
        case UPDATE_DRIVER:
            return drivers.map((driver) => (driver._id === action.payload._id ? action.payload : driver));
        case DELETE_DRIVER:
            return  drivers.filter((driver) => driver._id !== action.payload)
        default:
            return drivers;
    }
}