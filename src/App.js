import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Subheader from './components/Subheader';
import ComputerGraphic from './components/ComputerGraphic';
import AboutMe from './components/AboutMe';
import DeveloperJourney from './components/DeveloperJourney';

function App() {
  return (
      <>
        <Navbar />
        <div id="Home" />
        <Header />
        <Subheader text="SOFTWARE ENGINEER"/>
        <ComputerGraphic />
        {/* <Subheader text="HI, I'M EMILY."/> */}
        <AboutMe />
        <DeveloperJourney />
        <div id="Projects" />
        <Subheader text="MY WORK"/>
        <div id="Contact" />


      </>
  );
}

export default App;
