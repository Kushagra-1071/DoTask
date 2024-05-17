import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import BoardCard from "./Components/Board";
import { Box, Container, Divider, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import FormDialog from "./Components/FormDialog";
import Header from "./Components/Header";
const boardsData = [
  {
    id: 1,
    title: "Software Development",
    content:
      "This board contains detail about software development team board.",
  },
  {
    id: 2,
    title: "Design Team",
    content:
      "This board contains Tasks for design team and the work they all have to complete",
  },
  {
    id: 3,
    title: "Marketing Team",
    content:
      "This board contains Tasks for marketing team and the work they all have to complete",
  },
  
  
];
function App() {
  return (
    <Box>
      <Stack direction="column" spacing={4}>
      <Header />
      <Stack direction="row" spacing={4}>
        <Sidebar />
        <Grid className="card-grid" container spacing={5} style={{ marginTop: "20px" }}>
          {boardsData.map((board) => (
            <BoardCard
              key={board.id}
              title={board.title}
              content={board.content}
            />
          ))}
        </Grid>
      </Stack>
      </Stack>
      <>
        <FormDialog />
      </>
      
    </Box>
  );
}

export default App;
