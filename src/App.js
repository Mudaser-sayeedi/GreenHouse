import { Skeleton } from '@mui/material';
import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
  );
}

export default App;
