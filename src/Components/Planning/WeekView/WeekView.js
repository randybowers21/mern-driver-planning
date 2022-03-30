import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import {
    ButtonGroup,
    Button,
    Container,
    Paper,
    Typography,
} from '@mui/material'

import { getTractors } from '../../../actions/tractors'
import { getCurrentWeekPlans } from '../../../actions/weekPlan'
import TractorView from './TractorView/TractorView'

const WeekView = ({ tractors, currentWeekPlans }) => {
    const [selectedTractor, setSelectedTractor] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTractors())
        dispatch(getCurrentWeekPlans())
    }, [dispatch, selectedTractor])

    return (
        <Container>
            <Paper elevation={5}>
                <Typography
                    sx={{ margin: '10px 20px' }}
                    variant="h3"
                    align="center">
                    {!selectedTractor
                        ? 'Select a Tractor to Plan'
                        : `Tractor #${selectedTractor.number}`}
                </Typography>
                <ButtonGroup fullWidth>
                    {tractors.map((tractor) => {
                        return (
                            <Button
                                variant={
                                    selectedTractor?.number === tractor.number
                                        ? 'contained'
                                        : 'outlined'
                                }
                                key={tractor._id}
                                onClick={() => setSelectedTractor(tractor)}>
                                {tractor.number}
                            </Button>
                        )
                    })}
                </ButtonGroup>
                <TractorView
                    selectedTractor={selectedTractor}
                    weekPlans={currentWeekPlans}
                />
            </Paper>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        tractors: state.tractors,
        currentWeekPlans: state.currentWeekPlans,
    }
}

export default connect(mapStateToProps, { getTractors, getCurrentWeekPlans })(
    WeekView
)
