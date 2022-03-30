import mongoose  from "mongoose";

const tractorSchema = mongoose.Schema({
    number: { type: String, required: true},
    dayDriver: {type: mongoose.Schema.Types.ObjectId, ref: 'Driver'},
    nightDriver: {type: mongoose.Schema.Types.ObjectId, ref: 'Driver'},
})

const Tractor = mongoose.model('Tractor', tractorSchema);

export default Tractor;