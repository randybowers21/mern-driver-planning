import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
} from '@mui/material'
import moment from 'moment'

import { createWeekPlan } from '../../../../../actions/weekPlan'
import { useEffect } from 'react'
import DriverPlanEdit from './DriverPlanEdit'
import DriverPlanFooter from './DriverPlanFooter'
import { weekDays } from '../../../../../data'

const monFri = {
    mondayStart: 'On',
    mondayEnd: 'On',
    tuesdayStart: 'On',
    tuesdayEnd: 'On',
    wednesdayStart: 'On',
    wednesdayEnd: 'On',
    thursdayStart: 'On',
    thursdayEnd: 'On',
    fridayStart: 'On',
    fridayEnd: 'On',
    saturdayStart: 'Off',
    saturdayEnd: 'Off',
    sundayStart: 'Off',
    sundayEnd: 'Off',
    driver: '',
}
const tueSat = {
    mondayStart: 'Off',
    mondayEnd: 'Off',
    tuesdayStart: 'On',
    tuesdayEnd: 'On',
    wednesdayStart: 'On',
    wednesdayEnd: 'On',
    thursdayStart: 'On',
    thursdayEnd: 'On',
    fridayStart: 'On',
    fridayEnd: 'On',
    saturdayStart: 'On',
    saturdayEnd: 'On',
    sundayStart: 'Off',
    sundayEnd: 'Off',
    driver: '',
}
const sunThur = {
    mondayStart: 'On',
    mondayEnd: 'On',
    tuesdayStart: 'On',
    tuesdayEnd: 'On',
    wednesdayStart: 'On',
    wednesdayEnd: 'On',
    thursdayStart: 'On',
    thursdayEnd: 'On',
    fridayStart: 'Off',
    fridayEnd: 'Off',
    saturdayStart: 'Off',
    saturdayEnd: 'Off',
    sundayStart: 'On',
    sundayEnd: 'On',
    driver: '',
}

const DriverPlanView = ({ driver, plan, buttons }) => {
    const [driverPlanData, setDriverPlanData] = useState({
        mondayStart: '',
        mondayEnd: '',
        tuesdayStart: '',
        tuesdayEnd: '',
        wednesdayStart: '',
        wednesdayEnd: '',
        thursdayStart: '',
        thursdayEnd: '',
        fridayStart: '',
        fridayEnd: '',
        saturdayStart: '',
        saturdayEnd: '',
        sundayStart: '',
        sundayEnd: '',
        loadedMiles: '',
        deadHead: '',
        driver: driver ? driver._id : '',
    })
    const [toggleEdit, setToggleEdit] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        setDriverPlanData(plan)
        createDriverPlan()
    }, [plan])

    const createDriverPlan = () => {
        if (!driver) {
            return
        } else if (driver.days === 'Monday-Friday') {
            setDriverPlanData({
                ...monFri,
                driver: driver._id,
            })
            return driverPlanData
        } else if (driver.days === 'Tuesday-Saturday') {
            setDriverPlanData({
                ...tueSat,
                driver: driver._id,
            })
            return driverPlanData
        } else {
            setDriverPlanData({
                ...sunThur,
                driver: driver._id,
            })
            return driverPlanData
        }
    }

    const createNewWeekPlan = () => {
        dispatch(createWeekPlan(driverPlanData.driver, { ...driverPlanData }))
    }
    const checkTimes = (plan) => {
        if (
            driver.firstName === 'OPEN' ||
            (plan &&
                moment(plan.createdAt) < moment() &&
                moment(plan.createdAt) > moment().subtract(1, 'week'))
        ) {
            return true
        }
    }

    const renderButtonText = (plan, toggleEdit) => {
        if (plan && !toggleEdit) {
            return 'Edit Plan'
        } else if (toggleEdit) {
            return 'Cancel'
        }
        return 'No Plan Found'
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Day</TableCell>
                    <TableCell align="center">
                        {driver
                            ? `${driver.firstName} ${driver.lastName} Start`
                            : 'Please Select a Tractor'}
                    </TableCell>
                    <TableCell align="center">
                        {driver
                            ? `${driver.firstName} ${driver.lastName} End`
                            : ''}
                    </TableCell>
                </TableRow>
            </TableHead>
            {!toggleEdit ? (
                <TableBody>
                    {weekDays.map((weekDay, index) => {
                        const lowerCaseWeekDay = weekDay.toLowerCase()
                        if (!plan) {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{weekDay}</TableCell>
                                    <TableCell align="center">
                                        No Plan Found
                                    </TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            )
                        }
                        return (
                            <TableRow key={index}>
                                <TableCell>{weekDay}</TableCell>
                                <TableCell align="center">
                                    {plan[`${lowerCaseWeekDay}Start`]}
                                </TableCell>
                                <TableCell align="center">
                                    {plan[`${lowerCaseWeekDay}End`]}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            ) : (
                <DriverPlanEdit
                    plan={plan}
                    driverPlanData={driverPlanData}
                    setDriverPlanData={setDriverPlanData}
                    setToggleEdit={setToggleEdit}
                    toggleEdit={toggleEdit}
                />
            )}
            <TableBody>
                {driver && buttons ? (
                    <TableRow size="small">
                        <TableCell size="small">
                            <Button
                                onClick={createNewWeekPlan}
                                variant="outlined"
                                disabled={checkTimes(plan) ? true : false}
                                color="success"
                                size="small">
                                {checkTimes(plan)
                                    ? 'Plan Created'
                                    : 'Create Week'}
                            </Button>
                        </TableCell>
                        <TableCell size="small" align="center" colSpan={2}>
                            <Button
                                disabled={plan ? false : true}
                                fullWidth
                                variant="outlined"
                                color={toggleEdit ? 'error' : 'info'}
                                size="small"
                                onClick={() => setToggleEdit(!toggleEdit)}>
                                {renderButtonText(plan, toggleEdit)}
                                {}
                            </Button>
                        </TableCell>
                    </TableRow>
                ) : (
                    <TableRow></TableRow>
                )}
            </TableBody>
            <DriverPlanFooter plan={plan} />
        </Table>
    )
}

export default DriverPlanView
