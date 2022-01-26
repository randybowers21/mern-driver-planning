import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({title, options, selected, setSelected}) {
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">{title}</InputLabel>
        <Select
          labelId="select-label"
          id="demo-simple-select"
          value={selected}
          label={selected}
          onChange={handleChange}
        >
        {options.map((option) =>{
            return <MenuItem key={option} value={option}>{option}</MenuItem>
        })}
        </Select>
      </FormControl>
    </Box>
  );
}