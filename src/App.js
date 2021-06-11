import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Divider } from '@material-ui/core';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Subheader from './components/Subheader';
import ComputerGraphic from './components/ComputerGraphic';
import AboutMe from './components/AboutMe';
import DeveloperJourney from './components/DeveloperJourney';
import Projects from './components/Projects';

function App() {
  return (
      <>
        <Navbar />
        <div id="Home" />
        <Header />
        <Subheader text="SOFTWARE ENGINEER"/>
        <ComputerGraphic />
        <Divider style={{ margin: "2em" }} />
        <Subheader text="ABOUT ME."/>
        <AboutMe />
        <DeveloperJourney />
        <Divider style={{ margin: "2em" }} />
        <div id="Projects" />
        <Subheader text="MY WORK"/>
        <Projects />
        <Divider style={{ margin: "2em" }} />
        <div id="Contact" />
        <Subheader text="LET'S CONNECT"/>
        <Divider style={{ margin: "2em" }} />




      </>
  );
}

export default App;
