import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SexSelector({setSex}) {

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={sex}
          onChange={handleChange}
        >
          <MenuItem value={0}>Male</MenuItem>
          <MenuItem value={1}>Female</MenuItem>
          <MenuItem value={2}>Both</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}