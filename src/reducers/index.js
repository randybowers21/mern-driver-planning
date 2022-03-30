import { combineReducers } from 'redux'

import drivers from './drivers'
import tractors from './tractors'
import { weekPlans, driverWeekPlans } from './weekplans'

export default combineReducers({
    drivers,
    tractors,
    currentWeekPlans: weekPlans,
    driverWeekPlans,
})
