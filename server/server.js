import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';

import driverRoutes from './routes/drivers.js'
import tractorRoutes from './routes/tractors.js'
import weekPlanRoutes from './routes/weekplans.js'

const app = express();

const CONNECTION_URL = 'mongodb+srv://randybowers:Randyb21@cluster0.hx3df.mongodb.net/driver-planning?retryWrites=true&w=majority'

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/weekplans', weekPlanRoutes)
app.use('/drivers', driverRoutes);
app.use('/tractors', tractorRoutes)


const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((err) => console.log(err.message));