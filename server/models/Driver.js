import mongoose  from "mongoose";


const driverSchema = mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    tractor: {type: Number, required: true},
    days: { type: String, required: true},
    hours: {type: String, required: true},
    weekPlans: [{type: mongoose.Schema.Types.ObjectId, ref: 'WeekPlan'}]
})

const Driver = mongoose.model('Driver', driverSchema);

export default Driver;