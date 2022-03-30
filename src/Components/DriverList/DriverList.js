import React, { useEffect, useState } from 'react'
import {
    Container,
    Grid,
    Typography,
    CircularProgress,
    Paper,
} from '@mui/material'
import { connect } from 'react-redux'

import Driver from './Driver/Driver'
import AddDriver from './AddDriver/AddDriver'
import { getDrivers } from '../../actions/drivers'
import ShowDriver from './ShowDriver/ShowDriver'

const Drivers = ({ getDrivers, drivers }) => {
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        getDrivers()
    }, [currentId, getDrivers])

    return (
        <Container>
            <Grid container>
                <Grid md={currentId ? 8 : 12} item>
                    <Paper sx={{ marginTop: '5px' }} elevation={3}>
                        <Typography align="center" variant="h3">
                            Drivers
                        </Typography>
                        <Grid container>
                            {!drivers.length ? (
                                <CircularProgress />
                            ) : (
                                drivers.map((driver) => {
                                    return (
                                        <Grid
                                            xs={12}
                                            sm={6}
                                            md={currentId ? 6 : 4}
                                            item
                                            key={driver._id}>
                                            <Driver
                                                currentId={currentId}
                                                setCurrentId={setCurrentId}
                                                driver={driver}
                                            />
                                        </Grid>
                                    )
                                })
                            )}
                        </Grid>
                    </Paper>
                </Grid>

                {currentId ? (
                    <Grid item md={4} sm={12}>
                        <AddDriver
                            drivers={drivers}
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                        />
                    </Grid>
                ) : (
                    ''
                )}
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return { drivers: state.drivers }
}

export default connect(mapStateToProps, { getDrivers })(Drivers)
