import React from 'react';
import { NavItem } from 'react-bootstrap';

const NavbarItem = (props) => (
  <NavItem eventKey={1} href="#">{props.name}</NavItem>
)

export default NavbarItem;
