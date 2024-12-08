import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Drawer } from '../Drawer';

export function AppBar() {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Drawer />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Table
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </MuiAppBar>
  );
}
