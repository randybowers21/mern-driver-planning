import mongoose from 'mongoose'

const weekPlanSchema = new mongoose.Schema(
    {
        mondayStart: { type: String },
        mondayEnd: { type: String },
        tuesdayStart: { type: String },
        tuesdayEnd: { type: String },
        wednesdayStart: { type: String },
        wednesdayEnd: { type: String },
        thursdayStart: { type: String },
        thursdayEnd: { type: String },
        fridayStart: { type: String },
        fridayEnd: { type: String },
        saturdayStart: { type: String },
        saturdayEnd: { type: String },
        sundayStart: { type: String },
        sundayEnd: { type: String },
        loadedMiles: { type: Number },
        deadHead: { type: Number },
        driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' },
    },
    { timestamps: true }
)

const WeekPlan = mongoose.model('WeekPlan', weekPlanSchema)

export default WeekPlan
