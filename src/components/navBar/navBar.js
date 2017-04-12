import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import NavbarItem from './navItem';
import SearchBar from './searchBar'
import NavbarHeader from './navBarHeader'
import RegisterButtons from '../registration_login/signUp'
import RegisterForm from '../registration_login/signUpForm'

const style = {background: "linear-gradient(to bottom, #fff200 0%,#ffc802 80%,#ffc802 95%)"}

class NavbarClass extends Component {
  render() {
    return  (
      <Navbar className="nav-bar" style={style} inverse collapseOnSelect>
        <NavbarHeader />
        <SearchBar />
        <Navbar.Collapse>
          <Nav pullRight>
            {/* <NavbarItem name="Login" />
            <NavbarItem name="Register" /> */}
            <RegisterButtons/>
          {/* <RegisterForm /> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
);
  }
}

export default NavbarClass;
