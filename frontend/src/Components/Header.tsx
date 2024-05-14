import React from 'react';
import Grid from '@mui/material/Grid';
import SearchBar from './SearchBar';
import Logo from './logo';
import Profile from './Profile';

const Header: React.FC = () => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={2}>
        <Logo />
      </Grid>
      <Grid item xs={8}>
        <SearchBar />
      </Grid>
      <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Profile />
      </Grid>
    </Grid>
  );
};

export default Header;