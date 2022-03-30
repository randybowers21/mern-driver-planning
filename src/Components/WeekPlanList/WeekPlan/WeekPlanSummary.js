import React from 'react'
import { TableBody, TableCell, TableRow, Typography } from '@mui/material'
import moment from 'moment'

const WeekPlan = ({ weekPlan }) => {
    const calculateDeadHead = (loadedMiles, deadHead) => {
        const totalMiles = loadedMiles + deadHead
        if (totalMiles) {
            return ((deadHead / totalMiles) * 100).toFixed(2)
        }
        return '0.00'
    }
    return (
        <TableRow>
            <TableCell align="right">
                <Typography>{`${weekPlan.driver.firstName} ${weekPlan.driver.lastName}`}</Typography>
            </TableCell>
            <TableCell align="center">
                <Typography>
                    {weekPlan.loadedMiles + weekPlan.deadHead} Miles
                </Typography>
            </TableCell>
            <TableCell align="center">
                <Typography>{weekPlan.loadedMiles} Miles</Typography>
            </TableCell>
            <TableCell align="center">
                <Typography>{weekPlan.deadHead} Miles</Typography>
            </TableCell>
            <TableCell align="center">
                <Typography>
                    {`${calculateDeadHead(
                        weekPlan.loadedMiles,
                        weekPlan.deadHead
                    )}%`}{' '}
                </Typography>
            </TableCell>
        </TableRow>
    )
}

export default WeekPlan
