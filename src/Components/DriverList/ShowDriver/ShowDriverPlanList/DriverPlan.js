import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
import moment from 'moment'

const DriverPlan = ({ weekPlans, setSelectedPlan }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Week Start</TableCell>
                    <TableCell>Loaded Miles</TableCell>
                    <TableCell>Dead Head</TableCell>
                    <TableCell>Percentage</TableCell>
                    <TableCell>Last Edited</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {weekPlans.length !== 0 ? (
                    weekPlans.map((weekPlan, index) => {
                        const checkPercent = (weekPlan) => {
                            if (
                                isNaN(weekPlan.deadHead / weekPlan.loadedMiles)
                            ) {
                                return '0.00'
                            } else {
                                return (
                                    (weekPlan.deadHead /
                                        (weekPlan.deadHead +
                                            weekPlan.loadedMiles)) *
                                    100
                                ).toFixed(2)
                            }
                        }
                        const deadHeadPercent = checkPercent(weekPlan)
                        return (
                            <TableRow
                                onClick={() => setSelectedPlan(weekPlan)}
                                hover={true}
                                selected={true}
                                key={weekPlan._id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>
                                    <Typography>
                                        {moment(weekPlan.createdAt).format(
                                            'MMMM Do YYYY'
                                        )}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {weekPlan.loadedMiles} Miles
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {weekPlan.deadHead} Miles
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>{deadHeadPercent}%</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {moment(weekPlan.updatedAt).fromNow()}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )
                    })
                ) : (
                    <TableRow>
                        <TableCell>
                            <Typography variant="h5">
                                No Plans Available
                            </Typography>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default DriverPlan
