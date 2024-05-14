import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { EditNote, Tag } from '@mui/icons-material';
import { Divider, InputAdornment, MenuItem, Typography } from '@mui/material';
import CalendarTime from './CalendarTime';


const priorities = [
  {
    value: 'High',
    label: '!!!',
  },
  {
    value: 'Medium',
    label: '!!',
  },
  {
    value: 'Low',
    label: '!',
  }
];

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" sx={{color:'info'}}onClick={handleClickOpen}>
      <EditNote sx={{ mr: 1 }} />
        <Typography>New Task</Typography>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);  //To be edited
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log("Form is working fine and connections have to be made.");
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Title"
            type="title"
            fullWidth
            variant="filled"
            color="info"
          />
          <TextField
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=" "
          variant="filled"
          fullWidth/>
          <CalendarTime/>
          <Divider/>
          <TextField
          id="priority"
          select
          label="Priority"
          defaultValue=" "
          variant="filled"
          fullWidth
        >
          {priorities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
        id="Tags"
        label="Tags"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Tag/>
            </InputAdornment>
          ),
        }}
        variant="standard"
        fullWidth
      />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
