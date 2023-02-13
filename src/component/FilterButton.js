import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons({education, english, experience, personLanguage, sex, personSkill, ...props}) {
  const handleClick = () => {
    console.log({
      "education": education,
      "english": english,
      "experience": experience,
      "sex": sex,
      "personLanguage": personLanguage,
      "personSkill": personSkill
    })
  }
  return (
    // <Stack direction="row" spacing={2}>
      <Button size="large" variant="contained" onClick={handleClick} {...props}>Filter</Button>
    // </Stack>
  );
}