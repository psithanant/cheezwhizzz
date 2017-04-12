import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import NavbarItem from './navItem';
import SearchBar from './searchBar'
import NavbarHeader from './navBarHeader'
import RegisterButtons from '../registration_login/signUp'
import RegisterForm from '../registration_login/signUpForm'

const style = {
  background: "linear-gradient(to bottom, #fff200 0%,#ffc802 80%,#ffc802 95%)",
  // min-height: "80px"
}

class NavbarClass extends Component {
  render() {
    return  (
      <Navbar className="nav-bar" style={style} inverse collapseOnSelect>
        <NavbarHeader />
        <SearchBar />
        <Navbar.Collapse>
          <Nav pullRight>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/secondPage">Search Cheese in your location</Link></li>
              <li><Link to="/register">Register</Link></li>
            {/* <RegisterButtons/> */}
            </ul>

            {/* <NavbarItem name="Login" />
            <NavbarItem name="Register" /> */}

          {/* <RegisterForm /> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
);
  }
}

export default NavbarClass;
