import React from "react";
import { CssBaseline } from '@material-ui/core';
import { Routes } from './Routes';

function App() {
  return (
    <div style={{overflow: "hidden"}}>
      <CssBaseline/>
      <Routes/>
    </div>
  );
}

export default App;
