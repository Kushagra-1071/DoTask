import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CalendarToday, Dashboard, Group, Logout, PieChart } from '@mui/icons-material';
import Header from './Header';



export default function Sidebar() {
  return (
    <Box flex={1}
    p={2}>
    <List>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Dashboard/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <CalendarToday/>
        </ListItemIcon>
        <ListItemText primary="Calendar View" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Group/>
        </ListItemIcon>
        <ListItemText primary="Team" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <PieChart/>
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItemButton>
    </ListItem>
    <Divider />
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Logout/>
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </ListItem>  
</List>
</Box>
  );
}
