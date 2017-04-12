import React, {Component} from 'react';
import NavbarClass from './components/navBar/navBar'
import RegisterForm from './components/registration_login/signUpForm'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ResultTable from './components/homepage/resultTable'
import NavTable from './components/navBar/navBarResultstable'
import { connect } from 'react-redux';
import doSearch from './actions/index.js'
import DistanceTable from './components/resultTable/addressTable.jsx'
import DistanceDropDown from './components/dropdown/Distance.js'
import RatingDropDown from './components/dropdown/YelpRating.js'
import SubmitDistanceRating from './components/dropdown/SubmitButton.js'
import ZipCode from './components/SearchZipCode/ZipCode.js'
import ConnectedHome from './components/homepage/home'
import { Grid, Col } from 'react-bootstrap';

class CheeseDistance extends Component {

  render() {
    return (
      <div className="CheeseName">

        <Grid>

          <Col md={6} >
            <DistanceDropDown />
          </Col>

          <Col md={6} >
            <ZipCode />
          </Col>

          <Col md={6} >
            <SubmitDistanceRating />

          </Col>

          <Col md={6} >
            <DistanceTable />
          </Col>

          <Col md={6} >
            {/* <SubmitDistanceRating /> */}
          </Col>

        </Grid>
      </div>
    );
  }
}
// class CheeseName extends Component {
//   render() {
//     return (
//       <div className="CheesePage">
//         <NavTable />
//
//       </div>
//     );
//   }
// }


class Register extends Component {
  render() {
    return (
      <div className="register page">
        <RegisterForm />

      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
      <div className="page">
      <NavbarClass />
        {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/secondPage">Search Cheese in your location</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>

      </NavbarClass> */}
    {/* <NavTable /> */}


      <Route exact path="/" component={ConnectedHome}/>
      <Route path="/secondPage/" component={CheeseDistance}/>
      <Route path="/register" component={Register}/>
    {/* <Route path="/specificheeese" component={CheeseName}/> */}
      </div>
      </Router>
    );
  }
}

const ConnectedApp = connect(null, null)(App);

export { ConnectedApp, ConnectedHome, App };
