import React, { useEffect } from 'react'
import {
    TableBody,
    TableCell,
    TableRow,
    Button,
    FormControl,
    ButtonGroup,
} from '@mui/material'
import { useDispatch } from 'react-redux'

import { planningOptions, weekDays } from '../../../../../data'
import Dropdown from '../../../../Global/Dropdown'
import { updateWeekPlan } from '../../../../../actions/weekPlan'
import { getCurrentWeekPlans } from '../../../../../actions/weekPlan'

const planningNames = planningOptions.map((option) => {
    return option.name
})

const DriverPlanEdit = ({
    plan,
    driverPlanData,
    setDriverPlanData,
    setToggleEdit,
    toggleEdit,
}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (plan) {
            setDriverPlanData({ ...plan })
        }
    }, [plan])

    const handleChange = (event) => {
        setDriverPlanData({
            ...driverPlanData,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(updateWeekPlan(plan._id, driverPlanData))
        setToggleEdit(!toggleEdit)
    }
    return (
        <TableBody>
            <TableRow>
                <TableCell colSpan={3}>
                    <form noValidate onSubmit={handleSubmit}>
                        <ButtonGroup
                            orientation="vertical"
                            fullWidth
                            variant="contained">
                            <Button size="small" color="success" type="submit">
                                Save
                            </Button>

                            <Button
                                size="small"
                                color="error"
                                fullWidth
                                onClick={() => setToggleEdit(!toggleEdit)}>
                                Cancel
                            </Button>
                        </ButtonGroup>
                    </form>
                </TableCell>
            </TableRow>
            {weekDays.map((weekDay, index) => {
                const lowerCaseWeekDay = weekDay.toLowerCase()
                return (
                    <TableRow key={index}>
                        <TableCell>{weekDay}</TableCell>
                        <TableCell align="center">
                            <Dropdown
                                name={`${lowerCaseWeekDay}Start`}
                                label={plan[`${weekDay} Start`]}
                                options={planningNames}
                                value={
                                    driverPlanData[`${lowerCaseWeekDay}Start`]
                                }
                                handleChange={handleChange}
                            />
                        </TableCell>
                        <TableCell align="center">
                            <Dropdown
                                name={`${lowerCaseWeekDay}End`}
                                label={plan[`${weekDay} End`]}
                                options={planningNames}
                                value={driverPlanData[`${lowerCaseWeekDay}End`]}
                                handleChange={handleChange}
                            />
                        </TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    )
}

export default DriverPlanEdit
