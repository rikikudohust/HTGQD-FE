import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function EducationSelector({setEducation}) {
 
  const handleChange = (event) => {
    setEducation(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={education}
          onChange={handleChange}
        >
          <MenuItem value={"Student"}>Student</MenuItem>
          <MenuItem value={"Bachelor"}>Bachelor</MenuItem>
          <MenuItem value={"Engineer"}>Engineer</MenuItem>
          <MenuItem value={"Master"}>Master</MenuItem>
          <MenuItem value={"PhD"}>PhD</MenuItem>
          <MenuItem value={"Professor"}>Professor</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}