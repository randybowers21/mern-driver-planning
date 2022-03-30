import { Container, Paper, Typography, Grid, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Input from '../../Global/Input'
import Dropdown from '../../Global/Dropdown'
import { tractorNums, scheduleDays, scheduleTimes } from '../../../data'
import { createDriver, updateDriver } from '../../../actions/drivers'

import { formStyles } from './styles'

const AddDriver = ({ currentId, setCurrentId }) => {
    const [driverData, setDriverData] = useState({
        firstName: '',
        lastName: '',
        tractor: '',
        days: '',
        hours: '',
    })
    const selectedDriver = useSelector((state) =>
        currentId
            ? state.drivers.find((driver) => driver._id === currentId)
            : null
    )
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!currentId) {
            dispatch(createDriver(driverData))
            clearForm()
        } else {
            dispatch(updateDriver(currentId, { ...driverData }))
            clearForm()
        }
    }
    useEffect(() => {
        if (selectedDriver) setDriverData({ ...selectedDriver })
    }, [selectedDriver])

    const handleChange = (event) => {
        setDriverData({
            ...driverData,
            [event.target.name]: event.target.value,
        })
    }

    const clearForm = () => {
        setCurrentId(null)
        setDriverData({
            firstName: '',
            lastName: '',
            tractor: '',
            days: '',
            hours: '',
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper sx={formStyles.paper} elevation={3}>
                <Typography gutterBottom align="center" variant="h3">
                    {selectedDriver ? 'Edit Driver' : 'Add a Driver'}
                </Typography>

                <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Input
                            name="firstName"
                            label="First Name"
                            value={driverData.firstName}
                            handleChange={handleChange}
                            half
                        />
                        <Input
                            name="lastName"
                            label="Last Name"
                            value={driverData.lastName}
                            handleChange={handleChange}
                            half
                        />
                        <Dropdown
                            name="tractor"
                            label="Tractor"
                            options={tractorNums}
                            value={driverData.tractor}
                            handleChange={handleChange}
                        />
                        <Dropdown
                            name="days"
                            label="Schedule Days"
                            options={scheduleDays}
                            value={driverData.days}
                            handleChange={handleChange}
                        />
                        <Dropdown
                            name="hours"
                            label="Schedule Times"
                            options={scheduleTimes}
                            value={driverData.hours}
                            handleChange={handleChange}
                        />
                        <Grid container item>
                            <Button
                                color="success"
                                variant="outlined"
                                fullWidth
                                type="submit">
                                {selectedDriver
                                    ? 'Update Driver'
                                    : 'Add Driver'}
                            </Button>
                            <Grid container item>
                                <Button
                                    sx={{ marginTop: '10px' }}
                                    color="error"
                                    variant="outlined"
                                    fullWidth
                                    onClick={() => clearForm()}>
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default AddDriver
