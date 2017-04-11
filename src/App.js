import React, {Component} from 'react';
import NavbarClass from './components/navBar/navBar'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux';
import doSearch from './actions/index.js'
import DistanceTable from './components/resultTable/addressTable.jsx'
import DistanceDropDown from './components/dropdown/Distance.js'
import RatingDropDown from './components/dropdown/YelpRating.js'
import SubmitDistanceRating from './components/dropdown/SubmitButton.js'
import ZipCode from './components/SearchZipCode/ZipCode.js'
class KevinsPage extends Component {
import ConnectedHome from './components/homepage/home'

class FindStore extends Component {
  render() {
    return (
      <div className="KevinsPage">
       {/* <Search> Search</Search> */}
      {/* <button onClick={(event)=>{ doSearch(94588, 3) }}
        type="button"> Click here </button> */}
        <Grid>

          <Col md={6} >
            <DistanceDropDown />
          </Col>

          <Col md={6} >
            <ZipCode />
          </Col>

          <Col md={6} >
            <RatingDropDown />
          </Col>

          <Col md={6} >
            <DistanceTable />
          </Col>

          <Col md={6} >
            <SubmitDistanceRating />
          </Col>

        </Grid>

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
