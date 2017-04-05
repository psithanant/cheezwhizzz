import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavItems from './navItem';
import SearchBar from './searchBar'
import NavbarHeader from './navBarHeader'

const style = {background: "linear-gradient(to bottom, #fff200 0%,#ffc802 80%,#ffc802 95%)"}

const NavbarClass =  () => (
  <Navbar style={style} inverse collapseOnSelect>
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
