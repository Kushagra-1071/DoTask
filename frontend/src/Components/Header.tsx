import { ManageAccounts, Settings } from '@mui/icons-material';
import { AppBar, Avatar, Box, Button, InputBase, Menu, MenuItem, TextField, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar=styled(Toolbar) (
  {
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"#03a9f4"

  }
)
const Search=styled("div")(({theme}) => (
  {
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%" ,

  }
));
const Icons=styled(Box)(({}) => (
  {
    display:"flex",
    alignItems:"center",
    gap:"10 px",
    
  }
));

const Header = () => {
  const [open,setOpen]=useState(false);
  return (
    <AppBar position="sticky">
    <StyledToolbar>
      <Typography variant="h6">
        DO TASK
      </Typography>
      <Search>
      <InputBase placeholder="Search.."/>
      </Search>
      <Icons> 
        <Button onClick={e=> {setOpen(true)}}>
          
          <Avatar sx={{width: 30, height: 30, mr: 2}}>KD</Avatar>
          <Typography sx={{color:"#bdbdbd"}}>Kushagra Dhingra</Typography>
        </Button>
      </Icons>
      </StyledToolbar>  
      <Menu
        id="profile-menu"
        aria-labelledby="profile menu"
        open={open}
        onClose={e => {setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>
        <ManageAccounts/>
        <Typography>Profile</Typography>
        </MenuItem>
        <MenuItem >
        <Settings/>
        <Typography>Settings</Typography>
        </MenuItem>
        
      </Menu>
    </AppBar>
  )
}

export default Header