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

class FindStore extends Component {
  render() {
    return (
      <div className="FindStore">
        <p>hiiii</p>
      </div>
    );
  }
}
// home ------------------------------------------------------------------------------------------------
// PLEASE DO NOT MOVE THE ORDER IN HERE (HOME) AND IN APP AS THEY NEED TO BE IN THIS ORDER TO WORK (HOISTING)
class Home extends Component {
  render() {
    return (
      <div className="Home">

        {/* <div className="App-header">
        </div> */}
        <main>
          {buttonGroupInstance}
        </main>
        <Grid>
          <Col md={6} >
            <Menu />
          </Col>
          <Col md={6} >
            <ResultTable cheeses={this.props.results} />
          </Col>
        </Grid>

      </div>
    );
  }
}

const mapStateToPropsHome = (state, ownProps) => {
  return {

  }
}

const mapDispatchToPropsHome = (dispatch, ownProps) => {
  return {

  };
}
const ConnectedHome = connect(mapStateToPropsHome, mapDispatchToPropsHome)(Home);
// home ------------------------------------------------------------------------------------------------

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
