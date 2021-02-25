import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from "./components/Menu";
import Home from "./components/Home";
import OOP from "./components/fundamentals/OOP";
import Algorithms from './components/fundamentals/Algorithms';


import Python from './components/languages/Python';
import Swift from './components/languages/Swift';

function App() {
  return (
    <Router basename="/quickhelp">
      <Route exact path='/' render={props => (
        <React.Fragment>
          <Home />
        </React.Fragment>
      )} />
      <Route path='/OOP' render={props => (
        <React.Fragment>
          <OOP />
          <Menu />
        </React.Fragment>
      )} />
      <Route path='/algorithms' render={props => (
        <React.Fragment>
          <Algorithms />
          <Menu />
        </React.Fragment>
      )} />
      <Route path='/python' render={props => (
        <React.Fragment>
          <Python />
          <Menu />
        </React.Fragment>
      )} />
      <Route path='/swift' render={props => (
        <React.Fragment>
          <Swift />
          <Menu />
        </React.Fragment>
      )} />
    </Router>
  );
}

export default App;
