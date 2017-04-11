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
class KevinsPage extends Component {


  render() {
    return (

      <div className="KevinsPage">
       {/* <Search> Search</Search> */}
      {/* <button onClick={(event)=>{ doSearch(94588, 3) }}
        type="button"> Click here </button> */}

      </div>



    );
  }
}


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

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/secondPage">kevins page</Link></li>

          <li><Link to="/register">Register</Link></li>

        </ul>


        <Route exact path="/" component={ConnectedHome}/>
        <Route path="/secondPage/" component={KevinsPage}/>
      <Route path="/register" component={Register}/>
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


export { ConnectedApp, ConnectedHome };
