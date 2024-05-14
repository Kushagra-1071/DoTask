import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { EditNote } from '@mui/icons-material';

export default function NewTask() {
    const newHandleClick= () =>
        {
            console.log("Dialog Page for entering details");
        };
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" color="primary" onClick={newHandleClick}>
        <EditNote sx={{ mr: 1 }} />
        New Board
      </Fab>
    </Box>
  );
}
