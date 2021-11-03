import React from "react";
import { CssBaseline } from '@material-ui/core';
import { Routes } from './Routes';

function App() {
  return (
    <div style={{overflow: "hidden", position: 'relative'}}>
      <CssBaseline/>
      <Routes/>
    </div>
  );
}

export default App;
