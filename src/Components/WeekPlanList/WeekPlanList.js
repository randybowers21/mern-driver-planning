import React, { useEffect } from 'react'
import {
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    Typography,
    Container,
    Paper,
    TableFooter,
} from '@mui/material'
import { connect } from 'react-redux'
import moment from 'moment'

import WeekPlanSummary from './WeekPlan/WeekPlanSummary'
import { getCurrentWeekPlans } from '../../actions/weekPlan'

const WeekPlanList = ({ currentWeekPlans, getCurrentWeekPlans }) => {
    useEffect(() => {
        getCurrentWeekPlans()
    }, [])
    //this returns weird objects....
    const calculateTotals = (plans) => {
        if (!plans) {
            console.log('No Plan')
        }
        const loadedMiles = plans.reduce(
            (prev, curr) => ({
                loadedMiles: prev.loadedMiles + curr.loadedMiles,
            }),
            { loadedMiles: 0 }
        )
        const emptyMiles = plans.reduce(
            (prev, curr) => ({
                deadHead: prev.deadHead + curr.deadHead,
            }),
            { deadHead: 0 }
        )
        const deadHeadPercent = (
            (emptyMiles.deadHead /
                (loadedMiles.loadedMiles + emptyMiles.deadHead)) *
            100
        ).toFixed(2)
        return { loadedMiles, emptyMiles, deadHeadPercent }
    }

    const totalMiles = calculateTotals(currentWeekPlans)
    return (
        <Container>
            <Paper sx={{ marginTop: '10px', paddingBottom: '10px' }}>
                <Typography variant="h3" align="center">
                    Week Summary{' '}
                    {currentWeekPlans
                        ? moment(currentWeekPlans[0]?.createdAt).format(
                              'MMMM Do'
                          )
                        : ''}
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">
                                <Typography>Driver</Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography>Total Miles</Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography>Loaded Miles</Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography>Empty Miles</Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography>Percentage</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentWeekPlans.map((weekPlan) => {
                            return (
                                <WeekPlanSummary
                                    key={weekPlan._id}
                                    weekPlan={weekPlan}
                                />
                            )
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="right">
                                <Typography>Total Miles</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography>Total Loaded Miles</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography>Total Empty Miles</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography>Total Deadhead</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="right">
                                <Typography>{`${
                                    totalMiles.loadedMiles.loadedMiles +
                                    totalMiles.emptyMiles.deadHead
                                } Miles`}</Typography>
                            </TableCell>
                            <TableCell align="right">
                                {/* FIGURE OUT WHY RETURNING OBJECT LIKE THIS */}
                                <Typography>{`${totalMiles.loadedMiles.loadedMiles} Miles`}</Typography>
                            </TableCell>
                            <TableCell align="right">
                                {/* FIGURE OUT WHY RETURNING OBJECT LIKE THIS */}
                                <Typography>{`${totalMiles.emptyMiles.deadHead} Miles`}</Typography>
                            </TableCell>
                            <TableCell align="right">
                                {/* FIGURE OUT WHY RETURNING OBJECT LIKE THIS */}
                                <Typography>{`${totalMiles.deadHeadPercent}%`}</Typography>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        currentWeekPlans: state.currentWeekPlans,
    }
}

export default connect(mapStateToProps, { getCurrentWeekPlans })(WeekPlanList)
