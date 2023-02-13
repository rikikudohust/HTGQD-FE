import * as React from 'react';
import styled from '@mui/styles/styled';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



const ProfileContainer = styled(Box)(({ theme }) => ({
  backgroundColor: darkTheme
  // padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
}));

export default function CVUI() {
  return (
    <ProfileContainer>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Personal Information</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Name</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>John Smith</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Age</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>25 years old</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Address</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>1 Main Street, Anytown, CA 00000</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Phone Number</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>555-123-4567</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Email</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>johnsmith@example.com</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Education</Typography>
        </Grid>
        ...
      </Grid>
    </ProfileContainer>
  );
}