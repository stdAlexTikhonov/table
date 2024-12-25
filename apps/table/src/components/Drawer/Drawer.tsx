import * as React from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { examples, titles, icons, colors } from './utils';
import * as Icons from "@mui/icons-material";
import { Link } from 'react-router-dom';



export const Drawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {examples.map((item) => {
          const Icon = Icons[icons[Math.floor(Math.random() * icons.length)]]
          return (
            <ListItem key={item} disablePadding>
              <Link to={`/table/${item}`}>
                <ListItemButton>
                  <ListItemIcon>
                    <Icon sx={{ color: colors[Math.floor(Math.random() * colors.length)][500]}} />
                  </ListItemIcon>
                  <ListItemText primary={titles[item]} />
                </ListItemButton>
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <MuiDrawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </MuiDrawer>
    </div>
  );
}
