import * as React from 'react';
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AvatarGroup, Box, Button, Menu, MenuItem } from '@mui/material';
import { AccessTime, ChevronRight, Delete, Edit } from '@mui/icons-material';
import ProgressBar from './ProgressBar';


interface BoardProps
{
    title: string;
    content: string;
}


export default function BoardCard(props: BoardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
const onVertIconClick=(event: React.MouseEvent<HTMLElement>) => 
    {
        setAnchorEl(event.currentTarget);
    };
const handleClose=() =>
    {
        setAnchorEl(null);
    };
  return (
    <Box flex={4}>
    <Card sx={{ maxWidth: 345}}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={onVertIconClick}>
            <MoreVertIcon/>
          </IconButton>
          }
        title={props.title}
        
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose} >
        <MenuItem onClick={handleClose}><Delete fontSize="small"/>  Delete</MenuItem>
        <MenuItem onClick={handleClose}><Edit fontSize="small"/>  Edit</MenuItem>
      </Menu>
      <CardContent>
      <Typography variant="body2" color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>
      <ProgressBar/>
      <CardActions disableSpacing>
        <IconButton aria-label="Collaborators">
        <AvatarGroup max={2}>
        <Avatar>KD</Avatar>
        <Avatar>SS</Avatar>
        <Avatar>VR</Avatar>
        </AvatarGroup>
        </IconButton>
        <IconButton aria-label="Time-Left">
          <AccessTime/> <Typography variant="caption"sx={{backgroundColor:'#ffeb3b',color: '#ffc107', borderRadius:2 }}> 1 day left</Typography>
        </IconButton>
        <Button variant="contained" color="info"endIcon={<ChevronRight />}>
  View
</Button>
      </CardActions>
      
    </Card>
    </Box>
  );
}
