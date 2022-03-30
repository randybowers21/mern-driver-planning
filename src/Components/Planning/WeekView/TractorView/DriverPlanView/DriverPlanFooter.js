import React from 'react'
import { TableCell, TableFooter, TableRow } from '@mui/material'

const DriverPlanFooter = ({ plan }) => {
    const checkPercent = (weekPlan) => {
        if (
            !plan ||
            isNaN(
                weekPlan.deadHead / (weekPlan.loadedMiles + weekPlan.deadHead)
            )
        ) {
            return '0.00'
        } else {
            return (
                (weekPlan.deadHead /
                    (weekPlan.loadedMiles + weekPlan.deadHead)) *
                100
            ).toFixed(2)
        }
    }
    const deadHeadPercent = checkPercent(plan)
    return (
        <TableFooter>
            <TableRow>
                <TableCell align="center">Loaded Miles</TableCell>
                <TableCell align="center">Empty Miles</TableCell>
                <TableCell align="center">Percentage</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center">
                    {plan && plan.loadedMiles
                        ? `${plan.loadedMiles} Miles`
                        : '0 Miles'}
                </TableCell>
                <TableCell align="center">
                    {plan && plan.deadHead
                        ? `${plan.deadHead} Miles`
                        : '0 Miles'}
                </TableCell>
                <TableCell align="center">{deadHeadPercent}%</TableCell>
            </TableRow>
        </TableFooter>
    )
}

export default DriverPlanFooter
