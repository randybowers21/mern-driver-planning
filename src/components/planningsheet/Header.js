import React from 'react';
import { TableHead, TableCell, TableRow, Button} from '@mui/material'
import Dropdown from '../dropdown/Dropdown';
import {tractors,  tractorNums} from '../../data'
import './planningsheet.css'

function Header({currentTractor, setCurrentTractor}) {
    const tractor = tractors[currentTractor]
    const checkTimes = (time) => {
        if(time === '0500-1700'){
          return '5 to 5'
        } else if(time === '0800-2000'){
          return '8 to 8'
        } else {
          return '10 to 10'
        }
      }

  return (
    <TableHead>
        <TableRow>
        <TableCell className='tableName'>Tractor #</TableCell>
            <TableCell onChange={(event) => setCurrentTractor(event.target.value)}>
                <Dropdown title='Tractor' options={tractorNums} selected={currentTractor} setSelected={setCurrentTractor} />
            </TableCell>
            <TableCell align='center'><Button color='success' size='small' variant='contained'>Plan a Day</Button></TableCell>
            <TableCell align='center'><Button color='info' size='small' variant='contained'>Edit a Day</Button></TableCell>
        </TableRow>
        <TableRow className='driverInfo'>
            <TableCell>Times: {checkTimes(tractor.dayDriver.schedule.time)}</TableCell>
            <TableCell align='left'>{tractor.dayDriver.name}</TableCell>
            <TableCell align='left'>{tractor.dayDriver.schedule.days}</TableCell>
            <TableCell align='left'>{tractor.nightDriver.name}</TableCell>
            <TableCell align='left'>{tractor.nightDriver.schedule.days}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell align='left'>Day</TableCell>
            <TableCell align='left'>Start</TableCell>
            <TableCell align='left'>Return</TableCell>
            <TableCell align='left'>Start</TableCell>
            <TableCell align='left'>Return</TableCell>
        </TableRow>
    </TableHead>
  )
}

export default Header;
