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
import doSearch from './actions/index.js'
import DistanceTable from './components/resultTable/addressTable.jsx'

class KevinsPage extends Component {
  render() {
    return (
      <div className="KevinsPage">
        <p>hiiii</p>
      {/* <Search> Search</Search> */}
      <button onClick = {doSearch(94588, 3)}
        type ="button"> Click here </button>
        <DistanceTable />
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
          <li><Link to="/secondPage">kevins page</Link></li>
        </ul>

        <Route exact path="/" component={ConnectedHome}/>
        <Route path="/secondPage/" component={KevinsPage}/>
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
