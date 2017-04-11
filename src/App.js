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
import NavTable from './components/navBar/navBarResultstable'
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

class CheeseNameView extends Component {
  render() {
    return (
      <div className="CheeseNameView">
        {/* <NavTable /> */}
      </div>
    );
  }
}
// home ------------------------------------------------------------------------------------------------
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
            <Menu seeAllCheeses={this.props.seeAllCheeses} getRandomCheese={this.props.getRandomCheese} />
          </Col>
          <Col md={6} >
            <NavTable />
            <ResultTable cheeses={this.props.results} />
          </Col>
        </Grid>

      </div>
    );
  }
}

const mapStateToPropsHome = (state, ownProps) => {
  return {
    results: state.results,
  }
}

const mapDispatchToPropsHome = (dispatch, ownProps) => {
  return {
    seeAllCheeses: () => {
      dispatch({type: 'SEE_ALL_CHEESES',
                payload: fetch('http://cheeswhiz.herokuapp.com/api/cheese')
                           .then(function(res) { return res.json(); })
               })
    },
    getRandomCheese: () => {
      dispatch({type: 'GET_RANDOM_CHEESE',
                payload: fetch('http://cheeswhiz.herokuapp.com/api/cheese/random/5/hard')
                           .then(function(res) { return res.json(); })
              })
    }
  }
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
        <li><Link to="/specific">About</Link></li>
        </ul>

        <Route exact path="/" component={ConnectedHome}/>
      <Route exact path="/specific" component={CheeseNameView}/>
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
