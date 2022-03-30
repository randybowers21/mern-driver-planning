import React from 'react'
import {
    Container,
    Grid,
    TableCell,
    TableRow,
    Table,
    TableBody,
    Typography,
} from '@mui/material'

import DriverPlanView from './DriverPlanView/DriverPlanView'

const TractorView = ({ selectedTractor, weekPlans }) => {
    const matchPlansWithDriver = (weekPlans, selectedTractor) => {
        if (!selectedTractor) {
            return 'No Tractor Selected'
        } else {
            const foundDayPlan = weekPlans.find(
                ({ driver }) => driver._id === selectedTractor.dayDriver._id
            )
            const foundNightPlan = weekPlans.find(
                ({ driver }) => driver._id === selectedTractor.nightDriver._id
            )
            return { foundDayPlan, foundNightPlan }
        }
    }

    const calculateTractorTotals = (foundPlans) => {
        const { foundDayPlan, foundNightPlan } = foundPlans
        if (foundDayPlan && foundNightPlan) {
            const totalLoadedMiles =
                foundDayPlan.loadedMiles + foundNightPlan.loadedMiles
            const totalEmptyMiles =
                foundDayPlan.deadHead + foundNightPlan.deadHead
            const totalDeadHeadPercent = (
                (totalEmptyMiles / (totalLoadedMiles + totalEmptyMiles)) *
                100
            ).toFixed(2)
            return { totalLoadedMiles, totalEmptyMiles, totalDeadHeadPercent }
        } else if (foundDayPlan && !foundNightPlan) {
            const totalLoadedMiles = foundDayPlan.loadedMiles
            const totalEmptyMiles = foundDayPlan.deadHead
            const totalDeadHeadPercent = (
                (totalEmptyMiles / (totalLoadedMiles + totalEmptyMiles)) *
                100
            ).toFixed(2)
            return { totalLoadedMiles, totalEmptyMiles, totalDeadHeadPercent }
        } else if (!foundDayPlan && foundNightPlan) {
            const totalLoadedMiles = foundNightPlan.loadedMiles
            const totalEmptyMiles = foundNightPlan.deadHead
            const totalDeadHeadPercent = (
                (totalEmptyMiles / (totalLoadedMiles + totalEmptyMiles)) *
                100
            ).toFixed(2)
            return { totalLoadedMiles, totalEmptyMiles, totalDeadHeadPercent }
        }
        return 'No Plans Found'
    }

    const foundPlans = matchPlansWithDriver(weekPlans, selectedTractor)
    const tractorTotals = calculateTractorTotals(foundPlans)
    return (
        <Container>
            <Grid columnSpacing={1} container>
                <Grid sm={12} md={6} item>
                    <DriverPlanView
                        driver={selectedTractor?.dayDriver}
                        plan={foundPlans.foundDayPlan}
                        buttons
                    />
                </Grid>
                <Grid sm={12} md={6} item>
                    <DriverPlanView
                        driver={selectedTractor?.nightDriver}
                        plan={foundPlans?.foundNightPlan}
                        buttons
                    />
                </Grid>
                <Grid xs={12} item>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography>Tractor Totals</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        Loaded: {tractorTotals.totalLoadedMiles}{' '}
                                        Miles
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        Empty: {tractorTotals.totalEmptyMiles}{' '}
                                        Miles
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        Percentage:{' '}
                                        {tractorTotals
                                            ? tractorTotals.totalDeadHeadPercent
                                            : '0.00'}
                                        %
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </Container>
    )
}

export default TractorView
