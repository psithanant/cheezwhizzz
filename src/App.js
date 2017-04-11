import React, {Component} from 'react';
import buttonGroupInstance from './components/homepage/filterButtonGroup'
import NavbarClass from './components/navBar/navBar'
import { Grid, Col } from 'react-bootstrap';
import Menu from './components/homepage/filterButtonGroup'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ResultTable from './components/homepage/resultTable'
import { connect } from 'react-redux';
import ConnectedHome from './components/homepage/home'

class FindStore extends Component {
  render() {
    return (
      <div className="FindStore">
        <p>hiiii</p>
      </div>
    );
  }
}

// App -------------------------------------------------------------------------------------------------
class App extends Component {
  render() {
    return (
      <Router>
      <div className="page">
      <NavbarClass />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <Route exact path="/" component={ConnectedHome}/>
      <Route path="/about" component={FindStore}/>
      </div>
      </Router>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
}
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
// App -------------------------------------------------------------------------------------------------

export { ConnectedApp, ConnectedHome };
