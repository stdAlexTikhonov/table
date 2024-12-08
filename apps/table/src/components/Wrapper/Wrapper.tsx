import { Footer } from '../footer';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar';
import { Box } from '@mui/material';
import React from 'react';

export function Wrapper() {
  return (<>
    <CssBaseline />
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar />
      <Box sx={{ flexGrow: 1, overflow: 'hidden', display: 'flex' }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
    </>
  );
}
