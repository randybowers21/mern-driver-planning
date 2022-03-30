export const weekPlans = (weekPlans = [], action) => {
    switch (action.type) {
        case 'CREATE_WEEK_PLAN':
            return [...weekPlans, action.payload]
        case 'FETCH_CURRENT_WEEK_PLANS':
            return action.payload
        case 'UPDATE_WEEK_PLAN':
            return weekPlans.map((weekPlan) =>
                weekPlan._id === action.payload._id ? action.payload : weekPlan
            )
        case 'weekPlans/fetchAllDriversPlans':
            return action.payload
        default:
            return weekPlans
    }
}

export const driverWeekPlans = (weekPlans = [], action) => {
    switch (action.type) {
        case 'weekPlans/fetchAllDriversPlans':
            return action.payload
        default:
            return weekPlans
    }
}
