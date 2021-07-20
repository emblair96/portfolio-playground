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
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
      <>
        <Navbar />
        <div id="Home" name="Home" />
        <Header />
        <Subheader text="SOFTWARE ENGINEER"/>
        <ComputerGraphic />
        <Divider style={{ margin: "2em" }} />
        <Subheader text="ABOUT ME."/>
        <AboutMe />
        <DeveloperJourney />
        <Divider style={{ margin: "2em" }} />
        <div id="Projects" name="Projects" />
        <Subheader text="MY WORK"/>
        <Projects />
        <Divider style={{ margin: "2em" }} />
        <Element id="Contact" name="Contact" />
        <Subheader text="CONTACT" />
        <Contact />
        <Divider style={{ margin: "4em" }} />
        <Footer />
      </>
  );
}

export default App;
