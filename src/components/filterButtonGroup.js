import React, { Component } from 'react';
import { ButtonGroup, Button, MenuItem, DropdownButton } from 'react-bootstrap';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ButtonGroup vertical bsSize="large">
        <Button>See All Cheeses</Button>
        <DropdownButton  bsSize="large" title="Search for Cheese" id="bg-vertical-dropdown-1">
          <DropdownButton title="Search By Firmness" id="bg-vertical-dropdown-1">
              <MenuItem eventKey="1">hard</MenuItem>
              <MenuItem eventKey="2">semi-hard</MenuItem>
              <MenuItem eventKey="3">soft</MenuItem>
              <MenuItem eventKey="4">semi-soft</MenuItem>
          </DropdownButton>
          <DropdownButton title="Search By Animal" id="bg-vertical-dropdown-1">
              <MenuItem eventKey="1">cow</MenuItem>
              <MenuItem eventKey="2">goat</MenuItem>
              <MenuItem eventKey="3">sheep</MenuItem>
              <MenuItem eventKey="4">buffalo</MenuItem>
          </DropdownButton>
          <DropdownButton title="Search By Cheese Name" id="bg-vertical-dropdown-1">
            <MenuItem eventKey="1">
              <input type="text" onClick={(event) => {
                event.stopPropagation();
              }} />
            </MenuItem>
          </DropdownButton>
          <DropdownButton title="Search for Substitute" id="bg-vertical-dropdown-1">
            <MenuItem eventKey="2">
              <input type="text" onClick={(event) => {
                event.stopPropagation();
              }} />
            </MenuItem>
          </DropdownButton>
        </DropdownButton>

        <Button>Find Cheese Shop</Button>
        <Button>Surprise Me!</Button>
        <Button>My favorites</Button>
      </ButtonGroup>
     )
  }
}

export default Menu;
