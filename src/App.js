import React from 'react';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import './App.css';
import { Container, Grid, Divider } from '@material-ui/core';
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
        <Subheader text="SOFTWARE ENGINEER"/>
        <ComputerGraphic />
        {/* <Subheader text="HI, I'M EMILY."/> */}
        <AboutMe />
        <Subheader text="MY WORK"/>

      </>
  );
}

export default App;
