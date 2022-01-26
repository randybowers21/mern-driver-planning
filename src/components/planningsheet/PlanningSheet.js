import React, { useState } from 'react';
import { Table, TableBody, Paper, TableContainer, Container } from '@mui/material/';

import Header from './Header';
import PlanningRow from '../planningsheet/PlanningRow'
import Form from '../../components/planningsheet/addform/Form'
import { fakeWeek } from '../../data'

export default function PlanningSheet() {
  const [currentTractor, setCurrentTractor] = useState(363)
  const [currentWeek, setCurrentWeek] = useState(fakeWeek)

  return (
    <Container maxWidth='sm'>
      <Table sx={{ minWidth: 650 }} size='small'>
        <Header currentTractor={currentTractor} setCurrentTractor={setCurrentTractor} currentWeek={currentWeek} setCurrentWeek={setCurrentWeek}/>
        <TableBody>
          <PlanningRow day='Monday' data={currentWeek.monday}></PlanningRow>
          <PlanningRow day='Tuesday' data={currentWeek.tuesday}></PlanningRow>
          <PlanningRow day='Wednesday'data={currentWeek.wednesday}></PlanningRow>
          <PlanningRow day='Thursday'data={currentWeek.thursday}></PlanningRow>
          <PlanningRow day='Friday'data={currentWeek.friday}></PlanningRow>
          <PlanningRow day='Saturday'data={currentWeek.saturday}></PlanningRow>
          <PlanningRow day='Sunday'data={currentWeek.sunday}></PlanningRow>
        </TableBody>
      </Table>
      <Form />
    </Container>
  );
}