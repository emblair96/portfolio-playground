import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import './App.css';
// import { Divider } from '@material-ui/core';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import Subheader from './components/Subheader';
// import ComputerGraphic from './components/ComputerGraphic';
// import AboutMe from './components/AboutMe';
// import DeveloperJourney from './components/DeveloperJourney';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
