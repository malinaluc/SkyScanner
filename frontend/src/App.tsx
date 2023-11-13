import React from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function App()  {
  return <div>
    <Checkbox {...label} />

    <Badge badgeContent={4} color="primary">
    </Badge>
  </div>
}

export default App;
