import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ExperienceSelector({setExperience}) {

  const handleChange = (event) => {
    setExperience(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={experience}
          onChange={handleChange}
        >
          <MenuItem value={0}>0 year</MenuItem>
          <MenuItem value={1}>1 year</MenuItem>
          <MenuItem value={2}>2 year</MenuItem>
          <MenuItem value={3}>3 year</MenuItem>
          <MenuItem value={4}>4 year</MenuItem>
          <MenuItem value={5}>5 year</MenuItem>
          <MenuItem value={6}>6 year</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}