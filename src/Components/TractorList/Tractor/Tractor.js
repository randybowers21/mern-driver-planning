import {
    Button,
    Grid,
    Paper,
    TableBody,
    TableCell,
    Table,
    TableRow,
    Typography,
} from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

import { styles } from './styles'
import { deleteTractor, updateTractor } from '../../../actions/tractors'

const Tractor = ({ tractor, setSelectedTractor }) => {
    const dispatch = useDispatch()

    return (
        <Paper sx={styles.tractorCard} elevation={3}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Typography variant="h3">
                                {tractor.number}
                            </Typography>
                        </TableCell>
                        <TableCell size="medium" align="center">
                            <Typography variant="h6">Day:</Typography>
                            <Typography variant="h6">
                                {!tractor.dayDriver
                                    ? 'No Driver'
                                    : `${tractor.dayDriver.firstName} ${tractor.dayDriver.lastName}`}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h6">Night:</Typography>
                            <Typography variant="h6">
                                {!tractor.nightDriver
                                    ? 'No Driver'
                                    : `${tractor.nightDriver.firstName} ${tractor.nightDriver.lastName}`}
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Button
                                variant="outlined"
                                color="info"
                                align="right"
                                onClick={() => setSelectedTractor(tractor)}>
                                Update
                            </Button>
                        </TableCell>
                        <TableCell align="left">
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() =>
                                    dispatch(deleteTractor(tractor._id))
                                }>
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    )
}

export default Tractor
