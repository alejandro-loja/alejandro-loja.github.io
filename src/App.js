import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import NavBar from "./pages/NavBar";
import AboutMe from "./pages/AboutMe";
import Footer from "./pages/Footer";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";


class App extends Component {
  //main container
  render() {
    return (
      <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route component={NoMatch} />
          </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
