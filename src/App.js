import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" render={props => (
        <React.Fragment>
          <Home />
        </React.Fragment>
      )} />
    </Router>
  );
}

export default App;
