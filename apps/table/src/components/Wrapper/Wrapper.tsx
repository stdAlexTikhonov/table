import { Footer } from '../footer';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar';
import { Box, Container } from '@mui/material';
import React from 'react';

export function Wrapper() {
  return (<>
    <CssBaseline />
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar />
        <Container style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }} maxWidth='xl'>
          <Outlet />
        </Container>
      <Footer />
    </Box>
    </>
  );
}
