import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  AOS.init({
    once: true
  });
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/portfolio-playground" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
