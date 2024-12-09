import { Footer } from '../footer';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar';
import { Box, Container } from '@mui/material';

import styles from './Wrapper.module.scss';

export function Wrapper() {
  return (<>
    <CssBaseline />
    <Box className={styles.root}>
      <AppBar />
        <Container className={styles.container} maxWidth='xl'>
          <Outlet />
        </Container>
      <Footer />
    </Box>
    </>
  );
}
