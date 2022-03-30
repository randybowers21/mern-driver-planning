import React, { useEffect, useState } from 'react'
import {
    Paper,
    Grid,
    Typography,
    Container,
    Button,
    CircularProgress,
} from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { styles } from './styles'
import DriverPlans from './ShowDriverPlanList/DriverPlan'
import { getDriversWeekPlans } from '../../../actions/weekPlan'
import DriverPlanView from '../../Planning/WeekView/TractorView/DriverPlanView/DriverPlanView'

const ShowDriver = ({ getDriversWeekPlans, driverPlans }, props) => {
    const [selectedPlan, setSelectedPlan] = useState(null)
    const params = useParams()

    // I feel like i already have all of this data somewhere... but im getting it again
    const driver = driverPlans[0]?.driver

    // Get driver Id from Params not sure how to do this otherwise? UPDATE found a better way to do it with react-router-dom.
    // const driverId = window.location.pathname.split('/').pop()
    useEffect(() => {
        getDriversWeekPlans(params.driverId)
    }, [])

    if (!driverPlans || !driver) {
        return <CircularProgress thickness={5} />
    }
    return (
        <Container>
            <Paper elevation={3}>
                <Grid container></Grid>
                <Grid xs={12} justifyContent="space-between" container item>
                    <Grid xs={12} item>
                        <Button
                            component={Link}
                            to={'/drivers'}
                            size="small"
                            sx={styles.closeButton}
                            variant="outlined"
                            color="error"
                            onClick={() => setSelectedPlan(null)}>
                            x
                        </Button>
                    </Grid>
                    <Grid sm={6} item>
                        <Typography sx={styles.driverName} variant="h2">
                            {driver.firstName} {driver.lastName}
                        </Typography>
                    </Grid>
                    <Grid sm={6} textAlign="right" item>
                        <Typography sx={styles.tractorNumber} variant="h2">
                            Tractor # {driver.tractor}
                        </Typography>
                    </Grid>
                    <Grid spacing={2} container>
                        <Grid xs={12} md={selectedPlan ? 7 : 12} item>
                            <DriverPlans
                                weekPlans={driverPlans}
                                setSelectedPlan={setSelectedPlan}
                            />
                        </Grid>
                        <Grid xs={12} md={5} item>
                            {selectedPlan ? (
                                <DriverPlanView
                                    driver={driver}
                                    plan={selectedPlan}
                                />
                            ) : (
                                ''
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        driverPlans: state.driverWeekPlans,
    }
}

export default connect(mapStateToProps, { getDriversWeekPlans })(ShowDriver)
