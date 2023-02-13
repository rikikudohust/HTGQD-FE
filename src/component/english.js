import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function EnglishSelector({setEnglish}) {
  const handleChange = (event) => {
    setEnglish(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={english}
          onChange={handleChange}
        >
          <MenuItem value={1}>A1</MenuItem>
          <MenuItem value={2}>A2</MenuItem>
          <MenuItem value={3}>B1</MenuItem>
          <MenuItem value={4}>B2</MenuItem>
          <MenuItem value={5}>C1</MenuItem>
          <MenuItem value={6}>C2</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}