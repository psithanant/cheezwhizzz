import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavbarItem from './navItem';
import SearchBar from './searchBar'
import NavbarHeader from './navBarHeader'

const style = {background: "linear-gradient(to bottom, #fff200 0%,#ffc802 80%,#ffc802 95%)"}

class NavbarClass extends Component {
  render() {
    return  (
      <Navbar style={style} inverse collapseOnSelect>
        <NavbarHeader />
        <SearchBar />
        <Navbar.Collapse>
          <Nav pullRight>
            <NavbarItem name="Login" />
            <NavbarItem name="Register" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
);
  }
}

export default NavbarClass;
