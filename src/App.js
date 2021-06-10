import React from 'react';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import './App.css';
import { Container, Grid } from '@material-ui/core';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Subheader from './components/Subheader';
import ComputerGraphic from './components/ComputerGraphic';
import AboutMe from './components/AboutMe';

function App() {
  return (
      <>
        <Navbar />
        <Header />
        <Subheader />
        <ComputerGraphic />
      </>
  );
}

export default App;
