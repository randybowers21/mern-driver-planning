import { TableRow, TableCell, Button } from '@mui/material';
import './planningsheet.css'

import React from 'react';

function PlanningRow({day, data}) {
  return (
    <TableRow className='row' sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">{day}</TableCell>
        <TableCell>{data.day.start}</TableCell>
        <TableCell>{data.day.end}</TableCell>
        <TableCell>{data.night.start}</TableCell>
        <TableCell>{data.night.end}</TableCell>
    </TableRow>
  );
}

export default PlanningRow;
