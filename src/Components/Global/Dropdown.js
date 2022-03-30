import React from 'react'
import { InputLabel, MenuItem, Select, Grid, FormControl } from '@mui/material'

const Dropdown = ({ label, options, handleChange, name, value }) => {
    const renderOptions = options.map((option, index) => (
        <MenuItem key={index} value={option}>
            {option}
        </MenuItem>
    ))

    return (
        <Grid container item>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-autowidth-label">
                    {label}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    onChange={handleChange}
                    fullWidth
                    value={value}
                    label={label}
                    name={name}
                    sx={{ padding: '0px', margin: '0px' }}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {renderOptions}
                </Select>
            </FormControl>
        </Grid>
    )
}

export default Dropdown
