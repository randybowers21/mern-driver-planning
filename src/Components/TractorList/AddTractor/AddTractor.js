import React, { useState, useEffect } from 'react'
import { Paper, Container, Typography, Grid, Button } from '@mui/material'
import { useDispatch } from 'react-redux'

import { formStyles } from './styles'
import Input from '../../Global/Input'
import Dropdown from '../../Global/Dropdown'
import { createTractor, updateTractor } from '../../../actions/tractors'

const AddTractor = ({ drivers, selectedTractor, setSelectedTractor }) => {
    const [tractorData, setTractorData] = useState({
        number: '',
        dayDriver: '',
        nightDriver: '',
    })
    const [driverNames, setDriverNames] = useState([])
    const dispatch = useDispatch()

    const clear = () => {
        setTractorData({
            number: '',
            dayDriver: '',
            nightDriver: '',
        })
        setSelectedTractor(null)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (!selectedTractor) {
            dispatch(createTractor(tractorData))
        }
        dispatch(updateTractor(selectedTractor._id, tractorData))
    }
    useEffect(() => {
        if (drivers) {
            setDriverNames(
                drivers.map((driver) => {
                    return `${driver.firstName} ${driver.lastName}`
                })
            )
        }
    }, [drivers])

    const handleChange = (event) => {
        setTractorData({
            ...tractorData,
            [event.target.name]: event.target.value,
        })
    }

    return !drivers ? (
        <div>Loading</div>
    ) : (
        <Container component="main" maxWidth="xs">
            <Typography align="center" variant="h3" gutterBottom>
                {selectedTractor ? 'Update Tractor' : 'Add a Tractor'}
            </Typography>
            <Paper sx={formStyles.paper} elevation={3}>
                <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Input
                            name="number"
                            label="Tractor Number"
                            value={tractorData.number}
                            handleChange={handleChange}
                        />
                        <Dropdown
                            name="dayDriver"
                            label="Day Driver"
                            value={tractorData.dayDriver}
                            options={driverNames}
                            handleChange={handleChange}
                        />
                        <Dropdown
                            name="nightDriver"
                            label="Night Driver"
                            value={tractorData.nightDriver}
                            options={driverNames}
                            handleChange={handleChange}
                        />
                        <Grid container item>
                            <Button
                                color="success"
                                variant="outlined"
                                fullWidth
                                type="submit">
                                {selectedTractor
                                    ? 'Update Tractor'
                                    : 'Add Tractor'}
                            </Button>
                        </Grid>
                        <Grid container item>
                            <Button
                                color="error"
                                variant="outlined"
                                fullWidth
                                onClick={() => clear()}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default AddTractor
