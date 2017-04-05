import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavItems from './navItem';
import SearchBar from './searchBar'
import NavbarHeader from './navBarHeader'

const NavbarClass =  () => (
  <Navbar inverse collapseOnSelect>
    <NavbarHeader />
    <SearchBar />
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItems />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarClass;
