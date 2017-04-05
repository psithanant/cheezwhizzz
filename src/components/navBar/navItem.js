import React from 'react';
import { NavItem } from 'react-bootstrap';

const NavItems = () => {
  return (
    <div>
      <NavItem eventKey={1} href="#">Login</NavItem>
      <NavItem eventKey={2} href="#">Register</NavItem>
    </div>
  )
}

export default NavItems;
