import React from 'react';
import {Navbar} from 'react-bootstrap';

const style = {
  color: 'red',
  fontFamily: 'Brush Script MT',
  fontSize: '40px'
}
const NavbarBrand = () => (
  <Navbar.Brand>
    {/* <h3>CheezWhizzzz</h3> */}
    <a style={style}>Chez Fromage</a>
  </Navbar.Brand>
)

export default NavbarBrand;
