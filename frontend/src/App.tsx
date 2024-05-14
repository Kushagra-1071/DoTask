import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import BoardCard from './Components/Board';
import { Box, Container, Divider, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FormDialog from './Components/FormDialog';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const boardsData = [
  { id: 1, title: 'Software Development', content: 'This board contains detail about software development team board and their associated tasks' },
  { id: 2, title: 'Design Team', content: 'This board contains Tasks for design team and the work they all have to complete' },
  { id: 3, title: 'Marketing Team', content: 'This board contains Tasks for marketing team and the work they all have to complete'},
  
];
function App() {
  return (
    <div className="App">
        <div>
            <Sidebar/>
            </div>
            <>
            <FormDialog/>
      </>
          <div className='card-container'>
            {boardsData.map((board) => 
      (<BoardCard key={board.id} title={board.title} content={board.content} />)
      )}      
      </div>
      
    </div>
  );
}

export default App;
