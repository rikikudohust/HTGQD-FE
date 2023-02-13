import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const skills = ["Teamwork", "Office Information ", "Analysis", "InformationProcessing"];

function getStyles(skill, personSkill, theme) {
  return {
    fontWeight:
      personSkill.indexOf(skill) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SkillSelector({setPersonSkill1}) {
  const theme = useTheme();
  const [personSkill, setPersonSkill] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonSkill(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setPersonSkill1(
      typeof value === 'string' ? value.split(',') : value,
    )
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 400 }}>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personSkill}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {skills.map((skill) => (
            <MenuItem
              key={skill}
              value={skill}
              style={getStyles(skill, personSkill, theme)}
            >
              {skill}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}