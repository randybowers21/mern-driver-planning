import React, { useState } from 'react'
import { Typography, Paper, Button, ButtonGroup } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteDriver } from '../../../actions/drivers'
import { styles } from './styles'

const Driver = ({ driver, setCurrentId }) => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const dispatch = useDispatch()

    const renderButtons = () => {
        if (isLoggedIn) {
            return (
                <ButtonGroup variant="text">
                    <Button color="success">View</Button>
                    <Button
                        color="info"
                        onClick={() => setCurrentId(driver._id)}>
                        Update
                    </Button>
                    <Button
                        color="error"
                        onClick={() => dispatch(deleteDriver(driver._id))}>
                        Delete
                    </Button>
                </ButtonGroup>
            )
        }
    }

    return (
        <Paper elevation={3} sx={styles.driverCard}>
            <Typography
                variant="h5"
                color="text.secondary">{`${driver.firstName} ${driver.lastName}`}</Typography>
            <Typography sx={styles.driverName} variant="h5">
                {driver.tractor}
            </Typography>
            <Typography color="text.secondary">{driver.days}</Typography>
            <Typography color="text.secondary">{driver.hours}</Typography>
            {isLoggedIn ? (
                renderButtons()
            ) : (
                <Button
                    color="success"
                    variant="outlined"
                    component={Link}
                    to={`/drivers/${driver._id}`}>
                    View
                </Button>
            )}
        </Paper>
    )
}

export default Driver
