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

const languages = ["C", "CPlus", "Python", "Java", "Javascript", "Golang", "Solidity"];

function getStyles(language, personLanguage, theme) {
  return {
    fontWeight:
      personLanguage.indexOf(language) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function LanguageSelector({setPersonLanguage1}) {
  const theme = useTheme();
  const [personLanguage, setPersonLanguage] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonLanguage(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setPersonLanguage1(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 400 }}>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personLanguage}
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
          {languages.map((language) => (
            <MenuItem
              key={language}
              value={language}
              style={getStyles(language, personLanguage, theme)}
            >
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}