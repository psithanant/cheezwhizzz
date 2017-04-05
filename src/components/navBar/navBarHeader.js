import React from 'react';
import NavbarBrand from './navBarBrand';
import {Navbar} from 'react-bootstrap';

const NavbarHeader = () => (
  <Navbar.Header>
    <NavbarBrand />
    <Navbar.Toggle />
  </Navbar.Header>
)

export default NavbarHeader;
